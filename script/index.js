quotes = [
    "Give me yogurt 🍓",
    "Not a X-Men",
    "GULO GULO GULO GULO",
    "This website was a hyperfixation",
    "Hello World",
    "I'm just a tank weasel.",
    "Pile of anxiety",
    "Slowly turning in to a sparkledog",
    "👑🐷 Rest in peace Alex",
    "Pretending to be an Adult",
    "Not IT support",
    "Procrastinating on Artfight",
    "Overcomplicating projects",
    "Gender: just let me vibe (Any pronoun)"
]

window.addEventListener("load", function()
{
  this.document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)]
});
