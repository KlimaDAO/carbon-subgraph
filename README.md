# carbon-subgraph
Polygon Bridged Carbon Analytics

The main subgraph that houses all of the data components indexed by a graph node.

## Local Installation

First, deploy a Graph node locally. The most straightforward option is to use
`docker-compose` from the [graph-node](https://github.com/graphprotocol/graph-node/tree/master/docker#docker-compose) repo.
Make sure to update the `ethereum` environment variable of `graph-node` in `docker/docker-compose.yml` to `matic:https://polygon-rpc.com/`.

For information on getting started with a Graph Node see this link: https://github.com/graphprotocol/graph-node/blob/master/docs/getting-started.md

Install any needed packages.
```
npm i
```

Create the Klima subgraph.
```
npm run create-local
```

Finally deploy the subgraph and start indexing.
```
npm run deploy-local
```

## Local Navigation and Querying

After the subgraph is deployed, navigate to http://127.0.01:8000/subgraphs/name/name-of-subgraph. You can then create GraphQL queries and view the returned data.

## Deploy to Self-Hosted Graph Node

In order to deploy the Subgraph to a self-hosted Graph Node, you need to have a URL for both IPFS and Graph Node API URLs, typically of the following form:
- IPFS: `http://ipfs.example.xyz:5001/`
- Graph Node: `http://graph.example.xyz:8020`

If this is the first time this particular Subgraph has been deployed on this Graph node, you must first run:

```bash
npm run create-args --node=http://graph.example.xyz:8020/
```

Once the Subgraph exists on this node, run the following command to deploy or upgrade:

```bash
npm run deploy-args --ipfs=http://ipfs.example.xyz:5001/ --node=http://graph.example.xyz:8020/
```

This command will prompt you to enter a version for deployed Subgraph. If you'd prefer to provide the version non-interactively, try this variant:

```bash
npm run deploy-version --ipfs=http://ipfs.example.xyz:5001/ --node=http://graph.example.xyz:8020/ --label=v1.2.3
```

## Deploy to Hosted Service

To deploy the Subgraph on the Graph Network Hosted Service under a specified `name` within a specified `user` account, use the following command:

```bash
npm run deploy-hosted --path=user/name
```

## Deployed Hosted Service Subgraphs

* Polygon Bridged Carbon: [Staging](https://thegraph.com/hosted-service/subgraph/klimadao/staging-polygon-bridged-carbon) | [Production](https://thegraph.com/hosted-service/subgraph/klimadao/polygon-bridged-carbon)
* Ethereum Bridged Carbon: [Staging](https://thegraph.com/hosted-service/subgraph/klimadao/staging-ethereum-bridged-carbon) | [Production](https://thegraph.com/hosted-service/subgraph/klimadao/ethereum-bridged-carbon)
* Celo Bridged Carbon: [Staging](https://thegraph.com/hosted-service/subgraph/klimadao/staging-celo-bridged-carbon) | [Production](https://thegraph.com/hosted-service/subgraph/klimadao/celo-bridged-carbon)
