import { playerArr } from "./main.js";

function addNewPlayer() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (name !== "") {
    // Check that player name isnt empty
    const newPlayer = {
      Name: name,
    };

    var retrievedArr = localStorage.getItem("playerArr");
    const parsedArr = JSON.parse(retrievedArr);

    if (parsedArr != null && parsedArr.length != null) {
      parsedArr.push(newPlayer);
      localStorage.setItem("playerArr", JSON.stringify(parsedArr));
    } else {
      playerArr.push(newPlayer);
      localStorage.setItem("playerArr", JSON.stringify(playerArr));
    }

    nameInput.value = "";
  } else {
    alert("Pelaajan nimi ei voi olla tyhjä!");
  }
}

export { addNewPlayer };
