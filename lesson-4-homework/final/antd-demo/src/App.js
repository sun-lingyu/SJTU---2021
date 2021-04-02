import React, { Component } from 'react';
import { Carousel } from 'antd';
import './App.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        //react定义数据
        this.state = {
        }
    }
    render() {
        return (
            <Carousel autoplay>
                <div>
                    <h3><img src={require('./data/1.jpeg')}  alt="1" /></h3>
                </div>
                <div>
                    <h3><img src={require('./data/2.jpeg')}  alt="2" /></h3>
                </div>
                <div>
                    <h3><img src={require('./data/3.jpeg')}  alt="3" /></h3>
                </div>
            </Carousel>
        )
    }
}
export default Banner;
