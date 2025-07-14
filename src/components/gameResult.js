const Result = ({ guessNumber, secretNumber }) => {
  let result;
  if (guessNumber) {
    if (guessNumber > secretNumber) {
      if (Number(guessNumber) > 10) {
        result = "please enter the number from 1 to 10";
      } else {
        result = "Higher";
      }
    } else if (Number(guessNumber) < secretNumber) {
      result = "Lower";
    } else if (Number(guessNumber) === secretNumber) {
      result = "Yup! You're Correct";
    } else {
      result = "Enter the valid input";
    }
  }
  return <h3>You Guessed: {result}</h3>;
};

export default Result;
