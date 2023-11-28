import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const cn = (...input: Array<ClassValue>) => {
	return twMerge(clsx(input));
};

export default cn;
