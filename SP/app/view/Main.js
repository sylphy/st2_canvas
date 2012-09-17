Ext.define("SP.view.Main", {
  extend: 'Ext.Panel',
  requires: [
    'Ext.TitleBar',
    'Ext.Button',
    //'Ext.carousel.Carousel',
    'SP.view.LockableCarousel',
    'SP.view.DrawPanel'
  ],
  id: 'mainPanel',
  config: {
    layout: 'vbox',
    drawable: false,
    items: [
      {
        docked: 'top',
        xtype: 'titlebar',
        title: 'sample',
        items: [
          {
            xtype: 'button',
            id: 'drawButton',
            text: 'draw'
          },{
            xtype: 'button',
            id: 'initButton',
            text: 'init'
          }
        ]
      },
      {
        //xtype: 'carousel',
        xtype: 'lockablecarousel',
        id: 'carousel',
        flex: 1,
        lock: false,
        indicator: false,
        items: [
          {
            xtype: 'drawPanel',
            imgSrc: 'doc_files/0.png',
          },
          {
            xtype: 'drawPanel',
            imgSrc: 'doc_files/1.png',
          },
          {
            xtype: 'drawPanel',
            imgSrc: 'doc_files/2.png',
          }
        ]
      }
    ]
  }
});
