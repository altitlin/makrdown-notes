import { type Config } from 'jest'

const config: Config = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/app/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!src/shared/constants/**/*.ts',
  ],
  coverageReporters: ['lcov'],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testRegex: '.*\\.spec\\.tsx?$',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^app(.*)$': '<rootDir>/src/app$1',
    '^shared/constants(.*)$': '<rootDir>/src/shared/constants$1',
    '^shared/ui(.*)$': '<rootDir>/src/shared/ui$1',
    '\\.svg$': '<rootDir>/src/__mocks__/svg.ts',
  },
  transform: {
    '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    '\\.css$': '<rootDir>/src/__mocks__/css.ts',
  },
}

export default config
