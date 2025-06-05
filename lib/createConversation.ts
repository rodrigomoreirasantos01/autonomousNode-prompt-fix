import { createUser } from "./createUser";

export async function createConversation() {
  const user = await createUser();
  const url =
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/conversations";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-user-key": `${user.key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: "conv_27309127391283761209371290" }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}
