const fs = require("fs");

function generateFlashcards() {
  const flashcards = [];
  const imageFolder = "../public/images"; // Path to your image folder

  fs.readdirSync(imageFolder).forEach((file, index) => {
    const id = index + 1;
    const imageName = file;
    const source = `${imageFolder}/${imageName}`; // Assuming the images are in the "/images" folder
    const back = imageName.replace(/\.png$/, ""); // Extract back value from image name
    flashcards.push({ id, front: source, back }); // Store the image source URL as a string
  });

  return flashcards;
}



const flashcards = generateFlashcards();
