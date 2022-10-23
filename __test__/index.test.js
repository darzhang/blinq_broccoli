import { fireEvent, render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import "@testing-library/jest-dom";
import RequestDialog from "../components/RequestDialog";
import SuccessMessage from "../components/SuccessMessage";

test("renders the heading", () => {
  render(<HomePage />);

  const header = screen.getByText("BROCCOLI & CO.");

  expect(header).toBeInTheDocument();
});

test("renders invite button ", () => {
  render(<HomePage />);

  const inviteButton = screen.getByText("Request an invite");
  expect(inviteButton).toBeInTheDocument();
});

test("request an invite button render the request dialog", () => {
  render(<HomePage />);

  expect(screen.queryByText("Request on Invite")).toBeNull();

  fireEvent.click(screen.getByText("Request an invite"));

  expect(screen.queryByText("Request on Invite")).toBeInTheDocument();
});

test("error message is not visible at first", () => {
  render(<RequestDialog />);

  expect(screen.queryByTestId("error-message")).toBeNull();
});

test("checking the success being rendered", async () => {
  render(<SuccessMessage />);

  expect(screen.getByText("All done!")).toBeInTheDocument();
});
