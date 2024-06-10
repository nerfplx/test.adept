import {GetAvailableToolsType} from "types/utilsTypes";

export const getAvailableTools: GetAvailableToolsType = (selectedQty) => {

    if (selectedQty === 0) return ["add"];

    else if (selectedQty === 1) return ["delete", "edit"];

    return ["delete"];
};
