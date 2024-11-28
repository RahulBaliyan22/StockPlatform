import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";

//test suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("no_image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src','media/homeHero.png');
  });
  test("render hero image", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button",{name:"/Sign up for free/i"});
    expect(signupButton).toBeInTheDocument();
    expect(heroImage).toHaveClass('rounded-1');
  });
});
