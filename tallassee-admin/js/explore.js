function launchEditModal(id) {
    $("#exploreModal").toggleClass("is-active")
    $("#exploreModalTitle").text(id);
    console.log("here");
}

function closeEditModal() {
    $("#exploreModal").toggleClass("is-active")
}

function saveEditModal() {
    // SAVE CHANGES TO DATABASE
    $("#exploreModal").toggleClass("is-active")
}