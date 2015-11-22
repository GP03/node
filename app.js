// インポート
//express-sample/app.js
var express = require('express');
var app = express();
var fs = require("fs");
var path = require('path');

// 定数
var PORT = 1337;
var HOSTNAME = "localhost";

//使用するディレクトリ
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'view')));

//ルーティングの設定
app.get('/', function (req, res) {
    res.sendFile(__dirname +'/index.html');
});
app.get('/sp_add', function (req, res) {
    res.sendFile(__dirname +'/key.html');
});
app.get('/sp', function (req, res) {
    res.sendFile(__dirname+'/sp.html');
});
app.get('/admin', function (req, res) {
    res.sendFile(__dirname+'/admin.html');
});
//機能画面ルーティング
app.get('/boutou', function (req, res) {
    res.sendFile(__dirname+"/view/main/boutou.html");
});
app.get('/honyaku', function (req, res) {
    res.sendFile(__dirname+"/view/main/honyaku.html");
});
app.get('/kenkoukanri', function (req, res) {
    res.sendFile(__dirname+"/view/main/kenkoukanri.html");
});
app.get('/kusuri', function (req, res) {
    res.sendFile(__dirname+"/view/main/kusuri.html");
});
app.get('/kusuri2', function (req, res) {
    res.sendFile(__dirname+"/view/main/kusuri2.html");
});
app.get('/shokuji', function (req, res) {
    res.sendFile(__dirname+"/view/main/shokuji.html");
});
app.get('/sos', function (req, res) {
    res.sendFile(__dirname+"/view/main/sos.html");
});
app.get('/wasuremono', function (req, res) {
    res.sendFile(__dirname+"/view/main/wasuremono.html");
});
app.get('/kessai', function (req, res) {
    res.sendFile(__dirname+"/view/main/kessai.html");
});

// サーバポート指定
var server = app.listen(PORT);
// サーバrunning確認
console.log('Server running at http://'+HOSTNAME+':'+PORT);
console.log(__dirname);

//同期通信
var io = require("socket.io").listen(server);
io.sockets.on("connection", function (client) {
    // クライアントからのイベント'others'を受信する
    client.on('others', function(data) {
        console.log(data);
        // 自分以外の全クライアントにブロードキャストする
        client.broadcast.emit('msg', data);
        //io.sockets.emit('msg', data);
    });
    client.on('disconnect', function() {
        console.log('disconnect');
    });
    client.on("message", function(a) {
    // 送った自身以外のクライアントへsend
    console.log(a);
    client.broadcast.send("きたか？ーーーーーー");
  });
});
