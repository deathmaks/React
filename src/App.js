import React from 'react';
import './App.css';
import { css } from "aphrodite/no-important";
import styles from "./AppStyles";
class App extends React.Component {
  render() {
    return (
      <form className={css(styles.block__login)}>
        <img src="Images/LOGO.svg" alt="LOGO" />
        <h1>Войти в аккаунт</h1>
        <div className={css(styles.input__login)}>
          <i className={css(styles.hidden)/*(styles.alert__top)*/}>Неправильный логин, телефон или e-mail</i>
          <input minlength="1" maxlength="20" type="login" name="login" className={css(styles.login)} placeholder="Логин" autocomplete="on"></input>
          <i className={css(styles.hidden)/*(styles.alert__bottom)*/}>Ошибка</i>
        </div>
        <div className={css(styles.input__password)}>
          <i className={css(styles.hidden)/*(styles.alert__top)*/}>Неправильный пароль</i>
          <input maxlength="20" type="password" name="password" className={css(styles.password)} placeholder="Пароль" autocomplete="off"></input>
          <i href="#" className={css(styles.password__control)} aria-hidden="true"></i>
          <i className={css(styles.hidden)/*(styles.alert__bottom)*/}>Ошибка</i>
        </div>
        <button className={css(styles.submit)} >Войти</button>
        <p><a href="index.html" className={css(styles.password__forgot)} >Забыли пароль?</a><a href="index.html" className={css(styles.password__ask)} >Запросить новый пароль</a></p>
      </form >
    );
  }
}
export default App;