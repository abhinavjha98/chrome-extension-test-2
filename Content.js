var arr = ["getbootstrap.com"]

console.log(window.location.hostname);
if(arr.includes(window.location.hostname)){
    console.log(window.location.hostname);
}else{
    console.log(window.location.hostname);
    const fileslist = document.getElementsByTagName("input");;
    var i=0, testcase=0;
    console.log(i);
    var para = document.createElement("h3");                       // Create a <p> node
    var t = document.createTextNode("Upload button is disabled Please contact Admin.");      // Create a text node
    para.appendChild(t); 
    
    for(i=0;i<fileslist.length;i++){
    testcase++;
    //i++;
    fileslist[i] = document.querySelector("form input");
    if(fileslist[i].type == "file") {
        //console.log("Success..!"+fileslist[i].id);
        fileslist[i].setAttribute("disabled", true);
        //console.log("Success after disabled..!"+fileslist[i].id.disabled);
        fileslist[i].after(para);
        
        //fileslist[i].replaceWith(document.createElement("span"), "Contact Admin")
    }
    }
}
