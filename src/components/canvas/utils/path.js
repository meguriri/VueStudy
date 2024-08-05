import * as d3 from 'd3'

const width=800
const height=600
const margin = {top:60,right:30,bottom:60,left:50}
const innerWidth = width- margin.left- margin.right
const innerHeight = height-margin.top-margin.bottom

let xValue = d=>d.date
let yValue = d=>d.value

let Xscale
let Yscale

function pathInit(svg,data){
    console.log(data)
    
    svg.attr('height',height.toString())
    .attr('width',width.toString())
    .style('background','#FFF5FC')

    Xscale = d3.scaleTime()
    .domain(d3.extent(data,xValue))
    .range([0,innerWidth]).nice()

    Yscale = d3.scaleLinear()
    .domain([0,d3.max(data,yValue)+10].reverse())
    .range([0,innerHeight]).nice()

    const maingroup = svg.append('g')
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

    maingroup.append('g').attr('class','path').append('path')
    .attr('class', 'line-path')
    .attr('d', linePath(data))
    .attr('fill', 'none')
    .attr('stroke-width', 2)
    .attr('stroke', '#ff94cf')
    .transition().duration(1000)

    //画点
    maingroup.append('g').attr('class','circleG').selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('r','5')
    .attr('transform',d=>{
        return `translate(${Xscale(xValue(d))}
        ,${Yscale(yValue(d))})`
    })
    .attr('fill','#ff1c99')
    .transition().duration(1000)

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
    
        d3.select('#maingroup').selectAll('path')
        .attr('class', 'line-path')
        .attr('d', linePath(data))
        .attr('fill', 'none')
        .attr('stroke-width', 2)
        .attr('stroke', '#ff94cf')
        .transition().duration(1000)
    
        //画点
        d3.select('#maingroup').selectAll('circle')
        .data(data)
        .attr('r','5')
        .attr('transform',d=>{
            return `translate(${Xscale(xValue(d))}
            ,${Yscale(yValue(d))})`
        })
        .attr('fill','#ff1c99')
        .transition().duration(1000)
}

export {pathInit,pathUpdate}