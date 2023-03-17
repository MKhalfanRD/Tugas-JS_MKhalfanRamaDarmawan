function cekLogin(){
    let frm = window.document.getElementById("formulir");
    let uname = frm.username.value;
    let pwd = frm.password.value;

    if(uname == "khalfan" && pwd == "khalfan"){
        alert("Data Login sesuai, Anda bisa masuk ke dalam sistem");
    }
    else if(uname !== "khalfan" && pwd !== "khalfan"){
        alert("Data Login salah, Silahkan coba kembali");
    }
    else{
        "Anda terdeteksi melakukan peretasan";
    }
}

function kosongUname(){
    let frm = window.document.getElementById("formulir");
    frm.username.value = "";
}
function kosongPwd(){
    let frm = window.document.getElementById("formulir");
    frm.password.value = "";
}