import React, { useState } from "react";
import styles2 from "../styles/Home.module.css";
import "../node_modules/antd/dist/antd.css";

import { Form, Input, Button, Select, DatePicker } from "antd";

export default function Home() {
  const componentSize = useState("default");
  const playList = [];

  const registerUser = object => {
    playList.push({
      title: object.title,
      author: object.author,
      type: object.type,
      date: object.release.toDate()
    });

    var table = "";
    playList.forEach(element => {
      table += "<tr>";
      table += "<td>" + element.title + "</td>";
      table += "<td>" + element.author + "</td>";
      table += "<td>" + element.type + "</td>";
      table += "<td>" + element.date + "</td>";
      table += "</tr>";
    });

    document.getElementsByClassName("table")[0].innerHTML = table;

    console.log(document.getElementsByClassName("tr"));
  }

  const columns = [
    { id: 1, title: "Title" },
    { id: 2, title: "Author" },
    { id: 3, title: "Type" },
    { id: 4, title: "Release Date" },
  ];


  return (
    <>
      <div className={`${styles2.imageBackground}`}>
        <p className={`${styles2.title}`}>Add Music in Playlist</p>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          initialValues={{
            size: componentSize,
          }}
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

          <div className={`${styles2.fullWidth}`}>
            <Form.Item>
              <Button type="primary" className={`${styles2.customButton}`} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>

        </Form>
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

      </div>
    </>
  );

}
