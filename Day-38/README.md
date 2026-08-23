# ⚡ Day 38/50 – Real-Time Bidirectional Data with WebSockets

## 📌 Overview

Today I explored **WebSockets** and learned how to build real-time, bidirectional communication between a browser and a server.

Unlike traditional HTTP requests, WebSockets maintain a **persistent connection**, allowing both the client and server to send data whenever needed.

This project is a simple **real-time WebSocket terminal** where messages are sent to a WebSocket server and received back instantly.

---

## 🎯 Problem Statement

Traditional HTTP follows a request-response model.

The client must continuously ask the server for new information.

For example:

```text
Client → Request → Server
Client ← Response ← Server