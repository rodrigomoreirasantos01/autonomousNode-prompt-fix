export async function findStoredAccount(email: string, password: string) {
  const url =
    //change table id later
    "https://api.botpress.cloud/v1/tables/table_01JX46SX2DGJP8Q2W020DEBZZR/rows/find";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "x-bot-id": "88ab7dec-be4b-4cf6-a94c-5b3f971c4739",
      "x-workspace-id": "wkspace_01JQ7B996FTQSH23XHV8RT1B0N",
      "content-type": "application/json",
      //temporary key, we will make another one later
      authorization: "Bearer bp_pat_BFgnlcVQ79QYntB80tXNqxW78Z1TyF5K5zCr",
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
