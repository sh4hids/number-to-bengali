# Number to Bengali

Convert any number (English) to Bengali with this tiny node module.

## Install

```bash
npm install -S number-to-bengali
```

```bash
yarn add number-to-bengali
```

## Use

```javascript
const toBengaliNum = require('number-to-bengali');

toBengaliNum(123) // returns '১২৩'
toBengaliNum(1.23) // returns '১.২৩'
toBengaliNum('12.3') // returns '১২.৩'
toBengaliNum('-12.3') // returns '-১২.৩'
toBengaliNum('a.123') // returns 'Invalid input type'
```

## Test
To test this module you have to have jest installed globally.

```bash
npm test
```
