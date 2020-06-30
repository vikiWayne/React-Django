import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';





const IconText = ({ icon, text }) => (
    <Space>
        { React.createElement(icon) }
        { text }
    </Space>
);

const Article = (props) => {
    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={ {
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            } }
            // main content

            dataSource={ props.data }

            //end  main content

            footer={
                <div>
                    <b>ant design</b> footer part
      </div>
            }
            renderItem={ item => (
                <List.Item
                    key={ item.title }
                    actions={ [
                        <IconText icon={ StarOutlined } text="156" key="list-vertical-star-o" />,
                        <IconText icon={ LikeOutlined } text="156" key="list-vertical-like-o" />,
                        <IconText icon={ MessageOutlined } text="2" key="list-vertical-message" />,
                    ] }
                    extra={
                        <img
                            width={ 272 }
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={ <Avatar src={ item.avatar } /> }
                        // must be  serialize by 'id' in serializers.py in api folder...
                        title={ <a href={ `/${item.id}` }>{ item.title }</a> }
                        content={ item.content } />{ item.content }




                </List.Item>
            ) }
        />
    );
}
export default Article;
