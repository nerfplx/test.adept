import React, {ReactNode} from "react";
import style from "./Column.module.scss";

type ColumnProps = { children: ReactNode };

export const Column = ({children}: ColumnProps) => (
    <div className={style.column}>{children}</div>
);
