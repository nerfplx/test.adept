import {RootState} from 'types/actions';

export const selectCompanies = (state: RootState) => state.data.companies;
export const selectLimit = (state: RootState) => state.data.viewRowsLimit;