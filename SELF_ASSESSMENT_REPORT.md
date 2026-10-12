# Self-assessment - IA#1
Submitted by: 24127086 Trần Hoàng Khánh My
Total I claim: 100/100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 30 | `npm test` passes; `qty: 1.5` and `qty: 0` throw `RangeError`, see `src/cart.js` lines 8-10 |
| Tests | 20 | 20 | 5 test cases covering the happy path, empty cart, free-shipping threshold, and both RangeError conditions in `test/cart.test.js` |
| Harness | 20 | 20 | `rules.md` file included (with stack, commands, NEVER, and gate). Github Actions CI is added and runs on push at `.github/workflows/test.yml` |
| Brief | 15 | 15 | `brief.md` names the files, the contract, error cases, and explicitly states "no dependencies" |
| AI-LOG.md | 15 | 15 | Properly formatted, detailing tool usage, prompts, rejected code, and manual changes |

## What I did not manage
All required features and tests were successfully implemented and edge cases safely covered.

## What I would do differently
Next time, I will try to write the TDD structure myself first to see how many failure scenarios I can anticipate before asking the assistant to help fill in the missing edge cases.