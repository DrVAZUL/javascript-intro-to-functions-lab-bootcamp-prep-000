function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase
  var lowercase = string.toLowerCase
  if(string === uppercase) {
    return "I cant hear you!"
  } else if (string === lowercase) {
    return "YES INDEED!"
  }
}