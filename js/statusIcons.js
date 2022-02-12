function wifiIcon(){
    if(document.getElementById("wifiStatus").classList.contains("btn-primary")){
        document.getElementById("wifiStatus").classList.remove("btn-primary");
        document.getElementById("wifiStatus").classList.add("btn-light");
        document.getElementById("wifiIcon").innerHTML = "";
        return;
    }
    if(document.getElementById("wifiStatus").classList.contains("btn-light")){
        document.getElementById("wifiStatus").classList.remove("btn-light");
        document.getElementById("wifiStatus").classList.add("btn-primary");
        document.getElementById("wifiIcon").innerHTML = " wifi ";
        return;
    }
}
function volumeIcon(){
    if(document.getElementById("volumeStatus").classList.contains("btn-primary")){
        document.getElementById("volumeStatus").classList.remove("btn-primary");
        document.getElementById("volumeStatus").classList.add("btn-light");
        document.getElementById("volumeIcon").innerHTML = " volume_off ";
        document.getElementById("volumeIcon2").innerHTML = " volume_off ";
        return;
    }
    if(document.getElementById("volumeStatus").classList.contains("btn-light")){
        document.getElementById("volumeStatus").classList.remove("btn-light");
        document.getElementById("volumeStatus").classList.add("btn-primary");
        document.getElementById("volumeIcon").innerHTML = " volume_up ";
        document.getElementById("volumeIcon2").innerHTML = " volume_up ";
        return;
    }
}