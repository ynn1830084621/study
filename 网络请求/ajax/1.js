function ajax(url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url, false)
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log('响应结果', xhr.response);
        }
    }
    xhr.send(null)
}
ajax(url)