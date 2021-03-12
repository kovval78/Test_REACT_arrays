class ListItems extends React.Component {
  state = {
    items: ["item-1", "item-2", "item-3", "item-4", "item-5"],
  };
  render() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{`Test: ${item}`}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
