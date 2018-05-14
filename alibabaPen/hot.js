var Util = {
    addClass(dom,cla) {
        var _class = dom.getAttribute('class')
        let _list = _class.split(' ')
        _list.push(cla)
        var _nowClass = _list.join(' ')
        dom.setAttribute('class',_nowClass)
    },
    removeClass(dom,cla) {
        var _class = dom.getAttribute('class')
        var _list = _class.split(' ')
        var _nextList = _list.filter((item)=>item != cla)
        var _nowClass = _nextList.join(' ')
        dom.setAttribute('class',_nowClass)
    }
}
var Init = {
    init(){
        this.initDom()
        this.initData()
        this.initEvent()

    },
    initDom(){
        this.domFixbtn = document.querySelector('#FixBtn')
        this.domFixbtnShow = document.querySelector('#showBtn')
        this.domFixbtnHide = document.querySelector('#hideBtn')

        this.domFixedWrap = document.querySelector('#FixedWrap')
        this.domContentFace = document.querySelector('#contentFace')
        this.domContentFaces = document.querySelectorAll('#contentFace .icon-wrap')

        this.domContentTextBox = document.querySelector('#contentTextBox')
        this.domTextAreaTell = document.querySelector('#textAreaTell')

        this.domSendBox = document.querySelector('#sendBox')
        this.domSendBtnWrap = document.querySelector('#sendBtnWrap')
        this.domSendBtn = document.querySelector('#sendBtn')

        console.log(this.domTextAreaTell)
    },
    initData(){
        this.domFixbtnClick = false
        this.isSelect = false
        this.state = 1
        this.selectFaceIdx = null
    },
    initEvent(){
        var arrayContentFaces = Array.from(this.domContentFaces)
        this.domFixbtn.addEventListener('click',function(event){
            if(this.domFixbtnClick){
                this.domFixbtnShow.style.display = 'inline-block'
                this.domFixbtnHide.style.display = 'none'
                Util.removeClass(this.domFixedWrap,'fixed-hot-wrap-show')
                Util.addClass(this.domFixedWrap,'fixed-hot-wrap-hide')
                setTimeout(function(){
                    this.stepTextHide(arrayContentFaces)
                }.bind(this),400)

            } else {
                this.domFixbtnShow.style.display = 'none'
                this.domFixbtnHide.style.display = 'inline-block'
                Util.removeClass(this.domFixedWrap,'fixed-hot-wrap-hide')
                Util.addClass(this.domFixedWrap,'fixed-hot-wrap-show')
                this.domFixbtnClick = !this.domFixbtnClick
            }

        }.bind(this),false)
        arrayContentFaces.forEach((item,index)=>{
            item.addEventListener('mouseenter',function(){
                // no-select
                this.isSelect = true
                arrayContentFaces.forEach((dom,_i)=>{
                    Util.removeClass(dom,'no-select')
                    if(_i != index ) {
                        Util.addClass(dom,'no-select')
                    }
                })
            }.bind(this),false)

            item.addEventListener('mouseleave',function(){
                // no-select
                this.isSelect = false
                arrayContentFaces.forEach((dom,_i)=>{
                    setTimeout(function(){
                        if(!this.isSelect){
                            Util.removeClass(dom,'no-select')
                        }
                        }.bind(this),300)
                })
            }.bind(this),false)
            item.addEventListener('click',function(){
                // no-select
                this.selectFaceIdx = index
                arrayContentFaces.forEach((dom,_i)=>{
                    Util.removeClass(dom,'selected')
                    if(this.selectFaceIdx == _i){
                        Util.addClass(dom,'selected')
                    }

                })
                this.selectFace()
                this.state = 2
            }.bind(this),false)
        })
        this.domTextAreaTell.addEventListener('input',function(){
            if(this.domTextAreaTell.value){
                Util.addClass(this.domSendBtn,'btn-primary')
            } else {
                Util.removeClass(this.domSendBtn,'btn-primary')
            }

        }.bind(this),false)
    },
    stepTextShow(){
        document.querySelector('#stateTitle').style.display = 'none'
        this.domContentFace.style.paddingTop = '20px'
        this.domContentTextBox.style.display = 'block'
        this.domSendBox.style.marginTop = '10px'
        this.domSendBtnWrap.style.display = 'block'
    },
    stepTextHide(arrayContentFaces){
        document.querySelector('#stateTitle').style.display = 'block'
        this.domContentFace.style.paddingTop = '0px'
        this.domContentTextBox.style.display = 'none'
        this.domSendBox.style.marginTop = '44px'
        this.domSendBtnWrap.style.display = 'none'
        this.domTextAreaTell.value = ''
        Util.removeClass(this.domSendBtn,'btn-primary')
        Util.removeClass(this.domContentFace,'content')
        Util.removeClass(this.domContentFace,'content-select')
        Util.addClass(this.domContentFace,'content')
        arrayContentFaces.forEach((dom,_i)=>{
            Util.removeClass(dom,'no-select')
            Util.removeClass(dom,'selected')
        })

        this.initData()
    },
    selectFace(){
        if(this.state == 1){
            this.stepTextShow()
        }
        Util.removeClass(this.domContentFace,'content')
        Util.removeClass(this.domContentFace,'content-select')
        Util.addClass(this.domContentFace,'content-select')

    },
}
Init.init()