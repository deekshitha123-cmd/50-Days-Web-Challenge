# 🚀 Day 28 – Real-Time API Search & Network Throttling

## 📌 Overview

Day 28 of my **50 Days Web Development Challenge with Synexus**.

Today, I upgraded the GitHub Contributor Lookup application from button-based searching to a **real-time search experience**.

Instead of waiting for the user to click a Search button, the application listens to the user's typing and automatically searches GitHub after the user stops typing for **500 milliseconds**.

To prevent unnecessary API requests and protect against GitHub API rate limits, I implemented the **Debounce pattern**.

I also implemented **AbortController** to cancel previous API requests when a new search begins.

---

## 🎯 Problem Statement

Sending an API request for every keystroke can create unnecessary network traffic.

For example, when a user types:

```text
JavaScript