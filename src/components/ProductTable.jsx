import React from "react";

export default function ProductTable({ children }) {
  return (
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-bold uppercase text-center">
                  Item
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-bold uppercase "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center text-xs font-bold uppercase "
                >
                  Qnt
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
            <tbody className="dark:bg-zinc-300 bg-gray-700">{children}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
