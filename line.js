$(document).ready(function(){

    $('.progress-lines').viewportChecker({

        callbackFunction: function(elem, action){

        var bar = new ProgressBar.Line(line, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#000',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#fff',
      position: 'absolute',
      right: '0',
      top: '-25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(.5);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line(line2, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#000',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#fff',
      position: 'absolute',
      right: '0',
      top: '-25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(.9);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line(line3, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#000',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#fff',
      position: 'absolute',
      right: '0',
      top: '-25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(.8);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line(line4, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#000',
  trailColor: '#fff',
  trailWidth: 4,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#fff',
      position: 'absolute',
      right: '0',
      top: '-25px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(.2);  // Number from 0.0 to 1.0

    },

});

    });