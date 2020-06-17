import React from "react";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        console.log("LOG de componentDidCatch")
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return <div>ERROR BOUNDARY TRIGGERED</div>;
        }
        // Normally, just render children
        return this.props.children;
    }
}
