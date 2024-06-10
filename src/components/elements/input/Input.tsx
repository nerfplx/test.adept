import React, {ChangeEvent, useState} from "react";
import {mergeClassNames} from "utilsData";
import style from "./Input.module.scss";
import {InputProps} from "types/types";

export const Input = (props: InputProps) => {
    const {
        name,
        value = "",
        className = "",
        onEnterDown,
        onChange,
        inputFields,
    } = props;
    const [isInputFocused, setInputFocused] = useState<boolean>(false);
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (Object.values(inputFields).indexOf("") !== -1) return;
        if (e.code === "Enter") {
            e.currentTarget.blur();
            onEnterDown(inputFields);
        }
    };
    const getInputClasses = () =>
        mergeClassNames(
            style.input,
            isInputFocused ? style.inputFocused : "",
            inputFields[name] === "" ? style.inputEmpty : "",
            className,
        );
    const changing = (e: ChangeEvent<HTMLInputElement>) =>
        onChange({...inputFields, [e.currentTarget.name]: e.currentTarget.value});
    return (
        <>
            <input
                name={name}
                value={inputFields[name] === undefined ? value : inputFields[name]}
                className={getInputClasses()}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
                onKeyDown={(e) => onKeyDown(e)}
                onChange={(e) => changing(e)}
            />
        </>
    );
};
