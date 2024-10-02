import { auth } from "@/auth";

export default async function page() {
  const session = await auth();
  if (!session) {
    return <div>Loading...</div>;
  }
  return <div>{session.user.name}</div>;
}
