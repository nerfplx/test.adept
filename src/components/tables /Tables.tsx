import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Companies, Workers} from './parts';
import {getAvailableTools, separateCompaniesToTableArrays} from 'utilsData';
import {selectCompanies, selectLimit} from 'store/selector';
import {addNewRow, deleteRow, editRow} from 'store/actionsUtils';
import {tableParts} from 'types/tableParts';
import {SharedProps, SelectAllRowsType} from 'types/types';
import {GetAvailableToolsRT} from 'types/utilsTypes';
import {AddNewRowRT, DeleteRowRT, EditRowRT} from 'types/actions';

export const Tables: React.FC = () => {
    const companies = useSelector(selectCompanies);
    const viewRowsLimit = useSelector(selectLimit);
    const dispatch = useDispatch();

    const [editingTable, setEditingTable] = useState<tableParts | null>(null);
    const [selectedCompanies, setSelectedCompanies] = useState<number[]>([]);
    const [selectedWorkers, setSelectedWorkers] = useState<number[]>([]);

    const {companiesArray, workersArray} = separateCompaniesToTableArrays(companies, selectedCompanies);

    const addNewRowRT: AddNewRowRT = (tablePartsType) =>
        addNewRow({
            dispatch,
            tablePartsType,
            companies,
            selectedCompanyId: selectedCompanies[0],
            currentWorkersQty: workersArray.length
        });

    const deleteRowRT: DeleteRowRT = (tablePartsType) =>
        deleteRow({
            dispatch,
            tablePartsType,
            setSelectedCompanies,
            setSelectedWorkers,
            selectedCompanyId: selectedCompanies,
            selectedWorkersId: selectedWorkers
        });

    const editRowRT: EditRowRT = (updatedFields) =>
        editRow({
            dispatch,
            updatedFields,
            setEditingTable,
            tablePartsType: editingTable,
            selectedCompanyId: selectedCompanies[0],
            selectedWorkerId: selectedWorkers[0]
        });

    const getAvailableToolsRT: GetAvailableToolsRT = (tablePartsType) =>
        getAvailableTools((tablePartsType === tableParts.workers ? selectedWorkers : selectedCompanies).length);

    const selectAllRows: SelectAllRowsType = (tablePartsType) => {
        if (tablePartsType === tableParts.workers) {
            const fullSelected = workersArray.map(worker => worker.id);
            setSelectedWorkers(fullSelected.length === selectedWorkers.length ? [] : fullSelected);
        }

        if (tablePartsType === tableParts.companies) {
            const fullSelected = companiesArray.map(company => company.id);
            setSelectedCompanies(fullSelected.length === selectedCompanies.length ? [] : fullSelected);
        }
    };

    const sharedProps: SharedProps = {
        editRowRT,
        addNewRowRT,
        deleteRowRT,
        editingTable,
        viewRowsLimit,
        selectAllRows,
        setEditingTable,
        getAvailableToolsRT,
        setSelectedWorkers
    };

    return (
        <>
            <Companies
                {...sharedProps}
                companies={companiesArray}
                selectedCompanies={selectedCompanies}
                setSelectedCompanies={setSelectedCompanies}
            />
            <Workers
                {...sharedProps}
                workers={workersArray}
                selectedWorkers={selectedWorkers}
                setSelectedWorkers={setSelectedWorkers} // Здесь добавлен пропс setSelectedWorkers
            />
        </>
    );
};
