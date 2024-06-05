import BuyResidentialPage from "@/templates/Residential/BuyResidentialPage";
import { getData } from "@/utils/action";

const BuyResitential = async ({ searchParams }) => {
  const data = await getData();
  let finalData = data.data;

  if (finalData.error) return <h3>مشکلی رخ داده است .</h3>;

  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResitential;
