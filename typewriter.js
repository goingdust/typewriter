const sentence = "if you change your mind, i'm the first in line";

const delayLetters = function(string) {
  let i = 0;
  intervalId = setInterval(() => {
    process.stdout.write(string.charAt(i++));
    if (i > string.length) {
      process.stdout.write('\n');
      clearInterval(intervalId);
    }
  }, 50); 
};

delayLetters(sentence);