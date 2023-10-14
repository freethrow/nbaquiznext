"use client";
import { useClerk } from "@clerk/clerk-react";

const SignOutButton = () => {
  const { signOut } = useClerk();

  return (
    <a className="menuLink cursor-pointer" onClick={() => signOut()}>
      Sign out
    </a>
  );
};
export default SignOutButton;
