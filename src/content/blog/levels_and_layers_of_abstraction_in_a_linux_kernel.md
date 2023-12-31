---
title: "Levels and Layers of Abstraction in a Linux Kernel"
description: "Levels and Layers of Abstraction in a Linux Kernel"
keywords: "Linux kernel, abstraction layers, operating system architecture, linux internals, user space vs. kernel space"
pubDate: "Jan 05 2023"
isPublished: false
heroImage: "/blog/must-know-linux-commands.webp"
---

In UNIX/Linux Systems Abstraction is used to split computing systems into components. These Components are classified into level and layers, classification based on where these components sit between the user and the hardware space. Web Browsers, Music Players and other user application at the top of the layer and at the bottom we have hardware storing the 0's and 1's. The Operating System Occupies many of these layers in between.

A linux system mainly has 3 layers

- User Processes
- Linux Kernel
- Hardware

![](/blog/linux_kernel.svg)

## Hardware

Hardware is at the base. Hardware includes the Processor ( Central Processing Unit ) for computations, Main Memory to read and write data,
Storage Device such as Hard Disk Drives, Solid State Drives etc... Network interface , and Video Cards etc... are also part of Hardware

## Linux Kernel

The next level up is the Linux Kernel. Linux Kernel is the core of the operating system stored in Main Memory. Kernel tells the Operation System where to look for next instruction. Kernel acts as a mediator, and controls the hardware ( especially the Main Memory ). Kernel is the layer between hardware and the running programs.

## User Process

The running programs that the kernel manages are collectively reffered as the user Processes ( like a web server runs as a user process )

### Kernel Process vs User Process

The kernel runs in the kernel mode and the user process runs in the user mode, The processes running in the kernel mode has unrestricted access to the main memory. This is powerfull and dangerous privilege to crash the operting system. Whereas the user mode process are managed by the kernel. The part of main memory on kernel can access is reffered as kernel space.
User mode on the other hand had very limited part of the main memory to interact with and the safe CPU operations in this way if a user process crashes the rest of the system can run smoothly.
