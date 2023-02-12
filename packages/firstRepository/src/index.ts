import { secondRepository } from "@monorepo-sup/second-repository"


export function firstRepository() {
    console.log("first repository")
    secondRepository()
}