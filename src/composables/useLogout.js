import { ref } from "@vue/reactivity";
import { auth } from "../firebase/config";

let useLogout = () => {
  let error = ref("");

  let logoutAccount = async () => {
    try {
      await auth.signOut();
      console.log("Logout");
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { logoutAccount };
};
export default useLogout;
