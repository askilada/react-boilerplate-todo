import * as React from 'react'

export interface Props {}
export interface State {}

export class TopWithInput extends React.Component<Props,State> {
    constructor(props, context) {
        super(props, context)
        
    }

    render() {
        return (
            <div>Hello world</div>
        )
    }
}