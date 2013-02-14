/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-14 04:15 AM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-base",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#base-fullhd");b.psnb=pe.header.find("#base-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#base-srchbx");b.bcrumb=pe.header.find("#base-bc");b.title=pe.header.find("#base-title");b.sft=pe.footer.find("#base-sft");b.fullft=pe.footer.find("#base-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var t,w,E="",e,l,L=pe.dic.get("%settings"),v,q,f,J,O="",r='<a data-role="button" data-iconpos="notext"',y=' data-rel="popup" data-position-to="window"',n=r+y,z='<div data-role="popup" data-overlay-theme="a"',B='<div data-role="header"',N=B+"><h1>",x=' data-theme="c" class="ui-corner-all">',o=B+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',K=r+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",H=n+' data-icon="back" class="ui-btn-left"',F=">"+pe.dic.get("%back")+"</a>",M="</div></div>",m='<ul data-role="listview">',u="",C,k,p,g,d,I,s,D,A,G,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");q=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");w=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?q:b.bcrumb.children(":header")[0])).innerHTML;t=z+' id="jqm-wb-mb">'+N+e+"</h1>"+K+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){A=b.bcrumb[0];G=A.getElementsByTagName("a")[0].href;t+='<section><div id="jqm-mb-location-text">'+A.innerHTML+"</div></section>"}else{t+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){E+="<section><div><h2>"+q.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";A=pe.secnav[0]}if(b.menubar.length!==0){E+="<section><div><h2>"+w+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}t+='<div id="jqm-mb-menu"></div></nav></div></div></div>';O+=t;b.menu=E;u+=n+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){l=pe.dic.get("%search");f=b.search[0].innerHTML;J=z+' id="jqm-wb-search">'+N+l+"</h1>"+K+'</div><div data-role="content"><div>'+f.substring(f.indexOf("<form"))+"</div></div></div>";O+=J;u+=n+' data-icon="search" href="#jqm-wb-search">'+l+"</a>"}j='<div data-role="header"><div class="ui-title"></div>';j+='<map id="base-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof G!=="undefined"){j+=r+' href="'+G+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=r+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(u.length!==0){j+=u}j+=n+' href="#popupSettings" data-icon="gear">'+L+"</a></map></div>";b.fullhd.children("#base-fullhd-in").before(j);b.title[0].className+=" ui-bar-b";p=b.fullhd.find('li[id*="-lang"]');v=z+' id="popupSettings"'+x;v+=o+L+"</h1>"+K+"</div>";v+=h+m;if(p.length>0){v+='<li><a href="#popupLanguages"'+y+">"+pe.dic.get("%languages")+"</a></li>"}v+='<li class="ui-corner-bottom"><a href="#popupAbout"'+y+">"+pe.dic.get("%about")+"</a></li>";v+="</ul>"+M;if(p.length>0){v+=z+' id="popupLanguages"'+x;v+=o+pe.dic.get("%languages")+"</h1>"+H+' href="#popupSettings"'+F+"</div>";v+=h+m;if(p.filter('[id*="-lang-current"]').length===0){v+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}D=p.get();for(I=0,s=D.length;I!==s;I+=1){A=D[I];k=A.childNodes[0];v+="<li"+(I===(s-1)?' class="ui-corner-bottom"':"");if(A.id.indexOf("-lang-current")!==-1){v+='><a href="javascript:;" class="ui-disabled">'+A.innerHTML+pe.dic.get("%current")+"</a></li>"}else{v+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}v+="</ul>"+M}v+=z+' id="popupAbout"'+x;v+=o+pe.dic.get("%about")+"</h1>"+H+' href="#popupSettings"'+F+"</div>";v+=h+m;v+="<li>"+b.title.text()+"</li>";A=pe.main.find("#basedate-mod").children();if(A.length!==0){d=A[1];if(d.getElementsByTagName("time").length===0){v+="<li>"+A[0].innerHTML+" "+d.innerHTML+"</li>"}}C=b.sft.find(".base-col-head a").get();for(I=0,s=C.length;I!==s;I+=1){k=C[I];A=k.innerHTML;d=A.toLowerCase();v+="<li"+(I===(s-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+A+"</a></li>"}v+="</ul>"+M;pe.bodydiv.append(O+v)}c(document).on("pagecreate",function(){if(b.menubar.length!==0){A=b.psnb[0];A.parentNode.removeChild(A)}if(b.search.length!==0){A=b.search[0];A.parentNode.removeChild(A)}if(u.length!==0){var S=b.fullhd.find("#base-mnavbar"),U=pe.bodydiv.find("#jqm-mb-menu"),T,R,P,Q;S.removeClass("wb-hide");if(U.length!==0){U.append(b.menu);S.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){U.trigger("create");T=U.find(".ui-controlgroup");R=T.get();s=R.length;while(s--){A=R[s];Q=A.getElementsByTagName("li")[0];if(Q.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&Q.className.indexOf("ui-corner-top")===-1){Q.className+=" ui-corner-top"}P=T.eq(s).find(".ui-btn").get();A=P[P.length-1];if(A.className.indexOf("ui-corner-bottom")===-1){A.className+=" ui-corner-bottom"}}})}}function i(W,V,Z,Y){var X;c.mobile.showPageLoadingMsg();X=c.mobile.transitionHandlers.simultaneous("pop",V,Z,Y);X.done(function(){c.mobile.hidePageLoadingMsg()});return X}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));