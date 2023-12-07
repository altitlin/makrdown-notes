import React from 'react'

const ButtonImpl = () => <button type='button'>Test button</button>

export const Button = React.memo(ButtonImpl)
