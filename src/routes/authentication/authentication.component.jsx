// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

///////////
// Comments are for the Redirect Sign In with Google

import { AuthenticationContainer } from "./authentication.styles.jsx";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </AuthenticationContainer>
  );
};

export default Authentication;
