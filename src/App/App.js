import React, { Component } from 'react';
import './App.css';
import { getData } from '../service';
import Filter from '../Filter';
import CardWrapper  from '../CardWrapper';
import Head from '../Head';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: {},
      selectedFilter: {},
    };
  }

  componentDidMount() {
    getData({
      url: 'https://rickandmortyapi.com/api/character/',
    }).then(dataObj => 
      this.setState({
        dataObj,
      })
    );
  }

  render() {
    const { selectedFilter, dataObj} = this.state;
    return (
      <div className="App row">
        <div className="col-sm-2">
          <Filter />
        </div>
        <div className="col-sm-10">
          <Head
            selectedFilter={selectedFilter}
          />
          <CardWrapper
            data={dataObj.results || []}
          />
        </div>
      </div>
    );
  }
}

