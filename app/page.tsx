import Header from "../page_components/Header";
import Body from "../page_components/Body";
import Footer from "../page_components/Footer";

// import { createUser } from "@/lib/createUser";
import { createConversation } from "@/lib/createConversation";

export default async function Home() {
  // await createUser();
  await createConversation();

  return (
    <>
      <div className="bg-black flex flex-col min-h-screen text-white">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
