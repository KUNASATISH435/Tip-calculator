const btne = document.getElementById("calculate");
const billinput = document.getElementById("bill");
const tipinput = document.getElementById("tip");
const totalspan = document.getElementById("total");

function calculateTotal() {
    const billval = billinput.value;
    const tipval = tipinput.value;
    const totalval = billval * (1 + tipval / 100);
    totalspan.innerText = totalval.toFixed(2);
}
btne.addEventListener("click", calculateTotal);