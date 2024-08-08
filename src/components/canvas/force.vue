<template>
    <div ref="chart"></div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import * as d3 from 'd3';
  
  const chart = ref(null);
  
  const data = {
    nodes: [
      { id: 'Computer Science', group: 1 },
      { id: 'Algorithms', group: 2 },
      { id: 'Data Structures', group: 2 },
      { id: 'Operating Systems', group: 3 },
      { id: 'Networking', group: 3 },
      { id: 'Databases', group: 4 },
      { id: 'Artificial Intelligence', group: 5 },
      { id: 'Machine Learning', group: 5 },
      { id: 'Deep Learning', group: 5 },
    ],
    links: [
      { source: 'Computer Science', target: 'Algorithms', value: 1 },
      { source: 'Computer Science', target: 'Data Structures', value: 1 },
      { source: 'Computer Science', target: 'Operating Systems', value: 1 },
      { source: 'Computer Science', target: 'Networking', value: 1 },
      { source: 'Computer Science', target: 'Databases', value: 1 },
      { source: 'Artificial Intelligence', target: 'Machine Learning', value: 1 },
      { source: 'Machine Learning', target: 'Deep Learning', value: 1 },
    ]
  };
  
  onMounted(() => {
    const width = 1000;
    const height = 800;
  
    const svg = d3.select(chart.value).append('svg')
      .attr('width', width)
      .attr('height', height);
  
    const color = d3.scaleOrdinal(d3.schemeCategory10);
  
    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id).distance(150))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(50));
  
    const link = svg.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(data.links)
      .enter().append('line')
      .attr('stroke-width', d => Math.sqrt(d.value))
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6);
  
    const node = svg.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(data.nodes)
      .enter().append('circle')
      .attr('r', 10)
      .attr('fill', d => color(d.group))
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));
  
    const text = svg.append('g')
      .attr('class', 'labels')
      .selectAll('text')
      .data(data.nodes)
      .enter().append('text')
      .attr('dy', 3)
      .attr('x', 15)  // 调整横向偏移，避免与节点重叠
      .attr('y', 0)   // 垂直方向偏移
      .style('font-size', '12px')
      .text(d => d.id);
  
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);
  
      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
  
      text
        .attr('x', d => d.x + 15)  // 将标签移至节点右侧
        .attr('y', d => d.y + 3);  // 使标签垂直居中
    });
  
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
  
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
  
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  });
  </script>
  
  <style scoped>
  .links line {
    stroke: #999;
    stroke-opacity: 0.6;
  }
  
  .nodes circle {
    stroke: #fff;
    stroke-width: 1.5px;
  }
  
  .labels text {
    fill: #000;
    font: 10px sans-serif;
  }
  </style>