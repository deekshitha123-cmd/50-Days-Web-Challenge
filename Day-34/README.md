# 🛡️ Day 34: Network Resilience — Retries & Exponential Backoff

## 📌 Overview

Today, I implemented a network resilience system using Vanilla JavaScript.

Instead of immediately failing when a network request encounters a temporary problem, the application automatically retries the request with increasing delays between attempts.

This technique is known as **Exponential Backoff**.

---

## 🎯 Problem Statement

Network connections can temporarily fail due to:

- Unstable internet connections
- Server errors
- Temporary network interruptions
- Mobile network instability

A normal `fetch()` request may fail immediately.

To make applications more reliable, we can automatically retry failed requests before showing an error to the user.

---

## 🚀 What I Built

I created a reusable:

```javascript
fetchWithRetry()