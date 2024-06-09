import {editCompany, editWorker} from 'store/tables/slice';

import {tableParts} from 'types/tableParts';
import {EditRowType} from 'types/actions';

export const editRow: EditRowType = (props) => {
    const {updatedFields, tablePartsType, setEditingTable, dispatch, selectedCompanyId, selectedWorkerId} = props;

    if (tablePartsType === tableParts.companies)
        dispatch(editCompany({
            updatedFields,
            companyId: selectedCompanyId
        }));

    if (tablePartsType === tableParts.workers)
        dispatch(editWorker({
            updatedFields,
            companyId: selectedCompanyId,
            workerId: selectedWorkerId
        }));

    setEditingTable(null);
};