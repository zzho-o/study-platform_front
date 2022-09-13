import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userApi } from "../../apis/userApi";

// const initialState = {
//   isLogin: false,
//   userInfo: null,
// };

// //toolkit - thunk (비동기 처리를 여기서 하고 싶을때 사용)
// export const loginCheck = createAsyncThunk("LOGIN_CHECK", async () => {
//   try {
//     const response = userApi.isLogin();
//     return response;
//   } catch (e) {
//     // return null;
//     return thunkAPI.rejectWithValue(await e.response.data);
//   }
// });

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     isLogined(state, action) {
//       state.isLogin = action.payload;
//     },
//     getUserInfo(state, action) {
//       state.userInfo = action.payload;
//     },
//     logout(state, action) {
//       state.isLogin = false;
//       state.userInfo = null;
//       // localStorage.removeItem("accessToken");
//       // localStorage.removeItem("refreshToken");
//       // // deleteCookie("accessToken");
//       // // deleteCookie("refreshToken");
//     },
//     // setUserNickname(state, action) {
//     //   state.userInfo.nickname = action.payload;
//     // },
//     // setUserPoint(state, action) {
//     //   state.userInfo.myPoint = action.payload;
//     // },
//     // setUserBadge(state, action) {
//     //   state.userInfo.Badge = state.userInfo.Badge
//     //     ? [action.payload]
//     //     : [...state.userInfo.Badge, action.payload];
//     // },
//   },
//   // extraReducers: (builder) => {
//   //   builder.addCase(loginCheck.fulfilled, (state, action) => {
//   //     state.userInfo = action.payload;
//   //     state.isLogin = true;
//   //   });
//   // },
// });

// // Action creators are generated for each case reducer function
// export const {
//   isLogined,
//   getUserInfo,
//   logout,
//   // setUserNickname,
//   // setUserPoint,
//   // setUserBadge,
// } = userSlice.actions;

const initialState = {
  isLogIn: false,
  modalOpen: false,
};
//대충 만든 slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isLogined: (state, action) => {
      state.isLogIn = action.payload;
    },
    isLogOuted: (state, action) => {
      state.isLogIn = action.payload;
    },
    ModalOpen: (state, action) => {
      state.modalOpen = action.payload;
    },
  },
});

export const { isLogined, isLogOuted, ModalOpen } = userSlice.actions;
export default userSlice.reducer;
