import Head from 'next/head'
import Image from 'next/image'
import Strategies from '../components/Strategies'
import styles from '../styles/Home.module.css'
import { AiOutlineWifi as Wifi } from 'react-icons/ai'
import { AiOutlineRight as Right } from "react-icons/ai";
import { AiOutlineFileText as FileText } from "react-icons/ai";
import { AiOutlineMobile as Mobile } from "react-icons/ai";
import React from 'react'

const RightMenu = [
  {
    title: "Deployed",
    subMenu: [
      {
        title: "Live Trades",
        desc: 'Not Deployed',
        icon: Wifi
      },
      {
        title: "Paper Trades",
        desc: 'Not Deployed',
        icon: FileText
      },
      {
        title: "Scanner",
        desc: 'Not Live',
        icon: Mobile
      },
    ]
  }
]

export default function Home() {
  return (
    <div className='container flex flex-row space-x-10'>
      {/* Left container */}
      <div className='max-w-[1000px] w-full'>
        <Strategies />
      </div>
      <div className='bg-white rounded-md shadow-md py-4 px-4 h-fit w-full hidden lg:inline-flex'>
        <div className='flex flex-col gap-y-4 w-full'>
          <div className='flex flex-col space-y-4'>
            {
              RightMenu.map(({title, subMenu}, index) => (
                <React.Fragment key={index}>
                  {/* title */}
                  <div className='text-lg font-bold'>{title}</div>
                  {/* List */}
                  <div className='space-y-4'>
                    {
                      subMenu?.map(({title, desc, icon}, index) => (
                        <div key={index} className='flex flex-row items-center space-x-4 cursor-pointer'>
                          {/* Icon */}
                          {icon({className: "text-blue-500", size: 26}) }
                          {/* Detail */}
                          <div className='flex-1'>
                            {/* Main title */}
                            <div className='text-md font-semibold'>{title}</div>
                            <div className='text-xs font-bold text-slate-300'>{desc}</div>
                            {/* Content */}
                          </div>
                          <Right className='text-slate-600' size={16} />
                        </div>
                      ))
                    }
                  </div>
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
