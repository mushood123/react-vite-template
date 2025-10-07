import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    toast.success('SignUp successful');
    navigate('/dashboard');
  };
  const handleSignIn = () => {
    toast.success('SignIn successful');
    navigate('/auth/signin');
  };

  return (
    <>
      <div>SignUp</div>
      <button onClick={handleSignUp}>SignUp</button>
      <button onClick={handleSignIn}>SignIn</button>
    </>
  );
};

export { SignUp };
