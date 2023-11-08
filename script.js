// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  aiResult = document.querySelector(".ai_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = aiResult.src =
      "/img/rock.png";
    result.textContent = "Wait";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let aiImages = [
        "/img/rock.png",
        "/img/paper.png",
        "/img/scissors.png"
      ];
      // Set the Ai image to a random option from the array
      aiResult.src = aiImages[randomNumber];

      // Assign a letter value to the Ai option (R for rock, P for paper, S for scissors)
      let aiValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Ai",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Ai",
        SS: "Draw",
        SR: "Ai",
        SP: "User"
      };

      // Look up the outcome value based on user and Ai options
      let outComeValue = outcomes[userValue + aiValue];

      // Display the result
      result.textContent =
        userValue === aiValue ? "Match Draw" : `${outComeValue} Won!`;
    }, 2500);
  });
});