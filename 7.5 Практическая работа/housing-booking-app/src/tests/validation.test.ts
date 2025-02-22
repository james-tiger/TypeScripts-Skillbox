import { validateDate, validateCity } from '../validation';

describe('validateDate', () => {
  test('accepts date in format DD.MM.YYYY', () => {
    expect(validateDate('23.02.2025')).toBe(true);
  });

  test('rejects special characters', () => {
    expect(validateDate('23/02/2025')).toBe(false);
  });

  test('rejects alphabetical values', () => {
    expect(validateDate('23.02.abc')).toBe(false);
  });

  test('warns if date is earlier than current date', () => {
    const pastDate = new Date();
    pastDate.setDate(pastDate.getDate() - 1);
    const formattedPastDate = `${pastDate.getDate()}.${pastDate.getMonth() + 1}.${pastDate.getFullYear()}`;
    expect(validateDate(formattedPastDate)).toBe(false);
  });
});

describe('validateCity', () => {
  test('warns if there is escaping', () => {
    expect(validateCity('New<York')).toBe(false);
  });

  test('accepts names with exclamation marks or hyphens', () => {
    expect(validateCity('Saint-Louis-du-Ha! Ha!')).toBe(true);
  });

  test('accepts names with special characters', () => {
    expect(validateCity('Ağrı')).toBe(true);
  });

  test('accepts names with a single letter', () => {
    expect(validateCity('A')).toBe(true);
  });
});