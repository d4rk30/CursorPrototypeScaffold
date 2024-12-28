import { Form, Input, Button, Card } from 'antd';

const Settings = () => {
    return (
        <div>
            <h2>系统设置</h2>
            <Card>
                <Form layout="vertical">
                    <Form.Item label="系统名称" name="systemName">
                        <Input />
                    </Form.Item>
                    <Form.Item label="系统描述" name="description">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary">保存设置</Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Settings; 