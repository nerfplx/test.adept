import React, {ReactNode} from "react";
import style from "./Main.module.scss";

interface MainProps {
    children: ReactNode;
}

export const Main = ({children}: MainProps) => (
    <main className={style.main}>{children}</main>
);
