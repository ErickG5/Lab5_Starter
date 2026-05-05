// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('valid phone number with parens', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('invalid phone number letters', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});
test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

// isEmail
test('valid email', () => {
  expect(isEmail('test@email.com')).toBe(true);
});
test('valid email with underscores', () => {
  expect(isEmail('my_name@domain.org')).toBe(true);
});
test('invalid email no @', () => {
  expect(isEmail('invalidemail.com')).toBe(false);
});
test('invalid email no domain', () => {
  expect(isEmail('test@')).toBe(false);
});

// isStrongPassword
test('valid strong password', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});
test('valid strong password with underscore', () => {
  expect(isStrongPassword('abc_1234')).toBe(true);
});
test('invalid password starts with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});
test('invalid password too short', () => {
  expect(isStrongPassword('ab1')).toBe(false);
});

// isDate
test('valid date', () => {
  expect(isDate('12/25/2023')).toBe(true);
});
test('valid date single digit', () => {
  expect(isDate('1/1/2023')).toBe(true);
});
test('invalid date wrong format', () => {
  expect(isDate('2023-12-25')).toBe(false);
});
test('invalid date letters', () => {
  expect(isDate('ab/cd/efgh')).toBe(false);
});

// isHexColor
test('valid 6 char hex', () => {
  expect(isHexColor('#ff5733')).toBe(true);
});
test('valid 3 char hex no hash', () => {
  expect(isHexColor('fff')).toBe(true);
});
test('invalid hex wrong characters', () => {
  expect(isHexColor('#xyz123')).toBe(false);
});
test('invalid hex wrong length', () => {
  expect(isHexColor('#12345')).toBe(false);
});