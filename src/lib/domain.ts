/**
 * Extract the registrable domain from whatever the visitor typed.
 *
 * Mirrors what the extension does before generating a password:
 *   - `accounts.google.com`            → `google.com`
 *   - `https://github.com/login`       → `github.com`
 *   - `WWW.Stripe.com`                 → `stripe.com`
 *   - `example.co.uk`                  → `example.co.uk` (PSL-aware)
 *
 * When tldts can't parse the input (raw words, IPs, localhost) we fall
 * back to a lowercased + trimmed version so the user still gets *some*
 * derivation rather than an error.
 */
import { getDomain } from "tldts";

export function registrableDomain(input: string): string {
  const trimmed = input.trim().toLowerCase();
  if (trimmed.length === 0) return "";
  const domain = getDomain(trimmed, { allowPrivateDomains: false });
  return domain && domain.length > 0 ? domain : trimmed;
}
