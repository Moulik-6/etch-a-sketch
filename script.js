const container = document.querySelector(".container");

for(let i = 0; i < 17; i++){
    const div = [];

    div[i] = document.createElement("div");

    container.appendChild(div[i]);
}