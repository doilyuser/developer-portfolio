/**
 * A component for rendering text that is only visible to screen readers.
 *
 * This component is useful for adding descriptive text to elements like buttons or links
 * that contain only icons, ensuring they are accessible to users who rely on screen readers.
 *
 * The `className` "sr-only" is typically used to visually hide the text while keeping it
 * accessible to assistive technologies. This is a common utility in accessibility-focused
 * CSS frameworks.
 *
 * @param {object} props - The properties for the ScreenReaderSpan component.
 * @param {string} props.text - The text content to be read by screen readers.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props.rest - Additional props to be spread onto the `<span>` element.
 *
 * @returns {JSX.Element} A visually hidden `<span>` containing the specified text.
 *
 * @example
 * // Adding accessible text to a button with only an icon
 * <button>
 *   <Icon name="edit" />
 *   <ScreenReaderSpan text="Edit" />
 * </button>
 *
 */

interface ScreenReaderSpanProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export default function ScreenReaderSpan({ text, ...rest }: ScreenReaderSpanProps) {
  return (
    <span className="sr-only focus:not-sr-only" {...rest}>
      {text}
    </span>
  )
}
