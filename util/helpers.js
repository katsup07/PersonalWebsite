export async function getCommentsFromDatabase() {
  const response = await fetch(
    "https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
  );
  const commentsData = await response.json();
  if (!response.ok) {
    // TODO add error handling
    return console.log("Something went wrong when getting comments", response);
  }

  const comments = [];
  for (const comment in commentsData) {
    comments.push({ id: comment, ...commentsData[comment] });
  }
  console.log("getCommentsFromDatabase(): ", comments);
  return comments;
}

export async function signUserInOrUp(mode, emailAndPasswordData) {
  console.log(url, 'entering into signUserInOrUp');
  const url =
    mode === "sign up"
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALrejm9iGxyPeqo0tj_rFhdrdf6kW6dd8"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALrejm9iGxyPeqo0tj_rFhdrdf6kW6dd8";

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(emailAndPasswordData),
        'Content-Type': 'application/json'
      });

      const data = await response.json();
      // TODO - add proper error handling.
      if(!response.ok){
        console.log('Something went wrong when authenticating users email or password', response);
      }

      console.log(data);
      return data.idToken;
}
