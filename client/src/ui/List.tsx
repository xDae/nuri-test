import React from 'react'

interface ListItemProps {
  title?: string;
  children?: any
}

const List = ({ children }: { children?: any }) => {
  return (
    <table className="min-w-max w-full table-auto">
      <tbody className="text-gray-600 text-sm font-light">
        {children}
      </tbody>
    </table>
  )
}

List.Item = ({ title, children }: ListItemProps) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="w-1/4 py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{title}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          {children}
        </div>
      </td>
    </tr>
  );
}
export default List;
