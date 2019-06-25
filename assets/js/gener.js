let generate = " ";

for (let ii = 0; ii < all.length; ii++) {
    generate += '<a href="' + all[ii].link + '"><div>';
    generate += all[ii].nom + '</div></a>';
}

document.getElementById("generate").innerHTML = generate;