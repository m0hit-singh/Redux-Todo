import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { toggleDark } from "../redux/dark.slice";
import { RootState } from "../redux/store";

export default function PageHeader() {
  const isDark = useSelector((state: RootState) => state.mode);
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch(toggleDark(!isDark));
  };

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  return (
    <div className="header">
      <h1>Todo List</h1>
      <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" onClick={toggleMode} />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
}
