import React, { useState, useEffect } from "react";
import "../node_modules/antd/dist/antd.css";
import styles2 from "../styles/Home.module.css";

import { Row, Col, Table, Menu } from "antd";
export default function PlayList() {
    const columns = [
        { title: "Song", dataIndex: 'song', key: 'song' },
        { title: "Author", dataIndex: 'author', key: 'author' },
        { title: "Type", dataIndex: 'type', key: 'type' },
        { title: "Release Date", dataIndex: 'date', key: 'date' },
    ];

    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
        window.setTimeout(() => {
            setDataSource(getPlaylist());
        }, 100);
    }, []);

    function getPlaylist() {
        if (typeof window !== 'undefined') {
            return JSON.parse(sessionStorage.getItem('playlist'));
        }
    }
    return (
        <>
            <Menu theme="white" mode="horizontal" defaultSelectedKeys={['2']}>
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

            <p className={`${styles2.title}`}>Your Playlist</p>


            <Row className={`${styles2.tableDesign}`}>
                <Col span={12} offset={6}>
                    <Table columns={columns}
                        dataSource={dataSource}>
                    </Table>
                </Col>
            </Row>

        </>
    )
}