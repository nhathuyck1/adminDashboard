import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Sider } = Layout;
const items1 = [
  {
    label: "Admin",
  },
];
const items2 = [
  {
    key: "sub1",
    icon: React.createElement(UserOutlined),
    label: "Management",
    children: [
      { key: "car", label: "Manage Car" },
      { key: "order", label: "Manage Order" },
      { key: "customer", label: "Manage Customer" },
    ],
  },
  {
    key: "sub2",
    icon: React.createElement(LaptopOutlined),
    label: "Statistics",
    children: [
      { key: "renting", label: "Renting" },
      { key: "opt4", label: "option4" },
    ],
  },
  {
    key: "sub3",
    icon: React.createElement(NotificationOutlined),
    label: "Notification",
    children: [
      { key: "opt5", label: "option5" },
      { key: "opt6", label: "option6" },
    ],
  },
];

const AD = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleMenuClick = (e) => {
    if (e.key === "car") {
      navigate("/car");
    }
    if (e.key === "order") {
      navigate("/order");
    }
    if (e.key === "customer") {
      navigate("/customer");
    }
    if (e.key === "renting") {
      navigate("/renting");
    }
  };
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderInlineEnd: 0 }}
            items={items2}
            onClick={handleMenuClick}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default AD;
