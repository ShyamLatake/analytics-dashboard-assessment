import React, { useState } from "react";
import { TableProps, TableData } from "@/utils/interfaces/dataHandling";

const Table: React.FC<TableProps> = ({ data, rowsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fields to include in the table
  const fieldsToShow = ["Sr. No.", "VIN (1-10)", "County", "City", "State", "Postal Code"];

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get data for the current page
  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  // Pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full w-full border border-gray-300 text-left table-auto">
        <thead className="bg-gray-100">
          <tr>
            {fieldsToShow.map((field) => (
              <th
                key={field}
                className="px-4 py-2 border-b text-sm text-gray-700 font-semibold"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-200"
            >
              {/* Sr. No. */}
              <td className="px-4 py-2 border-b">
                {(currentPage - 1) * rowsPerPage + index + 1}
              </td>
              {/* Remaining Fields */}
              {["VIN (1-10)", "County", "City", "State", "Postal Code"].map((field, idx) => (
                <td key={idx} className="px-4 py-2 border-b text-sm text-gray-600">
                  {item[field as keyof TableData] || "N/A"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
        <button
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <p className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
        <button
          onClick={() =>
            handlePageChange(Math.min(totalPages, currentPage + 1))
          }
          className={`px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
