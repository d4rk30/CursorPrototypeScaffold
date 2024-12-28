import { Card } from 'antd';

interface PageTemplateProps {
    title: string;
}

const PageTemplate = ({ title }: PageTemplateProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <Card>
                {/* 页面内容 */}
                <p>该功能正在开发中...</p>
            </Card>
        </div>
    );
};

export default PageTemplate; 