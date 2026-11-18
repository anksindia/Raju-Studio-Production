"use client";

import { useState, type FormEvent } from "react";
import { shootTypes, studio } from "@/content/site";

type Errors = Partial<Record<"name" | "shootType" | "message", string>>;

function formatDate(value: string) {
  if (!value) return "";
  const [y, m, d] = value.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Builds a prefilled WhatsApp message from the form and opens it. */
export function InquiryForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [recipient, setRecipient] = useState<string>(studio.phones[0].whatsapp);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const name = get("name");
    const shootType = get("shootType");
    const date = get("date");
    const venue = get("venue");
    const message = get("message");

    const next: Errors = {};
    if (!name) next.name = "Please tell us your name.";
    if (!shootType) next.shootType = "Please choose a shoot type.";
    if (!message) next.message = "Please add a short message.";
    setErrors(next);
    const firstInvalid = (["name", "shootType", "message"] as const).find((k) => next[k]);
    if (firstInvalid) {
      e.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const lines = [
      `Hello ${studio.name}, I'd like to inquire about a shoot.`,
      "",
      `Name: ${name}`,
      `Shoot type: ${shootType}`,
      date ? `Event date: ${formatDate(date)}` : null,
      venue ? `Venue: ${venue}` : null,
      "",
      message,
    ].filter((l): l is string => l !== null);

    const url = `${recipient}?text=${encodeURIComponent(lines.join("\n"))}`;
    // `noopener` in the features string makes window.open return null, so
    // detach the opener manually and fall back to same-tab if blocked.
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="field__error">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-describedby="inquiry-hint">
      <div className="field">
        <label htmlFor="inq-name">Name</label>
        <input
          id="inq-name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {err("name")}
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="inq-type">Shoot type</label>
          <select
            id="inq-type"
            name="shootType"
            required
            defaultValue=""
            aria-invalid={errors.shootType ? true : undefined}
            aria-describedby={errors.shootType ? "shootType-error" : undefined}
          >
            <option value="" disabled>
              Choose one
            </option>
            {shootTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
          {err("shootType")}
        </div>
        <div className="field">
          <label htmlFor="inq-date">
            Event date <span className="optional">(optional)</span>
          </label>
          <input id="inq-date" name="date" type="date" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="inq-venue">
          Venue <span className="optional">(optional)</span>
        </label>
        <input id="inq-venue" name="venue" placeholder="e.g. Almora" />
      </div>
      <div className="field">
        <label htmlFor="inq-message">Message</label>
        <textarea
          id="inq-message"
          name="message"
          required
          placeholder="Tell us a little about your day and what you have in mind."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {err("message")}
      </div>
      <fieldset>
        <legend>Send to</legend>
        {studio.phones.map((p) => (
          <label key={p.e164} className="radio">
            <input
              type="radio"
              name="recipient"
              value={p.whatsapp}
              checked={recipient === p.whatsapp}
              onChange={() => setRecipient(p.whatsapp)}
            />
            {p.display}
          </label>
        ))}
      </fieldset>
      <div className="form__foot">
        <button type="submit" className="btn btn--solid">
          Continue to WhatsApp
        </button>
        <p id="inquiry-hint" className="form__hint">
          Opens WhatsApp with your details filled in. Nothing is sent until you press send there.
        </p>
      </div>
    </form>
  );
}
