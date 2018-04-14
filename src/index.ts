import { App } from 'app'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

    
ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
)

console.log("did run render")