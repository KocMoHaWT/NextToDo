module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/scssTransform.ts',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.component\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.component\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
};
