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
    document.getElementById("bottomBrowser").innerHTML = "You can still know me on LINKEDIN app.";
    document.getElementById("bottomBrowserLast").innerHTML = "You think wifi/volume icon works, and what about the date button, it works?";
}
// $(window).resize(function() {
//     clockPosition();
// });

// function clockPosition(){
//     const topbarDate = document.getElementById('topbarDate');
//     const clockModal = document.getElementById('clockModal');

//     const DateRect = topbarDate.getBoundingClientRect();
//     const clockRect = clockModal.getBoundingClientRect();

//     const top = DateRect.top + DateRect.height;
//     const left = DateRect.left + DateRect.width / 2 - clockRect.width / 2;
//     clockModal.style.top = `${top + 1}px`;
//     clockModal.style.left = `${left}px`;
// }
