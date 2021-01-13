import React, { useState } from "react";
import Logo from "../../assets/Logo/logo.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { withRouter } from "react-router-dom";
import { styled, useMediaQuery, MenuItem, IconButton } from "@material-ui/core";
import { BreakPoints } from "../../Constants/BreakPoints/BreakPoints";
import MenuButton from "../MenuButton/MenuButton";
import AccountInformation from "../Account/AccountInformation";
import LanguageList from "../Account/LanguageList";
import PeopleIcon from "@material-ui/icons/People";
import DescriptionIcon from "@material-ui/icons/Description";
import CategoryIcon from "@material-ui/icons/Category";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import SettingsIcon from "@material-ui/icons/Settings";
import AssessmentIcon from "@material-ui/icons/Assessment";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
const NavigationHeader = (props) => {
  const [showMenuList, setShowMenuList] = useState(false);
  const [arabicLanguage, setArabicLanguage] = useState(false);
  const tabletOrientation = useMediaQuery(`(max-width:${BreakPoints.MD})`);
  const LogOutIcon = styled(ExitToAppIcon)({});
  const history = useHistory();
  const toggleMenuListHandler = () => {
    setShowMenuList((show) => !show);
  };
  const switchToArabic = () => {
    props.changeDirection("rtl");
    setArabicLanguage(true);
  };
  const switchToEnglish = () => {
    props.changeDirection("ltr");
    setArabicLanguage(false);
  };
  const changeLanguageListHandler = (option: string) => {
    if (option === "العربية") {
      switchToArabic();
    } else if (option === "English") {
      switchToEnglish();
    }
  };
  const MenuButtonWrapper = styled("div")({
    position: "absolute",
    right: "5%",
  });
  const LogoImage = styled("img")({
    maxHeight: "50px",
    maxWidth: "50px",
    marginLeft: "5%",
  });

  const Navigation = styled("nav")({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: "1em",
    boxShadow: " 0 8px 6px -6px #ccc",
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    flexWrap: "wrap",
  });
  const Account = tabletOrientation
    ? styled("div")({
        display: "none",
      })
    : styled("div")({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
        width: "12em",
      });

  const List = tabletOrientation
    ? styled("ul")({
        position: "absolute",
        top: "52px",
        height: "15em",
        backgroundColor: "#f8f8f8",
        zIndex: 100,
        overflowY: "auto",
        display: showMenuList ? "inline" : "none",
        width: "100%",
        padding: 0,
        margin: "1.2em 0 0 0",
      })
    : styled("ul")({
        display: "flex",
        listStyle: "none",
      });
  const ListItem = tabletOrientation
    ? styled(MenuItem)({
        display: "flex",
        alignContent: "center",
        borderBottom: "1px solid #eee",
        width: "100%",
        color: "#777",
      })
    : styled(MenuItem)({
        display: "flex",
        alignContent: "center",
        color: "#777",
        "&:hover": {
          color: "black",
        },
      });
  const StyledNavLink = styled(NavLink)({
    textDecoration: "none",
    color: "#777",
    "&:hover": {
      color: "black",
    },
    fontSize: "12px",
  });
  const handleLogOut = () => {
    localStorage.removeItem("pos-auth");
    history.push("/login");
  };
  const navigateToPage = (pageName: string) => {
    history.push(`/main/${pageName}`);
  };
  return (
    <Navigation>
      <LogoImage src={Logo} />
      <List>
        <ListItem onClick={() => navigateToPage("pos")}>
          <CategoryIcon fontSize="small" />
          <StyledNavLink to="/main/pos">POS</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("product")}>
          <DescriptionIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/product">Product</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("people")}>
          <PeopleIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/people">People</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("sales")}>
          <LocalMallIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/sales">Sales</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("expense")}>
          <AttachMoneyIcon fontSize="small" htmlColor="999" />

          <StyledNavLink to="/main/expense">Expense</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("categories")}>
          <BookmarkIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/categories">Categories</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("setting")}>
          <SettingsIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/setting">Setting</StyledNavLink>
        </ListItem>
        <ListItem onClick={() => navigateToPage("reports")}>
          <AssessmentIcon fontSize="small" htmlColor="999" />
          <StyledNavLink to="/main/reports">Reports</StyledNavLink>
        </ListItem>
      </List>
      <Account>
        <IconButton onClick={handleLogOut}>
          <LogOutIcon fontSize="small" htmlColor="999" />
        </IconButton>
      </Account>
      {tabletOrientation ? (
        <MenuButtonWrapper>
          <MenuButton toggleMenuList={toggleMenuListHandler} />
        </MenuButtonWrapper>
      ) : null}
    </Navigation>
  );
};
export default withRouter(NavigationHeader);