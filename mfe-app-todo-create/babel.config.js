module.exports = {
  presets: [
    '@babel/preset-env',
    {
      targets: {
        node: 'current',
      },
    },
    '@babel/preset-react' // Transpile JSX syntax
  ]
};
