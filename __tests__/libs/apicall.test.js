import axios from "axios";
import { getRootPathWithName } from "../../src/javascripts/libs/apicall";

jest.mock("axios");

test("get API call result", async () => {
  const mockedValue = "Mock!!!";
  axios.get.mockResolvedValue({ data: mockedValue });
  expect(await getRootPathWithName("test arg")).toBe(mockedValue);
});
