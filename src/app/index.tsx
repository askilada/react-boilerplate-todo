import * as React from 'react'
import { TopWithInput  } from './components/top-with-input'

export interface Props {}
export interface State {}

export class App extends React.Component<Props,State> {
    
    constructor(props, context) {
        super(props, context)
    }
    
    render() {
        return (
            <div>
                <TopWithInput  />
            </div>
        )
    }
    
}