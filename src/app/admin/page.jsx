import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import SideBar from "@/layout/Dashboard/SideBar";

const Admin = async () => {
  // =========== Session ============
  await connectDB();
  const session = await getServerSession(authOptions);
  const user = await User.findOne({ email: session.user.email });

  // =========== Rendering ============
  if (!session) redirect("/signin");
  if (user.role !== "ADMIN") redirect("/dashboard");

  return (
    <SideBar role={user.role} email={user.email}>
      <div>Admin</div>
    </SideBar>
  );
};

export default Admin;
