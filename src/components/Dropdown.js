import React,{useState} from "react";
import "./dropdown.css";
import { Menu, Dropdown, Button } from "antd";
import { DownArrowIcon } from "./svgs";

export default function CustomDropdown() {
  const [lang, setLang] = useState("English");

  const handleClick =(e)=>{
    setLang(e.domEvent.target.innerText);
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={handleClick} >English</Menu.Item>
      <Menu.Item onClick={handleClick}>Yoruba</Menu.Item>
      <Menu.Item onClick={handleClick}>Hausa</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomCenter" arrow>
      <Button className="drpdwnButton">
        Language:
        <span className="drpdownLang">{lang}</span>
        <DownArrowIcon className="downArrow" />
      </Button>
    </Dropdown>
  );
}


