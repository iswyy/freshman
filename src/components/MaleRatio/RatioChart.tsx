import React, { useEffect, useState } from 'react';
import ReactEcharts from "echarts-for-react"
import './index.css'

interface RatioChartProps {
  value: number;
}

const RatioChart: React.FC<RatioChartProps> = (props) => {
  let [angle, setAngle] = useState(0)
  let [value, setValue] = useState((props.value * 100)>1?Math.floor(props.value*100):Math.ceil(props.value*100))
  const option = {
    type: 'pie',
    title: {
      text: '{a|' + value + '}{c|%}',
      x: 'center',
      y: 'center',
      textStyle: {
        rich: {
          a: {
            fontSize: 48,
            color: '#ffffff',
            fontWeight: 700,
          },

          c: {
            fontSize: 20,
            color: '#29EEF3',
            // padding: [5,0]
          }
        }
      }
    },

    series: [
      // 紫色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (0 + angle) * Math.PI / 180,
              endAngle: (90 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#8383FA",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //紫点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (90 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#8450F9", //绿
              fill: "#8450F9"
            },
            silent: true
          };
        },
        data: [0]
      },
      // 黄色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
              startAngle: (180 + angle) * Math.PI / 180,
              endAngle: (270 + angle) * Math.PI / 180
            },
            style: {
              stroke: "#fdd100",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      },
      {
        name: "ring5", // 黄色
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6;
          let point = getCirlPoint(x0, y0, r, (180 + angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#fdd100", //绿
              fill: "#fdd100"
            },
            silent: true
          };
        },
        data: [0]
      },
      // 橘色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (90 + -angle) * Math.PI / 180,
              endAngle: (220 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#fe1d46",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (90 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#fe1d46", //橘
              fill: "#fe1d46"
            },
            silent: true
          };
        },
        data: [0]
      },
      // 粉色
      {
        name: "ring5",
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          return {
            type: 'arc',
            shape: {
              cx: api.getWidth() / 2,
              cy: api.getHeight() / 2,
              r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
              startAngle: (270 + -angle) * Math.PI / 180,
              endAngle: (40 + -angle) * Math.PI / 180
            },
            style: {
              stroke: "#f93b9c",
              fill: "transparent",
              lineWidth: 1.5
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: "ring5", //粉点
        type: 'custom',
        coordinateSystem: "none",
        renderItem: function (params: any, api: any) {
          let x0 = api.getWidth() / 2;
          let y0 = api.getHeight() / 2;
          let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
          let point = getCirlPoint(x0, y0, r, (270 + -angle))
          return {
            type: 'circle',
            shape: {
              cx: point.x,
              cy: point.y,
              r: 4
            },
            style: {
              stroke: "#f93b9c", //绿
              fill: "#f93b9c"
            },
            silent: true
          };
        },
        data: [0]
      }, {
        name: '男女生报到比率',
        type: 'pie',
        radius: ['52%', '40%'],
        silent: true,
        clockwise: true,
        startAngle: 90,
        z: 0,
        zlevel: 0,
        label: {
          position: "center",
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            color: { // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: '#A098FC' // 0% 处的颜色
              },
              {
                offset: 0.3,
                color: '#4386FA' // 0% 处的颜色
              },
              {
                offset: 0.6,
                color: '#4FADFD' // 0% 处的颜色
              },
              {
                offset: 0.8,
                color: '#0CD3DB' // 100% 处的颜色
              }, {
                offset: 1,
                color: '#646CF9' // 100% 处的颜色
              }
              ]
            },
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            show: false
          },
          itemStyle: {
            color: "#173164"
          }
        }
        ]
      },
      {
        name: '男女生报到比率',
        type: 'pie',
        radius: ['32%', '35%'],
        silent: true,
        clockwise: true,
        startAngle: 270,
        z: 0,
        zlevel: 0,
        label: {
          position: "center",
        },
        data: [{
          value: value,
          name: "",
          itemStyle: {
            color: { // 完成的圆环的颜色
              colorStops: [{
                offset: 0,
                color: '#00EDF3' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#646CF9' // 100% 处的颜色
              }]
            },
          }
        },
        {
          value: 100 - value,
          name: "",
          label: {
            show: false
          },
          itemStyle: {
            color: "#173164"
          }
        }
        ]
      },

    ]
  };
  useEffect(() => {
    let timerid = setInterval(() => {
      setAngle((prevAngle) => prevAngle + 3);
    }, 100)
    return (() => clearInterval(timerid))

  }, [angle]);
  useEffect(() => {
    setValue((props.value * 100)>1?Math.floor(props.value*100):Math.ceil(props.value*100))
  }, [props.value])
  const getCirlPoint = (x0: number, y0: number, r: number, angle: number) => {
    let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
    let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
    return {
      x: x1,
      y: y1
    }
  }

  return <ReactEcharts option={option} style={{ height: "100%", width: "50%", marginTop: '-2.5rem' }}></ReactEcharts>

}
export default RatioChart