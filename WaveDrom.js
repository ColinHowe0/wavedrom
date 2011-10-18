function base64_encode(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var c,d,e,f,g,h,i,j,k=0,l=0,m="",n=[];if(!a){return a}a=this.utf8_encode(a+"");do{c=a.charCodeAt(k++);d=a.charCodeAt(k++);e=a.charCodeAt(k++);j=c<<16|d<<8|e;f=j>>18&63;g=j>>12&63;h=j>>6&63;i=j&63;n[l++]=b.charAt(f)+b.charAt(g)+b.charAt(h)+b.charAt(i)}while(k<a.length);m=n.join("");var o=a.length%3;return(o?m.slice(0,o-3):m)+"===".slice(o||3)}function utf8_encode(a){if(a===null||typeof a==="undefined"){return""}var b=a+"";var c="",d,e,f=0;d=e=0;f=b.length;for(var g=0;g<f;g++){var h=b.charCodeAt(g);var i=null;if(h<128){e++}else if(h>127&&h<2048){i=String.fromCharCode(h>>6|192)+String.fromCharCode(h&63|128)}else{i=String.fromCharCode(h>>12|224)+String.fromCharCode(h>>6&63|128)+String.fromCharCode(h&63|128)}if(i!==null){if(e>d){c+=b.slice(d,e)}c+=i;d=e=g+1}}if(e>d){c+=b.slice(d,f)}return c}var JsonML;if("undefined"===typeof JsonML){JsonML={}}(function(){function l(a,b,c){for(var d=1;d<b.length;d++){if(b[d]instanceof Array||"string"===typeof b[d]){f(a,JsonML.parse(b[d],c))}else if(b[d]instanceof j){f(a,i(b[d].value))}else if("object"===typeof b[d]&&b[d]!==null&&a.nodeType===1){a=e(a,b[d])}}return a}function k(a,b,c){return document.createTextNode("["+a+"]")}function j(a){this.value=a}function i(a){var b=document.createElement("div");b.innerHTML=a;h(b);if(b.childNodes.length===1){return b.firstChild}var c=document.createDocumentFragment?document.createDocumentFragment():document.createElement("");while(b.firstChild){c.appendChild(b.firstChild)}return c}function h(a){if(a){while(g(a.firstChild)){a.removeChild(a.firstChild)}while(g(a.lastChild)){a.removeChild(a.lastChild)}}}function g(a){return a&&a.nodeType===3&&(!a.nodeValue||!/\S/.exec(a.nodeValue))}function f(a,b){if(b){if(a.tagName&&a.tagName.toLowerCase()==="table"&&a.tBodies){if(!b.tagName){if(b.nodeType===11){while(b.firstChild){f(a,b.removeChild(b.firstChild))}}return}var c=b.tagName.toLowerCase();if(c&&c!=="tbody"&&c!=="thead"){var d=a.tBodies.length>0?a.tBodies[a.tBodies.length-1]:null;if(!d){d=document.createElement(c==="th"?"thead":"tbody");a.appendChild(d)}d.appendChild(b)}else if(a.canHaveChildren!==false){a.appendChild(b)}}else if(a.tagName&&a.tagName.toLowerCase()==="style"&&document.createStyleSheet){a.cssText=b}else if(a.canHaveChildren!==false){a.appendChild(b)}else if(a.tagName&&a.tagName.toLowerCase()==="object"&&b.tagName&&b.tagName.toLowerCase()==="param"){try{a.appendChild(b)}catch(e){}try{if(a.object){a.object[b.name]=b.value}}catch(g){}}}}function e(e,f){if(f.name&&document.attachEvent){try{var g=document.createElement("<"+e.tagName+" name='"+f.name+"'>");if(e.tagName===g.tagName){e=g}}catch(h){}}for(var i in f){if(f.hasOwnProperty(i)){var j=f[i];if(i&&j!==null&&"undefined"!==typeof j){i=a[i.toLowerCase()]||i;if(i==="style"){if("undefined"!==typeof e.style.cssText){e.style.cssText=j}else{e.style=j}}else if(i==="class"){e.className=j;e.setAttribute(i,j)}else if(c[i]){d(e,i,j);if(b[i]){d(e,b[i],j)}}else if("string"===typeof j||"number"===typeof j||"boolean"===typeof j){e.setAttribute(i,j);if(b[i]){e.setAttribute(b[i],j)}}else{e[i]=j;if(b[i]){e[b[i]]=j}}}}}return e}function d(a,b,c){if("string"===typeof c){c=new Function("event",c)}if("function"!==typeof c){return}a[b]=c}var a={rowspan:"rowSpan",colspan:"colSpan",cellpadding:"cellPadding",cellspacing:"cellSpacing",tabindex:"tabIndex",accesskey:"accessKey",hidefocus:"hideFocus",usemap:"useMap",maxlength:"maxLength",readonly:"readOnly",contenteditable:"contentEditable"},b={enctype:"encoding",onscroll:"DOMMouseScroll"},c=function(a){var b={};while(a.length){var c=a.shift();b["on"+c.toLowerCase()]=c}return b}("blur,change,click,dblclick,error,focus,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,resize,scroll,select,submit,unload".split(","));JsonML.onerror=null;JsonML.parse=function(a,b){try{if(!a){return null}if("string"===typeof a){return document.createTextNode(a)}if(a instanceof j){return i(a.value)}if(!JsonML.isElement(a)){throw new SyntaxError("invalid JsonML")}var c=a[0];if(!c){var d=document.createDocumentFragment?document.createDocumentFragment():document.createElement("");for(var e=1;e<a.length;e++){f(d,JsonML.parse(a[e],b))}h(d);if(d.childNodes.length===1){return d.firstChild}return d}if(c.toLowerCase()==="style"&&document.createStyleSheet){JsonML.patch(document.createStyleSheet(),a,b);return null}svgns="http://www.w3.org/2000/svg";var g;g=l(document.createElementNS(svgns,c),a,b);h(g);return g&&"function"===typeof b?b(g):g}catch(m){try{var n="function"===typeof JsonML.onerror?JsonML.onerror:k;return n(m,a,b)}catch(o){return document.createTextNode("["+o+"]")}}};JsonML.isElement=function(a){return a instanceof Array&&"string"===typeof a[0]}})();var WaveDrom={version:"0.6.2",timer:0,lane:{xs:20,ys:20,xg:120,y0:10,yo:30,tgo:-10,ym:15,xlabel:6,xmax:1,scale:1},canvas:{heigth:85},panela:{ys:200},genBrick:function(a,b,c){"use strict";var d,e,f=[];if(a.length===4){for(e=0;e<c;e+=1){f.push(a[0]);for(d=0;d<b;d+=1){f.push(a[1])}f.push(a[2]);for(d=0;d<b;d+=1){f.push(a[3])}}return f}if(a.length===1){a.push(a[0])}f.push(a[0]);for(d=0;d<c*2*(b+1)-1;d+=1){f.push(a[1])}return f},genFirstWaveBrick:function(a,b,c){"use strict";switch(a){case"p":return this.genBrick(["pclk","111","nclk","000"],b,c);case"n":return this.genBrick(["nclk","000","pclk","111"],b,c);case"P":return this.genBrick(["Pclk","111","nclk","000"],b,c);case"N":return this.genBrick(["Nclk","000","pclk","111"],b,c);case"0":return this.genBrick(["000"],b,c);case"1":return this.genBrick(["111"],b,c);case"=":return this.genBrick(["vvv-2"],b,c);case"2":return this.genBrick(["vvv-2"],b,c);case"3":return this.genBrick(["vvv-3"],b,c);case"4":return this.genBrick(["vvv-4"],b,c);case"5":return this.genBrick(["vvv-5"],b,c);case"d":return this.genBrick(["ddd"],b,c);case"u":return this.genBrick(["uuu"],b,c);case"z":return this.genBrick(["zzz"],b,c);default:return this.genBrick(["xxx"],b,c)}},genWaveBrick:function(a,b,c){"use strict";var d,e={"00":["0m0","000"],"01":["0m1","111"],"0x":["0mx","xxx"],"0d":["0md","ddd"],"0u":["0mu","uuu"],"0z":["0mz","zzz"],"0=":["0mv-2","vvv-2"],"02":["0mv-2","vvv-2"],"03":["0mv-3","vvv-3"],"04":["0mv-4","vvv-4"],"05":["0mv-5","vvv-5"],10:["1m0","000"],11:["1m1","111"],"1x":["1mx","xxx"],"1d":["1md","ddd"],"1u":["1mu","uuu"],"1z":["1mz","zzz"],"1=":["1mv-2","vvv-2"],12:["1mv-2","vvv-2"],13:["1mv-3","vvv-3"],14:["1mv-4","vvv-4"],15:["1mv-5","vvv-5"],x0:["xm0","000"],x1:["xm1","111"],xx:["xmx","xxx"],xd:["xmd","ddd"],xu:["xmu","uuu"],xz:["xmz","zzz"],"x=":["xmv-2","vvv-2"],x2:["xmv-2","vvv-2"],x3:["xmv-3","vvv-3"],x4:["xmv-4","vvv-4"],x5:["xmv-5","vvv-5"],".0":["xm0","000"],".1":["xm1","111"],".x":["xmx","xxx"],".d":["xmd","ddd"],".u":["xmu","uuu"],".z":["xmz","zzz"],".=":["xmv-2","vvv-2"],".2":["xmv-2","vvv-2"],".3":["xmv-3","vvv-3"],".4":["xmv-4","vvv-4"],".5":["xmv-5","vvv-5"],d0:["dm0","000"],d1:["dm1","111"],dx:["dmx","xxx"],dd:["dmd","ddd"],du:["dmu","uuu"],dz:["dmz","zzz"],"d=":["dmv-2","vvv-2"],d2:["dmv-2","vvv-2"],d3:["dmv-3","vvv-3"],d4:["dmv-4","vvv-4"],d5:["dmv-5","vvv-5"],u0:["um0","000"],u1:["um1","111"],ux:["umx","xxx"],ud:["umd","ddd"],uu:["umu","uuu"],uz:["umz","zzz"],"u=":["umv-2","vvv-2"],u2:["umv-2","vvv-2"],u3:["umv-3","vvv-3"],u4:["umv-4","vvv-4"],u5:["umv-5","vvv-5"],z0:["zm0","000"],z1:["zm1","111"],zx:["zmx","xxx"],zd:["zmd","ddd"],zu:["zmu","uuu"],zz:["zmz","zzz"],"z=":["zmv-2","vvv-2"],z2:["zmv-2","vvv-2"],z3:["zmv-3","vvv-3"],z4:["zmv-4","vvv-4"],z5:["zmv-5","vvv-5"],"=0":["vm0-2","000"],"=1":["vm1-2","111"],"=x":["vmx-2","xxx"],"=d":["vmd-2","ddd"],"=u":["vmu-2","uuu"],"=z":["vmz-2","zzz"],"==":["vmv-2-2","vvv-2"],"=2":["vmv-2-2","vvv-2"],"=3":["vmv-2-3","vvv-3"],"=4":["vmv-2-4","vvv-4"],"=5":["vmv-2-5","vvv-5"],20:["vm0-2","000"],21:["vm1-2","111"],"2x":["vmx-2","xxx"],"2d":["vmd-2","ddd"],"2u":["vmu-2","uuu"],"2z":["vmz-2","zzz"],"2=":["vmv-2-2","vvv-2"],22:["vmv-2-2","vvv-2"],23:["vmv-2-3","vvv-3"],24:["vmv-2-4","vvv-4"],25:["vmv-2-5","vvv-5"],30:["vm0-3","000"],31:["vm1-3","111"],"3x":["vmx-3","xxx"],"3d":["vmd-3","ddd"],"3u":["vmu-3","uuu"],"3z":["vmz-3","zzz"],"3=":["vmv-3-2","vvv-2"],32:["vmv-3-2","vvv-2"],33:["vmv-3-3","vvv-3"],34:["vmv-3-4","vvv-4"],35:["vmv-3-5","vvv-5"],40:["vm0-4","000"],41:["vm1-4","111"],"4x":["vmx-4","xxx"],"4d":["vmd-4","ddd"],"4u":["vmu-4","uuu"],"4z":["vmz-4","zzz"],"4=":["vmv-4-2","vvv-2"],42:["vmv-4-2","vvv-2"],43:["vmv-4-3","vvv-3"],44:["vmv-4-4","vvv-4"],45:["vmv-4-5","vvv-5"],50:["vm0-5","000"],51:["vm1-5","111"],"5x":["vmx-5","xxx"],"5d":["vmd-5","ddd"],"5u":["vmu-5","uuu"],"5z":["vmz-5","zzz"],"5=":["vmv-5-2","vvv-2"],52:["vmv-5-2","vvv-2"],53:["vmv-5-3","vvv-3"],54:["vmv-5-4","vvv-4"],55:["vmv-5-5","vvv-5"]};for(d in e){if(a===d){return this.genBrick(e[d],b,c)}}return this.genBrick(["xxx"],b,c)},parseWaveLane:function(a,b){"use strict";var c,d,e,f=[],g=[];f=a.split("");e=f.shift();if(e==="p"||e==="n"){return this.genFirstWaveBrick(e,b,f.length+1)}c=1;while(f[0]==="."||f[0]==="|"){f.shift();c+=1}g=g.concat(this.genFirstWaveBrick(e,b,c));while(f.length){d=e;e=f.shift();c=1;while(f[0]==="."||f[0]==="|"){f.shift();c+=1}g=g.concat(this.genWaveBrick(d+e,b,c))}return g}};WaveDrom.ViewSVG=function(a){"use strict";var b,c,d;b=document.getElementById(a);c=new XMLSerializer;d='<?xml version="1.0" standalone="no"?>\n'+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+"<!-- Created with WaveDrom -->\n"+c.serializeToString(b);window.open("data:image/svg+xml;base64,"+base64_encode(d),"_blank")};WaveDrom.ViewSourceSVG=function(a){"use strict";var b,c,d;b=document.getElementById(a);c=new XMLSerializer;d='<?xml version="1.0" standalone="no"?>\n'+'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'+"<!-- Created with WaveDrom -->\n"+c.serializeToString(b);window.open("view-source:data:image/svg+xml;base64,"+base64_encode(d),"_blank")};WaveDrom.parseWaveLanes=function(a){"use strict";var b,c=[];for(b in a){c.push([]);c[c.length-1][0]=a[b].name;if(a[b].wave){c[c.length-1][1]=this.parseWaveLane(a[b].wave,this.lane.hscale-1)}else{c[c.length-1][1]=null}if(a[b].data){c[c.length-1][2]=a[b].data}else{c[c.length-1][2]=null}}return c};WaveDrom.FindLaneMarkers=function(a){"use strict";var b,c=0,d=0,e=[];for(b in a){if(a[b]==="vvv-2"|a[b]==="vvv-3"|a[b]==="vvv-4"|a[b]==="vvv-5"){d+=1}else{if(d!==0){e.push(c-(d+1)/2);d=0}}c+=1}if(d!==0){e.push(c-(d+1)/2)}return e};WaveDrom.RenderWaveLane=function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m=[1],n,o,p=0,q=0,r=[],s="http://www.w3.org/2000/svg",t="http://www.w3.org/1999/xlink";for(e=0;e<b.length;e+=1){if(b[e][0]){g=document.createElementNS(s,"g");g.id="wavelane_"+e+"_"+c;g.setAttribute("transform","translate(0,"+(this.lane.y0+e*this.lane.yo)+")");a.insertBefore(g,a.firstChild);k=document.createTextNode(b[e][0]);i=document.createElementNS(s,"text");i.setAttribute("x",this.lane.tgo);i.setAttribute("y",this.lane.ym);i.setAttribute("fill","#0041c4");i.setAttribute("text-anchor","end");i.appendChild(k);g.insertBefore(i,g.firstChild);o=this.lane.xs*this.lane.hscale*2;r.push(i.getBBox().width);h=document.createElementNS(s,"g");h.id="wavelane_draw_"+e+"_"+c;g.insertBefore(h,g.firstChild);if(b[e][1]){if(b[e][2]&&b[e][2].length){m=this.FindLaneMarkers(b[e][1]);if(m.length!==0){for(f in m){if(b[e][2]&&b[e][2][f]){l=document.createTextNode(b[e][2][f]);i=document.createElementNS(s,"text");i.setAttribute("x",m[f]*this.lane.xs+this.lane.xlabel);i.setAttribute("y",this.lane.ym);i.setAttribute("text-anchor","middle");i.appendChild(l);h.insertBefore(i,h.firstChild)}}}}for(d=0;d<b[e][1].length;d+=1){j=document.createElementNS(s,"use");j.id="use_"+d+"_"+e+"_"+c;j.setAttributeNS(t,"xlink:href","#"+b[e][1][d]);j.setAttribute("transform","translate("+d*this.lane.xs+")");h.insertBefore(j,h.firstChild)}if(b[e][1].length>p){p=b[e][1].length}}}}this.lane.xmax=p;this.lane.xg=q+20;return r};WaveDrom.RenderMarks=function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n="http://www.w3.org/2000/svg";g=2*this.lane.hscale;h=g*this.lane.xs;f=this.lane.xmax/g+1;m=5;l=b.length*this.lane.yo+this.lane.y0+this.lane.ys;e=document.createElementNS(n,"g");e.id="gmarks_"+c;a.insertBefore(e,a.firstChild);for(d=0;d<f;d+=1){i=document.createElementNS(n,"path");i.id="gmark_"+d+"_"+c;i.setAttribute("d","m "+d*h+",5 0,"+(l-2*m));i.setAttribute("style","stroke:#888888;stroke-width:0.5;stroke-dasharray:2, 2");e.insertBefore(i,e.firstChild)}for(d=1;d<f;d+=1){k=document.createTextNode(d);j=document.createElementNS(n,"text");j.setAttribute("x",d*h-h/2);j.setAttribute("y",l-m);j.setAttribute("text-anchor","middle");j.setAttribute("fill","#AAAAAA");j.appendChild(k);e.insertBefore(j,e.firstChild)}};WaveDrom.RenderGroups=function(a,b,c){"use strict";var d,e,f,g,h,i,j,k;d="http://www.w3.org/2000/svg";for(f in b){g=document.createElementNS(d,"path");g.id="group_"+f+"_"+c;g.setAttribute("d","m "+b[f].x+","+(b[f].y*this.lane.yo+8)+" c -3,0 -5,2 -5,5 l 0,"+(b[f].height*this.lane.yo-16)+" c 0,3 2,5 5,5");g.setAttribute("style","stroke:#0041c4;stroke-width:1;fill:none");a.insertBefore(g,a.firstChild);if(typeof b[f].name==="string"){h=document.createTextNode(b[f].name);i=document.createElementNS(d,"text");j=b[f].x-10;k=this.lane.yo*(b[f].y+b[f].height/2)+5;i.setAttribute("x",j);i.setAttribute("y",k);i.setAttribute("text-anchor","middle");i.setAttribute("fill","#0041c4");i.setAttribute("transform","rotate(270,"+j+","+k+")");i.appendChild(h);a.insertBefore(i,a.firstChild)}}};WaveDrom.RenderGaps=function(a,b,c){"use strict";var d,e,f,g,h,i=[],j,k="http://www.w3.org/2000/svg",l="http://www.w3.org/1999/xlink";if(b){e=document.createElementNS(k,"g");e.id="wavegaps_"+c;a.insertBefore(e,a.firstChild);for(d in b){f=document.createElementNS(k,"g");f.id="wavegap_"+d+"_"+c;f.setAttribute("transform","translate(0,"+(this.lane.y0+d*this.lane.yo)+")");e.insertBefore(f,e.firstChild);j=b[d].wave;if(j){i=j.split("");h=0;while(i.length){if(i.shift()==="|"){g=document.createElementNS(k,"use");g.id="guse_"+h+"_"+d+"_"+c;g.setAttributeNS(l,"xlink:href","#gap");g.setAttribute("transform","translate("+(2*h+1)*this.lane.hscale*this.lane.xs+")");f.insertBefore(g,f.firstChild)}h+=1}}}}};WaveDrom.parseConfig=function(a){"use strict";var b,c=[];this.lane.hscale=1;if(this.lane.hscale0){this.lane.hscale=this.lane.hscale0}if(a.config){if(a.config.hscale){this.lane.hscale=a.config.hscale}}};WaveDrom.rec=function(a,b){"use strict";var c,d,e={},f={x:10};if(typeof a[0]==="string"){d=a[0];f.x=25}b.x+=f.x;for(c in a){if(typeof a[c]==="object"){if(Object.prototype.toString.call(a[c])==="[object Array]"){e.y=b.y;b=this.rec(a[c],b);b.groups.push({x:b.xx,y:e.y,height:b.y-e.y,name:b.name})}else{b.lanes.push(a[c]);b.width.push(b.x);b.y+=1}}}b.xx=b.x;b.x-=f.x;b.name=d;return b};WaveDrom.RenderWaveForm=function(index){"use strict";var root,groups,svgcontent,TheTextBox,content,source,width,height,uwidth,uheight,ret,glengths,xmax=0,i;root=document.getElementById("lanes_"+index);groups=document.getElementById("groups_"+index);svgcontent=document.getElementById("svgcontent_"+index);TheTextBox=document.getElementById("InputJSON_"+index);if(TheTextBox.type&&TheTextBox.type=="textarea"){source=eval("("+TheTextBox.value+")")}else{source=eval("("+TheTextBox.innerHTML+")")}this.parseConfig(source);if(source.signal){ret=this.rec(source.signal,{x:0,y:0,xmax:0,width:[],lanes:[],groups:[]});this.RenderGaps(root,ret.lanes,index);this.RenderGroups(groups,ret.groups,index);content=this.parseWaveLanes(ret.lanes);glengths=this.RenderWaveLane(root,content,index);for(i in glengths){xmax=Math.max(xmax,glengths[i]+ret.width[i])}this.RenderMarks(root,content,index);this.lane.xg=Math.ceil((xmax-this.lane.tgo)/this.lane.xs)*this.lane.xs}width=this.lane.xg+this.lane.xs*(this.lane.xmax+1);height=content.length*this.lane.yo+this.lane.y0+this.lane.ys;if(this.lane.scale===3){uwidth=window.innerWidth-15;uheight=window.innerHeight-(10+7+16+7+WaveDrom.panela.ys+7+16+7+16+7)}else{uwidth=this.lane.scale*width;uheight=this.lane.scale*height}svgcontent.setAttribute("viewBox","0 0 "+width+" "+height);svgcontent.setAttribute("width",uwidth);svgcontent.setAttribute("height",uheight);root.setAttribute("transform","translate("+this.lane.xg+")")};WaveDrom.InsertSVGTemplate=function(a,b){"use strict";var c,d;d=JsonML.parse(WaveSkin);d.id="svgcontent_"+a;d.setAttribute("height","0");b.insertBefore(d,b.firstChild);c=document.getElementById("waves");c.id="waves_"+a;c=document.getElementById("groups");c.id="groups_"+a;c=document.getElementById("lanes");c.id="lanes_"+a};WaveDrom.ProcessAll=function(){"use strict";var a,b,c,d,e;a=0;b=document.getElementsByTagName("SCRIPT");for(c=b.length-1;c>0;c-=1){if(b.item(c).type&&b.item(c).type=="WaveDrom"){b.item(c).setAttribute("id","InputJSON_"+a);d=document.createElement("div");d.className+="WaveDrom_Display_"+a;b.item(c).parentNode.insertBefore(d,b.item(c));WaveDrom.InsertSVGTemplate(a,d);a+=1}}for(c=0;c<a;c+=1){WaveDrom.RenderWaveForm(c)}};WaveDrom.resize=function(){"use strict";document.getElementById("PanelB").style.height=window.innerHeight-(10+7+16+7+WaveDrom.panela.ys+7+16+7+16+7)+"px";document.getElementById("PanelA").style.height=WaveDrom.panela.ys+"px"};WaveDrom.ClearWaveLane=function(a){"use strict";var b=document.getElementById("lanes_"+a);while(b.childNodes.length){b.removeChild(b.childNodes[0])}var b=document.getElementById("groups_"+a);while(b.childNodes.length){b.removeChild(b.childNodes[0])}};WaveDrom.EditorKeyUp=function(a){"use strict";if(a){switch(a.keyCode){case 16:break;case 17:break;case 18:break;case 33:break;case 34:break;case 35:break;case 36:break;case 37:break;case 38:break;case 39:break;case 40:break;case 91:break;case 93:break;default:{if(WaveDrom.timer){clearTimeout(WaveDrom.timer)}WaveDrom.timer=setTimeout("WaveDrom.EditorRefrech()",750);return}}if(WaveDrom.timer){clearTimeout(WaveDrom.timer);WaveDrom.timer=setTimeout("WaveDrom.EditorRefrech()",750)}}};WaveDrom.EditorRefrech=function(){"use strict";WaveDrom.ClearWaveLane(0);WaveDrom.resize();WaveDrom.RenderWaveForm(0)};WaveDrom.EditorInit=function(){"use strict";var a,b,c,d,e;this.lane.scale=3;a=0;WaveDrom.InsertSVGTemplate(a,document.getElementById("WaveDrom_Display_"+a));WaveDrom.EditorRefrech();window.onresize=WaveDrom.EditorRefrech};WaveDrom.ExpandInputWindow=function(){"use strict";if(WaveDrom.panela.ys<.707*window.innerHeight){WaveDrom.panela.ys+=50;WaveDrom.EditorRefrech()}};WaveDrom.CollapseInputWindow=function(){"use strict";if(WaveDrom.panela.ys>100){WaveDrom.panela.ys-=50;WaveDrom.EditorRefrech()}};WaveDrom.SetHScale=function(a){"use strict";WaveDrom.lane.hscale0=parseFloat(a);WaveDrom.EditorRefrech()};WaveDrom.SetScale=function(a){"use strict";WaveDrom.lane.scale=parseFloat(a);WaveDrom.EditorRefrech()};window.onload=WaveDrom.ProcessAll