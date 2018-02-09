const tokenName = [
  "+1",
  "0",
  "0",
  "-1",
  "-1",
  "-1",
  "-2",
  "-2",
  "-3",
  "-4",
  "Peril - Refer to the scenario card for resolution.",
  "Peril - Refer to the scenario card for resolution.",
  "Cultist - Refer to the scenario card for resolution.",
  "Eltdown Shards - Refer to the scenario card for resolution.",
  "Tentacle - Instant fail.",
  "Elder Sign - Refer to your character card for resolution."
]

console.log('loading a')

window.randomToken = () => {
  const randomIndex = Math.floor(Math.random() * tokenName.length)
  const randomToken = tokenName[randomIndex]
  console.log(randomToken)
}

console.log('loading b')
