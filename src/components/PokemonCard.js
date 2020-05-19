import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    isClicked: false
  }

  handleChange = () => {
    this.setState({
      isClicked: !this.state.isClicked
    })
  }

  render() {

    return (
      <Card>
        <div>
          <div className="image">
            {this.state.isClicked ?
            <img src={this.props.pokemon.sprites.back} alt="oh no!" onClick={this.handleChange}/> :
            <img src={this.props.pokemon.sprites.front} alt="oh no!" onClick={this.handleChange}/>}
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === 'hp').value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
