import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "components/input";
import classNames from "classnames";
import styles from "./login.module.scss";
import authApiService from "service/auth";
import { Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [isPendingLogin, setIsPendingLogin] = React.useState(false);
  const [error, setError] = React.useState("");
  const navigate = useNavigate();

  const correctFields = () => {
    if (email.trim() === "") {
      setError("Пожалуйста, заполните поле имя");
      return false;
    }

    if (password.trim() === "") {
      setError("Пожалуйста, заполните поле пароля");
      return false;
    }
    return true;
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isPendingLogin || !correctFields()) return;
    setIsPendingLogin(true);
    try {
      setIsPendingLogin(true);
      const res = await authApiService
        .login({
          login: email,
          passwordId: password,
        })
        // .then(() => {
        //   console.log(res);
        // });
        console.log(res);
        
      navigate("/");
    } catch (err: any) {
      setIsPendingLogin(false);
      if (err.response?.status === 401) setError("Пользователь не найден!");
    }
  };

  return (
    <div className={classNames(styles.email, isPendingLogin && styles.pending)}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleLogin}>
          <h2 className={styles.title}>Login</h2>
          <div className={styles.inputs}>
            <Input
              title="Эл.почта"
              type="string"
              value={email}
              onInput={(value) => setEmail(value)}
            />
            <Input
              title="Пароль"
              type="password"
              value={password}
              onInput={(value) => setPassword(value)}
            />
          </div>
          <Button className={styles.submit}>
            {isPendingLogin && (
              <span className={styles.loading}>
                {/* <ButtonLoader /> */}Loading...
              </span>
            )}
            {!isPendingLogin && (
              <span className={styles.submitText}>Войти</span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
