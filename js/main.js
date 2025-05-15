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
    let account = [];
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
        alert("Mật khẩu nhập lại không đúng !!");
    }
    const user = {
        email,
        password
    };
    account.push(user);
    localStorage.setItem("accounts", JSON.stringify(account));
    const contentModal = `Chúc mừng bạn đã đăng ký thành công !`;
    const src = "./images/swirl.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
    CD('login');
}
function login(e) {
   
    const accout = JSON.parse(localStorage.getItem("accounts")) || [];
    const emailLogin = document.getElementById("emailLogin").value;
    const passwordLogin = document.getElementById("passwordLogin").value;
    for (const user of accout) {
        if (user.email === emailLogin && user.password === passwordLogin) {
            localStorage.setItem("isLogin", "true");
            window.location.href="./home.html";
        }else{
             const contentModal = `Mật khẩu hoặc email sai !!!`;
            const src = "./images/frown.png";
            const idModal = document.getElementById("modal");
            modalNoneHidden(idModal,src, contentModal);
            
        }  
    }
}
function logout() {
    localStorage.setItem("isLogin", "false");
}
function chageLogin() {
    document.getElementById("contentMenuLR").innerHTML=`Log out`;
}