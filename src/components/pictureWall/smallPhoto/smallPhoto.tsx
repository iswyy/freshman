import './index.css'
import { Card } from 'antd';
import { useRef } from 'react';
import Photo from "@/components/pictureWall/photo/Photo";
import { useState, useEffect } from "react";
const { Meta } = Card;
interface Person {
  name: string,
  text: string,
  photo: string
}
let arr: Person[] = [
  { name: '马忠鹏', text: '开学真好咖啡馆讲课费结果看放假扣分4看风景国家开发感觉客机开始看付过款就看看就', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好!', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
  { name: '马忠鹏', text: '开学真好！', photo: 'src/assets/images/pivtureWall/waterfallFlow/bosx.jpg' },
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
const imgerrorfun = (event:any) => {
  event.target.src = "../../../assets/images/pivtureWall/012.jpg";
}
const WaterfallFlow: React.FC<any> = ({ allStudentDataToWater, downStudentDataToWater }) => {
  let allStudentData: any = allStudentDataToWater || []
  let arr:any=[]
  arr=allStudentData
  if(downStudentDataToWater){
    allStudentData.push(downStudentDataToWater)
  }
  const peples = {
    name: "等你来", age: '18', sex: "女", zy: "计算机科学与技术", className: "", word: "崇德尚能，知行合一",
    img: "../../../src/assets/images/pivtureWall/012.jpg"
  }
  return <div className='bBox'>
    <div className='leftPhotoBox' style={{ display: 'flex', marginRight: '10px' }}>
      <div className='sixth sixB' >
        <div className='fourthLeftBox'>
          <div className='LeftOne' style={{ color: '#ffe968' }}>No.{arr.length>3 ? arr[arr.length - 4].place : 1}</div>
          <div className='LeftFive' style={{ display: 'flex', alignItems: 'start' }}>
            <div className='LeftTwo'>{arr.length>3 ? arr[arr.length - 4].name : peples.name}</div>
            <div className='LeftFive' style={{ lineHeight: '32px' }}>{arr.length>3 ? arr[arr.length - 4].class : peples.className}</div>
          </div>
          <div className='LeftSix'>{arr.length>3 ? arr[arr.length - 4].courWord : peples.word}</div>
        </div>
        <img onError={imgerrorfun} src={arr.length>3 ? arr[arr.length - 4].image : peples.img} alt="" />
      </div>
      <div className='sixth sixB' >
        <div className='fourthLeftBox'>
          <div className='LeftOne' style={{ color: '#ffe968' }}>No.{arr.length>4 ? arr[arr.length - 5].place : 2}</div>
          <div className='LeftFive' style={{ display: 'flex', alignItems: 'start' }}>
            <div className='LeftTwo'>{arr.length>4 ? arr[arr.length - 5].name : peples.name}</div>
            <div className='LeftFive' style={{ lineHeight: '32px' }}>{arr.length>4 ? arr[arr.length - 5].class : peples.className}</div>
          </div>
          <div className='LeftSix'>{arr.length>4 ? arr[arr.length - 5].courWord : peples.word}</div>
        </div>
        <img onError={imgerrorfun} src={arr.length>4 ? arr[arr.length - 5].image : peples.img} alt="" />
      </div>
      <div className='sixth border'>
        <div className='fourthLeftBox'>
          <div className='LeftOne' style={{ color: '#ffe968' }}>No.{arr.length>5 ? arr[arr.length - 6].place : 3}</div>
          <div className='LeftFive' style={{ display: 'flex', alignItems: 'start' }}>
            <div className='LeftTwo'>{arr.length>5 ? arr[arr.length - 6].name : peples.name}</div>
            <div className='LeftFive' style={{ lineHeight: '32px' }}>{arr.length>5 ? arr[arr.length - 6].class : peples.className}</div>
          </div>
          <div className='LeftSix'>{arr.length>5 ? arr[arr.length - 6].courWord : peples.word}</div>
        </div>
        <img onError={imgerrorfun} src={arr.length>5 ? arr[arr.length - 6].image : peples.img} alt="" />
      </div>
    </div>
  </div>;
}
export default WaterfallFlow;