// 1. import
const http = require('http');

// 2. create http object
const server = http.createServer((request, response) => {
    response.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    th, td{
                        padding: 20px 40px;
                    }
                    table tr:nth-child(odd){
                        background: #aef;
                    }
                    table tr:nth-child(even){
                        background: #fcb;
                    }
                    table, td{
                        border-collapse: collapse;
                    }
                </style>
            </head>
            <body>
                <table border='1'>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>

                <script>
                    // 1) Get all tds
                    let tds = document.querySelectorAll('td');
                    // 2) Traverse
                    tds.forEach(item => {
                        item.onclick = function(){
                            this.style.background = '#222';
                        };
                        });
                </script>
            </body>
        </html>
        `)
    response.end()

})

// 3. set port listen
server.listen(9000, () => {
    console.log("Server Start...")
})


