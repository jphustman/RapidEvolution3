/*
	Copyright (c) 2004-2010, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

dojo.provide("re3.dojo");if(!dojo._hasResource["dojo.data.util.filter"]){dojo._hasResource["dojo.data.util.filter"]=true;dojo.provide("dojo.data.util.filter");dojo.data.util.filter.patternToRegExp=function(_1,_2){var _3="^";var c=null;for(var i=0;i<_1.length;i++){c=_1.charAt(i);switch(c){case "\\":_3+=c;i++;_3+=_1.charAt(i);break;case "*":_3+=".*";break;case "?":_3+=".";break;case "$":case "^":case "/":case "+":case ".":case "|":case "(":case ")":case "{":case "}":case "[":case "]":_3+="\\";default:_3+=c;}}_3+="$";if(_2){return new RegExp(_3,"mi");}else{return new RegExp(_3,"m");}};}if(!dojo._hasResource["dojo.data.util.sorter"]){dojo._hasResource["dojo.data.util.sorter"]=true;dojo.provide("dojo.data.util.sorter");dojo.data.util.sorter.basicComparator=function(a,b){var r=-1;if(a===null){a=undefined;}if(b===null){b=undefined;}if(a==b){r=0;}else{if(a>b||a==null){r=1;}}return r;};dojo.data.util.sorter.createSortFunction=function(_4,_5){var _6=[];function _7(_8,_9,_a,s){return function(_b,_c){var a=s.getValue(_b,_8);var b=s.getValue(_c,_8);return _9*_a(a,b);};};var _d;var _e=_5.comparatorMap;var bc=dojo.data.util.sorter.basicComparator;for(var i=0;i<_4.length;i++){_d=_4[i];var _f=_d.attribute;if(_f){var dir=(_d.descending)?-1:1;var _10=bc;if(_e){if(typeof _f!=="string"&&("toString" in _f)){_f=_f.toString();}_10=_e[_f]||bc;}_6.push(_7(_f,dir,_10,_5));}}return function(_11,_12){var i=0;while(i<_6.length){var ret=_6[i++](_11,_12);if(ret!==0){return ret;}}return 0;};};}if(!dojo._hasResource["dojo.data.util.simpleFetch"]){dojo._hasResource["dojo.data.util.simpleFetch"]=true;dojo.provide("dojo.data.util.simpleFetch");dojo.data.util.simpleFetch.fetch=function(_13){_13=_13||{};if(!_13.store){_13.store=this;}var _14=this;var _15=function(_16,_17){if(_17.onError){var _18=_17.scope||dojo.global;_17.onError.call(_18,_16,_17);}};var _19=function(_1a,_1b){var _1c=_1b.abort||null;var _1d=false;var _1e=_1b.start?_1b.start:0;var _1f=(_1b.count&&(_1b.count!==Infinity))?(_1e+_1b.count):_1a.length;_1b.abort=function(){_1d=true;if(_1c){_1c.call(_1b);}};var _20=_1b.scope||dojo.global;if(!_1b.store){_1b.store=_14;}if(_1b.onBegin){_1b.onBegin.call(_20,_1a.length,_1b);}if(_1b.sort){_1a.sort(dojo.data.util.sorter.createSortFunction(_1b.sort,_14));}if(_1b.onItem){for(var i=_1e;(i<_1a.length)&&(i<_1f);++i){var _21=_1a[i];if(!_1d){_1b.onItem.call(_20,_21,_1b);}}}if(_1b.onComplete&&!_1d){var _22=null;if(!_1b.onItem){_22=_1a.slice(_1e,_1f);}_1b.onComplete.call(_20,_22,_1b);}};this._fetchItems(_13,_19,_15);return _13;};}if(!dojo._hasResource["dojo.date.stamp"]){dojo._hasResource["dojo.date.stamp"]=true;dojo.provide("dojo.date.stamp");dojo.date.stamp.fromISOString=function(_23,_24){if(!dojo.date.stamp._isoRegExp){dojo.date.stamp._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/;}var _25=dojo.date.stamp._isoRegExp.exec(_23),_26=null;if(_25){_25.shift();if(_25[1]){_25[1]--;}if(_25[6]){_25[6]*=1000;}if(_24){_24=new Date(_24);dojo.forEach(dojo.map(["FullYear","Month","Date","Hours","Minutes","Seconds","Milliseconds"],function(_27){return _24["get"+_27]();}),function(_28,_29){_25[_29]=_25[_29]||_28;});}_26=new Date(_25[0]||1970,_25[1]||0,_25[2]||1,_25[3]||0,_25[4]||0,_25[5]||0,_25[6]||0);if(_25[0]<100){_26.setFullYear(_25[0]||1970);}var _2a=0,_2b=_25[7]&&_25[7].charAt(0);if(_2b!="Z"){_2a=((_25[8]||0)*60)+(Number(_25[9])||0);if(_2b!="-"){_2a*=-1;}}if(_2b){_2a-=_26.getTimezoneOffset();}if(_2a){_26.setTime(_26.getTime()+_2a*60000);}}return _26;};dojo.date.stamp.toISOString=function(_2c,_2d){var _2e=function(n){return (n<10)?"0"+n:n;};_2d=_2d||{};var _2f=[],_30=_2d.zulu?"getUTC":"get",_31="";if(_2d.selector!="time"){var _32=_2c[_30+"FullYear"]();_31=["0000".substr((_32+"").length)+_32,_2e(_2c[_30+"Month"]()+1),_2e(_2c[_30+"Date"]())].join("-");}_2f.push(_31);if(_2d.selector!="date"){var _33=[_2e(_2c[_30+"Hours"]()),_2e(_2c[_30+"Minutes"]()),_2e(_2c[_30+"Seconds"]())].join(":");var _34=_2c[_30+"Milliseconds"]();if(_2d.milliseconds){_33+="."+(_34<100?"0":"")+_2e(_34);}if(_2d.zulu){_33+="Z";}else{if(_2d.selector!="time"){var _35=_2c.getTimezoneOffset();var _36=Math.abs(_35);_33+=(_35>0?"-":"+")+_2e(Math.floor(_36/60))+":"+_2e(_36%60);}}_2f.push(_33);}return _2f.join("T");};}if(!dojo._hasResource["dojo.data.ItemFileReadStore"]){dojo._hasResource["dojo.data.ItemFileReadStore"]=true;dojo.provide("dojo.data.ItemFileReadStore");dojo.declare("dojo.data.ItemFileReadStore",null,{constructor:function(_37){this._arrayOfAllItems=[];this._arrayOfTopLevelItems=[];this._loadFinished=false;this._jsonFileUrl=_37.url;this._ccUrl=_37.url;this.url=_37.url;this._jsonData=_37.data;this.data=null;this._datatypeMap=_37.typeMap||{};if(!this._datatypeMap["Date"]){this._datatypeMap["Date"]={type:Date,deserialize:function(_38){return dojo.date.stamp.fromISOString(_38);}};}this._features={"dojo.data.api.Read":true,"dojo.data.api.Identity":true};this._itemsByIdentity=null;this._storeRefPropName="_S";this._itemNumPropName="_0";this._rootItemPropName="_RI";this._reverseRefMap="_RRM";this._loadInProgress=false;this._queuedFetches=[];if(_37.urlPreventCache!==undefined){this.urlPreventCache=_37.urlPreventCache?true:false;}if(_37.hierarchical!==undefined){this.hierarchical=_37.hierarchical?true:false;}if(_37.clearOnClose){this.clearOnClose=true;}if("failOk" in _37){this.failOk=_37.failOk?true:false;}},url:"",_ccUrl:"",data:null,typeMap:null,clearOnClose:false,urlPreventCache:false,failOk:false,hierarchical:true,_assertIsItem:function(_39){if(!this.isItem(_39)){throw new Error("dojo.data.ItemFileReadStore: Invalid item argument.");}},_assertIsAttribute:function(_3a){if(typeof _3a!=="string"){throw new Error("dojo.data.ItemFileReadStore: Invalid attribute argument.");}},getValue:function(_3b,_3c,_3d){var _3e=this.getValues(_3b,_3c);return (_3e.length>0)?_3e[0]:_3d;},getValues:function(_3f,_40){this._assertIsItem(_3f);this._assertIsAttribute(_40);return (_3f[_40]||[]).slice(0);},getAttributes:function(_41){this._assertIsItem(_41);var _42=[];for(var key in _41){if((key!==this._storeRefPropName)&&(key!==this._itemNumPropName)&&(key!==this._rootItemPropName)&&(key!==this._reverseRefMap)){_42.push(key);}}return _42;},hasAttribute:function(_43,_44){this._assertIsItem(_43);this._assertIsAttribute(_44);return (_44 in _43);},containsValue:function(_45,_46,_47){var _48=undefined;if(typeof _47==="string"){_48=dojo.data.util.filter.patternToRegExp(_47,false);}return this._containsValue(_45,_46,_47,_48);},_containsValue:function(_49,_4a,_4b,_4c){return dojo.some(this.getValues(_49,_4a),function(_4d){if(_4d!==null&&!dojo.isObject(_4d)&&_4c){if(_4d.toString().match(_4c)){return true;}}else{if(_4b===_4d){return true;}}});},isItem:function(_4e){if(_4e&&_4e[this._storeRefPropName]===this){if(this._arrayOfAllItems[_4e[this._itemNumPropName]]===_4e){return true;}}return false;},isItemLoaded:function(_4f){return this.isItem(_4f);},loadItem:function(_50){this._assertIsItem(_50.item);},getFeatures:function(){return this._features;},getLabel:function(_51){if(this._labelAttr&&this.isItem(_51)){return this.getValue(_51,this._labelAttr);}return undefined;},getLabelAttributes:function(_52){if(this._labelAttr){return [this._labelAttr];}return null;},_fetchItems:function(_53,_54,_55){var _56=this,_57=function(_58,_59){var _5a=[],i,key;if(_58.query){var _5b,_5c=_58.queryOptions?_58.queryOptions.ignoreCase:false;var _5d={};for(key in _58.query){_5b=_58.query[key];if(typeof _5b==="string"){_5d[key]=dojo.data.util.filter.patternToRegExp(_5b,_5c);}else{if(_5b instanceof RegExp){_5d[key]=_5b;}}}for(i=0;i<_59.length;++i){var _5e=true;var _5f=_59[i];if(_5f===null){_5e=false;}else{for(key in _58.query){_5b=_58.query[key];if(!_56._containsValue(_5f,key,_5b,_5d[key])){_5e=false;}}}if(_5e){_5a.push(_5f);}}_54(_5a,_58);}else{for(i=0;i<_59.length;++i){var _60=_59[i];if(_60!==null){_5a.push(_60);}}_54(_5a,_58);}};if(this._loadFinished){_57(_53,this._getItemsArray(_53.queryOptions));}else{if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){if(this._loadInProgress){this._queuedFetches.push({args:_53,filter:_57});}else{this._loadInProgress=true;var _61={url:_56._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};var _62=dojo.xhrGet(_61);_62.addCallback(function(_63){try{_56._getItemsFromLoadedData(_63);_56._loadFinished=true;_56._loadInProgress=false;_57(_53,_56._getItemsArray(_53.queryOptions));_56._handleQueuedFetches();}catch(e){_56._loadFinished=true;_56._loadInProgress=false;_55(e,_53);}});_62.addErrback(function(_64){_56._loadInProgress=false;_55(_64,_53);});var _65=null;if(_53.abort){_65=_53.abort;}_53.abort=function(){var df=_62;if(df&&df.fired===-1){df.cancel();df=null;}if(_65){_65.call(_53);}};}}else{if(this._jsonData){try{this._loadFinished=true;this._getItemsFromLoadedData(this._jsonData);this._jsonData=null;_57(_53,this._getItemsArray(_53.queryOptions));}catch(e){_55(e,_53);}}else{_55(new Error("dojo.data.ItemFileReadStore: No JSON source data was provided as either URL or a nested Javascript object."),_53);}}}},_handleQueuedFetches:function(){if(this._queuedFetches.length>0){for(var i=0;i<this._queuedFetches.length;i++){var _66=this._queuedFetches[i],_67=_66.args,_68=_66.filter;if(_68){_68(_67,this._getItemsArray(_67.queryOptions));}else{this.fetchItemByIdentity(_67);}}this._queuedFetches=[];}},_getItemsArray:function(_69){if(_69&&_69.deep){return this._arrayOfAllItems;}return this._arrayOfTopLevelItems;},close:function(_6a){if(this.clearOnClose&&this._loadFinished&&!this._loadInProgress){if(((this._jsonFileUrl==""||this._jsonFileUrl==null)&&(this.url==""||this.url==null))&&this.data==null){console.debug("dojo.data.ItemFileReadStore: WARNING!  Data reload "+" information has not been provided."+"  Please set 'url' or 'data' to the appropriate value before"+" the next fetch");}this._arrayOfAllItems=[];this._arrayOfTopLevelItems=[];this._loadFinished=false;this._itemsByIdentity=null;this._loadInProgress=false;this._queuedFetches=[];}},_getItemsFromLoadedData:function(_6b){var _6c=false,_6d=this;function _6e(_6f){var _70=((_6f!==null)&&(typeof _6f==="object")&&(!dojo.isArray(_6f)||_6c)&&(!dojo.isFunction(_6f))&&(_6f.constructor==Object||dojo.isArray(_6f))&&(typeof _6f._reference==="undefined")&&(typeof _6f._type==="undefined")&&(typeof _6f._value==="undefined")&&_6d.hierarchical);return _70;};function _71(_72){_6d._arrayOfAllItems.push(_72);for(var _73 in _72){var _74=_72[_73];if(_74){if(dojo.isArray(_74)){var _75=_74;for(var k=0;k<_75.length;++k){var _76=_75[k];if(_6e(_76)){_71(_76);}}}else{if(_6e(_74)){_71(_74);}}}}};this._labelAttr=_6b.label;var i,_77;this._arrayOfAllItems=[];this._arrayOfTopLevelItems=_6b.items;for(i=0;i<this._arrayOfTopLevelItems.length;++i){_77=this._arrayOfTopLevelItems[i];if(dojo.isArray(_77)){_6c=true;}_71(_77);_77[this._rootItemPropName]=true;}var _78={},key;for(i=0;i<this._arrayOfAllItems.length;++i){_77=this._arrayOfAllItems[i];for(key in _77){if(key!==this._rootItemPropName){var _79=_77[key];if(_79!==null){if(!dojo.isArray(_79)){_77[key]=[_79];}}else{_77[key]=[null];}}_78[key]=key;}}while(_78[this._storeRefPropName]){this._storeRefPropName+="_";}while(_78[this._itemNumPropName]){this._itemNumPropName+="_";}while(_78[this._reverseRefMap]){this._reverseRefMap+="_";}var _7a;var _7b=_6b.identifier;if(_7b){this._itemsByIdentity={};this._features["dojo.data.api.Identity"]=_7b;for(i=0;i<this._arrayOfAllItems.length;++i){_77=this._arrayOfAllItems[i];_7a=_77[_7b];var _7c=_7a[0];if(!this._itemsByIdentity[_7c]){this._itemsByIdentity[_7c]=_77;}else{if(this._jsonFileUrl){throw new Error("dojo.data.ItemFileReadStore:  The json data as specified by: ["+this._jsonFileUrl+"] is malformed.  Items within the list have identifier: ["+_7b+"].  Value collided: ["+_7c+"]");}else{if(this._jsonData){throw new Error("dojo.data.ItemFileReadStore:  The json data provided by the creation arguments is malformed.  Items within the list have identifier: ["+_7b+"].  Value collided: ["+_7c+"]");}}}}}else{this._features["dojo.data.api.Identity"]=Number;}for(i=0;i<this._arrayOfAllItems.length;++i){_77=this._arrayOfAllItems[i];_77[this._storeRefPropName]=this;_77[this._itemNumPropName]=i;}for(i=0;i<this._arrayOfAllItems.length;++i){_77=this._arrayOfAllItems[i];for(key in _77){_7a=_77[key];for(var j=0;j<_7a.length;++j){_79=_7a[j];if(_79!==null&&typeof _79=="object"){if(("_type" in _79)&&("_value" in _79)){var _7d=_79._type;var _7e=this._datatypeMap[_7d];if(!_7e){throw new Error("dojo.data.ItemFileReadStore: in the typeMap constructor arg, no object class was specified for the datatype '"+_7d+"'");}else{if(dojo.isFunction(_7e)){_7a[j]=new _7e(_79._value);}else{if(dojo.isFunction(_7e.deserialize)){_7a[j]=_7e.deserialize(_79._value);}else{throw new Error("dojo.data.ItemFileReadStore: Value provided in typeMap was neither a constructor, nor a an object with a deserialize function");}}}}if(_79._reference){var _7f=_79._reference;if(!dojo.isObject(_7f)){_7a[j]=this._getItemByIdentity(_7f);}else{for(var k=0;k<this._arrayOfAllItems.length;++k){var _80=this._arrayOfAllItems[k],_81=true;for(var _82 in _7f){if(_80[_82]!=_7f[_82]){_81=false;}}if(_81){_7a[j]=_80;}}}if(this.referenceIntegrity){var _83=_7a[j];if(this.isItem(_83)){this._addReferenceToMap(_83,_77,key);}}}else{if(this.isItem(_79)){if(this.referenceIntegrity){this._addReferenceToMap(_79,_77,key);}}}}}}}},_addReferenceToMap:function(_84,_85,_86){},getIdentity:function(_87){var _88=this._features["dojo.data.api.Identity"];if(_88===Number){return _87[this._itemNumPropName];}else{var _89=_87[_88];if(_89){return _89[0];}}return null;},fetchItemByIdentity:function(_8a){var _8b,_8c;if(!this._loadFinished){var _8d=this;if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){if(this._loadInProgress){this._queuedFetches.push({args:_8a});}else{this._loadInProgress=true;var _8e={url:_8d._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk};var _8f=dojo.xhrGet(_8e);_8f.addCallback(function(_90){var _91=_8a.scope?_8a.scope:dojo.global;try{_8d._getItemsFromLoadedData(_90);_8d._loadFinished=true;_8d._loadInProgress=false;_8b=_8d._getItemByIdentity(_8a.identity);if(_8a.onItem){_8a.onItem.call(_91,_8b);}_8d._handleQueuedFetches();}catch(error){_8d._loadInProgress=false;if(_8a.onError){_8a.onError.call(_91,error);}}});_8f.addErrback(function(_92){_8d._loadInProgress=false;if(_8a.onError){var _93=_8a.scope?_8a.scope:dojo.global;_8a.onError.call(_93,_92);}});}}else{if(this._jsonData){_8d._getItemsFromLoadedData(_8d._jsonData);_8d._jsonData=null;_8d._loadFinished=true;_8b=_8d._getItemByIdentity(_8a.identity);if(_8a.onItem){_8c=_8a.scope?_8a.scope:dojo.global;_8a.onItem.call(_8c,_8b);}}}}else{_8b=this._getItemByIdentity(_8a.identity);if(_8a.onItem){_8c=_8a.scope?_8a.scope:dojo.global;_8a.onItem.call(_8c,_8b);}}},_getItemByIdentity:function(_94){var _95=null;if(this._itemsByIdentity){_95=this._itemsByIdentity[_94];}else{_95=this._arrayOfAllItems[_94];}if(_95===undefined){_95=null;}return _95;},getIdentityAttributes:function(_96){var _97=this._features["dojo.data.api.Identity"];if(_97===Number){return null;}else{return [_97];}},_forceLoad:function(){var _98=this;if(this._jsonFileUrl!==this._ccUrl){dojo.deprecated("dojo.data.ItemFileReadStore: ","To change the url, set the url property of the store,"+" not _jsonFileUrl.  _jsonFileUrl support will be removed in 2.0");this._ccUrl=this._jsonFileUrl;this.url=this._jsonFileUrl;}else{if(this.url!==this._ccUrl){this._jsonFileUrl=this.url;this._ccUrl=this.url;}}if(this.data!=null&&this._jsonData==null){this._jsonData=this.data;this.data=null;}if(this._jsonFileUrl){var _99={url:this._jsonFileUrl,handleAs:"json-comment-optional",preventCache:this.urlPreventCache,failOk:this.failOk,sync:true};var _9a=dojo.xhrGet(_99);_9a.addCallback(function(_9b){try{if(_98._loadInProgress!==true&&!_98._loadFinished){_98._getItemsFromLoadedData(_9b);_98._loadFinished=true;}else{if(_98._loadInProgress){throw new Error("dojo.data.ItemFileReadStore:  Unable to perform a synchronous load, an async load is in progress.");}}}catch(e){console.log(e);throw e;}});_9a.addErrback(function(_9c){throw _9c;});}else{if(this._jsonData){_98._getItemsFromLoadedData(_98._jsonData);_98._jsonData=null;_98._loadFinished=true;}}}});dojo.extend(dojo.data.ItemFileReadStore,dojo.data.util.simpleFetch);}if(!dojo._hasResource["dojo.parser"]){dojo._hasResource["dojo.parser"]=true;dojo.provide("dojo.parser");new Date("X");dojo.parser=new function(){var d=dojo;this._attrName=d._scopeName+"Type";this._query="["+this._attrName+"]";function _9d(_9e){if(d.isString(_9e)){return "string";}if(typeof _9e=="number"){return "number";}if(typeof _9e=="boolean"){return "boolean";}if(d.isFunction(_9e)){return "function";}if(d.isArray(_9e)){return "array";}if(_9e instanceof Date){return "date";}if(_9e instanceof d._Url){return "url";}return "object";};function _9f(_a0,_a1){switch(_a1){case "string":return _a0;case "number":return _a0.length?Number(_a0):NaN;case "boolean":return typeof _a0=="boolean"?_a0:!(_a0.toLowerCase()=="false");case "function":if(d.isFunction(_a0)){_a0=_a0.toString();_a0=d.trim(_a0.substring(_a0.indexOf("{")+1,_a0.length-1));}try{if(_a0===""||_a0.search(/[^\w\.]+/i)!=-1){return new Function(_a0);}else{return d.getObject(_a0,false)||new Function(_a0);}}catch(e){return new Function();}case "array":return _a0?_a0.split(/\s*,\s*/):[];case "date":switch(_a0){case "":return new Date("");case "now":return new Date();default:return d.date.stamp.fromISOString(_a0);}case "url":return d.baseUrl+_a0;default:return d.fromJson(_a0);}};var _a2={};dojo.connect(dojo,"extend",function(){_a2={};});function _a3(_a4){if(!_a2[_a4]){var cls=d.getObject(_a4);if(!cls){return null;}var _a5=cls.prototype;var _a6={},_a7={};for(var _a8 in _a5){if(_a8.charAt(0)=="_"){continue;}if(_a8 in _a7){continue;}var _a9=_a5[_a8];_a6[_a8]=_9d(_a9);}_a2[_a4]={cls:cls,params:_a6};}return _a2[_a4];};this._functionFromScript=function(_aa){var _ab="";var _ac="";var _ad=_aa.getAttribute("args");if(_ad){d.forEach(_ad.split(/\s*,\s*/),function(_ae,idx){_ab+="var "+_ae+" = arguments["+idx+"]; ";});}var _af=_aa.getAttribute("with");if(_af&&_af.length){d.forEach(_af.split(/\s*,\s*/),function(_b0){_ab+="with("+_b0+"){";_ac+="}";});}return new Function(_ab+_aa.innerHTML+_ac);};this.instantiate=function(_b1,_b2,_b3){var _b4=[],dp=dojo.parser;_b2=_b2||{};_b3=_b3||{};d.forEach(_b1,function(obj){if(!obj){return;}var _b5,_b6,_b7,_b8,_b9;if(obj.node){_b5=obj.node;_b6=obj.type;_b7=obj.clsInfo||(_b6&&_a3(_b6));_b8=_b7&&_b7.cls;_b9=obj.scripts;}else{_b5=obj;_b6=dp._attrName in _b2?_b2[dp._attrName]:_b5.getAttribute(dp._attrName);_b7=_b6&&_a3(_b6);_b8=_b7&&_b7.cls;_b9=(_b8&&(_b8._noScript||_b8.prototype._noScript)?[]:d.query("> script[type^='dojo/']",_b5));}if(!_b7){throw new Error("Could not load class '"+_b6);}var _ba={},_bb=_b5.attributes;if(_b3.defaults){dojo.mixin(_ba,_b3.defaults);}if(obj.inherited){dojo.mixin(_ba,obj.inherited);}for(var _bc in _b7.params){var _bd=_bc in _b2?{value:_b2[_bc],specified:true}:_bb.getNamedItem(_bc);if(!_bd||(!_bd.specified&&(!dojo.isIE||_bc.toLowerCase()!="value"))){continue;}var _be=_bd.value;switch(_bc){case "class":_be="className" in _b2?_b2.className:_b5.className;break;case "style":_be="style" in _b2?_b2.style:(_b5.style&&_b5.style.cssText);}var _bf=_b7.params[_bc];if(typeof _be=="string"){_ba[_bc]=_9f(_be,_bf);}else{_ba[_bc]=_be;}}var _c0=[],_c1=[];d.forEach(_b9,function(_c2){_b5.removeChild(_c2);var _c3=_c2.getAttribute("event"),_b6=_c2.getAttribute("type"),nf=d.parser._functionFromScript(_c2);if(_c3){if(_b6=="dojo/connect"){_c0.push({event:_c3,func:nf});}else{_ba[_c3]=nf;}}else{_c1.push(nf);}});var _c4=_b8.markupFactory||_b8.prototype&&_b8.prototype.markupFactory;var _c5=_c4?_c4(_ba,_b5,_b8):new _b8(_ba,_b5);_b4.push(_c5);var _c6=_b5.getAttribute("jsId");if(_c6){d.setObject(_c6,_c5);}d.forEach(_c0,function(_c7){d.connect(_c5,_c7.event,null,_c7.func);});d.forEach(_c1,function(_c8){_c8.call(_c5);});});if(!_b2._started){d.forEach(_b4,function(_c9){if(!_b3.noStart&&_c9&&_c9.startup&&!_c9._started&&(!_c9.getParent||!_c9.getParent())){_c9.startup();}});}return _b4;};this.parse=function(_ca,_cb){var _cc;if(!_cb&&_ca&&_ca.rootNode){_cb=_ca;_cc=_cb.rootNode;}else{_cc=_ca;}var _cd=this._attrName;function _ce(_cf,_d0){var _d1=dojo.clone(_cf.inherited);dojo.forEach(["dir","lang"],function(_d2){var val=_cf.node.getAttribute(_d2);if(val){_d1[_d2]=val;}});var _d3=_cf.scripts;var _d4=!_cf.clsInfo||!_cf.clsInfo.cls.prototype.stopParser;for(var _d5=_cf.node.firstChild;_d5;_d5=_d5.nextSibling){if(_d5.nodeType==1){var _d6=_d4&&_d5.getAttribute(_cd);if(_d6){var _d7={"type":_d6,clsInfo:_a3(_d6),node:_d5,scripts:[],inherited:_d1};_d0.push(_d7);_ce(_d7,_d0);}else{if(_d3&&_d5.nodeName.toLowerCase()=="script"){_d6=_d5.getAttribute("type");if(_d6&&/^dojo\//i.test(_d6)){_d3.push(_d5);}}else{if(_d4){_ce({node:_d5,inherited:_d1},_d0);}}}}}};var _d8=[];_ce({node:_cc?dojo.byId(_cc):dojo.body(),inherited:(_cb&&_cb.inherited)||{dir:dojo._isBodyLtr()?"ltr":"rtl"}},_d8);return this.instantiate(_d8,null,_cb);};}();(function(){var _d9=function(){if(dojo.config.parseOnLoad){dojo.parser.parse();}};if(dojo.exists("dijit.wai.onload")&&(dijit.wai.onload===dojo._loaders[0])){dojo._loaders.splice(1,0,_d9);}else{dojo._loaders.unshift(_d9);}})();}