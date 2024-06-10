import React, {useState} from "react";
import {Checkbox, Column, Input, Row, Table} from "components/elements";
import {disabledFields} from "config/config";
import style from "./Companies.module.scss";
import {CompaniesProps} from "types/types";
import {tableParts} from "types/tableParts";

export const Companies = (props: CompaniesProps) => {
    const {
        companies,
        editRowRT,
        editingTable,
        selectedCompanies,
        setSelectedCompanies,
        setSelectedWorkers,
        ...otherProps
    } = props;

    const [inputFields, setInputFields] = useState<{ [key: string]: string | number }>({});
    const selectCompany = (selectedId: number) => {
        const isAlreadyHas = selectedCompanies.includes(selectedId);
        setSelectedCompanies(
            isAlreadyHas
                ? selectedCompanies.filter((id) => id !== selectedId)
                : [...selectedCompanies, selectedId],
        );
        isAlreadyHas && setSelectedWorkers([]);
    };

    const isEditing = editingTable === tableParts.companies;

    const rows = companies.map((company) => {
        const isSelected = selectedCompanies.includes(company.id);

        return (
            <Row key={company.id} isSelected={isSelected}>
                {(Object.keys(company) as Array<keyof typeof company>).map((key, c) => (
                    <Column key={c}>
                        {key === "id" ? (
                            <Checkbox
                                isDisabled={isEditing}
                                handle={() => selectCompany(company[key])}
                                isActive={isSelected}
                            />
                        ) : isEditing && isSelected && !disabledFields.includes(key) ? (
                            <Input
                                name={key}
                                value={company[key]}
                                onEnterDown={editRowRT}
                                onChange={setInputFields}
                                inputFields={inputFields}
                            />
                        ) : (
                            <span className={style.value}>{company[key]}</span>
                        )}
                    </Column>
                ))}
            </Row>
        );
    });

    return (
        <Table
            {...otherProps}
            type={tableParts.companies}
            isHidden={companies.length === 0}
            isEditing={isEditing}
            isFullSelected={selectedCompanies.length === companies.length}
        >
            {rows}
        </Table>
    );
};
