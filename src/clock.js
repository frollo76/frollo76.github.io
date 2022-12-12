const clockTitle = document.querySelector("#clock");
    
//-----------------------------------------------------------------------------
function nowProc(title) {

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    title.innerHTML = `${hours}:${minutes}`;
}

//-----------------------------------------------------------------------------

console.dir(clockTitle);
nowProc(clockTitle);
setInterval(nowProc, 200, clockTitle);