
const string = "Привет, Как дЕла?";

 console.log(getVowels(string));


function getVowels(text) {
    var vowels = "ауоыэяюёиеАУОЫЭЯЮЁИЕ";
    var result = "";
    for (var i = 0; i < text.length; i++){
        for (var j = 0; j < vowels.length; j++){
            if (text[i] == vowels[j]) {
                result+=text[i];
            }
        }
    }
     return result;
}
