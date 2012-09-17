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
    // set 'src' to <img>
    this.getAt(0).setSrc(this.getImgSrc());
  }
  
});
