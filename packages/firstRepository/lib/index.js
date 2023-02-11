"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstRepository = void 0;
const second_repository_1 = require("@monorepo/second-repository");
function firstRepository() {
    console.log("first repository");
    (0, second_repository_1.secondRepository)();
}
exports.firstRepository = firstRepository;
