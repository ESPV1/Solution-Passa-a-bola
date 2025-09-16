import React from 'react';
import { CheckboxWithLink } from '../ui/checkbox';

export default function TermsAcceptance({
  acceptPrivacy,
  setAcceptPrivacy,
  acceptTerms,
  setAcceptTerms
}) {
  return (
    <div className="space-y-4 mb-6">
      <CheckboxWithLink
        id="privacy-checkbox"
        checked={acceptPrivacy}
        onChange={(e) => setAcceptPrivacy(e.target.checked)}
        text="Li e concordo com os termos de"
        linkText="política de privacidade"
        linkTo="/privacy-policy"
      />

      <CheckboxWithLink
        id="terms-checkbox"
        checked={acceptTerms}
        onChange={(e) => setAcceptTerms(e.target.checked)}
        text="Eu aceito as"
        linkText="regras e termos"
        linkTo="/terms-conditions"
        afterLinkText="da empresa Passa a Bola"
      />
    </div>
  );
}