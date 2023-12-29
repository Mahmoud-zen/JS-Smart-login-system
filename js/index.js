var yourName=document.getElementById('name')
var yourEmail=document.getElementById("email")
var yourPassword=document.getElementById("password")
var signUpBtn=document.getElementById('signUpBtn')
var loginBtn=document.getElementById('loginBtn')
var signIn=document.getElementById("signIn")
var signUp=document.getElementById("signUp")
var success=document.getElementById("success")
var t1=document.getElementById("nameNotvalid")
var t2=document.getElementById("emailNotvalid")
var t3=document.getElementById("passwordNotvalid")
var namePole;
var emailPole;
var passPole;

function signUpEnter(){
   
    yourName.classList.replace("d-none","d-block")
    yourName.classList.add("mx-auto")
    signUpBtn.classList.replace('d-none','d-block')
    loginBtn.classList.replace("d-block","d-none")
    signUp.classList.replace('d-block','d-none')
    signIn.classList.replace("d-none","d-block")
    clear();
 
} 

function signin(){
    yourName.classList.replace("d-block","d-none")
    signUp.classList.replace('d-none',"d-block")
    signIn.classList.replace("d-block","d-none")
    loginBtn.classList.replace('d-none','d-block')
    signUpBtn.classList.replace("d-block","d-none")
    success.classList.replace("d-block" ,"d-none")
    t1.classList.replace("d-block","d-none")
    t2.classList.replace("d-block","d-none")
    t3.classList.replace("d-block","d-none")
    clear();
}



var usersList=[]


// ===========================condition at start====================================


if(localStorage.getItem("usersData")!= null){
    usersList=JSON.parse(localStorage.getItem("usersData"))
}

// =================================================================================



//==========================Signup processsss=======================


signUpBtn.addEventListener("click", function(){

    yourEmailValidation();
    yourNameValidation();
    yourPasswordValidation();

    if(namePole==1 && emailPole==1 && passPole==1){

        var user={
            userName:yourName.value,
            userEmail:yourEmail.value,
            userPassword:yourPassword.value
        }
        
        usersList.push(user)
        localStorage.setItem("usersData",JSON.stringify(usersList))
        success.classList.replace("d-none","d-block")
        clear();
      


    }


})



// ========================End=========================






// ==================validation====================


function yourNameValidation(){
var regex=/^[a-zA-z]{2,}\s[a-zA-z]{2,}$/
if(regex.test(yourName.value)==true){

    namePole=1 ;
    t1.classList.replace("d-block","d-none")
}
else{
    t1.classList.replace("d-none","d-block")
    namePole=0;
}

}






function yourEmailValidation(){
var regex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
if(regex.test(yourEmail.value)==true){

    emailPole=1 ;
    t2.classList.replace("d-block","d-none")
    console.log("regex ok");
}

if(usersList.find((user) => user.userEmail === yourEmail.value )){
emailPole=2;
alert('Email account already exist')
console.log("search ok");
}

// =======================================================================================

// why when i activate the else condition both regex and else are appear at start??????????????


// ========================================================================================
else{
    emailPole=0;
    t2.classList.replace("d-none","d-block")
    console.log("not ok");
}
}


// password pattern validation ===============================
// At least one lowercase letter.
// At least one uppercase letter.
// At least one digit.
// At least 8 characters in total.


function yourPasswordValidation(){
var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
if(regex.test(yourPassword.value)==true){

    passPole=1 ;
    t3.classList.replace("d-block","d-none")
}
else{
    passPole=0;
    t3.classList.replace("d-none","d-block")
}
}


loginBtn.addEventListener('click',function(){

    if (usersList.find(
        (user) => user.userEmail === yourEmail.value && user.userPassword === yourPassword.value
      )) {
      
        window.location.href="home.html";
        clear();
     
      }
      else{
        alert('The account not exist, please sign up fisrt')
        clear();
      }





})


function clear(){
yourName.value=""
yourEmail.value=""
yourPassword.value=""
}