import * as d3 from 'd3'

const width = 500
const height = 400
const margin = {top:60,right:30,bottom:30,left:120}
const innerWidth = width- margin.left- margin.right
const innerHeight = height-margin.top-margin.bottom

const xValue = d=>d.date
const yValue = d=>d.goal

let Xscale = null
let Yscale =null
let Cscale =null
let maingroup = null
let path = []

let colors = d3.schemePastel1

function addToken(svg,data){
  const token =svg.append('g')
  .attr('class','token')
  .attr('transform',`translate(15, ${margin.top})`)
  
  data.forEach((d,i) => {
    const tokenRow = token.append('g')
    .attr('transform', `translate(0, ${i * 20})`)

    tokenRow.append('rect')
    .attr('width',10)
    .attr('height',10)
    .attr('fill',Cscale(d))

    tokenRow.append('text')
    .attr('x', 15)
    .attr('y', 10)
    .attr('text-anchor', 'start')
    .attr('font-size', '10px') // 设置较小的字体大小
    .style('text-transform', 'capitalize')
    .text(d);
  })

  
}

function addTitle(title){
  maingroup.append('text').text(title)
  .attr('font-size','1.5em')
  .attr('text-anchor','middle')
  .attr('transform',`translate(${innerWidth/2} ,0)`)
}

function drawPath(data){
  let linePath = d3.line()
  .x(d=>Xscale(xValue(d)))
  .y(d=>Yscale(yValue(d)))
  .curve(d3.curveCardinal)//折线的曲线类型

  let path = maingroup.append('g')
  .attr('class','path')
  .append('path')
  .attr('d',linePath(data.data))
  .attr('fill','none')
  .attr('stroke-width',3)
  .attr('stroke',Cscale(data.name))

  return path
}

export function pathInit(svg,data){
  svg.attr('height',height)
  .attr('width',width)
  .style('background','#F8F8F8')

  Xscale = d3.scaleBand()
  .domain(data[0].data.map(xValue))
  .range([0,innerWidth])
  .padding(0.1)

  Yscale = d3.scaleLinear()
  .domain([0,60])
  .range([innerHeight,0])

  Cscale = d3.scaleOrdinal()
  .domain(data.map(d=>d.name))
  .range(colors)


  maingroup = svg.append('g').attr('id','maingroup')
  .attr('transform',`translate(${margin.left},${margin.top})`)

  const xAxis = d3.axisBottom(Xscale)
  const yAxis = d3.axisLeft(Yscale)

  maingroup.append('g').attr('id','xAxis').call(xAxis)
  .attr('transform',`translate(1,${innerHeight})`)
  maingroup.append('g').attr('id','yAxis').call(yAxis)

  data.forEach((d)=>{
    path.push(drawPath(d))
  })

  
  addToken(svg,data.map(d=>d.name))
  addTitle('pathDemo 2')

}

export function pathUpdate(data){
  
}