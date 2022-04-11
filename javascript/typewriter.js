async function typeWriter(messageToShow, targetElement, timeBetween, currentPos = 0) {
    if (currentPos < messageToShow.length) {
        document.getElementById(targetElement).innerHTML += messageToShow.charAt(currentPos);
        currentPos++;
        setTimeout(function() { typeWriter(messageToShow, targetElement, timeBetween, currentPos); }, timeBetween);
    } else {
        return true;
    }
}
// call all onload function
window.addEventListener('load', (event) => {
    // Edit the text in the typewriter for changes
    // edit number to adjust typing speed
    typeWriter("I'm Nattachai", 'writename', 100);
    typeWriter('{Coding Is My Passion}', 'writename-des', 200);
});