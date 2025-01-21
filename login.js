let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let UserName = document.getElementById("UserName");
let title = document.getElementById("title");

signInBtn.addEventListener('click',()=>{
    UserName.style.maxHeight = "0";
    title.innerText = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
})

signUpBtn.addEventListener('click',()=>{
    UserName.style.maxHeight = "60px";
    title.innerText = "Sign Up";
    signUpBtn.classList.remove("disable");
    signInBtn.classList.add("disable");
})
