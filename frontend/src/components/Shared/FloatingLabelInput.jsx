import { useState } from "react";

const FloatingLabelInput = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  icon,
  required,
  readOnly,
  disabled,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative group">
      <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-muted-foreground transition-colors group-focus-within:text-foreground">
        {icon}
      </div>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex h-10 w-full rounded border border-input bg-background pl-7 pr-7 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium  disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 peer placeholder-transparent"
        placeholder={placeholder}
        style={{
          "--tw-ring-color": "hsl(var(--ring))",
        }}
      />
      <label
        htmlFor={name}
        className={`absolute left-7 transition-all duration-200 pointer-events-none text-sm font-medium ${
          isFocused || value
            ? "-top-2 text-xs bg-slate-700 px-2 text-white text-foreground rounded-sm"
            : "top-2.5 text-muted-foreground"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
