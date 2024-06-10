import {CompaniesType, WorkerType} from "types/types";
import {generateCompany} from "utilsData/generateCompany";
import {generateWorker} from "utilsData/generateWorker";
import {GenerateDataType} from "types/utilsTypes";

export const generateData: GenerateDataType = (companiesQty, workersQty) => {
    const companies: CompaniesType = [];

    for (let i = 1; i <= companiesQty; i++) {
        const workers: WorkerType = [];

        for (let k = 1; k <= workersQty; k++) {
            workers.push(generateWorker(k));
        }
        companies.push(generateCompany(i, workers));
    }

    return companies;
};

