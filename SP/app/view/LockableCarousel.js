Ext.define("SP.view.LockableCarousel", {
  extend: 'Ext.carousel.Carousel',
  xtype: 'lockablecarousel',
  config: {
    lock: false,
  },
  initialize: function() {
    var me = this;
    me.on('painted', this.layoutDrawPanel, me);
    me.on('resize', this.layoutDrawPanel, me);
  },
  // override ---
  onDragStart: function(e) {
    if (this._lock) {
      console.debug('carousel locked.');
      return;
    }
    
    this.callParent(arguments);
  },
  // keep 4:3 aspect ratio
  layoutDrawPanel: function() {
    var carousel = this;
    var el = carousel.element;
    console.debug('carousel', el.getWidth(), el.getHeight());

    var height = el.getHeight();
    var width = (height * 4) / 3;

    var drawPanels = carousel.items;
    for (var i=0; i<drawPanels.length; i++) {
      drawPanels.items[i].setWidth(width);
      drawPanels.items[i].setHeight(height);
    }
  }
});
