import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from 'react';
import { getClass } from "@/api/web";
import { useSelector } from 'react-redux';

const ClassReport = () => {
    const count = useSelector((state: any) => state.counter.value);
    const [data, setData]: any = useState([])
    async function getClassData() {
        let result = await getClass()
        if (result.code == 200) {
            console.log(result,1111);
            let data = result.data.class
            let classData = []
            for (const key in data) {
                classData.push({
                    name: key,
                    value: data[key],
                })
            }
            setData(classData)
        }
    }
    const xData: string[] = [];
    const yData: number[] = [];
    const min = 0;
    useEffect(() => {
        console.log(count, 22222);
        console.log(11111, '你变了吗');
        getClassData()
    }, [count])

    data.map((a: any) => {

        xData.unshift(a.name);
        if (a.value === 0) {
            yData.unshift(a.value + min);
        } else {
            yData.unshift(a.value);
        }
    });

    const option = {
        backgroundColor: "transparent",
        color: ["#3398DB"],
        grid: {
            left: "0%",
            right: "5%",
            bottom: "5%",
            top: "0%",
            height: "100%",
            containLabel: true,
            z: 22,
        },
        yAxis: [
            {
                type: "category",
                gridIndex: 0,
                data: xData,
                axisTick: {
                    alignWithLabel: true,
                },
                axisLine: {
                    lineStyle: {
                        color: "#0c3b71",
                    },
                },
                axisLabel: {
                    show: true,
                    color: "#fff",
                    fontSize: 20,
                },
            },
        ],
        xAxis: [
            {
                type: "value",
                gridIndex: 0,
                splitLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                min: min,
                max: 40,
                axisLine: {
                    lineStyle: {
                        color: "#0c3b71",
                    },
                },
                axisLabel: {
                    color: "rgb(170,170,170)",
                    formatter: "{value}",
                },
            }
        ],
        series: [
            {
                type: "bar",
                barWidth: "70%",
                xAxisIndex: 0,
                yAxisIndex: 0,
                itemStyle: {
                    normal: {
                        barBorderRadius: 10,
                        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: "#00feff",
                            },
                            {
                                offset: 0.5,
                                color: "#027eff",
                            },
                            {
                                offset: 1,
                                color: "#0286ff",
                            },
                        ]),
                    },
                },
                label: {
                    show: true, // 显示标签
                    position: 'right', // 标签位置（可根据需求调整）
                    formatter: '{c}人', // 标签格式，这里使用数据的值
                    textStyle: {
                        color: '#fff' // 标签文本颜色
                    }
                },
                data: yData,
            },
        ],
    };
    function handleData() {
        data[data.length - 1].value++
        setData([...data])
    }
    return (
        <>
            <div className='titleName' onClick={handleData}>班级报到情况</div>
            <div className='barBox'>
                <ReactECharts option={option} style={{ height: '100%' }} />
            </div>

        </>
    )
}
export default ClassReport