import './Badge.css';

// variant: 'default' | 'accent' | 'outline'
export default function Badge({ variant = 'default', children }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
