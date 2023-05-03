import { describe, it, expect } from "vitest";
import * as constants from "./constants";

describe("[ utils / constants]", () => {
  it("should preserv the values", () => {
    expect(constants).toMatchInlineSnapshot(`
      {
        "DEFAULT_LANGUAGE_TO_TRANSLATE": "English",
        "MAX_COUNT": 100,
      }
    `);
  });
});
