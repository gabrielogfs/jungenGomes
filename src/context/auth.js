import { auth } from "../../server/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, sendSignInLinkToEmail
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../server/Firebase";

export async function createUser(email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const adminEmails = import.meta.env.VITE_ADMIN_EMAILS.split(",");

  if (!adminEmails.includes(email)) {
    await sendSignInLinkToEmail(auth, email, {
      url: `${window.location.origin}/verify-email`,
      handleCodeInApp: true,
    });
  }

  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    role: adminEmails.includes(email) ? "admin" : "user",
    email: user.email,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  await auth.signOut();

  return user;
}

export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const userDoc = await getDoc(doc(db, "users", user.uid));
  const userData = userDoc.exists() ? userDoc.data() : {};

  if (!user.emailVerified && !adminEmails.includes(email)) {
    return {
      ...user,
      role: userData.role || "user",
      requiresVerification: true,
    };
  }

  return {
    ...user,
    role: userData.role || "user",
    requiresVerification: false,
  };
};

export const signOut = async () => {
  return auth.signOut();
};
