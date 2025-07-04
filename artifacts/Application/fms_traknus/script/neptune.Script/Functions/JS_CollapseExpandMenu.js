function onCollapseExpandPress() {
    try {
        const bExpanded = SideNavigation.getExpanded();
        SideNavigation.setExpanded(!bExpanded);
    } catch (error) {
        sap.m.MessageToast.show(
            `Error toggling navigation: ${error.message}`,
            {
                my: sap.ui.core.Popup.Dock.CenterBottom,
                at: sap.ui.core.Popup.Dock.CenterBottom
            }
        );
    }
}