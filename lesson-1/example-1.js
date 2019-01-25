Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: true });
function deliveryMethod() {
    // TODO
    return "overnight";
}
function shipWeight() {
    var el = document.getElementById('weight');
    return parseInt(el.innerHTML);
}
/**
* @param {(string | string[])} emailAddr - An email address of array of email addresses
*/
function sendUpdates(emailAddr) {
    function sendEmail(addr) {
        // Default to standard delivery if empty
        console.log("Shipping to " + addr + " via " + (deliveryMethod() || "standard") + " delivery");
        if (shipWeight() > 100) {
            console.log("WARNING: Oversize package");
        }
    }
    // If it's an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach(function (val) {
            sendEmail(val.trim());
        });
    }
    else {
        sendEmail(emailAddr.trim());
    }
}
