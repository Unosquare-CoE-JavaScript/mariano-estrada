import { render, screen } from "../../../../test-utils/testing-library-utils";
import Options from "../Options";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

// test("displays image for each topping option from server", async () => {
//   render(<Options optionType="toppings" />);

//   const images = await screen.findAllByRole("img", { name: /toppings$/i });
//   expect(images).toHaveLength(3);

//   const imageTitles = images.map((element) => element.alt);
//   expect(imageTitles).toEqual(["Cherries topping", "M&Ms topping", 'Hot fudge topping']);
// });