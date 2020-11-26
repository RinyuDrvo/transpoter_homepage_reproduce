import "./scss/style.scss";

const navComponent = require('./common/nav.html');
const topComponent = require('./common/top.html')

const nav = document.getElementById('nav');
nav.innerHTML = navComponent;
const top = document.getElementById('top');
top.innerHTML = topComponent;
