# Project Harness & Rules

- **Stack:** Pure JavaScript, Node.js, ES Modules.
- **Commands:** Run `npm test` to execute the `node:test` suite, or `npm run gate` to format and test.
- **Never:** Never import any external dependencies into `src/cart.js`. Never push code to the repository if `npm test` is failing.
- **Gate:** Code is only accepted if it passes the test suite (`npm test`). GitHub Actions CI is configured to run automatically on every push.