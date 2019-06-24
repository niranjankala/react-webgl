import React from "react";

export class Home extends React.Component {
  componentDidMount() {
    this.props.getPageTitle('');
  }
  render() {
    return <div />;
  }
}
export default Home;
