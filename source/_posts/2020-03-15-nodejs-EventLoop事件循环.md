---
title: nodejs-EventLoop事件循环
date: 2020-03-15 14:57:00
tags:
    - Node.js
    - Nodejs原理
---




什么是事件循环机制（Event Loop）？



## 参考资料

>The Node.js JavaScript code runs on a single thread. There is just one thing happening at a time.
This is a limitation that's actually very helpful, as it simplifies a lot how you program without worrying about concurrency issues.
[The Node.js Event Loop（官网）](https://nodejs.dev/the-nodejs-event-loop)


>The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.
[The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#the-node-js-event-loop-timers-and-process-nexttick)

