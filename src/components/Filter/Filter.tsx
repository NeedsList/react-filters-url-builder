import { FC, PropsWithChildren } from "react";
import cn from "../../utils/style";
import FilterItem from "../FilterItem";
import { FilterItemProps } from "../FilterItem/FilterItem";

type FilterProps = PropsWithChildren & {
	className?: string;
};

type SubComponentsProps = {
	Item: FC<FilterItemProps>;
};

const Filter: FC<FilterProps> & SubComponentsProps = ({
	children,
	className,
}) => {
	return (
		<div
			className={cn(
				"w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5",
				className,
			)}>
			{children}
		</div>
	);
};

Filter.Item = FilterItem;

export default Filter;
