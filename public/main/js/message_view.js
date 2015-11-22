/*
 * Copyright (c) 2015 Daisuke Takayama
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Author: Daisuke Takayama
 * URL: http://www.webcyou.com/
 */

var num=0;

'use strict';
(function (global) {
    var document = global.document;

    /*
     * Utility Class
     * @public
     * @param option
     */
    var Utility = (function () {
        function Utility(option) {
            this.keydown = {
                defultEvent: "keydown",
                transitionend: this.whichTransitionEvent(),
                animationend: this.whichAnimationEvent()
            }
        }
        Utility.prototype.whichAnimationEvent = function () {
            var t,
                el = document.createElement("fakeelement");
            var animations = {
                "animation": "animationend",
                "OAnimation": "oAnimationEnd",
                "MozAnimation": "animationend",
                "WebkitAnimation": "webkitAnimationEnd"
            };
            for (t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        };
        Utility.prototype.whichTransitionEvent = function () {
            var t,
                el = document.createElement("fakeelement");
            var transitions = {
                "transition": "transitionend",
                "OTransition": "oTransitionEnd",
                "MozTransition": "transitionend",
                "WebkitTransition": "webkitTransitionEnd"
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    return transitions[t];
                }
            }
        };
        return Utility;
    })();


    /**
     * MessageView constructor
     * @public
     * @param {{data: params}} args
     */
    function MessageView(data, args, util) {
        this.utility = util;
        this.view = document.querySelector(args.view);
        this.contents = document.querySelector(args.contents);
        this.character = document.querySelector(args.character);
        this.characterImg = document.querySelector(args.characterImg);
        this.characterImg2 = document.querySelector(args.characterImg2);
        this.characterImg3 = document.querySelector(args.characterImg3);
        this.messageView = document.querySelector(args.messageView);
        this.message = document.querySelector(args.message);
        this.name = document.querySelector(args.name);
        this.pointer = document.querySelector(args.pointer);

        this.MESSAGE_VIEW_CLASS = this.view.className; //default messageView
        this.MESSAGE_CLOSE_CLASS = args.messageCloseClass; //default .hide
        this.MESSAGE_OPEN_CLASS = args.messageOpenClass; //default .in
        this.CHARACTER_CLASS = this.character.className;
        this.MESSAGE_CLASS = this.message.className;

        this.init.apply(this, arguments);

    }
    MessageView.prototype = {
        init: function () {},

        isSet: function (args) {
            if (args !== undefined && args !== void 0) {
                return true;
            } else {
                return false;
            }
        },

        open: function () {
            if (this.view.classList.contains(this.MESSAGE_CLOSE_CLASS)) {
                this.view.classList.remove(this.MESSAGE_CLOSE_CLASS);
            }
        },

        close: function () {
            this.view.classList.add(this.MESSAGE_CLOSE_CLASS);
            this.message.classList.add(this.MESSAGE_OPEN_CLASS);
            this.character.classList.add(this.MESSAGE_OPEN_CLASS);
        },

        commentChange: function (data) {
            this.message.innerHTML = '';
            this.message.innerHTML = data;
            this.messageView.classList.remove(this.MESSAGE_OPEN_CLASS);
        },

        characterChange: function (data) {
            var that = this;
            if (data && data.img_url) {
                this.characterImg.src = data.img_url;
                setTimeout(function () {
                    that.character.className = that.CHARACTER_CLASS;
                    that.character.addEventListener(that.utility.keydown.transitionend, function character() {
                        that.messageView.className = that.MESSAGE_CLASS;
                        this.removeEventListener(that.utility.keydown.transitionend, character, false);
                    });
                }, 80);
            } else {
                this.characterImg.src = "";
                that.character.className = that.CHARACTER_CLASS;
            }
        },

        characterChange2: function (data) {
            var that = this;
            if (data && data.img_url2) {
                this.characterImg2.src = data.img_url2;
                setTimeout(function () {
                    that.character.className = that.CHARACTER_CLASS;
                    that.character.addEventListener(that.utility.keydown.transitionend, function character() {
                        that.messageView.className = that.MESSAGE_CLASS;
                        this.removeEventListener(that.utility.keydown.transitionend, character, false);
                    });
                }, 80);
            } else {
                this.characterImg2.src = "";
                that.character.className = that.CHARACTER_CLASS;
            }
        },

        characterChange3: function (data) {
            var that = this;
            if (data && data.img_url3) {
                this.characterImg3.src = data.img_url3;
                setTimeout(function () {
                    that.character.className = that.CHARACTER_CLASS;
                    that.character.addEventListener(that.utility.keydown.transitionend, function character() {
                        that.messageView.className = that.MESSAGE_CLASS;
                        this.removeEventListener(that.utility.keydown.transitionend, character, false);
                        });
                   }, 80);
               } else {
                this.characterImg3.src = "";
                that.character.className = that.CHARACTER_CLASS;
                }
        },

        nameChange: function (data) {
            this.name.innerHTML = data.name;
        },

        namecolorChange: function (namecolorClassName) {
            if (this.isSet(namecolorClassName) && namecolorClassName !== null) {
                if (this.view.classList.contains(namecolorClassName)) {
                    this.view.classList.remove(namecolorClassName);
                }
            }
            this.view.classList.add(namecolorClassName);
        },

        sideChange: function (sideClassName) {
    if (this.isSet(sideClassName) && sideClassName !== null) {
        if (this.view.classList.contains(sideClassName)) {
            this.view.classList.remove(sideClassName);
        }
    }
    this.view.classList.add(sideClassName);
},

        sideChange2: function (sideClassName) {
            if (this.isSet(sideClassName) && sideClassName !== null) {
                if (this.view.classList.contains(sideClassName)) {
                    this.view.classList.remove(sideClassName);
                }
            }
            this.view.classList.add(sideClassName);
        },

        sideChange3: function (sideClassName) {
            if (this.isSet(sideClassName) && sideClassName !== null) {
                if (this.view.classList.contains(sideClassName)) {
                    this.view.classList.remove(sideClassName);
                }
            }
            this.view.classList.add(sideClassName);
        },

        animateChange: function (animateClassName) {
            if (this.isSet(animateClassName) && animateClassName !== null) {
                if (this.view.classList.contains(animateClassName)) {
                    this.view.classList.remove(animateClassName);
                }
            }
            this.view.classList.add(animateClassName);
        },

        animateChange2: function (animateClassName) {
            if (this.isSet(animateClassName) && animateClassName !== null) {
                if (this.view.classList.contains(animateClassName)) {
                    this.view.classList.remove(animateClassName);
                }
            }
            this.view.classList.add(animateClassName);
        },

        animateChange3: function (animateClassName) {
            if (this.isSet(animateClassName) && animateClassName !== null) {
                if (this.view.classList.contains(animateClassName)) {
                    this.view.classList.remove(animateClassName);
                }
            }
            this.view.classList.add(animateClassName);
        },

        showPointer: function () {
            this.pointer.style.visibility = 'visible';
        },

        hidePointer: function () {
            this.pointer.style.visibility = 'hidden';
        },

        disablePointer: function () {
            this.pointer.style.display = 'none';
        }
    };


    /**
     *	Message constructor
     *	@public
     */
    function Message(args, fn) {
        var that = this,
            option = args.option;

        this.option = {
            view: ".messageView#default",
            contents: ".messageView#default .mv-contents",
            character: ".messageView#default .mv-contents .mv-image.character",
            characterImg: ".messageView#default .mv-contents .mv-image.character img",
            characterImg2: ".messageView#default .mv-contents .mv-image2.character img",
            characterImg3: ".messageView#default .mv-contents .mv-image3.character img",
            messageView: ".messageView#default .mv-contents .mv-comment",
            message: ".messageView#default .mv-contents .mv-comment .val",
            name: ".messageView#default .mv-contents .mv-name p",
            pointer: ".messageView#default .mv-contents .mv-comment .pointer",
            messageOpenClass: "in",
            messageCloseClass: "hide",
            page: 0,
            speed: 'normal',
            ignoreSkip: false,
            loop: false,
            isPointer: true
        };
        this.addTime = 30;
        this.loading = false;

        this.isNumber = function (x) {
            if (typeof (x) != 'number' && typeof (x) != 'string')
                return false;
            else
                return (x == parseFloat(x) && isFinite(x));
        };

        // Option Speed
        if (option !== undefined) {
            for (var property in option) {
                this.option[property] = option[property];
            }
            switch (this.option.speed) {
            case 'normal':
                that.addTime = 30;
                break;
            case 'fast':
                that.addTime = 10;
                break;
            case 'slow':
                that.addTime = 80;
                break;
            default:
                that.addTime = 30;
                break;
            }
            if (this.isNumber(this.option.speed)) {
                that.addTime = Math.abs(Math.round(this.option.speed));
            }
        }

        // Message Value JSON
        if (args !== undefined) {
            this.data = args.data;
            this.selectedNum = this.option.page;
            this.selectedData = args.data[0];
            this.maxNum = args.data.length;
        }

        this.set = function (source) {
            for (var property in source) {
                this.option[property] = source[property];
            }
            return this;
        };

        this.messageView = document.querySelector(this.option.view);
        this.keyDown = function (e) {
            if (event.keyCode == 39) {
                e.stopPropagation();
                e.preventDefault();
                that.next.call(that);
            } else if (event.keyCode == 37) {
                e.stopPropagation();
                e.preventDefault();
                that.prev.call(that);
            }
        };
        this.utility = new Utility(this.option);
        document.addEventListener(this.utility.keydown.defultEvent, that.keyDown, true);

        if (args.data !== undefined) {
            this.init.apply(this, [args.data]);
        }

        this.callBack = function () {
            if (fn !== void 0) {
                fn();
            }
        };
        // メッセージスキップの判定
        this.skip = false;
    }

    Message.prototype = {
        init: function (val) {
            var that = this;
            this.View = new MessageView(this.data, this.option, this.utility);
            if (!this.option.isPointer) {
                this.disablePointer();
            }
            if (this.maxNum > 0) {
                that.open(val.data);
            }
        },

        isSet: function (args) {
            if (args !== undefined && args !== void 0) {
                return true;
            } else {
                return false;
            }
        },

        open: function (data) {
            if (this.isSet(this.selectedData.side_class)) {
                this.sideChange();
            }
            if (this.isSet(this.selectedData.side_class2)) {
                this.sideChange2();
            }
            if (this.isSet(this.selectedData.side_class3)) {
                this.sideChange3();
            }
            if (this.isSet(this.selectedData.name)) {
                this.nameChange();
            }
            if (this.isSet(this.selectedData.name_color)) {
                this.namecolorChange();
            }
            if (this.isSet(this.selectedData.img_url)) {
                this.characterChange();
            } else {
                this.characterReset();
            }
            if (this.isSet(this.selectedData.img_url2)) {
                this.characterChange2();
            } else {
                this.characterReset2();
            }
            if (this.isSet(this.selectedData.img_url3)) {
                this.characterChange3();
            } else {
                this.characterReset3();
            }
            if (this.isSet(this.selectedData.message)) {
                this.commentChange();
            }
            if (this.isSet(this.selectedData.animate_move)) {
                this.animateChange();
            }
            if (this.isSet(this.selectedData.animate_move2)) {
                this.animateChange2();
            }
            if (this.isSet(this.selectedData.animate_move3)) {
                this.animateChange3();
            }

            this.View.open(data);

            setNumPage(this.selectedNum);
        },

        close: function () {
            this.messageView.removeEventListener(this.utility.keydown.defultEvent, this.keyDown, true);
            this.View.close();
        },

        next: function () {
            if (this.loading === true) {
                if (!this.option.ignoreSkip) {
                    this.skip = true;
                }
                return;
            }
            if (this.maxNum > this.selectedNum) {
                this.selectedNum += 1;
                this.selectedData = this.data[this.selectedNum];
                if (this.selectedData.side_class !== undefined) {
                    this.sideChange();
                }
                if (this.selectedData.side_class2 !== undefined) {
                    this.sideChange2();
                }
                if (this.selectedData.side_class3 !== undefined) {
                    this.sideChange3();
                }
                if (this.selectedData.name) {
                    this.nameChange();
                }
                if (this.isSet(this.selectedData.name_color)) {
                    this.namecolorChange();
                }
                if (this.selectedData.img_url) {
                    this.characterChange();
                } else {
                    this.characterReset();
                }
                if (this.isSet(this.selectedData.img_url2)) {
                    this.characterChange2();
                } else {
                    this.characterReset2();
                }
                if (this.isSet(this.selectedData.img_url3)) {
                    this.characterChange3();
                } else {
                    this.characterReset3();
                }
                if (this.selectedData.message) {
                    this.commentChange();
                }
                if (this.selectedData.animate_move !== undefined) {
                    this.animateChange();
                }
                if (this.selectedData.animate_move2 !== undefined) {
                    this.animateChange2();
                }
                if (this.selectedData.animate_move3 !== undefined) {
                    this.animateChange3();
                }
            }
            setNumPage(this.selectedNum);
        },

        prev: function () {
            if (this.loading === true) {
                if (!this.option.ignoreSkip) {
                    this.skip = true;
                }
                return;
            }
            if (this.selectedNum >= this.maxNum) {
                this.selectedNum -= 2;
            } else if (this.selectedNum > 0) {
                this.selectedNum -= 1;
            }
            if (this.maxNum > this.selectedNum) {
                this.selectedData = this.data[this.selectedNum];
                if (this.selectedData.side_class !== undefined) {
                    this.sideChange();
                }
                if (this.selectedData.side_class2 !== undefined) {
                    this.sideChange2();
                }
                if (this.selectedData.side_class3 !== undefined) {
                    this.sideChange3();
                }
                if (this.selectedData.name) {
                    this.nameChange();
                }
                if (this.isSet(this.selectedData.name_color)) {
                    this.namecolorChange();
                }
                if (this.isSet(this.selectedData.img_url)) {
                    this.characterChange();
                } else {
                    this.characterReset();
                }
                if (this.isSet(this.selectedData.img_url2)) {
                    this.characterChange2();
                } else {
                    this.characterReset2();
                }
                if (this.isSet(this.selectedData.img_url3)) {
                    this.characterChange3();
                } else {
                    this.characterReset3();
                }
                if (this.selectedData.message) {
                    this.commentChange();
                }
                if (this.selectedData.animate_move !== undefined) {
                    this.animateChange();
                }
                if (this.selectedData.animate_move2 !== undefined) {
                    this.animateChange2();
                }
                if (this.selectedData.animate_move3 !== undefined) {
                    this.animateChange3();
                }
            }
            setNumPage(this.selectedNum);
        },

        end: function () {
            this.callBack();
            setNumPage(this.selectedNum);
        },

        characterChange: function () {
            this.View.characterChange(this.selectedData);
        },

        characterChange2: function () {
            this.View.characterChange2(this.selectedData);
        },

        characterChange3: function () {
            this.View.characterChange3(this.selectedData);
        },

        characterReset: function () {
            this.View.characterChange(null);
        },

        characterReset2: function () {
            this.View.characterChange2(null);
        },

        characterReset3: function () {
            this.View.characterChange3(null);
        },

        namecolorChange: function () {
            var color1 = this.selectedData.name_color;
            $(".messageView#default .mv-contents .mv-name p").removeClass();
            $(".messageView#default .mv-contents .mv-name p").addClass(color1);
        },

        sideChange: function () {
            var side1 = this.selectedData.side_class;
            $(".messageView#default .mv-contents #first").removeClass();
            $(".messageView#default .mv-contents #first").addClass(side1);
        },

        sideChange2: function () {
            var side2 = this.selectedData.side_class2;
            $(".messageView#default .mv-contents #second").removeClass();
            $(".messageView#default .mv-contents #second").addClass(side2);
        },

        sideChange3: function () {
            var side3 = this.selectedData.side_class3;
            $(".messageView#default .mv-contents #third").removeClass();
            $(".messageView#default .mv-contents #third").addClass(side3);
        },

        //アニメーション用の記述　Jquery使用
        animateChange: function () {
            var move = this.selectedData.animate_move;
            var infinite = this.selectedData.infinite;
            $(function () {
                $(".mv-image img").removeClass();
                $(".mv-image img").addClass("animated");
                $(".mv-image img").addClass(move);
                if (infinite) {
                    $(".mv-image img").addClass("infinite");
                }
                infinite = move = "";
            });
        },

        //アニメーション用の記述　Jquery使用
        animateChange2: function () {
            var move2 = this.selectedData.animate_move2;
            var infinite2 = this.selectedData.infinite2;
            $(function () {
                $(".mv-image2 img").removeClass();
                $(".mv-image2 img").addClass("animated");
                $(".mv-image2 img").addClass(move2);
                if (infinite2) {
                    $(".mv-image2 img").addClass("infinite");
                }
                infinite2 = move2 = "";
            });
        },

        //アニメーション用の記述　Jquery使用
        animateChange3: function () {
            var move3 = this.selectedData.animate_move3;
            var infinite3 = this.selectedData.infinite3;
            $(function () {
                $(".mv-image3 img").removeClass();
                $(".mv-image3 img").addClass("animated");
                $(".mv-image3 img").addClass(move3);
                if (infinite3) {
                    $(".mv-image3 img").addClass("infinite");
                }
                infinite3 = move3 = "";
            });
        },

        commentChange: function () {
            var that = this,
                str = this.selectedData.message.split(/<br(?:[ \t][^\/>]*)?\/?>/g),
                splitComment = [],
                setComment = '',
                interval = this.addTime;

            this.hidePointer();
            for (var i in str) {
                if (splitComment.length > 0) {
                    splitComment.push('<br>');
                }
                splitComment.push(str[i].split(''));
            }

            // 平坦化
            splitComment = that.flatten(splitComment);

            that.skip = false;
            that.loading = true;

            var addChar = function () {
                var c = splitComment.shift();

                if (!c) {
                    that.loading = false;
                    that.showPointer();
                    return false;
                }
                setComment += c;

                if (that.skip) {
                    interval = 0;
                    setComment += splitComment.join('');
                    splitComment = [];
                }
                that.View.commentChange(setComment);
                setTimeout(addChar, interval);
            };

            addChar();
        },

        flatten: function (val) {
            var mixMessage = [];
            for (var i = 0; val.length > i; i++) {
                if (val[i] instanceof Array) {
                    for (var n = 0; val[i].length > n; n++) {
                        mixMessage.push(val[i][n]);
                    }
                } else {
                    mixMessage.push(val[i]);
                }
            }
            return mixMessage;
        },

        nameChange: function () {
            this.View.nameChange(this.selectedData);
        },

        showPointer: function () {
            if (this.option.isPointer) {
                this.View.showPointer();
            }
        },

        hidePointer: function () {
            this.View.hidePointer();
        },

        disablePointer: function () {
            this.View.disablePointer();
        },

        setData: function (data) {
            this.data = data;
        },

        getData: function () {
            return this.data;
        }

    };

    // namespaceにexport
    if (global.MessageViewer === void 0) {
        global.MessageViewer = {};
    }
    global.MessageViewer = Message;
})(this);


//ページ番号取得
function setNumPage(page){
    if(page!=undefined) {
        num = page;
    }
}
//ページ番号を返す
function getNumPage(){
    return num;
}