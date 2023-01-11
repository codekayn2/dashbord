import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import "./sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Codekayn</span>
        </Link>
      </div>
      <hr />
      <div className="bottom">
        <ul>
          <p className="title">ГОЛОВНА</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Панель приладів</span>
          </li>

          <p className="title">СПИСКИ</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person3OutlinedIcon className="icon" />
              <span>Користувачі</span>
            </li>
          </Link>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LocalGroceryStoreOutlinedIcon className="icon" />
              <span>Продукти</span>
            </li>
          </Link>

          <li>
            <CreditCardOutlinedIcon className="icon" />
            <span>Замовлення</span>
          </li>

          <p className="title">ДІАГРАМИ</p>
          <li>
            <InsertChartOutlinedSharpIcon className="icon" />
            <span>Статистика</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />
            <span>Сповіщення</span>
          </li>

          <p className="title">СЕРВІС</p>
          <li>
            <DnsOutlinedIcon className="icon" />
            <span>Здоров'я системи</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Налаштування</span>
          </li>

          <p className="title">ІНТЕРФЕЙС КОРИСТУВАЧА</p>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Профіль</span>
          </li>
          <li>
            <CalendarMonthOutlinedIcon className="icon" />
            <span>Календар</span>
          </li>
          <li>
            <DiamondOutlinedIcon className="icon" />
            <span>Помічник</span>
          </li>

          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Вийти</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
