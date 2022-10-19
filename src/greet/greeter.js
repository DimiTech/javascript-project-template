function greet(name) {
  return `Hello ${name || 'World'}!`
}

module.exports = {
  greet,
}
