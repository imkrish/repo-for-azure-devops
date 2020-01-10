module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: './test-results', outputName: 'jest-results.xml' },
    ],
  ],
  modulePathIgnorePatterns: ['node_modules', '<rootDir>/dist/'],
}
