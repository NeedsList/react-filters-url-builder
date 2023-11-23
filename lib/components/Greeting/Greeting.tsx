import { FC } from "react";

type GreetingProps = {
  message?: string;
};

const Greeting: FC<GreetingProps> = ({ message = "World" }) => {
  return <div className="text-2xl">Hello, {message}!</div>;
};

export default Greeting;
