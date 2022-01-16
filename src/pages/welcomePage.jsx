import { NavLink } from "react-router-dom";
import  "../assets/styles/welcome-page.css"

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-page_header">Привет, почитай посты разнобразь свой день {":)"}</h1>
      <NavLink to="/posts" className="welcome-page_start">
        Начать
      </NavLink>
    </div>
  )
};
