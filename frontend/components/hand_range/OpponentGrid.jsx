import Tile from './tile';
import React from 'react';

class OpponentGrid extends React.Component{
  constructor(props){
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    const opponentGrid = this.props.opponentGrid;
    const that = this;
    return(
      <div className="block">
        <h3>Opponent's possible range</h3>
        {this.renderRows()}
      </div>
    );
  }

  renderRows() {
    const opponentGrid = this.props.opponentGrid;
    return opponentGrid.grid.map( (row, i) => {
      return (
        <div className="row" key={`row-${i}`}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  renderTiles(row, i){
    const opponentGrid = this.props.opponentGrid;
    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          opponentGrid={opponentGrid}
          updateOGrid={this.props.updateOGrid}
          key={i * opponentGrid.gridSize + j} />
      );
    });
  }

}

export default OpponentGrid;
