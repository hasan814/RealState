import BuyResidentialPage from "@/templates/Residential/BuyResidentialPage";

const BuyResitential = async ({ searchParams }) => {
  const response = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  const data = await response.json();
  if (data.error) return <h3>هیچ مشکلی پیش آمده است .</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter(
      (item) => item.category === searchParams.category
    );
  }

  return <BuyResidentialPage data={finalData} />;
};

export default BuyResitential;
