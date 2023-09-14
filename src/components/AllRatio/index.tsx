import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import ReactEcharts from "echarts-for-react";
import './index.css';
import { useSelector } from 'react-redux';
import { getSignIn } from '@/api/web';


const AllRatio: React.FC = () => {
  const count = useSelector((state: any) => state.counter.value);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);
  useEffect(() => {
    getSignIn().then((res) => {
      console.log(res);
      if (res.code === 200) {
        console.log(res.data.computer_percent);
        console.log(res.data.computer_percent);
        setValue(res.data.computer_percent);
        setValue1(((res.data.computer_percent * 100) > 1) ? Math.floor(res.data.computer_percent * 100) : Math.ceil(res.data.computer_percent * 100))
      }
    }).catch(res => { console.log(res) }
    )
  }, [count])
  const option = {
    title: {
      text: '',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 25,
        color: 'rgb(97, 142, 205)',
      },
    },
    angleAxis: {
      polarIndex: 0,
      min: 0,
      max: 100,
      show: false,
      // startAngle:90,
      clockwise: false
    },
    radiusAxis: {
      type: 'category',
      min: 10,
      max: 10,
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    polar: {
      center: ['50%', '50%'], //中心点位置
      radius: '130', //图形大小
    },

    series: [
      {
        type: 'liquidFill',
        radius: '60%',
        center: ['50%', '50%'],
        data: [value, value / 1.1, value / 1.2], // data个数代表波浪数
        backgroundStyle: {
          borderWidth: 1, // 设置边框宽度
          borderColor: '#0CD3DB',
          color: 'transparent',
        },
        label: {
          formatter: ['{a|' + value1 + '}{c|%}'].join('\n'),
          rich: {
            a: {
              fontSize: 50,
              fontFamily: 'DS',
              color: '#fff',
              fontWeight: 700,
            },
            b: {

              fontSize: 20,
              color: '#29EEF3'
            },
            c: {
              fontSize: 20,
              color: '#29EEF3',
              height: 30
            },
          },
        },
        outline: {
          show: false,
        },
      },
      {
        type: 'bar',
        z: 10,
        name: '外环',
        data: [value * 100],
        showBackground: true,
        backgroundStyle: {
          color: '#282C31',
        },
        coordinateSystem: 'polar',
        roundCap: true,
        barWidth: 15,
        itemStyle: {
          normal: {
            color: {
              // 完成的圆环的颜色
              colorStops: [
                {
                  offset: 0,
                  color: '#A098FC', // 0% 处的颜色
                },
                {
                  offset: 0.3,
                  color: '#4386FA', // 0% 处的颜色
                },
                {
                  offset: 0.6,
                  color: '#4FADFD', // 0% 处的颜色
                },
                {
                  offset: 0.8,
                  color: '#0CD3DB', // 100% 处的颜色
                },
                {
                  offset: 1,
                  color: '#646CF9', // 100% 处的颜色
                },
              ],
            },
          },
        },
      },
    ],
  };


  return (
    <>
      <div className='titleName'>总报到率</div>
      <ReactEcharts option={option} style={{ height: "100%", width: "100%", marginTop: '-2.5rem' }}></ReactEcharts>
    </>
  )

}
export default AllRatio