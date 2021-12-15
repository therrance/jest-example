import { sum, record } from './func';

function func(useThrow){
  if(useThrow){
    throw new Error("you are using the wrong JDK");
  }
}

test('Tes exceptions', ()=>{
  expect(()=>{func()}).not.toThrow();
  expect(()=>{func(true)}).toThrow();
})

test('Check the strings', () => {
  const str = 'Hello';

  expect(str).toBe('Hello');
  expect(str).toMatch(/ll/i);
})

test('Check the objects', ()=>{
  expect({a:1}).toEqual({a:1});
  expect({a:1, b:{c:2}}).toEqual({a:1,b:{c:2}});
  expect([1,2,'Hello']).toEqual([1,2,'Hello']);
});

test('Check the numbers', ()=>{
  const value = 2+2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);
  expect(value).toBe(4);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
})

test('boolean, null, undefined', () => {
  expect(null).toBeNull(); // Ok
  expect(null).toBeDefined(); // Ok
  expect(null).not.toBeUndefined(); // Ok
  expect(null).not.toBeTruthy(); // Ok
  expect(1).toBeTruthy(); // Ok
  expect(0).toBeFalsy(); // Ok
})

test('Check the function add to run correctly', () => {
  expect(sum(10, 20)).toEqual(30);
  expect(sum(20, 20)).toEqual(40);
  expect(sum(10, 10)).toEqual(20);
});


describe('Test function record', () => {
  test('Check the function record to work with an array', () => {
    expect(record([], 'one', 'two')).toEqual(['one', 'two']);
    expect(record([], 'one', undefined, 3)).toEqual(['one', undefined, 3]);
    expect(record([])).toEqual([]);
  });

  test('Check the function record to work with an object', () => {
    expect(record({}, "one", "two")).toEqual({ 0: "one", 1: "two" });
    expect(record({}, 'one', undefined, 3)).toEqual({
      0: 'one',
      1: undefined,
      2: 3
    });
    expect(record({})).toEqual({});
  });

  test('Test that record returns null', () => {
    expect(record(1, "one", "two")).toEqual(null);
    expect(record('', 'one', undefined, 3)).toEqual(null);
    expect(record(undefined)).toEqual(null);
  });
});

