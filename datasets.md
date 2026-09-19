---
title: Datasets
---

# FlowWatcher Datasets

FlowWatcher takes packets as input, derives a rich set of features, constructs flows on the basis of these features and uses machine learning to classify the ensuing flows as malicious or benign.

FlowWatcher can process live packets or can analyze offline packets.

The tests in the repo used the following sample packet datasets:

### Benign Packets

```bash
# Place a benign packet capture in this directory.
```

### Malicious Packets

```bash 
# Place a malicious packet capture in this directory.
```    

## Other Datasets

Additionally, one can use sample data from the sources mentioned below or gather packet captures using any compatible pcap tool.

 * **Benign:** 
    * [Canadian Institute of Cybersecurity](https://www.unb.ca/cic/datasets/)
    * [Stratosphere Lab](https://www.stratosphereips.org/datasets-overview) 

 * **Malicious:**
    * [Honeypots (T-pot)](https://awesomeopensource.com/project/telekom-security/tpotce)
    * [Various kinds of honeypots + botnets  (Canadian Institute of Cybersecurity)](https://www.unb.ca/cic/datasets/)
    * [Various kinds of honeypots + botnets (Stratosphere Lab)](https://www.stratosphereips.org/datasets-overview) 
   * [OWASP Webgoat](https://owasp.org/www-project-webgoat/)


