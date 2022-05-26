import SignIn from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';

import './authentications.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
