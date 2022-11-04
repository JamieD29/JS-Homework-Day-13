function calcAverage(){

var a,b,c,d,e; 
a= +document.getElementById('number1').value; 
b= +document.getElementById('number2').value; 
c= +document.getElementById('number3').value; 
d= +document.getElementById('number4').value; 
e= +document.getElementById('number5').value; 

var average = (a+b+c+d+e) / 5;

document.getElementById('AverageResult').innerHTML= average;

document.getElementById('AverageBlock').classList.add('showByOpacity');

}

//Sơ đồ 3 khối 
/*
    Input:
    
    - 5 số thực
    
    Process: (pesudo code)

    1. Lấy được input (hardcode) của 5 số thực a, b, c, d ,e; 

    2.Công thức tính trung bình : average = (a+b+c+d+e) / 5;
    
    3. In kết quả

    Output: 
    -Giá trị trung bình của 5 số. 

*/

