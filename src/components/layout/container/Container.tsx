import React, {ReactNode} from 'react';
import styles from './style.module.scss';

type ContainerProps = {children:ReactNode};
export const Container = ({children}:ContainerProps) => <div className={styles.container}>{children}</div>;
