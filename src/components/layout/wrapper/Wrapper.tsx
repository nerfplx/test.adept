import React, {ReactNode} from "react";
import style from "./Wrapper.module.scss";

interface WrapperProps {
    children: ReactNode;
}

export const Wrapper = ({children}: WrapperProps) => (
    <div className={style.wrapper}>{children}</div>
);
