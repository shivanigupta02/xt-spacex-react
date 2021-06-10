import React from "react";
import updateFilterOnLoad from "./helper/updateFilterOnLoad";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import Card from "../../components/Card/Card";
import { filtersObj } from "./constant";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: updateFilterOnLoad(filtersObj), // get update filter and set in state
      spacexdata: [],
    };
  }

  componentDidMount() {
    this.fetchSpacexdata(); // to avoide state state before mount
  }

  fetchSpacexdata = (queryString) => {
    let baseUrl = "https://api.spacexdata.com/v3/launches?limit=100";
    let filterString = [];

    // eslint-disable-next-line array-callback-return
    this.state.filters.map(({ selectedIndex, name, filters }) => {
      if (selectedIndex !== false) {
        filterString.push(`${name}=${filters[selectedIndex]}`);
      }
    });

    if (filterString.length > 0) {
      baseUrl += "&" + filterString.join("&");
      window.history.pushState("", "", "?" + filterString.join("&")); // push url in history without refresh
    }

    fetch(baseUrl)
      .then((response) => response.json())
      .then((result) =>
        this.setState((state) => ({ ...state, spacexdata: result }))
      );
  };

  updateSelectedFilter = (filterIndex, selectedIndex) => {
    this.setState(
      (state) => {
        const { filters } = state;
        filters[filterIndex].selectedIndex = selectedIndex;
        return { ...state, filters }; // return update state
      },
      () => {
        this.fetchSpacexdata();
      }
    );
  };

  render() {
    const { filters, spacexdata } = this.state;

    return (
      <div className="xt-app">
        <div className="heading">SpaceX Launch Programs</div>
        <section className="xt-app-container">
          <FilterPanel
            filters={filters}
            updateSelectedFilter={this.updateSelectedFilter}
          />
          <main className="xt-app-content">
            {spacexdata.map((record, cardIndex) => (
              <Card {...record} key={cardIndex} />
            ))}
          </main>
        </section>
        <footer>
          <b>Developed by:</b>
          <br /> Shivani
        </footer>
      </div>
    );
  }
}

export default Home;
