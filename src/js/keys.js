// take body to change the content
const body = document.getElementsByTagName("body");
// stop keyboard shortcuts
window.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "S" || event.key === "s")) {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }

  if (event.ctrlKey && event.key === "C") {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }
  if (event.ctrlKey && (event.key === "E" || event.key === "e")) {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }
  if (event.ctrlKey && (event.key === "I" || event.key === "i")) {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }
  if (event.ctrlKey && (event.key === "K" || event.key === "k")) {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }
  if (event.ctrlKey && (event.key === "U" || event.key === "u")) {
    event.preventDefault();
    alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
  }
});
// stop right click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Mohon Maaf Inspect Element Tidak Diperbolehkan");
});
