import React, { ChangeEvent } from "react";
import FilterFrame from "../public/filter-frame.svg";
import classNames from "classnames";

type CheckboxProps = {
  name: string;
  label?: string | React.ReactNode;
  color?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const filterFrameSize = (tagName: string) => {
  if (tagName.length > 12) return "L";
  return tagName.length > 5 ? "M" : "S";
};

const sizes = {
  S: "w-24",
  M: "w-36",
  L: "w-44",
};

function Checkbox({
  onChange,
  name,
  label,
  color,
  checked,
  disabled,
  className,
}: CheckboxProps) {
  const sizeClass = sizes[filterFrameSize(name)];

  return (
    <>
      <div className="relative inline-block">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
          className="appearance-none"
        />
        {checked && (
          <FilterFrame
            className={`filterFramePath inline absolute ${sizeClass} top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fill-transparent stroke-[2px] stroke-[#71FA4C] z-[-10]`}
          />
        )}
        <label
          htmlFor={name}
          className={classNames(
            "uppercsase select-none hover:cursor-pointer md:leading-10 transition-all",
            { "opacity-20 dark:opacity-30": disabled },
            className,
            color
          )}
        >
          {label || name}
        </label>
      </div>
    </>
  );
}

export default React.memo(Checkbox);
