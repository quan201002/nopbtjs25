function tinhtien(){
    var kw = document.getElementById("kw").value*1;
    const ten = document.getElementById("ten").value;
    const result = document.getElementById("result");
    if(kw <= 50){
        var tien = den50(kw);
        result.innerText = `So tien ${ten} phai tra: ${tien.toLocaleString()} vnđ`;
    }
    else if(kw <= 100){
        var tien = den100(kw);
        result.innerText = `So tien ${ten} phai tra: ${tien.toLocaleString()} vnđ`;
    }   else if(kw <= 200){
        var tien = den200(kw);
        result.innerText = `So tien ${ten} phai tra: ${tien.toLocaleString()} vnđ`;
    }   else if(kw <= 350){
        var tien = den350(kw);
        result.innerText = `So tien ${ten} phai tra: ${tien.toLocaleString()} vnđ`;
    }else{
        var tien = tren350(kw);
        result.innerText = `So tien ${ten} phai tra: ${tien.toLocaleString()} vnđ`;
    }
    function den50(kw){
        return kw * 500;
    }
    function den100(kw){
        return den50(50) + (kw - 50)* 650;
    }
    function den200(kw){
        return den100(100) + (kw - 100) * 850;
    }
    function den350(kw){
        return den200(200) + (kw - 200) * 1100;
    }
    function tren350(kw){
        return den350(350) + (kw - 350) * 1300;
    }
}