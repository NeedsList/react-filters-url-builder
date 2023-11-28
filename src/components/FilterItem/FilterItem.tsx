import { FC, PropsWithChildren } from "react";
import cn from "../../utils/style";

export type FilterItemProps = PropsWithChildren & {
	onClick: () => void;
	title: string;
	className?: string;
};

const FilterItem: FC<FilterItemProps> = ({ onClick, title, className }) => {
	return (
		<div
			className={cn(
				"group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 cursor-pointer",
				className,
			)}
			onClick={onClick}>
			{title}
		</div>
	);
};

export default FilterItem;
