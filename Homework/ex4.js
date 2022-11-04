
function perimeterNarea(){

    var length= +document.getElementById('Length').value; 
    var width = +document.getElementById('Width').value ;
    
    var area = length * width ; 
    var perimeter = (length + width) * 2 ;
    
    document.getElementById('perimeter').value = perimeter;
    document.getElementById('area').value = area;
    document.getElementById('Ex4Result').style.display='block';
}



//Sơ đồ 3 khối 
/*
    Input:
   -Chiều dài
   -Chiều rộng
    
    Process: (pesudo code)

    1. Lấy được input (hardcode) chiều dài và chiều rộng; 

    2.Công thức tính diện tích:
    diện tích = chiều dài * chiều rộng; 
    3. Công thức tính chu vi: 
    chu vi = (chiều dài + chiều rộng) * 2; 

    VND = USD * 23.500;
    
    3. In kết quả

    Output: 
    -Diện tích hình chữ nhật
    -Chu vi hình chữ nhật
*/