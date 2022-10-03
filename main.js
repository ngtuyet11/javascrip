// function switchOnOff($event, index){
//     var element = document.getElementsByClassName('switch-wrapper')[index];
//     var btn = event.target;
//     if(confirm('Are you sure') == true){
//         if(btn.innerHTML == "ON")
//     {
//         btn.innerHTML = "OFF"
//         element.classList.remove("bg-success")
//         element.classList.add("bg-danger")
//     }
//     else{
//         btn.innerHTML = "ON"
//         element.classList.add("bg-success")
//         element.classList.remove("bg-danger")
//     }
//     }
// }
    function switchOnOff($event){
    var element= event.target;
    if(confirm('bạn muốn thay đổi trạng thái nút nhấn')== true)
    {
    if(element.innerHTML == "ON")
    {
        element.innerHTML = "OFF"
        element.classList.remove("btn-success")
        element.classList.add("btn-danger")
        document.getElementById("myImages").src= "den.png"
    }
    else{
        element.innerHTML = "ON"
        element.classList.add("btn-success")
        element.classList.remove("btn-danger")
        // document.getElementById("nut2").style.background("green")
        document.getElementById("myImages").src= "densang.png"
    }
}
}
function on() {
    document.getElementById("myImage").src= "densang.png"
 }
 function off() {
    document.getElementById("myImage").src= "den.png"
 }









