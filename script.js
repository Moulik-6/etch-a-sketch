const container = document.querySelector("div");
const div = [[],[]];

for(let i = 1; i < 101; i++){
    const inContainer = document.createElement("div");
    for(let j = 1; j < 101; j++){
        div[[i],[j]] = document.createElement("div");

        inContainer.appendChild(div[[i],[j]]);

    }
    inContainer.setAttribute("id", "inContainer");
    container.appendChild(inContainer);
}

console.log(container.style.height);