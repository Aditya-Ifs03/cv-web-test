import { useEffect, useState } from 'react';
import Button from '../common/Button';

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <>
      <Button variant="secondary" icon={copied ? 'check' : 'copy'} iconPosition="left" onClick={copy}>
        {copied ? 'Copied' : 'Copy email'}
      </Button>
      <span className="sr-only" role="status">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </>
  );
}
