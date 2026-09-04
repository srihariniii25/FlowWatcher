---
title: 'Introduction to Deepfence Flowwatcher'
---

# Deepfence Flowwatcher

Deepfence Flowwatcher is an experimental utility built to analyse and classify packets by looking at packet headers. We use Deepfence Flowwatcher internally to quickly analyse and label packets.

## Primary design goals

  * Classify packets and flows as benign or malicious with high true positives (TP) and low false positives (FP)
  * Use the labeled data to reduce amount of traffic requiring deeper analysis

Deepfence Flowwatcher categorizes packets into flows and shows a rich ensemble of flow data and statistics.

## Architecture

| ![Deepfence Flowwatcher Architecture](img/flowmeter-architecture.svg) |
| :--: | 
| *Deepfence Flowwatcher takes packets and returns file with statistics of flows.* |


| ![Deepfence Flowwatcher Classification](img/flowmeter-classification.png) |
| :--: |
| *Deepfence Flowwatcher takes packets and returns file with statistics of flows and classifies packets as benign or malicious.* |


## When to use Deepfence Flowwatcher

Deepfence Flowwatcher is an experimental utility. One area of investigation to better understand how to rapidly filter traffic based on lightweight metadata such as arrival time, packet size, and flow length. When inspecting large datasets or live datastreams, Deepfence Flowwatcher calculations could discard flows that have a very high probability of benign. The resulting packets could then be processed in depth to look for indicators of attack.