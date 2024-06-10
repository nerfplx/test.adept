import React, {ReactNode, useRef} from "react";
import {Checkbox} from "components/elements/checkbox";
import {mergeClassNames} from "utilsData";
import {useVirtualizer} from '@tanstack/react-virtual';
import style from "./Table.module.scss";
import {TableProps} from "types/types";

export const Table = (props: TableProps & { children: ReactNode[] }) => {
    const {
        type,
        children,
        isHidden,
        isEditing,
        addNewRowRT,
        deleteRowRT,
        selectAllRows,
        isFullSelected,
        setEditingTable,
        getAvailableToolsRT,
    } = props;

    const availableTools = getAvailableToolsRT(type);

    const parentRef = useRef<HTMLDivElement>(null);

    const rowVirtualizer = useVirtualizer({
        count: children.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 60,
    });

    const getTableClasses = () =>
        mergeClassNames(style.table, isHidden ? style.tableHidden : "");
    const getToolStatus = (mode: "edit" | "delete" | "add") =>
        !availableTools.includes(mode) || isEditing;

    return (
        <div className={getTableClasses()}>
            <div className={style.header}>
                <div className={style.checkbox}>
                    <Checkbox
                        isActive={isFullSelected}
                        label={"Выделить все"}
                        isDisabled={isEditing}
                        handle={() => selectAllRows(type)}
                    />
                </div>
                <div className={style.tools}>
          <span
              className={style.edit}
              onClick={() => setEditingTable(type)}
              data-disabled={getToolStatus("edit")}
          />
                    <span
                        className={style.delete}
                        onClick={() => deleteRowRT(type)}
                        data-disabled={getToolStatus("delete")}
                    />
                    <span
                        className={style.add}
                        onClick={() => addNewRowRT(type)}
                        data-disabled={getToolStatus("add")}
                    />
                </div>
            </div>
            <div ref={parentRef} className={style.body}>
                <div
                    style={{
                        height: `${rowVirtualizer.getTotalSize()}px`,
                        position: 'relative',
                    }}
                >
                    {rowVirtualizer.getVirtualItems().map((virtualRow) => (
                        <div
                            key={virtualRow.key}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualRow.start}px)`,
                                overflow: "auto",
                            }}
                        >
                            {children[virtualRow.index]}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
