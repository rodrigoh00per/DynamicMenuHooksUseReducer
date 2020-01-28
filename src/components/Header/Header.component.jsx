import React, { useReducer } from "react";

import ComponentOption from "../Options/Options.component";

export const HEADER_TYPES = {
  SHOW_HIDE_MENU: "SHOW_HIDE_MENU",
  HIDE_MENUS: "HIDE_MENUS"
};

const INITIAL_STATE = {
  menusToShow: {
    price: false,
    salary: false,
    size: false
  }
};

const reducer = (state, action) => {
  switch (action.type) {
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

const changeStatusMenu = (nameMenu, status) => ({
  type: HEADER_TYPES.SHOW_HIDE_MENU,
  payload: { nameMenu, status }
});

const hideAllTheOptions = () => ({
  type: HEADER_TYPES.HIDE_MENUS
});

const Header = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { menusToShow } = state;

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
