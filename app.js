const Item = (props) => <li>{`Test: ${props.arrayElement}`}</li>;

class ListItems extends React.Component {
  state = {
    items: ["item-1", "item-2", "item-3", "item-4", "item-5"],
  };
  render() {
    const Items = this.state.items.map((item) => (
      <Item key={item} arrayElement={item} />
    ));
    return (
      <ul>
        {/* Component instead of <li> element     */}
        {Items}
      </ul>
    );
  }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
