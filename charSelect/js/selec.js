//데이터는 가로안에있는 data는 parameter라고 한다.
//arguments, 매게변수 ,인자 라고 한다.
//전달자 : 데이터를 전달하거나 ,전달 받는 역할 
function selecBtn(data){
//만약 첫번째 버튼이 눌리면
//만약 두번쨰 버튼이 눌리면
var col1 = document.getElementById("js-col1");
console.log(col1);
if(data=== 1) {
    col1.innerHTML = "<img src='../assets/chch.png' width=300px height=500px/>";
} else if (data === 2) {
    col1.innerHTML = "<img src='../assets/ch3.jpg' width=300px height=500px/>";
} else if(data === 3) {
    col1.innerHTML = "<img src='../assets/우마루.png' width=400px height=500px/>";
} else if (data === 4) {
    col1.innerHTML = "<img src='../assets/chch4.jpg' width=400px height=500px/>";
} else if (data === 5) {
    col1.innerHTML = "<img src='../assets/chch5.jpg' wigth=00px height=500px/>";
}

}

