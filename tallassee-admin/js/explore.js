var db = firebase.firestore();
//var storage = firebase.storage();
//var storageRef = storage.ref();
//var exploreImagesRef = storageRef.child('exploreimgs');


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
    let entryImage = document.forms[0].elements[2].files[0];
    let entryCategory = document.forms[0].elements[3].value;
    let entryContent = document.forms[0].elements[4].value;
    db.collection("explore").add({
            title: entryTitle,
            subtitle: entrySubtitle,
            category: entryCategory,
            content: entryContent
        }).then(function () {
            // Upload image to Cloud Storage
            if (entryImage != null) {
                var storageRef = firebase.storage().ref('exploreimgs/' + id + ".jpg")
                var task = storageRef.put(entryImage);
            }
            // Close modal
            closeNewModal();
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
}

function filterByTab(f) {
    $('#filterTab0').removeClass("is-active");
    $('#filterTab1').removeClass("is-active");
    $('#filterTab2').removeClass("is-active");
    $('#filterTab3').removeClass("is-active");
    $('#filterTab4').removeClass("is-active");
    switch (f) {
        case 0:
            $('#filterTab0').addClass("is-active");
            exploreVue.reloadEntries();
            break;
        case 1:
            $('#filterTab1').addClass("is-active");
            exploreVue.reloadEntriesFilter("Flora");
            break;
        case 2:
            $('#filterTab2').addClass("is-active");
            exploreVue.reloadEntriesFilter("Fauna");
            break;
        case 3:
            $('#filterTab3').addClass("is-active");
            exploreVue.reloadEntriesFilter("Big Picture");
            break;
        case 4:
            $('#filterTab4').addClass("is-active");
            exploreVue.reloadEntriesFilter("Earth Science");
            break;
    }

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
                db.collection("explore").orderBy("title").get().then(function (querySnapshot) {
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
        async loadAllEntriesFilter(category) {
            try {
                db.collection("explore").where("category", "==", category).orderBy("title").get().then(function (querySnapshot) {
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
        async reloadEntriesFilter(filter) {
            this.allEntries.splice(0, this.allEntries.length);
            this.allEntries.splice(0, this.allIDs.length)
            this.allIDs = [];
            this.allEntries = [];
            this.loadAllEntriesFilter(filter);
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
            db.collection("explore").doc(id).delete().then(function () {
                //console.log("Document successfully deleted!");
            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
            this.closeDeleteModal(id);
        },
        launchEditModal(id) {
            let modalID = '#editModal-' + id;
            $(modalID).toggleClass("is-active");

            let previewID = '#editImgPreview-' + id;
            var storage = firebase.storage();
            var pathReference = storage.ref('exploreimgs/' + id + ".jpg");

            // Get the download URL
            pathReference.getDownloadURL().then(function (url) {
                // Insert url into an <img> tag to "download"
                $(previewID).prop("src", url);
            }).catch(function (error) {

                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        break;

                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                    case 'storage/canceled':
                        // User canceled the upload
                        break;

                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        break;
                }
            });

        },
        closeEditModal(id) {
            let modalID = '#editModal-' + id;
            $(modalID).toggleClass("is-active");
        },
        editEntry(id) {
            let formID = 'editEntryForm-' + id;
            let entryTitle = document.getElementById(formID).elements[0].value;
            let entrySubtitle = document.getElementById(formID).elements[1].value;
            let entryImage = document.getElementById(formID).elements[2].files[0];
            let entryCategory = document.getElementById(formID).elements[3].value;
            let entryContent = document.getElementById(formID).elements[4].value;
            db.collection("explore").doc(id).set({
                    title: entryTitle,
                    subtitle: entrySubtitle,
                    category: entryCategory,
                    content: entryContent
                }).then(function () {
                    // Upload image to Cloud Storage
                    if (entryImage != null) {
                        var storageRef = firebase.storage().ref('exploreimgs/' + id + ".jpg")
                        var task = storageRef.put(entryImage);
                    }

                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                })
            this.closeEditModal(id);
        }
    }
})