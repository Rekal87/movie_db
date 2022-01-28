import React from "react";
import Input from "./Input";
import Signinbutton from "./Signin-button";

function Login() {
  return (
    <div>
      <>
        <main className="form-signin">
          <form>
            <img
              className="mb-4"
              src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
              alt="logo"
              width="72"
              height="72"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
              <Input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label className="sr-only" for="floatingInput"></label>
            </div>
            <div className="form-floating">
              <Input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label className="sr-only" for="floatingPassword"></label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <Signinbutton />
            <p class="mt-5 mb-3 text-muted">&copy; Nnamdi Echem 2022</p>
          </form>
        </main>
      </>
    </div>
  );
}

export default Login;
