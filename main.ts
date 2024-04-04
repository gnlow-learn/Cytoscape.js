import cytoscape from "https://esm.sh/cytoscape@3.28.1"

const $container = document.createElement("div")
document.body.append($container)
$container.setAttribute("style", "height: 100%;")

const cy = cytoscape({
    container: $container,
    elements: [
        { data: { id: "a" } },
        { data: { id: "b" } },
        { data: {
            id: "ab",
            source: "a",
            target: "b",
        } },
    ]
})


cy.add([
    { data: { id: "c" } },
])
cy.fit(undefined, 20)