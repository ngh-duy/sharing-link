window.addEventListener("DOMContentLoaded", detail);
window.addEventListener("DOMContentLoaded", detailLink);
window.addEventListener("DOMContentLoaded", renderLinks);
window.addEventListener("DOMContentLoaded", detailPreview);
window.addEventListener('DOMContentLoaded', renderLinksPreview);
window.addEventListener('DOMContentLoaded', () => {
  const listAcc = JSON.parse(localStorage.getItem("listAccountRe"));
  if (localStorage.getItem("remember") === "true") {
    document.getElementById("emailLogin").value = listAcc[0];
    document.getElementById("passwordLogin").value = listAcc[1];
  }

});
let base64Img = "";
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
function isStrongPassword(password) {
  const minLength = /.{8,}/;
  const upperCase = /[A-Z]/;
  const lowerCase = /[a-z]/;
  const number = /[0-9]/;
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    minLength.test(password) &&
    upperCase.test(password) &&
    lowerCase.test(password) &&
    number.test(password) &&
    specialChar.test(password)
  );
}

function registerAccount(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!gmailRegex.test(email)) {
    alert("Gmail sai định dạng !!");
    return; // Ngăn tiếp tục xử lý khi sai định dạng
  }
  if (!isStrongPassword(password)) {
  const contentModal = `Mật khẩu không đủ mạnh! Vui lòng dùng ít nhất 8 ký tự, có chữ hoa, chữ thường, số và ký tự đặc biệt.`;
  const src = "./images/frown.png";
  const idModal = document.getElementById("modal");
  modalNoneHidden(idModal, src, contentModal);
  return;
}
  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không đúng !!");
    return;
  }
  let userAccounted = JSON.parse(localStorage.getItem("accounts")) || [];
  for (const user of userAccounted) {
    if (user.email === email)
    {
      alert("Tài khoản đã tồn tại.")
      return ;
    }
  }
  let firstName = null;
  let lastName = null;
  let avt = "./images/user.jpg";
  const user = {
    email,
    password,
    firstName,
    lastName,
    avt
  };
  userAccounted.push(user);
  localStorage.setItem("accounts", JSON.stringify(userAccounted));
  const contentModal = `Chúc mừng bạn đã đăng ký thành công !`;
  const src = "./images/swirl.png";
  const idModal = document.getElementById("modal");
  modalNoneHidden(idModal, src, contentModal);
  CD('register');
}
let listAccountRemember = [];
function login(e) {
  e.preventDefault();
  listAccountRemember = [];
  const accout = JSON.parse(localStorage.getItem("accounts")) || [];
  const emailLogin = document.getElementById("emailLogin").value;
  const passwordLogin = document.getElementById("passwordLogin").value;
  const user = accout.find(u => u.email === emailLogin && u.password === passwordLogin);
  const userEmail = accout.find(u => u.email === emailLogin);
  const remember = document.getElementById("remember");

  if (user) {
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("emailLoginged", user.email);
    window.location.href = "./home.html";
    if (remember.checked) {
      localStorage.setItem("remember", true);
      listAccountRemember.push(emailLogin);
      listAccountRemember.push(passwordLogin);
      localStorage.setItem("listAccountRe", JSON.stringify(listAccountRemember));
    } else {
      localStorage.setItem("remember", false);
    }
  } else if (emailLogin === "" && passwordLogin === "") {
    const contentModal = `Email và mật khẩu không được để trống !!!`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
  } else if (!userEmail) {
    const contentModal = `Tài khoản không tồn tại !!!`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
  } else if (emailLogin === "") {
    const contentModal = `Email không được để trống !!!`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
  } else if (passwordLogin === "") {
    const contentModal = `Password không được để trống !!!`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
  }
  else {
    const contentModal = `Mật khẩu hoặc email sai !!!`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
  }


}
function logout() {
  localStorage.setItem("isLogin", "false");
}
function chageLogin() {
  document.getElementById("contentMenuLR").innerHTML = `Log out`;
}

