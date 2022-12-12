
//-----------------------------------------------------------------------------
function chooseGreetingByTime() {
    const now = new Date().getHours();

    console.log('now is ', now);
    
    if (now < 12)
        return "Good Morning";
    else if (now < 17)
        return "Good Afternoon";
    else
        return "Good Evening";
}

//-----------------------------------------------------------------------------
function handleLoginFormSubmit(event) {
    event.preventDefault();

    const name = localStorage.getItem("name");

    if (name === null) {
        console.log("name s null");
        localStorage.setItem("name", "frollo");
    }
    else {
        console.log(`${chooseGreetingByTime()}, ${name}`);
    }

    console.log("submit");
}

//-----------------------------------------------------------------------------

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", handleLoginFormSubmit);