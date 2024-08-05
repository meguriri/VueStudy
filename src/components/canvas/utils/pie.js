import * as d3 from 'd3'

const width=800
const height=600
const margin = {top:60,right:30,bottom:60,left:50}
const innerWidth = width- margin.left- margin.right
const innerHeight = height-margin.top-margin.bottom

let outerRadius = innerWidth / 4;//外部半径
let innerRadius = 0;//内部半径

//arc:弧生成器 function
let arc = d3.arc()//弧
.outerRadius(outerRadius)
.innerRadius(innerRadius)

//弧度数据生成器
const pie = d3.pie()
.sort(null)//顺序
.value(d=>d.value)

//色彩选择器
let colors = d3.schemePastel1

//弧选择器
let arcs

export function pieInit(svg,data){
  svg.attr('height',height.toString())
    .attr('width',width.toString())
    .style('background','#FFF5FC')
  
  const maingroup = svg.append('g')
  .attr('id','maingroup')
  .attr('transform', `translate(${margin.left},${margin.top})`)
  
  //弧度数据 []
  const piedata = pie(data)
  //console.log("piedata",piedata)

  //创建弧的g
  arcs=maingroup.selectAll('arc').data(piedata)
  .enter()
  .append('g')
  .attr('id','arc')
  .attr('transform',`translate(${innerWidth/2},${innerHeight/2})`)

  //在弧上添加path
  arcs.append('path')
  .attr('fill',(d,i)=>colors[i])
  .attr('d',d=>arc(d))//用弧生成器生成d
  
  //加上说明标签
  arcs.append('text')
  .attr('transform',(d,i)=>{
    var x = arc.centroid(d)[0] * 2.8;
    var y = arc.centroid(d)[1] * 2.8;
    return 'translate(' + x + ', ' + y + ')'
  })
  .attr('text-anchor','middle')
  .text(d=>d.data.name+" "+d.value+"%")

  //加上线
  arcs.append('line')
    .attr('stroke', 'black')
    .attr('x1', d=>arc.centroid(d)[0] * 2)
    .attr('y1', d=>arc.centroid(d)[1] * 2)
    .attr('x2',(d, i)=>arc.centroid(d)[0] * 2.5)
    .attr('y2',(d, i)=>arc.centroid(d)[1] * 2.5)

  //添加标题
  maingroup.append('text').text('PieChart demo1')
  .attr('font-size','2em')
  .attr('text-anchor','middle')
  .attr('transform',`translate(${innerWidth/2} ,0)`)
}

export function pieUpdate(data){
  //弧度数据 []
  const piedata = pie(data)

  //修改path
  arcs.data(piedata).select('path')
  .attr('fill',(d,i)=>colors[i])
  .attr('d',d=>arc(d))//用弧生成器生成d

  //修改标签
  arcs.select('text')
  .attr('transform',(d,i)=>{
    var x = arc.centroid(d)[0] * 2.8;
    var y = arc.centroid(d)[1] * 2.8;
    return 'translate(' + x + ', ' + y + ')'
  })
  .attr('text-anchor','middle')
  .text(d=>d.data.name+" "+d.value+"%")

  //修改线
  arcs.select('line')
    .attr('stroke', 'black')
    .attr('x1', d=>arc.centroid(d)[0] * 2)
    .attr('y1', d=>arc.centroid(d)[1] * 2)
    .attr('x2',(d, i)=>arc.centroid(d)[0] * 2.5)
    .attr('y2',(d, i)=>arc.centroid(d)[1] * 2.5)
}