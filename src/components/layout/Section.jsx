import Container from './Container';

// Page section wrapper: consistent spacing, anchor id and accessible label.
export default function Section({ id, className = '', labelledBy, children }) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={labelledBy}>
      <Container>{children}</Container>
    </section>
  );
}
