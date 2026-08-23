# 🚀 Day 37/50 – Parallel Network Architecture

## 📌 Overview

Today I learned how to improve API performance using JavaScript's `Promise.all()`.

Instead of waiting for multiple API requests one after another, the requests are started at the same time and handled in parallel.

This helps eliminate the **Waterfall Problem** in network requests.

---

## 🎯 Problem Statement

A dashboard may require data from multiple API endpoints:

- 👤 Profile
- 📦 Repositories
- 👥 Followers

### ❌ Sequential Requests

```text
Profile → Repositories → Followers