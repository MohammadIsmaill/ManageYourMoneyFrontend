import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";    
import { errorMessage } from "../../utils/errorMessage";
import userAPI from "../../api/userApi";

const user = JSON.parse(localStorage.getItem("user"))

interface UsersState{
    user:any,
    isError:boolean,
    isSuccess:boolean,
    isLoading:boolean,
    message:any,
}

const initialState = {
    user : user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message: ""
} as UsersState

export const register = createAsyncThunk(
    "user/register",
    async (data:{name:string,email:string,password:string}, thunkAPI) => {
      try {
        return await userAPI.register(data);
      } catch (error) {       
        return thunkAPI.rejectWithValue(errorMessage(error));
      }
    }
  );


  export const login = createAsyncThunk(
    "user/login", 
    async (data : {email:string,password:string}, thunkAPI) => {
    try {
      return await userAPI.login(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error));
    }
  });

  

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      reset: (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      },
      logout:(state)=>{
        userAPI.logout()
        state.user = null;
      }
    },
    extraReducers: (builder) => {
      builder
      
        .addCase(register.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = payload;
        })
        .addCase(register.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.isError = true;
          state.message = payload;
          state.user = null;
        })
        .addCase(login.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.isSuccess = true;
          state.user = payload;
        })
        .addCase(login.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.isError = true;
          state.message = payload;
          state.user = null;
        })
    },
  });
  
  
  export const {reset,logout} = userSlice.actions
  export default userSlice.reducer
  