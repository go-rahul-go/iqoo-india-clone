
import z91 from "./assets/nav/z9black.png"
import z92 from "./assets/nav/z9green.png"
import z93 from "./assets/nav/z9front.png"

import n9b from "./assets/nav/neo9problack.png"
import n9r from "./assets/nav/neo9prored.png"
import n9f from "./assets/nav/neo9profront.png"


import i12b from "./assets/nav/12black.png"
import i12w from "./assets/nav/12white.png"
import i12r from "./assets/nav/12red.png"
import i12f from "./assets/nav/12front.png"

import z7pblue from "./assets/nav/z7pblue.png"
import z7pblack from "./assets/nav/z7pblack.png"
import z7pf from "./assets/nav/z7pfront.png"

import neoproblue from "./assets/nav/neo7problue.png"
import neoproorange from "./assets/nav/neo7proorange.png"
import neoprofront from "./assets/nav/neo7front.png"

import z7w from "./assets/nav/z7white.png"
import z7b from "./assets/nav/z7black.png"
import z7f from "./assets/nav/z7front.png"

import neo7b from "./assets/nav/neo7black.png"
import neo7blue from "./assets/nav/neo7blue.png"
import neo7front from "./assets/nav/neo7front.png"

import i11w from "./assets/nav/iqoo11white.png"
import i11b from "./assets/nav/iqoo11black.png"
import i11f from "./assets/nav/iqoo11front.png"

import z9x from "./assets/mob-nav/z9x.png"
import z9 from "./assets/mob-nav/z9.png"
import z7p from "./assets/mob-nav/z7pro.png"
import iqoo12 from "./assets/mob-nav/iqoo12.png"
import neo9pro from "./assets/mob-nav/neo9pro.png"
import neo7pro from "./assets/mob-nav/neo7pro.png"
import z7s from "./assets/mob-nav/z7s.png"
import neo7 from "./assets/mob-nav/neo7.png"
import iqoo11 from "./assets/mob-nav/iqoo11.png"


import z9xf from "./assets/nav/z9xfront.png"
import z9xg from "./assets/nav/z9xgreen.png"
import z9xb from "./assets/nav/z9xblack.png"



const prodData=[
    {
        id:"a",
        title:"iqoo z9x",
        images:[z9xb,z9xg,z9xf],
        new:true
    },
    {
        id: 0,
        title:"iqoo z9",
        images:[z91,z92,z93],
        new:true
    },
    {
        id: 1
        ,
        images:[n9b,n9r,n9f],
        title:"iqoo neo 9 pro",
        new:true

    },
    {
        id: 2,
        images:[i12b,i12w,i12r,i12f],
        title:"iqoo 12",
        new:true
    },
    {
        id: 3,
        images:[z7pblue,z7pblack,z7pf],
        title:"z7 pro",
        new:true
    },
    {
        id: 4,
        images:[neoproblue,neoproorange,neoprofront],
        title:"neo7 pro",
        new:false
    },
    {
        id: 5,
        images:[z7w,z7b,z7f],
        title:"iqoo z7s",
        new:false
    },
    {
        id: 6,
        images:[neo7b,neo7blue,neo7front],
        title:"iqoo neo 7",
        new:false
    },
    {
        id: 7,
        images:[i11w,i11b,i11f],
        title:"iqoo 11",
        new:false
    },
]

const mobData=[
    {
        id:"a",
        url:z9x,
        title:"z9x",
        delay:0.05,
        new:true
    },
    {
        id:0,
        url:z9,
        title:"z9",
        delay:0.1,
        new:true
    },
    {
        id:1,
        url:z7p,
        title:"z7 pro",
        dealay:0.3,
        new:true
    },
    {
        id:2,
        url:neo9pro,
        title:"neo 9 pro",
        delay:0.3,
        new:true
    },
    {
        id:3,
        url:iqoo12,
        title:"IQOO 12",
        delay:0.4,
        new:true
    },
    {
        id:4,
        url:neo7pro,
        title:"neo 7 pro",
        delay:0.5,
        new:false
    },
    {
        id:5,
        url:z7s,
        title:"z7s",
        delay:0.6,
        new:false
    },
    {
        id:6,
        url:neo7,
        title:"neo 7",
        delay:0.7,
        new:false
    },
    {
        id:7,
        url:iqoo11,
        title:"IQOO 11",
        delay:0.8,
        new:false
    },

]
export {prodData,mobData};