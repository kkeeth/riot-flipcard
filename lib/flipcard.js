var flipcard = {
  css: `flipcard { display: block; position: relative; perspective: 500px; transform-origin: center; }flipcard .cardwrap,[is="flipcard"] .cardwrap{ transition: 0.5s; transform-style: preserve-3d; position: relative; }flipcard .flipx,[is="flipcard"] .flipx{ transform: rotateY(180deg); }flipcard .flipy,[is="flipcard"] .flipy{ transform: rotateX(180deg); }flipcard .flipy.flipx,[is="flipcard"] .flipy.flipx{ transform: rotate3d(-45,-45,0,180deg); }flipcard .back45 .back,[is="flipcard"] .back45 .back{ transform: rotate3d(45,45,0,180deg); }flipcard .backflip .back,[is="flipcard"] .backflip .back{ transform: rotate3d(180,0,0,180deg); }flipcard .front,[is="flipcard"] .front,flipcard .back,[is="flipcard"] .back{ background: white; position: absolute; box-sizing: border-box; padding: 10px; backface-visibility: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }flipcard .front,[is="flipcard"] .front{ transform: rotateY(0deg); }flipcard .back,[is="flipcard"] .back{ transform: rotateY(180deg); background: #444; color: white; }`,
  exports: {
    flipx: false,
    flipy: false,
    onMounted() {
      let ref;
      if (!this.root.style.width) {
        this.root.style.width = "100px";
      }
      if (!this.root.style.height) {
        this.root.style.height = "100px";
      }
      this.root.style.display = "block";
      if ((ref = opts.direction) != null ? ref.match(/[xy]{2}/) : void 0) {
        this.back45 = true;
      }
      if (opts.direction === "y") {
        this.backflip = true;
      }
      [].slice.call(this.root.querySelectorAll('.front,.back,.cardwrap')).forEach(elem => {
        elem.style.width = this.root.offsetWidth + "px";
        return elem.style.height = this.root.offsetHeight + "px";
      });
      this.update();
    },
    toggle() {
      var ref, ref1;
      if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
        this.flipx = !this.flipx;
      }
      if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
        this.flipy = !this.flipy;
      }
      return this.update();
    },
    front() {
      let ref, ref1;
      if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
        this.flipx = false;
      }
      if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
        this.flipy = false;
      }
      this.update();
    },
    back() {
      let ref, ref1;
      if (opts.direction !== "y" || ((ref = opts.direction) != null ? ref.match(/x/) : void 0)) {
        this.flipx = true;
      }
      if ((ref1 = opts.direction) != null ? ref1.match(/y/) : void 0) {
        this.flipy = true;
      }
      this.update();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div expr0="expr0"><slot expr1="expr1"></slot></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      isBoolean: false,
      name: 'class',
      evaluate: _scope => _scope.cardwrap("{flipx:flipx,flipy:flipy,backflip:backflip,back45:back45}")
    }]
  }, {
    type: bindingTypes.SLOT,
    attributes: [],
    name: 'default',
    template: template(null, []),
    redundantAttribute: 'expr1',
    selector: '[expr1]'
  }]),
  name: 'flipcard'
};

export { flipcard as default };
