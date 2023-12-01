import { ChangeEvent, FC, PropsWithChildren, useState } from "react";
import cn from "../../utils/style";
import { useFilterStore } from "../../context/FilterContext";

export type FilterItemProps = PropsWithChildren & {
  label: string;
  name: string;
  className?: string;
};

const FilterItem: FC<FilterItemProps> = ({ name, label, className }) => {
  const [, addFilter] = useFilterStore();
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    addFilter(name, inputValue);
  };

  return (
    <>
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
        <div>
          <input type="text" onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </>
  );
};

export default FilterItem;
