const PastTenseTable = ({data}) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Header 1
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Header 2
          </th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {row.column1}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              {row.column2}
            </td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PastTenseTable;
