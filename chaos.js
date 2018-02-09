window.randomTokenEasy = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameEasy.length)
  const randomToken = tokenNameEasy[randomIndex]
  console.log(randomToken)
  return randomToken;
}

displayEasy = (a) => {
  document.getElementById("demo").innerHTML = a;
}

window.randomTokenStandard = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameStandard.length)
  const randomToken = tokenNameStandard[randomIndex]
  console.log(randomToken)
  return randomToken;
}

displayStandard = (a) => {
  document.getElementById("demo").innerHTML = a;
}

window.randomTokenHard = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameHard.length)
  const randomToken = tokenNameHard[randomIndex]
  console.log(randomToken)
  return randomToken;
}

displayHard = (a) => {
  document.getElementById("demo").innerHTML = a;
}

window.randomTokenExpert = () => {
  const randomIndex = Math.floor(Math.random() * tokenNameExpert.length)
  const randomToken = tokenNameExpert[randomIndex]
  console.log(randomToken)
  return randomToken;
}

displayExpert = (a) => {
  document.getElementById("demo").innerHTML = a;
}
