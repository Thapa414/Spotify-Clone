let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let email = document.getElementById("email");
let title = document.getElementById("title");

signInBtn.addEventListener('click',()=>{
    email.style.maxHeight = "0";
    title.innerText = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
})

signUpBtn.addEventListener('click',()=>{
    email.style.maxHeight = "60px";
    title.innerText = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
})
