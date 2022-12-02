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

function onSubmit(event){

    const name = localStorage.getItem("name");

    if (name === null){
        console.log("name s null");
        localStorage.setItem("name", "frollo");
    }else{
        console.log(`hello ${name}`);
    }

    event.preventDefault();
    console.log("submit");
}

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", onSubmit);