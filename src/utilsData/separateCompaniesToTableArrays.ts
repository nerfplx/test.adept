import {SeparateCompaniesToTableArraysType} from 'types/utilsTypes';

export const separateCompaniesToTableArrays: SeparateCompaniesToTableArraysType = (companies, selectedCompanies) => {
    const companiesArray = [];
    const workersArray = [];
    for (let i = 0; i < companies.length; i++) {
        const currentCompany = companies[i];
        const {workers, ...companyObjectWithoutWorkers} = currentCompany;

        if (selectedCompanies.includes(currentCompany.id) && selectedCompanies.length === 1)
            workersArray.push(...workers);
        companiesArray.push(companyObjectWithoutWorkers);
    }
    return {companiesArray, workersArray};
};