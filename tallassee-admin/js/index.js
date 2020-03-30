function toggleParkOpenStatus() {
    open = document.getElementById("fieldOpenPark").checked;
    if(open == false) {
        $("#statusParkOpen").text("closed");
        $("#fieldAppPassword").prop("disabled",false);
    } else {
        $("#statusParkOpen").text("open");
        $("#fieldAppPassword").prop("disabled",true);
    }
}