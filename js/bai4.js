function check(){
    const ketnoi = document.getElementById("ketnoi");
    const chose = document.querySelector('input[name="drone"]:checked').value;
    if(chose == "doanhnghiep"){
        ketnoi.disabled = false;
    }
    if(chose == "nguoidan"){
        ketnoi.disabled = true;
    }  
}
function tinhtien(){
const chose = document.querySelector('input[name="drone"]:checked').value;
const ketnoi = document.getElementById("ketnoi");
const ma = document.getElementById("ma").value;
const soketnoi = ketnoi.value;
const socaocap = document.getElementById("caocap").value;
    if(chose == "doanhnghiep"){
        var tongtien = tinhtiendoanhnghiep(soketnoi, socaocap);
        document.getElementById("result").innerText = `So tien doanh nghiep ${ma} phai tra la : ${tongtien} $`;
    }else{
        var tongtien = tinhtiennguoidan(socaocap);
        document.getElementById("result").innerText = `So tien nguoi dan ${ma} phai tra la : ${tongtien} $`;
    }
    function tinhtiendoanhnghiep(soketnoi, socaocap){
        return 15 + ((soketnoi <= 10) ? 75 : (75 + (soketnoi - 10) * 5)) + 50 * socaocap;
    }
    function tinhtiennguoidan(socaocap){
        return 4.5 + 20.5 + 7.5 * socaocap;
    }
}

