import * as d3 from 'd3'
import { S } from '../../../../d3backend/dist/assets/transform-DnVXI_Ts'

const width = 500 
const height = 400 
const margin = {top:60,right:30,bottom:30,left:120}
const innerWidth = width- margin.left- margin.right
const innerHeight = height-margin.top-margin.bottom

let xScale = null
let yScale = null
const Cscale= d3.scaleOrdinal(d3.schemeTableau10)

let stackData = null

let maingroup = null

function drawAxis(g,data){
    xScale = d3.scaleBand()
    .domain(data.Xbar)
    .range([0,innerWidth])
    .padding(0.1)

    yScale = d3.scaleLinear()
    .domain([0, d3.max(stackData, (d) => d3.max(d, (d) => d[1]))+10])
    .range([innerHeight,0])
    

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale).ticks(25)

    g.append('g').attr('id','xAxis').call(xAxis)
    .attr('transform',`translate(0,${innerHeight})`)
    g.append('g').attr('id','yAxis').call(yAxis)
}

function addToken(svg,data){
    const token = svg.append('g')
    .attr('class','token')
    .attr('transform',`translate(15,${margin.top})`)

    data.forEach((d,i)=> {
        const tokenRow =token.append('g')
        .attr('transform',`translate(0,${i*20})`)

        tokenRow.append('rect')
        .attr('width',15).attr('height',10)
        .attr('fill',Cscale(d))

        tokenRow.append('text')
        .attr('x', 20)
        .attr('y', 10)
        .attr('text-anchor','start')
        .attr('font-size', '10px') 
        .style('text-transform', 'capitalize')
        .text(d)
    })
}

function addTitle(svg,title){
    svg.append('text').text(title)
    .attr('font-size','1.5em')
    .attr('text-anchor','middle')
    .attr('transform',`translate(${innerWidth/2} ,0)`)
}

function addStackBar(svg){

    svg.selectAll('g.stack')
    .data(stackData)//5种数据
    .enter()
    .append('g')
    .classed('stack', true)//添加class
    .attr('fill', (d)=>Cscale(d.key))
    .selectAll('rect')
    .data(d => {
        return d.map((item) => {
            item.index = d.index
            item.name = d.key
            return item
        })
        //return d
    })// 每种物品7天的数据
    .enter()
    .append('rect')//bandwidth()是柱状图的宽度
    .attr('x', (d) => xScale(d.data.date)+xScale.bandwidth() / 2 -7)
    .attr('y', (d) =>yScale(d[1]))//d[0]: 起始值; d[1]: 结束值; d.data: 源数据
    .attr('height', (d) => yScale(d[0]) - yScale(d[1]))//高度为数据差
    .attr('width', xScale.bandwidth() /2-4)
}

function addClickEvent(svg){
    //创建点击小窗：
    let tooltips = svg.append('div')
    .style('width', '100px')
    .style('height', '70px')
    .style('background-color', '#FFFFFF')
    .style('dispaly', 'flex')
    .style('justify-content', 'center')
    .style('padding', '10px')
    .style('border', '2px')
    .style('border-color', '#F1F1F1')
    .style('border-radius', '5px')
    .style('opacity', 0) //不透明度0: 也就是全透明

    //定义点击事件：
    maingroup.selectAll('rect')
    .on('mouseenter', (e, g) => {//on事件：mouseenter鼠标到这，mouseleave：鼠标离开
        tooltips.html(`
            月份：${g.data.date}<br/>\
            名称：${g[`name`]}<br/>\
            数量：${g[1]-g[0]}<br/>\
        `)
        .style('position', 'absolute')
        .style('left', `${e.clientX}px`)
        .style('top', `${e.clientY}px`)
        .style('opacity', 1)
    })
    .on('mouseleave', (e, g) => {
        tooltips.style('opacity', 0).style('left', `0px`).style('top', `0px`)
    })
}

export function stackBarInit(svg,data,show){
    svg.attr('width',width)
    .attr('height',height)
    .style('background','#F8F8F8')

    maingroup = svg.append('g').attr('id','maingroup')
    .attr('transform',`translate(${margin.left},${margin.top})`)
    
    const stack = d3.stack()
    .keys(data.name)
    stackData = stack(data.data)
    console.log(stackData)

    drawAxis(maingroup,data)
    addStackBar(maingroup)
    
    addToken(svg,data.name)
    addTitle(maingroup,'stackBar Chart')

    addClickEvent(show)
}
