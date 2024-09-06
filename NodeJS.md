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

https://nodejs.cn/api/

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



### 4. fs 模块

file system

- 和硬盘文件交互

See Implementation <u>(03. File System)</u> For: 

```javascript
/* Import fs API library */
const fs = require('fs');
```

1. Write to Files (Sync / Async) `writeFile()`
2. Append to Files (Sync / Async / writeFile) `appendFile()`
3. Use <u>Write Stream</u> to write files `createWriteStream(), ws.write(), ws.close()`
4. Read File (Async / Sync) and readStream `readFile(), createReadStream(), rs.on(event, ()=>{})`
5. How to Copy a file  (2 Options) `read&write; readStream&writeStream`
6. Rename and Move `rename()`
7. Delete File `unlink(), rm()`
8. Directory Operation `mkdir(), readdir(), rmdir(), rm()`
9. Check file information / status `stat()`
10. Relative and Absolute Path, relative absolute path
11. Practise using `fs`



### 5. Path 模块

See Implementations <u>(04. Path)</u>For:

1. 拼接组成最终路径 `path.resolve()`
2. path分隔符 `path.sep`
3. path parser `path.parse()`
4. Get File Name `path.basename()`
5. Get Dir Name `path.dirname()`
6. Get File Extension Name `path.extname()`



### 6. HTTP 协议

浏览器与服务器通信的协议

**请求**

请求行Request Line

- 请求方法 GET...
- URL Uniform Resource Location
  - 协议名称 https://
  - 主机名 Domain Name
  - 端口号 :118
  - 路径 /search
  - 查询字符串 /?keyword=apple&color=red
- HTTP协议版本号
  - 1.1 - 2 - 3

请求头Request Header

- 一系列键值对组成 key value pairs
  - key : value 

请求体Request Body

- JSON



**响应**

1. 响应行
   1. 版本号 ｜ 状态码 ｜ 响应状态描述
2. 响应头
3. 空行
4. 响应体
   1. 常见格式：HTML，CSS，JS，图片，视频，JSON



### 7. IP

- IP标识网络设备，实现设备通信

- IP地址，数字标识，形成数据通信

- 31bit的2进制数字，拆分成8Bit一组，转成10进制，用.分开

**共享IP**

- 设备通过路由器连接在了一起，形成了局域网
- 路由器分配的IP地址 - 局域网IP/私网IP
- 连接互联网后，路由器还获得 广域网IP/公网IP
  - 设备共享一个公网IP、



**本地回环IP地址**

127.0.0.1

永远指向本机



### 8. 端口

- <u>应用程序的数字标识</u>
- 0 - 65536个端口
- 一个应用程序可以拥有一个至多个端口



- <u>作用：不同主机应用程序之间的通信</u>
- IP:PortNo. -> IP:PortNo.
  - 126.35.60.48**:88** -> 102.31.62.18**:21**



### 9. HTTP模块

#### Create HTTP

```javascript
// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    response.end("Hello HTTP Server");
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})
```



#### Extract Request Message

- Request Line
- Request Header

```javascript
// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Get Request Method
    console.log(request.method);        // GET

    // 2) Get Request URL
    // It only contains the path and query string(路径与查询字符串)
    console.log(request.url)            // /

    // 3) Get HTTP Version
    console.log(request.httpVersion)    // 1.1

    // 4) Get Request Header
    console.log(request.headers)        // Headers
    // console.log(request.headers.host)

    response.end("Hello HTTP Server");
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})
```

- Request Body (POST)

```javascript
// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Declare variable
    let body = "";

    // 2) Bind Data Event, Request is a readStream by default
    request.on('data', (chunk)=>{
        body = body + chunk.toString();     // username=123123&password=123123
    })
    
    // 3) End
    request.on('end', ()=>{
        console.log(body);
        response.end("Hello HTTP Server");
    })
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})
```

- Query String (GET)

```javascript
// 1. import
const http = require('http');
// const url = require('url');

// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Create URL obj
    let url = new URL(request.url, 'http://127.0.0.1')
    console.log(url)
    // 2) Get Path
    let path_name = url.pathname;
    console.log("path_name: " + path_name)          // path_name: /search

    // 3) Get Query String
    let query_string = url.searchParams;
    console.log(query_string);                      // URLSearchParams { 'name' => 'adam', 'num' => '7' }
    let name = query_string.get('name')
    let num = query_string.get('num')
    console.log(name + num);                        // adam7
    response.end('URL New')
})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})
```



