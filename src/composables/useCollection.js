import { ref } from "@vue/reactivity";
import { db } from "../firebase/config";

let useCollection = (collection) => {
  let error = ref("");
  let addDocument = async (doc) => {
    try {
      await db.collection("messages").add(doc);
    } catch (err) {
      error.value = "Could not send the message.";
    }
  };
  return { error, addDocument };
};
export default useCollection;
