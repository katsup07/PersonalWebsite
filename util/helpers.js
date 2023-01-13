export async function getCommentsFromDatabase() {
  try{
  const response = await fetch(
    "https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
  );
  const commentsData = await response.json();
  if (!response.ok) {
    // TODO add error handling
    throw data;
  }

  const comments = [];
  for (const comment in commentsData) {
    comments.push({ id: comment, ...commentsData[comment] });
  }
  console.log("getCommentsFromDatabase(): ", comments);
  return comments;
} catch(err){
  console.log('Error in getCommentsFromDatabase(): ', err);
}
}

export async function signUserInOrUp(mode, emailAndPasswordData) {
  console.log(url, 'entering into signUserInOrUp()');
  const url =
    mode === "sign up"
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyALrejm9iGxyPeqo0tj_rFhdrdf6kW6dd8"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyALrejm9iGxyPeqo0tj_rFhdrdf6kW6dd8";

      try{
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(emailAndPasswordData),
        'Content-Type': 'application/json'
      });

      const data = await response.json();
      // TODO - add proper error handling.
      if(!response.ok){
        throw data;
      }

      console.log('data: ', data);
      return data.idToken;
    } catch(err){
      console.log('Something went wrong when authenticating user\'s email or password in signUserInOrUp(): ', err);
      throw err;
    }
}
