export const persianToEnglish = (str: string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const englishDigits = "0123456789";

  return str.replace(/[\u06F0-\u06F9]/g, (match: string): string => {
    const index = persianDigits.indexOf(match);
    if (index !== -1) {
      return englishDigits[index] as string;
    }
    return match;
  });
};
