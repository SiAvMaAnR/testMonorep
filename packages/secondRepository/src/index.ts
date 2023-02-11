import { thirdRepository } from "@monorepo/third-repository"

export function secondRepository() {
    console.log("second repository")
    thirdRepository();
}