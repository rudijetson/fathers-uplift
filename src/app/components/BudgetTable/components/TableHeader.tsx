export const TableHeader: React.FC<{ headers: string[] }> = ({ headers }) => (
  <thead>
    <tr className="bg-fathers-blue text-white">
      {headers.map((header, index) => (
        <th key={index} className="px-4 py-3 text-left font-medium">
          {header}
        </th>
      ))}
    </tr>
  </thead>
) 