import ArrayBufferConverter from "../ArrayBufferConverter";

test('Object in string for buffer', () => {
  const buffer = new ArrayBufferConverter();
  buffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(buffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});