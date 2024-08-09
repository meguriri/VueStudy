<template>
    <div>
      <div ref="chart"></div>
      <button @click="updateData">Update Data</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import * as d3 from 'd3';
  
  const chart = ref(null);
  let svg, x, y, xAxis, yAxis, color;
  
  // 定义类别和随机名字列表
  const categories = [
    'atlocation', 'causes', 'capableof', 'hassubevent', 
    'relatedto', 'antonym', 'partof', 'usedfor', 
    'desires', 'others', 'hasproperty'
  ];
  
  const names = [
    'Category A', 'Category B', 'Category C', 'Category D', 
    'Category E', 'Category F', 'Category G', 'Category H', 
    'Category I', 'Category J', 'Category K'
  ];
  
  // 为每个类别随机选择一个名字
  const categoryNames = categories.reduce((acc, category, i) => {
    acc[category] = names[i];
    return acc;
  }, {});
  
  const scatterData = ref(generateRandomData(200, categories));
  
  function generateRandomData(numPoints, categories) {
    const data = [];
    for (let i = 0; i < numPoints; i++) {
      data.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        category: categories[Math.floor(Math.random() * categories.length)]
      });
    }
    return data;
  }
  
  const createChart = () => {
    const margin = { top: 20, right: 30, bottom: 40, left: 150 };
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;
  
    svg = d3.select(chart.value)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
  
    x = d3.scaleLinear().range([0, width]);
    y = d3.scaleLinear().range([height, 0]);
    color = d3.scaleOrdinal()
      .domain(categories)
      .range(d3.schemeCategory10);
  
    xAxis = svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`);
  
    yAxis = svg.append('g')
      .attr('class', 'y-axis');
  
    // 添加图例
    const legend = svg.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(-150, 0)`); // 移动到图表左侧
  
    categories.forEach((category, i) => {
      const legendRow = legend.append('g')
        .attr('transform', `translate(0, ${i * 20})`);
  
      legendRow.append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', color(category));
  
      legendRow.append('text')
        .attr('x', 15)
        .attr('y', 10)
        .attr('text-anchor', 'start')
        .attr('font-size', '10px') // 设置较小的字体大小
        .style('text-transform', 'capitalize')
        .text(categoryNames[category]);
    });
  
    updateChart();
  };
  
  const updateChart = () => {
    x.domain(d3.extent(scatterData.value, d => d.x)).nice();
    y.domain(d3.extent(scatterData.value, d => d.y)).nice();
  
    xAxis.transition().call(d3.axisBottom(x));
    yAxis.transition().call(d3.axisLeft(y));
  
    const circles = svg.selectAll('circle')
      .data(scatterData.value);
  
    circles.enter()
      .append('circle')
      .merge(circles)
      .transition()
      .attr('cx', d => x(d.x))
      .attr('cy', d => y(d.y))
      .attr('r', 5)
      .attr('fill', d => color(d.category));
  
    circles.exit().remove();
  };
  
  const updateData = () => {
    scatterData.value = generateRandomData(200, categories);
    updateChart();
  };
  
  onMounted(createChart);
  </script>
  
  <style scoped>
  /* 添加一些样式 */
  </style>
  