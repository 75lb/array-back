export default {
  input: 'test.mjs',
  output: {
    file: 'dist/test.js',
    format: 'cjs'
  },
  external: [ 'assert', 'test-runner' ]
}