function detail() {
  const user = JSON.parse(localStorage.getItem("accounts"));
  const emailLoged = localStorage.getItem("emailLoginged");
  const userCurrent = user.find(u => u.email === emailLoged);
  if (userCurrent) {
    document.getElementById("firstName").value = userCurrent.firstName;
    document.getElementById("lastName").value = userCurrent.lastName;
    document.getElementById("emailLoged").value = userCurrent.email;
    document.getElementById("avt").src = userCurrent.avt;
    document.getElementById("FLName").innerHTML = userCurrent.firstName + userCurrent.lastName;
    document.getElementById("emailContent").innerHTML = userCurrent.email;
  }
}
function detailPreview() {
  const user = JSON.parse(localStorage.getItem("accounts"));
  const emailLoged = localStorage.getItem("emailLoginged");
  const userCurrent = user.find(u => u.email === emailLoged);
  if (userCurrent) {
    document.getElementById("avt2").src = userCurrent.avt;
    document.getElementById("FLName2").innerHTML = userCurrent.firstName + userCurrent.lastName;
    document.getElementById("emailContent2").innerHTML = userCurrent.email;
  }
}
function saveInfo() {
  const user = JSON.parse(localStorage.getItem("accounts"));
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const emailNew = document.getElementById("emailLoged").value.trim();
  const emailLoged = localStorage.getItem("emailLoginged");
  const userCurrent = user.findIndex(u => u.email === emailLoged);

  // Kiểm tra trường trống
  if (!firstName) {
    modalNoneHidden(document.getElementById("modal"), "./images/frown.png", "FirstName không được để trống!");
    return;
  }

  if (!lastName) {
    modalNoneHidden(document.getElementById("modal"), "./images/frown.png", "LastName không được để trống!");
    return;
  }

  if (!emailNew) {
    modalNoneHidden(document.getElementById("modal"), "./images/frown.png", "Email không được để trống!");
    return;
  }
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!gmailRegex.test(emailNew)) {
    alert("Gmail sai định dạng !!");
    return; // Ngăn tiếp tục xử lý khi sai định dạng
  }
  // Nếu tất cả đều hợp lệ thì mới tiến hành lưu
  if (userCurrent !== -1) {
    user[userCurrent].firstName = firstName;
    user[userCurrent].lastName = lastName;
    user[userCurrent].email = emailNew;
    if (base64Img !== "")
      user[userCurrent].avt = base64Img;
  }

  localStorage.setItem("emailLoginged", emailNew);
  localStorage.setItem("accounts", JSON.stringify(user));

  modalNoneHidden(document.getElementById("modal"), "./images/check.png", "Lưu thành công!");
  detail();
}


function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function () {
    base64Img = reader.result;
    const imagePreview = document.getElementById('image-preview');
    imagePreview.src = reader.result;
    imagePreview.style.display = 'block';
    const file = document.getElementById("contentImage");
    let hiddenContentImage = file.querySelectorAll("svg, p");
    if (base64Img !== "") {
      hiddenContentImage.forEach(element => {
        element.classList.add("hidden");
      });
    } else {
      hiddenContentImage.forEach(element => {
        element.classList.remove("hidden");
      });
    }
  };

  if (file) {
    reader.readAsDataURL(file);  // Đọc file ảnh
  }
}
let index = 1;
function addLink(e) {
  e.preventDefault();
  const card = document.getElementById("cardLink");
  let addCard = document.createElement("div");
  addCard.className = "p-4 card bg-gray-50 border rounded-lg";
  addCard.innerHTML = ` 
              <div class="flex justify-between mb-4">
                <span class="font-medium">Link #${index}</span>
                <button onclick="removeCard(this)" data-id="${card.id}" class="text-red-500 text-sm hover:underline">Remove</button>
              </div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Platform</label>
              <select id="menulink${index}"
                class="w-full mb-3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option id="github${index}">GitHub</option>
                <option id="youtube${index}">YouTube</option>
                <option id="twitter${index}">Twitter</option>
                <option id="linkedin${index}">LinkedIn</option>
              </select>
              <label class="block text-sm font-medium text-gray-700 mb-1">Link</label>
              <input type="text" id="card${index}"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value="https://www.github.com/benrwright" />
            `;
  card.appendChild(addCard);
  index++;

}

function isValidURL(url) {
  const pattern = /^https:\/\/www\.[a-z0-9\-]+\.(com|net|org)(\/.*)?$/i;
  return pattern.test(url);
}

