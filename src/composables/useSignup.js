import { auth } from "../firebase/config";
import { ref } from "@vue/reactivity";

let error = ref("");

let createAccount = async (email, password, displayName) => {
  try {
    let res = await auth.createUserWithEmailAndPassword(email, password);
    if (res.status == "404") {
      throw new Error("Cannot Signup User!");
    }
    res.user.updateProfile({ displayName });
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAccount };
};
export default useSignup;
