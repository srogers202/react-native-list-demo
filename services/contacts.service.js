import Faker from 'faker';

function getFakeContacts(num) {
  let arr = new Array(num);
  for (let i = 0; i < num; i++) {
    arr[i] = getFakeContact();
  }
  return arr;
}

function getFakeContact() {
  return {
    ...Faker.helpers.createCard(),
  };
}

export { getFakeContacts };
