import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar ,theme } from 'antd';
import Nav from './components/Nav';
import MainContent from './components/Content';

const {  Sider } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <div className="logo" />
      <Avatar size={100} icon={<UserOutlined />} alt="avatar"/>
      <Nav></Nav>
      </Sider>
      <Layout className="site-layout">
        <MainContent></MainContent>
      </Layout>
    </Layout>
  );
};

export default App;