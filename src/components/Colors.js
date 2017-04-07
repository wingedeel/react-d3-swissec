import React, { Component } from 'react';
import { schemeCategory20, scaleBand } from 'd3-scale';
import Swatch from './Swatch'

class Colors extends Component {
  //colors = d3.schemeCategory20; // D3 predefined color scales of 20 colors
  colors =  [
  "#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", 
  "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", 
  "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", 
  "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]
  
  //range = d3.range(20)
  range = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  // scaleBand is a scale generator function. 
  // Will produce a banded scale, d3.scaleBand
  // Takes in 'range' to create this scale.
  scaleBand = d3.scaleBand()
            .domain(this.range); 

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillUpdate(newProps) {
    this.updateD3(newProps);
  }

  updateD3(props) {
    this.scaleBand.range([0, props.width]);
  }
  
  render() {
    return (
      <g>
        {d3.range(20).map(i => (
          <Swatch color={this.colors[i]} width={this.scaleBand.step()} x={this.scaleBand(i)} />
        ))}
      </g>
    )
  }
}

export default Colors;
