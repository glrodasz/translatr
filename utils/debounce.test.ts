import { describe, it, expect, vi, beforeEach } from "vitest";
import debounce from "./debounce";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


describe("[ utils / debounce ]", () => {

	beforeEach(() => {
		vi.useFakeTimers();
	});

	describe("when the debounced function is called multiple times", () => {
		it("should call the debounced function only once", async () => {
			// Arrange
			const func = vi.fn();
			const debouncedFunction = debounce(func, 5000);

			// Act
			debouncedFunction();
			debouncedFunction();
			debouncedFunction();

			// vi.runAllTimers();
			vi.advanceTimersByTime(5000);

			// Assert
			expect(func).toHaveBeenCalledTimes(1);
		});
	})
});