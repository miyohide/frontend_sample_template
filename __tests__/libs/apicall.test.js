import axios from "axios";
import { getWelcomeMessage } from "../../src/javascripts/libs/apicall";

jest.mock("axios");

test("get API call result", async () => {
  const mockedValue = "Mock!!!";
  axios.get.mockResolvedValue({ data: mockedValue });
  expect(await getWelcomeMessage("test arg")).toBe(mockedValue);
});
