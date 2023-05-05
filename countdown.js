var btn = document.querySelector("button");
var i = 0;
btn.onclick = function() {
    this.innerText = i;
    this.classList.remove("finished");
    this.classList.add("loading");

    var inter = setInterval(function() {
        btn.innerText = i++;
        btn.classList.remove('percent-' + (i - 1));
        btn.classList.add('percent-' + i);
        if (i === 100) {
            btn.classList.remove("loading");
            btn.classList.add("finished");
            btn.innerText = '';
            clearInterval(inter);
            i = 0;
            btn.classList.remove('percent-100');
        }
    }, 25);
}