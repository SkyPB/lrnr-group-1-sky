import { render, screen } from "@testing-library/react";
import QuizGenerator from "../pages/QuizGenerator";

test("renders QuizGenerator with necessary elements", () => {
  render(<QuizGenerator />);

  // Checks for the title
  const title = screen.getByText(/Quiz Generation Options/i);
  expect(title).toBeInTheDocument();

  // Checks for dropdown options
  const topicLabel = screen.getByText(/Topic/i);
  const difficultyLabel = screen.getByText(/Expertise/i);
  const questionAmountLabel = screen.getByText(/Number of Questions/i);
  const styleLabel = screen.getByText(/Style of questions/i);

  expect(topicLabel).toBeInTheDocument();
  expect(difficultyLabel).toBeInTheDocument();
  expect(questionAmountLabel).toBeInTheDocument();
  expect(styleLabel).toBeInTheDocument();

  // Checks for the submit button
  const submitButton = screen.getByText(/Submit/i);
  expect(submitButton).toBeInTheDocument();
});
