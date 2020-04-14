// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var parkOpen = false;
var parkPws = "";

// Correct check position
var openDoc = db.collection("park").doc("open");
openDoc.get().then(function (doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        parkOpen = doc.data().open;
        parkPws = doc.data().password;
        $("#fieldAppPassword").prop("value", parkPws);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

if (parkOpen) {
    $("#statusParkOpen").text("open");
    $("#fieldAppPassword").prop("disabled", true);
    $("#fieldOpenPark").prop("checked", true);
} else {
    $("#statusParkOpen").text("closed");
    $("#fieldAppPassword").prop("disabled", false);
    $("#fieldOpenPark").prop("checked", false);
}

// -------------- FUNCTIONS -------------- //

function toggleParkOpenStatus() {
    open = document.getElementById("fieldOpenPark").checked;
    if (open == false) {
        $("#statusParkOpen").text("closed");
        $("#fieldAppPassword").prop("disabled", false);
        parkOpen = false;
    } else {
        $("#statusParkOpen").text("open");
        $("#fieldAppPassword").prop("disabled", true);
        parkOpen = true;
    }
}

function saveChanges() {
    console.log("saving changes");
    //parkPws = $("#fieldAppPassword").val();
    //console.log(parkPws);
    db.collection("park").doc("open").set({
        open: parkOpen,
        password: parkPws,
    }).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    })
}