(function(){
    "use strict";
    var app = {
        init : function(){
            app.button1();
            app.button2();
            app.button3();
            app.button4();
            app.button5();
            app.button6();
            app.button7();
            app.button8();
            app.button9();
            app.button10();
            app.button11();
            app.button12();
            app.button13();
            app.button14();
            app.button15();
            app.button16();
        },

        button1 : function(){
            $(".bt1").on('click',function(){
                app.defil();
                $("#defil").html("Kick");
                console.log('clikkkkkk');

            });
        },
        button2 : function(){
            $(".bt2").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button3 : function(){
            $(".bt3").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button4 : function(){
            $(".bt4").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button5 : function(){
            $(".bt5").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button6 : function(){
            $(".bt6").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button7 : function(){
            $(".bt7").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button8 : function(){
            $(".bt8").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button9 : function(){
            $(".bt9").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button10 : function(){
            $(".bt10").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button11 : function(){
            $(".bt11").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button12 : function(){
            $(".bt12").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button13 : function(){
            $(".bt13").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button14 : function(){
            $(".bt14").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button15 : function(){
            $(".bt15").on('click',function(){
                console.log('clikkkkkk')
            });
        },
        button16 : function(){
            $(".bt16").on('click',function(){
                console.log('clikkkkkk')
            });
        },

// animation text

        defil : function(){
            clearInterval(this.intervalId);
            this.intervalId = setInterval(function(){
                $("#defil").animate({marginLeft:-130},3000,function(){
                    $(this).css({marginLeft:+130}).find("#defil").after($(this).find("#defil"));
                })
            }, 2000);
        },
    };

    $(document).ready(function(){
        app.init();
    });
})();
