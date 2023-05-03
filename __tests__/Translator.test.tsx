import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import Translator from "../pages/index";

describe("[ pages / Translator (index) ]", () => {
  describe("when Translator is rendered", () => {
    it("should render", () => {
      const { asFragment } = render(<Translator />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
