import React, {Component} from 'react';
import "../../css/msg.css"
import {Table, Space, Button} from 'antd';
import moment from 'moment';
import ajax from "../../../../api/ajax";
const dateFormat = 'HH:mm DD-MM-YYYY';
const GET = 'GET'
const POST = 'POST'
const UPDATE = 'PUT'
const DELETE = 'POST'

export default class MsgOperaScheduled extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="msg-opera msg-opera-sch">
                <div className="opera-btn">
                    <Button type="primary" danger>Cancel</Button>
                </div>
            </div>
        )
    }
}















