const tokenNameEasy = [
  "+1",
  "+1",
  "0",
  "0",
  "0",
  "-1",
  "-1",
  "-1",
  "-2",
  "-2",
  "Peril - Refer to the scenario card for resolution.",
  "Peril - Refer to the scenario card for resolution.",
  "Cultist - Refer to the scenario card for resolution.",
  "Eltdown Shards - Refer to the scenario card for resolution.",
  "Tentacle - Instant fail.",
  "Elder Sign - Refer to your character card for resolution."
]

window.randomTokenEasy = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameEasy.length)
  const randomToken = tokenNameEasy[randomIndex]
  console.log(randomToken)
}

const tokenNameStandard = [
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

window.randomTokenStandard = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameStandard.length)
  const randomToken = tokenNameStandard[randomIndex]
  console.log(randomToken)
}
