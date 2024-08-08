import * as d3 from 'd3'

let width 
let height
let innerWidth
let innerHeight
const margin = {top:60,right:30,bottom:60,left:50}

let Xscale
let Yscale
let yAxis 
let xAxis 

let g
let bars

let colors = d3.scaleOrdinal(d3.schemePastel1)

function barInit(svg,data){
    //设置画布
    svg.attr('height',400)
    .attr('width',400)
    .style('background','#F7F7F7')

    //定义外边距
    width = +svg.attr('width')//+号是字符串隐式转换成数字
    height = +svg.attr('height')

    //定义maingroup大小
    innerWidth = width- margin.left- margin.right
    innerHeight = height-margin.top-margin.bottom

    //设置x轴比例尺
    Xscale = d3.scaleBand()
    .domain(data.map(d=>d.name))
    .range([0,innerWidth])
    .padding(0.1)//内边距的占比，0.1是1%
    //设置y轴比例尺
    Yscale = d3.scaleLinear()
    .domain([0,d3.max(data,d=>d.value)+10])
    //.domain(d3.extent(data,d=>d.value))
    .range([innerHeight,0])

    //定义容器g(mainGroup),并将g偏移到maingroup的位置
    g = svg.append('g').attr('id','maingroup')
    .attr('transform',`translate(${margin.left},${margin.top})`)
    
    //添加坐标轴
    yAxis = d3.axisLeft(Yscale)
    xAxis = d3.axisBottom(Xscale)

    //渲染坐标轴
    g.append('g').attr('id','yAxis').call(yAxis)
    g.append('g').attr('id','xAxis').call(xAxis)
    .attr('transform',`translate(0,${innerHeight})`)

    //渲染柱状图
    bars = g.selectAll('.dataRect').data(data)
    .enter()
    .append('rect')
    .attr('width',Xscale.bandwidth())
    .attr('height',d=>innerHeight-Yscale(d.value))
    .attr('fill',d=>colors(d.name))
    .attr('x',d=>Xscale(d.name))
    .attr('y',d=>Yscale(d.value))

    //修改字体大小
    d3.selectAll('.tick text').attr('font-size','1.5em')

    //添加标题
    g.append('text').text('barChart demo1')
    .attr('font-size','2em')
    .attr('text-anchor','middle')
    .attr('transform',`translate(${innerWidth/2} ,0)`)
    .transition().duration(1000)
}

function barUpdate(svg,data){
    
    bars.data(data,d=>d.name).transition().duration(1000)
    .attr('width',Xscale.bandwidth())
    .attr('height',d=>innerHeight-Yscale(d.value))
    .attr('fill',d=>colors(d.name))
    .attr('x',d=>Xscale(d.name))
    .attr('y',d=>Yscale(d.value))
    .transition().duration(1000)

    bars.exit().remove()
}

export { barInit,barUpdate }