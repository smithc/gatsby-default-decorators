import React, { useEffect } from "react"

export default function Text(props) {
    useEffect(() => {
        function increment() {
            throw new Error("MYERROROSTIAS")
        }

        increment()
    }, [])

    return <div>This is a text</div>
}