window.onload = (()=>{
    dateTime();
    // clockPosition();
    setTimeout(()=>{
        document.getElementById("startMessage").innerHTML = "";
    }, 5000)
})
function displayIframe() {
    document.getElementById("iframeDisplay").innerHTML = "<iframe src=\"../HtmlPage1.html\" height=\"200\" width=\"300\" ></iframe>";

}

function dateTime(){
    let date = new Date();
    let timeDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
        })
        document.getElementById("topbarDate").innerHTML = timeDate;
    setInterval(()=>{
        date = new Date();
        timeDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            hour: 'numeric',
            minute: 'numeric',
        })
        document.getElementById("topbarDate").innerHTML = timeDate;
    },1000)
}

function googleClick(){
    document.getElementById("google").innerHTML = "You want RECURSION :P";
    document.getElementById("bottomBrowser").innerHTML = "Connect with me on LINKEDIN app.";
    document.getElementById("bottomBrowserLast").innerHTML = "";
}

$('body').keydown(function(e) {
    if(e.which==123){
        e.preventDefault();
    }
    if(e.ctrlKey && e.shiftKey && e.which == 73){
        e.preventDefault();
    }
    if(e.ctrlKey && e.shiftKey && e.which == 75){
        e.preventDefault();
    }
    if(e.ctrlKey && e.shiftKey && e.which == 67){
        e.preventDefault();
    }
    if(e.ctrlKey && e.shiftKey && e.which == 74){
        e.preventDefault();
    }
});
