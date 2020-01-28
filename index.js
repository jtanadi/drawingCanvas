!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gambar=e():t.gambar=e()}(window,(function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e){this.x=t,this.y=e}distanceToOther(t){return Math.sqrt(t.x-this.x^2-(t.y-this.y)^2)}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0);!function(t){t.BRUSH="BRUSH",t.DIAMOND="DIAMOND",t.ELLIPSE="ELLIPSE",t.LINE="LINE",t.RECTANGLE="RECTANGLE",t.POLYLINE="POLYLINE"}(e.PossibleShapes||(e.PossibleShapes={}));e.default=class{constructor(t,e,s,r){const n=t.x>e.x?e.x:t.x,h=t.y>e.y?e.y:t.y;this.start=new i.default(n,h),this.type=s,this.selected=!1,this.strokeColor=r.strokeColor,this.strokeWidth=r.strokeWidth,this.fillColor=r.fillColor,this.width=Math.abs(e.x-t.x),this.height=Math.abs(e.y-t.y)}draw(t){this.strokeColor&&this.strokeWidth&&(t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.stroke(this.path)),this.fillColor&&(t.fillStyle=this.fillColor,t.fill(this.path))}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1);class r extends i.default{constructor(t,e,s){super(t,e,i.PossibleShapes.RECTANGLE,s),this.path=new Path2D,this.path.rect(this.start.x,this.start.y,this.width,this.height)}}e.default=r},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(4),r=s(5);e.default=class{constructor(t){this.canvas=t;try{this.context=this.canvas.getContext("2d"),this.context.translate(.5,.5)}catch(t){console.log(t)}this.shapes=[],this.history=new i.default(10)}delete(){this.shapes=[],this.render()}clearSelection(){this.shapes.forEach(t=>{t.selected=!1}),this.render()}clearCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}rectangle(t,e,s,i=!0){this.clearSelection();const n=new r.Rectangle(t,e,s);i&&this.shapes.push(n),this.render(),i||n.draw(this.context)}ellipse(t,e,s,i=!0){this.clearSelection();const n=new r.Ellipse(t,e,s);i&&this.shapes.push(n),this.render(),i||n.draw(this.context)}line(t,e,s,i=!0){this.clearSelection();const n=new r.Line(t,e,s);i&&this.shapes.push(n),this.render(),i||n.draw(this.context)}diamond(t,e,s,i=!0){this.clearSelection();const n=new r.Diamond(t,e,s);i&&this.shapes.push(n),this.render(),i||n.draw(this.context)}polygon(t,e){throw new Error("Not yet implemented")}render(){this.clearCanvas(),this.shapes.forEach(t=>{t.draw(this.context)})}boundingBox(t,e,s){new r.BoundingBox(t,e,s).draw(this.context)}selectShapeAtPoint(t,e=!0){e&&this.clearSelection();const s=this.findShapeAtPoint(t);s&&(s.selected=!0)}findShapeAtPoint(t){for(let e=this.shapes.length-1;e>=0;e--){const s=this.shapes[e];if(this.context.isPointInPath(s.path,t.x,t.y))return s}return null}moveShape(t,e){console.log(this.shapes),this.shapes=this.shapes.map(s=>(s===t&&(s.start=e),s)),console.log(this.shapes)}loadStack(t){this.shapes=t,this.render()}getDrawingData(){return this.canvas.toDataURL()}getShapeStack(){return this.shapes}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t){if(t<1)throw new Error("Capacity must be larger than 0");this.capacity=t,this.start=0,this.currentIdx=0,this.circular=!1,this.stack=new Array(this.capacity).fill(null)}clear(){this.stack.fill(null),this.start=0,this.currentIdx=0}push(t){this.stack[this.currentIdx++]=t,this.currentIdx>=this.stack.length&&(this.currentIdx=0,this.circular=!0),this.circular&&this.currentIdx>this.start&&(this.start=this.currentIdx)}pop(){this.currentIdx<=0&&(this.currentIdx=this.stack.length);const t=this.stack[--this.currentIdx];return this.start<=this.currentIdx&&(this.circular=!1),t}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(6);e.BoundingBox=i.default;const r=s(7);e.Diamond=r.default;const n=s(8);e.Ellipse=n.default;const h=s(9);e.Line=h.default;const a=s(0);e.Point=a.default;const o=s(2);e.Rectangle=o.default;const l=s(1);e.Shape=l.default},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),r=s(2);e.default=class{constructor(t,e,s){this.handleStyle=s;const n=new i.default(t.start.x+t.width,t.start.y+t.height);this.box=new r.default(t.start,n,e),this.points=[t.start,new i.default(t.start.x+t.width,t.start.y),new i.default(t.start.x+t.width,t.start.y+t.height),new i.default(t.start.x,t.start.y+t.height),new i.default(t.start.x+t.width/2,t.start.y),new i.default(t.start.x+t.width,t.start.y+t.height/2),new i.default(t.start.x+t.width/2,t.start.y+t.height),new i.default(t.start.x,t.start.y+t.height/2)]}drawHandle(t,e){const s=new i.default(t.x-5,t.y-5),n=new i.default(t.x+5,t.y+5);new r.default(s,n,this.handleStyle).draw(e)}draw(t){this.box.draw(t),this.points.forEach(e=>this.drawHandle(e,t))}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),r=s(1);class n extends r.default{constructor(t,e,s){super(t,e,r.PossibleShapes.DIAMOND,s);const{x:n,y:h}=this.start,a=new i.default(n+this.width/2,h),o=new i.default(n+this.width,h+this.height/2),l=new i.default(n+this.width/2,h+this.height),c=new i.default(n,h+this.height/2);this.path=new Path2D,this.path.moveTo(a.x,a.y),this.path.lineTo(o.x,o.y),this.path.lineTo(l.x,l.y),this.path.lineTo(c.x,c.y),this.path.lineTo(a.x,a.y)}}e.default=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(0),r=s(1);class n extends r.default{constructor(t,e,s){super(t,e,r.PossibleShapes.ELLIPSE,s);const n=Math.abs(e.x-t.x)/2,h=Math.abs(e.y-t.y)/2;this.r=new i.default(n,h);const a=e.x>t.x?t.x+this.r.x:t.x-this.r.x,o=e.y>t.y?t.y+this.r.y:t.y-this.r.y;this.c=new i.default(a,o),this.path=new Path2D,this.path.ellipse(this.c.x,this.c.y,this.r.x,this.r.y,0,0,2*Math.PI)}}e.default=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(1);class r extends i.default{constructor(t,e,s){super(t,e,i.PossibleShapes.LINE,s),this.start=t,this.end=e,this.path=new Path2D,this.path.moveTo(this.start.x,this.start.y),this.path.lineTo(this.end.x,this.end.y)}}e.default=r}])}));