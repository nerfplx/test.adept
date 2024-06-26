import React from "react";
import {mergeClassNames} from "utilsData";
import style from "./Checkbox.module.scss";
import {CheckboxProps} from "types/types";

export const Checkbox = (props: CheckboxProps) => {
    const {label = "", handle, isActive, isDisabled} = props;
    const getCheckboxStyles = () =>
        mergeClassNames(
            style.checkbox,
            isActive ? style.checkboxActive : "",
            isDisabled ? style.checkboxDisabled : "",
        );
    return (
        <div className={style.wrapper}>
            <span className={getCheckboxStyles()} onClick={() => handle()}/>
            {label && <span className={style.label}>{label}</span>}
        </div>
    );
};
