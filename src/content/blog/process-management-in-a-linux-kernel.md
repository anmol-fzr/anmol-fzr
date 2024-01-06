---
title: "Process Management in a Linux Kernel"
description: "Process Management, Time Slice, Context Switching explained"
keywords: "astro view-transition new api web-api animation transition"
pubDate: "Jan 07 2024"
isPublished: true
heroImage: "/blog/must-know-linux-commands.webp"
---

Process Management describes starting, pausing, resuming, scheduling and terminating of the process in the kernel. Starting and terminating the process is pretty straight forward. However describing how a process use CPU in the normal course is pretty interesting.

Let's say your machine has single core CPU and have a web browser, music player and a terminal opened at the same time. These process might appear to be running at the same time parallelly. but it's not actually true. each process is given a specific time interval to perform operations using the CPU, after the time end the next process takes the turn and this keeps on .The act of pausing the current process and running the next process is called context switching.

The time period given to a program to perform operation is called as time slice. the kernel decides the time slice, switch CPU is user mode and then give control of CPU to the next process. In this manner, multiple process run for a fraction of second, as the time span is too short the human can even judge that resulting in the process to be appear as running parallelly or as to be the CPU is multitasking

The kernel is responsible for context switching. we will understand the context switch in example and step wise/

1. The CPU interrupts the currently running process on the basis of the internal time and gives back the control to the kernel.
2. The kernel then stores the state of the CPU and memory for the process which was just interrupted.
3. The kernel then performs any tasks than came up between the preceeding time slice ( such as any I/O operation )
4. The kernel then analysis the list of operations to start next.
5. The kernel prepapers the CPU for the next process and then the main memory for the same.
6. The kernel tells the CPU how long time slice for the next process
7. Then kernel switches CPU to the user mode and gives control of CPU to the process.

Context Switching, defines that the kernel runs between the process.

In a multi core CPU this context switching becomes more complicated, as we have multiple CPU we can't just run a process on a CPU and then pause and give that process control of another CPU.

### What's Next ?

In the upcoming blog we will discuss [The Memory Management in the Linux Kernel](/blog/memory-management-in-a-linux-kernel)
