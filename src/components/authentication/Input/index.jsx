// File to provide an input element.

export default function Input({
  type,
  id,
  className,
  onChange,
  onBlur,
  value,
  checked,
  placeholder,
  disabled,
  autoComplete,
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        className={className}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        checked={checked}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </>
  );
}
