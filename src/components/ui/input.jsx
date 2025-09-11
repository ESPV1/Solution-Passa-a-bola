import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import { Eye, EyeClosed } from 'lucide-react';

export default function Input({
  register,
  label,
  type,
  name,
  errors,
  required,
  inputStyle,
  containerStyle
}) {
  const defaultInputClasses = "block px-2.5 pb-2.5 pt-4 mb-1 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-500 peer caret-rose-500 transition-colors duration-300 autofill:bg-transparent autofill:text-gray-800 selection:bg-rose-500 selection:text-white";

  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

    setTimeout(() => { inputRef.current?.focus() }, 0);
  };

  const handleFocus = (e) => {
    const input = e.target;
    const length = input.value.length;
    setTimeout(() => { input.setSelectionRange(length, length) }, 0);
  };

  return (
    <div className={clsx("relative w-full mb-6", containerStyle)}>
      <input
        {...register(name)}
        ref={inputRef}
        id={`${name}-input`}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        required={required}
        className={clsx(defaultInputClasses, inputStyle)}
        placeholder=" "
        onFocus={handleFocus}
        style={{
          WebkitBoxShadow: '0 0 0 1000px white inset',
          WebkitTextFillColor: '#1f2937'
        }}
      />
      {type === 'password' && (
        <button
          type="button" onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/5 text-gray-500 transition-colors duration-200 focus:outline-none focus:text-rose-500"
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
        >
          {showPassword ? <EyeClosed className="hover:cursor-pointer" /> : <Eye className="hover:cursor-pointer" />}
        </button>
      )}
      <label htmlFor={`${name}-input`} className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-rose-500 peer-focus:dark:text-rose-500 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 hover:cursor-text">
        {label}
      </label>
      <p className="text-sm pl-1 text-red-600">
        {errors[name] ? errors[name].message : '\u00A0'}
      </p>
    </div>
  )
}