import Icon from './Icon';
import './Button.css';

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 * variant: 'primary' | 'secondary' | 'ghost'
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const iconEl = icon && <Icon name={icon} size={size === 'sm' ? 16 : 18} />;
  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {children}
      {iconPosition === 'right' && iconEl}
    </>
  );

  if (href) {
    const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
