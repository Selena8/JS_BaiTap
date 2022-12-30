let str;
localStorage.getItem('text');
if (str == null || str== "") {
    str=prompt("Mời bạn nhập tên của mình");
    while(str == null || str== ""){
        text = prompt("Mời bạn nhập tên của mình");
    } 
}
if(str != null) {
    document.write("Hello " + str + "!");
    localStorage.setItem(str,'text');
}
