// File to provide a label element.

export default function Label({ htmlFor, className, text }) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {text}
      </label>
    </>
  );
}
