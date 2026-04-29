import type { ReactNode } from "react";

export interface TableColumn<Row> {
  key: keyof Row | string;
  header: string;
  render?: (row: Row) => ReactNode;
}

export interface TableProps<Row> {
  columns: Array<TableColumn<Row>>;
  rows: Row[];
}

export function Table<Row extends Record<string, ReactNode>>({ columns, rows }: TableProps<Row>) {
  return (
    <div className="overflow-x-auto rounded-habibiLg border border-gray-200 bg-white shadow-habibiXs">
      <table className="min-w-[720px] w-full border-collapse text-left text-sm">
        <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-[0.06em] text-gray-500">
          <tr>
            {columns.map((column) => (
              <th className="px-4 py-3" key={String(column.key)} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, index) => (
            <tr className="text-gray-700 hover:bg-gray-50" key={index}>
              {columns.map((column) => (
                <td className="px-4 py-3" key={String(column.key)}>
                  {column.render ? column.render(row) : row[column.key as keyof Row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
