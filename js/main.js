window.addEventListener("DOMContentLoaded", detail);
function CD(id) {
    let Id = document.getElementById(id);
    if (Id.id === "login") {
        Id.classList.add("hidden");
        document.getElementById("register").classList.remove("hidden");
    } else if (Id.id === "register") {
        Id.classList.add("hidden");
        document.getElementById("login").classList.remove("hidden");
    }
}
function modalNoneHidden(id, srcImage, content) {

    id.classList.remove("hidden");
    let image = id.querySelector("img")

    image.src = srcImage;
    document.getElementById("content-modal").innerHTML = content;
}
function closModal(id) {
    document.getElementById(id).classList.add("hidden");
}
function registerAccount(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không đúng !!");
    }
    let userAccounted = JSON.parse(localStorage.getItem("accounts")) || [];
    for (const user of userAccounted) {
        if(user.email === email)
            alert("Tài khoản đã tồn tại.")
    }
    let  firstName = null;
    let lastName= null;
    const user = {
        email,
        password,
        firstName ,
        lastName
    };
    userAccounted.push(user);
    localStorage.setItem("accounts", JSON.stringify(userAccounted));
    const contentModal = `Chúc mừng bạn đã đăng ký thành công !`;
    const src = "./images/swirl.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
    CD('register');
}
function login(e) {
    e.preventDefault();
    const accout = JSON.parse(localStorage.getItem("accounts")) || [];
    const emailLogin = document.getElementById("emailLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;
    const user = accout.find(u => u.email === emailLogin && u.password=== passwordLogin);
        if (user) {
            localStorage.setItem("isLogin", "true");
            localStorage.setItem("emailLoginged",user.email);
            window.location.href="./home.html";
           
        }else{
             const contentModal = `Mật khẩu hoặc email sai !!!`;
            const src = "./images/frown.png";
            const idModal = document.getElementById("modal");
            modalNoneHidden(idModal,src, contentModal);
        }  
}
function logout() {
    localStorage.setItem("isLogin", "false");
}
function chageLogin() {
    document.getElementById("contentMenuLR").innerHTML=`Log out`;
}

function detail() {
    const user = JSON.parse(localStorage.getItem("accounts"));
    const emailLoged = localStorage.getItem("emailLoginged");
    const userCurrent = user.find(u => u.email === emailLoged );
    if(userCurrent){
        document.getElementById("firstName").value = userCurrent.firstName;
        document.getElementById("lastName").value = userCurrent.lastName;
        document.getElementById("emailLoged").value = userCurrent.email;
    }
}
function saveInfo(e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("accounts"));
    const firstName = document.getElementById("firstName").value || null;
    const lastName = document.getElementById("lastName").value || null;
    const emailNew = document.getElementById("emailLoged").value || null;
    const emailLoged = localStorage.getItem("emailLoginged");
    const userCurrent = user.findIndex(u => u.email === emailLoged );
    if(userCurrent !== -1){
       user[userCurrent].firstName = firstName;
       user[userCurrent].lastName = lastName;
       user[userCurrent].email = emailNew;
    }
    localStorage.setItem("emailLoginged",emailNew);
    localStorage.setItem("accounts",JSON.stringify(user));
    const contentModal = `Lưu thành công !`;
    const src = "./images/check.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
}