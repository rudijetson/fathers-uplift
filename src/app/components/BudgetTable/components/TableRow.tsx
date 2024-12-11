import { formatCurrency } from '../utils/formatters'

export const TableRow: React.FC<{ 
  row: string[];
  colSpan?: number;
  isHeader?: boolean;
}> = ({ row, colSpan, isHeader }) => (
  <tr className={isHeader ? "bg-fathers-blue/5" : "border-b border-gray-200 hover:bg-gray-50"}>
    {row.map((cell, cellIndex) => (
      <td 
        key={cellIndex}
        colSpan={colSpan}
        className={`px-4 py-3 ${
          cellIndex === 0 || isHeader
            ? "text-fathers-blue font-medium" 
            : "text-right text-fathers-blue/80"
        }`}
      >
        {cellIndex === 0 ? cell : formatCurrency(cell)}
      </td>
    ))}
  </tr>
) 