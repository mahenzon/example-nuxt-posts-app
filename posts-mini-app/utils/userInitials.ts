export function getInitials(fullName: string): string {
  // Split the full name into an array of words
  const nameParts = fullName.split(' ')

  // Map over the array and get the first letter of each part
  return nameParts.map(part => part.charAt(0).toUpperCase()).join('')
}
