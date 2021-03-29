import { createScript, ScriptTypeBase, attrib } from "../lib/create-script-decorator";
import * as pc from "playcanvas";

@createScript("example")
class Example extends ScriptTypeBase  {

    // Careful, manual string reflection type would have to assumably match type definition, violating DRY somewhat.
    @attrib({type:'asset', assetType: 'material'}) redMaterial: pc.Asset;
    @attrib({type:'asset', assetType: 'material'}) greenMaterial: pc.Asset;
    @attrib({type:'asset', assetType: 'material'}) blueMaterial: pc.Asset;

    pos: pc.Vec3;

    // initialize code called once per entity
    initialize() {
        console.log("Hello initialize", this.entity, this.app);
        this.pos = new pc.Vec3();
        alert('hello world example.tx!! '+ [this.entity, this.app]);

        if (!this.entity.model) {
            console.warn("Entity doesn't have example model to test! Exiting now!");
            return;
        }

        // Disabling the context menu stops the browser displaying a menu when
        // you right-click the page
        this.app.mouse.disableContextMenu();

        // Use the on() method to attach event handlers.
        // The mouse object supports events on move, button down and
        // up, and scroll wheel.
        this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
    }

   onMouseDown(event: pc.MouseEvent) {
        // If the left mouse button is pressed, change the cube color to red
        if (event.button === pc.MOUSEBUTTON_LEFT) {
            this.entity.model.meshInstances[0].material = this.redMaterial.resource as pc.Material;
        }

        // If the left mouse button is pressed, change the cube color to green
        if (event.button === pc.MOUSEBUTTON_MIDDLE) {
            this.entity.model.meshInstances[0].material = this.greenMaterial.resource as pc.Material;
        }

        // If the left mouse button is pressed, change the cube color to blue
        if (event.button === pc.MOUSEBUTTON_RIGHT) {
            this.entity.model.meshInstances[0].material = this.blueMaterial.resource as pc.Material;
        }
    }
}