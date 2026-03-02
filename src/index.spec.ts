import { boil } from "./index.js";
describe("test boilerplate", () => {
  test("it do things", () => {
    const res = boil();
    expect(res).toBeTruthy();
  });
});
