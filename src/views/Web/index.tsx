import './index.css'
import React, { useState, useEffect } from 'react'
import MaleRatio from '@/components/MaleRatio'
import ReportList from '@/components/ReportList'
import CenterMap from "@/components/CenterMap/CenterMap";
import ReportMost from "@/components/ReportMost/ReportMost";
import ClassReport from "@/components/ClassReport/ClassReport";
import AllRatio from '@/components/AllRatio';
// import { getNowTime } from '@/utils/formatDate';
import HeadTitle from '@/components/HeadTitle/HeadTitle';
import { useDispatch } from 'react-redux';
import { increment } from '../../store/web';


const Charts: React.FC = () => {
    const dispatch = useDispatch();
    setInterval(() => {
        dispatch(increment())
    }, 1000 * 60)
    return (
        <div className="bg">
            <div className="container">
                <div className="head-title">
                    <HeadTitle />
                </div>
                <div className="class-report"><ClassReport /></div>
                <div className="report-list"><ReportList /></div>
                <div className="main">
                    <CenterMap />
                </div>
                <div className="right">
                    <div className="all-ratio"> <AllRatio /></div>
                    <div className="report-most"><ReportMost /></div>
                    <div className="male-ratio"><MaleRatio /></div>

                </div>
            </div>
        </div>
    )

}
export default Charts
