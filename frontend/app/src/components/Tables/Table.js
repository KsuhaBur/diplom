import React from 'react';
import "./Table.css"

function DynamicTable({ data, columns }) {
    // Отображение заголовка таблицы
    const renderTableHeader = () => (
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column.id}>{column.label}</th>
                ))}
            </tr>
        </thead>
    );

    // Отображение строк таблицы
    const renderTableBody = () => (
        <tbody>
            {data.map((row) => (
                <tr key={row.id}>
                    {columns.map((column) => (
                        <td key={column.id}>{row[column.accessor]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    );

    return (
        <div>
            <table>
                {renderTableHeader()}
                {renderTableBody()}
            </table>
        </div>
    );
}

export default DynamicTable;