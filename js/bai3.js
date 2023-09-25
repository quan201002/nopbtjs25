function tinhthue(){
  var tongthunhap = document.getElementById("tongthunhap").value*1;
  var hoten = document.getElementById("hoten").value;
  var nguoiphuthuoc = document.getElementById("nguoiphuthuoc").value*1;
  var thunhapchiuthue = tongthunhap - 4000000 - nguoiphuthuoc * 1600000;
  var thuethunhap = thunhapchiuthue * thuesuat(thunhapchiuthue);
  var result = document.getElementById("result").innerText = `Thuế thu nhập của đồng chí ${hoten} là : ${thuethunhap.toLocaleString()} vnđ`;
  function thuesuat(thunhapchiuthue){
    if(thunhapchiuthue <= 60000000){
      return  5 / 100;
    }else if(thunhapchiuthue <= 120000000){
      return  10 / 100;
    }else if(thunhapchiuthue <= 210000000){
      return  15 / 100;
    }else if(thunhapchiuthue <= 384000000){
      return  20 / 100;
    }else if(thunhapchiuthue <= 624000000){
      return  25 / 100;
    }else if(thunhapchiuthue <= 960000000){
      return  30 / 100;
    }else {
      return  35 / 100;
    }
  }
}