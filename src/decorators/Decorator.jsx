import React from 'react'
import ErrorBoundary from "../components/ErrorBoundary";


export class DecoratorComponent extends React.Component {
    render() {
        return <ErrorBoundary>{this.props.children}</ErrorBoundary>
    }
}