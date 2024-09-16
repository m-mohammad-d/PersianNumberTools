import { describe, it, expect } from "vitest";
import { englishToPersian } from "../src/convertToPersian";

describe("englishToPersian", () => {
  it("should convert English digits to Persian digits", () => {
    const input = "123456789";
    const expectedOutput = "۱۲۳۴۵۶۷۸۹";
    expect(englishToPersian(input)).toBe(expectedOutput);
  });

  it("should leave Persian digits unchanged", () => {
    const input = "۱۲۳۴۵۶۷۸۹";
    const expectedOutput = "۱۲۳۴۵۶۷۸۹";
    expect(englishToPersian(input)).toBe(expectedOutput);
  });

  it("should handle a mix of English and Persian digits", () => {
    const input = "123 ABC 456";
    const expectedOutput = "۱۲۳ ABC ۴۵۶";
    expect(englishToPersian(input)).toBe(expectedOutput);
  });

  it("should return an empty string if input is empty", () => {
    const input = "";
    const expectedOutput = "";
    expect(englishToPersian(input)).toBe(expectedOutput);
  });

  it("should handle non-digit characters correctly", () => {
    const input = "Hello 123";
    const expectedOutput = "Hello ۱۲۳";
    expect(englishToPersian(input)).toBe(expectedOutput);
  });
});
