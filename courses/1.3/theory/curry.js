//Example 1

// const add = (x,y) => {
//    return x + y
// }

//  const curry = (f) => {
//     return x => y => f(x,y)
//  }

//  const modulo = curry((x,y) => y % x)
//  const isOdd = modulo(2) // 2, y => 2 % y

// const result = isOdd(3)

//Example 2

// const filter =curry((f, xs)=>{
//     xs.filter(f)
// })

// const getOdds = filter(isOdd)
// const resultFilter = getOdds([1,2,3,4,5])

// console.log(resultFilter)

//Exercises (exercises were solved on the codepen provided on the course)
//Setup
// const _ = R;
// const split = _.curry((delimiter, string) => string.split(delimiter))

//Excercise 1
const words1 = split(' ');

QUnit.test('Ex1: split', (assert) => {
  assert.deepEqual(words1('Jingle bells Batman smells'), [
    'Jingle',
    'bells',
    'Batman',
    'smells',
  ]);
});

//Exercise 1a
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = _.map(words);

QUnit.test('Ex1a: map/split', (assert) => {
  assert.deepEqual(
    sentences(['Jingle bells Batman smells', 'Robin laid an egg']),
    [
      ['Jingle', 'bells', 'Batman', 'smells'],
      ['Robin', 'laid', 'an', 'egg'],
    ],
  );
});

// Exercise 2
//==============
const filterQs = _.filter(_.test(/q/gi));

QUnit.test('Ex2: filter', (assert) => {
  assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), [
    'quick',
    'quarry',
    'quails',
  ]);
});

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x, y) => (x >= y ? x : y); // <- leave be

// TODO: rewrite max in its "simplest" form
const max = _.reduce(_keepHighest, 0);

QUnit.test('Ex3: max', (assert) => {
  assert.equal(max([323, 523, 554, 123, 5234]), 5234);
});

// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = _.curry((start, end, xs) => xs.slice(start, end));

QUnit.test('Bonus 1', (assert) => {
  assert.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
});

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
const take = slice(0);

QUnit.test('Bonus 2', (assert) => {
  assert.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
});
