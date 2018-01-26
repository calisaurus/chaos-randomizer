const tokenName = require('./chaos-tokens.json')

const randomIndex = Math.floor(Math.random() * tokenName.length)
const randomToken = tokenName[randomIndex]

console.log('Your chaos token is:', randomToken)
