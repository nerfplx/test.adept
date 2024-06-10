import {deleteCompany, deleteWorker} from "store/tables/slice";

import {tableParts} from "types/tableParts";
import {DeleteRowType} from "types/actions";

export const deleteRow: DeleteRowType = (props) => {
    const {
        dispatch,
        selectedWorkersId,
        selectedCompanyId,
        tablePartsType,
        setSelectedCompanies,
        setSelectedWorkers,
    } = props;

    if (tablePartsType === tableParts.companies) {
        setSelectedCompanies([]);
        dispatch(deleteCompany(selectedCompanyId));
    } else {
        setSelectedWorkers([]);
        dispatch(
            deleteWorker({
                workerId: selectedWorkersId,
                companyId: selectedCompanyId[0],
            }),
        );
    }
};
