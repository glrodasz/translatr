import { renderHook } from "@testing-library/react-hooks";
import { describe, it, expect, vi } from "vitest";

import useTranslator from "./useTranslator";

import useDebounce from "./useDebounce";

vi.mock("./useDebounce", () => {
  return { default: vi.fn() };
});

describe("[ hooks / useTranslator]", () => {
  describe("when the hooks is called", () => {
    it("should return the correct value", () => {
      const { result } = renderHook(() => useTranslator());

      expect(result.current).toMatchInlineSnapshot(`
        {
          "handleInputChange": [Function],
          "inputText": "",
          "translatedText": "",
        }
      `);
    });
  });

  describe("when handleInputChange is called", () => {
    it("should update the inputText value", () => {
      const { result } = renderHook(() => useTranslator());

      result.current.handleInputChange({
        target: { value: "hello" },
      } as React.ChangeEvent<HTMLTextAreaElement>);

      expect(result.current.inputText).toBe("hello");
    });

    it("should call the debouncedTranslateText function", () => {
      const { result } = renderHook(() => useTranslator());

      result.current.handleInputChange({
        target: { value: "hello" },
      } as React.ChangeEvent<HTMLTextAreaElement>);

      expect(useDebounce).toHaveBeenCalledWith(expect.any(Function), 500);
    });
  });
});
