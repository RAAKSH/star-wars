import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hassError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <>Oops ! Error has occrured</>;
    }

    return this.props.children;
  }
}
