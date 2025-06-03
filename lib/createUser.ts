export async function createUser() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Rodrigo",
      pictureUrl: "",
      profile: "",
      id: "",
    }),
  };
  await fetch(
    "https://chat.botpress.cloud/9b202e36-364d-4ef5-b2c3-f39a1aeb235a/users",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
