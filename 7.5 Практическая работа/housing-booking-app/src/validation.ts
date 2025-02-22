export function validateDate(date: string): boolean {
  const datePattern = /^\d{2}\.\d{2}\.\d{4}$/;
  if (!datePattern.test(date)) return false;

  const [day, month, year] = date.split('.').map(Number);
  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  // Ensure the input date is valid (e.g., not "31.02.2023")
  if (
    inputDate.getFullYear() !== year ||
    inputDate.getMonth() + 1 !== month ||
    inputDate.getDate() !== day
  ) {
    return false;
  }

  return inputDate >= currentDate;
}

export function validateCity(city: string): boolean {
  const escapeCharsPattern = /[<>&"]/;
  if (escapeCharsPattern.test(city)) return false;

  const cityPattern = /^[\p{L}\-! ]+$/u; // Allow Unicode letters
  return cityPattern.test(city);
}