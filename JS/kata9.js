var encryptThis = function(text) {
    let words = text.split(" ");
    let result = [];
    
    words.forEach(word => {
        var chars = [...word];
        chars[0] = chars[0].charCodeAt(0);
        var temp = chars[1];
        chars[1] = chars[chars.length-1];
        chars[chars.length-1] = temp;
        result.push(chars.join(''));
      });
    return result.join(' ');
  }
//   Encrypt this!

//   You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
  
//   Your message is a string containing space separated words.
//   You need to encrypt each word in the message using the following rules:
//   The first letter must be converted to its ASCII code.
//   The second letter must be switched with the last letter
//   Keepin' it simple: There are no special characters in the input.
//https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript