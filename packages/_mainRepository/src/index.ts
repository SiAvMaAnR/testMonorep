import { firstRepository } from "@monorepo/first-repository"
import { secondRepository } from "@monorepo/second-repository"
import { thirdRepository } from "@monorepo/third-repository"

function mainRepository(): void {
    console.log("main repository")
}


mainRepository();
firstRepository();
secondRepository();
thirdRepository();

export {
    mainRepository,
    firstRepository,
    secondRepository,
    thirdRepository
}