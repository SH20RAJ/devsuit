import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    return <div>Loading...</div>;
  }

  redirect(session.user.image);
  return <div>page</div>;
};

export default page;
