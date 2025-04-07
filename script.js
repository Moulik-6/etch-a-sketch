const container = document.querySelector("div");
const div = [[],[]];

for(let i = 1; i < 2; i++){
    for(let j = 1; j < 2; j++){
        div[[i],[j]] = document.createElement("div");

        container.appendChild(div[[i],[j]]);

    }
}