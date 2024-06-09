import {Action, PayloadAction} from '@reduxjs/toolkit';
import React, {Dispatch, SetStateAction} from 'react';
import {store} from 'store';
import {tableParts} from './tableParts';
import {ICompany, IWorker, CompaniesType} from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AddNewCompanyAction = PayloadAction<ICompany>;
export type AddNewWorkerAction = PayloadAction<{ companyId: number, worker: IWorker }>;
export type DeleteCompanyAction = PayloadAction<number[]>;
export type DeleteWorkerAction = PayloadAction<{ workerId: number[], companyId: number }>;
export type EditCompanyAction = PayloadAction<{ companyId: number, updatedFields: { [key: string]: string | number } }>;
export type EditWorkerAction = PayloadAction<{
    companyId: number,
    workerId: number,
    updatedFields: { [key: string]: string | number }
}>;
export type IncreaseViewRowsLimitAction = PayloadAction<number>;

type DispatchAction = Dispatch<Action>;

export type AddNewRowType = (props: {
    tablePartsType: tableParts,
    companies: CompaniesType,
    selectedCompanyId: number,
    currentWorkersQty: number,
    dispatch: DispatchAction,
}) => void;

export type AddNewRowRT = (tablePartsType: tableParts) => ReturnType<AddNewRowType>;

export type DeleteRowType = (props: {
    tablePartsType: tableParts,
    dispatch: DispatchAction,
    selectedCompanyId: number[],
    selectedWorkersId: number[],
    setSelectedCompanies: Dispatch<React.SetStateAction<number[]>>,
    setSelectedWorkers: Dispatch<React.SetStateAction<number[]>>
}) => void;

export type DeleteRowRT = (tablePartsType: tableParts) => ReturnType<DeleteRowType>;

export type EditRowType = (props: {
    tablePartsType: tableParts | null,
    selectedCompanyId: number,
    selectedWorkerId: number,
    dispatch: DispatchAction,
    updatedFields: { [key: string]: string | number },
    setEditingTable: Dispatch<React.SetStateAction<tableParts | null>>
}) => void;

export type EditRowRT = (updatedFields: { [key: string]: string | number }) => ReturnType<EditRowType>;
