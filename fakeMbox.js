const queuedObservers = new Set()

const observe = (fn) => queuedObservers.add(fn)
const observable = (obj) => new Proxy(obj, { set })

function set(target, propKey, value, receiver) {
  const result = Reflect.set(target, propKey, value, receiver)
  for (let fn of queuedObservers) {
    fn()
  }

  //返回bool值
  return result
}

module.exports = {
  observe,
  observable,
}
