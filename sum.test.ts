import sum from "./sum";

describe("sum", () => {
    it("returns the addition of two numbers passed as arguments", () => {
        expect(sum(2, 3)).toBe(5);
    });
});
