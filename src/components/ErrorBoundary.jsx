import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        console.log("get derived state from error")
        return this.setState({
            error: error,
            errorInfo: {}
        });
    }

    componentDidCatch(error, errorInfo) {
        console.log("Component did catch")
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>ERROR INFO</div>
            );
        }
        return this.props.children;
    }
}
