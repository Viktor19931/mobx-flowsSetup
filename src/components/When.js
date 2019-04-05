// @flow

import * as React from 'react'

type WhenProps = {
    children: React.Node,
    is: boolean,
}

const When = ({children, is}:WhenProps) => 
is ? children : null

export default When
