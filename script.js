var etape = new Array
etape = document.getElementsByClassName("etape"); 

//localStorage.clear()

var invisible = [];
var arrayToParse = localStorage.getItem("list", invisible);
invisible = JSON.parse(arrayToParse);
console.log(invisible)

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

// !!!!!!!!!!! refresh button (faire en sorte de vider le local storage quand ça marchera !!!!!!!!!!!!!)
document.getElementById("refresh").onclick = function() {
    localStorage.clear();
    location.reload();
}
