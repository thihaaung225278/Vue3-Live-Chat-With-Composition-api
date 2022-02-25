import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";

let error = ref("");

let loginAccount = async (email, password) => {
  try {
    let res = await auth.signInWithEmailAndPassword(email, password);
    if (res.status == "404") {
      throw new Error("Cannot not Login for this account.");
    }
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

let useLogin = () => {
  return { error, loginAccount };
};
export default useLogin;
