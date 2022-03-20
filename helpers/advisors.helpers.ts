const { faker } = require("@faker-js/faker");
const {
  ADVISORS_DATA,
  ITEMS_AMOUNT_IN_RESPONSE,
  ADVISORS_REQUEST_DELAY,
} = require("../constants/advisors.constants");

export const generateAdvisorsData = () => {
  const arr = [];

  for (let i = 0; i < ITEMS_AMOUNT_IN_RESPONSE; i++) {
    arr.push({
      name: faker.name.findName(),
      reviews: faker.random.number(ADVISORS_DATA.REVIEWS),
      status: faker.random.arrayElement(ADVISORS_DATA.STATUSES),
      languages: faker.random.arrayElements(ADVISORS_DATA.LANGUAGES),
      image: faker.image.avatar(),
      id: faker.datatype.uuid(),
    });
  }

  return arr;
};

export const createDelay = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ADVISORS_REQUEST_DELAY);
  });
};

module.exports = { generateAdvisorsData, createDelay };
