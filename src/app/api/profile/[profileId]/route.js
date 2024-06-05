import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { profileId } = params;
  try {
    await connectDB();
    const profile = await Profile.findOne({ _id: profileId });
    return NextResponse.json(profile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است ." },
      { status: 500 }
    );
  }
};
