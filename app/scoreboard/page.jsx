import { auth } from "@clerk/nextjs";
import { useId } from "react";

async function getAllUSersData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    cache: "no-store",
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const ScoreBoard = async () => {
  const users = await getAllUSersData();
  const { userId } = auth();
  return (
    <div className="flex flex-col justify-center items-center mx-auto h-full min-w-full">
      <h1>ScoreBoard</h1>

      <div className="overflow-x-auto">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr>
              <th>Position</th>
              <th>UserName</th>
              <th>Games Played</th>
              <th>Score / Game</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => {
              return (
                <tr
                  key={user.useId}
                  className={
                    user.user_id == userId ? "bg-red-700 rounded-lg" : ""
                  }
                >
                  <th>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.played}</td>
                  <td>
                    {user.played ? (
                      (user.score / user.played).toFixed(1)
                    ) : (
                      <>Not played yet</>
                    )}
                  </td>
                  <td>{user.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreBoard;
