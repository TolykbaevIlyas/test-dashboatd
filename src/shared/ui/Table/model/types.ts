export interface ITableColumn {
  key: string;
  title: string;
}

export interface ITableRow {
  [key: string]: string | number;
}

export interface ITableProps {
  columns: ITableColumn[];
  data: ITableRow[];
}