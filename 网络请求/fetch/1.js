function ajaxFetch(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.info(data);
    })
}
ajaxFetch(url)