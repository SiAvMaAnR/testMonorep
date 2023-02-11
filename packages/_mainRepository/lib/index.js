"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thirdRepository = exports.secondRepository = exports.firstRepository = exports.mainRepository = void 0;
const first_repository_1 = require("@monorepo/first-repository");
Object.defineProperty(exports, "firstRepository", { enumerable: true, get: function () { return first_repository_1.firstRepository; } });
const second_repository_1 = require("@monorepo/second-repository");
Object.defineProperty(exports, "secondRepository", { enumerable: true, get: function () { return second_repository_1.secondRepository; } });
const third_repository_1 = require("@monorepo/third-repository");
Object.defineProperty(exports, "thirdRepository", { enumerable: true, get: function () { return third_repository_1.thirdRepository; } });
function mainRepository() {
    console.log("main repository");
}
exports.mainRepository = mainRepository;
mainRepository();
(0, first_repository_1.firstRepository)();
(0, second_repository_1.secondRepository)();
(0, third_repository_1.thirdRepository)();
