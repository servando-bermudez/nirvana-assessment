import { HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Typography, theme } from 'antd';
import React from 'react';

import { Link, Outlet, useRevalidator } from 'react-router-dom';
import VideoForm from '../components/VideoForm/VideoForm';
import { createVideo } from '../requests/video.requests';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const Main = () => {
  const { token: { colorBgContainer } } = theme.useToken();

  const [isFormModalOpen, setIsFormModalOpen] = React.useState(false);

  const revalidator = useRevalidator();

  const onVideoCreate = async (values: {name: string; url: string}) => {
    setIsFormModalOpen(false);

    try {
      await createVideo(values);
      revalidator.revalidate();
    } catch (error) {
      console.error(error);
    }
  };

  const items = [
    { icon: <Link to='/'><HomeOutlined /></Link>, label: 'Home' },
    {
      icon: <Button
        style={{ padding: 0 }}
        type='text'
        onClick={() => setIsFormModalOpen(true)}
      >
        <PlusCircleOutlined/>Add new Video
      </Button>,
      label: ''
    }
  ];

  return (
    <Layout style={{ height: '100svh' }}>
      <Layout>
        <Sider
          width='15%'
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['4']}
            items={items.map(
              (item, index) => ({
                ...item,
                key: String(index + 1),
              }),
            )}
          />
        </Sider>
        <Layout>
          <Header style={{
            height: '10svh',
            padding: 0,
            background: colorBgContainer,
            borderBottom: '1px solid white',
            }}
          >
            <Title level={1} style={{ marginLeft: '5px'}}>Recently Added</Title>
          </Header>
          <Content style={{ overflow: 'initial' }}>
            <div style={{ height: '73svh' }}>
              <Outlet />
            </div>
            <VideoForm 
              visible={isFormModalOpen}
              setVisibility={setIsFormModalOpen}
              onCreate={onVideoCreate}
            />,
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Main;