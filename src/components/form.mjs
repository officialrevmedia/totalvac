import { siteConfig, hasEmail, phoneLabel, phoneHref } from '../config/siteConfig.mjs';
import { serviceOptions } from '../content/services.mjs';
import { iconArrow, iconPhone } from './icons.mjs';

const field = ({
  id,
  label,
  type = 'text',
  required = false,
  hint = '',
  hintAfter = false,
  autocomplete = '',
  extra = ''
}) => `
<div class="field">
  <label class="field__label" for="${id}">${label}${
    required ? '<span class="field__req" aria-hidden="true">*</span><span class="visually-hidden"> required</span>' : ''
  }</label>
  ${hint ? `<p class="field__hint${hintAfter ? ' field__hint--after' : ''}" id="${id}-hint">${hint}</p>` : ''}
  <input type="${type}" id="${id}" name="${id}"${required ? ' required' : ''}${
    autocomplete ? ` autocomplete="${autocomplete}"` : ''
  }${hint ? ` aria-describedby="${id}-hint ${id}-error"` : ` aria-describedby="${id}-error"`}${extra}>
  <p class="field__error" id="${id}-error" aria-live="polite"></p>
</div>`;

export const QuoteForm = () => `
<form class="form" data-service-form ${
  siteConfig.formEndpoint ? `action="${siteConfig.formEndpoint}" method="post"` : ''
} enctype="multipart/form-data">

  <div class="error-summary" data-error-summary role="alert"></div>

  <div class="form__grid form__grid--2">
    ${field({ id: 'name', label: 'Full name', required: true, autocomplete: 'name' })}
    ${field({ id: 'company', label: 'Company or property name', autocomplete: 'organization' })}
    ${field({ id: 'phone', label: 'Phone', type: 'tel', required: true, autocomplete: 'tel' })}
    ${field({ id: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' })}
  </div>

  ${field({
    id: 'address',
    label: 'Service address',
    required: true,
    autocomplete: 'street-address',
    hint: 'Where the work takes place, including unit or building reference.'
  })}

  <div class="form__grid form__grid--2">
    <div class="field">
      <label class="field__label" for="service">Service needed<span class="field__req" aria-hidden="true">*</span><span class="visually-hidden"> required</span></label>
      <select id="service" name="service" required aria-describedby="service-error">
        <option value="">Select a service</option>
        ${serviceOptions.map((option) => `<option value="${option}">${option}</option>`).join('\n        ')}
      </select>
      <p class="field__error" id="service-error" aria-live="polite"></p>
    </div>
    ${field({
      id: 'volume',
      label: 'Approximate volume',
      hint: 'Litres, gallons, tank size or your best estimate.',
      hintAfter: true
    })}
  </div>

  <div class="field">
    <label class="field__label" for="material">Material or liquid description<span class="field__req" aria-hidden="true">*</span><span class="visually-hidden"> required</span></label>
    <p class="field__hint" id="material-hint">Tell us what the liquid is and where it comes from. If you are not certain, say so rather than guessing.</p>
    <textarea id="material" name="material" rows="4" required aria-describedby="material-hint material-error"></textarea>
    <p class="field__error" id="material-error" aria-live="polite"></p>
  </div>

  <div class="field">
    <label class="field__label" for="access">Site access details</label>
    <p class="field__hint" id="access-hint">Parking, gate codes, hose distance, loading restrictions, or check-in requirements.</p>
    <textarea id="access" name="access" rows="3" aria-describedby="access-hint access-error"></textarea>
    <p class="field__error" id="access-error" aria-live="polite"></p>
  </div>

  <div class="form__grid form__grid--2">
    ${field({ id: 'preferred_date', label: 'Preferred service date', type: 'date' })}
    <fieldset class="field" style="border:0;padding:0;margin:0">
      <legend class="field__label">Urgency</legend>
      <div class="radio-row">
        ${['Routine', 'Soon', 'Urgent']
          .map(
            (level, i) => `<label class="radio-chip">
          <input type="radio" name="urgency" value="${level}"${i === 0 ? ' checked' : ''}>
          <span>${level}</span>
        </label>`
          )
          .join('\n        ')}
      </div>
    </fieldset>
  </div>

  <div class="field">
    <label class="field__label" for="message">Message</label>
    <p class="field__hint" id="message-hint">Anything else that helps us scope the job.</p>
    <textarea id="message" name="message" rows="4" aria-describedby="message-hint message-error"></textarea>
    <p class="field__error" id="message-error" aria-live="polite"></p>
  </div>

  ${
    siteConfig.formSupportsFileUpload
      ? `<div class="field">
    <label class="field__label" for="photos">Photos</label>
    <p class="field__hint" id="photos-hint">Optional. Photos of the access point and the system help us assess the request.</p>
    <input type="file" id="photos" name="photos" accept="image/*" multiple aria-describedby="photos-hint photos-error">
    <p class="field__error" id="photos-error" aria-live="polite"></p>
  </div>`
      : ''
  }

  <div class="form__hp" aria-hidden="true">
    <label for="company_website">Leave this field empty</label>
    <input type="text" id="company_website" name="company_website" tabindex="-1" autocomplete="off">
  </div>

  <div class="consent">
    <input type="checkbox" id="consent" name="consent" required aria-describedby="consent-error">
    <label for="consent">I agree that TotalVac Solutions may use these details to respond to my service request.<span class="field__req" aria-hidden="true">*</span><span class="visually-hidden"> required</span></label>
  </div>
  <p class="field__error" id="consent-error" aria-live="polite"></p>

  <div class="form-status" data-form-status role="status" aria-live="polite"></div>

  <div class="btn-row">
    <button class="btn" type="submit" data-form-submit>Send service request ${iconArrow()}</button>
    <a class="btn btn--ghost" href="${phoneHref()}">${iconPhone()}<span>${phoneLabel()}</span></a>
  </div>

  <p class="field__hint">Fields marked with an asterisk are required. Please do not send account numbers, payment details, or other sensitive information through this form.${
    hasEmail() ? ` You can also email <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>.` : ''
  }</p>
</form>`;

export default QuoteForm;
