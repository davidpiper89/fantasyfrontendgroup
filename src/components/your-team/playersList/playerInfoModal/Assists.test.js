import React from "react";
import { render, screen } from "@testing-library/react";
import Assists from "./Assists";

// const render = (component) =>
//   rtlRender(<Provider store={store}>{component}</Provider>);

describe("Assists", () => {
  test("check assists renders to the screen", () => {
    render(<Assists />);
    expect(screen.getByText(/Assists/)).toBeInTheDocument();
  });
});
