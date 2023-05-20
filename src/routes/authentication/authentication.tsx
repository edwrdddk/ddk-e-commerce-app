import SingUpForm from "../../components/sing-up-form/sing-up-form";
import SingInForm from "../../components/sing-in-form/sing-in-form";
import "./authentication.scss";

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  )
}