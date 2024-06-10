import {generateCompany, generateWorker} from "utilsData";

import {addNewCompany, addNewWorker} from "store/tables/slice";

import {tableParts} from "types/tableParts";
import {AddNewRowType} from "types/actions";

export const addNewRow: AddNewRowType = (props) => {
    const {
        dispatch,
        companies,
        tablePartsType,
        selectedCompanyId,
        currentWorkersQty,
    } = props;

    tablePartsType === tableParts.companies
        ? dispatch(addNewCompany(generateCompany(companies.length + 1, [])))
        : dispatch(
            addNewWorker({
                companyId: selectedCompanyId,
                worker: generateWorker(currentWorkersQty + 1),
            }),
        );
};
