!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gambar=e():t.gambar=e()}(window,(function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=3)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e){this.x=t,this.y=e}distanceToOther(t){return Math.sqrt(t.x-this.x^2-(t.y-this.y)^2)}}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(6)),a=i(s(0));!function(t){t.BRUSH="BRUSH",t.DIAMOND="DIAMOND",t.ELLIPSE="ELLIPSE",t.LINE="LINE",t.RECTANGLE="RECTANGLE",t.POLYGON="POLYGON",t.POLYLINE="POLYLINE"}(e.PossibleShapes||(e.PossibleShapes={}));e.default=class{constructor(t,e,s,i){this.id=r.default();const n=t.x>e.x?e.x:t.x,h=t.y>e.y?e.y:t.y;this.start=new a.default(n,h),this.type=s,this.selected=!1,this.strokeColor=i.strokeColor,this.strokeWidth=i.strokeWidth,this.fillColor=i.fillColor,this.width=Math.abs(e.x-t.x),this.height=Math.abs(e.y-t.y)}draw(t){this.fillColor&&(t.fillStyle=this.fillColor,t.fill(this.path)),this.strokeColor&&this.strokeWidth&&(t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.stroke(this.path))}move(t){this.start=new a.default(this.start.x+t.x,this.start.y+t.y),this.createShape()}}},function(t,e,s){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(1));class a extends r.default{constructor(t,e,s){super(t,e,r.PossibleShapes.RECTANGLE,s),this.createShape()}createShape(){this.path=new Path2D,this.path.rect(this.start.x,this.start.y,this.width,this.height)}}e.default=a},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(4);e.default=class{constructor(t,e){this.canvas=t;try{this.context=this.canvas.getContext("2d"),this.context.translate(.5,.5)}catch(t){console.error(t)}e&&(this.bBoxNodeStyle=e.nodeStyle,this.bBoxEdgeStyle=e.edgeStyle),this.shapes=[]}rectangle(t,e,s,r=!0){this.clearSelection();const a=new i.Rectangle(t,e,s);r&&this.shapes.push(a),this.render(),r||a.draw(this.context)}ellipse(t,e,s,r=!0){this.clearSelection();const a=new i.Ellipse(t,e,s);r&&this.shapes.push(a),this.render(),r||a.draw(this.context)}line(t,e,s,r=!0){this.clearSelection();const a=new i.Line(t,e,s);r&&this.shapes.push(a),this.render(),r||a.draw(this.context)}polygon(t,e,s=!0){const r=new i.Polygon(t,e);s&&this.shapes.push(r),this.render(),s||r.draw(this.context)}polyline(t,e,s=!0){const r=new i.Polyline(t,e);s&&this.shapes.push(r),this.render(),s||r.draw(this.context)}boundingBox(t){if(this.bBoxNodeStyle&&this.bBoxEdgeStyle){new i.BoundingBox(t,this.bBoxEdgeStyle,this.bBoxNodeStyle).draw(this.context)}}render(){this.clearCanvas(),this.context.save(),this.shapes.forEach(t=>{t.draw(this.context)}),this.shapes.forEach(t=>{t.selected&&this.boundingBox(t)}),this.context.restore()}deleteAll(){this.shapes=[],this.render()}deleteShape(t){this.shapes=this.shapes.filter(e=>e.id!==t.id),this.render()}clearSelection(){this.shapes.forEach(t=>{t.selected=!1}),this.render()}clearCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}selectShapeAtPoint(t,e=!0){e&&this.clearSelection();const s=this.findShapeAtPoint(t);return s&&(s.selected=!0),this.render(),s}findShapeAtPoint(t){for(let e=this.shapes.length-1;e>=0;e--){const s=this.shapes[e];if(this.context.isPointInPath(s.path,t.x,t.y))return s}return null}findSelectedShapes(){const t=[];return this.shapes.forEach((e,s)=>{e.selected&&t.push([e,s])}),t}swapLayerOrder(t,e){const s=this.shapes[t];this.shapes[t]=this.shapes[e],this.shapes[e]=s}pushSelectedShapesBackward(){const t=this.findSelectedShapes();for(const[,e]of t)e>0&&this.swapLayerOrder(e,e-1);this.render()}pullSelectedShapesForward(){const t=this.findSelectedShapes();for(let e=t.length-1;e>=0;e--)t[e][1]<this.shapes.length-1&&this.swapLayerOrder(e,e+1);this.render()}moveSelectedShapes(t){const e=this.findSelectedShapes();for(const[s]of e)s.move(t);this.render()}popShape(){const t=this.shapes.pop();return this.render(),t}pushShape(t){this.shapes.push(t),this.render()}loadStack(t){this.shapes=t,this.render()}getShapeStack(){return this.shapes}getDrawingData(){return this.canvas.toDataURL()}}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(5));e.BoundingBox=r.default;const a=i(s(7));e.Ellipse=a.default;const n=i(s(8));e.Line=n.default;const h=i(s(0));e.Point=h.default;const o=i(s(9));e.Polygon=o.default;const l=i(s(10));e.Polyline=l.default;const u=i(s(2));e.Rectangle=u.default;const c=i(s(1));e.Shape=c.default},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(0)),a=i(s(2));e.default=class{constructor(t,e,s){this.handleStyle=s;const i=new r.default(t.start.x+t.width,t.start.y+t.height);this.box=new a.default(t.start,i,e),this.points=[t.start,new r.default(t.start.x+t.width,t.start.y),new r.default(t.start.x+t.width,t.start.y+t.height),new r.default(t.start.x,t.start.y+t.height),new r.default(t.start.x+t.width/2,t.start.y),new r.default(t.start.x+t.width,t.start.y+t.height/2),new r.default(t.start.x+t.width/2,t.start.y+t.height),new r.default(t.start.x,t.start.y+t.height/2)]}drawHandle(t,e){const s=new r.default(t.x-5,t.y-5),i=new r.default(t.x+5,t.y+5);new a.default(s,i,this.handleStyle).draw(e)}draw(t){this.box.draw(t),this.points.forEach(e=>this.drawHandle(e,t))}}},function(t,e,s){for(var i=self.crypto||self.msCrypto,r="-_",a=36;a--;)r+=a.toString(36);for(a=36;a---10;)r+=a.toString(36).toUpperCase();t.exports=function(t){var e="",s=i.getRandomValues(new Uint8Array(t||21));for(a=t||21;a--;)e+=r[63&s[a]];return e}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const a=i(s(0)),n=r(s(1));class h extends n.default{constructor(t,e,s){super(t,e,n.PossibleShapes.ELLIPSE,s),this.createShape()}createShape(){const t=new a.default(this.start.x+this.width,this.start.y+this.height),e=Math.abs(t.x-this.start.x)/2,s=Math.abs(t.y-this.start.y)/2;this.r=new a.default(e,s);const i=t.x>this.start.x?this.start.x+this.r.x:this.start.x-this.r.x,r=t.y>this.start.y?this.start.y+this.r.y:this.start.y-this.r.y;this.c=new a.default(i,r),this.path=new Path2D,this.path.ellipse(this.c.x,this.c.y,this.r.x,this.r.y,0,0,2*Math.PI)}}e.default=h},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const a=i(s(0)),n=r(s(1));class h extends n.default{constructor(t,e,s){super(t,e,n.PossibleShapes.LINE,s),this.start=t,this.end=e,this.createShape()}move(t){this.start=new a.default(this.start.x+t.x,this.start.y+t.y),this.end=new a.default(this.end.x+t.x,this.end.y+t.y),this.createShape()}createShape(){this.path=new Path2D,this.path.moveTo(this.start.x,this.start.y),this.path.lineTo(this.end.x,this.end.y)}}e.default=h},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const a=i(s(0)),n=r(s(1));class h extends n.default{constructor(t,e){let s=1/0,i=1/0,r=-1/0,h=-1/0;for(const e of t)e.x<s&&(s=e.x),e.y<i&&(i=e.y),e.x>r&&e.x>s&&(r=e.x),e.y>h&&e.y>i&&(h=e.y);super(new a.default(s,i),new a.default(r,h),n.PossibleShapes.POLYGON,e),this.points=t,this.createShape()}move(t){this.start=new a.default(this.start.x+t.x,this.start.y+t.y),this.points=this.points.map(e=>new a.default(e.x+t.x,e.y+t.y)),this.createShape()}createShape(){this.path=new Path2D,this.path.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.points.length;t++)this.path.lineTo(this.points[t].x,this.points[t].y);this.path.lineTo(this.points[0].x,this.points[0].y)}}e.default=h},function(t,e,s){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(1));class a extends r.default{constructor(t,e){super(t[0],t[t.length-1],r.PossibleShapes.POLYLINE,e),this.points=t}move(t){throw new Error("Not yet implemented")}createShape(){this.path=new Path2D,this.path.moveTo(this.path[0].x,this.path[0].y);for(let t=1;t<this.points.length;t++)this.path.lineTo(this.path[0].x,this.path[0].y)}}e.default=a}])}));