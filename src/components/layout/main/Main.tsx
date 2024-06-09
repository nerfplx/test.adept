import React, {ReactNode} from 'react';
import style from './style.module.scss';

type MainProps = {children:ReactNode};
export const Main = ({children}:MainProps) => <main className={style.main}>{children}</main>;