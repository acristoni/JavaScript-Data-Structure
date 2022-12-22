const obj = {
    foo: 2,
    bar: 3,
    baz: 3
}
const prop = 'bax'

function stripProperty(obj, prop) {
    let object = obj
    const propriedade = prop

    delete object[propriedade]

    return object;
  }

console.log(stripProperty(obj, prop))