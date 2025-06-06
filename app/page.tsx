"use client";
import Header from "../page_components/Header";
import Body from "../page_components/Body";
import Footer from "../page_components/Footer";
import LoginPage from "../page_components/LoginPage";
// import { createConversation } from "@/lib/createConversation";
// import { createUser } from "@/lib/createUser";
// import { createMessage } from "@/lib/createMessage";
// import { createParticipant } from "@/lib/createPaticipant";
// import { listConversation } from "@/lib/listConversation";

//React
import { useState } from "react";

//Note:
//removed async so I can redirect users from login --> body
export default function Home() {
  // const user = await createUser();
  // await createConversation(user.key);
  // const listConversationId = await listConversation(user.key);
  // await createParticipant(user, listConversationId.conversations[0].id);
  // await createMessage(listConversationId.conversations[0].id, user.key);

  //State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div className="bg-black flex flex-col min-h-screen text-white">
        <Header />
        {!isLoggedIn ? (
          <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />
        ) : (
          <Body />
        )}
        <Footer />
      </div>
    </>
  );
}
