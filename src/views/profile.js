import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components";
import JapanFlag from "../assets/japan-flag.svg"
import DefaultFlag from "../assets/default-flag.svg"

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub, updated_at, email_verified, 'https://example.com/country': country } = user;
  var Flag = DefaultFlag;
  if (country === 'Japan') {
    Flag = JapanFlag;
  }
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md-1 mb-3">
          <img
            src={Flag}
            alt="country flag"
            className="rounded-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
          <p className="lead text-muted">email verified : {String(email_verified)}</p>
        </div>
      </div>
      <div className="row">
        <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});