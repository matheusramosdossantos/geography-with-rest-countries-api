// File to provide a container.

export default function Container({ className, children }) {
  return <div className={className}>{children}</div>;
}
