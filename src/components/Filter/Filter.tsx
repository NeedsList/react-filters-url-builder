import { FC, PropsWithChildren } from "react";
import cn from "../../utils/style";
import FilterItem from "../FilterItem";
import { FilterItemProps } from "../FilterItem/FilterItem";
import { FilterProvider } from "../../context/FilterContext";

type FilterProps = PropsWithChildren & {
  className?: string;
  isOpen: boolean;
  onChange: (queryString: string) => void;
};

type SubComponentsProps = {
  Item: FC<FilterItemProps>;
};

const Filter: FC<FilterProps> & SubComponentsProps = ({
  children,
  className,
  isOpen = false,
  onChange,
}) => {
  return (
    <FilterProvider onChange={onChange}>
      {isOpen && (
        <div
          className={cn(
            "relative w-screen max-w-md flex-auto rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",
            className
          )}
        >
          {children}
        </div>
      )}
    </FilterProvider>
  );
};

Filter.Item = FilterItem;

export default Filter;
