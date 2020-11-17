// Required: utils.js, jQuery, A-Frame

// Register a component for initializing image markers which is attached on an a-scene
AFRAME.registerComponent("init-img-markers", {
    init: function () {
        initImgMarkers();
    },
});

/**
 * This method temporarily patches a known bug in Safari on iOS: the resources are not loaded correctly 
 * probably due to cache or the logistics of A-Frame. This method must be invoked at the initialization stage
 * of A-Frame.
 */
function initImgMarkers() {
    // Set up the marker url due to a bug in AR.js
    let cwd = window.location.pathname.split("/").slice(0, -1).join("/");  // get the root path
    let markersFolder = cwd + "/markers";  // link to the foler storing image markers
    // console.log("CWD", cwd, "markersFolder", markersFolder);  // debug message

    // Reset the urls on HTML
    $("#nft-marker1").attr("url", markersFolder + "/marker1");
    $("#nft-marker2").attr("url", markersFolder + "/marker2");
    $("#nft-marker3").attr("url", markersFolder + "/marker3");
    $("#nft-marker4").attr("url", markersFolder + "/marker4");
    $("#nft-marker5").attr("url", markersFolder + "/marker5");
    $("#nft-marker6").attr("url", markersFolder + "/marker6");
    $("#nft-marker7").attr("url", markersFolder + "/marker7");
    $("#nft-marker8").attr("url", markersFolder + "/marker8");
    $("#nft-marker9").attr("url", markersFolder + "/marker9");
    $("#nft-marker10").attr("url", markersFolder + "/marker10");
    $("#nft-marker11").attr("url", markersFolder + "/marker11");
    $("#nft-marker12").attr("url", markersFolder + "/marker12");

    // Attach listeners to update the HUD info when a marker is detected or lost
    document.addEventListener("markerFound", (e) => {
        // Show the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), true);
    });
    document.addEventListener("markerLost", (e) => {
        // Hide the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), false);
    });
}
