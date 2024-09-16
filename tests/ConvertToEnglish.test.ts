import { describe, it, expect } from "vitest";
import { persianToEnglish } from "../src/ConvertToEnglish"; 

describe("persianToEnglish", () => {
  it("should convert Persian digits to English digits", () => {
    const input = "۱۲۳۴۵۶۷۸۹";
    const expectedOutput = "123456789";
    expect(persianToEnglish(input)).toBe(expectedOutput);
  });

  it("should leave English digits unchanged", () => {
    const input = "123456789";
    const expectedOutput = "123456789";
    expect(persianToEnglish(input)).toBe(expectedOutput);
  });

  it("should handle a mix of Persian and English digits", () => {
    const input = "۱۲۳ ABC ۴۵۶";
    const expectedOutput = "123 ABC 456";
    expect(persianToEnglish(input)).toBe(expectedOutput);
  });

  it("should return an empty string if input is empty", () => {
    const input = "";
    const expectedOutput = "";
    expect(persianToEnglish(input)).toBe(expectedOutput);
  });

  it("should handle non-digit characters correctly", () => {
    const input = "Hello ۱۲۳";
    const expectedOutput = "Hello 123";
    expect(persianToEnglish(input)).toBe(expectedOutput);
  });
});
