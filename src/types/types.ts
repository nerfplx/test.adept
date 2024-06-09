import React, { Dispatch } from 'react';
import { tableParts } from './tableParts';
import { GetAvailableToolsRT } from './utilsTypes';
import {AddNewRowRT, DeleteRowRT, EditRowRT} from "types/actions";

type SetStateAction<T> = Dispatch<React.SetStateAction<T>>;

export type SharedProps = {
    editRowRT: EditRowRT,
    addNewRowRT: AddNewRowRT,
    deleteRowRT: DeleteRowRT,
    viewRowsLimit: number,
    editingTable: tableParts | null,
    selectAllRows: SelectAllRowsType,
    setEditingTable: SetStateAction<tableParts | null>,
    setSelectedWorkers: SetStateAction<number[]>,
    getAvailableToolsRT: GetAvailableToolsRT,
};

export type CompaniesProps = SharedProps & {
    selectedCompanies: number[],
    companies: Omit<ICompany, 'workers'>[];
    setSelectedCompanies: SetStateAction<number[]>,
};

export type WorkersProps = SharedProps & {
    workers: WorkerType,
    selectedWorkers: number[],
};

export type TableProps = Pick<SharedProps, 'addNewRowRT' | 'deleteRowRT' | 'setEditingTable' | 'getAvailableToolsRT' | 'selectAllRows'> & {
    type: tableParts,
    isFullSelected: boolean,
    isHidden?: boolean,
    isEditing?: boolean,
};

export type CheckboxProps = {
    handle: Function,
    isActive: boolean,
    label?: string,
    isDisabled?: boolean,
};

export type RowProps = {
    isSelected: boolean,
};

export type InputProps = {
    name: string,
    value: string | number,
    onEnterDown: EditRowRT,
    inputFields: { [key: string]: string | number },
    onChange: SetStateAction<{ [key: string]: string | number }>,
    className?: string,
};

export type SelectAllRowsType = (tableType: tableParts) => void;
export type CompaniesType = ICompany[];
export type WorkerType = IWorker[];

export interface ICompany {
    id: number,
    name: string,
    workersQty: number,
    address: string,
    workers: WorkerType,
}

export interface IWorker {
    id: number,
    lastName: string,
    firstName: string,
    position: string,
}
