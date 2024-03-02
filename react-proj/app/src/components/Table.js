import React from "react";

const Table = ({ data, headers }) => {
  return (
    <div className="w-full overflow-auto rounded-md shadow-sm">
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-purple-500 text-gray-100 uppercase tracking-wider">
            {headers.map((header) => (
              <th key={header} className="px-4 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              {row.map((cell) => (
                <td key={cell} className="px-4 py-2 border">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
