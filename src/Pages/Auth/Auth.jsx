import { Link } from "react-router-dom";
import classes from "../Auth/SignUp.module.css";
function Auth() {
  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon logo"
        />
      </Link>

      {/* form */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>

          <button className={classes.login__signInButton}>Sign In</button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* create account btn */}
        <button className={classes.login__registerButton}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
