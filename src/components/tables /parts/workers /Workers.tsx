import React, {useState} from 'react';
import {Checkbox, Column, Input, Row, Table} from 'components/elements';
import style from './style.module.scss';
import {tableParts} from 'types/tableParts';
import {WorkersProps} from 'types/types';

export const Workers = (props:WorkersProps) => {
    const {editRowRT, workers, editingTable, viewRowsLimit, selectedWorkers, setSelectedWorkers, ...otherProps} = props;
    const [inputFields, setInputFields] = useState<{[key:string]:string | number}>({});
    const workerSelected = (selectedId:number) => {
        const isAlreadyHas = selectedWorkers.includes(selectedId);

        setSelectedWorkers(isAlreadyHas
            ? selectedWorkers.filter(id => id !== selectedId)
            : [...selectedWorkers, selectedId]
        );
    };

    const isEditing = editingTable === tableParts.workers;

    return (
        <Table
            {...otherProps}
            isEditing={isEditing}
            type={tableParts.workers}
            isHidden={workers.length === 0}
            isFullSelected={selectedWorkers.length === workers.length}>
            {workers.slice(0, viewRowsLimit).map(worker => {
                const isSelected = selectedWorkers.includes(worker.id);

                return (
                    <Row
                        key={worker.id}
                        isSelected={isSelected}>
                        {(Object.keys(worker) as Array<keyof typeof worker>).map((key, c) =>
                            <Column key={c}>
                                {key === 'id'
                                    ? <Checkbox
                                        isDisabled={isEditing}
                                        handle={() => workerSelected(worker.id)}
                                        isActive={isSelected}/>
                                    : isEditing && isSelected
                                        ? <Input
                                            name={key}
                                            value={worker[key]}
                                            onEnterDown={editRowRT}
                                            onChange={setInputFields}
                                            inputFields={inputFields}/>
                                        : <span className={style.value}>
                                            {worker[key]}</span>}
                            </Column>)}
                    </Row>
                );
            })}
        </Table>
    );
};