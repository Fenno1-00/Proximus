sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("proximus.main", {
        onInit: function () {
            var oView = this.getView();
            var sImgSrc = sap.ui.require.toUrl("proximus/images/myHR.png");

            // Set background image on the wrapper after it renders
            var oWrapper = oView.byId("cardWrapper");
            oWrapper.addEventDelegate({
                onAfterRendering: function () {
                    var oDom = oWrapper.getDomRef();
                    if (oDom) {
                        oDom.style.backgroundImage = "url('" + sImgSrc + "')";
                    }
                }
            });

            // Hide the entire card after 10 seconds
            var oView = this.getView();
            setTimeout(function () {
                var oViewDom = oView.getDomRef();
                if (oViewDom) {
                    // Walk up to the card host element and hide it
                    var oCardEl = oViewDom.closest(".sapUiIntegrationCard") || oViewDom.closest(".sapFCard");
                    if (oCardEl) {
                        oCardEl.style.transition = "opacity 0.5s";
                        oCardEl.style.opacity = "0";
                        setTimeout(function () { oCardEl.style.display = "none"; }, 500);
                    }
                }
            }, 10000);
        }
    });
});