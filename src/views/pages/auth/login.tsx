import LoginForm from "../../components/LoginForm";

const Login = () => {
  const login = (name: string) => {
    console.log(`login with ${name}`);
  };

  return (    
    <div className="d-flex justify-content-center h-100-v">
      <LoginForm onLogin={login}/>
    </div>
  )
}

export default Login;