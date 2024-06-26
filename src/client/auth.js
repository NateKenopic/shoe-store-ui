export async function loginUser(username, password) {
  try {
    let res = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    return res;
  } catch (err) {
    console.log(err);
  }
}
