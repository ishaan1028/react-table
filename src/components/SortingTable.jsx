import React from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

import dataJSON from "./data.json";
import { columnDef, columnDefWithGrouping } from "./columns";

const SortingTable = () => {
  const [sorting, setSorting] = React.useState([]);

  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDefWithGrouping, []);
  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
    },
    onSortingChange: setSorting,
  });

  console.log("xfftest", sorting);

  return (
    <>
      <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th
                      key={columnEl.id}
                      colSpan={columnEl.colSpan}
                      // onClick={columnEl.column.getToggleSortingHandler()} //toggle sorting
                    >
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                      {/* {
                            {asc:" :ASC", desc:" :DESC"}[columnEl.column.getIsSorted()??null]
                          } */}
                      {console.log(
                        "xffcolumnEl.column",
                        columnEl.column.columnDef.accessorKey
                      )}
                      {!columnEl.isPlaceholder &&
                        columnEl.column.columnDef.header !== "Name" && (
                          <div
                            className="flexdiv"
                            style={{
                              display: "flex",
                              gap: 8,
                              width: "100%",
                              justifyContent: "space-around",
                            }}
                          >
                            <button
                              onClick={() =>
                                setSorting([
                                  {
                                    id: columnEl.column.columnDef.accessorKey,
                                    asc: true,
                                  },
                                ])
                              }
                            >
                              asc
                            </button>
                            <button
                              onClick={() =>
                                setSorting([
                                  {
                                    id: columnEl.column.columnDef.accessorKey,
                                    desc: true,
                                  },
                                ])
                              }
                            >
                              desc
                            </button>
                            <button onClick={() => setSorting([])}>
                              clear
                            </button>
                          </div>
                        )}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowEl) => {
            return (
              <tr key={rowEl.id}>
                {rowEl.getVisibleCells().map((cellEl) => {
                  return (
                    <td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SortingTable;
