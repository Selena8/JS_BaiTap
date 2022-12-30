let str=''
str = localStorage.getItem('text');
// if (!str) {
//     str = prompt("Mời bạn nhập tên của mình");
//     while(str == null || str== ""){
//         text = prompt("Mời bạn nhập tên của mình");
//     } 
// }
while(!str){
    str = prompt("Nhap ten cua ban")
    if(str){
        localStorage.setItem('text',str);
        document.write("Hello " + str + "!");
    }
}
document.write("Hello " + str + "!");