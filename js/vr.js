
/* VR */

var vr = document.getElementById("vr");

var trees = ["s","s","s","s","s","s","s","0001","0002","0003","0004","0006","s","s","s","s","s","s","s","s","s","s","s","s"];

trees.forEach(tree => renderPlot(tree));

function renderPlot(tree) {
    plot = document.createElement("div");
    plot.style.backgroundImage = "url(trees/"+tree+".png)";
    plot.classList.add("plot");
    vr.appendChild(plot);
}
//renderPlot();
