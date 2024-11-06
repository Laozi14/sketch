const container = document.querySelector(".container");

const totalGrids = 16*16;
//Use for loop for creating multiple grids
for(let i =0; i < totalGrids; i++){
    const grid = document.createElement("div");
    console.log(grid);
    grid.classList.add("grid");
//Add hovered class to change color of the grind when hovered    
    grid.addEventListener('mouseenter',()=>{
        grid.classList.add('hovered');
    })
    container.appendChild(grid);
}


