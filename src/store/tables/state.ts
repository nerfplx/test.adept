import {generateData} from 'utilsData';
import {viewRowsLimit} from 'config/config';
import {CompaniesType} from 'types/types';

export const initialState: { companies: CompaniesType, viewRowsLimit: number } = {
    companies: generateData(3, 5),
    viewRowsLimit
};