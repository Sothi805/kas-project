import React from "react";

interface FormInputProps {
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = "text",
  value,
  onChange,
  disabled = false,
  name,
}) => {
  return (
    <div className="w-full">
      <div
        className="
          relative
          bg-transparent backdrop-blur-sm
          border-b-2 border-white/30
          transition-all
          focus-within:border-white/70
        "
      >
        {/* Input */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder=" "
          className="
            peer w-full bg-transparent
            pt-6 pb-2
            text-white
            outline-none
            disabled:opacity-60
          "
        />

        {/* Floating label */}
        <label
          htmlFor={name}
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            text-sm text-white/60
            pointer-events-none
            transition-all duration-200 ease-out

            peer-focus:top-1
            peer-focus:text-xs
            peer-focus:text-white/80

            peer-not-placeholder-shown:top-1
            peer-not-placeholder-shown:text-xs
            peer-not-placeholder-shown:text-white/80
          "
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormInput;