function saveLink(e) {
  e.preventDefault();

  const email = localStorage.getItem("emailLoginged");
  if (!email) {
    alert("Chưa đăng nhập!");
    return;
  }

  const allCards = document.querySelectorAll(".card");
  if(allCards.length === 0){
     const contentModal = `Chưa có link nào được thêm.`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
    return;
  }
  let listCard = JSON.parse(localStorage.getItem("cards")) || [];

  // Xóa các link cũ của user đang login
  listCard = listCard.filter(c => c.email !== email);

  let invalid = false; // Cờ kiểm tra có link sai hay không

  allCards.forEach(cardDiv => {
    const select = cardDiv.querySelector("select");
    const input = cardDiv.querySelector("input");
    const linkValue = input?.value?.trim();

    if (select && input) {
      if (!isValidURL(linkValue)) {
        invalid = true;
        input.classList.add("border", "border-red-500");
      } else {
        input.classList.remove("border", "border-red-500");

        let card = {
          id: Date.now(),
          option: select.value,
          link: linkValue,
          email: email
        };
        listCard.push(card);
      }
    }
  });

  if (invalid) {
    const contentModal = `Có ít nhất 1 link không đúng định dạng! Vui lòng kiểm tra lại.`;
    const src = "./images/frown.png";
    const idModal = document.getElementById("modal");
    modalNoneHidden(idModal, src, contentModal);
    return;
  }

  localStorage.setItem("cards", JSON.stringify(listCard));
  const contentModal = `Lưu thành công !`;
  const src = "./images/check.png";
  const idModal = document.getElementById("modal");
  modalNoneHidden(idModal, src, contentModal);
  detailLink();
  renderLinks();
}

function detailLink() {
  const listLink = JSON.parse(localStorage.getItem("cards")) || [];
  const emailLoged = localStorage.getItem("emailLoginged");
  const myLinks = listLink.filter(e => e.email === emailLoged);

  const cardContainer = document.getElementById("cardLink");
  cardContainer.innerHTML = "";

  let index = 1;

  for (const card of myLinks) {
    let addCard = document.createElement("div");
    addCard.className = "p-4 card bg-gray-50 border rounded-lg mb-4";
    addCard.innerHTML = ` 
            <div class="flex justify-between mb-4">
                <span class="font-medium">Link #${index}</span>
               <button onclick="removeCard(this)" data-id="${card.id}" class="text-red-500 text-sm hover:underline">Remove</button>
            </div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Platform</label>
            <select id="menulink${index}"
                class="w-full mb-3 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option ${card.option === "GitHub" ? "selected" : ""}>GitHub</option>
                <option ${card.option === "YouTube" ? "selected" : ""}>YouTube</option>
                <option ${card.option === "Twitter" ? "selected" : ""}>Twitter</option>
                <option ${card.option === "LinkedIn" ? "selected" : ""}>LinkedIn</option>
            </select>
            <label class="block text-sm font-medium text-gray-700 mb-1">Link</label>
            <input type="text" id="card${index}"
                class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value="${card.link}" />
        `;
    cardContainer.appendChild(addCard);
    index++;
  }
}
function renderLinks() {
  const listLink = JSON.parse(localStorage.getItem("cards")) || [];
  const emailLogged = localStorage.getItem("emailLoginged");

  const container = document.getElementById("listLinks");
  container.innerHTML = ""; // Xóa cũ

  const colors = {
    "GitHub": "bg-black",
    "YouTube": "bg-red-600",
    "LinkedIn": "bg-blue-600",
    "Twitter": "bg-sky-400"
  };

  const icon = "→"; // hoặc bạn có thể dùng icon thực tế như SVG hoặc `&rarr;`

  // Lọc link đúng email
  const userLinks = listLink.filter(link => link.email === emailLogged);

  for (const card of userLinks) {
    const platform = card.option;
    const link = card.link;

    const colorClass = colors[platform] || "bg-gray-600";

    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.className = `flex items-center justify-between ${colorClass} text-white px-4 py-2 rounded-lg`;
    a.innerHTML = `<span>${platform}</span><span>${icon}</span>`;

    container.appendChild(a);
    enableDragAndDrop("listLinks")
  }
}

