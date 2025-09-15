import React from 'react';

export default function SubmitButton({
  isEnabled,
  text = "Enviar",
  className = ""
}) {
  return (
    <button
      className={`w-full py-2.5 mb-6 rounded-lg uppercase tracking-widest text-lg font-medium transition-colors duration-200 ${
        isEnabled 
          ? 'text-white bg-rose-500 hover:bg-rose-600 hover:cursor-pointer' 
          : 'text-gray-400 bg-gray-300 cursor-not-allowed'
      } ${className}`}
      type="submit"
      disabled={!isEnabled}
    >
      {text}
    </button>
  );
}