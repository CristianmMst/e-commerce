import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export async function Profile() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <img className="rounded-full" src={session?.user?.image!} alt="avatar" />
      <h3>{session?.user?.name}</h3>
    </div>
  );
}

export default Profile;
