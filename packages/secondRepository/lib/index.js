"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondRepository = void 0;
const third_repository_1 = require("@monorepo-sup/third-repository");
function secondRepository() {
    console.log("second repository");
    (0, third_repository_1.thirdRepository)();
}
exports.secondRepository = secondRepository;
