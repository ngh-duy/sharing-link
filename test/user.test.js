const { registerAccount, login, addCard, saveInfo, getUserCards, removeCard, logout, changeAvatar } = require('./user');
describe("User module tests", () => {
  let localStorageMock;

  beforeEach(() => {
    let store = {};
    localStorageMock = {
      getItem: jest.fn((key) => store[key] || null),
      setItem: jest.fn((key, value) => { store[key] = value }),
      removeItem: jest.fn((key) => { delete store[key] }),
      store,
    };
  });
describe("addCard", () => {
  test("add card success", () => {
    let user = { email: "u@u.com", password: "p", cards: [] };
    localStorageMock.getItem = jest.fn((key) => {
      if (key === "accounts") return JSON.stringify([user]);
      if (key === "userLogin") return JSON.stringify(user);
      return null;
    });

    const cardData = { cardNumber: "1234-5678-9012-3456", type: "Visa" };
    const updatedUser = addCard("u@u.com", cardData, localStorageMock);

    expect(updatedUser.cards.length).toBe(1);
    expect(updatedUser.cards[0]).toEqual(cardData);

    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "accounts",
      expect.any(String)
    );
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      "userLogin",
      expect.any(String)
    );
  });

  test("add card fail if user not found", () => {
    localStorageMock.getItem = jest.fn(() => JSON.stringify([]));
    expect(() => addCard("notfound@x.com", {}, localStorageMock)).toThrow("Tài khoản không tồn tại");
  });
});
  describe("registerAccount", () => {
    test("register success", () => {
      const user = registerAccount("test@example.com", "123", "123", localStorageMock);
      expect(user.email).toBe("test@example.com");
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    test("register fail: password mismatch", () => {
      expect(() => registerAccount("a@b.com", "123", "321", localStorageMock))
        .toThrow("Mật khẩu không khớp");
    });

    test("register fail: email exists", () => {
      localStorageMock.getItem = jest.fn(() => JSON.stringify([{ email: "exist@example.com", password: "123" }]));
      expect(() => registerAccount("exist@example.com", "123", "123", localStorageMock))
        .toThrow("Tài khoản đã tồn tại");
    });
  });

  describe("login", () => {
    test("login success", () => {
      localStorageMock.getItem = jest.fn(() => JSON.stringify([{ email: "user@test.com", password: "pass" }]));
      const user = login("user@test.com", "pass", localStorageMock);
      expect(user.email).toBe("user@test.com");
      expect(localStorageMock.setItem).toHaveBeenCalledWith("userLogin", expect.any(String));
    });

    test("login fail", () => {
      localStorageMock.getItem = jest.fn(() => JSON.stringify([]));
      expect(() => login("a@b.com", "123", localStorageMock))
        .toThrow("Email hoặc mật khẩu không đúng");
    });
  });

  describe("saveInfo", () => {
    test("save info success", () => {
      let user = { email: "u@u.com", password: "p", firstName: null, lastName: null, avt: "" };
      localStorageMock.getItem = jest.fn((key) => {
        if (key === "userLogin") return JSON.stringify(user);
        if (key === "accounts") return JSON.stringify([user]);
        return null;
      });
      const updatedUser = saveInfo("Nguyen", "Duy", localStorageMock);
      expect(updatedUser.firstName).toBe("Nguyen");
      expect(updatedUser.lastName).toBe("Duy");
      expect(localStorageMock.setItem).toHaveBeenCalledWith("userLogin", JSON.stringify(updatedUser));
    });

    test("save info fail if not logged in", () => {
      localStorageMock.getItem = jest.fn(() => null);
      expect(() => saveInfo("A", "B", localStorageMock)).toThrow("Chưa đăng nhập");
    });
  });

  describe("removeCard", () => {
    test("remove success", () => {
      let accounts = [{ email: "a@b.com", password: "p" }, { email: "c@d.com", password: "p2" }];
      localStorageMock.getItem = jest.fn(() => JSON.stringify(accounts));
      const newAccounts = removeCard("a@b.com", localStorageMock);
      expect(newAccounts.find(u => u.email === "a@b.com")).toBeUndefined();
      expect(localStorageMock.setItem).toHaveBeenCalledWith("accounts", JSON.stringify(newAccounts));
    });

    test("remove fail if email not found", () => {
      localStorageMock.getItem = jest.fn(() => JSON.stringify([]));
      expect(() => removeCard("notfound@x.com", localStorageMock)).toThrow("Tài khoản không tồn tại");
    });
  });

  describe("logout", () => {
    test("logout removes userLogin", () => {
      logout(localStorageMock);
      expect(localStorageMock.removeItem).toHaveBeenCalledWith("userLogin");
    });
  });
describe("getUserCards", () => {
  test("get user cards success", () => {
    let user = { email: "u@u.com", password: "p", cards: [{ link: "https://abc.com" }] };
    localStorageMock.getItem = jest.fn(() => JSON.stringify([user]));
    const cards = getUserCards("u@u.com", localStorageMock);
    expect(cards.length).toBe(1);
    expect(cards[0].link).toBe("https://abc.com");
  });

  test("get user cards returns empty if no cards", () => {
    let user = { email: "u@u.com", password: "p" };
    localStorageMock.getItem = jest.fn(() => JSON.stringify([user]));
    const cards = getUserCards("u@u.com", localStorageMock);
    expect(cards).toEqual([]);
  });

  test("get user cards fail if user not found", () => {
    localStorageMock.getItem = jest.fn(() => JSON.stringify([]));
    expect(() => getUserCards("notfound@x.com", localStorageMock)).toThrow("Tài khoản không tồn tại");
  });
});

  describe("changeAvatar", () => {
    test("change avatar success", () => {
      let user = { email: "u@u.com", password: "p", avt: "./images/old.jpg" };
      localStorageMock.getItem = jest.fn((key) => {
        if (key === "userLogin") return JSON.stringify(user);
        if (key === "accounts") return JSON.stringify([user]);
        return null;
      });
      const updatedUser = changeAvatar("./images/new.jpg", localStorageMock);
      expect(updatedUser.avt).toBe("./images/new.jpg");
      expect(localStorageMock.setItem).toHaveBeenCalledWith("userLogin", JSON.stringify(updatedUser));
    });

    test("change avatar fail if not logged in", () => {
      localStorageMock.getItem = jest.fn(() => null);
      expect(() => changeAvatar("./images/new.jpg", localStorageMock)).toThrow("Chưa đăng nhập");
    });
  });
});
