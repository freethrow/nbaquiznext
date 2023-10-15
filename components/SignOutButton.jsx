"use client";
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <button
      className="btn btn-neutral btn-active m-3"
      onClick={() => signOut(() => router.push("/"))}
    >
      Sign out
    </button>
  );
};

export default SignOutButton;
