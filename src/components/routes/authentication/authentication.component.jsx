// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

///////////
// Comments are for the Redirect Sign In with Google

import "./authentication.styles.scss";

import SignUpForm from "../../sign-up-form/sign-up-form.component";

import SignInForm from "../../sign-in-form/sign-in-form.component";

const Authentication = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
