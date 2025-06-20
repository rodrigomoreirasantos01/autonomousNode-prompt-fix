export async function accountStorage(
  email: string,
  password: string,
  userId: string
) {
  const url =
    //change table id later
    "https://api.botpress.cloud/v1/tables/table_01JX45TDXA4C37VM0F9GMZJ7QV/rows/upsert";

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-bot-id": "06f70f02-c553-4c75-b519-4499f676164c",
      "x-workspace-id": "wkspace_01J5XF54MAQBP0WQVV9PG06ABE",
      "content-type": "application/json",
      //temporary key, we will make another one later
      authorization: "Bearer bp_pat_wzspJtpOUslJTVYDEowzouh51EkViDb5ZdMw",
    },
    body: JSON.stringify({
      rows: [{ id: 1, email: email, password: password, userId: userId }],
      waitComputed: false,
    }),
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
}
