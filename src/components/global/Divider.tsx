import React from 'react'

interface props {
    color?: string
    size?: 'small' | 'medium' | 'big'
}

export default function Divider({ color, size = "small" }: props) {
    return (
        <div
            style={{
                borderWidth: size == 'small' ? 1 : size == 'medium' ? 2 : size == 'big' ? 3 : 0,
                borderColor: color
            }}
        ></div>
    )
}
