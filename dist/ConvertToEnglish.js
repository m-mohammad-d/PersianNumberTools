"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persianToEnglish = void 0;
const persianToEnglish = (str) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const englishDigits = "0123456789";
    return str.replace(/[\u06F0-\u06F9]/g, (match) => {
        const index = persianDigits.indexOf(match);
        if (index !== -1) {
            return englishDigits[index];
        }
        return match;
    });
};
exports.persianToEnglish = persianToEnglish;
//# sourceMappingURL=ConvertToEnglish.js.map