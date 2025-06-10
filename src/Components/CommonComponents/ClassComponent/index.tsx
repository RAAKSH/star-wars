import { PureComponent } from "react";

export default class ClassComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleDecreaseClick=()=>{
    this.setState((prevState)=>({count: prevState.count-1}))
  }

  reset=()=>{
    this.setState((prevState)=>({count:0}))
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} className="px-3 py-4 p-3 m-1 bg-orange-50 border-2">Increment</button>
      

        <button onClick={this.handleDecreaseClick} className="px-3 py-4 p-3 m-1 bg-orange-50 border-2">decrement</button>

        <button onClick={this.reset} className="px-3 py-4 p-3 m-1 bg-orange-50 border-2">reset</button>

        <span>Count:   {this.state.count}</span>
      </>
    );
  }
}
