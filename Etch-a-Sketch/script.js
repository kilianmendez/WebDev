/*------------------------INICIAL LOAD--------------------------*/

let container = document.getElementById("container")

function addBoxes(gridSize){

    for(let i = 0; i < (gridSize*gridSize); i++){

        let box = document.createElement("div")
        box.className = `box`
        box.classList.add(`size${gridSize}`)
        container.appendChild(box)

    } 

    /*-------------------PAINTING--------------------------*/

    let boxes = document.querySelectorAll(".box")

    boxes.forEach(singleBox => {
    
    singleBox.addEventListener("click", () => {    
        if(singleBox.style.backgroundColor !== selectedColor){
            singleBox.style.backgroundColor= selectedColor
        }
    })
    })
    /*--------------------------------------------------*/

}

addBoxes(16);

/*--------------------------------------------------*/

/*----------------------POPUP--------------------------*/

let sizeButton = document.getElementById("size-btn")

sizeButton.addEventListener("click", function(){
    document.getElementById("popup").classList.add("active")
    document.getElementById("overlay").classList.add("active")
})

document.getElementById("overlay").addEventListener("click", function(){
    this.classList.remove('active')
    document.getElementById("popup").classList.remove("active")
})

function resizeGrid(newSize){
    addBoxes(newSize)
}

function deleteChildren(){
    while(container.firstChild){
        container.removeChild(container.firstChild)
    }
}

let size16 = document.getElementById("16")
let size32 = document.getElementById("32")
let size64 = document.getElementById("64")
let size100 = document.getElementById("100")

size16.addEventListener("click", function(){
    deleteChildren()
    resizeGrid(16)
    document.getElementById("popup").classList.remove("active")
    document.getElementById("overlay").classList.remove("active")
})
size32.addEventListener("click", function(){
    deleteChildren()
    resizeGrid(32)
    document.getElementById("popup").classList.remove("active")
    document.getElementById("overlay").classList.remove("active")
})
size64.addEventListener("click", function(){
    deleteChildren()
    resizeGrid(64)
    document.getElementById("popup").classList.remove("active")
    document.getElementById("overlay").classList.remove("active")
})
size100.addEventListener("click", function(){
    deleteChildren()
    resizeGrid(100)
    document.getElementById("popup").classList.remove("active")
    document.getElementById("overlay").classList.remove("active")
})

/*--------------------------------------------------*/

/*-------------------COLOR PICKING--------------------*/

let colorPicker = document.getElementById("color-selector")

let selectedColor = "rgb(0, 0, 0)"

colorPicker.addEventListener("change", function(){
    selectedColor = colorPicker.value
})

/*--------------------------------------------------*/

/*-------------------MOUSEDOWN PAINTING--------------------*/

let painting = false;  

container.addEventListener('mousedown', () => {
    painting = true;
});

document.addEventListener('mouseup', () => {
    painting = false;
});

container.addEventListener('mousemove', (event) => {
    if (painting) {
        const box = event.target;
        if (box.classList.contains('box')) {
            if (box.style.backgroundColor !== selectedColor) {
                box.style.backgroundColor = selectedColor;
            }
        }
    }
});

/*--------------------------------------------------*/

/*-------------------Erasing--------------------*/

let eraseButton = document.getElementById("erase-btn")

eraseButton.addEventListener("click", function(){
    const boxes = container.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.style.backgroundColor = "white";
    })
})
