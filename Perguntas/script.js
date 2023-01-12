function processarPergunta(id) {
  if (id == "respostaCerta") {
    document.getElementById(id).style.backgroundColor = "green";
  } else {
    document.getElementById("respostaCerta").style.backgroundColor = "green";
    document.getElementById(id).style.backgroundColor = "red";
  }
}
