import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log("Derived state from error")
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log("Derived state from error")
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export const DecoratorComponent = ({ children }) => {
    return <ErrorBoundary><div style={{ border: "22px solid green" }}>{children}</div></ErrorBoundary>
}