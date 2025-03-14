// Write your code here!

// 1. Remove the <main> element with id="main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// 2. Create an <h1> element and assign it to a variable named 'newHeader'
const newHeader = document.createElement("h1");

// 3. Set the 'newHeader' id to 'victory'
newHeader.id = "victory";

// 4. Set the text content of 'newHeader' to "YOUR-NAME is the champion"
newHeader.textContent = "Benson Kariuki is the champion"; // Replace "YOUR-NAME" with your actual name

// 5. Append 'newHeader' to the body (or another parent element if required)
document.body.append(newHeader);
