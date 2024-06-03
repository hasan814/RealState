import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("مشکلی در سرور رخ داده است");
        }
        if (!email || !password)
          throw new Error("لطفا اطلاعات معتبر وارد کنید");

        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید.");

        const isValid = await verifyPassword(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه هست .");

        return { email };
      },
    }),
  ],
});

export { handler as GET, handler as POST };