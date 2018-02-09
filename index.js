const tokenTypes = require('./chaos-tokens.js')
const tokenName = tokenTypes.tokenNameEasy

const randomIndex = Math.floor(Math.random() * tokenName.length)
const randomToken = tokenName[randomIndex]

console.log('Your chaos token is:', randomToken)
