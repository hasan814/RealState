import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function DELETE(req, context) {
  try {
    await connectDB();
    const id = context.params.profileId;

    const session = await getServerSession(req);
    const email = session.user.email;
    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید ." },
        { status: 401 }
      );
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد ." },
        { status: 404 }
      );
    const profile = await Profile.findOne({ _id: id });
    if (!user._id.equals(profile.userId))
      return NextResponse.json(
        { error: "دسترسی محدود شده است ." },
        { status: 403 }
      );
    await Profile.deleteMany({ _id: id });
    return NextResponse.json(
      { message: "آگهی مورد نظر حذف شد ." },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "مشکلی در سرور رخ داده است ." },
      { status: 500 }
    );
  }
}
