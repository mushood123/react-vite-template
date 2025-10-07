import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    toast.success('SignIn successful');
    navigate('/dashboard');
  };
  const handleSignUp = () => {
    toast.success('SignUp successful');
    navigate('/auth/signup');
  };

  return (
    <>
      <div>SignIn</div>
      <button onClick={handleSignIn}>SignIn</button>
      <button onClick={handleSignUp}>SignUp</button>
    </>
  );
};

export { SignIn };
