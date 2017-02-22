

var outcome = [
    "get bitten by an Crocodile while visiting the Amazon.",
    "step on a jellyfish while visiting the great barrier reef.",
    "fall off the great wall of China.",
    "get sick drinking water in Mexico.",
    "get stranded in an avalanche in Switzerland.",
    "witness the Northern Lights.",
    "visit Machu Pichu",
    "drink beer in Germany during Octoberfest.",
    "win 10 million dollars gambling in Monaco."]

function UpdateDiv() {
    document.getElementById("result").innerHTML ="You will " + outcome[Math.floor(Math.random() * outcome.length)];

}

