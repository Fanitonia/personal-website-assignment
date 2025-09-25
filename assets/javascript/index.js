//navbar active button stuff
var siteTourButtons = document.querySelectorAll(".site-tour > a");
for(let i = 0; i < siteTourButtons.length; i++) {

    siteTourButtons[i].addEventListener("click", function(){
        for(let i = 0; i < siteTourButtons.length; i++)
            siteTourButtons[i].classList.remove("active-btn");
        
        this.classList.add("active-btn");
    });
}