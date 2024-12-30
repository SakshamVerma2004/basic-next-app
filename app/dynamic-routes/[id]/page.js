export async function generateStaticParams() {
  let fetchUser = await fetch("https://jsonplaceholder.typicode.com/users");
  let res = await fetchUser.json();

  return res.map((user) => ({
    id: user.id.toString(),
  }));
}

let Page = async ({ params }) => {
  let fetchUser = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  let res = await fetchUser.json();
  if (!res || !res.id) {
    return <div>User not found</div>;
  }
  return <div>User name: {res.name}</div>;
};

export default Page;
