var storage = firebase.storage();

function saveChanges() {
    let topoImage = document.forms[0].elements[0].files[0];
    let ecoImage = document.forms[0].elements[1].files[0];
    let trailsImage = document.forms[0].elements[2].files[0];

    if(topoImage != null) {
        $('#topoLoading').css("display","block");

        var topoRef = storage.ref('maps/TallasseeMap_Topo.jpg');
        var task = topoRef.put(topoImage).then((snapshot) => {
            mapVue.loadTopoMap();
            $('#newTopoMap').val(null);
            $('#topoLoading').css("display","none");
        });
        
    }
    if(ecoImage != null) {
        $('#ecoLoading').css("display","block");
        var ecoRef = storage.ref('maps/TallasseeMap_Ecology.jpg');
        var task = ecoRef.put(ecoImage).then((snapshot) => {
            mapVue.loadEcoMap();
            $('#newEcoMap').val(null);
            $('#ecoLoading').css("display","none");
        });
        
    }
    if(trailsImage != null) {
        $('#trailsLoading').css("display","block");
        var trailsRef = storage.ref('maps/TallasseeMap_Trails.jpg');
        var task = trailsRef.put(trailsImage).then((snapshot) => {
            mapVue.loadTrailsMap();
            $('#newTrailsMap').val(null);
            $('#trailsLoading').css("display","none");
        });
    }
}

var mapVue = new Vue({
    el: "#maps",
    data: {
        topoURL: '',
        ecoURL: '',
        trailsURL: ''
    },
    created() {
        this.loadAllMaps();
    },
    methods: {
        async loadAllMaps() {
            console.log("loadAllMaps()");
            this.loadTopoMap();
            this.loadEcoMap();
            this.loadTrailsMap();
        },
        async loadTopoMap() {
            var pathReference = storage.ref('maps/TallasseeMap_Topo.jpg');
            // Get the download URL
            pathReference.getDownloadURL().then(function (url) {
                // Insert url into an <img> tag to "download"
                $('#currentMapTopo').prop("src", url);
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
        async loadEcoMap() {
            var pathReference = storage.ref('maps/TallasseeMap_Ecology.jpg');
            // Get the download URL
            pathReference.getDownloadURL().then(function (url) {
                // Insert url into an <img> tag to "download"
                $('#currentMapEco').prop("src", url);
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
        async loadTrailsMap() {
            var pathReference = storage.ref('maps/TallasseeMap_Trails.jpg');
            // Get the download URL
            pathReference.getDownloadURL().then(function (url) {
                // Insert url into an <img> tag to "download"
                $('#currentMapTrails').prop("src", url);
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
        }
    },
    async uploadImages() {

    }
});