export async function getCommentsFromDatabase() {
  try{
  const response = await fetch(
    "https://worksplore-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json"
  );
  const commentsData = await response.json();
  if (!response.ok) {
    throw data;
  }

  const comments = [];
  for (const comment in commentsData) {
    comments.push({ id: comment, ...commentsData[comment] });
  }
  return comments;
} catch(err){
  console.log('Error in getCommentsFromDatabase(): ', err);
}
}

const fireBaseApiKey = process.env.apiKey;

export async function signUserInOrUp(mode, emailAndPasswordData) {
  const url =
    mode === "sign up"
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${fireBaseApiKey}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${fireBaseApiKey}`;

      try{
      if(emailAndPasswordData.email !== 'luke@bear.com')
        throw {error: { message: 'Only authorized admin users can login or sign up.'}};

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(emailAndPasswordData),
        'Content-Type': 'application/json'
      });

      const data = await response.json();
      if(!response.ok){
        throw data;
      }
      
      return data.idToken;
    } catch(err){
      console.log('Something went wrong when authenticating user\'s email or password in signUserInOrUp(): ', err);
      throw err;
    }
}
