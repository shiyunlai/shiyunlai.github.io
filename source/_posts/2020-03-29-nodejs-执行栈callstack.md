---
title: nodejs-执行栈callstack
date: 2020-03-29 11:37:35
tags:
---


本文对Node.js中的执行栈（Call Stack）学习和认知






核心：
1、执行栈是运行程序代码的地方；
2、Node.js主线程执行完栈中所有内容后，紧接着会执行“nextTick队列”中的内容；
3、为了简化Node.js运行机制复杂度，将每个需要执行的程序（current function、callback等除了交给Libuv处理的异步I/O任务）都会放回执行栈来运行；

在阅读官网文档如下内容时，不太理解：
>You may have noticed that process.nextTick() was not displayed in the diagram, even though it's a part of the asynchronous API. This is because process.nextTick() is not technically part of the event loop. Instead, the nextTickQueue will be processed after the current operation is completed, regardless of the current phase of the event loop

经过多次代码运行和文档推敲，我这么理解process.nextTick()的执行时机：
>每个需要同步执行的程序都会被放回Call Stack中执行，每次Call Stack被清空后，都会伴随一次nextTick执行时机！






----
参考： 
- [The Node.js Event Loop](https://nodejs.dev/the-nodejs-event-loop)一文中通过程序在执行栈中的流转，直观的展示了Node.js借助执行栈执行程序的过程。

