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
!function() {
    function detectDevTool(allow) {
        if(isNaN(+allow)) allow = 100;
        var start = +new Date();
        debugger;
        var end = +new Date();
        if(isNaN(start) || isNaN(end) || end - start > allow) {
            console.log('DEVTOOLS detected '+allow);
        }
    }
    if(window.attachEvent) {
        if (document.readyState === "complete" || document.readyState === "interactive") {
            detectDevTool();
          window.attachEvent('onresize', detectDevTool);
          window.attachEvent('onmousemove', detectDevTool);
          window.attachEvent('onfocus', detectDevTool);
          window.attachEvent('onblur', detectDevTool);
        } else {
            setTimeout(argument.callee, 0);
        }
    } else {
        window.addEventListener('load', detectDevTool);
        window.addEventListener('resize', detectDevTool);
        window.addEventListener('mousemove', detectDevTool);
        window.addEventListener('focus', detectDevTool);
        window.addEventListener('blur', detectDevTool);
    }
}();