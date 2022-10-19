import React, { ChangeEvent } from "react";

export type Checkboxes = {
  [key: string]: boolean;
};

export enum MultiCheckboxState {
  CHECKED = "CHECKED",
  UNCHECKED = "UNCHECKED",
  INDETERMINATE = "INDETERMINATE",
}

type UseMultiCheckboxProps = {
  defaultValue?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function useMultiCheckbox(props: UseMultiCheckboxProps = {}) {
  const { defaultValue = false, onChange } = props;
  const [checkboxes, setCheckboxes] = React.useState<Checkboxes>({});
  const [state, setState] = React.useState<MultiCheckboxState>();

  React.useEffect(() => {
    syncState(checkboxes);
  }, [checkboxes]);

  const handleChange = React.useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event);
      } else {
        setCheckboxes((prev) => ({
          ...prev,
          [event.target.name]: !prev[event.target.name],
        }));
      }
    },
    [onChange]
  );

  const register = (name: string, checked?: boolean) => {
    if (checkboxes[name] === undefined) {
      setCheckboxes((prev) => ({ ...prev, [name]: checked ?? defaultValue }));
    }

    return {
      onChange: handleChange,
      name,
      checked: checkboxes[name] ?? checked ?? defaultValue,
    };
  };

  function syncState(checkboxes: Checkboxes) {
    const values = Object.values(checkboxes);
    if (values.every((v, _, arr) => v === arr[0])) {
      setState(
        values[0] ? MultiCheckboxState.CHECKED : MultiCheckboxState.UNCHECKED
      );
    } else {
      setState(MultiCheckboxState.INDETERMINATE);
    }
  }

  function getValue(): Checkboxes;
  function getValue(name: string): boolean;
  function getValue(names: string[]): Checkboxes;
  function getValue(nameOrNames?: string[] | string) {
    if (nameOrNames === undefined) {
      return checkboxes;
    }
    if (Array.isArray(nameOrNames)) {
      let _checkboxes: Checkboxes = {};
      Object.keys(checkboxes).forEach((key) => {
        if (nameOrNames.includes(key)) {
          _checkboxes[key] = checkboxes[key];
        }
      });
      return _checkboxes;
    } else {
      return checkboxes[nameOrNames];
    }
  }

  function setValue(name: string, value: boolean) {
    setCheckboxes((old) => ({ ...old, [name]: value }));
  }

  function syncValuesTo(value: MultiCheckboxState) {
    if (state === value) {
      return;
    }

    let _checkboxes: Checkboxes = {};
    Object.keys(checkboxes).forEach(
      (k) =>
        (_checkboxes[k] = value === MultiCheckboxState.CHECKED ? true : false)
    );
    setCheckboxes(_checkboxes);
  }

  return {
    register,
    selectAll: () => syncValuesTo(MultiCheckboxState.CHECKED),
    unselectAll: () => syncValuesTo(MultiCheckboxState.UNCHECKED),
    setValue,
    getValue,
    state,
    count: Object.keys(checkboxes).filter((name) => checkboxes[name]).length,
  };
}
