const PastTenseTable = ({ data }) => {
  const headerClassName =
    "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-base font-semibold text-gray-800 uppercase tracking-wider";
  const subHeaderClassName =
    "px-5 py-2 border-b border-gray-300 bg-gray-200 text-center text-sm font-medium text-gray-600";
  const rowClassName =
    "px-5 py-3 border-b border-gray-200 bg-white text-center text-sm";
  return (
    <table className="w-2/3 leading-normal">
      <thead>
        <tr>
          <th className={`${headerClassName} w-1/5`}></th>
          <th className={`${headerClassName} w-4/15`}>AR</th>
          <th className={`${headerClassName} w-4/15`}>ER</th>
          <th className={`${headerClassName} w-4/15`}>IR</th>
        </tr>
        <tr>
          <th className={subHeaderClassName}></th>
          <th className={subHeaderClassName}>querdar</th>
          <th className={subHeaderClassName}>comer</th>
          <th className={subHeaderClassName}>escribir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className={rowClassName}>{row.column0}</td>
            <td className={rowClassName}>{row.column1}</td>
            <td className={rowClassName}>{row.column2}</td>
            <td className={rowClassName}>{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PastTenseTable;
