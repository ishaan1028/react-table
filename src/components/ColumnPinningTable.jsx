import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';

// Sample data with 10 columns
const data = [
  { col1: 'Row 1 Col 1', col2: 'Row 1 Col 2', col3: 'Row 1 Col 3', col4: 'Row 1 Col 4', col5: 'Row 1 Col 5', col6: 'Row 1 Col 6', col7: 'Row 1 Col 7', col8: 'Row 1 Col 8', col9: 'Row 1 Col 9', col10: 'Row 1 Col 10' },
  { col1: 'Row 2 Col 1', col2: 'Row 2 Col 2', col3: 'Row 2 Col 3', col4: 'Row 2 Col 4', col5: 'Row 2 Col 5', col6: 'Row 2 Col 6', col7: 'Row 2 Col 7', col8: 'Row 2 Col 8', col9: 'Row 2 Col 9', col10: 'Row 2 Col 10' },
  { col1: 'Row 3 Col 1', col2: 'Row 3 Col 2', col3: 'Row 3 Col 3', col4: 'Row 3 Col 4', col5: 'Row 3 Col 5', col6: 'Row 3 Col 6', col7: 'Row 3 Col 7', col8: 'Row 3 Col 8', col9: 'Row 3 Col 9', col10: 'Row 3 Col 10' },
  // Add more rows as needed
];

// Define 10 columns
const columns = [
  { accessorKey: 'col1', header: 'Column 1',cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div> },
  { accessorKey: 'col2', header: 'Column 2' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col3', header: 'Column 3' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col4', header: 'Column 4' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col5', header: 'Column 5' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col6', header: 'Column 6' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col7', header: 'Column 7' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col8', header: 'Column 8' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col9', header: 'Column 9' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
  { accessorKey: 'col10', header: 'Column 10' ,cell:({row,getValue})=><div style={{width:"400px"}}>{getValue()}</div>},
];

const ColumnPinningTable = () => {
  const [columnPinning, setColumnPinning] = useState({ left: ['col7'], right: ['col10'] });

  const table = useReactTable({
    data,
    columns,
    state: { columnPinning },
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ overflowX: 'auto' }}>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColumnPinningTable;
