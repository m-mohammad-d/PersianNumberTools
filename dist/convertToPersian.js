"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.englishToPersian = void 0;
const englishToPersian = (str) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const englishDigits = "0123456789";
    return str.replace(/[0-9]/g, (match) => {
        const index = englishDigits.indexOf(match);
        if (index !== -1) {
            return persianDigits[index];
        }
        return match;
    });
};
exports.englishToPersian = englishToPersian;
//# sourceMappingURL=convertToPersian.js.map