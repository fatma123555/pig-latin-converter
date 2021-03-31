// pig latin sentence converter
// TODO change this to a word converter and seperate the
// check for if it is a sentene to be split up into an array
// and in that function - check for punctuation to split it
function pigLatinConverter(str) {
    new_sent = []
    arr_words = str.split(" ")
    for (var i = 0; i < arr_words.length; i++) {
        vowels = "aeiouAEIOU"
        word = arr_words[i]
        if (vowels.includes(arr_words[i][0])) {
            new_word = word + "yay"
            new_sent.push(new_word)
        } else {
            new_word = word.slice(1) + word[0] + "ay"
            new_sent.push(new_word)
        }
    }
    joined_sent = new_sent.join(" ")
    return joined_sent
}

// get the text from the text area and use the logic functions
// to output the result to the paragraph tags
function getText() {
  var area = document.getElementById("text-to-convert");
  str = area.value // here we got value
//   alert(pigLatinConverter(str) + " i did it");
  document.getElementById("output").innerHTML = pigLatinConverter(str)

}