---
title: 'FlowWatcher QuickStart'
---

# Quick Start

![FlowWatcher Demo](img/flowmeter-results-anim.gif)

## Build FlowWatcher

Build FlowWatcher from source using the golang toolchain.

```bash
git clone https://github.com/srihariniii25/FlowWatcher.git
cd FlowWatcher

# Install libpcap package.
# Ubuntu/Debian:  sudo apt-get install libpcap0.8-dev
# RHEL/Centos:    sudo yum install install libpcap-devel

make
```
or
```
go build cmd/flowmeter.go
```

## Obtain Sample Training Data

```bash
# Download pcap files.
mkdir packets

# Place webgoat.pcap and benign_2017-05-02_kali-normal22.pcap in packets/

# Generate CSVs for flows
./flowmeter -ifLiveCapture=false -fname=webgoat -maxNumPackets=40000000 -ifLocalIPKnown false
./flowmeter -ifLiveCapture=false -fname=benign_2017-05-02_kali-normal22 -maxNumPackets=40000000 -ifLocalIPKnown false
```

## Generate ML parameters and classify packets:

```bash
cd FlowWatcher

python ML_flowmeter.py

cd ../pkg/

./flowmeter -ifLiveCapture=false -fname=webgoat -maxNumPackets=40000000 -ifLocalIPKnown false
./flowmeter -ifLiveCapture=false -fname=benign_2017-05-02_kali-normal22 -maxNumPackets=40000000 -ifLocalIPKnown false
```

## Sample Results

FlowWatcher gives a rich set of features about flows from packet data, and classifies packets as benign or malicious.

| ![FlowWatcher Results](img/flowmeter-results-anim.gif) |
| :--: |
| *FlowWatcher takes packets and returns file with statistics of flows.* |


