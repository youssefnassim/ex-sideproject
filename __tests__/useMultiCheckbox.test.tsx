import { renderHook, act, render } from "@testing-library/react";
import useMultiCheckbox, {
  Checkboxes,
  MultiCheckboxState,
} from "hooks/useMultiCheckbox";

const checkboxes: Checkboxes = {
  react: false,
  typescript: true,
  "web development": false,
};

const allChecked: Checkboxes = {
  react: true,
  typescript: true,
  "web development": true,
};

const allUnchecked: Checkboxes = {
  react: false,
  typescript: false,
  "web development": false,
};

const allCases = [
  { state: MultiCheckboxState.CHECKED, checkboxes: allChecked },
  { state: MultiCheckboxState.UNCHECKED, checkboxes: allUnchecked },
  { state: MultiCheckboxState.INDETERMINATE, checkboxes },
];

function registerCheckboxes(checkboxes: Checkboxes, register: any) {
  Object.keys(checkboxes).forEach((key) =>
    act(() => {
      register(key, checkboxes[key]);
    })
  );
}

describe("useMultiCheckbox", () => {
  it("should register checkboxes with default value (input level)", () => {
    const { result } = renderHook(() =>
      useMultiCheckbox({ defaultValue: false })
    );

    registerCheckboxes(checkboxes, result.current.register);

    expect(result.current.getValue()).toEqual(checkboxes);
  });

  it("should select all checkboxes", () => {
    const { result } = renderHook(() => useMultiCheckbox());

    registerCheckboxes(checkboxes, result.current.register);

    act(() => {
      result.current.selectAll();
    });

    expect(result.current.getValue()).toEqual(allChecked);
  });

  test.each(allCases)(
    "should get correct state ($state)",
    ({ checkboxes, state }) => {
      const { result } = renderHook(() => useMultiCheckbox());

      registerCheckboxes(checkboxes, result.current.register);

      expect(result.current.state).toEqual(state);
    }
  );
});
