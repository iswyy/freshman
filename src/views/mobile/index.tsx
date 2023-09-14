import React, { useEffect } from "react";
import { Button, Input, Modal, Select, Upload, Image, Popconfirm } from "antd";
import "./index.scss";
import { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import TextArea from "antd/es/input/TextArea";
import { getMottoList, getUserInfo, postUserInfo1, postUserInfo2, uploadImage } from "@/api/mobile_admin";
const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 20;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

// 姓名下拉单过滤
const filterOption = (input: string, option: { label: string; value: string }) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const userInfoForm: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: "",
    gender: "",
    studentId: "",
    avatar: "",
    motto: "",
    major: "",
    class: "",
    role: "",
  });
  const [userNameSearchLists, setUserNameSearchLists] = useState<Array<{ label: string; value: string }>>([]);
  const [mottoList, setMottoList] = useState<Array<string>>([]);
  const [userList, setUserList] = useState<
    Array<{
      name: string;
      gender: string;
      studentId: string;
      class: string;
      avatar?: string;
      motto?: string;
      role?: string;
    }>
  >([]);
  // 请求motto和新生信息
  useEffect(() => {
    getUserList();
    getMottos();
  }, []);
  // 根据选中的新生匹配相应的信息
  useEffect(() => {
    let userInfoObj = userList.find((item) => {
      return item.name === userInfo.name;
    });
    userInfoObj && setUserInfo({ ...userInfo, ...userInfoObj });
  }, [userInfo.name]);

  // 切换模式用户信息清空
  useEffect(() => {
    setUserInfo({
      name: "",
      gender: "",
      studentId: "",
      avatar: "",
      motto: "",
      major: "",
      class: "",
      role: "",
    });
  }, [isActive]);

  // 提交信息
  const handleOk = async () => {
    setConfirmLoading(true);
    let code = 0;
    const postUserInfo: {
      name: string;
      image: string;
      studentId: string;
      identify: number | string;
      courWord: string;
    } = {
      name: "",
      image: "",
      studentId: "",
      identify: "",
      courWord: "",
    };
    postUserInfo.name = userInfo.name;
    postUserInfo.image = userInfo.avatar;
    postUserInfo.studentId = userInfo.studentId;
    postUserInfo.identify = userInfo.role;
    postUserInfo.courWord = userInfo.motto;
    if (postUserInfo.identify == "0") {
      let data = await postUserInfo1(postUserInfo);
      code = data.code;
    } else {
      let data = await postUserInfo2(postUserInfo);
      code = data.code;
    }
    if (code == 200) {
      setOpen(false);
      setConfirmLoading(false);
      message.success("提交成功");
      getUserList()
      setUserInfo({
        name: "",
        studentId: "",
        avatar: "",
        motto: "",
        major: "",
        class: "",
        role: "",
        gender: "",
      });
      setImageUrl("");
    }
  };
  // 获取所有赠言
  const getMottos = async () => {
    const { data, code } = await getMottoList();
    if (code === 200) {
      const mottoListRes: Array<string> = [];
      data.forEach((item) => {
        mottoListRes.push(item.courWord);
      });
      setMottoList(mottoListRes);
    }
  };
  // 自定义上传图片
  const handleUpload = async (option: any) => {
    let formData = new FormData();
    formData.append("image", option.file);
    try {
      const { data } = await uploadImage(formData);
      option.onSuccess(data.image_url);
      setUserInfo({
        ...userInfo,
        avatar: data.image_url,
      });
      formData = null
    } catch (error) {
      option.onError(error);
    }
  };
  // 获取设置随机赠言
  const handleRandomMotto = async () => {
    let random = Math.floor(Math.random() * mottoList.length);
    setUserInfo({
      ...userInfo,
      motto: mottoList[random],
    });
  };
  // 获取所有新生信息
  const getUserList = async () => {
    const { code, data } = await getUserInfo();
    if (code != 200) {
      message.error("获取用户信息失败！");
    }
    const userNameList: Array<{ label: string; value: string }> = [];
    data.forEach((item: any) => {
      let label = item.name + (item.state?'（已报到）':"（未报到）");
      let value = item.name;
      let obj = {
        label,
        value,
      };
      userNameList.push(obj);
    });
    setUserList(data);
    setUserNameSearchLists(userNameList);
  };

  // 上传图片回显
  const handleChange: UploadProps["onChange"] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  // 展示确认框
  const showModal = () => {
    if (isActive) {
      setUserInfo({
        ...userInfo,
        role: "0",
      });
      if (!userInfo.name) {
        message.error("请填写您的姓名！");
        return;
      } else if (!userInfo.avatar) {
        message.error("请上传您的照片！");
        return;
      } else if (!userInfo.motto) {
        message.error("请填写您的赠言！");
        return;
      }
    } else {
      if (!userInfo.name) {
        message.error("请填写您的姓名！");
        return;
      } else if (!userInfo.avatar) {
        message.error("请上传您的照片！");
        return;
      } else if (!userInfo.motto) {
        message.error("请填写您的赠言！");
        return;
      }
      if (!userInfo.role) {
        message.error("请选择您的角色");
        return;
      }
    }
    setOpen(true);
  };
  // 姓名输入改变
  const onChange = (value: string, type: string) => {
    setUserInfo({
      ...userInfo,
      [type]: value,
    });
  };
  // 模式切换
  const handleModalClick = (value: boolean) => {
    if (isActive === value) return;
    setIsActive(!isActive);
  };
  // 重置按钮确认
  const confirm = (e: React.MouseEvent<HTMLElement>) => {
    setUserInfo({
      name: "",
      studentId: "",
      avatar: "",
      motto: "",
      major: "",
      class: "",
      role: "",
      gender: "",
    });
    message.success("重置成功");
  };
  // 取消提交
  const handleCancel = () => {
    setOpen(false);
  };
  // 上传按钮
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  return (
    <div className="form">
      <div className="title">
        <span className={isActive ? "active" : ""} onClick={() => handleModalClick(true)}>
          新生报到
        </span>
        <span className={isActive ? "" : "active"} onClick={() => handleModalClick(false)}>
          学长赠言
        </span>
      </div>
      {isActive ? (
        <div className="userName item">
          <label className="itemTitle">姓名</label>
          <div className="input">
            <Select
              showSearch
              placeholder="请输入您的姓名"
              optionFilterProp="children"
              onChange={(value) => {
                onChange(value, "name");
              }}
              value={userInfo.name}
              filterOption={filterOption}
              options={userNameSearchLists}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="userName item">
            <label className="itemTitle">姓名</label>
            <div className="input">
              <Input
                onChange={(e) => {
                  onChange(e.target.value, "name");
                }}
                value={userInfo.name}
                placeholder="请输入您的姓名"
              />
            </div>
          </div>
          <div className="role item">
            <label className="itemTitle">角色</label>
            <div className="input">
              <Select
                defaultValue="学生"
                style={{ width: 120 }}
                value={userInfo.role}
                onChange={(value) => {
                  onChange(value, "role");
                }}
                options={[
                  { value: 1, label: "老师" },
                  { value: 2, label: "学长" },
                  { value: 3, label: "领导" },
                ]}
              />
            </div>
          </div>
        </>
      )}
      {isActive ? (
        <div className="baseInfo item">
          <label className="itemTitle">信息</label>
          <ul>
            <li>
              <span>{userInfo.class ? userInfo.class : "******"}</span>{" "}
              <span>{userInfo.gender ? userInfo.gender : "*"}</span>
            </li>
            <li>
              <span>{userInfo.studentId ? userInfo.studentId : "***********"}</span>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
      <div className="avatar item">
        <label className="itemTitle">上传</label>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={handleUpload}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: "100%" }} /> : uploadButton}
        </Upload>
      </div>
      <div className="motto item">
        <label className="itemTitle">
          赠言<br></br>
          <a onClick={handleRandomMotto}>随机</a>
        </label>
        <TextArea
          rows={4}
          value={userInfo.motto}
          onChange={(e) => {
            onChange(e.target.value, "motto");
          }}
          maxLength={27}
          placeholder="请输入您的赠言"
        />
      </div>
      <div className="submit item">
        <Popconfirm description="确认重置？" onConfirm={confirm}>
          <Button>重置</Button>
        </Popconfirm>
        <Button type="primary" onClick={showModal}>
          提交
        </Button>
      </div>
      <Modal title="新生信息" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
        {/* <p>{modalText}</p> */}
        <ul className="modalUserInfo">
          <li>
            <label htmlFor="">姓名：</label>
            <span>{userInfo.name}</span>
          </li>

          {isActive ? (
            <>
              <li>
                <label htmlFor="">性别：</label>
                <span>{userInfo.gender}</span>
              </li>
              <li>
                <label htmlFor="">学号：</label>
                <span>{userInfo.studentId}</span>
              </li>
              <li>
                <label htmlFor="">班级：</label>
                <span>{userInfo.class}</span>
              </li>
            </>
          ) : (
            <li>
              <label htmlFor="">角色：</label>
              <span>{userInfo.role == "1" ? "老师" : userInfo.role == "2" ? "学长" : "领导"}</span>
            </li>
          )}
          <li>
            <label htmlFor="">照片：</label>
            <Image width={100} src={imageUrl} />
          </li>
        </ul>
      </Modal>
    </div>
  );
};
export default userInfoForm;
