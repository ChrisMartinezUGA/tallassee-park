var db = firebase.firestore();

db.collection("explore")
    .onSnapshot(function (querySnapshot) {
        exploreVue.reloadEntries();
    });

function launchNewModal() {
    $("#newModal").toggleClass("is-active")
}

function closeNewModal() {
    $("#newModal").toggleClass("is-active");
    document.forms[0].elements[0].value = "";
    document.forms[0].elements[1].value = "";
    document.forms[0].elements[3].value = "";
}

function submitNewEntry() {
    let entryTitle = document.forms[0].elements[0].value;
    let entrySubtitle = document.forms[0].elements[1].value;
    let entryCategory = document.forms[0].elements[2].value;
    let entryContent = document.forms[0].elements[3].value;
    db.collection("explore").add({
            title: entryTitle,
            subtitle: entrySubtitle,
            category: entryCategory,
            content: entryContent
        }).then(function () {
            closeNewModal();
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
}

var exploreVue = new Vue({
    el: '#exploreTable',
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
                db.collection("explore").get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data());
                        exploreVue.allIDs.push(doc.id);
                        exploreVue.allEntries.push(doc.data());
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
            db.collection("explore").doc(id).delete().then(function() {
                //console.log("Document successfully deleted!");
            }).catch(function(error) {
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
            let entryTitle = document.getElementById(formID).elements[0].value;
            let entrySubtitle = document.getElementById(formID).elements[1].value;
            let entryCategory = document.getElementById(formID).elements[2].value;
            let entryContent = document.getElementById(formID).elements[3].value;
            db.collection("explore").doc(id).set({
                    title: entryTitle,
                    subtitle: entrySubtitle,
                    category: entryCategory,
                    content: entryContent
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