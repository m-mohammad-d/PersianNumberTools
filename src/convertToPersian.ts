export const englishToPersian = (str: string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return str.replace(/[0-9]/g, (match: string): string => {
    const index = englishDigits.indexOf(match);
    if (index !== -1) {
      return persianDigits[index] as string;
    }
    return match;
  });
};
