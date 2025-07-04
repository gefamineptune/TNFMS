/**
 * Use this namespace to reference objects in your custom component.
 * 
 * When using custom components you might have multiple instances of the
 * same custom component. When you add a custom component to an app this
 * namespace is renamed to the custom component object name in the app.
 * 
 * E.g. if the custom component object name is myCustomComponent you can call
 * functions from this namespace with myCustomComponent.foo()
 *
 */
namespace CustomComponent {

    export function getSrc() {
        // @ts-ignore
        // console.log(Image.getSrc())
        // @ts-ignore
        return Image.getSrc();
    }
    export function getFileName() {
        // @ts-ignore
        console.log(inFiles.getValue())
        // @ts-ignore
        return inFiles.getValue().replace(/['"]+/g, '');
    }
    
export function setCarImage(image: string, image_location: string): void {
    // Set the file name value in the FileUploader
    (inFiles as sap.ui.unified.FileUploader).setValue(image);
    // Set the image source to the provided location
    (Image as unknown as sap.m.Image).setSrc(image_location);
    // Make the HBox and FlexBox visible
    (HBox as sap.m.HBox).setVisible(true);
    (FlexBox as sap.m.FlexBox).setVisible(true);
}
    
}