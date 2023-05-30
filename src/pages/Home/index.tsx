import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Left from '../../components/Left';
import Head from '../../components/Head';
import { Layout } from "antd";
import "./index.scss";

const { Header, Sider, Content, Footer } = Layout;

export default () => {

    return (
        <Layout className="layout" >
            <Header className="header">
                <Head />
            </Header>
            <Layout>
                <Sider breakpoint="md" collapsible
                    className="sider"
                    collapsedWidth="0"
                >
                    <Left />
                </Sider>
                <Content className="content">
                    <Outlet />
                </Content>
            </Layout>
            <Footer className="footer">
                foot
            </Footer>
        </Layout>
    );
}
