import React from "react";

export default function ProductTable({ children }) {
  return (
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-bold uppercase "
                >
                  Qtde
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-start text-xs font-bold uppercase "
                >
                  Nome
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold uppercase  text-center"
                >
                  Total
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold uppercase  text-center"
                >
                  Ação
                </th>
              </tr>
            </thead>
            {children}
          </table>
        </div>
      </div>
    </div>
  );
}