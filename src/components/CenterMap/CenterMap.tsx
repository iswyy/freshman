import ReactECharts from 'echarts-for-react';
// import ReportRate from "@/components/ReportRate/ReportRate"
import "./CenterMap.css"
// import ColumnGroup from 'antd/es/table/ColumnGroup';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { getSignIn, getLongitudeAndLatitude } from '@/api/web';
// import { color } from 'echarts';
const CenterMap = () => {

    async function getAdress() {
        let result = await getLongitudeAndLatitude()

        if (result.code == 200) {
            let address: any = {}
            let tempData: any = [
                { name: '郑州', value: 20 },
                { name: '开封', value: 20 },
                { name: '洛阳', value: 20 },
                { name: '平顶山', value: 20 },
                { name: '安阳', value: 20 },
                { name: '鹤壁', value: 20 },
                { name: '新乡', value: 20 },
                { name: '焦作', value: 20 },
                { name: '濮阳', value: 20 },
                { name: '许昌', value: 20 },
                { name: '漯河', value: 20 },
                { name: '三门峡', value: 20 },
                { name: '南阳', value: 20 },
                { name: '商丘', value: 20 },
                { name: '信阳', value: 20 },
                { name: '周口', value: 20 },
                { name: '驻马店', value: 20 },
                { name: '济源', value: 20 },
                { name: '河南科技学院', value: 100 },
            ]
            result.data.map((item: any) => {
                let name = item.name
                address[name] = [item.longitude, item.latitude]
                tempData.push({ name, "value": 0 })
            })
            setGeoCoordMap(Object.assign(geoCoordMap, address))

            setData([...tempData])
        }
    }
    const [geoCoordMap, setGeoCoordMap]: any = useState({
        '兰考': [114.385481, 34.825227],
        '郑州': [113.4668, 34.6234],
        '开封': [114.311523, 34.809969],
        '洛阳': [112.471793, 34.62387],
        '平顶山': [113.198486, 33.775454],
        '安阳': [114.39891, 36.108225],
        '鹤壁': [114.306924, 35.752846],
        '新乡': [113.938978, 35.309189],
        '焦作': [113.249079, 35.222425],
        '濮阳': [115.038216, 35.764093],
        '许昌': [113.860789, 34.040073],
        '漯河': [114.021765, 33.590883],
        '三门峡': [111.179383, 34.783409],
        '南阳': [112.531584, 33.019279],
        '商丘': [115.659125, 34.44116],
        '信阳': [114.095355, 32.146995],
        '周口': [114.693267, 33.644758],
        '驻马店': [114.030964, 33.034777],
        '济源': [112.623571, 35.078872],
        '河南科技学院': [113.93868471694944, 35.2759894613082],
    });

    const dataFrom: string = '河南科技学院';

    const [data, setData]: any = useState([
        { name: '郑州', value: 20 },
        { name: '开封', value: 20 },
        { name: '洛阳', value: 20 },
        { name: '平顶山', value: 20 },
        { name: '安阳', value: 20 },
        { name: '鹤壁', value: 20 },
        { name: '新乡', value: 20 },
        { name: '焦作', value: 20 },
        { name: '濮阳', value: 20 },
        { name: '许昌', value: 20 },
        { name: '漯河', value: 20 },
        { name: '三门峡', value: 20 },
        { name: '南阳', value: 20 },
        { name: '商丘', value: 20 },
        { name: '信阳', value: 20 },
        { name: '周口', value: 20 },
        { name: '驻马店', value: 20 },
        { name: '济源', value: 20 },
        { name: '河南科技学院', value: 100 },
    ]);
    const colorList = ['#EBA4D2', '#6AAFF2', '#CC54DO', '#D32729', '#9400D3']

    const series = [
        {
            name: '河南科技学院',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 3,
                trailLength: 0.7,
                // color: () => {
                //     return colorList[Math.floor(Math.random() * colorList.length)];
                // },
                symbolSize: 3,
            },
            lineStyle: {
                color: () => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                },
                width: 0,
                curveness: 0.2,
            },

            markPoint: {
                symbol: 'circle',  // 设置标记点为圆圈

            },
            data: data.slice(18).map((dataItem: any) => ({
                fromName: dataItem.name,
                toName: dataFrom,
                coords: [
                    geoCoordMap[dataItem.name],
                    geoCoordMap[dataFrom],
                ],
            })),
        },
        {
            name: '河南科技学院',
            type: 'lines',
            zlevel: 2,
            symbolSize: 10,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
            },
            lineStyle: {
                color: () => {
                    return colorList[Math.floor(Math.random() * colorList.length)];
                },
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
            },
            data: data.slice(18).map((dataItem: any) => ({
                fromName: dataItem.name,
                toName: dataFrom,
                coords: [
                    geoCoordMap[dataItem.name],
                    geoCoordMap[dataFrom],
                ],
            })),
        },
        {
            name: '河南科技学院',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                scale: 5,
                brushType: 'stroke',
            },
            label: {
                show: true,
                position: 'right',
                color: "#fff",
                formatter: '{b}',
                fontSize: 15,
            },
            symbolSize: (val: any) => val[2] / 4,
            itemStyle: {
                color: '#F92C91',
            },
            data: data.map((dataItem: any) => {
                return {
                    name: dataItem.value == 0 ? '' : dataItem.name,
                    value: geoCoordMap[dataItem.name].concat([dataItem.value]),
                    label: {
                        fontWeight: dataItem.name == "河南科技学院" ? "700" : "400",
                        fontSize: dataItem.name == "河南科技学院" ? 35 : 20,// 修改特定点的字体大小为14
                        color: dataItem.name == "河南科技学院" ? "#ffe968" : "#fff",// 修改特定点的字体大小为14
                        offset: dataItem.name == "河南科技学院" ? [0, 25] : [0, 0],
                    },
                    itemStyle: {
                        color: dataItem.name == "河南科技学院" ? "red" : "#F92C91",
                    },
                }
            }

            ),
        },
    ];

    const option = {
        renderer: 'webgl',
        geo: {
            map: '河南',
            zoom: 1.24,
            zoomSensitivity: true,
            label: {
                show: false,
                emphasis: {
                    show: false,
                },
            },
            roam: true,
            itemStyle: {
                areaColor: '#232f63',
                borderColor: '#0070D9',
                borderWidth: 1.5,
                emphasis: {
                    areaColor: '#069',
                },
            },
        },
        series: series,
    };

    const count = useSelector((state: any) => state.counter.value)
    const [allnum, setAllnum] = useState(0)
    useEffect(() => {

        getAdress()
        getSignIn().then((res) => {
            // console.log(res);
            if (res.code === 200) {
                setAllnum(res.data.all);
            }
        }).catch(res => { console.log(res) }
        )
    }, [count])
    return (
        <>
            <div className="currendNum">
                <div className='test'></div>
                <div className='totalStudent'>
                    <span className='reportText'>已报到 </span>
                    <span className='studentNum'> {allnum}</span>
                    <span className='reportText'> 人</span>
                </div>
            </div>
            <ReactECharts option={option} style={{ width: '100%', height: '85%', zIndex: '9999', position: "relative", marginTop: "2rem" }} />
            <div className="map2"></div>
            <div className="map3"></div>
        </>

    )
}
export default CenterMap;