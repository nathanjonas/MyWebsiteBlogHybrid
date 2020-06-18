const axios = require("axios");
const React = require("react");

export default class AllPlayers extends React.Component {
  pageCount = 0;

  state = {
    players: [],
    filter: "",
  };

  componentDidMount() {
    axios.get("https://www.balldontlie.io/api/v1/players").then((res) => {
      const players = res.data.data;
      const pageCount = res.data.meta.total_pages;
      this.setState({ pageCount });
      this.setState({ players });
    });

    // for (let i = 0; i <= this.state.pageCount; i++) {
    //   axios
    //     .get(`https://www.balldontlie.io/api/v1/players?page=${i}`)
    //     .then((res) => {
    //       console.log(res.data.data);
    //       this.setState({ players.concat(res.data.data) });
    //     });
    // }
  }

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, players } = this.state;

    const filteredData = players.filter((item) => {
      return Object.keys(item).some((key) =>
        typeof item[key] === "string"
          ? item[key].toLowerCase().includes(filter.toLowerCase())
          : ""
      );
    });

    return (
      <div>
        <div id="searchBar">
          <input
            type="text"
            value={filter}
            onChange={this.handleChange}
          ></input>
        </div>
        {filteredData.map((p) => (
          <div>
            {p.first_name} {p.last_name}
          </div>
        ))}
      </div>
    );
  }
}
