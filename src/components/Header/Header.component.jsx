import React, { useReducer, useEffect } from "react";

import ComponentOption from "../Options/Options.component";

export const HEADER_TYPES = {
  SHOW_HIDE_MENU: "SHOW_HIDE_MENU",
  HIDE_MENUS: "HIDE_MENUS",
  INIT_OPTIONS_TO_SHOW: "INIT_OPTIONS_TO_SHOW"
};

const changeStatusMenu = (nameMenu, status) => ({
  type: HEADER_TYPES.SHOW_HIDE_MENU,
  payload: { nameMenu, status }
});

const hideAllTheOptions = () => ({
  type: HEADER_TYPES.HIDE_MENUS
});
const initOptionsToShow = data => ({
  type: HEADER_TYPES.INIT_OPTIONS_TO_SHOW,
  payload: data
});

const INITIAL_STATE = {
  menusToShow: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case HEADER_TYPES.INIT_OPTIONS_TO_SHOW:
      return { ...state, menusToShow: action.payload };
    case HEADER_TYPES.SHOW_HIDE_MENU:
      return {
        ...state,
        menusToShow: {
          ...state.menusToShow,
          [action.payload.nameMenu]: action.payload.status
        }
      };
    case HEADER_TYPES.HIDE_MENUS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

const Header = ({ optionstoShow }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { menusToShow } = state;

  useEffect(() => {
    const setOptionsToShow = () => {
      let optionsTemp = {};
      Object.keys(optionstoShow).forEach(key => {
        optionsTemp = { ...optionsTemp, [key]: false };
      });

      dispatch(initOptionsToShow(optionsTemp));
    };
    setOptionsToShow();
  }, [optionstoShow]);

  const returnMenus = () => {
    return Object.keys(menusToShow).map((type, i) => {
      return (
        <ComponentOption
          key={i}
          type={type}
          show={menusToShow[type]}
          changeStatus={() =>
            dispatch(changeStatusMenu(type, !menusToShow[type]))
          }
        />
      );
    });
  };
  return (
    <div
      style={{ backgroundColor: "gray" }}
      onClick={() => dispatch(hideAllTheOptions())}
    >
      <div
        style={{ backgroundColor: "orange", width: "200px" }}
        onClick={e => e.stopPropagation()}
      >
        {returnMenus()}
      </div>
    </div>
  );
};

export default Header;
