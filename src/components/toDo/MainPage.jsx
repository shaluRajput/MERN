
import '../../App.css';
// import logo from ".././logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SwitchRoutes from "../SwitchRoutes"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, MenuOutlined } from '@ant-design/icons';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a href="https://codingthesmartway.com" target="_blank">
                            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
                        </a>
                        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
                        <div className="collpase navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/" className="nav-link">Todos</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/create" className="nav-link">Create Todo</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    </div> */}
                <Menu mode="horizontal" defaultSelectedKeys={['todos']}>
                    <Menu.Item key="heading" icon={<MenuOutlined />}>
                        <Link to="/todo" className="navbar-brand">MERN-Stack Todo App</Link>
                    </Menu.Item>
                    {/* <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" icon={<SettingOutlined />}> */}
                    <Menu.Item key="todos">
                        <Link to="/todo" className="nav-link">Todos</Link>
                    </Menu.Item>
                    <Menu.Item key="create">
                        <Link to="/create" className="nav-link">Create Todo</Link>
                    </Menu.Item>
                    {/* </Menu.SubMenu> */}
                </Menu>

                <br />
                <SwitchRoutes />
            </div>
        </BrowserRouter>

    );
}

export default App;
