Ext.define('SP.controller.Main', {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      mainPanel: '#mainPanel',
      initButton: '#initButton',
      drawButton: '#drawButton',
      carousel: '#carousel',
      drawPanel: 'drawPanel'
    },
    control: {
      drawButton: {
        tap: 'toggleDrawMode'
      },
      initButton: {
        tap: 'initDrawPanel'
      }
    }
  },
  //called when the Application is launched, remove if not needed
  launch: function(app) {
  },
  toggleDrawMode: function(button, e, opts) {
    var mp = this.getMainPanel();
    var button = this.getDrawButton();
    var carousel = this.getCarousel();

    console.debug('toggleDrawMode', mp.getDrawable());

    if (mp.getDrawable()) {
      mp.setDrawable(false);
      button.setUi('normal');
      carousel.setLock(false);
    } else {
      mp.setDrawable(true);
      button.setUi('confirm');
      carousel.setLock(true);
    }
  },
  initDrawPanel: function() {
  }
});