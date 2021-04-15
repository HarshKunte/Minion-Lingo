const apiurl = "https://api.funtranslations.com/translate/minion.json";

var txtinput = document.querySelector("#txtinput");
var txtoutput = document.querySelector("#txtoutput");
var btnTranslate = document.querySelector("#btntranslate");

btnTranslate.addEventListener("click", clickHandler);

function getFinalApi(text) {
    return apiurl + "?" + "text=" + text;
}

function errorHandler(err) {
    console.log("Theres an Error" + err);
    alert("Something Wrong with the Server ! Please Try Again Later");
}

function clickHandler() {
    var inputValue = txtinput.value;
    

    fetch(getFinalApi(inputValue))
        .then((response) => response.json())
        .then((json) => {
            if(json.contents)
            var minionsText = json.contents.translated
            else
            var minionsText = "Error occured in server , cant translate right now!"
             
            txtoutput.innerText = minionsText;
        })
        .catch(errorHandler);
}