Ext.ux.ButtonUpload

Button upload for ExtJS 3.x

There are other extensions for button upload.

The main difference is that this is extended from Ext.Button and this way you don't
loose the Ext.Button funcionality like adding to toolbars, menus, etc.

This need's some tests. I just test it on Firefox and Chrome. It's ok but still need's
some css tweaks and to bypass some of the button events.

Use to fileselected event to handle the file upload. If you are using the button on a toolbar
you need to move the input field to the form and after the upload move it back to the toolbar.

Example of a callback function for a button placed in a toolbar:

function upload(btn, val, parent) {
    var b = parent.dom.removeChild(btn.fileInput.dom)
    this.getForm().el.appendChild(b);
      
    this.getForm.submit({
    
        //your config options here
        
        scope: this,
        success: function(fp, o) {
                    b = this.getForm().el.dom.removeChild(b)
                    parent.appendChild(b);
                    
                    //your code here
            
        }
    });
}

This still with some limitations

TODO: 
Hard tests
CSS tweaking
Add a "secret" form to the document to take care of uploads
Bypass mouse events
