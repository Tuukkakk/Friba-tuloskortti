var currentPage = window.location.href;

// Check which page is currently active and add 'active' class to the corresponding navbar link
if (currentPage.includes("startRound.html")) {
  document.getElementById("startRound").classList.add("active");
} else if (currentPage.includes("savedRounds.html")) {
  document.getElementById("savedRounds").classList.add("active");
} else if (currentPage.includes("addplayer.html")) {
  document.getElementById("addPlayer").classList.add("active");
}