#### Setup Response Message

- 状态码：statusCode
- 状态信息：statusMessage (Rare)
- setHeader
- 响应体：write()

```javascript
// 1. import
const http = require('http');
// 2. create http object
const server = http.createServer((request, response) => {
    // 1) Set Status Code
    response.statusCode = 200;
    // response.statusCode = 404;
    // 2) Set Status Message
    response.statusMessage = "iloveyou"
    // 3) Set Response Header
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('my-header', 'This is my header')
    response.setHeader('same-header', ['a', 'b', 'c'])
    // 4) Set Response Body
    response.write('i ')
    response.write('love ')
    response.write('you ')
    response.end()
})
// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})
```

- Absolute / Relative Path
- mime



### 10. 模块化

**Modularization定义**

- a software design principle
- breaking down a complex system into smaller, independent, and manageable parts called modules



**Modularization好处：**

- **Maintainability（可维护性）**: Modular code is easier to update and debug since changes in one module don't affect others.  
  模块化代码更容易更新和调试，因为一个模块的更改不会影响其他模块。

- **Reusability（可重用性）**: Modules can be reused across different projects, saving time and reducing duplication.  
  模块可以在不同项目中重复使用，节省时间并减少重复编码。

- **Easier Testing（更容易测试）**: Modules can be tested independently, making it simpler to identify and fix issues.  
  模块可以独立测试，更容易发现和解决问题。

- **Avoiding Naming Conflicts（避免命名冲突）**: Modules encapsulate their functionality, reducing the risk of global naming conflicts in the codebase.  
  模块封装了其功能，减少了代码库中全局命名冲突的风险。



#### Export

```javascript
// Function Declaration
function cook(){
    console.log("Start Cooking...")
}
function clean(){
    console.log("Start Cleaning...")
}

// 1) Export: module.exports = {}
module.exports = {
    cook,
    clean
}
// 2) Export: exports.<> = <>
exports.cook = cook;
exports.clean = clean;
```

`module.exports` = string / number / function ....

- can export any type of variable

`exports` = .... is unable to export

- only `module.exports is` exported, `exports = module.exports = {}`
- `exports.<..>` is add an attribute to `module.exports`

​    

#### Import

- **`require` is not affected by the working directory.**
  `require` 不受工作目录的影响。

- **`./` or `../` cannot be omitted for user-created modules.**
  对于自定义模块，路径中的 `./` 或 `../` 不能省略。

- **When requiring `.js` or `.json` files, the file extension can be omitted (e.g., `./01_me`), and Node.js will first look for a `.js` file, then a `.json` file.**
  在导入 `.js` 或 `.json` 文件时，文件扩展名可以省略（如 `./01_me`），Node.js 会先查找 `.js` 文件，然后再查找 `.json` 文件。

- **Files with other extensions will be treated as `.js` files.**
  导入其他扩展名的文件时，会被当作 `.js` 文件处理。
- **For built-in modules like `http` or `fs`, `./` or `../` is not needed.**
  对于内置模块如 `http` 或 `fs`，不需要使用 `./` 或 `../`。



**Import A Folder**

如果是一个文件夹，Node.js 会首先检查文件夹中的 `package.json` 文件的 `main` 属性，找到要导入的文件。

如果 `package.json` 文件不存在或 `main` 属性没有定义，Node.js 会依次查找以下文件：

1. `index.js`
2. `index.json`



### 11. 包管理工具

```
// 创建一个空目录，然后以此目录作为工作目录
npm init
```

- package.json 是包的配置文件，每个包都必须要有 package.json

- 网站搜索npm包 网址是 https://www.npmjs.com/

```
# 格式
npm install <包名>
npm i <包名>

# 示例
npm install uniq
npm i uniq
```

`node_modules` 文件夹

`package-lock.json` 包的锁文件

- 安装 uniq 之后， uniq 就是当前这个包的一个 依赖包 ，有时会简称为 依赖
- 比如我们创建一个包名字为 A，A 中安装了包名字是 B，我们就说 B 是 A 的一个依赖包 ，也会说 A 依赖 B

















