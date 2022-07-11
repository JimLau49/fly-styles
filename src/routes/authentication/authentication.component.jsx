import SignIn from '../../components/sign-in/sign-in.component';
import SignUpForm from '../../components/sign-up/sign-up.component';

import { AuthenticationContainer } from './authentications.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
