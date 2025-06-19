export async function findStoredAccount(email: string, password: string) {
  const url =
    //change table id later
    "https://api.botpress.cloud/v1/tables/table_01JX45TDXA4C37VM0F9GMZJ7QV/rows/find";
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
      limit: 1,
      offset: 0,
      filter: { email: email },
    }),
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));

  //storing the result:
  const response = await fetch(url, options);
  const data = await response.json();

  //if user found:
  const user = data.rows && data.rows[0];
  if (user && user.password === password) {
    return true;
  } else {
    return false;
  }
}
