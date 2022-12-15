import React  from 'react';
import { Layout, theme } from 'antd';


const {  Content } = Layout;

const MainContent: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (

        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: '100vh',
            background: colorBgContainer,
          }}
        >
        </Content>
  );
};

export default MainContent;