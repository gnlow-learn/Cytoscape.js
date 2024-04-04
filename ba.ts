import type {
    Core,
    EdgeSingular,
    Collection,
    NodeCollection,
    NodeSingular,
} from "https://esm.sh/cytoscape@3.28.1"

const randItem =
(collection:
    | Collection
    | NodeCollection
) =>
collection[Math.floor(Math.random()*collection.length)]

const randHash =
() =>
Math.random().toString(36).substring(2, 7)

export const ba =
(cy: Core) => {
    const randEdge = randItem(cy.$("edge")) as EdgeSingular
    const randNode = randItem(randEdge.connectedNodes()) as NodeSingular

    const newNodeId = randHash()

    randNode.cy().add([
        { data: { id: newNodeId } },
        { data: {
            id: newNodeId+"e",
            source: randNode.id(),
            target: newNodeId,
        } }
    ])
    cy.fit(undefined, 20)
    console.log(randNode.id(), newNodeId)
}