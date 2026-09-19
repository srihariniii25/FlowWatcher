[![GitHub stars](https://img.shields.io/github/stars/srihariniii25/FlowWatcher)](https://github.com/srihariniii25/FlowWatcher/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/srihariniii25/FlowWatcher)](https://github.com/srihariniii25/FlowWatcher/issues)

# FlowWatcher

FlowWatcher is an experimental utility built for analysing and classifying packets by looking at packet headers.

## Primary design goals:

FlowWatcher aims to:

- **Classify packets and flows as benign or malicious with high true positives (TP) and low false positives (FP)**.
- **Use the labeled data to reduce amount of traffic requiring deeper analysis**.

Additionally, FlowWatcher categorizes packets into flows and shows a rich ensemble of flow data and statistics.

## Architecture

![FlowWatcher Workflow](./FlowWatcher-architecture.svg)

![FlowWatcher Network Architecture](./FlowWatcher-network-architecture.svg)

## When to use FlowWatcher
Use FlowWatcher if you wish to build and operate machine-learning models on network packet data.

## Quick Start

For full instructions, refer to the [project documentation](quickstart.md).


## Security and Support

Please file security reports and support questions through the repository's GitHub issue tracker.
