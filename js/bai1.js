function tracuu(){
    var mon1 = document.getElementById("mon1").value*1;
var mon2 = document.getElementById("mon2").value*1;
var mon3 = document.getElementById("mon3").value*1;
var diemchuan = document.getElementById("chuan").value*1;
var khuvuc = document.getElementById("khuvuc").value;
var doituong = document.getElementById("doituong").value*1;
const result = document.querySelector(".result");
if( mon1 == 0 || mon2 == 0 || mon3 == 0){
    result.innerText = `Ban rot do co mot mon bi diem liet`;
}else{
    var tongdiem = mon1 + mon2 + mon3 + diemdoituong(doituong)*1 + diemkhuvuc(khuvuc)*1;
    if(tongdiem >= diemchuan){
        result.innerText = `Ban da dau voi tong diem : ${tongdiem}`
    }else {
        result.innerText = `Ban rot voi tong diem : ${tongdiem}`
    }
}
    function diemdoituong(doituong){
        if(doituong == 0) return "0";
        switch (doituong){
            case 1 : return 2.5;
            case 2: return 1.5;
            case 3 : return 1;
        }
    }
    function diemkhuvuc(khuvuc){
        if(khuvuc == "X") return 0;
        switch (khuvuc){
            case "A": return 2;
            case "B": return 1;
            case "C": return 0.5;
        }
    }
}