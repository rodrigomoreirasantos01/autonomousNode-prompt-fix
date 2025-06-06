export async function createConversation(key: string) {
  const url =
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/conversations";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-user-key": `${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ id: "" }),
  };
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log("CONVERSATION OK");

    return json;
  } catch (err) {
    console.error("CONVERSATION FAIL", err);
    return undefined;
  }
}
