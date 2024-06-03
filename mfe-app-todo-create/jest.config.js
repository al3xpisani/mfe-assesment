module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    }
  };
  