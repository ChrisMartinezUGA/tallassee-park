var db = firebase.firestore();

db.collection("activities")
    .onSnapshot(function (querySnapshot) {
        activitiesVue.reloadEntries();
    });

function launchNewModal() {
    $("#newModal").toggleClass("is-active")
}

function closeNewModal() {
    $("#newModal").toggleClass("is-active");
    document.forms[0].elements[0].value = "";
    document.forms[0].elements[2].value = "";
    document.forms[0].elements[3].value = "";
    document.forms[0].elements[4].value = "";
}

function submitNewEntry() {
    let activityTitle = document.forms[0].elements[0].value;
    let activityParticipants = document.forms[0].elements[1].value;
    let activityTime = document.forms[0].elements[2].value;
    let activitySupplies = document.forms[0].elements[3].value;
    let activityInstructions = document.forms[0].elements[4].value;
    let activityParticipantsBool = (activityParticipants == 1) ? false : true;
    db.collection("activities").add({
            title: activityTitle,
            group: activityParticipantsBool,
            time: activityTime,
            supplies: activitySupplies,
            content: activityInstructions
        }).then(function () {
            closeNewModal();
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
}

var activitiesVue = new Vue({
    el: '#activitiesTable',
    data: {
        allIDs: [],
        allEntries: [],
    },
    created() {
        //this.loadAllEntries();
    },
    methods: {
        async loadAllEntries() {
            try {
                db.collection("activities").get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data());
                        activitiesVue.allIDs.push(doc.id);
                        activitiesVue.allEntries.push(doc.data());
                    });
                });
            } catch (err) {
                console.error(err);
            }
        },
        async reloadEntries() {
            this.allEntries.splice(0, this.allEntries.length);
            this.allEntries.splice(0, this.allIDs.length)
            this.allIDs = [];
            this.allEntries = [];
            this.loadAllEntries();
        },
        launchDeleteModal(id) {
            let modalID = '#deleteModal-' + id;
            $(modalID).toggleClass("is-active");
        },
        closeDeleteModal(id) {
            let modalID = '#deleteModal-' + id;
            $(modalID).toggleClass("is-active");
        },
        deleteEntry(id) {
            db.collection("activities").doc(id).delete().then(function () {
                //console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
            this.closeDeleteModal(id);
        },
        launchEditModal(id) {
            let modalID = '#editModal-' + id;
            $(modalID).toggleClass("is-active");
        },
        closeEditModal(id) {
            let modalID = '#editModal-' + id;
            $(modalID).toggleClass("is-active");
        },
        editEntry(id) {
            let formID = 'editEntryForm-' + id;
            let activityTitle = document.getElementById(formID).elements[0].value;
            let activityParticipants = document.getElementById(formID).elements[1].value;
            let activityTime = document.getElementById(formID).elements[2].value;
            let activitySupplies = document.getElementById(formID).elements[3].value;
            let activityInstructions = document.getElementById(formID).elements[4].value;
            let activityParticipantsBool = (activityParticipants == 1) ? false : true;
            db.collection("activities").doc(id).set({
                    title: activityTitle,
                    group: activityParticipantsBool,
                    time: activityTime,
                    supplies: activitySupplies,
                    content: activityInstructions
                }).then(function () {
                    //console.log("Edited document");
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                })
            this.closeEditModal(id);
        }
    }
})