

function validation(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    let user_error = document.getElementById('user_error');
    let pass_error = document.getElementById('pass_error');

    if(user.length === 0){
        user_error.style.display = "block";
    }
    if(pass.length === 0){
        pass_error.style.display = "block";
    }
    if(user.length >= 1){
        user_error.style.display = "none";
    }
    if(pass.length >= 1){
        pass_error.style.display = "none";
    }

    if(user.length && pass.length >= 1){
        dataStorage()
    }
}


function dataStorage(){
    let user = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;

    let myObj = {
        user: user,
        pass: pass
    };

    let myObj_serialized = JSON.stringify(myObj);
    
    localStorage.setItem("details", myObj_serialized);
    //console.log(localStorage);

    let myObj_deserialized = JSON.parse(localStorage.getItem("details"));
    console.log(myObj_deserialized);
}