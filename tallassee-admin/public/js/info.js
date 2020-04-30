var db = firebase.firestore();

var hoursDoc = db.collection("park").doc("hours");
var infoDoc = db.collection("park").doc("info");

hoursDoc.get().then(function (doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        $("#sunOpen").prop("value", doc.data().sunOpen);
        $("#sunClose").prop("value", doc.data().sunClose);
        $("#monOpen").prop("value", doc.data().monOpen);
        $("#monClose").prop("value", doc.data().monClose);
        $("#tuesOpen").prop("value", doc.data().tuesOpen);
        $("#tuesClose").prop("value", doc.data().tuesClose);
        $("#wedOpen").prop("value", doc.data().wedOpen);
        $("#wedClose").prop("value", doc.data().wedClose);
        $("#thursOpen").prop("value", doc.data().thursOpen);
        $("#thursClose").prop("value", doc.data().thursClose);
        $("#friOpen").prop("value", doc.data().friOpen);
        $("#friClose").prop("value", doc.data().friClose);
        $("#satOpen").prop("value", doc.data().satOpen);
        $("#satClose").prop("value", doc.data().satClose);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

infoDoc.get().then(function (doc) {
    if (doc.exists) {
        //console.log("Document data:", doc.data());
        $("#disclaimer").prop("value", doc.data().disclaimer);
        $("#mission").prop("value", doc.data().mission);
        $("#url").prop("value", doc.data().url);
    } else {
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

function saveChanges() {
    console.log("saving changes");
    db.collection("park").doc("hours").set({
        sunOpen: $("#sunOpen").val(),
        sunClose: $("#sunClose").val(),
        monOpen: $("#monOpen").val(),
        monClose: $("#monClose").val(),
        tuesOpen: $("#tuesOpen").val(),
        tuesClose: $("#tuesClose").val(),
        wedOpen: $("#wedOpen").val(),
        wedClose: $("#wedClose").val(),
        thursOpen: $("#thursOpen").val(),
        thursClose: $("#thursClose").val(),
        friOpen: $("#friOpen").val(),
        friClose: $("#friClose").val(),
        satOpen: $("#satOpen").val(),
        satClose: $("#satClose").val(),
    }).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    })
    db.collection("park").doc("info").set({
        disclaimer: $("#disclaimer").val(),
        mission: $('#mission').val(),
        url:  $('#url').val()
    }).then(function() {
        console.log("Document successfully written!");
    }).catch(function(error) {
        console.error("Error writing document: ", error);
    })
}