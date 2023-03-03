function sum(a: number, b: number) {
  return a + b;
}

describe("should sum two number", () => {
  it("sum of 2 and 3 should return 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
