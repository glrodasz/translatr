import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Label from "./Label";

describe("[ components / Label ]", () => {
  describe("when Label is rendered", () => {
    it("should render", () => {
      // Arrange
      const props = {
        count: 0,
        maxCount: 10,
      };

      // Act
      const { asFragment } = render(<Label {...props} />);

      // Assert
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
