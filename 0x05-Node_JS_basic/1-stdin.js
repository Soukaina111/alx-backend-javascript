// Write a message to the standard output (console)
// // asking the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');
// Listen for 'data' events on the standard input (user input)
// // When data is received, write a message back to the standard output
// // containing the user's name
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
