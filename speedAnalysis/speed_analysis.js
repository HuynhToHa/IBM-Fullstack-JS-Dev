let testText = "The quick brown for jumps over the lazy dog.";
let startTime, endTime;

const startTest = () => {
  // Set the test text
  document.getElementById("inputText").value = testText;

  // Reset user input and output
  let userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();

  document.getElementById("output").innerHTML = "";

  // Start timer
  startTime = new Date().getTime();
};

const endTest = () => {
  endTime = new Date().getTime();

  // Disable user input
  document.getElementById("userInput").readOnly = true;

  // Calculate time elapsed and words per minute (WPM)
  var timeElapsed = (endTime - startTime) / 1000; // in seconds
  var userTypedtext = document.getElementById("userInput").value;

  // Split the text using regex to count words correctly
  var typedWords = userTypedtext.split(/\s+/).filter((word) => {
    return word !== "";
  }).length;

  var wpm = 0; // Default value

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round(typedWords / timeElapsed) * 60;
  }

  // Display the results
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML =
    "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " +
    typedWords +
    "</p>" +
    "<p>Time Elapsed: " +
    timeElapsed.toFixed(2) +
    " seconds</p>" +
    "<p>Words Per Minute (WPM): " +
    wpm +
    "</p>";
};
