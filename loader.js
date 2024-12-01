document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  const loadingText = document.getElementById("loading-text");

  const texts = ["Hi", "नमस्कार", "नमस्ते", "નમસ્તે", "நமஸ்காரம்", "నమస్కారం", "ನಮಸ್ಕಾರ", "ਨਮਸਕਾਰ"];
  let textIndex = 0;

  // Function to change text
  const changeText = () => {
    loadingText.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
  };

  // Change text every 1.5 seconds
  const interval = setInterval(changeText, 1500);

  // Simulate page load completion
  setTimeout(() => {
    clearInterval(interval); // Stop text rotation
    loader.style.display = "none"; // Hide loader
    content.style.display = "block"; // Show main content
  }, 8000); // Loader duration (adjust as needed)
});
