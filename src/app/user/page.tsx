import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth"
import getCurrentUser from "../actions/getCurrentUser";

export default async function UserPage() {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  const userData = await getCurrentUser();
  console.log(userData);
  return (
    <>
    </>
  )
};
