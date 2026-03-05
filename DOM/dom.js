function openWindow(){
    var myWindow = window.open(
        "",
        "popup",
        "width=400,height=400"
    );
    myWindow.document.write("<p>This is 'myWindow'</p>" )
}

function moveWindow(){
    myWindow.moveTo(400, 200);
}

function resizeWindow(){
    myWindow.resizeTo(600, 400);
}
function closeWindow(){
    myWindow.close();
}
alert("it will change size if u click on resize button")

    
