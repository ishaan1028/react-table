import { createColumnHelper } from "@tanstack/react-table";
import { format } from "date-fns";
import IndeterminateCheckbox from "./IndeterminateCheckbox";
import { size } from "lodash";

const columnHelper = createColumnHelper();
export const columnDef = [
    columnHelper.accessor("id", {
      header: "Id",
    }),
    // {
    //   accessorFn:(row)=> `${row.first_name} ${row.last_name}`,
    //   header: "Name",
    // },
    {
      accessorKey: "first_name",
      header: "First Name",
      size:50,
      minSize:50,
      maxSize:500,
      enableResizing:true,
      // header: <div>First Name <span style={{backgroundColor:"crimson"}}>FN</span></div>,
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "date",
      header: "Date",
    },
  ];
export const columnDefFilter = [
    columnHelper.accessor("id", {
      header: "Id",
    }),
    // {
    //   accessorFn:(row)=> `${row.first_name} ${row.last_name}`,
    //   header: "Name",
    // },
    {
      accessorKey: "first_name",
      header: "First Name",
      // header: <div>First Name <span style={{backgroundColor:"crimson"}}>FN</span></div>,
    },
    {
      accessorKey: "last_name",
      header: "Last Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "date",
      header: "Date",
      enableGlobalFilter:false,
      enableColumnFilter:false

    },
  ];

  // cell merge example
const columnDefWithCellMerge = [
  {
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    header: "Name",
  },
];

export const columnDefWithGrouping = [
  {
    accessorKey: "id",
    header: "Id",
    sorting_id: "id"
  },
  {
    header: "Name",
    columns: [
      {
        accessorKey: "first_name",
        header: "First Name",
        sorting_id: "first_name"
      },
      {
        accessorKey: "last_name",
        header: "Last Name",
        sorting_id: "last_name"
      },
    ],
  },
  {
    accessorKey: "email",
    header: "Email",
    sorting_id: "email"
  },
  {
    accessorKey: "date",
    header: "Date",
    sorting_id: "date",
    cell: ({ getValue }) => {
      console.log('xffgetValue', getValue())
      return format(new Date(getValue()),"MM-dd-yyyy") 
    }
  },
];
export const columnDefWithCheckBox = [
  {
    id: "select",
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor("id", {
    header: "Id",
  }),
  {
    accessorFn: (row) => `${row.first_name}`,
    header: "First Name",
    cell:({getValue,row})=>(<div style={{cursor:"pointer"}} onClick={row.getToggleSelectedHandler()}>{getValue()} sel</div>)
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ getValue }) => format(new Date(getValue()),"MM-dd-yyyy"),
  },
];