const initialState = {
  isAuth: false,
  username: "User1",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
      };
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
      };
  }
  return state;
};

export const login = () => ({ type: "LOGIN" });
export const logout = () => ({ type: "LOGOUT" });

export default authReducer;
