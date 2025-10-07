quotes = [
    "Give us yogurt 🍓",
    "Hubble's not a X-Men",
    "Hubble) GULO GULO GULO GULO",
    "This website was the result of several hyperfixations",
    "Hello World",
    "Piles of anxiety",
    "We're slowly turning in to sparkledogs NOO",
    "Pretending to be adults",
    "Overcomplicating projects, one hyperfixation at a time",
    "gr ararrararrf",
    "Fighting inner demons"
]

window.addEventListener("load", function()
{
  this.document.getElementById("quote").innerText = '"' + quotes[Math.floor(Math.random() * quotes.length)] + '"'
});
