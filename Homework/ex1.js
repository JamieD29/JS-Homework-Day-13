
function calcSalary(){
    var workingDays = + document.getElementById('days').value ; 

    if(workingDays === 0){
        alert("Vui lòng nhập số ngày bạn làm!!!");
        return;
    }

    document.getElementById('dayshow').innerHTML= workingDays;
    var salaryPerDay= 100000; 
    var totalSalary = salaryPerDay * workingDays; 
    totalSalary.toLocaleString();
    document.getElementById('salary').innerHTML = totalSalary ;
    document.getElementById('SalaryResult').classList.add('show');
}

//Sơ đồ 3 khối 
/*
    Input:
    Lương 1 ngày
    Số ngày làm
    
    Process: (pesudo code)

    1. Lấy được input (hardcode) lương 1 ngày = 100, số ngày làm = 30; 

    2.Công thức tính tiền: lương 1 ngày * số ngày
    
    3. In kết quả

    Output: Lương nhân viên 

*/