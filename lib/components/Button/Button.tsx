import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
