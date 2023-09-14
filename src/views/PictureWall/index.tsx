import Barrage from "@/components/pictureWall/Barrage"
import Message from "@/components/pictureWall/message/Message";
import Photo from "@/components/pictureWall/photo/Photo";
import WaterfallFlow from "@/components/pictureWall/WaterfallFlow";
import SimpleSlider from "@/components/pictureWall/carsul";
import SmallPhoto from '@/components/pictureWall/smallPhoto/smallPhoto'
import { getAllRegisteredFreshmen, getAllTeacherMsg, getNextRegisteredFreshmen, getNextTeacherMsg } from '../../api/pictureWall'
import './index.css'
import { useState, useEffect, useRef } from "react";
import { number } from "echarts";
const PictureWall = () => {
  interface Student {
    age: number,
    createdAt: String,
    gender: String,
    updatedAt: String,
    id: number,//id
    place: number,//位次
    studentId: number,//学号
    name: String,//姓名
    class: String,//班级
    image: String,//图片
    courWord: String//赠言
  }989877
  interface Teacher {
    id: number,//id
    identify: String,//身份
    image: String,//图片
    courWord: String//寄语
  }
  let allStudent: Student[] = [];
  let allTeacher: Teacher[] = [];
  const [allStudentData, setAllStudentData] = useState(allStudent);
  const [allTeacherData, setAllTeacherData] = useState(allTeacher);
  const [downStudentData, setDownStudentData] = useState<any>();
  const [downTeacherData, setDownTeacherData] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      // 在这里进行异步操作，例如调用 getAllRegisteredFreshmen
      const studentData = await getAllRegisteredFreshmen();
      allStudent = studentData.data
      setAllStudentData(allStudent)
      const { data } = await getAllTeacherMsg();
      allTeacher = data
      setAllTeacherData(allTeacher)
      // 处理获取的数据
    };
    // 调用异步函数
    fetchData();
    // 在组件挂载后立即调用函数
    getAllRegisteredFreshmen();
  }, []); // 空数组表示只在组件挂载时调用一次
  // 定时器
   useInterval(async () => {
    const newStudent = await getNextRegisteredFreshmen((allStudentData&&allStudentData.length) ? allStudentData[allStudentData.length - 1].id : 0)
    console.log("-----newStudent---------", newStudent);
    if (newStudent&&newStudent.data.age) {
      let data  = [...allStudentData,newStudent.data]
      setAllStudentData(data)
    }
    const newTeacher = await getNextTeacherMsg((allTeacherData&&allTeacherData.length) ? allTeacherData[allTeacherData.length - 1].id : 0)
    console.log("-----newTeacher---------", newTeacher);
    if (newTeacher&&newTeacher.data.identify&&newTeacher.data.identify!==4) {
      let data  = [...allTeacherData,newTeacher.data]
      setAllTeacherData(data)
    }
  }, 10000);


  return <div className='outSide'>
    <div className="outSideUp">
      <div style={{ fontSize: 40, color: '#fff' }}>计算机科学与技术学院</div>
      <div>欢迎2023级新同学</div>
      <div style={{ fontSize: 40, color: '#fff' }}>技术支持 @三月软件</div>
    </div>
    <div className="outSideDown">
      <div className="photoLeftBox big">
        <div className="photoLeftBox">
          <div className="photoBox"><Photo students={allStudentData} downStudentDataToWater={downStudentData} downTeacherDataToWater={allTeacherData}/></div>
          <div className="megBig">
            <div className="messageBox"><Message allTeacherDataFromParent={allTeacherData} downTeacherDataToWater={downTeacherData} /></div>
          </div>
        </div>
        <div className="smallphoto" style={{ width: '35%' }}><SmallPhoto allStudentDataToWater={allStudentData}  /></div>
      </div>
      <WaterfallFlow allStudentDataToWater={allStudentData} downStudentDataToWater={downStudentData} />
      {/* <div className="barrageBox"><Barrage /></div> */}
    </div>
  </div>;
};
function useInterval(callback: any, timeout = 1000) {
  const latestCallback = useRef(() => {
  });

  useEffect(() => {
    latestCallback.current = callback;
  });

  useEffect(() => {
    const timer = setInterval(() => latestCallback.current(), timeout);
    return () => clearInterval(timer);
  }, []);
}
export default PictureWall;