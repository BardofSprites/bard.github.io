var render = function (template, node) {
    if (!node) return;
    node.innerHTML = (typeof template === 'function' ? template() : template);
    var event = new CustomEvent('elementRenders', {
        bubbles: true
    });
    node.dispatchEvent(event);
    return node;
};

render('<h1 class=clockText>' + new Date().toLocaleTimeString() + '</h1>', document.querySelector('#clock'));

window.setInterval(function () {
	render('<h1 class=clockText>' + new Date().toLocaleTimeString() + '</h1>', document.querySelector('#clock'));
}, 1000);
