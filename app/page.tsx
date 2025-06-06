import Header from "../page_components/Header";
// import Body from "../page_components/Body";
import Footer from "../page_components/Footer";
import LoginPage from "../page_components/LoginPage";
import { createConversation } from "@/lib/createConversation";
import { createUser } from "@/lib/createUser";
import { createMessage } from "@/lib/createMessage";
import { createParticipant } from "@/lib/createPaticipant";
import { listConversation } from "@/lib/listConversation";

export default async function Home() {
  const user = await createUser();
  await createConversation(user.key);
  const listConversationId = await listConversation(user.key);
  await createParticipant(user, listConversationId.conversations[0].id);
  await createMessage(listConversationId.conversations[0].id, user.key);
  return (
    <>
      <div className="bg-black flex flex-col min-h-screen text-white">
        <Header />
        {/* <Body /> */}
        <LoginPage />
        <Footer />
      </div>
    </>
  );
}
