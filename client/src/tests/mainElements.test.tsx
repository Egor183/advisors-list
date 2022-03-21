import { render } from "@testing-library/react";
import Advisor from "pages/AdvisorsPage/modules/AdvisorsList/modules/Advisor";

it("Advisor exist", () => {
  render(
    <Advisor
      name="Jack"
      id="1"
      image=""
      languages={["German"]}
      reviews={12}
      status="online"
    />
  );
  const element = document.getElementById("1");

  expect([element].length).toBe(1);
});
