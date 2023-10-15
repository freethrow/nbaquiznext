import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { userId } = auth();
  console.log(userId);
  return (
    <div className="navbar bg-base-200 h-20">
      <div className="flex-1">
        <Link href="/" className=" font-black text-4xl">
          Basketball Quiz
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <Link className="btn btn-neutral btn-active mx-3" href="/scoreboard">
            Scoreboard
          </Link>

          {!userId && (
            <>
              <li>
                <Link
                  className="btn btn-neutral btn-active mx-3"
                  href="/sign-up"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-neutral btn-active mx-3"
                  href="/sign-in"
                >
                  Sign In
                </Link>
              </li>
            </>
          )}

          {userId && (
            <>
              <Link href="/play" className="btn btn-neutral btn-active mx-3">
                Play
              </Link>
              <div className=" p-2 bg-gray-800 rounded-md mx-3">
                <UserButton showName={true} />
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
