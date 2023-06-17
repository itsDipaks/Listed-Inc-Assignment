import styles from "../styles/signup.module.css"
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
const signup = () => {
  return (
    <>
       <div className={styles.container}>
      <div className={styles.Banner}>Board.</div>
      <div className={styles.content}>
        <div className={styles.Login}>
          <div className={styles.heading}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
          </div>

          <div className={styles.signupbtn}>
            <button  >
              <FcGoogle />
              Sign in with Google
            </button>
            <button>
              <SiApple />
              Signin with Google
            </button>
          </div>
          <form action="" className={styles.form}>
            <div>
              <label htmlFor="">Email Address</label>
              <input type="text" placeholder="Email Address" />
            </div>
            <div>
              <label htmlFor="">Password</label>
              <input type="text" placeholder="Password" />
            </div>

            <p>Forgot Password ?</p>
            <button>Sign In</button>
          </form>
          <p className={styles.link}>
            Don’t have an account? <span>Register here</span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
export default signup;
