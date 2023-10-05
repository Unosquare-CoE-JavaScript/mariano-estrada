export type WordProvider = () => string;

const words = [
  'React',
  'Typescript',
  'Web',
  'Javascript',
  'Vue',
  'Unosquare',
  'Array',
  'String',
  'Java',
  'Localhost',
  'Developer',
];

export function makeWordProvider() {
  if (process.env.NODE_ENV === 'test') {
    return () => 'vue';
  } else {
    return () => {
      const newRandomIndex = Math.floor(Math.random() * words.length);
      return words[newRandomIndex].toLowerCase();
    };
  }
}
