quotes = [
    "Give me yogurt 🍓",
    "Not a X-Men",
    "GULO GULO GULO GULO",
    "This website was a hyperfixation",
    "Hello World",
    "I'm just a tank weasel.",
    "Pile of anxiety",
    "Slowly turning in to a sparkledog",
    "Pretending to be an Adult",
    "Not IT support",
    "Overcomplicating projects",
    "Gender: just let me vibe (They/Them)",
    "aaaaaaaaaaaaa",
    "gr",
    "Fighting inner demons"
]

window.addEventListener("load", function()
{
  this.document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)]
});
