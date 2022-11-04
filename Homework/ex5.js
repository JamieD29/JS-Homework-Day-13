
function CalcNumW2(){
var NumberW2 = +document.getElementById('NumberW2').value; 
var num1 = NumberW2  % 10 ; 
var num2 = Math.floor(NumberW2/10); 
var sum = 0 ;

if(NumberW2 > 99){
    alert("Chỉ nhập số có 2 kí tự");
    return;
}else{
     sum = num1 + num2;
}

document.getElementById('Sum2Result').innerHTML= sum;

}
//Sơ đồ 3 khối 
/*
    Input:
   Một số tự nhiên có 2 chữ số
    
    Process: (pesudo code)

    1. Lấy được input (hardcode) số n với 2 chữ số; 

    2.Cho biến num1 lưu giá trị đầu tiên với công thức;

    num1 = n %10; chia lấy dư để lấy hàng đơn vị;

    3. Cho biến num2 lưu giá trị thứ hai với công thức: 

    num2 = Math.floor (n/10); chia làm tròn để lấy hàng chục;

    4. Thực hiện cộng 2 số trên đã lấy num1  + num2; 
    
    3. In kết quả

    Output: 
    Tổng 2 ký tự số vừa nhập 
*/