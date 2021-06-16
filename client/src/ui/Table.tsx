import React from 'react'
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';

interface TableProps {
  columns: any;
  data: any
}

const Table = ({ columns, data }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return (
    <table {...getTableProps()} className="min-w-max w-full table-auto">
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()} className="py-3 px-6 text-left" >{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody className="text-gray-600 text-sm font-light" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} className="border-b border-gray-200 hover:bg-gray-100">
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      {cell.render('Cell')}
                    </div>
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
