import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './state';
import {
    AddNewCompanyAction,
    AddNewWorkerAction,
    DeleteCompanyAction,
    DeleteWorkerAction,
    EditCompanyAction,
    EditWorkerAction,
    IncreaseViewRowsLimitAction
} from "types/actions";

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addNewCompany: (state, action: AddNewCompanyAction) => {
            state.companies = [...state.companies, action.payload];
        },
        addNewWorker: (state, action: AddNewWorkerAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        workersQty: company.workersQty + 1,
                        workers: [...company.workers, action.payload.worker]
                    }
                    : company
            );
        },
        deleteCompany: (state, action: DeleteCompanyAction) => {
            state.companies = state.companies.filter(company => !action.payload.includes(company.id));
        },
        deleteWorker: (state, action: DeleteWorkerAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        workersQty: company.workersQty - action.payload.workerId.length,
                        workers: company.workers.filter(employee => !action.payload.workerId.includes(employee.id))
                    }
                    : company
            );
        },
        editCompany: (state, action: EditCompanyAction) => {
            state.companies = state.companies.map(company => company.id === action.payload.companyId
                ? {...company, ...action.payload.updatedFields}
                : company
            );
        },
        editWorker: (state, action: EditWorkerAction) => {
            state.companies = state.companies.map(company =>
                company.id === action.payload.companyId
                    ? {
                        ...company,
                        workers: company.workers.map(worker => worker.id === action.payload.workerId
                            ? {...worker, ...action.payload.updatedFields}
                            : worker
                        )
                    }
                    : company
            );
        },
        increaseViewRowsLimit: (state, action: IncreaseViewRowsLimitAction) => {
            state.viewRowsLimit = state.viewRowsLimit + action.payload;
        }
    }
});

export const {
    addNewCompany,
    addNewWorker,
    deleteCompany,
    deleteWorker,
    editCompany,
    editWorker,
    increaseViewRowsLimit
} = dataSlice.actions;