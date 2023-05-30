import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default (props) => {
    const navigate = useNavigate();

    const items = [{
        label: 'Index',
        key: '/',
        icon: <AppstoreOutlined />
    }, {
        label: 'List',
        key: '/list',
        icon: <AppstoreOutlined />,
    }, {
        label: 'Detail',
        key: '/detail',
        icon: <SettingOutlined />
    },
    ]
    const onClick = (item) => {
        navigate(item.key);

    }
    return <Menu onClick={onClick} defaultSelectedKeys={['./']} mode="horizontal" items={items} />;
}