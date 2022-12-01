const buttonEl = document.getElementById("generate");

buttonEl.addEventListener("click", function () {
  getColorScheme();
});

function getColorScheme() {
  let chosenColor = document.getElementById("picked-color").value.slice(1);
  let chosenMode = document.getElementById("picked-mode").value;
  console.log(chosenColor);
  console.log(chosenMode);

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${chosenMode}`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < 5; i++) {
        document.getElementsByClassName("color-hex")[i].textContent =
          data.colors[i].hex.value;
        document.getElementsByClassName("color-display")[
          i
        ].style.backgroundColor = data.colors[i].hex.value;
      }
    });
}

for (let i = 0; i < 5; i++) {
  let colorHex = document.getElementsByClassName("color-hex");

  colorHex[i].addEventListener("click", function () {
    navigator.clipboard.writeText(colorHex[i].textContent);
    colorHex[i].innerHTML = `<span>Copied!</span>`;
  });
}
