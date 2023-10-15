import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <div className="navbar bg-base-200 h-20">
      <div className="flex-1">
        <Link href="/" className=" font-black text-2xl">
          Basketball Quiz
        </Link>
      </div>
      <div className="flex-none">
        <div className="menu menu-horizontal px-1">
          <Link className="btn btn-neutral btn-active mx-3" href="/scoreboard">
            Scoreboard
          </Link>

          {!userId && (
            <>
              <Link className="btn btn-neutral btn-active mx-3" href="/sign-up">
                Sign Up
              </Link>

              <Link className="btn btn-neutral btn-active mx-3" href="/sign-in">
                Sign In
              </Link>
            </>
          )}

          {userId && (
            <>
              <Link href="/play" className="btn btn-neutral btn-active mx-3">
                Play
              </Link>

              <SignOutButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
