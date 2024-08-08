import * as d3 from 'd3'
import { h } from 'vue'

const width=600
const height=400
const margin = {top:60,right:30,bottom:60,left:50}
const innerWidth = width- margin.left- margin.right
const innerHeight = height-margin.top-margin.bottom

let xValue = d=>d.date
let yValue = d=>d.value

let Xscale
let Yscale

let maingroup

let path
let circle

function pathInit(svg,data){
    
    svg.attr('height',height)
    .attr('width',width)
    .style('background','#F7F7F7')

    Xscale = d3.scaleTime()
    .domain(d3.extent(data,xValue))
    .range([0,innerWidth]).nice()

    Yscale = d3.scaleLinear()
    .domain([0,d3.max(data,yValue)+10].reverse())
    .range([0,innerHeight]).nice()

    maingroup = svg.append('g')
    .attr('id','maingroup')
    .attr('transform', `translate(${margin.left},${margin.top})`)

    const xAxis = d3.axisBottom(Xscale)
    .tickSize(-innerHeight)
    .tickFormat(d3.timeFormat('%b-%d'))

    const yAxis = d3.axisLeft(Yscale)
    .ticks(d3.max(data,yValue)/5)
    .tickSize(-innerWidth)

    maingroup.append('g').attr('id','xAxis').call(xAxis)
    .attr('transform',`translate(0,${innerHeight})`)
    maingroup.append('g').attr('id','yAxis').call(yAxis)

    //画线
    let linePath = d3.line()
    .x(d=>Xscale(xValue(d)))//
    .y(d=>Yscale(yValue(d)))//

    // maingroup.append('g').attr('class','path').append('path')
    // .attr('class', 'line-path')
    // .attr('d', linePath(data))
    // .attr('fill', 'none')
    // .attr('stroke-width', 2)
    // .attr('stroke', '#ff94cf')
    
    path = maingroup.append('g').attr('class','path').append('path')
    .attr('class', 'line-path')
    .attr('d', linePath(data))
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', '#ff94cf')

    //画点
    circle=maingroup.append('g').attr('class','circleG').selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r','5')
    .attr('transform',d=>{
        return `translate(${Xscale(xValue(d))}
        ,${Yscale(yValue(d))})`
    })
    .attr('fill','#ff1c99')

    //添加标题
    maingroup.append('text').text('LineChart demo1')
    .attr('font-size','2em')
    .attr('text-anchor','middle')
    .attr('transform',`translate(${innerWidth/2} ,0)`)
}

function pathUpdate(data){
        //画线
        let linePath = d3.line()
        .x(d=>Xscale(xValue(d)))//
        .y(d=>Yscale(yValue(d)))//
    
        path.attr('class', 'line-path')
        .transition().duration(1000)
        .attr('d', linePath(data))
        .attr('fill', 'none')
        .attr('stroke-width', 2)
        .attr('stroke', '#ff94cf')
        .transition().duration(1000)
    
        //画点
        circle.data(data)
        .transition().duration(1000)
        .attr('r','5')
        .attr('transform',d=>{
            return `translate(${Xscale(xValue(d))}
            ,${Yscale(yValue(d))})`
        })
        .attr('fill','#ff1c99')
        .transition().duration(1000)
}

export {pathInit,pathUpdate}