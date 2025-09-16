import React from 'react';
import { Link } from "react-router-dom";

export default function Checkbox({
  id,
  checked,
  onChange,
  children,
  className = ""
}) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mt-1 h-4 w-4 text-rose-500 border-gray-300 rounded focus:ring-rose-500 focus:ring-2 accent-rose-500"
      />
      <label htmlFor={id} className="text-sm text-gray-700 leading-5">
        {children}
      </label>
    </div>
  );
}

export function CheckboxWithLink({
  id,
  checked,
  onChange,
  text,
  linkText,
  linkTo,
  afterLinkText = "",
  className = ""
}) {
  return (
    <Checkbox
      id={id}
      checked={checked}
      onChange={onChange}
      className={className}
    >
      {text}{' '}
      <Link 
        to={linkTo}
        className="text-rose-500 underline hover:no-underline"
        target="_blank"
      >
        {linkText}
      </Link>
      {afterLinkText && ' ' + afterLinkText}
    </Checkbox>
  );
}