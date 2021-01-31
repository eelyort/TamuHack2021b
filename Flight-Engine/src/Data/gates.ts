const gates: Gate[] = [];

const letters = 'ABCDEFGH';
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// add gates to array
for (let i = 0; i < letters.length; i += 1) {
  for (let j = 0; j < numbers.length; j += 1) {
    gates.push({
      location: {
        latitude: 41.9742,
        longitude: 87.9073,
      },
      code: letters[i] + numbers[j],
    } as Gate);
  }
}

export default gates;
