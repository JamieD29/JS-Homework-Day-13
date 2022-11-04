
function ExchangDollarToVnd(){
var usd = +document.getElementById('dollarMoney').value; 
var vndExchange = usd * 23500;
document.getElementById('ExchangeResult').innerHTML=vndExchange;
document.getElementById('Ex4Result').style.display="block";
}
//Sơ đồ 3 khối 
/*
    Input:
   Số tiền USD muốn quy đổi sang VND
    
    Process: (pesudo code)

    1. Lấy được input (hardcode) giá tiền USD; 

    2.Công thức tính quy đổi:

    VND = USD * 23.500;
    
    3. In kết quả

    Output: 
    Giá tiền VND
*/