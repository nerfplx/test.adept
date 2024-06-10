import React, {ReactNode} from "react";
import {mergeClassNames} from "utilsData";
import style from "./Row.module.scss";
import {RowProps} from "types/types";

export const Row = (props: RowProps & { children: ReactNode }) => {
    const {children, isSelected} = props;
    const getRowStyles = () =>
        mergeClassNames(style.row, isSelected ? style.rowSelected : "");
    return <div className={getRowStyles()}>{children}</div>;
};
