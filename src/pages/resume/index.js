import React from "react";
import { connect } from "react-redux";
import { Button, Table, Switch } from "antd";
import { getResumeList, deleteResume, updateStatus } from "../../api/resume";

import "./index.less";

const COLUMNS = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
  },
  {
    title: "头像",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "用户名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "简历名称",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "简历是否公开",
    dataIndex: "status",
    key: "status",
    width: "6%",
  },
  {
    title: "手机号",
    dataIndex: "mobile",
    key: "mobile",
  },
  {
    title: "邮箱",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "创建时间",
    dataIndex: "create_time",
    key: "create_time",
  },
  {
    title: "操作",
    dataIndex: "actions",
    key: "actions",
  },
];

class ResumeIndex extends React.Component {
  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const { setList } = this.props;
    getResumeList().then((res) => {
      if (res.status === 200) {
        setList(res.data);
      }
    });
  };

  columns = (columns) => {
    return columns.map((item) => {
      item.align = "center";
      if (item.key == "index") {
        item.render = (row, data, index) => {
          return <p>{index + 1}</p>;
        };
      } else if (item.key == "status") {
        item.render = (row, data) => {
          return (
            <Switch checked={row} onChange={() => this.onSwitchChange(data)} />
          );
        };
      } else if (item.key == "avatar") {
        item.render = (row) => {
          return <img src={row} alt="" className="avatar" />;
        };
      } else if (item.key == "actions") {
        item.render = (row, data) => (
          <div>
            <Button type="danger" onClick={() => this.deleteResume(data)}>
              删除
            </Button>
          </div>
        );
      }
      return item;
    });
  };

  onSwitchChange = (item) => {
    updateStatus({ id: item.id, status: !item.status }).then((res) => {
      if (res.status === 200) {
        this.getList();
      }
    });
  };

  deleteResume = (item) => {
    deleteResume(item.id).then((res) => {
      if (res.status === 200) {
        this.getList();
      }
    });
  };

  render() {
    const { list } = this.props;
    return (
      <div className="ResumeIndex">
        <Table
          bordered
          columns={this.columns(COLUMNS)}
          dataSource={list}
          rowKey={(record) => record.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.resume.resumeList,
});
const mapActionToProps = (dispatch) => ({
  setList: (payload) => dispatch({ type: "SET_RESUME_LIST", payload }),
});

export default connect(mapStateToProps, mapActionToProps)(ResumeIndex);
