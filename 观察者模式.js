const { observable, observe } = require('./fakeMbox')
const person = observable({
  name: '潘帅',
  age: 20,
})

const print = () => {
  console.log(`${person.name},${person.age}`)
}

observe(print)
person.name = '李四'
