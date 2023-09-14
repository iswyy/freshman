import './index.css'
import { Card } from 'antd';
import styled, { keyframes } from 'styled-components';
import { useRef } from 'react';
import Photo from "@/components/pictureWall/photo/Photo";
import { useState, useEffect } from "react";

import { debug, log } from 'console';
const { Meta } = Card;
interface Person {
  name: string,
  text: string,
  photo: string
}
let arr: Person[] = [
  { name: '等你来', text: '开学真好!', photo: '../../../src/assets/images/pivtureWall/012.jpg' },
  { name: '等你来', text: '开学真好！！', photo: '../../../src/assets/images/pivtureWall/012.jpg' },
  { name: '等你来', text: '开学真好！！', photo: '../../../src/assets/images/pivtureWall/012.jpg' },
  { name: '等你来', text: '开学真好，(*^_^*)', photo: '../../../src/assets/images/pivtureWall/012.jpg' }
]
let newArr = arr.slice(0, 4)
arr = [...arr, ...newArr]
interface Student {
  id: number,//id
  place: number,//位次
  studentId: number,//学号
  name: String,//姓名
  class: String,//班级
  image: String,//图片
  courWord: String//赠言
}
interface MessageProps {
  allStudentDataToWater: Student[]; // 将 YourDataType 替换为实际的数据类型
}
const imgerrorfun = (event: any) => {
  event.target.src = "../../../assets/images/pivtureWall/012.jpg";
}
const WaterfallFlow: React.FC<any> = ({ allStudentDataToWater }) => {
  let allStudentData: any = allStudentDataToWater || []
  let leftStudentData:any=[]
  let rightStudentData:any=[]
  if(allStudentData.length===1){
    leftStudentData=allStudentData
  }else{
    let middle=Math.floor(allStudentData.length/2)
    leftStudentData=allStudentData.slice(0,middle)
    rightStudentData=allStudentData.slice(middle,allStudentData.length)
  }
  let time =0
  if(leftStudentData.length>3){
    time =leftStudentData.length*15
  }
  console.log('data',allStudentData);
  const peples = {
    name: "猫咪猫", age: '18', sex: "女", zy: "计算机科学与技术", className: "计科231", word: "更喜欢狗是吗,几乎是大家爱的司法局回家点击返回键的发挥好的杰夫哈迪就按时发货就黄金时代很费解啊十大画法几何就会觉得就幅度萨芬",
    img: "src/assets/images/pivtureWall/waterfallFlow/bosx.jpg"
  }
  return <div className='bigBox'>
    <div className='waterfallFlowBox'>
      <div className='animationBox' style={{animation: `scrollUp ${time}s linear infinite`}}>
        <div className='firstColumn'>
          {/* ${20 + Math.floor(Math.random() * 40)} */}
          {leftStudentData.length ? leftStudentData.map((item: any) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} className='ing' src={item.image} />}
            >
              <div className='waterfallWordBox'>
                <div className='studentPlaceBox'>No.{item.place}</div>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.class}</div>
              </div>
            </Card>
          )) : arr.map((item) => (
            //  + Math.floor(Math.random() * 40)}
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.photo} />}
            >
              <div className='waterfallWordBox'>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.text}</div>
              </div>
            </Card>
          ))}
          {leftStudentData.length ? leftStudentData.map((item: any) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} className='ing' src={item.image} />}
            >
              <div className='waterfallWordBox'>
              <div className='studentPlaceBox'>No.{item.place}</div>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.class}</div>
              </div>
            </Card>
          )) : arr.map((item) => (
            //  + Math.floor(Math.random() * 40)}
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.photo} />}
            >
              <div className='waterfallWordBox'>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.text}</div>
              </div>
            </Card>
          ))}
        </div>
        <div className='secondColumn'>
          {rightStudentData.length ? rightStudentData.map((item: any) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.image} />}
            >
              <div className='waterfallWordBox'>
              <div className='studentPlaceBox'>No.{item.place}</div>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.class}</div>
              </div>
            </Card>
          )) : arr.map((item) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.photo} />}
            >
              <div className='waterfallWordBox'>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.text}</div>
              </div>
            </Card>
          ))}
            {rightStudentData.length ? rightStudentData.map((item: any) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.image} />}
            >
              <div className='waterfallWordBox'>
              <div className='studentPlaceBox'>No.{item.place}</div>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.class}</div>
              </div>
            </Card>
          )) : arr.map((item) => (
            <Card
              hoverable
              style={{ width: '100%', marginBottom: 15, position: 'relative', paddingBottom: `${20 + Math.floor(Math.random() * 40)}` }}
              // 
              bodyStyle={{ padding: '0px' }}
              cover={<img alt="example" onError={imgerrorfun} src={item.photo} />}
            >
              <div className='waterfallWordBox'>
                <div className='studentNameBox'>{item.name}</div>
                <div className='studentMessage'>{item.text}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  </div>;
}
export default WaterfallFlow;