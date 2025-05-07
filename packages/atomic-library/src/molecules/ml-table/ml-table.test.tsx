import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import { MlTable } from "./ml-table";
import { TableRow } from "./ml-table.types";

const columns = [
  { accessor: "name", header: "Name" },
  { accessor: "age", header: "Age" },
  { accessor: "email", header: "Email" },
];

const data = [
  { name: "John Doe", age: 25, email: "john.doe@example.com" },
  { name: "Jane Smith", age: 30, email: "jane.smith@example.com" },
];

describe("OrTable", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    const { getByTestId } = render(<MlTable columns={columns} data={data} />);

    const table = getByTestId("or-table");

    expect(table).toBeInTheDocument();
  });

  it("renders table headers correctly", () => {
    render(<MlTable columns={columns} data={data} />);
    const headerElements = screen.getAllByRole("columnheader");
    expect(headerElements).toHaveLength(columns.length);
    columns.forEach((column, index) => {
      expect(headerElements[index]).toHaveTextContent(column.header);
    });
  });

  it("renders table rows correctly", () => {
    render(<MlTable columns={columns} data={data} />);
    const rowElements = screen.getAllByRole("row");
    expect(rowElements).toHaveLength(data.length + 1); // +1 for the table header row
    data.forEach((row: TableRow, rowIndex) => {
      const cellElements = rowElements[rowIndex + 1].querySelectorAll("td");
      expect(cellElements).toHaveLength(columns.length);
      columns.forEach((column, columnIndex) => {
        const element = String(row[column.accessor]);
        expect(cellElements[columnIndex]).toContainHTML(element);
      });
    });
  });
});
