28/8/24

1. Electron框架可以开发桌面级应用

### Linux命令行工具

```
chrome http://www.baidu.com
```

`chrome`: 命令名称

`http://www.baidu.com`: 命令参数



#### 常用命令

TBC



### NodeJS初体验

```
node <FILE.js>
```



- Node.js 中不能使用BOM和DOM的API
  - 浏览器的JavaScript
    - 核心ECMAScript
    - <span style="color: red;">Web API: DOM, BOM, AJAX, Storage, console, 定时器 ... </span>
  - Node.js的JavaScript
    - 核心ECMAScript
    - <span style="color: red;">Node API: fs, url, http, util, path, console, 定时器 ... </span>

- Node.js中的顶级对象为`global`不是`window`，也可以用`globalThis`访问



### 2. Buffer

缓冲区，类似于Array的对象，用于表示固定长度的字节序列/内存空间，用于处理二进制数据

- 大小固定，无法调整
- 性能好，直接操作计算机内存
- 每个元素大小 1Byte / 8Bits



See Implementation For:

- Allocation
- Operation 



### 3. 计算机基本组成

#### 组成

CPU 工作产生热量，需要散热器

内存 读写速度快，断电丢失数据

硬盘 读写速度慢，断电不丢失数据

以上三个元器件和显卡都插在<u>主板</u>上

#### 程序运行流程

操作系统：

- Windows
- MacOS
- Linux

操作系统装到硬盘->载入内存->CPU运行->视频信号->显卡->显示器

​									-> 声音信号 -> 声卡 -> 声音播放设备

程序如何运行

- 安装到硬盘
- 程序载入内存->CPU执行->....一样

**Takeaway:**

- 程序一般保存在硬盘中，软件安装的过程就是将程序写入硬盘的过程
- 程序在运行时会加载进入内存，然后有CPU读取并执行程序

#### 进程和线程

Process进程：进行中的程序，程序的一次执行过程

Threads线程：一个进程中执行的一个执行流，一个线程是属于一个进程的

比如奶茶店开门了，一个进程开始运行

奶茶店里的不同员工可以理解为一个一个的线程，一个在服务客人，一个在做饮料，一个在洗水果