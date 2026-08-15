import type { ReactNode } from "react";

export function DataTable({
  columns,
  rows,
}: {
  columns: readonly string[];
  rows: readonly (readonly ReactNode[])[];
}) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, index) => (
                <td key={`${rowIndex}-${columns[index]}`} data-label={columns[index]}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
