export async function createMessage(conversationId: string, key: string) {
  const url =
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/messages";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-user-key": `${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      payload: { type: "text", text: "YOOOOOOOOOOOO" },
      conversationId: `${conversationId}`,
    }),
  };

  try {
    const res = await fetch(url, options);
    const json = res.json();
    console.log("MESSAGE OK");
    return json;
  } catch (error) {
    console.error(error);
  }
}
