import React, { useState } from "react";
import styles2 from "../styles/Home.module.css";
import "../node_modules/antd/dist/antd.css";

import { Form, Input, Button, Select, DatePicker, Row, Col, Table } from "antd";

export default function Home() {

  var playList = [];
  const columns = [
    { id: 1, title: "Title" },
    { id: 2, title: "Author" },
    { id: 3, title: "Type" },
    { id: 4, title: "Release Date" },
  ];
  var id = 0;

  const registerUser = object => {

    if (!object.release) {
      alert("Date not provided");
      return;
    }

    playList.push({
      id: id++,
      title: object.title,
      author: object.author,
      type: object.type,
      date: object.release.toDate()
    });
    console.log(playList);

    var table = "";
    playList.forEach(element => {
      table += "<tr>";
      table += "<td>" + element.title + "</td>";
      table += "<td>" + element.author + "</td>";
      table += "<td>" + element.type + "</td>";
      table += "<td>" + element.date + "</td>";
      table += "</tr>";

      document.getElementsByClassName("table")[0].innerHTML = table;
    })
  }
  return (
    <>
      <p className={`${styles2.title}`}>Add Music in Playlist</p>
      <Row >
        <Col span={12} offset={6}>
          <Form
            onFinish={registerUser}
          >
            <Form.Item label="Title" className={`${styles2.textColor}`} name="title">
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
      <table className={styles2.tableDesign}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.id}>{col.title}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table">
        </tbody>
      </table>
    </>
  );
}

      // <Row>
      //   <Col span={12} offset={6}>
      //     <Table columns={columns}
      //       dataSource={playList}>
      //     </Table>
      //   </Col>
      // </Row>