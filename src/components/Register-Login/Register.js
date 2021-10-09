import React, { useState, useContext } from "react";
import CustomInput from "../ui/CustomInput";
import Context from "../../context";

const Input_date = [
  {
    inner_class: "col-md-12 col-12 mb--15",
    lable_text: "Полное имя",
    type: "text",
    key: "full_name",
  },
  {
    inner_class: "col-12 mb--20",
    lable_text: "Email",
    type: "email",
    key: "email",
  },
  {
    inner_class: "col-lg-6 mb--20",
    lable_text: "пароль",
    type: "password",
    key: "password",
  },
  {
    inner_class: "col-lg-6 mb--20",
    lable_text: "Повторите пароль",
    type: "password",
    key: "replay_pass",
  },
];
function Register() {
  const { User } = useContext(Context);
  const [alert,set_alert] = useState(false)
  let [register_date, set_register_date] = useState({
    email: "",
    full_name: "",
    password: "",
    replay_pass: "",
  });

  const UpdateFormRegisterValues = (key, value) => {
    const copy_register = { ...register_date };
    copy_register[key] = value;
    set_register_date(copy_register);
  };

  const RenderInputs = () =>
    Input_date.map((element) => (
      <CustomInput
        inner_class={element.inner_class}
        lable_text={element.lable_text}
        type={element.type}
        key={element.key}
        UpdateValues={(values) => UpdateFormRegisterValues(element.key, values)}
      />
    ));
  const ValuesLengthValidate = (value) => value.length > 3;
  const PasswortValidate = (pass1, pass2) => pass1 === pass2;

   const SendToBack = async (event) => {
    event.preventDefault();
    const checked_length = Object.values(register_date).every(
      (register_value) => ValuesLengthValidate(register_value)
    );
    const checed_pass = PasswortValidate(
      register_date.password,
      register_date.replay_pass
    );
    if (checked_length && checed_pass) {
      let a = await User.Registration(register_date);
      !a ? set_alert(true) : set_alert(false)
    }
  };

  return (
    <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb--30 mb-lg--0">
      <form onSubmit={SendToBack}>
        <div className="login-form">
          <h4 className="login-title"> Регистрация </h4>{" "}
          <div className="row">
            {" "}
            {RenderInputs()}{" "}
            <div className="col-md-12">
              <button type="submit" href="#" className="btn btn-outlined">
                {" "}
                Регистрация{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </form>{" "}
      <div style={{display: alert ?'' :'none'}} className="alert alert-warning" role="alert">
        <p>Такой пользователь уже существует!!!</p>
        <button onClick={() => set_alert(false)} type="button" className="bnt btn-success">
          Закрыть
        </button>
      </div>
    </div>
  );
}
export default Register;
