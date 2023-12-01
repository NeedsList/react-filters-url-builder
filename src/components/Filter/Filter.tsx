import { FC, PropsWithChildren } from "react";
import cn from "../../utils/style";
import FilterItem from "../FilterItem";
import { FilterItemProps } from "../FilterItem/FilterItem";
import { FilterProvider } from "../../context/FilterContext";

type FilterProps = PropsWithChildren & {
  className?: string;
  onChange: (queryString: string) => void;
};

type SubComponentsProps = {
  Item: FC<FilterItemProps>;
};

const Filter: FC<FilterProps> & SubComponentsProps = ({
  children,
  className,
  onChange,
}) => {
  return (
    <FilterProvider onChange={onChange}>
      <div
        className={cn(
          "w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",
          className
        )}
      >
        {children}
      </div>
    </FilterProvider>
  );
};

Filter.Item = FilterItem;

export default Filter;
