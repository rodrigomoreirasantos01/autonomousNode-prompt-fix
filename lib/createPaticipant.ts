type userProp = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  key: string;
};

export async function createParticipant(
  user: userProp,
  conversationId: string
) {
  const url = `https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/conversations/${conversationId}/participants`;
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-user-key": `${user.key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId: `${user.id}` }),
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log("PARTICIPANT OK");

    return json;
  } catch (error) {
    console.error(error);
  }

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}
