import { describe, expect, it, vi } from "vitest";
import { render } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import { OrFilter } from "./or-filter";
import { OrFilterProps } from "./or-filter.types";
import { CustomFilter } from "../../molecules/ml-filter-selector";

const filters = [
  {
    key: "brand",
    type: "list",
    title: "Brands",
    options: [{ label: "Brand A", selected: false, quantity: 8 }],
  },
] satisfies OrFilterProps<CustomFilter>["filters"];

const mountDesktopElement = (
  onFilterUpdate: OrFilterProps<CustomFilter>["onFilterUpdate"]
) => {
  return render(
    <OrFilter
      onFilterUpdate={onFilterUpdate}
      title="Filter by"
      filters={filters}
    />
  );
};

describe("organisms/or-filter", () => {
  it("should render correctly", async () => {
    const fn = vi.fn();
    const user = userEvents.setup();
    const render = mountDesktopElement(fn);
    const checkbox = render.getByTestId("at-checkbox");

    expect(render.getByText(filters[0].title)).toBeDefined();
    await user.click(
      render.getByText(filters[0].options[0].label, { selector: "span" })
    );
    expect(fn).toHaveBeenCalledWith(filters[0].key, filters[0].options[0]);
    expect(checkbox).toBeDefined();
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
