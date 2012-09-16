Ext.define('SP.view.DrawPanel', {
  extend: 'Ext.Container',
  requires: ['Ext.Img', 'SP.view.Canvas'],
  xtype: 'drawPanel',
  config: {
    drawable: false,
    layout: 'fit',
    imgSrc: null,
    items: [
      {
        xtype: 'img',
        mode: 'image',
        width: '100%',
        height: '100%'
      },
      {
        xtype: 'canvas',
        layout: 'fit'
      }
    ]
  },
  initialize: function() {
    // set src to img element
    this.getAt(0).setSrc(this.getImgSrc());

    var canvas = this.getAt(1).canvas.dom;
    canvas.style.width = this.getWidth() + 'px';
    canvas.style.height = this.getHeight() + 'px';
  }
});
