export function sum(a, b) {
  return a + b;
}

export function record(type, ...values){
  if (type instanceof Array ){
    return [...values];
  }

  if (typeof type === 'object' && type){
    const object = {};
    values.forEach((value, i) => (object[i] = value));
    return object;
  }

  return null;
}