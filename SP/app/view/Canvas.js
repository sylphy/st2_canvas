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
  config: {
    canvasWidth: 320,
    canvasHeight: 240
  },
  initialize: function() {

    // canvas要素のイベントをこのCanvasコンポーネントのイベントに紐付ける
    this.canvas.on({
      tap: 'onTap',
      touchstart: 'onTouchStart',
      touchend: 'onTouchEnd',
      touchmove: 'onTouchMove',
      scope: this
    });

    // canvas要素の座標サイズ設定
    console.debug('canvas initialize', this, this._canvasWidth, this._canvasHeight);

    var canvasElement = this.canvas.dom;
    canvasElement.width = this._canvasWidth;
    canvasElement.height = this._canvasHeight;

    canvasElement.style.width = '100%';
    canvasElement.style.height = '100%';

    // canvas内容の初期化
    var context = canvasElement.getContext('2d');
    context.moveTo(0, 0);
    context.lineTo(this._canvasWidth, this._canvasHeight);
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
