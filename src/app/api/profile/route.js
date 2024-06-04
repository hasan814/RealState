import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      title,
      description,
      location,
      phone,
      realState,
      price,
      constructionDate,
      amenities,
      rules,
      category,
    } = body;

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
    if (
      !title ||
      !location ||
      !description ||
      !phone ||
      !realState ||
      !price ||
      !constructionDate ||
      !category
    )
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر را وارد کنید ." },
        { status: 400 }
      );
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      realState,
      constructionDate,
      amenities,
      rules,
      category,
      price: +price,
      userId: new Types.ObjectId.createFromHexString(user._id),
    });
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد ." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است ." },
      { status: 500 }
    );
  }
}