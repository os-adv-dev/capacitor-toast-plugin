module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Modifique isso
  roots: ['<rootDir>/tests'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
};