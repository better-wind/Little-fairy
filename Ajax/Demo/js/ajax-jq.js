(function(){
    var a = {
        // key:value
        a:'jijiji',
        b:[
            {
                a:'jojojo'
            }
        ],
        c:{
            a:'kokokoko'
        }
    }
    console.log(a.a);
    console.log(a.b[0].a);
    console.log(a.c.a);
    var Module = {
        init:function(){
            var self = this;
            self.ajaxModule()
        },
        /*
        * 现在请求的是本地的模拟数据
        * data参数没有用
        * 实际请求url是服务端地址
        * 根据上传的参数，下发数据
        * */
        ajaxModule:function(){
            var self = this;
            $.ajax({
                url:'Data/jqData.json',         //数据的提交路径
                type:'post',                    //请求类型 post或get
                data:{
                    id:1,
                    msg:'test',
                    page:1,
                    size:10
                },              //需要提交的数据
                dataType:'json',//服务器返回数据的类型
                success:function(rs,status){ //请求成功后执行的函数  rs为返回的数据 status为状态
                    console.log('请求状态：====>'+status);
                    console.log(rs.code);
                    if(rs.code == 200){
                        //请求服务端数据成功
                        self.appendHtml(rs);
                    }

                },
                error:function(XMLHttpRequest, textStatus, errorThrown){
                    // http://shiyousan.com/post/635433082130309661   这三个参数 看这个链接
                    console.log('请求出错:====>'+XMLHttpRequest.status +' ,原因:=====>'+ XMLHttpRequest.statusText);


                }
            })
        },
        /*
        * 根据下发数据渲染html
        * */
        appendHtml:function(rs){
            var self = this,
                sHtml = '',
                aItem = rs.data.items;
            self.domJqWrap = $('#JqWrap');
            sHtml += '<p class="title">'+rs.msg+'</p>'
            aItem.forEach(function(item){
                sHtml += '<div class="item">' +
                        '<img src="'+item.exhibitionImg+'">' +
                        '<p>'+item.shopTitle+'</p>' +
                        '<p>'+item.discount+'</p>' +
                        '<p>'+item.shopIntroduction+'</p>' +
                    '</div>'
            })
            self.domJqWrap.append(sHtml);
        }
    }
    Module.init();
})()