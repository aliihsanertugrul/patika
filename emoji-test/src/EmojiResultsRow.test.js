import { render, screen } from "@testing-library/react";
import EmojiResultsRow from "./EmojiResultRow";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("emojiye tiklayinca kopyalama gerceklesiyor mu", () => {
  let copyEmoji;
  beforeEach(() => {
    render(<App />);
    copyEmoji = screen.getByText("Grinning");
  });

  test("tiklaninca o degeri alabiliyormuyuz", () => {
    userEvent.click(copyEmoji);
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch(
      "😀"
    );
  });
});
