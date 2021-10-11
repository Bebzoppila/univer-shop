import React, { useState,useContext } from "react";
import CustomInput from "../ui/CustomInput";
import context from "../../context";
import { observer } from 'mobx-react-lite';
const input_login_date = [
  {
    inner_class: "col-md-12 col-12 mb--15",
    lable_text: "Ваш адрес электронной почты",
    type: "email",
    key: "email",
  },
  {
    inner_class: "col-12 mb--20",
    lable_text: "Пароль",
    type: "password",
    key: "pass",
  },
];

function Login() {
  let [login_date, set_login_date] = useState({
    email: "",
    pass: "",
  });
  const { User } = useContext(context)
  console.log();


  const UpdateFormLoginValues = (key, value) => {
    const copy_login = { ...login_date };
    copy_login[key] = value;
    set_login_date(copy_login);
  };

  const RenderInputs = () =>
    input_login_date.map((el) => (
      <CustomInput
        inner_class={el.inner_class}
        lable_text={el.lable_text}
        type={el.type}
        key={el.key}
        UpdateValues={(values) => UpdateFormLoginValues(el.key, values)}
      />
    ));
        // if(User.)
    if(User.isAuth){
        return (
            <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                <h4 className="login-title"> Вы уже авторизованны </h4>{" "}
            </div>
        )
    }
  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
      <form action="./">
        <div className="login-form">
          <h4 className="login-title"> Вы уже зарегестрированны ? </h4>{" "}
          <div className="row">
            {" "}
            {RenderInputs()}{" "}
            <div className="col-md-12">
              <button href="#" className="btn btn-outlined">
                {" "}
                Войти{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
    </div>
  );
}
export default observer(Login);
