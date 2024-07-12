// Define byeSpeaker function
function byeSpeaker(name) {
    console.log("Goodbye " + name);
}

// Define helloSpeaker function
function helloSpeaker(name) {
    console.log("Hello " + name);
}

(function () {
    var names = ["Siddharth", "Rohit", "Virat", "Hardik", "Jasprit", "Surya", "Rishabh", "Axar", "Gill", "Sanju", "Jimmy"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker(names[i]);
        } else {
            helloSpeaker(names[i]);
        }
    }
})();
