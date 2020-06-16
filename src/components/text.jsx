import React from "react"
import { useEffect } from "react"

export default () => {
    let a = 0
    useEffect(() => {
        function increment() {
            console.log("Use effect")
            a = 5
        }

        increment()
    }, [])

    console.log("increment", a)
    if (a == 5) throw new Error("out")
    return <div>This is a text</div>
}