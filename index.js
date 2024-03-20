// Write your code in this file!
// Define the current user
const currentUser = 'Grace Hopper';

// Create a welcome message using string interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Generate an excited welcome message by converting the above message to uppercase
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Formulate a short greeting that includes only the first initial of the currentUser's name
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

