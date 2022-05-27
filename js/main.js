document.querySelector('#shoot').addEventListener('click', playGame)

async function playGame(){

  const userChoice = document.querySelector("#userChoice").value.toLowerCase();
  const res = await fetch(`/api?student=${userChoice}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#serverChoice").textContent = data.serverChoice
  document.querySelector("#result").textContent = data.result

}