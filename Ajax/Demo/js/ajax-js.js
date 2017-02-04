(function(){
    var Module = {
        createXHR: function(){
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            else if (window.ActiveXObject) {
                var versions = ['MSXML2.XMLHttp','Microsoft.XMLHTTP'];
                for (var i = 0,len = versions.length; i<len; i++) {
                    try {
                        return new ActiveXObject(version[i]);
                        break;
                    }
                    catch (e) {
                    }
                }
            }
            else {

            }
        },
        ajax: function(obj){
            var self = this;
            var xhr = self.createXHR();
            var xhr = new window.XMLHttpRequest();
            obj.url = obj.url + '?rand=' + Math.random();
            obj.data = self.params(obj.data);
            if (obj.type === 'get') {
                obj.url += obj.url.indexOf('?') == -1 ? '?' + obj.data : '&' + obj.data;
            }
            if (obj.async === true) {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        callback();
                    }
                };
            }
            xhr.open(obj.type, obj.url, obj.async);
            if (obj.type === 'post') {
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.send(obj.data);
            } else {
                xhr.send(null);
            }
            if (obj.async === false) {
                callback();
            }
            function callback() {
                if (xhr.status == 200) {
                    obj.success(xhr.responseText,xhr.statusText);
                } else {
                    alert(xhr.status + ':' + xhr.statusText);
                }
            }
        },
        params: function(data){
            var arr = [];
            for (var i in data) {
                arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
            }
            return arr.join('&');
        },

        init:function(){
            var self = this;
            self.ajaxModule();
        },
        ajaxModule:function(){
            var self = this;
            self.ajax({
                url:'Data/jsData.json',         //数据的提交路径
                type:'post',                    //请求类型 post或get
                data:{
                    id:1,
                    msg:'test',
                },                              //需要提交的数据
                success : function (rs,status) {
                    // rs 为字符串 格式需要转成json
                    rs = JSON.parse(rs);
                    console.log('请求状态：====>'+status);
                    console.log(rs.code);
                    if(rs.code == 200){
                        //请求服务端数据成功
                        self.appendHtml(rs);
                    }
                },
                async : true
            });
        },
        appendHtml:function(rs){
            var self = this,
                sHtml = '',
                aItem = rs.data.items;
            self.domJsWrap = document.querySelector('#JsWrap');
            sHtml += '<p class="title">'+rs.msg+'</p>';
            aItem.forEach(function(item){
                sHtml += '<div class="item">' +
                    '<img src="'+item.exhibitionImg+'">' +
                    '<p>'+item.shopTitle+'</p>' +
                    '<p>'+item.discount+'</p>' +
                    '<p>'+item.shopIntroduction+'</p>' +
                    '</div>'
            })
            self.domJsWrap.innerHTML = sHtml;
        }
    }
    Module.init();
})()