const canvas = document.querySelector("#js-canvas");
// asdadklasjdlkasjd
let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
}

function onMouseDown(event) {
    console.log(event);
    painting = true;
}

function onMouseUp(event) {
   stopPainting();
}

function onMouseLeave(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
}