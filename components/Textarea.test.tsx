import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Textarea, { TextareaProps } from "./Textarea";

const defaultProps: TextareaProps = {
  placeholder: "placeholder",
  value: "value",
  onChange: () => {}, // noop
  readOnly: true,
};

describe("[ components / Textarea ]", () => {

  describe("when Textarea is rendered", () => {
    it("should render", () => {
      const { asFragment } = render(<Textarea {...defaultProps} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe("when the value is changed", () => {
    it("should call onChange", () => {
      // Arrange
      const props = {
        ...defaultProps,
        onChange: vi.fn(), // stub
        placeholder: "placeholder to change",
      };

      // Act
      render(<Textarea {...props} />);
      fireEvent.change(screen.getByPlaceholderText("placeholder to change"), {
        target: { value: "new value" },
      });

      // Assert
      expect(props.onChange).toHaveBeenCalled();
    });
  });
});
