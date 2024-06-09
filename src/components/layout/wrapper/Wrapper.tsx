import React, {ReactNode} from 'react';
import style from './style.module.scss';

type WrapperProps = {children:ReactNode};
export const Wrapper = ({children}:WrapperProps) => <div className={style.wrapper}>{children}</div>;