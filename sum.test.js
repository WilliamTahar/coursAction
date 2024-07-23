"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = __importDefault(require("./sum"));
describe("sum", () => {
    it("returns the addition of two numbers passed as arguments", () => {
        expect((0, sum_1.default)(2, 3)).toBe(5);
    });
});
