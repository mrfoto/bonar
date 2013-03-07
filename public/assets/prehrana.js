/*!
 * GMaps.js v0.2.30
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2012, Gustavo Leon
 * Released under the MIT License.
 */
if(window.google&&window.google.maps)var GMaps=function(e){"use strict";var t=document,n=function(n,r){var i;return"jQuery"in e&&r?i=$("#"+n.replace("#",""),r)[0]:i=t.getElementById(n.replace("#","")),i},r=function(e){var i=this,s=["bounds_changed","center_changed","click","dblclick","drag","dragend","dragstart","idle","maptypeid_changed","projection_changed","resize","tilesloaded","zoom_changed"],o=["mousemove","mouseout","mouseover"];window.context_menu={},typeof e.el=="string"||typeof e.div=="string"?this.el=n(e.el||e.div,e.context):this.el=e.el||e.div,this.el.style.width=e.width||this.el.scrollWidth||this.el.offsetWidth,this.el.style.height=e.height||this.el.scrollHeight||this.el.offsetHeight,this.controls=[],this.overlays=[],this.layers=[],this.singleLayers={},this.markers=[],this.polylines=[],this.routes=[],this.polygons=[],this.infoWindow=null,this.overlay_el=null,this.zoom=e.zoom||15;var u=e.markerClusterer,a;e.mapType?a=google.maps.MapTypeId[e.mapType.toUpperCase()]:a=google.maps.MapTypeId.ROADMAP;var f=new google.maps.LatLng(e.lat,e.lng);delete e.el,delete e.lat,delete e.lng,delete e.mapType,delete e.width,delete e.height,delete e.markerClusterer;var l=e.zoomControlOpt||{style:"DEFAULT",position:"TOP_LEFT"},c=e.zoomControl||!0,h=l.style||"DEFAULT",p=l.position||"TOP_LEFT",d=e.panControl||!0,v=e.mapTypeControl||!0,m=e.scaleControl||!0,g=e.streetViewControl||!0,y=y||!0,b={},w={zoom:this.zoom,center:f,mapTypeId:a},E={panControl:d,zoomControl:c,zoomControlOptions:{style:google.maps.ZoomControlStyle[h],position:google.maps.ControlPosition[p]},mapTypeControl:v,scaleControl:m,streetViewControl:g,overviewMapControl:y};e.disableDefaultUI!=1&&(w=extend_object(w,E)),b=extend_object(w,e);for(var S=0;S<s.length;S++)delete b[s[S]];for(var S=0;S<o.length;S++)delete b[o[S]];this.map=new google.maps.Map(this.el,b),u&&(this.markerClusterer=u.apply(this,[this.map]));var x=function(e,t){var r="",s=window.context_menu[e];for(var o in s)if(s.hasOwnProperty(o)){var u=s[o];r+='<li><a id="'+e+"_"+o+'" href="#">'+u.title+"</a></li>"}if(!n("gmaps_context_menu"))return;var a=n("gmaps_context_menu");a.innerHTML=r;var f=a.getElementsByTagName("a"),l=f.length;for(var o=0;o<l;o++){var c=f[o],h=function(n){n.preventDefault(),s[this.id.replace(e+"_","")].action.apply(i,[t]),i.hideContextMenu()};google.maps.event.clearListeners(c,"click"),google.maps.event.addDomListenerOnce(c,"click",h,!1)}var p=i.el.offsetLeft+t.pixel.x-15,d=i.el.offsetTop+t.pixel.y-15;a.style.left=p+"px",a.style.top=d+"px",a.style.display="block"},T=function(e,t){if(e==="marker"){t.pixel={};var n=new google.maps.OverlayView;n.setMap(i.map),n.draw=function(){var r=n.getProjection(),i=t.marker.getPosition();t.pixel=r.fromLatLngToContainerPixel(i),x(e,t)}}else x(e,t)};this.setContextMenu=function(e){window.context_menu[e.control]={};for(var r in e.options)if(e.options.hasOwnProperty(r)){var i=e.options[r];window.context_menu[e.control][i.name]={title:i.title,action:i.action}}var s=t.createElement("ul");s.id="gmaps_context_menu",s.style.display="none",s.style.position="absolute",s.style.minWidth="100px",s.style.background="white",s.style.listStyle="none",s.style.padding="8px",s.style.boxShadow="2px 2px 6px #ccc",t.body.appendChild(s);var o=n("gmaps_context_menu");google.maps.event.addDomListener(o,"mouseout",function(e){(!e.relatedTarget||!this.contains(e.relatedTarget))&&window.setTimeout(function(){o.style.display="none"},400)},!1)},this.hideContextMenu=function(){var e=n("gmaps_context_menu");e&&(e.style.display="none")};var N=function(t,n){google.maps.event.addListener(t,n,function(t){t==undefined&&(t=this),e[n].apply(this,[t]),i.hideContextMenu()})};for(var C=0;C<s.length;C++){var k=s[C];k in e&&N(this.map,k)}for(var C=0;C<o.length;C++){var k=o[C];k in e&&N(this.map,k)}google.maps.event.addListener(this.map,"rightclick",function(t){e.rightclick&&e.rightclick.apply(this,[t]),window.context_menu["map"]!=undefined&&T("map",t)}),this.refresh=function(){google.maps.event.trigger(this.map,"resize")},this.fitZoom=function(){var e=[],t=this.markers.length;for(var n=0;n<t;n++)e.push(this.markers[n].getPosition());this.fitLatLngBounds(e)},this.fitLatLngBounds=function(e){var t=e.length,n=new google.maps.LatLngBounds;for(var r=0;r<t;r++)n.extend(e[r]);this.map.fitBounds(n)},this.setCenter=function(e,t,n){this.map.panTo(new google.maps.LatLng(e,t)),n&&n()},this.getElement=function(){return this.el},this.zoomIn=function(e){this.zoom=this.map.getZoom()+e,this.map.setZoom(this.zoom)},this.zoomOut=function(e){this.zoom=this.map.getZoom()-e,this.map.setZoom(this.zoom)};var L=[];for(var A in this.map)typeof this.map[A]=="function"&&!this[A]&&L.push(A);for(var S=0;S<L.length;S++)(function(e,t,n){e[n]=function(){return t[n].apply(t,arguments)}})(this,this.map,L[S]);this.createControl=function(e){var n=t.createElement("div");n.style.cursor="pointer",n.style.fontFamily="Arial, sans-serif",n.style.fontSize="13px",n.style.boxShadow="rgba(0, 0, 0, 0.398438) 0px 2px 4px";for(var r in e.style)n.style[r]=e.style[r];e.id&&(n.id=e.id),e.classes&&(n.className=e.classes),e.content&&(n.innerHTML=e.content);for(var i in e.events)(function(t,n){google.maps.event.addDomListener(t,n,function(){e.events[n].apply(this,[this])})})(n,i);return n.index=1,n},this.addControl=function(e){var t=google.maps.ControlPosition[e.position.toUpperCase()];delete e.position;var n=this.createControl(e);return this.controls.push(n),this.map.controls[t].push(n),n},this.createMarker=function(e){if(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position){var t=this,n=e.details,r=e.fences,i=e.outside,s={position:new google.maps.LatLng(e.lat,e.lng),map:null};delete e.lat,delete e.lng,delete e.fences,delete e.outside;var o=extend_object(s,e),u=new google.maps.Marker(o);u.fences=r;if(e.infoWindow){u.infoWindow=new google.maps.InfoWindow(e.infoWindow);var a=["closeclick","content_changed","domready","position_changed","zindex_changed"];for(var f=0;f<a.length;f++)(function(t,n){google.maps.event.addListener(t,n,function(t){e.infoWindow[n]&&e.infoWindow[n].apply(this,[t])})})(u.infoWindow,a[f])}var l=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],c=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(var f=0;f<l.length;f++)(function(t,n){google.maps.event.addListener(t,n,function(){e[n]&&e[n].apply(this,[this])})})(u,l[f]);for(var f=0;f<c.length;f++)(function(t,n,r){google.maps.event.addListener(n,r,function(n){n.pixel||(n.pixel=t.getProjection().fromLatLngToPoint(n.latLng)),e[r]&&e[r].apply(this,[n])})})(this.map,u,c[f]);return google.maps.event.addListener(u,"click",function(){this.details=n,e.click&&e.click.apply(this,[this]),u.infoWindow&&(t.hideInfoWindows(),u.infoWindow.open(t.map,u))}),google.maps.event.addListener(u,"rightclick",function(t){t.marker=this,e.rightclick&&e.rightclick.apply(this,[t]),window.context_menu["marker"]!=undefined&&T("marker",t)}),(e.dragend||u.fences)&&google.maps.event.addListener(u,"dragend",function(){u.fences&&t.checkMarkerGeofence(u,function(e,t){i(e,t)})}),u}throw"No latitude or longitude defined"},this.addMarker=function(e){var t;if(e.hasOwnProperty("gm_accessors_"))t=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined";t=this.createMarker(e)}return t.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(t),this.markers.push(t),t},this.addMarkers=function(e){for(var t=0,n;n=e[t];t++)this.addMarker(n);return this.markers},this.hideInfoWindows=function(){for(var e=0,t;t=this.markers[e];e++)t.infoWindow&&t.infoWindow.close()},this.removeMarker=function(e){for(var t=0;t<this.markers.length;t++)if(this.markers[t]===e){this.markers[t].setMap(null),this.markers.splice(t,1);break}return e},this.removeMarkers=function(e){var e=e||this.markers;for(var t=0;t<this.markers.length;t++)this.markers[t]===e[t]&&this.markers[t].setMap(null);var n=[];for(var t=0;t<this.markers.length;t++)this.markers[t].getMap()!=null&&n.push(this.markers[t]);this.markers=n},this.drawOverlay=function(e){var n=new google.maps.OverlayView;n.setMap(i.map);var r=!0;return e.auto_show!=null&&(r=e.auto_show),n.onAdd=function(){var r=t.createElement("div");r.style.borderStyle="none",r.style.borderWidth="0px",r.style.position="absolute",r.style.zIndex=100,r.innerHTML=e.content,n.el=r;var i=this.getPanes();e.layer||(e.layer="overlayLayer");var s=i[e.layer];s.appendChild(r);var o=["contextmenu","DOMMouseScroll","dblclick","mousedown"];for(var u=0;u<o.length;u++)(function(e,t){google.maps.event.addDomListener(e,t,function(e){navigator.userAgent.toLowerCase().indexOf("msie")!=-1&&document.all?(e.cancelBubble=!0,e.returnValue=!1):e.stopPropagation()})})(r,o[u]);google.maps.event.trigger(this,"ready")},n.draw=function(){var t=this.getProjection(),i=t.fromLatLngToDivPixel(new google.maps.LatLng(e.lat,e.lng));e.horizontalOffset=e.horizontalOffset||0,e.verticalOffset=e.verticalOffset||0;var s=n.el,o=s.children[0],u=o.clientHeight,a=o.clientWidth;switch(e.verticalAlign){case"top":s.style.top=i.y-u+e.verticalOffset+"px";break;default:case"middle":s.style.top=i.y-u/2+e.verticalOffset+"px";break;case"bottom":s.style.top=i.y+e.verticalOffset+"px"}switch(e.horizontalAlign){case"left":s.style.left=i.x-a+e.horizontalOffset+"px";break;default:case"center":s.style.left=i.x-a/2+e.horizontalOffset+"px";break;case"right":s.style.left=i.x+e.horizontalOffset+"px"}s.style.display=r?"block":"none",r||e.show.apply(this,[s])},n.onRemove=function(){var t=n.el;e.remove?e.remove.apply(this,[t]):(n.el.parentNode.removeChild(n.el),n.el=null)},i.overlays.push(n),n},this.removeOverlay=function(e){for(var t=0;t<this.overlays.length;t++)if(this.overlays[t]===e){this.overlays[t].setMap(null),this.overlays.splice(t,1);break}},this.removeOverlays=function(){for(var e=0,t;t=i.overlays[e];e++)t.setMap(null);i.overlays=[]},this.drawPolyline=function(e){var t=[],n=e.path;if(n.length)if(n[0][0]===undefined)t=n;else for(var r=0,i;i=n[r];r++)t.push(new google.maps.LatLng(i[0],i[1]));var s={map:this.map,path:t,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight,geodesic:e.geodesic,clickable:!0,editable:!1,visible:!0};e.hasOwnProperty("clickable")&&(s.clickable=e.clickable),e.hasOwnProperty("editable")&&(s.editable=e.editable),e.hasOwnProperty("icons")&&(s.icons=e.icons),e.hasOwnProperty("zIndex")&&(s.zIndex=e.zIndex);var o=new google.maps.Polyline(s),u=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var a=0;a<u.length;a++)(function(t,n){google.maps.event.addListener(t,n,function(t){e[n]&&e[n].apply(this,[t])})})(o,u[a]);return this.polylines.push(o),o},this.removePolyline=function(e){for(var t=0;t<this.polylines.length;t++)if(this.polylines[t]===e){this.polylines[t].setMap(null),this.polylines.splice(t,1);break}},this.removePolylines=function(){for(var e=0,t;t=i.polylines[e];e++)t.setMap(null);i.polylines=[]},this.drawCircle=function(e){e=extend_object({map:this.map,center:new google.maps.LatLng(e.lat,e.lng)},e),delete e.lat,delete e.lng;var t=new google.maps.Circle(e),n=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var r=0;r<n.length;r++)(function(t,n){google.maps.event.addListener(t,n,function(t){e[n]&&e[n].apply(this,[t])})})(t,n[r]);return this.polygons.push(t),t},this.drawRectangle=function(e){e=extend_object({map:this.map},e);var t=new google.maps.LatLngBounds(new google.maps.LatLng(e.bounds[0][0],e.bounds[0][1]),new google.maps.LatLng(e.bounds[1][0],e.bounds[1][1]));e.bounds=t;var n=new google.maps.Rectangle(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++)(function(t,n){google.maps.event.addListener(t,n,function(t){e[n]&&e[n].apply(this,[t])})})(n,r[i]);return this.polygons.push(n),n},this.drawPolygon=function(e){var t=!1;e.hasOwnProperty("useGeoJSON")&&(t=e.useGeoJSON),delete e.useGeoJSON,e=extend_object({map:this.map},e),t==0&&(e.paths=[e.paths.slice(0)]),e.paths.length>0&&e.paths[0].length>0&&(e.paths=array_flat(array_map(e.paths,arrayToLatLng,t)));var n=new google.maps.Polygon(e),r=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","rightclick"];for(var i=0;i<r.length;i++)(function(t,n){google.maps.event.addListener(t,n,function(t){e[n]&&e[n].apply(this,[t])})})(n,r[i]);return this.polygons.push(n),n},this.removePolygon=function(e){for(var t=0;t<this.polygons.length;t++)if(this.polygons[t]===e){this.polygons[t].setMap(null),this.polygons.splice(t,1);break}},this.removePolygons=function(){for(var e=0,t;t=i.polygons[e];e++)t.setMap(null);i.polygons=[]},this.getFromFusionTables=function(e){var t=e.events;delete e.events;var n=e,r=new google.maps.FusionTablesLayer(n);for(var i in t)(function(e,n){google.maps.event.addListener(e,n,function(e){t[n].apply(this,[e])})})(r,i);return this.layers.push(r),r},this.loadFromFusionTables=function(e){var t=this.getFromFusionTables(e);return t.setMap(this.map),t},this.getFromKML=function(e){var t=e.url,n=e.events;delete e.url,delete e.events;var r=e,i=new google.maps.KmlLayer(t,r);for(var s in n)(function(e,t){google.maps.event.addListener(e,t,function(e){n[t].apply(this,[e])})})(i,s);return this.layers.push(i),i},this.loadFromKML=function(e){var t=this.getFromKML(e);return t.setMap(this.map),t};var O,M;this.getRoutes=function(e){switch(e.travelMode){case"bicycling":O=google.maps.TravelMode.BICYCLING;break;case"transit":O=google.maps.TravelMode.TRANSIT;break;case"driving":O=google.maps.TravelMode.DRIVING;break;default:O=google.maps.TravelMode.WALKING}e.unitSystem==="imperial"?M=google.maps.UnitSystem.IMPERIAL:M=google.maps.UnitSystem.METRIC;var t={avoidHighways:!1,avoidTolls:!1,optimizeWaypoints:!1,waypoints:[]},n=extend_object(t,e);n.origin=new google.maps.LatLng(e.origin[0],e.origin[1]),n.destination=new google.maps.LatLng(e.destination[0],e.destination[1]),n.travelMode=O,n.unitSystem=M,delete n.callback;var r=this,i=new google.maps.DirectionsService;i.route(n,function(t,n){if(n===google.maps.DirectionsStatus.OK)for(var i in t.routes)t.routes.hasOwnProperty(i)&&r.routes.push(t.routes[i]);e.callback&&e.callback(r.routes)})},this.removeRoutes=function(){this.routes=[]},this.getElevations=function(e){e=extend_object({locations:[],path:!1,samples:256},e),e.locations.length>0&&e.locations[0].length>0&&(e.locations=array_flat(array_map([e.locations],arrayToLatLng,!1)));var t=e.callback;delete e.callback;var n=new google.maps.ElevationService;if(!e.path)delete e.path,delete e.samples,n.getElevationForLocations(e,function(e,n){t&&typeof t=="function"&&t(e,n)});else{var r={path:e.locations,samples:e.samples};n.getElevationAlongPath(r,function(e,n){t&&typeof t=="function"&&t(e,n)})}},this.cleanRoute=this.removePolylines,this.drawRoute=function(e){var t=this;this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,unitSystem:e.unitSystem,callback:function(n){n.length>0&&(t.drawPolyline({path:n[n.length-1].overview_path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.callback&&e.callback(n[n.length-1]))}})},this.travelRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){t.length>0&&e.start&&e.start(t[t.length-1]);if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var i=0,s;s=r[i];i++)s.step_number=i,e.step(s,n.legs[0].steps.length-1)}}t.length>0&&e.end&&e.end(t[t.length-1])}});else if(e.route&&e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++)r.step_number=n,e.step(r)}},this.drawSteppedRoute=function(e){if(e.origin&&e.destination)this.getRoutes({origin:e.origin,destination:e.destination,travelMode:e.travelMode,waypoints:e.waypoints,callback:function(t){t.length>0&&e.start&&e.start(t[t.length-1]);if(t.length>0&&e.step){var n=t[t.length-1];if(n.legs.length>0){var r=n.legs[0].steps;for(var s=0,o;o=r[s];s++)o.step_number=s,i.drawPolyline({path:o.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(o,n.legs[0].steps.length-1)}}t.length>0&&e.end&&e.end(t[t.length-1])}});else if(e.route&&e.route.legs.length>0){var t=e.route.legs[0].steps;for(var n=0,r;r=t[n];n++)r.step_number=n,i.drawPolyline({path:r.path,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}),e.step(r)}},this.checkGeofence=function(e,t,n){return n.containsLatLng(new google.maps.LatLng(e,t))},this.checkMarkerGeofence=function(e,t){if(e.fences)for(var n=0,r;r=e.fences[n];n++){var s=e.getPosition();i.checkGeofence(s.lat(),s.lng(),r)||t(e,r)}},this.addLayer=function(e,t){t=t||{};var n;switch(e){case"weather":this.singleLayers.weather=n=new google.maps.weather.WeatherLayer;break;case"clouds":this.singleLayers.clouds=n=new google.maps.weather.CloudLayer;break;case"traffic":this.singleLayers.traffic=n=new google.maps.TrafficLayer;break;case"transit":this.singleLayers.transit=n=new google.maps.TransitLayer;break;case"bicycling":this.singleLayers.bicycling=n=new google.maps.BicyclingLayer;break;case"panoramio":this.singleLayers.panoramio=n=new google.maps.panoramio.PanoramioLayer,n.setTag(t.filter),delete t.filter,t.click&&google.maps.event.addListener(n,"click",function(e){t.click(e),delete t.click});break;case"places":this.singleLayers.places=n=new google.maps.places.PlacesService(this.map);if(t.search||t.nearbySearch){var r={bounds:t.bounds||null,keyword:t.keyword||null,location:t.location||null,name:t.name||null,radius:t.radius||null,rankBy:t.rankBy||null,types:t.types||null};t.search&&n.search(r,t.search),t.nearbySearch&&n.nearbySearch(r,t.nearbySearch)}if(t.textSearch){var i={bounds:t.bounds||null,location:t.location||null,query:t.query||null,radius:t.radius||null};n.textSearch(i,t.textSearch)}}if(n!==undefined)return typeof n.setOptions=="function"&&n.setOptions(t),typeof n.setMap=="function"&&n.setMap(this.map),n},this.removeLayer=function(e){this.singleLayers[e]!==undefined&&(this.singleLayers[e].setMap(null),delete this.singleLayers[e])},this.toImage=function(e){var e=e||{},t={};t.size=e.size||[this.el.clientWidth,this.el.clientHeight],t.lat=this.getCenter().lat(),t.lng=this.getCenter().lng();if(this.markers.length>0){t.markers=[];for(var n=0;n<this.markers.length;n++)t.markers.push({lat:this.markers[n].getPosition().lat(),lng:this.markers[n].getPosition().lng()})}if(this.polylines.length>0){var i=this.polylines[0];t.polyline={},t.polyline.path=google.maps.geometry.encoding.encodePath(i.getPath()),t.polyline.strokeColor=i.strokeColor,t.polyline.strokeOpacity=i.strokeOpacity,t.polyline.strokeWeight=i.strokeWeight}return r.staticMapURL(t)},this.addMapType=function(e,t){if(!t.hasOwnProperty("getTileUrl")||typeof t["getTileUrl"]!="function")throw"'getTileUrl' function required";t.tileSize=t.tileSize||new google.maps.Size(256,256);var n=new google.maps.ImageMapType(t);this.map.mapTypes.set(e,n)},this.addOverlayMapType=function(e){if(!e.hasOwnProperty("getTile")||typeof e["getTile"]!="function")throw"'getTile' function required";var t=e.index;delete e.index,this.map.overlayMapTypes.insertAt(t,e)},this.removeOverlayMapType=function(e){this.map.overlayMapTypes.removeAt(e)},this.addStyle=function(e){var t=new google.maps.StyledMapType(e.styles,e.styledMapName);this.map.mapTypes.set(e.mapTypeId,t)},this.setStyle=function(e){this.map.setMapTypeId(e)},this.createPanorama=function(e){if(!e.hasOwnProperty("lat")||!e.hasOwnProperty("lng"))e.lat=this.getCenter().lat(),e.lng=this.getCenter().lng();return this.panorama=r.createPanorama(e),this.map.setStreetView(this.panorama),this.panorama}};return r.createPanorama=function(e){var t=n(e.el,e.context);e.position=new google.maps.LatLng(e.lat,e.lng),delete e.el,delete e.context,delete e.lat,delete e.lng;var r=["closeclick","links_changed","pano_changed","position_changed","pov_changed","resize","visible_changed"],i=extend_object({visible:!0},e);for(var s=0;s<r.length;s++)delete i[r[s]];var o=new google.maps.StreetViewPanorama(t,i);for(var s=0;s<r.length;s++)(function(t,n){google.maps.event.addListener(t,n,function(){e[n]&&e[n].apply(this)})})(o,r[s]);return o},r.Route=function(e){this.map=e.map,this.route=e.route,this.step_count=0,this.steps=this.route.legs[0].steps,this.steps_length=this.steps.length,this.polyline=this.map.drawPolyline({path:new google.maps.MVCArray,strokeColor:e.strokeColor,strokeOpacity:e.strokeOpacity,strokeWeight:e.strokeWeight}).getPath(),this.back=function(){if(this.step_count>0){this.step_count--;var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.pop()}},this.forward=function(){if(this.step_count<this.steps_length){var e=this.route.legs[0].steps[this.step_count].path;for(var t in e)e.hasOwnProperty(t)&&this.polyline.push(e[t]);this.step_count++}}},r.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){e.success(n),t&&t()},function(n){e.error(n),t&&t()},e.options):(e.not_supported(),t&&t())},r.geocode=function(e){this.geocoder=new google.maps.Geocoder;var t=e.callback;e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")&&(e.latLng=new google.maps.LatLng(e.lat,e.lng)),delete e.lat,delete e.lng,delete e.callback,this.geocoder.geocode(e,function(e,n){t(e,n)})},r.staticMapURL=function(e){function p(e,t){if(e[0]==="#"){e=e.replace("#","0x");if(t){t=parseFloat(t),t=Math.min(1,Math.max(t,0));if(t===0)return"0x00000000";t=(t*255).toString(16),t.length===1&&(t+=t),e=e.slice(0,8)+t}}return e}var t=[],n,r="http://maps.googleapis.com/maps/api/staticmap";e.url&&(r=e.url,delete e.url),r+="?";var i=e.markers;delete e.markers,!i&&e.marker&&(i=[e.marker],delete e.marker);var s=e.polyline;delete e.polyline;if(e.center)t.push("center="+e.center),delete e.center;else if(e.address)t.push("center="+e.address),delete e.address;else if(e.lat)t.push(["center=",e.lat,",",e.lng].join("")),delete e.lat,delete e.lng;else if(e.visible){var o=encodeURI(e.visible.join("|"));t.push("visible="+o)}var u=e.size;u?(u.join&&(u=u.join("x")),delete e.size):u="630x300",t.push("size="+u),e.zoom||(e.zoom=15);var a=e.hasOwnProperty("sensor")?!!e.sensor:!0;delete e.sensor,t.push("sensor="+a);for(var f in e)e.hasOwnProperty(f)&&t.push(f+"="+e[f]);if(i){var l,c;for(var h=0;n=i[h];h++)l=[],n.size&&n.size!=="normal"?l.push("size:"+n.size):n.icon&&l.push("icon:"+encodeURI(n.icon)),n.color&&l.push("color:"+n.color.replace("#","0x")),n.label&&l.push("label:"+n.label[0].toUpperCase()),c=n.address?n.address:n.lat+","+n.lng,l.length||h===0?(l.push(c),l=l.join("|"),t.push("markers="+encodeURI(l))):(l=t.pop()+encodeURI("|"+c),t.push(l))}if(s){n=s,s=[],n.strokeWeight&&s.push("weight:"+parseInt(n.strokeWeight,10));if(n.strokeColor){var d=p(n.strokeColor,n.strokeOpacity);s.push("color:"+d)}if(n.fillColor){var v=p(n.fillColor,n.fillOpacity);s.push("fillcolor:"+v)}var m=n.path;if(m.join)for(var g=0,y;y=m[g];g++)s.push(y.join(","));else s.push("enc:"+m);s=s.join("|"),t.push("path="+encodeURI(s))}return t=t.join("&"),r+t},google.maps.Polygon.prototype.getBounds||(google.maps.Polygon.prototype.getBounds=function(e){var t=new google.maps.LatLngBounds,n=this.getPaths(),r;for(var i=0;i<n.getLength();i++){r=n.getAt(i);for(var s=0;s<r.getLength();s++)t.extend(r.getAt(s))}return t}),google.maps.Polygon.prototype.containsLatLng||(google.maps.Polygon.prototype.containsLatLng=function(e){var t=this.getBounds();if(t!==null&&!t.contains(e))return!1;var n=!1,r=this.getPaths().getLength();for(var i=0;i<r;i++){var s=this.getPaths().getAt(i),o=s.getLength(),u=o-1;for(var a=0;a<o;a++){var f=s.getAt(a),l=s.getAt(u);(f.lng()<e.lng()&&l.lng()>=e.lng()||l.lng()<e.lng()&&f.lng()>=e.lng())&&f.lat()+(e.lng()-f.lng())/(l.lng()-f.lng())*(l.lat()-f.lat())<e.lat()&&(n=!n),u=a}}return n}),google.maps.LatLngBounds.prototype.containsLatLng=function(e){return this.contains(e)},google.maps.Marker.prototype.setFences=function(e){this.fences=e},google.maps.Marker.prototype.addFence=function(e){this.fences.push(e)},r}(this),coordsToLatLngs=function(e,t){var n=e[0],r=e[1];return t&&(n=e[1],r=e[0]),new google.maps.LatLng(n,r)},arrayToLatLng=function(e,t){for(var n=0;n<e.length;n++)e[n].length>0&&typeof e[n][0]!="number"?e[n]=arrayToLatLng(e[n],t):e[n]=coordsToLatLngs(e[n],t);return e},extend_object=function(e,t){if(e===t)return e;for(var n in t)e[n]=t[n];return e},replace_object=function(e,t){if(e===t)return e;for(var n in t)e[n]!=undefined&&(e[n]=t[n]);return e},array_map=function(e,t){var n=Array.prototype.slice.call(arguments,2);if(Array.prototype.map&&e.map===Array.prototype.map)return Array.prototype.map.call(e,function(e){return callback_params=n,callback_params.splice(0,0,e),t.apply(this,callback_params)});var r=[],i=e.length;for(var s=0;s<i;s++)callback_params=n,callback_params=callback_params.splice(0,0,e[s]),r.push(t.apply(this,callback_params));return r},array_flat=function(e){new_array=[];for(var t=0;t<e.length;t++)new_array=new_array.concat(e[t]);return new_array};(function(){var e,t={}.hasOwnProperty,n=[].slice;if(((e=this["google"])!=null?e["maps"]:void 0)==null)return;this.OverlappingMarkerSpiderfier=function(){function f(n,r){var i,s,o,u,a,f,l=this;this.map=n,r==null&&(r={});for(s in r){if(!t.call(r,s))continue;o=r[s],this[s]=o}this.projHelper=new this.constructor.ProjHelper(this.map),this.initMarkerArrays(),this.listeners={},f=["click","zoom_changed","maptypeid_changed"];for(u=0,a=f.length;u<a;u++)i=f[u],e.addListener(this.map,i,function(){return l.unspiderfy()})}var e,r,i,s,o,u,a;return u=f.prototype,u.VERSION="0.3",r=google.maps,e=r.event,o=r.MapTypeId,a=Math.PI*2,u.keepSpiderfied=!1,u.markersWontHide=!1,u.markersWontMove=!1,u.nearbyDistance=20,u.circleSpiralSwitchover=9,u.circleFootSeparation=23,u.circleStartAngle=a/12,u.spiralFootSeparation=26,u.spiralLengthStart=11,u.spiralLengthFactor=4,u.spiderfiedZIndex=1e3,u.usualLegZIndex=10,u.highlightedLegZIndex=20,u.legWeight=1.5,u.legColors={usual:{},highlighted:{}},s=u.legColors.usual,i=u.legColors.highlighted,s[o.HYBRID]=s[o.SATELLITE]="#fff",i[o.HYBRID]=i[o.SATELLITE]="#f00",s[o.TERRAIN]=s[o.ROADMAP]="#444",i[o.TERRAIN]=i[o.ROADMAP]="#f00",u.initMarkerArrays=function(){return this.markers=[],this.markerListenerRefs=[]},u.addMarker=function(t){var n,r=this;return t["_oms"]!=null?this:(t._oms=!0,n=[e.addListener(t,"click",function(){return r.spiderListener(t)})],this.markersWontHide||n.push(e.addListener(t,"visible_changed",function(){return r.markerChangeListener(t,!1)})),this.markersWontMove||n.push(e.addListener(t,"position_changed",function(){return r.markerChangeListener(t,!0)})),this.markerListenerRefs.push(n),this.markers.push(t),this)},u.markerChangeListener=function(e,t){if(e["_omsData"]!=null&&(t||!e.getVisible())&&this.spiderfying==null&&this.unspiderfying==null)return this.unspiderfy(t?e:null)},u.getMarkers=function(){return this.markers.slice(0)},u.removeMarker=function(t){var n,r,i,s,o;t["_omsData"]!=null&&this.unspiderfy(),n=this.arrIndexOf(this.markers,t);if(n<0)return this;i=this.markerListenerRefs.splice(n,1)[0];for(s=0,o=i.length;s<o;s++)r=i[s],e.removeListener(r);return delete t._oms,this.markers.splice(n,1),this},u.clearMarkers=function(){var t,n,r,i,s,o,u,a,f;this.unspiderfy(),f=this.markers;for(t=s=0,u=f.length;s<u;t=++s){i=f[t],r=this.markerListenerRefs[t];for(o=0,a=r.length;o<a;o++)n=r[o],e.removeListener(n);delete i._oms}return this.initMarkerArrays(),this},u.addListener=function(e,t){var n,r;return((r=(n=this.listeners)[e])!=null?r:n[e]=[]).push(t),this},u.removeListener=function(e,t){var n;return n=this.arrIndexOf(this.listeners[e],t),n<0||this.listeners[e].splice(n,1),this},u.clearListeners=function(e){return this.listeners[e]=[],this},u.trigger=function(){var e,t,r,i,s,o,u,a;t=arguments[0],e=2<=arguments.length?n.call(arguments,1):[],u=(o=this.listeners[t])!=null?o:[],a=[];for(i=0,s=u.length;i<s;i++)r=u[i],a.push(r.apply(null,e));return a},u.generatePtsCircle=function(e,t){var n,i,s,o,u,f,l;s=this.circleFootSeparation*(2+e),u=s/a,i=a/e,l=[];for(o=f=0;0<=e?f<e:f>e;o=0<=e?++f:--f)n=this.circleStartAngle+o*i,l.push(new r.Point(t.x+u*Math.cos(n),t.y+u*Math.sin(n)));return l},u.generatePtsSpiral=function(e,t){var n,i,s,o,u,f;s=this.spiralLengthStart,n=0,f=[];for(i=u=0;0<=e?u<e:u>e;i=0<=e?++u:--u)n+=this.spiralFootSeparation/s+i*5e-4,o=new r.Point(t.x+s*Math.cos(n),t.y+s*Math.sin(n)),s+=a*this.spiralLengthFactor/n,f.push(o);return f},u.spiderListener=function(e){var t,n,r,i,s,o,u,a,f,l,c;i=e["_omsData"]!=null,(!i||!this.keepSpiderfied)&&this.unspiderfy();if(i||this.map.getStreetView().getVisible())return this.trigger("click",e);o=[],u=[],s=this.nearbyDistance,a=s*s,r=this.llToPt(e.position),c=this.markers;for(f=0,l=c.length;f<l;f++){t=c[f];if(t.map==null||!t.getVisible())continue;n=this.llToPt(t.position),this.ptDistanceSq(n,r)<a?o.push({marker:t,markerPt:n}):u.push(t)}return o.length===1?this.trigger("click",e):this.spiderfy(o,u)},u.markersNearMarker=function(e,t){var n,r,i,s,o,u,a,f,l,c,h;t==null&&(t=!1);if(this.projHelper.getProjection()==null)throw"Must wait for 'idle' event on map before calling markersNearMarker";o=this.nearbyDistance,u=o*o,i=this.llToPt(e.position),s=[],l=this.markers;for(a=0,f=l.length;a<f;a++){n=l[a];if(n===e||n.map==null||!n.getVisible())continue;r=this.llToPt((c=(h=n["_omsData"])!=null?h.usualPosition:void 0)!=null?c:n.position);if(this.ptDistanceSq(r,i)<u){s.push(n);if(t)break}}return s},u.markersNearAnyOtherMarker=function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w;if(this.projHelper.getProjection()==null)throw"Must wait for 'idle' event on map before calling markersNearAnyOtherMarker";f=this.nearbyDistance,l=f*f,a=function(){var e,t,n,i,s,o;n=this.markers,o=[];for(e=0,t=n.length;e<t;e++)r=n[e],o.push({pt:this.llToPt((i=(s=r["_omsData"])!=null?s.usualPosition:void 0)!=null?i:r.position),willSpiderfy:!1});return o}.call(this),g=this.markers;for(t=c=0,d=g.length;c<d;t=++c){i=g[t];if(i.map==null||!i.getVisible())continue;s=a[t];if(s.willSpiderfy)continue;y=this.markers;for(n=h=0,v=y.length;h<v;n=++h){o=y[n];if(n===t)continue;if(o.map==null||!o.getVisible())continue;u=a[n];if(n<t&&!u.willSpiderfy)continue;if(this.ptDistanceSq(s.pt,u.pt)<l){s.willSpiderfy=u.willSpiderfy=!0;break}}}b=this.markers,w=[];for(e=p=0,m=b.length;p<m;e=++p)r=b[e],a[e].willSpiderfy&&w.push(r);return w},u.makeHighlightListenerFuncs=function(e){var t=this;return{highlight:function(){return e._omsData.leg.setOptions({strokeColor:t.legColors.highlighted[t.map.mapTypeId],zIndex:t.highlightedLegZIndex})},unhighlight:function(){return e._omsData.leg.setOptions({strokeColor:t.legColors.usual[t.map.mapTypeId],zIndex:t.usualLegZIndex})}}},u.spiderfy=function(t,n){var i,s,o,u,a,f,l,c,h,p,d;return this.spiderfying=!0,p=t.length,i=this.ptAverage(function(){var e,n,r;r=[];for(e=0,n=t.length;e<n;e++)c=t[e],r.push(c.markerPt);return r}()),u=p>=this.circleSpiralSwitchover?this.generatePtsSpiral(p,i).reverse():this.generatePtsCircle(p,i),d=function(){var n,i,c,p=this;c=[];for(n=0,i=u.length;n<i;n++)o=u[n],s=this.ptToLl(o),h=this.minExtract(t,function(e){return p.ptDistanceSq(e.markerPt,o)}),l=h.marker,f=new r.Polyline({map:this.map,path:[l.position,s],strokeColor:this.legColors.usual[this.map.mapTypeId],strokeWeight:this.legWeight,zIndex:this.usualLegZIndex}),l._omsData={usualPosition:l.position,leg:f},this.legColors.highlighted[this.map.mapTypeId]!==this.legColors.usual[this.map.mapTypeId]&&(a=this.makeHighlightListenerFuncs(l),l._omsData.hightlightListeners={highlight:e.addListener(l,"mouseover",a.highlight),unhighlight:e.addListener(l,"mouseout",a.unhighlight)}),l.setPosition(s),l.setZIndex(Math.round(this.spiderfiedZIndex+o.y)),c.push(l);return c}.call(this),delete this.spiderfying,this.spiderfied=!0,this.trigger("spiderfy",d,n)},u.unspiderfy=function(t){var n,r,i,s,o,u,a;t==null&&(t=null);if(this.spiderfied==null)return this;this.unspiderfying=!0,s=[],i=[],a=this.markers;for(o=0,u=a.length;o<u;o++)r=a[o],r["_omsData"]!=null?(r._omsData.leg.setMap(null),r!==t&&r.setPosition(r._omsData.usualPosition),r.setZIndex(null),n=r._omsData.hightlightListeners,n!=null&&(e.removeListener(n.highlight),e.removeListener(n.unhighlight)),delete r._omsData,s.push(r)):i.push(r);return delete this.unspiderfying,delete this.spiderfied,this.trigger("unspiderfy",s,i),this},u.ptDistanceSq=function(e,t){var n,r;return n=
e.x-t.x,r=e.y-t.y,n*n+r*r},u.ptAverage=function(e){var t,n,i,s,o,u;i=s=0;for(o=0,u=e.length;o<u;o++)n=e[o],i+=n.x,s+=n.y;return t=e.length,new r.Point(i/t,s/t)},u.llToPt=function(e){return this.projHelper.getProjection().fromLatLngToDivPixel(e)},u.ptToLl=function(e){return this.projHelper.getProjection().fromDivPixelToLatLng(e)},u.minExtract=function(e,t){var n,r,i,s,o,u,a;for(i=u=0,a=e.length;u<a;i=++u){s=e[i],o=t(s);if(typeof n=="undefined"||n===null||o<r)r=o,n=i}return e.splice(n,1)[0]},u.arrIndexOf=function(e,t){var n,r,i,s;if(e.indexOf!=null)return e.indexOf(t);for(n=i=0,s=e.length;i<s;n=++i){r=e[n];if(r===t)return n}return-1},f.ProjHelper=function(e){return this.setMap(e)},f.ProjHelper.prototype=new r.OverlayView,f.ProjHelper.prototype.draw=function(){},f}()}).call(this),function(){jQuery(function(){var e,t,n,r,i,s,o,u,a;return n=function(e){return new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+e,new google.maps.Size(21,34),new google.maps.Point(0,0),new google.maps.Point(10,34))},t=function(){var e,t,n,r,u;t=0,u=[];while(t<restaurants.length)r=restaurants[t],e='<h4><a href="'+r.link+'" target="_blank">'+r.name+"</a></h4>",e+="<address>"+r.address+"</address>",e+="<p>"+r.price+"</p>",n=i.addMarker({lat:r.coordinates[0],lng:r.coordinates[1],title:r.name,icon:o[r.price[0]],content:e}),s.addMarker(n),u.push(t++);return u},u=function(e){return $.post("/search",{search:e},function(e){i.removeMarkers();if(e.length)return window.restaurants=e,t()},"json")},i=new GMaps({div:"#map",lat:46.119944,lng:14.815333,zoom:8,disableDefaultUI:!0}),s=new OverlappingMarkerSpiderfier(i.map,{keepSpiderfied:!0,markersWontMove:!0,markersWontHide:!0}),r=new google.maps.InfoWindow,s.addListener("click",function(e){return r.setContent(e.content),r.open(i.map,e)}),o=[n("ffe7c8"),n("ffcc95"),n("ffad60"),n("ff8c1f"),n("e04f00")],u(""),navigator.geolocation&&(e=new GeolocationMarker(i.map),e.setMinimumAccuracy(50),google.maps.event.addListenerOnce(e,"position_changed",function(){return i.setZoom(15),i.panTo(this.getPosition())})),a=null,$("#restaurantSearch").on("keyup",function(){var e;return clearTimeout(a),e=$(this).val(),a=setTimeout(function(){return u(e)},500)})})}.call(this);