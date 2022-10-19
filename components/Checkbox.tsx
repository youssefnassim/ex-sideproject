import React, { ChangeEvent } from "react";

type CheckboxProps = {
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function Checkbox({ onChange, name, checked }: CheckboxProps) {
  return (
    <>
      {name === "Web development" && <br />}
      <div className="relative inline">
        <input
          type="checkbox"
          name={name}
          id={name}
          onChange={onChange}
          checked={checked}
          className="appearance-none"
        />
        <label
          htmlFor={name}
          className={`uppercase text-[30px] hover:cursor-pointer ${
            !checked ? "before:w-full" : "before:w-0"
          } transition-all before:content-[''] before:bg-red-600 before:absolute before:h-[3px] before:top-1/2
          before:transition-all`}
        >
          {name}
        </label>
      </div>
    </>
  );
}

export default React.memo(Checkbox);
