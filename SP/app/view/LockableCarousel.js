Ext.define("SP.view.LockableCarousel", {
  extend: 'Ext.carousel.Carousel',
  xtype: 'lockablecarousel',
  config: {
    lock: false,
  },
  // override ---
  onDragStart: function(e) {
    if (this._lock) {
      console.debug('carousel locked.');
      return;
    }
    
    this.callParent(arguments);
  }
});
