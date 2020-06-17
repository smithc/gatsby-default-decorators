import React, { useEffect } from "react"

export default () => {
    useEffect(() => {
        function increment() {
            throw new Error("MYERROROSTIAS")
        }

        increment()
    }, [])

    return <div>This is a text</div>
}