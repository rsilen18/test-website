document.getElementById('date').innerHTML = new Date().toDateString();

// set width of sidenav to 250px and push main left 250px
function openNav() {
	document.getElementById("sideNav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

// set width of sidenav to width of menuCol and push main right 250px
function closeNav() {
	document.getElementById("sideNav").style.width = "0";
	document.getElementById("main").style.marginLeft = document.getElementById("menuCol").style.width;
}