import "antd/dist/antd.min.css";
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import Columns from "./Columns";

let dataSource: DataType[] = [];

function App() {
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (res) {
                return res.json();
            })
            .then(function (json) {
                setData(json.t);
                dataSource = json.t.issueList.map((item, i) => {
                    i = i + 1;
                    return {
                        key: i,
                        no: i++,
                        turnNum: item.turnNum,
                        openNum: item.openNum,
                        openTime: new Date(item.openTime),
                        detail: `${item.openTime}|${item.turnNum}|${item.detail}`,
                    };
                });
            });
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="App">
            <h1>{data.name} | Lịch sử</h1>
            <Table
                dataSource={dataSource}
                columns={Columns}
                pagination={{ defaultPageSize: 10 }}
            />
        </div>
    );
}

export default App;
