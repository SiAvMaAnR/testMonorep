import { secondRepository } from "@monorepo/second-repository"


export function firstRepository() {
    console.log("first repository")
    secondRepository()
}