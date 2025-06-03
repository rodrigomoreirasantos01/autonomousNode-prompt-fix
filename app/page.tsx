import Body from "../page_components/Body";
import Header from "../page_components/Header";
import { createUser } from "@/lib/createUser";

export default async function Home() {
  await createUser();

  return (
    <>
      <div className="bg-black">
        <Header />
        <Body />
      </div>
    </>
  );
}
