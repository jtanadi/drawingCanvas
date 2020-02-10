!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.gambar=e():t.gambar=e()}(window,(function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=5)}([function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(t,e){this.setPoint(t,e)}setPoint(t,e){this.x=t,this.y=e}distanceToOther(t){return Math.sqrt(t.x-this.x^2-(t.y-this.y)^2)}}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(8)),n=i(s(0));!function(t){t.BRUSH="BRUSH",t.DIAMOND="DIAMOND",t.ELLIPSE="ELLIPSE",t.LINE="LINE",t.RECTANGLE="RECTANGLE",t.POLYGON="POLYGON",t.POLYLINE="POLYLINE"}(e.PossibleShapes||(e.PossibleShapes={}));e.default=class{constructor(t,e,s,i,h){h&&(this.id=r.default());const a=t.x<e.x?t.x:e.x,o=t.y<e.y?t.y:e.y;this.start=new n.default(a,o),this.type=s,this.selected=!1,this.strokeColor=i.strokeColor,this.strokeWidth=i.strokeWidth,this.fillColor=i.fillColor,this.width=Math.abs(e.x-t.x),this.height=Math.abs(e.y-t.y)}draw(t){this.fillColor&&(t.fillStyle=this.fillColor,t.fill(this.path)),this.strokeColor&&this.strokeWidth&&(t.strokeStyle=this.strokeColor,t.lineWidth=this.strokeWidth,t.stroke(this.path))}move(t){this.start=new n.default(this.start.x+t.x,this.start.y+t.y),this.createShape()}}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(0));e.getNwSeCorners=function(t){let e=t[0].x,s=t[0].y,i=t[0].x,n=t[0].y;for(const r of t)r.x<e&&(e=r.x),r.y<s&&(s=r.y),r.x>i&&r.x>e&&(i=r.x),r.y>n&&r.y>s&&(n=r.y);return[new r.default(e,s),new r.default(i,n)]}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(0)),h=r(s(1));class a extends h.default{constructor(t,e,s,i){super(t,e,h.PossibleShapes.LINE,s,i),this.start=t,this.lineEnd=e,this.createShape(),this.pseudoPath=this.createPseudoPath(this.strokeWidth<4?4:this.strokeWidth)}move(t){this.start=new n.default(this.start.x+t.x,this.start.y+t.y),this.lineEnd=new n.default(this.lineEnd.x+t.x,this.lineEnd.y+t.y),this.createShape(),this.pseudoPath=this.createPseudoPath(this.strokeWidth<4?4:this.strokeWidth)}drawPseudoPath(t){t.strokeStyle="gray",t.lineWidth=1,t.stroke(this.pseudoPath)}createShape(){this.path=new Path2D,this.path.moveTo(this.start.x,this.start.y),this.path.lineTo(this.lineEnd.x,this.lineEnd.y)}createPseudoPath(t){const e=(this.lineEnd.y-this.start.y)/(this.lineEnd.x-this.start.x),s=-1/e,i=this.start.x+Math.sqrt(Math.pow(t,2)/(1+1/Math.pow(e,2))),r=this.start.x-Math.sqrt(Math.pow(t,2)/(1+1/Math.pow(e,2))),n=this.start.y-s*this.start.x,h=s*i+n,a=s*r+n,o=this.lineEnd.x+Math.sqrt(Math.pow(t,2)/(1+1/Math.pow(e,2))),l=this.lineEnd.x-Math.sqrt(Math.pow(t,2)/(1+1/Math.pow(e,2))),u=this.lineEnd.y-s*this.lineEnd.x,c=s*o+u,d=s*l+u,f=new Path2D;return f.moveTo(i,h),f.lineTo(o,c),f.lineTo(l,d),f.lineTo(r,a),f.lineTo(i,h),f}}e.default=a},function(t,e,s){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(1));class n extends r.default{constructor(t,e,s,i){super(t,e,r.PossibleShapes.RECTANGLE,s,i),this.createShape()}createShape(){this.path=new Path2D,this.path.rect(this.start.x,this.start.y,this.width,this.height)}}e.default=n},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const i=s(6);e.default=class{constructor(t,e){this.canvas=t;try{this.context=this.canvas.getContext("2d"),this.context.translate(.5,.5)}catch(t){console.error(t)}e&&(this.bBoxNodeStyle=e.nodeStyle,this.bBoxEdgeStyle=e.edgeStyle),this.shapes=[]}rectangle(t,e,s,r=!0){this.clearSelection();const n=new i.Rectangle(t,e,s,r);r&&this.shapes.push(n),this.render(),r||n.draw(this.context)}ellipse(t,e,s,r=!0){this.clearSelection();const n=new i.Ellipse(t,e,s,r);r&&this.shapes.push(n),this.render(),r||n.draw(this.context)}line(t,e,s,r=!0){this.clearSelection();const n=new i.Line(t,e,s,r);r&&this.shapes.push(n),this.render(),r||n.draw(this.context)}polygon(t,e,s=!0){this.clearSelection();const r=new i.Polygon(t,e,s);s&&this.shapes.push(r),this.render(),s||r.draw(this.context)}polyline(t,e,s=!0){this.clearSelection();const r=new i.Polyline(t,e,s);s&&this.shapes.push(r),this.render(),s||r.draw(this.context)}boundingBox(t){if(this.bBoxNodeStyle&&this.bBoxEdgeStyle){new i.BoundingBox(t,this.bBoxEdgeStyle,this.bBoxNodeStyle).draw(this.context)}}render(){this.clearCanvas(),this.context.save(),this.shapes.forEach(t=>{t.draw(this.context)}),this.shapes.forEach(t=>{t.selected&&this.boundingBox(t)}),this.context.restore()}deleteAll(){this.shapes=[],this.render()}deleteShape(t){this.shapes=this.shapes.filter(e=>e.id!==t.id),this.render()}clearSelection(){this.shapes.forEach(t=>{t.selected=!1}),this.render()}clearCanvas(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}selectShapeAtPoint(t,e=!0){e&&this.clearSelection();const s=this.findShapeAtPoint(t);return s&&(s.selected=!0),this.render(),s}findShapeAtPoint(t){for(let e=this.shapes.length-1;e>=0;e--){const s=this.shapes[e];if(s instanceof i.Line){if(this.context.isPointInPath(s.pseudoPath,t.x,t.y))return s}else if(this.context.isPointInPath(s.path,t.x,t.y))return s}return null}findSelectedShapes(){const t=[];return this.shapes.forEach((e,s)=>{e.selected&&t.push([e,s])}),t}swapLayerOrder(t,e){const s=this.shapes[t];this.shapes[t]=this.shapes[e],this.shapes[e]=s}pushSelectedShapesBackward(){const t=this.findSelectedShapes();for(const[,e]of t)e>0&&this.swapLayerOrder(e,e-1);this.render()}pullSelectedShapesForward(){const t=this.findSelectedShapes();for(let e=t.length-1;e>=0;e--){const[,s]=t[e];s<this.shapes.length-1&&this.swapLayerOrder(s,s+1)}this.render()}moveSelectedShapes(t){const e=this.findSelectedShapes();for(const[s]of e)s.move(t);this.render()}popShape(){const t=this.shapes.pop();return this.render(),t}pushShape(t){this.shapes.push(t),this.render()}loadStack(t){this.shapes=t,this.render()}getShapeStack(){return this.shapes}getDrawingData(){return this.canvas.toDataURL()}}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(7));e.BoundingBox=n.default;const h=i(s(9));e.Ellipse=h.default;const a=i(s(3));e.Line=a.default;const o=i(s(0));e.Point=o.default;const l=i(s(10));e.Polygon=l.default;const u=i(s(11));e.Polyline=u.default;const c=i(s(4));e.Rectangle=c.default;const d=r(s(1));e.Shape=d.default,e.PossibleShapes=d.PossibleShapes},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(0)),n=i(s(3)),h=i(s(4)),a=s(2);e.default=class{constructor(t,e,s){let i,o;this.handleStyle=s,t instanceof n.default?[i,o]=a.getNwSeCorners([t.start,t.lineEnd]):(i=t.start,o=new r.default(t.start.x+t.width,t.start.y+t.height)),this.box=new h.default(i,o,e,!1),this.points=[i,new r.default(i.x+t.width,i.y),new r.default(i.x+t.width,i.y+t.height),new r.default(i.x,i.y+t.height),new r.default(i.x+t.width/2,i.y),new r.default(i.x+t.width,i.y+t.height/2),new r.default(i.x+t.width/2,i.y+t.height),new r.default(i.x,i.y+t.height/2)]}drawHandle(t,e){const s=new r.default(t.x-5,t.y-5),i=new r.default(t.x+5,t.y+5);new h.default(s,i,this.handleStyle,!1).draw(e)}draw(t){this.box.draw(t),this.points.forEach(e=>this.drawHandle(e,t))}}},function(t,e,s){for(var i=self.crypto||self.msCrypto,r="-_",n=36;n--;)r+=n.toString(36);for(n=36;n---10;)r+=n.toString(36).toUpperCase();t.exports=function(t){var e="",s=i.getRandomValues(new Uint8Array(t||21));for(n=t||21;n--;)e+=r[63&s[n]];return e}},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(0)),h=r(s(1));class a extends h.default{constructor(t,e,s,i){super(t,e,h.PossibleShapes.ELLIPSE,s,i),this.createShape()}createShape(){const t=new n.default(this.start.x+this.width,this.start.y+this.height),e=Math.abs(t.x-this.start.x)/2,s=Math.abs(t.y-this.start.y)/2;this.r=new n.default(e,s);const i=t.x>this.start.x?this.start.x+this.r.x:this.start.x-this.r.x,r=t.y>this.start.y?this.start.y+this.r.y:this.start.y-this.r.y;this.c=new n.default(i,r),this.path=new Path2D,this.path.ellipse(this.c.x,this.c.y,this.r.x,this.r.y,0,0,2*Math.PI)}}e.default=a},function(t,e,s){"use strict";var i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const n=i(s(0)),h=r(s(1)),a=s(2);class o extends h.default{constructor(t,e,s){const[i,r]=a.getNwSeCorners(t);super(i,r,h.PossibleShapes.POLYGON,e,s),this.points=t,this.createShape()}move(t){this.start=new n.default(this.start.x+t.x,this.start.y+t.y),this.points=this.points.map(e=>new n.default(e.x+t.x,e.y+t.y)),this.createShape()}createShape(){this.path=new Path2D,this.path.moveTo(this.points[0].x,this.points[0].y);for(let t=1;t<this.points.length;t++)this.path.lineTo(this.points[t].x,this.points[t].y);this.path.lineTo(this.points[0].x,this.points[0].y)}}e.default=o},function(t,e,s){"use strict";var i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const r=i(s(1)),n=s(2);class h extends r.default{constructor(t,e,s){const[i,h]=n.getNwSeCorners(t);super(i,h,r.PossibleShapes.POLYLINE,e,s),this.points=t}move(t){throw new Error("Not yet implemented")}createShape(){this.path=new Path2D,this.path.moveTo(this.path[0].x,this.path[0].y);for(let t=1;t<this.points.length;t++)this.path.lineTo(this.path[0].x,this.path[0].y)}}e.default=h}])}));