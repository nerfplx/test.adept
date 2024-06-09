import {GenerateCompanyType} from 'types/utilsTypes';

export const generateCompany:GenerateCompanyType = (id, workers) => ({
    id,
    name: `Компания №${id}`,
    workersQty: workers.length,
    address: `Адрес №${id}`,
    workers
});