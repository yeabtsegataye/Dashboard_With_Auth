import axios from "axios";
// import { useDispatch } from "react-redux";
import { logOut } from "../features/auth/authSlice";

const verifyToken = async (token, dispatch, refresh) => {
  if (token) {
    // console.log(token, "form the prop");
    const url = "http://localhost:8000/auth/verify-token"; // Adjust the endpoint as needed
    const config = {
      headers: {
        authorization: `Bearer ${token}`, // Add the token as Authorization header
      },
      withCredentials: true, // Include cookies in the request
    };
    // const dispatch = useDispatch();

    try {
      const response = await axios.post(url, {}, config);
      // console.log(response.data.verified, "verified respons");
      // if (!response.data.verified) {
      //   dispatch(logOut());
      // }
      return response.data.verified;
    } catch (error) {
      console.log(error.response.data.statusCode);
      if (error.response.data.statusCode === 403) {
        refresh();
      } else {
        dispatch(logOut());
        throw error;
      }
      // console.error("Error verifying token:", error.response.data);
    }
  } else {
   return false
  }
};

export default verifyToken;
