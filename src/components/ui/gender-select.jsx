import React from 'react';

export default function GenderSelect({
  register,
  errors,
  options
}) {
  return (
    <div className="relative w-full">
      <select
        {...register('gender', { required: true })}
        id="gender-input" 
        name="gender" 
        required
        className="block px-2.5 pb-2.5 pt-4 mb-1 w-full text-sm text-gray-800 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-500 focus:outline-none focus:ring-0 focus:border-rose-500 peer caret-rose-500 transition-colors duration-300"
      >
        <option value="">Selecione</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <label
        htmlFor="gender-input"
        className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-rose-500 peer-focus:dark:text-rose-500 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 hover:cursor-text"
      >
        Gênero
      </label>
      <p className="text-sm pl-1 text-red-600">
        {errors?.gender?.message ?? '\u00A0'}
      </p>
    </div>
  );
}