//@ui5-bundle proximus/Component-preload.js
sap.ui.predefine("proximus/Component", ["sap/ui/core/UIComponent"],function(e){"use strict";var n=e.extend("proximus.Component",{metadata:{manifest:"json"}});return n});
sap.ui.predefine("proximus/main.controller", ["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("proximus.main",{onInit:function(){var t=this.getView().byId("img");if(!t)return;t.setSrc(sap.ui.require.toUrl("proximus/images/myHR.png"));var i=this.getView();setTimeout(function(){var t=i.getDomRef();if(t){var e=t.closest(".sapUiIntegrationCard")||t.closest(".sapFCard");if(e){e.style.transition="opacity 0.5s";e.style.opacity="0";setTimeout(function(){e.style.display="none"},500)}}},1e4)}})});
sap.ui.require.preload({
	"proximus/manifest.json":'{"_version":"1.84.0","sap.app":{"id":"proximus","type":"card","title":"Proximus Card","applicationVersion":{"version":"1.0.0"},"imagePath":"images/myHR.png"},"sap.ui":{"technology":"UI5","icons":{"icon":"sap-icon://technical-object"}},"sap.ui5":{"rootView":{"viewName":"proximus.view","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.38","libs":{"sap.m":{},"sap.ui.core":{}}}},"sap.card":{"type":"Component"}}',
	"proximus/view.view.xml":'<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc"\n\t\t  xmlns="sap.m" xmlns:html="http://www.w3.org/1999/xhtml"\n\t\t  width="100%"\n\t\t  displayBlock="true"\n\t\t  controllerName="proximus.main"><Image id="img" width="100%" class="fullCardImage"></Image></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
