import { View } from "react-native";export interface MlTableProps {
  className?: string
  columns: TableColumn[]
  data: TableRow[]
  testId?: string
}

export interface TableColumn {
  header: string
  accessor: string
}

export interface TableRow {
  [key: string]: React.ReactNode
}
