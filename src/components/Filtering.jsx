import React, { useCallback, useMemo, useState } from "react";
import "./table.css";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import debounce from "lodash/debounce"
import dataJSON from "./data.json";
import { columnDef, columnDefFilter, columnDefWithGrouping } from "./columns";
import FilterFunction from "./FilterFunction";

const Filtering = () => {
  const finalData = React.useMemo(() => dataJSON, []);
  const finalColumnDef = React.useMemo(() => columnDefFilter, []);
  const [filtering,setFilering]= useState("");
  const [columnFiltering,setColumnFilering]= useState([]);
  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel:getFilteredRowModel(),
    state:{
        globalFilter:filtering,
        // columnFilters:columnFiltering
    },
    onGlobalFilterChange:setFilering,
    // onColumnFiltersChange:setColumnFilering
  });

  return (
    <>
    <input type="text" style={{marginBottom:"2rem"}} placeholder="global filter" value={filtering} onChange={(e)=>setFilering(e.target.value)}/>     
    {/* <input type="text" style={{marginBottom:"2rem"}} placeholder="global filter" value={filtering} onChange={(e)=>setFilering(e.target.value)}/>      */}
     <table>
        <thead>
          {tableInstance.getHeaderGroups().map((headerEl) => {
            return (
              <tr key={headerEl.id}>
                {headerEl.headers.map((columnEl) => {
                  return (
                    <th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                            columnEl.column.columnDef.header,
                            columnEl.getContext()
                          )}
                           {columnEl.column.getCanFilter() ? (
                            <div>
                              <input type="text" value={columnEl.column.getFilterValue()} onChange={(e)=>columnEl.column.setFilterValue(e.target.value)}/>
                            </div>
                          ) : null}
                           {/* {columnEl.column.getCanFilter() ? (
                            <div>
                              <FilterFunction
                                column={columnEl.column}
                                table={tableInstance}
                              />
                            </div>
                          ) : null} */}
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

export default Filtering;