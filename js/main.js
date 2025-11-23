/*  document.querySelector("#hotspotBtnHead").addEventListener("click", updateInfoboxHead);

function updateInfoboxHead(){
console.log("updateInfoboxHead")
document.querySelector("#efficiency").textContent = "rawr"
document.querySelector("#requirement").textContent = "rawr"

}  */

const hotspotBtn1 = document.querySelector("#hotspotBtn1");

// Tilføj hover-effekt på knappen, som fremhæver den tilsvarende blob i SVG'en
function hotspotBtn1MouseOver() {
  document.querySelector(".svg-container-buttons").classList.add("pointed");
}

// Tilføj event listener til knappen
hotspotBtn1.addEventListener("mouseover", hotspotBtn1MouseOver);

// Fjern hover-effekt når musen forlader knappen
function hotspotBtn1MouseOut() {
  document.querySelector(".svg-container-buttons ").classList.remove("pointed");
}

// Tilføj event listener til knappen
hotspotBtn1.addEventListener("mouseout", hotspotBtn1MouseOut);

// Tilføj klik-funktionalitet på knappen, som fremhæver den valgte blob og opdaterer tekstområdet
function hotspotBtn1Click() {
  resetBtns();
  console.log("hotspotBtn1 clicked");
  document.querySelector(".svg-container-buttons ").classList.toggle("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.add("active");
  document.querySelector(".textarea").textContent = "Du har valgt den orange blob";
  document.querySelector(".textarea").style.backgroundColor = "rgb(255, 165, 0, 0.2)";
}

// Tilføj event listener til knappen
hotspotBtn1.addEventListener("click", hotspotBtn1Click);

// Funktion til at nulstille knappen og fjern fremhævninger
function resetBtns() {
  document.querySelector(".svg-container-buttons ").classList.remove("chosen");
  document.querySelector(".svg-container-buttons #hotspotBtn1").classList.remove("active");
  document.querySelector(".textarea").textContent = "";
}