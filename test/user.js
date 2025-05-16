// user.js
function registerAccount(email, password, confirmPassword, localStorage) {
  if (password !== confirmPassword) {
    throw new Error("Mật khẩu không khớp");
  }
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  if (accounts.some(u => u.email === email)) {
    throw new Error("Tài khoản đã tồn tại");
  }
  let user = {
    email,
    password,
    firstName: null,
    lastName: null,
    avt: "./images/user.jpg"
  };
  accounts.push(user);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  return user;
}

function login(email, password, localStorage) {
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let user = accounts.find(u => u.email === email && u.password === password);
  if (!user) {
    throw new Error("Email hoặc mật khẩu không đúng");
  }
  localStorage.setItem("userLogin", JSON.stringify(user));
  return user;
}

function saveInfo(newFirstName, newLastName, localStorage) {
  let user = JSON.parse(localStorage.getItem("userLogin"));
  if (!user) throw new Error("Chưa đăng nhập");
  user.firstName = newFirstName;
  user.lastName = newLastName;

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let index = accounts.findIndex(u => u.email === user.email);
  if (index === -1) throw new Error("Tài khoản không tồn tại");
  accounts[index] = user;

  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("userLogin", JSON.stringify(user));
  return user;
}

function removeCard(email, localStorage) {
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let index = accounts.findIndex(u => u.email === email);
  if (index === -1) throw new Error("Tài khoản không tồn tại");
  accounts.splice(index, 1);
  localStorage.setItem("accounts", JSON.stringify(accounts));
  return accounts;
}

function logout(localStorage) {
  localStorage.removeItem("userLogin");
}

function changeAvatar(newAvt, localStorage) {
  let user = JSON.parse(localStorage.getItem("userLogin"));
  if (!user) throw new Error("Chưa đăng nhập");
  user.avt = newAvt;

  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let index = accounts.findIndex(u => u.email === user.email);
  if (index === -1) throw new Error("Tài khoản không tồn tại");
  accounts[index] = user;

  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("userLogin", JSON.stringify(user));
  return user;
}
function addCard(email, cardData, localStorage) {
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let index = accounts.findIndex(u => u.email === email);
  if (index === -1) throw new Error("Tài khoản không tồn tại");

  if (!accounts[index].cards) {
    accounts[index].cards = [];
  }
  accounts[index].cards.push(cardData);

  localStorage.setItem("accounts", JSON.stringify(accounts));

  // Nếu user đang login chính là user này thì cập nhật luôn
  let user = JSON.parse(localStorage.getItem("userLogin"));
  if (user && user.email === email) {
    user.cards = accounts[index].cards;
    localStorage.setItem("userLogin", JSON.stringify(user));
  }

  return accounts[index];
}

function getUserCards(email, localStorage) {
  let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  let user = accounts.find(u => u.email === email);
  if (!user) throw new Error("Tài khoản không tồn tại");
  // Nếu chưa có cards thì trả về mảng rỗng
  return user.cards || [];
}
function enableDragAndDrop() {
    const container = document.getElementById("listLinks2");
    let draggedElement = null;

    container.addEventListener("dragstart", (e) => {
      if (e.target.tagName === "A") {
        draggedElement = e.target;
        e.target.classList.add("opacity-50");
      }
    });

    container.addEventListener("dragend", (e) => {
      e.target.classList.remove("opacity-50");
    });

    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const target = e.target.closest("a");
      if (target && target !== draggedElement) {
        target.classList.add("drag-over");
      }
    });

    container.addEventListener("dragleave", (e) => {
      const target = e.target.closest("a");
      if (target) {
        target.classList.remove("drag-over");
      }
    });

    container.addEventListener("drop", (e) => {
      e.preventDefault();
      const target = e.target.closest("a");
      if (target && target !== draggedElement) {
        target.classList.remove("drag-over");
        container.insertBefore(draggedElement, target.nextSibling);
      }
    });
  }
module.exports = { registerAccount, login, saveInfo, removeCard, logout, changeAvatar, addCard, getUserCards };

