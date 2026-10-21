import test from 'node:test';
import assert from 'node:assert/strict';
import { generateInquiryDraft, getWhatsAppInquiryUrl } from './inquiryHelper.ts';

test('generateInquiryDraft formats message with user name and jar count', () => {
  const result = generateInquiryDraft({
    name: 'তানভীর',
    jarCount: 3,
  });

  assert.ok(result.includes('আমি তানভীর'));
  assert.ok(result.includes('3টি জার'));
  assert.ok(result.includes('JUSO Natural Refreshment'));
});

test('generateInquiryDraft provides fallback for empty name and validates min count', () => {
  const result = generateInquiryDraft({
    name: '',
    jarCount: -5,
  });

  assert.ok(result.includes('শুভাকাঙ্ক্ষী'));
  assert.ok(result.includes('1টি জার'));
});

test('getWhatsAppInquiryUrl properly encodes URI string', () => {
  const url = getWhatsAppInquiryUrl('Hello JUSO');
  assert.ok(url.startsWith('https://wa.me/'));
  assert.ok(url.includes('Hello%20JUSO'));
});
