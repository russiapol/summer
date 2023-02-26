let d = document.querySelector('.d')
let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let dj = document.querySelector('.dj')
let hj = document.querySelector('.hj')
let mj = document.querySelector('.mj')
let sj = document.querySelector('.sj')


function dop() {
    let dt = new Date()
    let sd = new Date(2023, 05, 01)
    let o = (sd - dt) / 1000

    let o_d = Math.floor(o / 60 / 60 / 24)
    d.textContent = o_d
    // dj.textContent = nd(o_d)

    let o_h = Math.floor((o - o_d * 24 * 60 * 60) / 60 / 60)
    h.textContent = o_h
    // hj.textContent = nh(o_h)

    let o_m = Math.floor((o - o_d * 24 * 60 * 60 - o_h * 60 * 60) / 60)
    m.textContent = o_m
    // mj.textContent = nm(o_m)

    let o_s = Math.floor(o - (o_d * 24 * 60 * 60) - (o_h * 60 * 60) - o_m * 60)
    s.textContent = o_s
    sj.textContent = ns(o_s)
}

setInterval(dop, 1000);

function ns(n) {
    n = String(n)
    o = ["2", "3", "4"]
    oi = ["0", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    n1 = n.substr(n.length - 1)
    n2 = n.substr(n.length - 2)
    if (oi.includes(n2) || oi.includes(n1)) {
        return "секунд"
    }
    else if (o.includes(n1)) {

        return "секунды"
    }
    else {
        return "секунда"
    }
}
function nm(m) {
    m = String(m)
    o = ["2", "3", "4"]
    oi = ["0", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    n1 = n.substr(m.length - 1)
    n2 = n.substr(m.length - 2)
    if (oi.includes(n2) || oi.includes(n1)) {
        return "минут"
    }
    else if (o.includes(n1)) {

        return "минуты"
    }
    else {
        return "минута"
    }
}
function nh(n) {
    h = String(h)
    o = ["2", "3", "4"]
    oi = ["0", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    n1 = n.substr(h.length - 1)
    n2 = n.substr(h.length - 2)
    if (oi.includes(n2) || oi.includes(n1)) {
        return "часов"
    }
    else if (o.includes(n1)) {

        return "часа"
    }
    else {
        return "час"
    }
}
function nd(n) {
    d = String(d)
    o = ["2", "3", "4"]
    oi = ["0", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    n1 = d.substr(d.length - 1)
    n2 = d.substr(d.length - 2)
    if (oi.includes(n2) || oi.includes(n1)) {
        return "дней"
    }
    else if (o.includes(n1)) {

        return "дня"
    }
    else {
        return "день"
    }
}
function prrr() {
    var prrr = new Audio();
    prrr.src = "."
    prrr.autoplay = true;
}

 

