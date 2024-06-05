export const getData = async () => {
  const response = await fetch("http://localhost:3000/api/profile", {
    next: { revalidate: 1 },
  });
  if (!response.ok) throw new Error("Something went wrong");
  return response.json();
};
