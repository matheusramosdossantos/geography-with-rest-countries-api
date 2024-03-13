// File to provide a button element.

export default function Button({ text, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
