import './message.css'
import { Avatar, Card } from 'antd';
import React, { Component } from "react";
import { useEffect } from 'react';
const { Meta } = Card;
interface Teacher {
  id: number,//id
  identify: String,//身份
  image: String,//图片
  courWord: String//寄语
}
interface MessageProps {
  allTeacherDataFromParent: Teacher[]; // 将 YourDataType 替换为实际的数据类型
}
const imgerrorfun = (event: any) => {
  event.target.src = "src/assets/images/pivtureWall/012.jpg";
}
const Message: React.FC<any> = ({ allTeacherDataFromParent, downTeacherDataToWater }) => {
 const list1 = [{ name: '学长学姐老师', identify: 0, courWord: '欢迎2023级新生', image: '../../src/assets/images/pivtureWall/012.jpg' },
  { name: '学长学姐老师', identify: 0, courWord: '欢迎2023级新生', image: '../../src/assets/images/pivtureWall/012.jpg' },
  { name: '学长学姐老师', identify: 1, courWord: '欢迎2023级新生', image: '../../src/assets/images/pivtureWall/012.jpg' },
  { name: '学长学姐老师', identify: 1, courWord: '欢迎2023级新生', image: '../../src/assets/images/pivtureWall/012.jpg' },
  { name: '学长学姐老师', identify: 0, courWord: '欢迎2023级新生', image: '../../src/assets/images/pivtureWall/012.jpg' }]
  
  let list: any = allTeacherDataFromParent || []
  console.log('allTeacherDataFromParent',allTeacherDataFromParent);
  
  if(list.length){
    list=allTeacherDataFromParent
  }else{
    list=list1
  }
  let step=Math.floor(list.length/3)
  console.log('list',list);

 let times=list.length*4;
 if(list.length<4){
  times=0
 }
  let peopleList = list.map(item => (<div
    className='card'
    style={{ width: 178, backgroundColor: 'rgb(134,181,238)' }}
  >
    <img
      className='message-img'
      alt="example"
      src={item.image}
      onError={imgerrorfun}
    />
    <div className='text-bg'>
      <div className='text-bgB'>
        <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0, 43, 95,0.5)', padding: '10px' }}>
          <div style={{ fontSize: '1.5 rem', opacity: '1',fontWeight: 600,marginBottom: '6px' }}>{item.name + `${item.identify === 1 ? ' 老师' : ''}`}</div>
          <div style={{  whiteSpace: 'pre-wrap',fontSize: '14px',lineHeight: "16px" }}>{item.courWord
          }</div>
        </div>
      </div>
    </div>
    {/* <Meta
      title={item.name}
      description={item.word}
    /> */}
  </div>))
  return (
    <div className='messageContent'>
      <div className='messageMain'>
        <div style={{ fontSize: '2.1rem', fontFamily: "cursive", fontWeight: '600', color: '#fff', marginBottom: '6px' }}>开学寄语</div>
        <div className='messageMain-list' style={{animation: `roll ${times}s linear infinite`}}>
          {/* steps(${step}) */}
          {peopleList}
          {peopleList}
        </div>
      </div>

    </div>
  );
}
export default Message;