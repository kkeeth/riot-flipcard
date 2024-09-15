import { __ as s, register as r } from "riot";
s.globals;
const l = {
  css: 'flipcard { display: block; position: relative; perspective: 500px; transform-origin: center; }flipcard .cardwrap,[is="flipcard"] .cardwrap{ transition: 0.5s; transform-style: preserve-3d; position: relative; }flipcard .flipx,[is="flipcard"] .flipx{ transform: rotateY(180deg); }flipcard .flipy,[is="flipcard"] .flipy{ transform: rotateX(180deg); }flipcard .flipy.flipx,[is="flipcard"] .flipy.flipx{ transform: rotate3d(-45,-45,0,180deg); }flipcard .back45 .back,[is="flipcard"] .back45 .back{ transform: rotate3d(45,45,0,180deg); }flipcard .backflip .back,[is="flipcard"] .backflip .back{ transform: rotate3d(180,0,0,180deg); }flipcard .front,[is="flipcard"] .front,flipcard .back,[is="flipcard"] .back{ background: white; position: absolute; box-sizing: border-box; padding: 10px; backface-visibility: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.2); }flipcard .front,[is="flipcard"] .front{ transform: rotateY(0deg); }flipcard .back,[is="flipcard"] .back{ transform: rotateY(180deg); background: #444; color: white; }',
  exports: {
    onBeforeMount(t) {
      this.state = {
        flipx: !1,
        flipy: !1,
        backflip: !1,
        back45: !1,
        direction: t.direction || "x"
      };
    },
    onMounted() {
      let t;
      this.root.style.width || (this.root.style.width = "100px"), this.root.style.height || (this.root.style.height = "100px"), this.root.style.display = "block", (t = this.state.direction) != null && t.match(/[xy]{2}/) && (this.state.back45 = !0), this.state.direction === "y" && (this.state.backflip = !0), [].slice.call(this.root.querySelectorAll(".front,.back,.cardwrap")).forEach((i) => (i.style.width = this.root.offsetWidth + "px", i.style.height = this.root.offsetHeight + "px")), this.update();
    },
    toggle() {
      let t, i;
      return (this.state.direction !== "y" || (t = this.state.direction) != null && t.match(/x/)) && (this.state.flipx = !this.state.flipx), (i = this.state.direction) != null && i.match(/y/) && (this.state.flipy = !this.state.flipy), this.update();
    },
    front() {
      let t, i;
      (this.state.direction !== "y" || (t = this.state.direction) != null && t.match(/x/)) && (this.state.flipx = !1), (i = this.state.direction) != null && i.match(/y/) && (this.state.flipy = !1), this.update();
    },
    back() {
      let t, i;
      (this.state.direction !== "y" || (t = this.state.direction) != null && t.match(/x/)) && (this.state.flipx = !0), (i = this.state.direction) != null && i.match(/y/) && (this.state.flipy = !0), this.update();
    },
    getClassNames() {
      const t = ["cardwrap"];
      return this.state.flipx && t.push("flipx"), this.state.flipy && t.push("flipy"), this.state.backflip && t.push("backflip"), this.state.back45 && t.push("back45"), t.join(" ");
    }
  },
  template: (t, i, a, o) => t(
    '<div expr0="expr0"><slot expr1="expr1"></slot></div>',
    [
      {
        redundantAttribute: "expr0",
        selector: "[expr0]",
        expressions: [
          {
            type: i.ATTRIBUTE,
            isBoolean: !1,
            name: "class",
            evaluate: (e) => e.getClassNames()
          }
        ]
      },
      {
        type: a.SLOT,
        attributes: [
          {
            type: i.ATTRIBUTE,
            isBoolean: !1,
            name: "toggle",
            evaluate: (e) => e.toggle
          },
          {
            type: i.ATTRIBUTE,
            isBoolean: !1,
            name: "back",
            evaluate: (e) => e.back
          }
        ],
        name: "default",
        template: t(
          null,
          [
            {
              expressions: [
                {
                  type: i.ATTRIBUTE,
                  isBoolean: !1,
                  name: "toggle",
                  evaluate: (e) => e.toggle
                },
                {
                  type: i.ATTRIBUTE,
                  isBoolean: !1,
                  name: "back",
                  evaluate: (e) => e.back
                }
              ]
            }
          ]
        ),
        redundantAttribute: "expr1",
        selector: "[expr1]"
      }
    ]
  ),
  name: "flipcard"
};
r("flipcard", l);
