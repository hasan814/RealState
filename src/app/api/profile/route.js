import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Types } from "mongoose";

import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/connectDB";

export async function GET(req) {
  try {
    await connectDB();

    const profiles = await Profile.find().select("-userId");
    return NextResponse.json({ data: profiles }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است ." },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectDB();

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
    } = await req.json();

    const session = await getServerSession(req);
    const email = session.user.email;
    if (!session)
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری خود شوید ." },
        { status: 401 }
      );

    const user = await User.findOne({ email });
    console.log(user);
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
    await Profile.create({
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
      userId: new Types.ObjectId(user._id),
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

export async function PATCH(req) {
  try {
    await connectDB();

    const {
      _id,
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
    } = await req.json();

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
      !_id ||
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
    const profile = await Profile.findOne({ _id });
    if (!user._id.equals(profile.userId))
      return NextResponse.json(
        { error: "دسترسی شما به این آگهی محدود شده است ." },
        { status: 403 }
      );
    profile.title = title;
    profile.description = description;
    profile.location = location;
    profile.phone = phone;
    profile.realState = realState;
    profile.price = price;
    profile.constructionDate = constructionDate;
    profile.amenities = amenities;
    profile.rules = rules;
    profile.category = category;
    profile.save();
    return NextResponse.json(
      { message: "آگهی با موفقیت ویزایش شد." },
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
