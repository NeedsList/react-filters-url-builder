import { FC } from "react";

type GreetingProps = {
  message?: string;
};

const Greeting: FC<GreetingProps> = ({ message = "World" }) => {
  return <div>Hello, {message}!</div>;
};

export default Greeting;
