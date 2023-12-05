import {
  ChangeEvent,
  FC,
  PropsWithChildren,
  SyntheticEvent,
  useState,
} from "react";
import cn from "../../utils/style";
import { useFilterStore } from "../../context/FilterContext";
import { useClickOutside } from "../../hooks/useClickOutside";

export type FilterItemProps = PropsWithChildren & {
  label: string;
  name: string;
  className?: string;
};

const FilterItem: FC<FilterItemProps> = ({ name, label, className }) => {
  const [, addFilter] = useFilterStore();
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const ref = useClickOutside(() => setIsActive(false));

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addFilter(name, inputValue);
  };

  return (
    <div ref={ref}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={cn(
          "group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 cursor-pointer",
          className
        )}
      >
        {label}
      </div>
      {isActive && (
        <form
          onSubmit={handleSubmit}
          className="absolute top-0 -right-52 flex flex-col p-2 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <span className="text-center">{label}</span>
          <input
            defaultValue={inputValue}
            type="text"
            onChange={handleChange}
            className="my-2 px-2 border border-gray-800 rounded-lg outline-none"
          />
          <button
            type="submit"
            className="font-bold rounded-lg bg-gray-600 text-white"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FilterItem;
