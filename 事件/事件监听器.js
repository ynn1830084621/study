const EventUtils = {
    //添加事件
    addEvent: function(element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler)
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler)
        } else {
            element["on" + type]= handler
        }
    },

    //移除事件
    removeEventListener: function(element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler)
        } else if (element.detachEvent) {
            element.detachEvent('on' + type, handler)
        } else {
            element["on" + type] = null;
        }
    },

    //获取事件对象
    getEvent: function(e) {
        return e || window.e
    },

    //获取触发事件的对象
    getTarget: function (e) {
        return e.target || e.srcElement
    },

    //阻止冒泡事件
    stopPropagation: function(e) {
        if(e.stopPropagation) {
            e.stopPropagation()
        } else {
            e.cancelBubble = true
        }
    },

    //阻止默认事件
    preventDefault: function(e) {
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e.returnValue = false
        }
    }

}