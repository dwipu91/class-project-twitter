import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Logo_page.scss";
const Login_page = () => {
  return (
    <>
      <div className="container login_">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="x_logo">
              <img
                src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="login">
              <h1 className="b_heading">Happening now</h1>
              <h5 className="s_heading">Join today.</h5>
              <div className="all_btn">
                <button>
                  <Link>
                    {" "}
                    <FcGoogle /> Sing up with Google
                  </Link>
                </button>
                <button className="hover_apple">
                  <Link>
                    {" "}
                    <FaApple /> Sing up with Apple
                  </Link>
                </button>
                <p className="form_or">or</p>
                <button className="creat_btn">
                  <Link>Creat account</Link>
                </button>
                <p className="p">
                  By signing up, you agree to the <Link>Terms of Service</Link>{" "}
                  and <Link>Privacy Policy</Link>, including{" "}
                  <Link>Cookie Use</Link>.
                </p>
                <h4 className="alert_accout">Already have an accoutn?</h4>
                <button className="btn_sing_in">Sing in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login_page;
