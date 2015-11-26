/**
 * Created by tanakayuuki on 15/11/19.
 */

var socketio = io.connect();
// サーバからのイベント'msg'を受信する
socketio.on('pageIn', function(data) {
    if(data.user=="main"){
        $("#code").append(data.use+"<br />");
        if(data.use=="sos"){
            document.location.href = "/sos";
        }
        else  if(data.use=="wasuremono"){
            document.location.href = "/wasuremono";
        }
        else  if(data.use=="honyaku"){
            document.location.href = "/honyaku";
        }
        else  if(data.use=="kusuri"){
            document.location.href = "/kusuri";
        }
        else  if(data.use=="kenkoukanri"){
            document.location.href = "/kenkoukanri";
        }
        else  if(data.use=="boutou"){
            document.location.href = "/boutou";
        }
        else  if(data.use=="shokuji"){
            document.location.href = "/shokuji";
        }
        else  if(data.use=="kessai"){
            document.location.href = "/kessai";
        }
    }
});

//デバイスをコール
function deviceCallStart(scene,data){
    socketio.emit('others', {
        user: scene,
        url:data
    });
};

//機能追加
function deviceAddFunc(name,url){
    socketio.emit('others', {
        user: "spAdd",
        funcName:name,
        url:url
    });
};

//管理画面をコール
function adminCallStart(data){
    socketio.emit('others', {
        user: "admin",
        use:data
    });
};

//メインをコール
function mainCallStart(data){
    socketio.emit('others', {
        user: "main",
        use:data
    });
};
