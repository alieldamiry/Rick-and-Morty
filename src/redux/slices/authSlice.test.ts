import authReducer, { login, logout } from "./authSlice";

test("Should handle initial state", () => {
  expect(authReducer(undefined, { type: undefined })).toEqual({
    isAuth: false,
  });
});

test("Should logout", () => {
  expect(authReducer({ isAuth: true }, logout())).toEqual({
    isAuth: false,
  });
});

describe("Should handle login", () => {
  test("Should authenticate when credientials are matched", () => {
    expect(
      authReducer(
        { isAuth: false },
        login({ email: "admin@top.legal", password: "123456" })
      )
    ).toEqual({
      isAuth: true,
    });
  });

  test("Should not authenticate when credientials are not matched", () => {
    expect(
      authReducer(
        { isAuth: false },
        login({ email: "wrongemail@mail.com", password: "5641" })
      )
    ).toEqual({
      isAuth: false,
    });
  });
});
