const container = document.querySelector(".container");

const button = document.getElementById("btn");


function populateScreen(gridPerSide){

    clearGrid();
    let sizePerSide = 960 / gridPerSide;
    for(let i =0; i < gridPerSide * gridPerSide; i++){
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.height =`${sizePerSide}px`;
        grid.style.width = `${sizePerSide}px`;
//Add hovered class to change color of the grid when hovered    
        grid.addEventListener('mouseenter',()=>{
            grid.classList.add('hovered');
        })
        container.appendChild(grid);
    }
}
function clearGrid(){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}
populateScreen(16);

button.addEventListener('click', ()=>{
    let gridPerSide = parseInt(prompt("Number of Squares per side?"));
    if(!isNaN(gridPerSide) && gridPerSide > 0 && gridPerSide <= 100){
        populateScreen(gridPerSide);
    } else{
        alert(`Please enter valid number between 1 and 100`);
    }
    
})