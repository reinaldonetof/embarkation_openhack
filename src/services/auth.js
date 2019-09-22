export const isAuthenticated = () => {
  let id = localStorage.getItem("id");
  let email = localStorage.getItem("email");
  let auth = false
  id && email ? (auth = true) : (auth = false);
  console.log(auth);
  if (auth) {
    return true;
  } else {
    return false;
  }
};
