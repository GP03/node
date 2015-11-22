/**
 * Created by tanakayuuki on 15/11/19.
 */

var socketio = io.connect();
// サーバからのイベント'msg'を受信する
socketio.on('msg', function(data) {
    if(data.user=="main"){
        $("#code").append(data.use+"<br />");
        if(data.use=="SOS機能"){
            document.location.href = "/sos";
        }
        else  if(data.use=="忘れ物機能"){
            document.location.href = "/wasuremono";
        }
        else  if(data.use=="翻訳機能"){
            document.location.href = "/honyaku";
        }
        else  if(data.use=="薬自動投与"){
            document.location.href = "/kusuri";
        }
        else  if(data.use=="健康確認"){
            document.location.href = "/kenkoukanri";
        }
        else  if(data.use=="冒頭"){
            document.location.href = "/boutou";
        }
        else  if(data.use=="食事"){
            document.location.href = "/shokuji";
        }
        else  if(data.use=="決済"){
            document.location.href = "/kessai";
        }
    }
});

//デバイスをコール
function deviceCallStart(data){
    socketio.emit('others', {
        user: "sp",
        url:data
    });
    socketio.send("sp");
};

//機能追加
function deviceAddFunc(name,url){
    socketio.emit('others', {
        user: "spAdd",
        funcName:name,
        url:url
    });
    socketio.send("sp");
};

//管理画面をコール
function adminCallStart(data){
    socketio.emit('others', {
        user: "admin",
        use:data
    });
    socketio.send("admin");
};

//メインをコール
function mainCallStart(data){
    socketio.emit('others', {
        user: "main",
        use:data
    });
    socketio.send("main");
};
