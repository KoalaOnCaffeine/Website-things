document.getElementById("form").onsubmit = event => {
    event.preventDefault()

    const data = new FormData(document.getElementById("form"))

    fetch("https://httpbin.org/anything", {
        method: "post",
        body: data // Data to send to the server
    }).then(async value => {
        // What the server sent back
        const res = await value.json()
        document.getElementById("output").textContent = "Output:\n" + JSON.stringify(res["form"])
    })

}