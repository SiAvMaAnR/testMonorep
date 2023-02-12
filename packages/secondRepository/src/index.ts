import { thirdRepository } from "@monorepo-sup/third-repository"

export function secondRepository() {
    console.log("second repository")
    thirdRepository();
}