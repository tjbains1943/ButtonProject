document.getElementById("addBtn").onclick = () => {
    let num = 1;
    for (let index = 0; index < 40; index++) {
    const btn = document.createElement("button");
    btn.setAttribute("id", `button ${num}`);
    btn.className += " btn m-1 p-1"
    btn.onclick = (event) => {
        alert(event.target.id);
        console.log(`fuck me good ${num}`);
    }
    
    var node = document.createTextNode(`button ${num}`);
    btn.appendChild(node)
    document.getElementById("display").appendChild(btn)
    num++;
    }
}

document.getElementById("remBtnSlow").onclick = () => {
    let index = 40;
    // for (let index = 40; index > 0; index--) {
        var myVar = setInterval(myTimer, 1000);
        function myTimer() {
        var el = document.getElementById(`button ${index}`)
    el.parentNode.removeChild(el);
    index--;
    if (index === 0) {
        clearInterval(myVar);
    }
    }
    
// }
    // var el = document.getElementById("button 40")
    // el.parentNode.removeChild(el);

}

document.getElementById("clear").onclick = () => {
    document.getElementById('display').innerHTML = "";
}