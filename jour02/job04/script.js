const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    if (event.key.match(/^[a-zA-Z]$/)) {
        textarea.value += event.key;
    }
})