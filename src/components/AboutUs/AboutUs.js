import React from "react";
import {Divider} from 'antd';
import { Typography } from 'antd';
import {Col, Row, Card} from 'antd';
import { FundTwoTone, SettingTwoTone, SmileTwoTone } from '@ant-design/icons';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const { Title } = Typography;

//create about us page
function AboutUs() {
    return (
        <Row>
        <Divider>
            <Title level={3}>About Us</Title>
        </Divider>
        <Col span={12}>
            <p style={{marginLeft:'40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                aliquam mauris, eget aliquet nunc nisl eget nunc. Sed
                euismod, nisl eget ultricies tincidunt, nunc nisl aliquam
            </p>
        </Col>
        <Col span={12}>
            <p style={{marginRight:'30px', marginBottom:'40px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam auctor, nisl eget ultricies tincidunt, nunc nisl
                aliquam mauris, eget aliquet nunc nisl eget nunc. Sed
                euismod, nisl eget ultricies tincidunt, nunc nisl aliquam
            </p>
        </Col>

        <Col span={8}>
            <Card title="Growth" style={{marginLeft:'30px', marginBottom:'30px', textAlign:'center'}}>
            <FundTwoTone twoToneColor={'#282F8C'} style={{fontSize:'40px'}}/>
                <p>
                    Our company is commited to growth and development of your business.
                </p>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Services" style={{marginLeft:'30px', textAlign:'center'}}>
            <SettingTwoTone twoToneColor={'#282F8C'} style={{fontSize:'40px'}}/>
                <p>
                    We bring you the best services that your car can have with the best prices on the market.
                </p>
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Team" style={{marginLeft:'30px', marginRight:'30px', textAlign:'center'}}>
            <SmileTwoTone twoToneColor={'#282F8C'} style={{fontSize:'40px'}}/>
                <p>
                    Our team is commited to make your experience with us as pleasant as possible.
                </p>
            </Card>
        </Col>
        <Col span={24}>
            <Card title="Social Media" style={{marginLeft:'140px', marginRight:'140px', textAlign:'center'}}>
            <FacebookOutlined  style={{fontSize:'40px', marginRight:'30px'}}/>
            <InstagramOutlined style={{fontSize:'40px', marginRight:'30px'}}/>
            <TwitterOutlined style={{fontSize:'40px'}}/>
                <p>
                    Contact us!
                </p>
            </Card>
        </Col>
</Row>
      
    );
    }

export default AboutUs;