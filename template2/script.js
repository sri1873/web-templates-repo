var catalog = {
    "cake": ["Sniker", "Oreo Chesse", "Red velvet", "Berry", "Bounty", "Cherry Bomb"],
    "cupcake": ["Dark Chocolate Cupcakes", "Coconut Cupcakes", "Red velvet", "Homemade Funfetti", "Whiskey and Irish Cream", "Peanut Butter"],
    "cookie": ["Chocolate Chip", "Oatmeal Raisin", "Gingerbread", "Fortune Cookies", "Peanut Butter Blossoms", "Classic No-Bake"]
}

var form = document.getElementById("myForm")
var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")

var orderType = document.getElementById("type");
var flavor = document.getElementById('flavor');


function application() {
    let det = []
    for (var i = 0; i < form2.length - 1; i++) {
        det.push(form2[i].value)
    }
    console.log(det)
    form2.innerHTML = `<p style="color:lavender;">Your Details <br><br>${det}</p>`
    form2.reset()
}

function orderSubmit() {
    let data = []
    for (var i = 0; i < form1.length - 2; i++) {
        data.push(form1[i].value)
    }
    form1.innerHTML = `<p>Order Placed!<br><br>Summary<br><br>${data}</p><button type="button" class="btn cancel" onclick="closeForm()">Close</button>`
    console.log(data);
}

function openForm() {
    document.body.style.overflow = "hidden";
    document.getElementById("catalog").style.filter = "blur(2px)";
    document.getElementById("aboutus").style.filter = "blur(2px)";
    form.style.display = "block";
    form.style.animation = "hinge .5s";

}

function closeForm() {
    form.style.animation = "popup .5s forwards";
    document.getElementById("catalog").style.filter = "none";
    document.getElementById("aboutus").style.filter = "none";
    document.body.style.overflow = "auto";
}

document.onclick = function (e) {
    // if (form.style.display === "none" && e.target.id === 'myForm') {
    //     form.style.display = 'block';
    // }
    // else if (e.target.id !== 'myForm') {
    //     closeForm();
    // }
}

for (var i in catalog) {
    orderType.options[orderType.options.length] = new Option(i, i);
}

orderType.onchange = () => {
    flavor.length = 1;
    var z = catalog[orderType.value];
    for (var i = 0; i < z.length; i++) {
        flavor.options[flavor.options.length] = new Option(z[i], z[i]);
    }
}

