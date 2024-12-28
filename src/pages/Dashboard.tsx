import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, ShoppingCartOutlined, FileOutlined } from '@ant-design/icons';

const Dashboard = () => {
    return (
        <div>
            <h2>仪表盘</h2>
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="用户总数"
                            value={1128}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="订单总数"
                            value={93}
                            prefix={<ShoppingCartOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="文章总数"
                            value={56}
                            prefix={<FileOutlined />}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard; 