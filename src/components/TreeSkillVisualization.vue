// src/components/TreeSkillVisualization.vue
<template>
  <div class="tree-skill-visualization">
    <svg ref="svgRef" :width="width" :height="height"></svg>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import * as d3 from 'd3'

export default {
  name: 'TreeSkillVisualization',
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const svgRef = ref(null)
    const width = 1000
    const height = 800

    const renderTree = (treeData) => {
      console.log('Rendering tree with data:', JSON.stringify(treeData, null, 2))
      
      const svg = d3.select(svgRef.value)
      svg.selectAll("*").remove() // Clear previous render

      const margin = { top: 20, right: 120, bottom: 20, left: 120 }
      const innerWidth = width - margin.left - margin.right
      const innerHeight = height - margin.top - margin.bottom

      const g = svg.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`)

      const root = d3.hierarchy(treeData)
      
      const treeLayout = d3.tree().size([innerHeight, innerWidth])
      treeLayout(root)

      // Links
      const link = g.selectAll(".link")
        .data(root.links())
        .enter().append("path")
        .attr("class", "link")
        .attr("d", d3.linkHorizontal()
          .x(d => d.y)
          .y(d => d.x))

      // Nodes
      const node = g.selectAll(".node")
        .data(root.descendants())
        .enter().append("g")
        .attr("class", d => "node" + (d.children ? " node--internal" : " node--leaf"))
        .attr("transform", d => `translate(${d.y},${d.x})`)

      // Add circles for the nodes
      node.append("circle")
        .attr("r", 10)
        .style("fill", d => d.data.locked ? "#ccc" : "#4CAF50")
        .style("stroke", "#2E7D32")
        .style("stroke-width", 2)

      // Add labels for the nodes
      node.append("text")
        .attr("dy", ".35em")
        .attr("x", d => d.children ? -13 : 13)
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name)

      // Add progress labels
      node.append("text")
        .attr("dy", "1.75em")
        .attr("x", d => d.children ? -13 : 13)
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => `${d.data.progress}%`)

      console.log('Tree rendered with', node.size(), 'nodes and', link.size(), 'links')
    }

    const updateTree = () => {
      console.log('Updating tree for category ID:', props.categoryId)
      const category = store.getters['skills/getCategoryById'](props.categoryId)
      if (category) {
        console.log('Category found:', JSON.stringify(category, null, 2))
        renderTree(category)
      } else {
        console.error('Category not found')
      }
    }

    onMounted(() => {
      console.log('TreeSkillVisualization mounted')
      updateTree()
    })
    
    watch(() => props.categoryId, (newId, oldId) => {
      console.log(`Category ID changed from ${oldId} to ${newId}`)
      updateTree()
    })

    return {
      svgRef,
      width,
      height
    }
  }
}
</script>

<style scoped>
.tree-skill-visualization {
  width: 100%;
  height: 800px;
  overflow: auto;
}

.node circle {
  fill: #fff;
  stroke: steelblue;
  stroke-width: 3px;
}

.node text {
  font: 12px sans-serif;
}

.link {
  fill: none;
  stroke: #ccc;
  stroke-width: 2px;
}
</style>