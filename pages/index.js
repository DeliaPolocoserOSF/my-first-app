import React, { useState } from "react";
import styles2 from "../styles/Home.module.css";
import "../node_modules/antd/dist/antd.css";

import { Form, Input, Button, Select, DatePicker, Row, Col, Menu } from "antd";

export default function Home() {

  var playList = [];
  var id = 0;

  const registerUser = object => {

    if (!object.release) {
      alert("Date not provided");
      return;
    }

    var nextID = id++;

    playList = [{
      key: nextID.toString(),
      song: object.song,
      author: object.author,
      type: object.type,
      date: object.release.toDate()
    }];

    var playlistDB = sessionStorage.getItem('playlist');

    if (playlistDB) {
      var x = JSON.parse(playlistDB);
      var y = [];
      for (let asd = 0; asd < x.length; asd++) {
        y.push(x[asd]);
      }
      y.push(playList[0]);
      sessionStorage.setItem('playlist', JSON.stringify(y));
    } else {
      sessionStorage.setItem('playlist', JSON.stringify(playList));
    }


  }
  return (
    <>
      <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']}>
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          if (key == 1) {
            return <Menu.Item key={key}><a href="../">{`Home`}</a></Menu.Item>;
          }
          else if (key == 2) {
            return <Menu.Item key={key}><a href="../playList">{`PlayList`}</a></Menu.Item>;
          }
          else {
            return <Menu.Item key={key}>{`Empty`}</Menu.Item>;
          }

        })}
      </Menu>
      <p className={`${styles2.title}`}>Add Music in Playlist</p>
      <Row >
        <Col span={12} offset={6}>
          <Form
            onFinish={registerUser}
          >
            <Form.Item label="Title" className={`${styles2.textColor}`} name="song">
              <Input />
            </Form.Item>
            <Form.Item label="Author" name="author">
              <Input />
            </Form.Item>
            <Form.Item label="Type" name="type">
              <Select >
                <Select.Option value="Country">Country</Select.Option>
                <Select.Option value="Jazz">Jazz</Select.Option>
                <Select.Option value="Electronic">Electronic</Select.Option>
                <Select.Option value="Pop">Pop</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Release Date" name="release">
              <DatePicker />
            </Form.Item>
            <Form.Item>
              <Button className={`${styles2.buttonCenter}`} htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={6}>
          <a href="https://www.youtube.com/" target="_blank" className={`${styles2.link}`}>Search on Youtube</a>
        </Col>
      </Row>
    </>
  );
}