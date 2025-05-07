import { View } from "react-native";
import { MlTableProps } from "./ml-table.types";

export const MlTable = ({
  className,
  columns,
  data,
  testId = "or-table",
}: MlTableProps) => {
  return (
    <View className={`w-full rounded-lg overflow-x-auto ${className}`}>
      <table className="w-full" data-testid={testId}>
        <thead className="bg-stone-100 ">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="px-[0.625rem] py-[0.9375rem] text-left text-primary text-lg font-medium tracking-0.1 min-w-35 sm:min-w-[12rem] md:min-w-[13.3rem] lg:min-w-[18.667rem] xl:min-w-[14.417rem]"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="text-primary border-b-[0.031rem] border-secondary last:border-none"
            >
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="text-base px-[0.625rem] py-[0.9375rem]"
                >
                  {row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </View>
  );
};
