import { playerArr } from "./main.js";

function addNewPlayer() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim(); // Trimmaa mahdolliset välilyönnit

  if (name !== "") {
    // Check that player name isnt empty
    const newPlayer = {
      Name: name,
    };

    // Tarkista onko pelaajatiedot jo tallennettu
    var retrievedArr = localStorage.getItem("playerArr");
    const parsedArr = JSON.parse(retrievedArr);

    if (parsedArr != null && parsedArr.length != null) {
      parsedArr.push(newPlayer);
      localStorage.setItem("playerArr", JSON.stringify(parsedArr));
    } else {
      // Jos pelaajatietoja ei ole vielä tallennettu, lisää uusi taulukko
      playerArr.push(newPlayer);
      localStorage.setItem("playerArr", JSON.stringify(playerArr));
    }

    nameInput.value = ""; // Tyhjennä kenttä lisäyksen jälkeen
  } else {
    alert("Pelaajan nimi ei voi olla tyhjä!"); // Jos nimi on tyhjä, näytä alert
  }
}

export { addNewPlayer };
