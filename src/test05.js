function onWindowResize() {
    const widthRatio = window.innerWidth / window.outerWidth;

    if (widthRatio < 0.45) {
        console.log(1, widthRatio);
        document.body.classList.remove("Violet", "gold");
        document.body.classList.add("DodgerBlue");

    } else if (widthRatio < 0.7) {
        console.log(2, widthRatio);
        document.body.classList.remove("DodgerBlue", "gold");
        document.body.classList.add("Violet");
        
    } else {
        console.log(3, widthRatio);
        document.body.classList.remove("Violet", "DodgerBlue");
        document.body.classList.add("gold");
    }
}

onWindowResize();
window.addEventListener("resize", onWindowResize);
