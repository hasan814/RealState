import Profile from "@/models/Profile";
import DetailsPage from "@/templates/Details/DetailsPage";
import connectDB from "@/utils/connectDB";

export const generateMetadata = async ({ params }) => {
  const { profileId } = params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  return { title: profile.title, description: profile.description };
};

const Details = async ({ params }) => {
  const { profileId } = params;
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  if (!profile) return <h3>مشکلی پیش آمده است</h3>;
  return <DetailsPage data={profile} />;
};

export default Details;
