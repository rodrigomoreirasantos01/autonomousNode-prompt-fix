export async function listConversation(key: string) {
  const url =
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/conversations";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-user-key": `${key}`,
    },
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log("LIST CONVERSATION");
    return json;
  } catch (error) {
    console.error("LIST CONVERSATION FAIL", error);
    return undefined;
  }
}
