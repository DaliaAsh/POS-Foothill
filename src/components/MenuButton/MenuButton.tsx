import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
interface MenuButtonProps {
  toggleMenuList: () => void;
}
const MenuButton = (props:MenuButtonProps) => (
  <IconButton onClick={props.toggleMenuList}>
    <MenuIcon />
  </IconButton>
);
export default MenuButton;
