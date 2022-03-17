const { faker } = require("@faker-js/faker");
const {
  ADVISORS_DATA,
  ITEMS_AMOUNT_IN_RESPONSE,
} = require("../constants/advisors.constants");

export const generateAdvisorsData = () => {
  const arr = [];

  for (let i = 0; i < ITEMS_AMOUNT_IN_RESPONSE; i++) {
    arr.push({
      name: faker.name.findName(),
      reviews: faker.random.number(ADVISORS_DATA.REVIEWS),
      status: faker.random.arrayElement(ADVISORS_DATA.STATUSES),
      languages: faker.random.arrayElements(ADVISORS_DATA.LANGUAGES),
      id: faker.datatype.uuid(),
    });
  }

  return arr;
};

module.exports = { generateAdvisorsData };
