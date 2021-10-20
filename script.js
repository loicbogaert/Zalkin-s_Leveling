var etape = new Array
etape = document.getElementsByClassName("etape"); 

//localStorage.clear()

var invisible = [];
var arrayToParse = localStorage.getItem("list", invisible);
invisible = JSON.parse(arrayToParse);

// at the start (empty array)
if (invisible === null) {
    invisible = [];
    localStorage.setItem("list", JSON.stringify(invisible));
}
else {
    invisible = JSON.parse(arrayToParse);
    localStorage.setItem("list", JSON.stringify(invisible));
}

// function to put invisible onclick or visible
for (i = 0; etape.length > i; i++) {

    if (invisible !== null && invisible.includes(etape[i].innerHTML)) {
            etape[i].classList.replace("visible", "invisible");
    }

    etape[i].onclick = function() {
            // arrays
        localStorage.setItem("list", JSON.stringify(invisible));
        var arrayToParse = localStorage.getItem("list", invisible);
        var parsedArray = JSON.parse(arrayToParse);
        // if item isn't in the array push it in + make it invisible
            if(parsedArray.indexOf(this.innerHTML) < 0) {
                invisible.push(this.innerHTML);
                localStorage.setItem("list", JSON.stringify(invisible));
                this.classList.replace("visible", "invisible");
                console.log(invisible)
            }
        // if item is in the array = delete it + make it visible
            else {
                invisible.splice(parsedArray.indexOf(this.innerHTML), 1)
                localStorage.setItem("list", JSON.stringify(invisible));
                this.classList.replace("invisible", "visible") 
            }
        }
    }

// TRIGGERING THE IMAGES POPUP
var imgPopup = new Array;
var imgTrigger = new Array;
imgPopup = document.getElementsByClassName("boxPopup");
imgTrigger = document.getElementsByClassName("triggerImg");

for (i = 0; imgPopup.length > i; i++) {
    imgTrigger[i].addEventListener("mouseover", function(){
        console.log(this.nextSibling)
        this.nextSibling.childNodes[0].classList.add("boxVisible");
        this.nextSibling.childNodes[0].classList.remove("boxInvisible");
    })

    imgTrigger[i].addEventListener("mouseout", function(){
        this.nextSibling.childNodes[0].classList.remove("boxVisible");
        this.nextSibling.childNodes[0].classList.add("boxInvisible");
    })
}


// refresh button
document.getElementById("refresh").onclick = function() {
    localStorage.clear();
    location.reload();
}

    //popup for bandits text

    var popupTrigger = document.getElementById("popupTrigger");
    var closeContainer = document.getElementById("close-container");
    console.log(popupTrigger)

    popupTrigger.onclick = function() {
        var textToDisplay = document.getElementById("popup");
        textToDisplay.classList.replace("popupInvisible", "popupVisible")
    };

    closeContainer.onclick = function() {
        var textToDisplay = document.getElementById("popup");
        textToDisplay.classList.replace("popupVisible", "popupInvisible")
    }

