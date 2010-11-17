/*
 * Upload button for ExtJS
 *
 */


Ext.ux.ButtonUpload = Ext.extend(Ext.Button, {
    
    // Didn't find a way to get the correct button height on render
    // So I define it here for buttons with scale.
    // If you know another way please give me your feedback
    small: "37",

    medium: "45",

    large: "53",

    height: "20",
    
    initComponent: function () {

       this.addEvents(
            /**
             * @event fileselected
             * Fires when the underlying file input field's value has changed from the user
             * selecting a new file from the system file selection dialog.
             * @param {Ext.ButtonUpload} this
             * @param {String} value The file value returned by the underlying file input field
             * @param {Ext.Element} The parent container of input field
             */
            'fileselected'
        );

        Ext.ux.ButtonUpload.superclass.initComponent.call(this);
    },


    onRender: function(ct, pos) {
        Ext.ux.ButtonUpload.superclass.onRender.call(this, ct, pos);

        var a = this.getBox();
        var h = this.scale ? this[this.scale] : this.height;
        
        this.cont = this.el.parent().createChild({
            id: 'd',
           style: "position:relative;width:" + a.width +"px;height:" +
               h +"px;overflow:hidden;cursor:pointer;"
        });
        
        var c = this.el.dom.childNodes;
        for (i = 0; i < c.length; i++) {
            d.appendChild(c[i]);
        }


        this.cont.addClass('x-btn');
        
        if (this.icon) {
            this.cont.addClass('x-btn-text-icon');
        }

        this.fileInput = this.cont.createChild({
            name: this.name || this.getId(),
            tag: 'input',
            type: 'file',
            style: "height:" + 500 + "px; top:-" + h + "px;width:" +
                500 +"px; opacity: 0; filter:alpha(opacity: 0);" +
                "cursor:pointer;position: relative; margin-left:-30px;",
            size:1
        });

        this.fileInput.on('change', function(){
            var v = this.fileInput.dom.value;
            this.fireEvent('fileselected', this, v, this.fileInput.parent());
        }, this);

        this.fileInput.addListener('mouseover',function(){this.cont.addClass('x-btn-over')}, this);
        this.fileInput.addListener('mouseout',function(){this.cont.removeClass('x-btn-over')}, this);
    }

})
Ext.reg('buttonupload', Ext.ux.ButtonUpload);