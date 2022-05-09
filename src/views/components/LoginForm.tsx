import React, { useCallback, useState } from "react";

type LoginFormProps = {
  onLogin: (name: string) => void;
};

const LoginForm = ({onLogin}: LoginFormProps) => {
  const [name, setName] = useState("");

  const login = useCallback(() => {
    onLogin(name);
  }, [name, onLogin]);

  const nameChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  }

  return (
    <div className = "align-self-center">
      <form onSubmit={login}>
        <div className="mb-10">
          <label className="mr-5">
            Student name:
          </label>
          <input type="text" value={name} onChange={nameChange}>
          </input>
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

}

export default LoginForm;