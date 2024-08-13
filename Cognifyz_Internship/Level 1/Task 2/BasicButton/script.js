function changeColor() {
    const button = document.getElementById("colorButton");
    const colors = ["#4CAF50", "#FF5733", "#3498DB", "#9B59B6", "#E67E22"];
    const currentColor = button.style.backgroundColor;
    
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Ensure the new color is different from the current color
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    button.style.backgroundColor = newColor;
}