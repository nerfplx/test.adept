import {AvailableTools, tableParts} from "types/tableParts";
import {CompaniesType, WorkerType, ICompany, IWorker} from "types/types";

export type GetAvailableToolsType = (selectedQty: number) => AvailableTools;
export type GetAvailableToolsRT = (
    tablePartsType: tableParts,
) => ReturnType<GetAvailableToolsType>;

export type SeparateCompaniesToTableArraysType = (
    companies: CompaniesType,
    selectedCompanies: Array<number>,
) => {
    companiesArray: Array<Omit<ICompany, "workers">>;
    workersArray: WorkerType;
};
export type MergeClassNamesType = (...args: Array<string>) => string;
export type GenerateDataType = (
    companiesQty: number,
    workersQty: number,
) => CompaniesType;
export type GenerateCompanyType = (id: number, workers: WorkerType) => ICompany;
export type GenerateWorkerType = (id: number) => IWorker;