function removeCard(button) {
  const id = button.getAttribute("data-id");
  const email = localStorage.getItem("emailLoginged");

  let cards = JSON.parse(localStorage.getItem("cards")) || [];

  // Xóa đúng phần tử với id và email trùng khớp
  cards = cards.filter(card => !(card.id == id && card.email === email));

  localStorage.setItem("cards", JSON.stringify(cards));

  // Xóa khỏi DOM
  const cardElement = button.closest(".card");
  if (cardElement) cardElement.remove();
}


// Gọi hàm khi load trang
function renderLinksPreview() {
  const listLink = JSON.parse(localStorage.getItem("cards")) || [];
  const emailLogged = localStorage.getItem("emailLoginged");

  const container = document.getElementById("listLinks2");
  container.innerHTML = ""; // Xóa nội dung cũ

  const colors = {
    "GitHub": "bg-black",
    "YouTube": "bg-red-600",
    "LinkedIn": "bg-blue-600",
    "Twitter": "bg-sky-400"
  };

  const icons = {
    GitHub: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297a12 12 0 0 0-3.795 23.402c.6.111.82-.26.82-.577v-2.234c-3.338.726-4.042-1.609-4.042-1.609a3.181 3.181 0 0 0-1.333-1.754c-1.091-.747.082-.732.082-.732a2.52 2.52 0 0 1 1.837 1.236 2.547 2.547 0 0 0 3.49.996 2.565 2.565 0 0 1 .76-1.613c-2.665-.303-5.466-1.33-5.466-5.931a4.634 4.634 0 0 1 1.233-3.218 4.3 4.3 0 0 1 .116-3.176s1.006-.323 3.3 1.23a11.45 11.45 0 0 1 6 0c2.292-1.554 3.296-1.23 3.296-1.23a4.298 4.298 0 0 1 .118 3.176 4.63 4.63 0 0 1 1.232 3.218c0 4.612-2.804 5.624-5.475 5.921a2.867 2.867 0 0 1 .816 2.225v3.293c0 .32.218.694.825.577A12.003 12.003 0 0 0 12 .297z"/></svg>`,
    YouTube: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.995 2.995 0 0 0-2.108-2.116C19.614 3.5 12 3.5 12 3.5s-7.614 0-9.39.57A2.995 2.995 0 0 0 .502 6.186C0 7.96 0 12 0 12s0 4.04.502 5.814a2.995 2.995 0 0 0 2.108 2.116C4.386 20.5 12 20.5 12 20.5s7.614 0 9.39-.57a2.995 2.995 0 0 0 2.108-2.116C24 16.04 24 12 24 12s0-4.04-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    LinkedIn: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98A2.978 2.978 0 0 0 8 6.48 2.978 2.978 0 0 0 4.98 3.5zm.02 5.48C4.34 8.98 3.5 8.14 3.5 6.48S4.34 4 4.98 4s1.48.84 1.48 1.48-.66 1.48-1.48 1.48zM2 21.5h6v-9H2v9zm8 0h6v-4.5c0-2.45-3-2.25-3 0v4.5h6v-6c0-4.97-6-4.8-6 0v6z"/></svg>`,
    Twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.11 9.11 0 01-2.88 1.1 4.52 4.52 0 00-7.71 4.12A12.83 12.83 0 013 4.89a4.52 4.52 0 001.4 6.03 4.48 4.48 0 01-2.05-.57v.06a4.52 4.52 0 003.62 4.44 4.48 4.48 0 01-2.04.08 4.52 4.52 0 004.21 3.13 9.06 9.06 0 01-5.61 1.93A9.15 9.15 0 012 19.54a12.79 12.79 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.85 0-.2 0-.42-.02-.62A9.22 9.22 0 0023 3z"/></svg>`
  };

  // Lọc link theo email
  const userLinks = listLink.filter(link => link.email === emailLogged);

  for (const card of userLinks) {
    const platform = card.option;
    const link = card.link;

    const colorClass = colors[platform] || "bg-gray-600";
    const iconSvg = icons[platform] || "";

    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.className = `flex items-center justify-center gap-2 ${colorClass} text-white px-4 py-2 rounded-lg hover:opacity-90 transition`;
    a.innerHTML = `${iconSvg} <span>${platform}</span>`;

    container.appendChild(a);
    enableDragAndDrop("listLinks2")
  }
}
function enableDragAndDrop(id) {
  const container = document.getElementById(id);
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



