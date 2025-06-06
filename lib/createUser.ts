export async function createUser() {
  const url =
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/users";
  const options = {
    method: "POST",
    headers: { accept: "application/json", "content-type": "application/json" },
    body: JSON.stringify({ name: "Rodrigo" }),
  };

  try {
    const res = await fetch(url, options);
    const json = await res.json();
    console.log("USER OK");
    return json;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
