import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    search: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => this.setState({pokemons: data}))
  }

  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  addNewPokemon = (pokemon) => {
    this.setState({
      pokemons: [...this.state.pokemons, pokemon]
    })
  }

  render() {
    console.log(this.state)
    const filteredPokemons = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addNewPokemon}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={filteredPokemons} />
      </Container>
    )
  }
}

export default PokemonPage
