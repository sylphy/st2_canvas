Ext.define('SP.view.Canvas', {
  extend: 'Ext.Component',
  xtype: 'canvas',
  template: [
    {
      tag: 'canvas', //this will create a <canvas> in html
      reference: 'canvas', //this will be use in the initialize
      className: Ext.baseCSSPrefix + 'canvas'
    }
  ],
  initialize: function() {
    // canvas要素のイベントをPanelのイベントに紐付ける
    this.canvas.on({
      tap: 'onTap',
      touchstart: 'onTouchStart',
      touchend: 'onTouchEnd',
      touchmove: 'onTouchMove',
      scope: this
    });
    var canvasElement = this.canvas.dom;
    canvasElement.width = 320;
    canvasElement.height = 240;
    var context = canvasElement.getContext('2d');
    context.moveTo(0, 0);
    context.lineTo(320, 240);
    context.stroke();
  },
  onTap:function(e) {
    this.fireEvent('tap',this,e);
  },
  onTouchStart:function(e) {
    this.fireEvent('touchstart',this,e);
  },
  onTouchEnd:function(e) {
    this.fireEvent('touchend',this,e);
  },
  onTouchMove:function(e) {
    this.fireEvent('touchmove',this,e);
  }
});
