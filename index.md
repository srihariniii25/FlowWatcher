---
title: 'Introduction to FlowWatcher'
---

# FlowWatcher

FlowWatcher is an experimental utility built to analyse and classify packets by looking at packet headers.

## Primary design goals

  * Classify packets and flows as benign or malicious with high true positives (TP) and low false positives (FP)
  * Use the labeled data to reduce amount of traffic requiring deeper analysis

FlowWatcher categorizes packets into flows and shows a rich ensemble of flow data and statistics.

## Architecture

| ![FlowWatcher Architecture](img/flowmeter-architecture.svg) |
| :--: | 
| *FlowWatcher takes packets and returns file with statistics of flows.* |


| ![FlowWatcher Classification](img/flowmeter-classification.png) |
| :--: |
| *FlowWatcher takes packets and returns file with statistics of flows and classifies packets as benign or malicious.* |


## When to use FlowWatcher

FlowWatcher is an experimental utility for rapidly filtering traffic based on lightweight metadata such as arrival time, packet size, and flow length. When inspecting large datasets or live datastreams, its calculations could discard flows that have a very high probability of being benign. The resulting packets could then be processed in depth to look for indicators of attack.