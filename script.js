var etape = new Array
etape = document.getElementsByClassName("etape"); 
console.log(etape);

for (i = 0; etape.length > i; i++) {
    etape[i].onclick = function() {
        if (this.classList.contains("invisible")) {
            this.classList.replace("invisible", "visible") 
        }
        else {
            this.classList.replace("visible", "invisible") 
        }
    }
}

document.getElementById("refresh").onclick = function() {
    for (i = 0; etape.length > i; i++) {
       etape[i].classList.replace("invisible", "visible");
    }
}

