import { firstRepository } from "@monorepo-sup/first-repository"
import { secondRepository } from "@monorepo-sup/second-repository"
import { thirdRepository } from "@monorepo-sup/third-repository"

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