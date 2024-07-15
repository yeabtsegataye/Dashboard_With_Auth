// src/hooks/useRefreshToken.js
import { useDispatch } from "react-redux";
import { setCredentials, logOut } from "../features/auth/authSlice";
import axios from "axios";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/auth/refresh-token",
        {},
        { withCredentials: true }
      );
      if (response.data) {
        //  console.log(response.data.accessToken, 'ref response')
        dispatch(setCredentials(response.data));
        // console.log("added to credential")
      } else {
        dispatch(logOut());
      }
    } catch (error) {
      console.error("Failed to refresh token:", error.response.data);
      dispatch(logOut());
    }
  };

  return refresh;
};

export default useRefreshToken;
