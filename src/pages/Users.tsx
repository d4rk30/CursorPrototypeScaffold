import { Table } from 'antd';

const Users = () => {
    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
    ];

    const data = [
        {
            key: '1',
            username: 'admin',
            email: 'admin@example.com',
            role: '管理员',
        },
        // 更多数据...
    ];

    return (
        <div>
            <h2>用户管理</h2>
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

export default Users; 