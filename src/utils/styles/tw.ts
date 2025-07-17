/**
 * A utility function for Tailwind CSS class formatting
 *
 * This function acts as an identity function that simply returns the input string,
 * but it signals to the prettier-plugin-tailwindcss that the string contains
 * Tailwind CSS classes that should be sorted according to the Tailwind convention.
 *
 * @param {string} classNames - A string of Tailwind CSS class names
 * @returns {string} The same string, but properly formatted by prettier-plugin-tailwindcss
 *
 * @example
 * // Basic usage
 * const buttonClasses = tw('flex items-center justify-center p-4 bg-blue-500 hover:bg-blue-600');
 *
 * // In a component:
 * <button className={tw('flex items-center justify-center p-4')}>Click me</button>
 */
export function tw(classNames: string): string {
  return classNames
}
