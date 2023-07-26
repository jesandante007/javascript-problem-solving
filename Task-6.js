// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const generateRandomPassword = (length) => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/{}~";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
  
    let password = "";
    password += getRandomCharacter(uppercaseChars);
    password += getRandomCharacter(lowercaseChars);
    password += getRandomCharacter(numberChars);
    password += getRandomCharacter(specialChars);
  
    for (let i = length - password.length; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
    return fisherYatesShuffle(password);
  };
  
  const getRandomCharacter = (chars) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return chars[randomIndex];
  };
  
  /* const shuffleString = (str) => {
    let shuffledString = "";
    while (str.length > 0) {
      const randomIndex = Math.floor(Math.random() * str.length);
      shuffledString += str[randomIndex];
      str = str.slice(0, randomIndex) + str.slice(randomIndex + 1);
    }
    return shuffledString;
  }; */

  const fisherYatesShuffle = (str) => {
    const charArray = str.split("");
  
    for (let i = str.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [charArray[i], charArray[j]] = [charArray[j], charArray[i]];
    }
    return charArray.join("");
  };

  console.log(generateRandomPassword(8));