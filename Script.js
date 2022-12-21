function toRGB() {
    // Get the values from the input textboxes
    var red = document.getElementById("red").value;
    var green = document.getElementById("green").value;
    var blue = document.getElementById("blue").value;
  
    // Make sure the values are between 0 and 255
    red = clamp(red, 0, 255);
    green = clamp(green, 0, 255);
    blue = clamp(blue, 0, 255);
  
    // Construct the RGB string
    var rgb = "rgb(" + red + "," + green + "," + blue + ")";
  
    // Set the background color of the body to the RGB value
    document.body.style.backgroundColor = rgb;
  }
  
  // Clamps a value between a minimum and a maximum
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  function myFunction() {
    alert("Enter a number value from 1-255 and then click this button...");
  }