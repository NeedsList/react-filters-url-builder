import renderer from "react-test-renderer";
import { describe, expect, it } from "vitest";
import Greeting from "./index";

describe("Greeting component", () => {
  it("Greeting component renders correctly", () => {
    const component = renderer.create(<Greeting />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(" prop working", () => {
    const component = renderer.create(<Greeting message={"Universe"} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
