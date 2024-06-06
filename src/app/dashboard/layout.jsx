import SideBar from "@/layout/Dashboard/SideBar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

const DashBoardLayout = async ({ children }) => {
  // =========== Session ===========
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  // =========== Rendering ===========
  if (!user) return <h3>مشکلی پیش آمده است .</h3>;
  return (
    <SideBar role={user.role} email={user.email}>
      {children}
    </SideBar>
  );
};

export default DashBoardLayout;
