export function getFirstName(name: string): string {
  const firstName = name.split(' ')[0]

  return firstName.charAt(0).toUpperCase() + firstName.slice(1)
}
