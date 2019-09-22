export const isAuthenticated = () => {
  let id = localStorage.getItem("id");
  let Email = localStorage.getItem("Email");
  let auth = false
  id && Email ? (auth = true) : (auth = false);
  console.log(auth);
  if (auth) {
    return true;
  } else {
    return false;
  }
};
