/* eslint-disable */
// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
window.PR_SHOULD_USE_CONTINUATION = stryMutAct_9fa48("500") ? false : (stryCov_9fa48("500"), true);
(function () {
  if (stryMutAct_9fa48("501")) {
    {}
  } else {
    stryCov_9fa48("501");
    var h = stryMutAct_9fa48("502") ? [] : (stryCov_9fa48("502"), [stryMutAct_9fa48("503") ? "" : (stryCov_9fa48("503"), 'break,continue,do,else,for,if,return,while')]);
    var u = stryMutAct_9fa48("504") ? [] : (stryCov_9fa48("504"), [h, stryMutAct_9fa48("505") ? "" : (stryCov_9fa48("505"), 'auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile')]);
    var p = stryMutAct_9fa48("506") ? [] : (stryCov_9fa48("506"), [u, stryMutAct_9fa48("507") ? "" : (stryCov_9fa48("507"), 'catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof')]);
    var l = stryMutAct_9fa48("508") ? [] : (stryCov_9fa48("508"), [p, stryMutAct_9fa48("509") ? "" : (stryCov_9fa48("509"), 'alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where')]);
    var x = stryMutAct_9fa48("510") ? [] : (stryCov_9fa48("510"), [p, stryMutAct_9fa48("511") ? "" : (stryCov_9fa48("511"), 'abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient')]);
    var R = stryMutAct_9fa48("512") ? [] : (stryCov_9fa48("512"), [x, stryMutAct_9fa48("513") ? "" : (stryCov_9fa48("513"), 'as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var')]);
    var r = stryMutAct_9fa48("514") ? "" : (stryCov_9fa48("514"), 'all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes');
    var w = stryMutAct_9fa48("515") ? [] : (stryCov_9fa48("515"), [p, stryMutAct_9fa48("516") ? "" : (stryCov_9fa48("516"), 'debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN')]);
    var s = stryMutAct_9fa48("517") ? "" : (stryCov_9fa48("517"), 'caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END');
    var I = stryMutAct_9fa48("518") ? [] : (stryCov_9fa48("518"), [h, stryMutAct_9fa48("519") ? "" : (stryCov_9fa48("519"), 'and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None')]);
    var f = stryMutAct_9fa48("520") ? [] : (stryCov_9fa48("520"), [h, stryMutAct_9fa48("521") ? "" : (stryCov_9fa48("521"), 'alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END')]);
    var H = stryMutAct_9fa48("522") ? [] : (stryCov_9fa48("522"), [h, stryMutAct_9fa48("523") ? "" : (stryCov_9fa48("523"), 'case,done,elif,esac,eval,fi,function,in,local,set,then,until')]);
    var A = stryMutAct_9fa48("524") ? [] : (stryCov_9fa48("524"), [l, R, w, stryMutAct_9fa48("525") ? s - I : (stryCov_9fa48("525"), s + I), f, H]);
    var e = stryMutAct_9fa48("532") ? /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\D*)/ : stryMutAct_9fa48("531") ? /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d)/ : stryMutAct_9fa48("530") ? /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u(int|float)\d*)/ : stryMutAct_9fa48("529") ? /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)(set|map)|bitset|u?(int|float)\d*)/ : stryMutAct_9fa48("528") ? /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/ : stryMutAct_9fa48("527") ? /^(DIR|FILE|vector|(de|priority_)queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/ : stryMutAct_9fa48("526") ? /(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/ : (stryCov_9fa48("526", "527", "528", "529", "530", "531", "532"), /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/);
    var C = stryMutAct_9fa48("533") ? "" : (stryCov_9fa48("533"), 'str');
    var z = stryMutAct_9fa48("534") ? "" : (stryCov_9fa48("534"), 'kwd');
    var j = stryMutAct_9fa48("535") ? "" : (stryCov_9fa48("535"), 'com');
    var O = stryMutAct_9fa48("536") ? "" : (stryCov_9fa48("536"), 'typ');
    var G = stryMutAct_9fa48("537") ? "" : (stryCov_9fa48("537"), 'lit');
    var L = stryMutAct_9fa48("538") ? "" : (stryCov_9fa48("538"), 'pun');
    var F = stryMutAct_9fa48("539") ? "" : (stryCov_9fa48("539"), 'pln');
    var m = stryMutAct_9fa48("540") ? "" : (stryCov_9fa48("540"), 'tag');
    var E = stryMutAct_9fa48("541") ? "" : (stryCov_9fa48("541"), 'dec');
    var J = stryMutAct_9fa48("542") ? "" : (stryCov_9fa48("542"), 'src');
    var P = stryMutAct_9fa48("543") ? "" : (stryCov_9fa48("543"), 'atn');
    var n = stryMutAct_9fa48("544") ? "" : (stryCov_9fa48("544"), 'atv');
    var N = stryMutAct_9fa48("545") ? "" : (stryCov_9fa48("545"), 'nocode');
    var M = stryMutAct_9fa48("546") ? "" : (stryCov_9fa48("546"), '(?:^^\\.?|[+-]|\\!|\\!=|\\!==|\\#|\\%|\\%=|&|&&|&&=|&=|\\(|\\*|\\*=|\\+=|\\,|\\-=|\\->|\\/|\\/=|:|::|\\;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\@|\\[|\\^|\\^=|\\^\\^|\\^\\^=|\\{|\\||\\|=|\\|\\||\\|\\|=|\\~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*');
    function k(Z) {
      if (stryMutAct_9fa48("547")) {
        {}
      } else {
        stryCov_9fa48("547");
        var ad = 0;
        var S = stryMutAct_9fa48("548") ? true : (stryCov_9fa48("548"), false);
        var ac = stryMutAct_9fa48("549") ? true : (stryCov_9fa48("549"), false);
        for (var V = 0, U = Z.length; stryMutAct_9fa48("552") ? V >= U : stryMutAct_9fa48("551") ? V <= U : stryMutAct_9fa48("550") ? false : (stryCov_9fa48("550", "551", "552"), V < U); stryMutAct_9fa48("553") ? --V : (stryCov_9fa48("553"), ++V)) {
          if (stryMutAct_9fa48("554")) {
            {}
          } else {
            stryCov_9fa48("554");
            var ae = Z[V];
            if (stryMutAct_9fa48("556") ? false : stryMutAct_9fa48("555") ? true : (stryCov_9fa48("555", "556"), ae.ignoreCase)) {
              if (stryMutAct_9fa48("557")) {
                {}
              } else {
                stryCov_9fa48("557");
                ac = stryMutAct_9fa48("558") ? false : (stryCov_9fa48("558"), true);
              }
            } else {
              if (stryMutAct_9fa48("559")) {
                {}
              } else {
                stryCov_9fa48("559");
                if (stryMutAct_9fa48("561") ? false : stryMutAct_9fa48("560") ? true : (stryCov_9fa48("560", "561"), (stryMutAct_9fa48("562") ? /[^a-z]/i : (stryCov_9fa48("562"), /[a-z]/i)).test(ae.source.replace(stryMutAct_9fa48("567") ? /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[ux]/gi : stryMutAct_9fa48("566") ? /\\u[0-9a-f]{4}|\\x[^0-9a-f]{2}|\\[^ux]/gi : stryMutAct_9fa48("565") ? /\\u[0-9a-f]{4}|\\x[0-9a-f]|\\[^ux]/gi : stryMutAct_9fa48("564") ? /\\u[^0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi : stryMutAct_9fa48("563") ? /\\u[0-9a-f]|\\x[0-9a-f]{2}|\\[^ux]/gi : (stryCov_9fa48("563", "564", "565", "566", "567"), /\\u[0-9a-f]{4}|\\x[0-9a-f]{2}|\\[^ux]/gi), stryMutAct_9fa48("568") ? "Stryker was here!" : (stryCov_9fa48("568"), ''))))) {
                  if (stryMutAct_9fa48("569")) {
                    {}
                  } else {
                    stryCov_9fa48("569");
                    S = stryMutAct_9fa48("570") ? false : (stryCov_9fa48("570"), true);
                    ac = stryMutAct_9fa48("571") ? true : (stryCov_9fa48("571"), false);
                    break;
                  }
                }
              }
            }
          }
        }
        var Y = stryMutAct_9fa48("572") ? {} : (stryCov_9fa48("572"), {
          b: 8,
          t: 9,
          n: 10,
          v: 11,
          f: 12,
          r: 13
        });
        function ab(ah) {
          if (stryMutAct_9fa48("573")) {
            {}
          } else {
            stryCov_9fa48("573");
            var ag = ah.charCodeAt(0);
            if (stryMutAct_9fa48("576") ? ag === 92 : stryMutAct_9fa48("575") ? false : stryMutAct_9fa48("574") ? true : (stryCov_9fa48("574", "575", "576"), ag !== 92)) {
              if (stryMutAct_9fa48("577")) {
                {}
              } else {
                stryCov_9fa48("577");
                return ag;
              }
            }
            var af = stryMutAct_9fa48("578") ? ah : (stryCov_9fa48("578"), ah.charAt(1));
            ag = Y[af];
            if (stryMutAct_9fa48("580") ? false : stryMutAct_9fa48("579") ? true : (stryCov_9fa48("579", "580"), ag)) {
              if (stryMutAct_9fa48("581")) {
                {}
              } else {
                stryCov_9fa48("581");
                return ag;
              }
            } else {
              if (stryMutAct_9fa48("582")) {
                {}
              } else {
                stryCov_9fa48("582");
                if (stryMutAct_9fa48("585") ? '0' <= af || af <= '7' : stryMutAct_9fa48("584") ? false : stryMutAct_9fa48("583") ? true : (stryCov_9fa48("583", "584", "585"), (stryMutAct_9fa48("588") ? '0' > af : stryMutAct_9fa48("587") ? '0' < af : stryMutAct_9fa48("586") ? true : (stryCov_9fa48("586", "587", "588"), (stryMutAct_9fa48("589") ? "" : (stryCov_9fa48("589"), '0')) <= af)) && (stryMutAct_9fa48("592") ? af > '7' : stryMutAct_9fa48("591") ? af < '7' : stryMutAct_9fa48("590") ? true : (stryCov_9fa48("590", "591", "592"), af <= (stryMutAct_9fa48("593") ? "" : (stryCov_9fa48("593"), '7')))))) {
                  if (stryMutAct_9fa48("594")) {
                    {}
                  } else {
                    stryCov_9fa48("594");
                    return parseInt(stryMutAct_9fa48("595") ? ah : (stryCov_9fa48("595"), ah.substring(1)), 8);
                  }
                } else {
                  if (stryMutAct_9fa48("596")) {
                    {}
                  } else {
                    stryCov_9fa48("596");
                    if (stryMutAct_9fa48("599") ? af === 'u' && af === 'x' : stryMutAct_9fa48("598") ? false : stryMutAct_9fa48("597") ? true : (stryCov_9fa48("597", "598", "599"), (stryMutAct_9fa48("601") ? af !== 'u' : stryMutAct_9fa48("600") ? false : (stryCov_9fa48("600", "601"), af === (stryMutAct_9fa48("602") ? "" : (stryCov_9fa48("602"), 'u')))) || (stryMutAct_9fa48("604") ? af !== 'x' : stryMutAct_9fa48("603") ? false : (stryCov_9fa48("603", "604"), af === (stryMutAct_9fa48("605") ? "" : (stryCov_9fa48("605"), 'x')))))) {
                      if (stryMutAct_9fa48("606")) {
                        {}
                      } else {
                        stryCov_9fa48("606");
                        return parseInt(stryMutAct_9fa48("607") ? ah : (stryCov_9fa48("607"), ah.substring(2)), 16);
                      }
                    } else {
                      if (stryMutAct_9fa48("608")) {
                        {}
                      } else {
                        stryCov_9fa48("608");
                        return ah.charCodeAt(1);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        function T(af) {
          if (stryMutAct_9fa48("609")) {
            {}
          } else {
            stryCov_9fa48("609");
            if (stryMutAct_9fa48("613") ? af >= 32 : stryMutAct_9fa48("612") ? af <= 32 : stryMutAct_9fa48("611") ? false : stryMutAct_9fa48("610") ? true : (stryCov_9fa48("610", "611", "612", "613"), af < 32)) {
              if (stryMutAct_9fa48("614")) {
                {}
              } else {
                stryCov_9fa48("614");
                return stryMutAct_9fa48("615") ? (af < 16 ? '\\x0' : '\\x') - af.toString(16) : (stryCov_9fa48("615"), ((stryMutAct_9fa48("619") ? af >= 16 : stryMutAct_9fa48("618") ? af <= 16 : stryMutAct_9fa48("617") ? false : stryMutAct_9fa48("616") ? true : (stryCov_9fa48("616", "617", "618", "619"), af < 16)) ? stryMutAct_9fa48("620") ? "" : (stryCov_9fa48("620"), '\\x0') : stryMutAct_9fa48("621") ? "" : (stryCov_9fa48("621"), '\\x')) + af.toString(16));
              }
            }
            var ag = String.fromCharCode(af);
            if (stryMutAct_9fa48("624") ? (ag === '\\' || ag === '-' || ag === '[') && ag === ']' : stryMutAct_9fa48("623") ? false : stryMutAct_9fa48("622") ? true : (stryCov_9fa48("622", "623", "624"), (stryMutAct_9fa48("626") ? (ag === '\\' || ag === '-') && ag === '[' : stryMutAct_9fa48("625") ? false : (stryCov_9fa48("625", "626"), (stryMutAct_9fa48("628") ? ag === '\\' && ag === '-' : stryMutAct_9fa48("627") ? false : (stryCov_9fa48("627", "628"), (stryMutAct_9fa48("630") ? ag !== '\\' : stryMutAct_9fa48("629") ? false : (stryCov_9fa48("629", "630"), ag === (stryMutAct_9fa48("631") ? "" : (stryCov_9fa48("631"), '\\')))) || (stryMutAct_9fa48("633") ? ag !== '-' : stryMutAct_9fa48("632") ? false : (stryCov_9fa48("632", "633"), ag === (stryMutAct_9fa48("634") ? "" : (stryCov_9fa48("634"), '-')))))) || (stryMutAct_9fa48("636") ? ag !== '[' : stryMutAct_9fa48("635") ? false : (stryCov_9fa48("635", "636"), ag === (stryMutAct_9fa48("637") ? "" : (stryCov_9fa48("637"), '[')))))) || (stryMutAct_9fa48("639") ? ag !== ']' : stryMutAct_9fa48("638") ? false : (stryCov_9fa48("638", "639"), ag === (stryMutAct_9fa48("640") ? "" : (stryCov_9fa48("640"), ']')))))) {
              if (stryMutAct_9fa48("641")) {
                {}
              } else {
                stryCov_9fa48("641");
                ag = (stryMutAct_9fa48("642") ? "" : (stryCov_9fa48("642"), '\\')) + ag;
              }
            }
            return ag;
          }
        }
        function X(am) {
          if (stryMutAct_9fa48("643")) {
            {}
          } else {
            stryCov_9fa48("643");
            var aq = stryMutAct_9fa48("644") ? am.match(new RegExp('\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]', 'g')) : (stryCov_9fa48("644"), am.substring(1, stryMutAct_9fa48("645") ? am.length + 1 : (stryCov_9fa48("645"), am.length - 1)).match(new RegExp(stryMutAct_9fa48("659") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[-\\\\]" : stryMutAct_9fa48("658") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\s]|-|[^-\\\\]" : stryMutAct_9fa48("657") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\S\\S]|-|[^-\\\\]" : stryMutAct_9fa48("656") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[^\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("655") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[^0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("654") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("653") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][^0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("652") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("651") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[^0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("650") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[^0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("649") ? "\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("648") ? "\\\\u[^0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("647") ? "\\\\u[0-9A-Fa-f]|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]" : stryMutAct_9fa48("646") ? "" : (stryCov_9fa48("646", "647", "648", "649", "650", "651", "652", "653", "654", "655", "656", "657", "658", "659"), '\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\[0-3][0-7]{0,2}|\\\\[0-7]{1,2}|\\\\[\\s\\S]|-|[^-\\\\]'), stryMutAct_9fa48("660") ? "" : (stryCov_9fa48("660"), 'g'))));
            var ak = stryMutAct_9fa48("661") ? ["Stryker was here"] : (stryCov_9fa48("661"), []);
            var af = stryMutAct_9fa48("662") ? ["Stryker was here"] : (stryCov_9fa48("662"), []);
            var ao = stryMutAct_9fa48("665") ? aq[0] !== '^' : stryMutAct_9fa48("664") ? false : stryMutAct_9fa48("663") ? true : (stryCov_9fa48("663", "664", "665"), aq[0] === (stryMutAct_9fa48("666") ? "" : (stryCov_9fa48("666"), '^')));
            for (var ar = ao ? 1 : 0, aj = aq.length; stryMutAct_9fa48("669") ? ar >= aj : stryMutAct_9fa48("668") ? ar <= aj : stryMutAct_9fa48("667") ? false : (stryCov_9fa48("667", "668", "669"), ar < aj); stryMutAct_9fa48("670") ? --ar : (stryCov_9fa48("670"), ++ar)) {
              if (stryMutAct_9fa48("671")) {
                {}
              } else {
                stryCov_9fa48("671");
                var ah = aq[ar];
                if (stryMutAct_9fa48("673") ? false : stryMutAct_9fa48("672") ? true : (stryCov_9fa48("672", "673"), (stryMutAct_9fa48("674") ? /\\[^bdsw]/i : (stryCov_9fa48("674"), /\\[bdsw]/i)).test(ah))) {
                  if (stryMutAct_9fa48("675")) {
                    {}
                  } else {
                    stryCov_9fa48("675");
                    ak.push(ah);
                  }
                } else {
                  if (stryMutAct_9fa48("676")) {
                    {}
                  } else {
                    stryCov_9fa48("676");
                    var ag = ab(ah);
                    var al;
                    if (stryMutAct_9fa48("679") ? ar + 2 < aj || '-' === aq[ar + 1] : stryMutAct_9fa48("678") ? false : stryMutAct_9fa48("677") ? true : (stryCov_9fa48("677", "678", "679"), (stryMutAct_9fa48("682") ? ar + 2 >= aj : stryMutAct_9fa48("681") ? ar + 2 <= aj : stryMutAct_9fa48("680") ? true : (stryCov_9fa48("680", "681", "682"), (stryMutAct_9fa48("683") ? ar - 2 : (stryCov_9fa48("683"), ar + 2)) < aj)) && (stryMutAct_9fa48("685") ? '-' !== aq[ar + 1] : stryMutAct_9fa48("684") ? true : (stryCov_9fa48("684", "685"), (stryMutAct_9fa48("686") ? "" : (stryCov_9fa48("686"), '-')) === aq[stryMutAct_9fa48("687") ? ar - 1 : (stryCov_9fa48("687"), ar + 1)])))) {
                      if (stryMutAct_9fa48("688")) {
                        {}
                      } else {
                        stryCov_9fa48("688");
                        al = ab(aq[stryMutAct_9fa48("689") ? ar - 2 : (stryCov_9fa48("689"), ar + 2)]);
                        stryMutAct_9fa48("690") ? ar -= 2 : (stryCov_9fa48("690"), ar += 2);
                      }
                    } else {
                      if (stryMutAct_9fa48("691")) {
                        {}
                      } else {
                        stryCov_9fa48("691");
                        al = ag;
                      }
                    }
                    af.push(stryMutAct_9fa48("692") ? [] : (stryCov_9fa48("692"), [ag, al]));
                    if (stryMutAct_9fa48("695") ? false : stryMutAct_9fa48("694") ? true : stryMutAct_9fa48("693") ? al < 65 || ag > 122 : (stryCov_9fa48("693", "694", "695"), !(stryMutAct_9fa48("698") ? al < 65 && ag > 122 : stryMutAct_9fa48("697") ? false : stryMutAct_9fa48("696") ? true : (stryCov_9fa48("696", "697", "698"), (stryMutAct_9fa48("701") ? al >= 65 : stryMutAct_9fa48("700") ? al <= 65 : stryMutAct_9fa48("699") ? false : (stryCov_9fa48("699", "700", "701"), al < 65)) || (stryMutAct_9fa48("704") ? ag <= 122 : stryMutAct_9fa48("703") ? ag >= 122 : stryMutAct_9fa48("702") ? false : (stryCov_9fa48("702", "703", "704"), ag > 122)))))) {
                      if (stryMutAct_9fa48("705")) {
                        {}
                      } else {
                        stryCov_9fa48("705");
                        if (stryMutAct_9fa48("708") ? false : stryMutAct_9fa48("707") ? true : stryMutAct_9fa48("706") ? al < 65 || ag > 90 : (stryCov_9fa48("706", "707", "708"), !(stryMutAct_9fa48("711") ? al < 65 && ag > 90 : stryMutAct_9fa48("710") ? false : stryMutAct_9fa48("709") ? true : (stryCov_9fa48("709", "710", "711"), (stryMutAct_9fa48("714") ? al >= 65 : stryMutAct_9fa48("713") ? al <= 65 : stryMutAct_9fa48("712") ? false : (stryCov_9fa48("712", "713", "714"), al < 65)) || (stryMutAct_9fa48("717") ? ag <= 90 : stryMutAct_9fa48("716") ? ag >= 90 : stryMutAct_9fa48("715") ? false : (stryCov_9fa48("715", "716", "717"), ag > 90)))))) {
                          if (stryMutAct_9fa48("718")) {
                            {}
                          } else {
                            stryCov_9fa48("718");
                            af.push(stryMutAct_9fa48("719") ? [] : (stryCov_9fa48("719"), [(stryMutAct_9fa48("720") ? Math.min(65, ag) : (stryCov_9fa48("720"), Math.max(65, ag))) | 32, (stryMutAct_9fa48("721") ? Math.max(al, 90) : (stryCov_9fa48("721"), Math.min(al, 90))) | 32]));
                          }
                        }
                        if (stryMutAct_9fa48("724") ? false : stryMutAct_9fa48("723") ? true : stryMutAct_9fa48("722") ? al < 97 || ag > 122 : (stryCov_9fa48("722", "723", "724"), !(stryMutAct_9fa48("727") ? al < 97 && ag > 122 : stryMutAct_9fa48("726") ? false : stryMutAct_9fa48("725") ? true : (stryCov_9fa48("725", "726", "727"), (stryMutAct_9fa48("730") ? al >= 97 : stryMutAct_9fa48("729") ? al <= 97 : stryMutAct_9fa48("728") ? false : (stryCov_9fa48("728", "729", "730"), al < 97)) || (stryMutAct_9fa48("733") ? ag <= 122 : stryMutAct_9fa48("732") ? ag >= 122 : stryMutAct_9fa48("731") ? false : (stryCov_9fa48("731", "732", "733"), ag > 122)))))) {
                          if (stryMutAct_9fa48("734")) {
                            {}
                          } else {
                            stryCov_9fa48("734");
                            af.push(stryMutAct_9fa48("735") ? [] : (stryCov_9fa48("735"), [(stryMutAct_9fa48("736") ? Math.min(97, ag) : (stryCov_9fa48("736"), Math.max(97, ag))) & (stryMutAct_9fa48("737") ? 32 : (stryCov_9fa48("737"), ~32)), (stryMutAct_9fa48("738") ? Math.max(al, 122) : (stryCov_9fa48("738"), Math.min(al, 122))) & (stryMutAct_9fa48("739") ? 32 : (stryCov_9fa48("739"), ~32))]));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            stryMutAct_9fa48("740") ? af : (stryCov_9fa48("740"), af.sort(function (av, au) {
              if (stryMutAct_9fa48("741")) {
                {}
              } else {
                stryCov_9fa48("741");
                return stryMutAct_9fa48("744") ? av[0] - au[0] && au[1] - av[1] : stryMutAct_9fa48("743") ? false : stryMutAct_9fa48("742") ? true : (stryCov_9fa48("742", "743", "744"), (stryMutAct_9fa48("745") ? av[0] + au[0] : (stryCov_9fa48("745"), av[0] - au[0])) || (stryMutAct_9fa48("746") ? au[1] + av[1] : (stryCov_9fa48("746"), au[1] - av[1])));
              }
            }));
            var ai = stryMutAct_9fa48("747") ? ["Stryker was here"] : (stryCov_9fa48("747"), []);
            var ap = stryMutAct_9fa48("748") ? [] : (stryCov_9fa48("748"), [NaN, NaN]);
            for (var ar = 0; stryMutAct_9fa48("751") ? ar >= af.length : stryMutAct_9fa48("750") ? ar <= af.length : stryMutAct_9fa48("749") ? false : (stryCov_9fa48("749", "750", "751"), ar < af.length); stryMutAct_9fa48("752") ? --ar : (stryCov_9fa48("752"), ++ar)) {
              if (stryMutAct_9fa48("753")) {
                {}
              } else {
                stryCov_9fa48("753");
                var at = af[ar];
                if (stryMutAct_9fa48("757") ? at[0] > ap[1] + 1 : stryMutAct_9fa48("756") ? at[0] < ap[1] + 1 : stryMutAct_9fa48("755") ? false : stryMutAct_9fa48("754") ? true : (stryCov_9fa48("754", "755", "756", "757"), at[0] <= (stryMutAct_9fa48("758") ? ap[1] - 1 : (stryCov_9fa48("758"), ap[1] + 1)))) {
                  if (stryMutAct_9fa48("759")) {
                    {}
                  } else {
                    stryCov_9fa48("759");
                    ap[1] = stryMutAct_9fa48("760") ? Math.min(ap[1], at[1]) : (stryCov_9fa48("760"), Math.max(ap[1], at[1]));
                  }
                } else {
                  if (stryMutAct_9fa48("761")) {
                    {}
                  } else {
                    stryCov_9fa48("761");
                    ai.push(ap = at);
                  }
                }
              }
            }
            var an = stryMutAct_9fa48("762") ? [] : (stryCov_9fa48("762"), [stryMutAct_9fa48("763") ? "" : (stryCov_9fa48("763"), '[')]);
            if (stryMutAct_9fa48("765") ? false : stryMutAct_9fa48("764") ? true : (stryCov_9fa48("764", "765"), ao)) {
              if (stryMutAct_9fa48("766")) {
                {}
              } else {
                stryCov_9fa48("766");
                an.push(stryMutAct_9fa48("767") ? "" : (stryCov_9fa48("767"), '^'));
              }
            }
            an.push.apply(an, ak);
            for (var ar = 0; stryMutAct_9fa48("770") ? ar >= ai.length : stryMutAct_9fa48("769") ? ar <= ai.length : stryMutAct_9fa48("768") ? false : (stryCov_9fa48("768", "769", "770"), ar < ai.length); stryMutAct_9fa48("771") ? --ar : (stryCov_9fa48("771"), ++ar)) {
              if (stryMutAct_9fa48("772")) {
                {}
              } else {
                stryCov_9fa48("772");
                var at = ai[ar];
                an.push(T(at[0]));
                if (stryMutAct_9fa48("776") ? at[1] <= at[0] : stryMutAct_9fa48("775") ? at[1] >= at[0] : stryMutAct_9fa48("774") ? false : stryMutAct_9fa48("773") ? true : (stryCov_9fa48("773", "774", "775", "776"), at[1] > at[0])) {
                  if (stryMutAct_9fa48("777")) {
                    {}
                  } else {
                    stryCov_9fa48("777");
                    if (stryMutAct_9fa48("781") ? at[1] + 1 <= at[0] : stryMutAct_9fa48("780") ? at[1] + 1 >= at[0] : stryMutAct_9fa48("779") ? false : stryMutAct_9fa48("778") ? true : (stryCov_9fa48("778", "779", "780", "781"), (stryMutAct_9fa48("782") ? at[1] - 1 : (stryCov_9fa48("782"), at[1] + 1)) > at[0])) {
                      if (stryMutAct_9fa48("783")) {
                        {}
                      } else {
                        stryCov_9fa48("783");
                        an.push(stryMutAct_9fa48("784") ? "" : (stryCov_9fa48("784"), '-'));
                      }
                    }
                    an.push(T(at[1]));
                  }
                }
              }
            }
            an.push(stryMutAct_9fa48("785") ? "" : (stryCov_9fa48("785"), ']'));
            return an.join(stryMutAct_9fa48("786") ? "Stryker was here!" : (stryCov_9fa48("786"), ''));
          }
        }
        function W(al) {
          if (stryMutAct_9fa48("787")) {
            {}
          } else {
            stryCov_9fa48("787");
            var aj = al.source.match(new RegExp(stryMutAct_9fa48("804") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("803") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^])" : stryMutAct_9fa48("802") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[^\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("801") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[^:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("800") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("799") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[^0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("798") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("797") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[^A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("796") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("795") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[^A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("794") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("793") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\s])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("792") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\S\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("791") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[^\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("790") ? "(?:\\[(?:[\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("789") ? "(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)" : stryMutAct_9fa48("788") ? "" : (stryCov_9fa48("788", "789", "790", "791", "792", "793", "794", "795", "796", "797", "798", "799", "800", "801", "802", "803", "804"), '(?:\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]|\\\\u[A-Fa-f0-9]{4}|\\\\x[A-Fa-f0-9]{2}|\\\\[0-9]+|\\\\[^ux0-9]|\\(\\?[:!=]|[\\(\\)\\^]|[^\\x5B\\x5C\\(\\)\\^]+)'), stryMutAct_9fa48("805") ? "" : (stryCov_9fa48("805"), 'g')));
            var ah = aj.length;
            var an = stryMutAct_9fa48("806") ? ["Stryker was here"] : (stryCov_9fa48("806"), []);
            for (var ak = 0, am = 0; stryMutAct_9fa48("809") ? ak >= ah : stryMutAct_9fa48("808") ? ak <= ah : stryMutAct_9fa48("807") ? false : (stryCov_9fa48("807", "808", "809"), ak < ah); stryMutAct_9fa48("810") ? --ak : (stryCov_9fa48("810"), ++ak)) {
              if (stryMutAct_9fa48("811")) {
                {}
              } else {
                stryCov_9fa48("811");
                var ag = aj[ak];
                if (stryMutAct_9fa48("814") ? ag !== '(' : stryMutAct_9fa48("813") ? false : stryMutAct_9fa48("812") ? true : (stryCov_9fa48("812", "813", "814"), ag === (stryMutAct_9fa48("815") ? "" : (stryCov_9fa48("815"), '(')))) {
                  if (stryMutAct_9fa48("816")) {
                    {}
                  } else {
                    stryCov_9fa48("816");
                    stryMutAct_9fa48("817") ? --am : (stryCov_9fa48("817"), ++am);
                  }
                } else {
                  if (stryMutAct_9fa48("818")) {
                    {}
                  } else {
                    stryCov_9fa48("818");
                    if (stryMutAct_9fa48("821") ? '\\' !== ag.charAt(0) : stryMutAct_9fa48("820") ? false : stryMutAct_9fa48("819") ? true : (stryCov_9fa48("819", "820", "821"), (stryMutAct_9fa48("822") ? "" : (stryCov_9fa48("822"), '\\')) === (stryMutAct_9fa48("823") ? ag : (stryCov_9fa48("823"), ag.charAt(0))))) {
                      if (stryMutAct_9fa48("824")) {
                        {}
                      } else {
                        stryCov_9fa48("824");
                        var af = stryMutAct_9fa48("825") ? -ag.substring(1) : (stryCov_9fa48("825"), +(stryMutAct_9fa48("826") ? ag : (stryCov_9fa48("826"), ag.substring(1))));
                        if (stryMutAct_9fa48("829") ? af || af <= am : stryMutAct_9fa48("828") ? false : stryMutAct_9fa48("827") ? true : (stryCov_9fa48("827", "828", "829"), af && (stryMutAct_9fa48("832") ? af > am : stryMutAct_9fa48("831") ? af < am : stryMutAct_9fa48("830") ? true : (stryCov_9fa48("830", "831", "832"), af <= am)))) {
                          if (stryMutAct_9fa48("833")) {
                            {}
                          } else {
                            stryCov_9fa48("833");
                            an[af] = stryMutAct_9fa48("834") ? +1 : (stryCov_9fa48("834"), -1);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            for (var ak = 1; stryMutAct_9fa48("837") ? ak >= an.length : stryMutAct_9fa48("836") ? ak <= an.length : stryMutAct_9fa48("835") ? false : (stryCov_9fa48("835", "836", "837"), ak < an.length); stryMutAct_9fa48("838") ? --ak : (stryCov_9fa48("838"), ++ak)) {
              if (stryMutAct_9fa48("839")) {
                {}
              } else {
                stryCov_9fa48("839");
                if (stryMutAct_9fa48("842") ? -1 !== an[ak] : stryMutAct_9fa48("841") ? false : stryMutAct_9fa48("840") ? true : (stryCov_9fa48("840", "841", "842"), (stryMutAct_9fa48("843") ? +1 : (stryCov_9fa48("843"), -1)) === an[ak])) {
                  if (stryMutAct_9fa48("844")) {
                    {}
                  } else {
                    stryCov_9fa48("844");
                    an[ak] = stryMutAct_9fa48("845") ? --ad : (stryCov_9fa48("845"), ++ad);
                  }
                }
              }
            }
            for (var ak = 0, am = 0; stryMutAct_9fa48("848") ? ak >= ah : stryMutAct_9fa48("847") ? ak <= ah : stryMutAct_9fa48("846") ? false : (stryCov_9fa48("846", "847", "848"), ak < ah); stryMutAct_9fa48("849") ? --ak : (stryCov_9fa48("849"), ++ak)) {
              if (stryMutAct_9fa48("850")) {
                {}
              } else {
                stryCov_9fa48("850");
                var ag = aj[ak];
                if (stryMutAct_9fa48("853") ? ag !== '(' : stryMutAct_9fa48("852") ? false : stryMutAct_9fa48("851") ? true : (stryCov_9fa48("851", "852", "853"), ag === (stryMutAct_9fa48("854") ? "" : (stryCov_9fa48("854"), '(')))) {
                  if (stryMutAct_9fa48("855")) {
                    {}
                  } else {
                    stryCov_9fa48("855");
                    stryMutAct_9fa48("856") ? --am : (stryCov_9fa48("856"), ++am);
                    if (stryMutAct_9fa48("859") ? an[am] !== undefined : stryMutAct_9fa48("858") ? false : stryMutAct_9fa48("857") ? true : (stryCov_9fa48("857", "858", "859"), an[am] === undefined)) {
                      if (stryMutAct_9fa48("860")) {
                        {}
                      } else {
                        stryCov_9fa48("860");
                        aj[ak] = stryMutAct_9fa48("861") ? "" : (stryCov_9fa48("861"), '(?:');
                      }
                    }
                  }
                } else {
                  if (stryMutAct_9fa48("862")) {
                    {}
                  } else {
                    stryCov_9fa48("862");
                    if (stryMutAct_9fa48("865") ? '\\' !== ag.charAt(0) : stryMutAct_9fa48("864") ? false : stryMutAct_9fa48("863") ? true : (stryCov_9fa48("863", "864", "865"), (stryMutAct_9fa48("866") ? "" : (stryCov_9fa48("866"), '\\')) === (stryMutAct_9fa48("867") ? ag : (stryCov_9fa48("867"), ag.charAt(0))))) {
                      if (stryMutAct_9fa48("868")) {
                        {}
                      } else {
                        stryCov_9fa48("868");
                        var af = stryMutAct_9fa48("869") ? -ag.substring(1) : (stryCov_9fa48("869"), +(stryMutAct_9fa48("870") ? ag : (stryCov_9fa48("870"), ag.substring(1))));
                        if (stryMutAct_9fa48("873") ? af || af <= am : stryMutAct_9fa48("872") ? false : stryMutAct_9fa48("871") ? true : (stryCov_9fa48("871", "872", "873"), af && (stryMutAct_9fa48("876") ? af > am : stryMutAct_9fa48("875") ? af < am : stryMutAct_9fa48("874") ? true : (stryCov_9fa48("874", "875", "876"), af <= am)))) {
                          if (stryMutAct_9fa48("877")) {
                            {}
                          } else {
                            stryCov_9fa48("877");
                            aj[ak] = (stryMutAct_9fa48("878") ? "" : (stryCov_9fa48("878"), '\\')) + an[am];
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            for (var ak = 0, am = 0; stryMutAct_9fa48("881") ? ak >= ah : stryMutAct_9fa48("880") ? ak <= ah : stryMutAct_9fa48("879") ? false : (stryCov_9fa48("879", "880", "881"), ak < ah); stryMutAct_9fa48("882") ? --ak : (stryCov_9fa48("882"), ++ak)) {
              if (stryMutAct_9fa48("883")) {
                {}
              } else {
                stryCov_9fa48("883");
                if (stryMutAct_9fa48("886") ? '^' === aj[ak] || '^' !== aj[ak + 1] : stryMutAct_9fa48("885") ? false : stryMutAct_9fa48("884") ? true : (stryCov_9fa48("884", "885", "886"), (stryMutAct_9fa48("888") ? '^' !== aj[ak] : stryMutAct_9fa48("887") ? true : (stryCov_9fa48("887", "888"), (stryMutAct_9fa48("889") ? "" : (stryCov_9fa48("889"), '^')) === aj[ak])) && (stryMutAct_9fa48("891") ? '^' === aj[ak + 1] : stryMutAct_9fa48("890") ? true : (stryCov_9fa48("890", "891"), (stryMutAct_9fa48("892") ? "" : (stryCov_9fa48("892"), '^')) !== aj[stryMutAct_9fa48("893") ? ak - 1 : (stryCov_9fa48("893"), ak + 1)])))) {
                  if (stryMutAct_9fa48("894")) {
                    {}
                  } else {
                    stryCov_9fa48("894");
                    aj[ak] = stryMutAct_9fa48("895") ? "Stryker was here!" : (stryCov_9fa48("895"), '');
                  }
                }
              }
            }
            if (stryMutAct_9fa48("898") ? al.ignoreCase || S : stryMutAct_9fa48("897") ? false : stryMutAct_9fa48("896") ? true : (stryCov_9fa48("896", "897", "898"), al.ignoreCase && S)) {
              if (stryMutAct_9fa48("899")) {
                {}
              } else {
                stryCov_9fa48("899");
                for (var ak = 0; stryMutAct_9fa48("902") ? ak >= ah : stryMutAct_9fa48("901") ? ak <= ah : stryMutAct_9fa48("900") ? false : (stryCov_9fa48("900", "901", "902"), ak < ah); stryMutAct_9fa48("903") ? --ak : (stryCov_9fa48("903"), ++ak)) {
                  if (stryMutAct_9fa48("904")) {
                    {}
                  } else {
                    stryCov_9fa48("904");
                    var ag = aj[ak];
                    var ai = stryMutAct_9fa48("905") ? ag : (stryCov_9fa48("905"), ag.charAt(0));
                    if (stryMutAct_9fa48("908") ? ag.length >= 2 || ai === '[' : stryMutAct_9fa48("907") ? false : stryMutAct_9fa48("906") ? true : (stryCov_9fa48("906", "907", "908"), (stryMutAct_9fa48("911") ? ag.length < 2 : stryMutAct_9fa48("910") ? ag.length > 2 : stryMutAct_9fa48("909") ? true : (stryCov_9fa48("909", "910", "911"), ag.length >= 2)) && (stryMutAct_9fa48("913") ? ai !== '[' : stryMutAct_9fa48("912") ? true : (stryCov_9fa48("912", "913"), ai === (stryMutAct_9fa48("914") ? "" : (stryCov_9fa48("914"), '[')))))) {
                      if (stryMutAct_9fa48("915")) {
                        {}
                      } else {
                        stryCov_9fa48("915");
                        aj[ak] = X(ag);
                      }
                    } else {
                      if (stryMutAct_9fa48("916")) {
                        {}
                      } else {
                        stryCov_9fa48("916");
                        if (stryMutAct_9fa48("919") ? ai === '\\' : stryMutAct_9fa48("918") ? false : stryMutAct_9fa48("917") ? true : (stryCov_9fa48("917", "918", "919"), ai !== (stryMutAct_9fa48("920") ? "" : (stryCov_9fa48("920"), '\\')))) {
                          if (stryMutAct_9fa48("921")) {
                            {}
                          } else {
                            stryCov_9fa48("921");
                            aj[ak] = ag.replace(stryMutAct_9fa48("922") ? /[^a-zA-Z]/g : (stryCov_9fa48("922"), /[a-zA-Z]/g), function (ao) {
                              if (stryMutAct_9fa48("923")) {
                                {}
                              } else {
                                stryCov_9fa48("923");
                                var ap = ao.charCodeAt(0);
                                return (stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), '[')) + String.fromCharCode(ap & (stryMutAct_9fa48("925") ? 32 : (stryCov_9fa48("925"), ~32)), ap | 32) + (stryMutAct_9fa48("926") ? "" : (stryCov_9fa48("926"), ']'));
                              }
                            });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            return aj.join(stryMutAct_9fa48("927") ? "Stryker was here!" : (stryCov_9fa48("927"), ''));
          }
        }
        var aa = stryMutAct_9fa48("928") ? ["Stryker was here"] : (stryCov_9fa48("928"), []);
        for (var V = 0, U = Z.length; stryMutAct_9fa48("931") ? V >= U : stryMutAct_9fa48("930") ? V <= U : stryMutAct_9fa48("929") ? false : (stryCov_9fa48("929", "930", "931"), V < U); stryMutAct_9fa48("932") ? --V : (stryCov_9fa48("932"), ++V)) {
          if (stryMutAct_9fa48("933")) {
            {}
          } else {
            stryCov_9fa48("933");
            var ae = Z[V];
            if (stryMutAct_9fa48("936") ? ae.global && ae.multiline : stryMutAct_9fa48("935") ? false : stryMutAct_9fa48("934") ? true : (stryCov_9fa48("934", "935", "936"), ae.global || ae.multiline)) {
              if (stryMutAct_9fa48("937")) {
                {}
              } else {
                stryCov_9fa48("937");
                throw new Error((stryMutAct_9fa48("938") ? "Stryker was here!" : (stryCov_9fa48("938"), '')) + ae);
              }
            }
            aa.push((stryMutAct_9fa48("939") ? "" : (stryCov_9fa48("939"), '(?:')) + W(ae) + (stryMutAct_9fa48("940") ? "" : (stryCov_9fa48("940"), ')')));
          }
        }
        return new RegExp(aa.join(stryMutAct_9fa48("941") ? "" : (stryCov_9fa48("941"), '|')), ac ? stryMutAct_9fa48("942") ? "" : (stryCov_9fa48("942"), 'gi') : stryMutAct_9fa48("943") ? "" : (stryCov_9fa48("943"), 'g'));
      }
    }
    function a(V) {
      if (stryMutAct_9fa48("944")) {
        {}
      } else {
        stryCov_9fa48("944");
        var U = stryMutAct_9fa48("948") ? /(?:^|\s)nocode(?:\S|$)/ : stryMutAct_9fa48("947") ? /(?:^|\s)nocode(?:\s)/ : stryMutAct_9fa48("946") ? /(?:^|\S)nocode(?:\s|$)/ : stryMutAct_9fa48("945") ? /(?:\s)nocode(?:\s|$)/ : (stryCov_9fa48("945", "946", "947", "948"), /(?:^|\s)nocode(?:\s|$)/);
        var X = stryMutAct_9fa48("949") ? ["Stryker was here"] : (stryCov_9fa48("949"), []);
        var T = 0;
        var Z = stryMutAct_9fa48("950") ? ["Stryker was here"] : (stryCov_9fa48("950"), []);
        var W = 0;
        var S;
        if (stryMutAct_9fa48("952") ? false : stryMutAct_9fa48("951") ? true : (stryCov_9fa48("951", "952"), V.currentStyle)) {
          if (stryMutAct_9fa48("953")) {
            {}
          } else {
            stryCov_9fa48("953");
            S = V.currentStyle.whiteSpace;
          }
        } else {
          if (stryMutAct_9fa48("954")) {
            {}
          } else {
            stryCov_9fa48("954");
            if (stryMutAct_9fa48("956") ? false : stryMutAct_9fa48("955") ? true : (stryCov_9fa48("955", "956"), window.getComputedStyle)) {
              if (stryMutAct_9fa48("957")) {
                {}
              } else {
                stryCov_9fa48("957");
                S = document.defaultView.getComputedStyle(V, null).getPropertyValue(stryMutAct_9fa48("958") ? "" : (stryCov_9fa48("958"), 'white-space'));
              }
            }
          }
        }
        var Y = stryMutAct_9fa48("961") ? S || 'pre' === S.substring(0, 3) : stryMutAct_9fa48("960") ? false : stryMutAct_9fa48("959") ? true : (stryCov_9fa48("959", "960", "961"), S && (stryMutAct_9fa48("963") ? 'pre' !== S.substring(0, 3) : stryMutAct_9fa48("962") ? true : (stryCov_9fa48("962", "963"), (stryMutAct_9fa48("964") ? "" : (stryCov_9fa48("964"), 'pre')) === (stryMutAct_9fa48("965") ? S : (stryCov_9fa48("965"), S.substring(0, 3))))));
        function aa(ab) {
          if (stryMutAct_9fa48("966")) {
            {}
          } else {
            stryCov_9fa48("966");
            switch (ab.nodeType) {
              case 1:
                if (stryMutAct_9fa48("967")) {} else {
                  stryCov_9fa48("967");
                  if (stryMutAct_9fa48("969") ? false : stryMutAct_9fa48("968") ? true : (stryCov_9fa48("968", "969"), U.test(ab.className))) {
                    if (stryMutAct_9fa48("970")) {
                      {}
                    } else {
                      stryCov_9fa48("970");
                      return;
                    }
                  }
                  for (var ae = ab.firstChild; stryMutAct_9fa48("971") ? false : (stryCov_9fa48("971"), ae); ae = ae.nextSibling) {
                    if (stryMutAct_9fa48("972")) {
                      {}
                    } else {
                      stryCov_9fa48("972");
                      aa(ae);
                    }
                  }
                  var ad = ab.nodeName;
                  if (stryMutAct_9fa48("975") ? 'BR' === ad && 'LI' === ad : stryMutAct_9fa48("974") ? false : stryMutAct_9fa48("973") ? true : (stryCov_9fa48("973", "974", "975"), (stryMutAct_9fa48("977") ? 'BR' !== ad : stryMutAct_9fa48("976") ? false : (stryCov_9fa48("976", "977"), (stryMutAct_9fa48("978") ? "" : (stryCov_9fa48("978"), 'BR')) === ad)) || (stryMutAct_9fa48("980") ? 'LI' !== ad : stryMutAct_9fa48("979") ? false : (stryCov_9fa48("979", "980"), (stryMutAct_9fa48("981") ? "" : (stryCov_9fa48("981"), 'LI')) === ad)))) {
                    if (stryMutAct_9fa48("982")) {
                      {}
                    } else {
                      stryCov_9fa48("982");
                      X[W] = stryMutAct_9fa48("983") ? "" : (stryCov_9fa48("983"), '\n');
                      Z[W << 1] = stryMutAct_9fa48("984") ? T-- : (stryCov_9fa48("984"), T++);
                      Z[(stryMutAct_9fa48("985") ? W-- : (stryCov_9fa48("985"), W++)) << 1 | 1] = ab;
                    }
                  }
                  break;
                }
              case 3:
              case 4:
                if (stryMutAct_9fa48("986")) {} else {
                  stryCov_9fa48("986");
                  var ac = ab.nodeValue;
                  if (stryMutAct_9fa48("988") ? false : stryMutAct_9fa48("987") ? true : (stryCov_9fa48("987", "988"), ac.length)) {
                    if (stryMutAct_9fa48("989")) {
                      {}
                    } else {
                      stryCov_9fa48("989");
                      if (stryMutAct_9fa48("992") ? false : stryMutAct_9fa48("991") ? true : stryMutAct_9fa48("990") ? Y : (stryCov_9fa48("990", "991", "992"), !Y)) {
                        if (stryMutAct_9fa48("993")) {
                          {}
                        } else {
                          stryCov_9fa48("993");
                          ac = ac.replace(stryMutAct_9fa48("995") ? /[^ \t\r\n]+/g : stryMutAct_9fa48("994") ? /[ \t\r\n]/g : (stryCov_9fa48("994", "995"), /[ \t\r\n]+/g), stryMutAct_9fa48("996") ? "" : (stryCov_9fa48("996"), ' '));
                        }
                      } else {
                        if (stryMutAct_9fa48("997")) {
                          {}
                        } else {
                          stryCov_9fa48("997");
                          ac = ac.replace(stryMutAct_9fa48("998") ? /\r\n/g : (stryCov_9fa48("998"), /\r\n?/g), stryMutAct_9fa48("999") ? "" : (stryCov_9fa48("999"), '\n'));
                        }
                      }
                      X[W] = ac;
                      Z[W << 1] = T;
                      stryMutAct_9fa48("1000") ? T -= ac.length : (stryCov_9fa48("1000"), T += ac.length);
                      Z[(stryMutAct_9fa48("1001") ? W-- : (stryCov_9fa48("1001"), W++)) << 1 | 1] = ab;
                    }
                  }
                  break;
                }
            }
          }
        }
        aa(V);
        return stryMutAct_9fa48("1002") ? {} : (stryCov_9fa48("1002"), {
          sourceCode: X.join(stryMutAct_9fa48("1003") ? "Stryker was here!" : (stryCov_9fa48("1003"), '')).replace(stryMutAct_9fa48("1004") ? /\n/ : (stryCov_9fa48("1004"), /\n$/), stryMutAct_9fa48("1005") ? "Stryker was here!" : (stryCov_9fa48("1005"), '')),
          spans: Z
        });
      }
    }
    function B(S, U, W, T) {
      if (stryMutAct_9fa48("1006")) {
        {}
      } else {
        stryCov_9fa48("1006");
        if (stryMutAct_9fa48("1009") ? false : stryMutAct_9fa48("1008") ? true : stryMutAct_9fa48("1007") ? U : (stryCov_9fa48("1007", "1008", "1009"), !U)) {
          if (stryMutAct_9fa48("1010")) {
            {}
          } else {
            stryCov_9fa48("1010");
            return;
          }
        }
        var V = stryMutAct_9fa48("1011") ? {} : (stryCov_9fa48("1011"), {
          sourceCode: U,
          basePos: S
        });
        W(V);
        T.push.apply(T, V.decorations);
      }
    }
    var v = stryMutAct_9fa48("1012") ? /\s/ : (stryCov_9fa48("1012"), /\S/);
    function o(S) {
      if (stryMutAct_9fa48("1013")) {
        {}
      } else {
        stryCov_9fa48("1013");
        var V = undefined;
        for (var U = S.firstChild; stryMutAct_9fa48("1014") ? false : (stryCov_9fa48("1014"), U); U = U.nextSibling) {
          if (stryMutAct_9fa48("1015")) {
            {}
          } else {
            stryCov_9fa48("1015");
            var T = U.nodeType;
            V = (stryMutAct_9fa48("1018") ? T !== 1 : stryMutAct_9fa48("1017") ? false : stryMutAct_9fa48("1016") ? true : (stryCov_9fa48("1016", "1017", "1018"), T === 1)) ? V ? S : U : (stryMutAct_9fa48("1021") ? T !== 3 : stryMutAct_9fa48("1020") ? false : stryMutAct_9fa48("1019") ? true : (stryCov_9fa48("1019", "1020", "1021"), T === 3)) ? v.test(U.nodeValue) ? S : V : V;
          }
        }
        return (stryMutAct_9fa48("1024") ? V !== S : stryMutAct_9fa48("1023") ? false : stryMutAct_9fa48("1022") ? true : (stryCov_9fa48("1022", "1023", "1024"), V === S)) ? undefined : V;
      }
    }
    function g(U, T) {
      if (stryMutAct_9fa48("1025")) {
        {}
      } else {
        stryCov_9fa48("1025");
        var S = {};
        var V;
        (function () {
          if (stryMutAct_9fa48("1026")) {
            {}
          } else {
            stryCov_9fa48("1026");
            var ad = U.concat(T);
            var ah = stryMutAct_9fa48("1027") ? ["Stryker was here"] : (stryCov_9fa48("1027"), []);
            var ag = {};
            for (var ab = 0, Z = ad.length; stryMutAct_9fa48("1030") ? ab >= Z : stryMutAct_9fa48("1029") ? ab <= Z : stryMutAct_9fa48("1028") ? false : (stryCov_9fa48("1028", "1029", "1030"), ab < Z); stryMutAct_9fa48("1031") ? --ab : (stryCov_9fa48("1031"), ++ab)) {
              if (stryMutAct_9fa48("1032")) {
                {}
              } else {
                stryCov_9fa48("1032");
                var Y = ad[ab];
                var ac = Y[3];
                if (stryMutAct_9fa48("1034") ? false : stryMutAct_9fa48("1033") ? true : (stryCov_9fa48("1033", "1034"), ac)) {
                  if (stryMutAct_9fa48("1035")) {
                    {}
                  } else {
                    stryCov_9fa48("1035");
                    for (var ae = ac.length; stryMutAct_9fa48("1038") ? --ae < 0 : stryMutAct_9fa48("1037") ? --ae > 0 : stryMutAct_9fa48("1036") ? false : (stryCov_9fa48("1036", "1037", "1038"), (stryMutAct_9fa48("1039") ? ++ae : (stryCov_9fa48("1039"), --ae)) >= 0);) {
                      if (stryMutAct_9fa48("1040")) {
                        {}
                      } else {
                        stryCov_9fa48("1040");
                        S[stryMutAct_9fa48("1041") ? ac : (stryCov_9fa48("1041"), ac.charAt(ae))] = Y;
                      }
                    }
                  }
                }
                var af = Y[1];
                var aa = (stryMutAct_9fa48("1042") ? "Stryker was here!" : (stryCov_9fa48("1042"), '')) + af;
                if (stryMutAct_9fa48("1045") ? false : stryMutAct_9fa48("1044") ? true : stryMutAct_9fa48("1043") ? ag.hasOwnProperty(aa) : (stryCov_9fa48("1043", "1044", "1045"), !ag.hasOwnProperty(aa))) {
                  if (stryMutAct_9fa48("1046")) {
                    {}
                  } else {
                    stryCov_9fa48("1046");
                    ah.push(af);
                    ag[aa] = null;
                  }
                }
              }
            }
            ah.push(stryMutAct_9fa48("1047") ? /[^\0-\uffff]/ : (stryCov_9fa48("1047"), /[\0-\uffff]/));
            V = k(ah);
          }
        })();
        var X = T.length;
        var W = function (ah) {
          if (stryMutAct_9fa48("1048")) {
            {}
          } else {
            stryCov_9fa48("1048");
            var Z = ah.sourceCode,
              Y = ah.basePos;
            var ad = stryMutAct_9fa48("1049") ? [] : (stryCov_9fa48("1049"), [Y, F]);
            var af = 0;
            var an = stryMutAct_9fa48("1052") ? Z.match(V) && [] : stryMutAct_9fa48("1051") ? false : stryMutAct_9fa48("1050") ? true : (stryCov_9fa48("1050", "1051", "1052"), Z.match(V) || (stryMutAct_9fa48("1053") ? ["Stryker was here"] : (stryCov_9fa48("1053"), [])));
            var aj = {};
            for (var ae = 0, aq = an.length; stryMutAct_9fa48("1056") ? ae >= aq : stryMutAct_9fa48("1055") ? ae <= aq : stryMutAct_9fa48("1054") ? false : (stryCov_9fa48("1054", "1055", "1056"), ae < aq); stryMutAct_9fa48("1057") ? --ae : (stryCov_9fa48("1057"), ++ae)) {
              if (stryMutAct_9fa48("1058")) {
                {}
              } else {
                stryCov_9fa48("1058");
                var ag = an[ae];
                var ap = aj[ag];
                var ai = void 0;
                var am;
                if (stryMutAct_9fa48("1061") ? typeof ap !== 'string' : stryMutAct_9fa48("1060") ? false : stryMutAct_9fa48("1059") ? true : (stryCov_9fa48("1059", "1060", "1061"), typeof ap === (stryMutAct_9fa48("1062") ? "" : (stryCov_9fa48("1062"), 'string')))) {
                  if (stryMutAct_9fa48("1063")) {
                    {}
                  } else {
                    stryCov_9fa48("1063");
                    am = stryMutAct_9fa48("1064") ? true : (stryCov_9fa48("1064"), false);
                  }
                } else {
                  if (stryMutAct_9fa48("1065")) {
                    {}
                  } else {
                    stryCov_9fa48("1065");
                    var aa = S[stryMutAct_9fa48("1066") ? ag : (stryCov_9fa48("1066"), ag.charAt(0))];
                    if (stryMutAct_9fa48("1068") ? false : stryMutAct_9fa48("1067") ? true : (stryCov_9fa48("1067", "1068"), aa)) {
                      if (stryMutAct_9fa48("1069")) {
                        {}
                      } else {
                        stryCov_9fa48("1069");
                        ai = ag.match(aa[1]);
                        ap = aa[0];
                      }
                    } else {
                      if (stryMutAct_9fa48("1070")) {
                        {}
                      } else {
                        stryCov_9fa48("1070");
                        for (var ao = 0; stryMutAct_9fa48("1073") ? ao >= X : stryMutAct_9fa48("1072") ? ao <= X : stryMutAct_9fa48("1071") ? false : (stryCov_9fa48("1071", "1072", "1073"), ao < X); stryMutAct_9fa48("1074") ? --ao : (stryCov_9fa48("1074"), ++ao)) {
                          if (stryMutAct_9fa48("1075")) {
                            {}
                          } else {
                            stryCov_9fa48("1075");
                            aa = T[ao];
                            ai = ag.match(aa[1]);
                            if (stryMutAct_9fa48("1077") ? false : stryMutAct_9fa48("1076") ? true : (stryCov_9fa48("1076", "1077"), ai)) {
                              if (stryMutAct_9fa48("1078")) {
                                {}
                              } else {
                                stryCov_9fa48("1078");
                                ap = aa[0];
                                break;
                              }
                            }
                          }
                        }
                        if (stryMutAct_9fa48("1081") ? false : stryMutAct_9fa48("1080") ? true : stryMutAct_9fa48("1079") ? ai : (stryCov_9fa48("1079", "1080", "1081"), !ai)) {
                          if (stryMutAct_9fa48("1082")) {
                            {}
                          } else {
                            stryCov_9fa48("1082");
                            ap = F;
                          }
                        }
                      }
                    }
                    am = stryMutAct_9fa48("1085") ? ap.length >= 5 || 'lang-' === ap.substring(0, 5) : stryMutAct_9fa48("1084") ? false : stryMutAct_9fa48("1083") ? true : (stryCov_9fa48("1083", "1084", "1085"), (stryMutAct_9fa48("1088") ? ap.length < 5 : stryMutAct_9fa48("1087") ? ap.length > 5 : stryMutAct_9fa48("1086") ? true : (stryCov_9fa48("1086", "1087", "1088"), ap.length >= 5)) && (stryMutAct_9fa48("1090") ? 'lang-' !== ap.substring(0, 5) : stryMutAct_9fa48("1089") ? true : (stryCov_9fa48("1089", "1090"), (stryMutAct_9fa48("1091") ? "" : (stryCov_9fa48("1091"), 'lang-')) === (stryMutAct_9fa48("1092") ? ap : (stryCov_9fa48("1092"), ap.substring(0, 5))))));
                    if (stryMutAct_9fa48("1095") ? am || !(ai && typeof ai[1] === 'string') : stryMutAct_9fa48("1094") ? false : stryMutAct_9fa48("1093") ? true : (stryCov_9fa48("1093", "1094", "1095"), am && (stryMutAct_9fa48("1096") ? ai && typeof ai[1] === 'string' : (stryCov_9fa48("1096"), !(stryMutAct_9fa48("1099") ? ai || typeof ai[1] === 'string' : stryMutAct_9fa48("1098") ? false : stryMutAct_9fa48("1097") ? true : (stryCov_9fa48("1097", "1098", "1099"), ai && (stryMutAct_9fa48("1101") ? typeof ai[1] !== 'string' : stryMutAct_9fa48("1100") ? true : (stryCov_9fa48("1100", "1101"), typeof ai[1] === (stryMutAct_9fa48("1102") ? "" : (stryCov_9fa48("1102"), 'string')))))))))) {
                      if (stryMutAct_9fa48("1103")) {
                        {}
                      } else {
                        stryCov_9fa48("1103");
                        am = stryMutAct_9fa48("1104") ? true : (stryCov_9fa48("1104"), false);
                        ap = J;
                      }
                    }
                    if (stryMutAct_9fa48("1107") ? false : stryMutAct_9fa48("1106") ? true : stryMutAct_9fa48("1105") ? am : (stryCov_9fa48("1105", "1106", "1107"), !am)) {
                      if (stryMutAct_9fa48("1108")) {
                        {}
                      } else {
                        stryCov_9fa48("1108");
                        aj[ag] = ap;
                      }
                    }
                  }
                }
                var ab = af;
                stryMutAct_9fa48("1109") ? af -= ag.length : (stryCov_9fa48("1109"), af += ag.length);
                if (stryMutAct_9fa48("1112") ? false : stryMutAct_9fa48("1111") ? true : stryMutAct_9fa48("1110") ? am : (stryCov_9fa48("1110", "1111", "1112"), !am)) {
                  if (stryMutAct_9fa48("1113")) {
                    {}
                  } else {
                    stryCov_9fa48("1113");
                    ad.push(stryMutAct_9fa48("1114") ? Y - ab : (stryCov_9fa48("1114"), Y + ab), ap);
                  }
                } else {
                  if (stryMutAct_9fa48("1115")) {
                    {}
                  } else {
                    stryCov_9fa48("1115");
                    var al = ai[1];
                    var ak = ag.indexOf(al);
                    var ac = stryMutAct_9fa48("1116") ? ak - al.length : (stryCov_9fa48("1116"), ak + al.length);
                    if (stryMutAct_9fa48("1118") ? false : stryMutAct_9fa48("1117") ? true : (stryCov_9fa48("1117", "1118"), ai[2])) {
                      if (stryMutAct_9fa48("1119")) {
                        {}
                      } else {
                        stryCov_9fa48("1119");
                        ac = stryMutAct_9fa48("1120") ? ag.length + ai[2].length : (stryCov_9fa48("1120"), ag.length - ai[2].length);
                        ak = stryMutAct_9fa48("1121") ? ac + al.length : (stryCov_9fa48("1121"), ac - al.length);
                      }
                    }
                    var ar = stryMutAct_9fa48("1122") ? ap : (stryCov_9fa48("1122"), ap.substring(5));
                    B(stryMutAct_9fa48("1123") ? Y - ab : (stryCov_9fa48("1123"), Y + ab), stryMutAct_9fa48("1124") ? ag : (stryCov_9fa48("1124"), ag.substring(0, ak)), W, ad);
                    B(stryMutAct_9fa48("1125") ? Y + ab - ak : (stryCov_9fa48("1125"), (stryMutAct_9fa48("1126") ? Y - ab : (stryCov_9fa48("1126"), Y + ab)) + ak), al, q(ar, al), ad);
                    B(stryMutAct_9fa48("1127") ? Y + ab - ac : (stryCov_9fa48("1127"), (stryMutAct_9fa48("1128") ? Y - ab : (stryCov_9fa48("1128"), Y + ab)) + ac), stryMutAct_9fa48("1129") ? ag : (stryCov_9fa48("1129"), ag.substring(ac)), W, ad);
                  }
                }
              }
            }
            ah.decorations = ad;
          }
        };
        return W;
      }
    }
    function i(T) {
      if (stryMutAct_9fa48("1130")) {
        {}
      } else {
        stryCov_9fa48("1130");
        var W = stryMutAct_9fa48("1131") ? ["Stryker was here"] : (stryCov_9fa48("1131"), []),
          S = stryMutAct_9fa48("1132") ? ["Stryker was here"] : (stryCov_9fa48("1132"), []);
        if (stryMutAct_9fa48("1134") ? false : stryMutAct_9fa48("1133") ? true : (stryCov_9fa48("1133", "1134"), T.tripleQuotedStrings)) {
          if (stryMutAct_9fa48("1135")) {
            {}
          } else {
            stryCov_9fa48("1135");
            W.push(stryMutAct_9fa48("1136") ? [] : (stryCov_9fa48("1136"), [C, stryMutAct_9fa48("1167") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"))/ : stryMutAct_9fa48("1166") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\s])*(?:\"|$))/ : stryMutAct_9fa48("1165") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\S\S])*(?:\"|$))/ : stryMutAct_9fa48("1164") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[^\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1163") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1162") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])(?:\"|$))/ : stryMutAct_9fa48("1161") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\')|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1160") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\s])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1159") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\S\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1158") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[^\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1157") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1156") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1155") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\")|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1154") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1153") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?![^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1152") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1151") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\s]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1150") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\S\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1149") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[^\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1148") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1147") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1146") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\')|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1145") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1144") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?![^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1143") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1142") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\s]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1141") ? /^(?:\'\'\'(?:[^\'\\]|\\[\S\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1140") ? /^(?:\'\'\'(?:[^\'\\]|\\[^\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1139") ? /^(?:\'\'\'(?:[\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1138") ? /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : stryMutAct_9fa48("1137") ? /(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/ : (stryCov_9fa48("1137", "1138", "1139", "1140", "1141", "1142", "1143", "1144", "1145", "1146", "1147", "1148", "1149", "1150", "1151", "1152", "1153", "1154", "1155", "1156", "1157", "1158", "1159", "1160", "1161", "1162", "1163", "1164", "1165", "1166", "1167"), /^(?:\'\'\'(?:[^\'\\]|\\[\s\S]|\'{1,2}(?=[^\']))*(?:\'\'\'|$)|\"\"\"(?:[^\"\\]|\\[\s\S]|\"{1,2}(?=[^\"]))*(?:\"\"\"|$)|\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$))/), null, stryMutAct_9fa48("1168") ? "" : (stryCov_9fa48("1168"), '\'"')]));
          }
        } else {
          if (stryMutAct_9fa48("1169")) {
            {}
          } else {
            stryCov_9fa48("1169");
            if (stryMutAct_9fa48("1171") ? false : stryMutAct_9fa48("1170") ? true : (stryCov_9fa48("1170", "1171"), T.multiLineStrings)) {
              if (stryMutAct_9fa48("1172")) {
                {}
              } else {
                stryCov_9fa48("1172");
                W.push(stryMutAct_9fa48("1173") ? [] : (stryCov_9fa48("1173"), [C, stryMutAct_9fa48("1192") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`))/ : stryMutAct_9fa48("1191") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\s])*(?:\`|$))/ : stryMutAct_9fa48("1190") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\S\S])*(?:\`|$))/ : stryMutAct_9fa48("1189") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[^\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1188") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1187") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])(?:\`|$))/ : stryMutAct_9fa48("1186") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\")|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1185") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\s])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1184") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\S\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1183") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[^\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1182") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1181") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1180") ? /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\')|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1179") ? /^(?:\'(?:[^\\\']|\\[\s\s])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1178") ? /^(?:\'(?:[^\\\']|\\[\S\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1177") ? /^(?:\'(?:[^\\\']|\\[^\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1176") ? /^(?:\'(?:[\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1175") ? /^(?:\'(?:[^\\\']|\\[\s\S])(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : stryMutAct_9fa48("1174") ? /(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/ : (stryCov_9fa48("1174", "1175", "1176", "1177", "1178", "1179", "1180", "1181", "1182", "1183", "1184", "1185", "1186", "1187", "1188", "1189", "1190", "1191", "1192"), /^(?:\'(?:[^\\\']|\\[\s\S])*(?:\'|$)|\"(?:[^\\\"]|\\[\s\S])*(?:\"|$)|\`(?:[^\\\`]|\\[\s\S])*(?:\`|$))/), null, stryMutAct_9fa48("1193") ? "" : (stryCov_9fa48("1193"), '\'"`')]));
              }
            } else {
              if (stryMutAct_9fa48("1194")) {
                {}
              } else {
                stryCov_9fa48("1194");
                W.push(stryMutAct_9fa48("1195") ? [] : (stryCov_9fa48("1195"), [C, stryMutAct_9fa48("1202") ? /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"))/ : stryMutAct_9fa48("1201") ? /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[\\\"\r\n]|\\.)*(?:\"|$))/ : stryMutAct_9fa48("1200") ? /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)(?:\"|$))/ : stryMutAct_9fa48("1199") ? /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\')|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/ : stryMutAct_9fa48("1198") ? /^(?:\'(?:[\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/ : stryMutAct_9fa48("1197") ? /^(?:\'(?:[^\\\'\r\n]|\\.)(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/ : stryMutAct_9fa48("1196") ? /(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/ : (stryCov_9fa48("1196", "1197", "1198", "1199", "1200", "1201", "1202"), /^(?:\'(?:[^\\\'\r\n]|\\.)*(?:\'|$)|\"(?:[^\\\"\r\n]|\\.)*(?:\"|$))/), null, stryMutAct_9fa48("1203") ? "" : (stryCov_9fa48("1203"), '"\'')]));
              }
            }
          }
        }
        if (stryMutAct_9fa48("1205") ? false : stryMutAct_9fa48("1204") ? true : (stryCov_9fa48("1204", "1205"), T.verbatimStrings)) {
          if (stryMutAct_9fa48("1206")) {
            {}
          } else {
            stryCov_9fa48("1206");
            S.push(stryMutAct_9fa48("1207") ? [] : (stryCov_9fa48("1207"), [C, stryMutAct_9fa48("1211") ? /^@\"(?:[^\"]|\"\")*(?:\")/ : stryMutAct_9fa48("1210") ? /^@\"(?:[\"]|\"\")*(?:\"|$)/ : stryMutAct_9fa48("1209") ? /^@\"(?:[^\"]|\"\")(?:\"|$)/ : stryMutAct_9fa48("1208") ? /@\"(?:[^\"]|\"\")*(?:\"|$)/ : (stryCov_9fa48("1208", "1209", "1210", "1211"), /^@\"(?:[^\"]|\"\")*(?:\"|$)/), null]));
          }
        }
        var Y = T.hashComments;
        if (stryMutAct_9fa48("1213") ? false : stryMutAct_9fa48("1212") ? true : (stryCov_9fa48("1212", "1213"), Y)) {
          if (stryMutAct_9fa48("1214")) {
            {}
          } else {
            stryCov_9fa48("1214");
            if (stryMutAct_9fa48("1216") ? false : stryMutAct_9fa48("1215") ? true : (stryCov_9fa48("1215", "1216"), T.cStyleComments)) {
              if (stryMutAct_9fa48("1217")) {
                {}
              } else {
                stryCov_9fa48("1217");
                if (stryMutAct_9fa48("1221") ? Y <= 1 : stryMutAct_9fa48("1220") ? Y >= 1 : stryMutAct_9fa48("1219") ? false : stryMutAct_9fa48("1218") ? true : (stryCov_9fa48("1218", "1219", "1220", "1221"), Y > 1)) {
                  if (stryMutAct_9fa48("1222")) {
                    {}
                  } else {
                    stryCov_9fa48("1222");
                    W.push(stryMutAct_9fa48("1223") ? [] : (stryCov_9fa48("1223"), [j, stryMutAct_9fa48("1229") ? /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.)/ : stryMutAct_9fa48("1228") ? /^#(?:##(?:[^#]|#(?!##))*(?:###)|.*)/ : stryMutAct_9fa48("1227") ? /^#(?:##(?:[^#]|#(?=##))*(?:###|$)|.*)/ : stryMutAct_9fa48("1226") ? /^#(?:##(?:[#]|#(?!##))*(?:###|$)|.*)/ : stryMutAct_9fa48("1225") ? /^#(?:##(?:[^#]|#(?!##))(?:###|$)|.*)/ : stryMutAct_9fa48("1224") ? /#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/ : (stryCov_9fa48("1224", "1225", "1226", "1227", "1228", "1229"), /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/), null, stryMutAct_9fa48("1230") ? "" : (stryCov_9fa48("1230"), '#')]));
                  }
                } else {
                  if (stryMutAct_9fa48("1231")) {
                    {}
                  } else {
                    stryCov_9fa48("1231");
                    W.push(stryMutAct_9fa48("1232") ? [] : (stryCov_9fa48("1232"), [j, stryMutAct_9fa48("1235") ? /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[\r\n]*)/ : stryMutAct_9fa48("1234") ? /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n])/ : stryMutAct_9fa48("1233") ? /#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/ : (stryCov_9fa48("1233", "1234", "1235"), /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\r\n]*)/), null, stryMutAct_9fa48("1236") ? "" : (stryCov_9fa48("1236"), '#')]));
                  }
                }
                S.push(stryMutAct_9fa48("1237") ? [] : (stryCov_9fa48("1237"), [C, stryMutAct_9fa48("1254") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\W*)>/ : stryMutAct_9fa48("1253") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w)>/ : stryMutAct_9fa48("1252") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[^a-z]\w*)>/ : stryMutAct_9fa48("1251") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\W-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1250") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[^\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1249") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1248") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\W-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1247") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[^\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1246") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-])+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1245") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+))?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1244") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\W-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1243") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[^\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1242") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-](?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1241") ? /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1240") ? /^<(?:(?:(?:\.\.\/)*|\/)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1239") ? /^<(?:(?:(?:\.\.\/)|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : stryMutAct_9fa48("1238") ? /<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/ : (stryCov_9fa48("1238", "1239", "1240", "1241", "1242", "1243", "1244", "1245", "1246", "1247", "1248", "1249", "1250", "1251", "1252", "1253", "1254"), /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/), null]));
              }
            } else {
              if (stryMutAct_9fa48("1255")) {
                {}
              } else {
                stryCov_9fa48("1255");
                W.push(stryMutAct_9fa48("1256") ? [] : (stryCov_9fa48("1256"), [j, stryMutAct_9fa48("1259") ? /^#[\r\n]*/ : stryMutAct_9fa48("1258") ? /^#[^\r\n]/ : stryMutAct_9fa48("1257") ? /#[^\r\n]*/ : (stryCov_9fa48("1257", "1258", "1259"), /^#[^\r\n]*/), null, stryMutAct_9fa48("1260") ? "" : (stryCov_9fa48("1260"), '#')]));
              }
            }
          }
        }
        if (stryMutAct_9fa48("1262") ? false : stryMutAct_9fa48("1261") ? true : (stryCov_9fa48("1261", "1262"), T.cStyleComments)) {
          if (stryMutAct_9fa48("1263")) {
            {}
          } else {
            stryCov_9fa48("1263");
            S.push(stryMutAct_9fa48("1264") ? [] : (stryCov_9fa48("1264"), [j, stryMutAct_9fa48("1267") ? /^\/\/[\r\n]*/ : stryMutAct_9fa48("1266") ? /^\/\/[^\r\n]/ : stryMutAct_9fa48("1265") ? /\/\/[^\r\n]*/ : (stryCov_9fa48("1265", "1266", "1267"), /^\/\/[^\r\n]*/), null]));
            S.push(stryMutAct_9fa48("1268") ? [] : (stryCov_9fa48("1268"), [j, stryMutAct_9fa48("1274") ? /^\/\*[\s\S]*?(?:\*\/)/ : stryMutAct_9fa48("1273") ? /^\/\*[\s\s]*?(?:\*\/|$)/ : stryMutAct_9fa48("1272") ? /^\/\*[\S\S]*?(?:\*\/|$)/ : stryMutAct_9fa48("1271") ? /^\/\*[^\s\S]*?(?:\*\/|$)/ : stryMutAct_9fa48("1270") ? /^\/\*[\s\S](?:\*\/|$)/ : stryMutAct_9fa48("1269") ? /\/\*[\s\S]*?(?:\*\/|$)/ : (stryCov_9fa48("1269", "1270", "1271", "1272", "1273", "1274"), /^\/\*[\s\S]*?(?:\*\/|$)/), null]));
          }
        }
        if (stryMutAct_9fa48("1276") ? false : stryMutAct_9fa48("1275") ? true : (stryCov_9fa48("1275", "1276"), T.regexLiterals)) {
          if (stryMutAct_9fa48("1277")) {
            {}
          } else {
            stryCov_9fa48("1277");
            var X = stryMutAct_9fa48("1278") ? "" : (stryCov_9fa48("1278"), '/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C[\\s\\S]|\\x5B(?:[^\\x5C\\x5D]|\\x5C[\\s\\S])*(?:\\x5D|$))+/');
            S.push(stryMutAct_9fa48("1279") ? [] : (stryCov_9fa48("1279"), [stryMutAct_9fa48("1280") ? "" : (stryCov_9fa48("1280"), 'lang-regex'), new RegExp((stryMutAct_9fa48("1281") ? "" : (stryCov_9fa48("1281"), '^')) + M + (stryMutAct_9fa48("1282") ? "" : (stryCov_9fa48("1282"), '(')) + X + (stryMutAct_9fa48("1283") ? "" : (stryCov_9fa48("1283"), ')')))]));
          }
        }
        var V = T.types;
        if (stryMutAct_9fa48("1285") ? false : stryMutAct_9fa48("1284") ? true : (stryCov_9fa48("1284", "1285"), V)) {
          if (stryMutAct_9fa48("1286")) {
            {}
          } else {
            stryCov_9fa48("1286");
            S.push(stryMutAct_9fa48("1287") ? [] : (stryCov_9fa48("1287"), [O, V]));
          }
        }
        var U = ((stryMutAct_9fa48("1288") ? "Stryker was here!" : (stryCov_9fa48("1288"), '')) + T.keywords).replace(stryMutAct_9fa48("1290") ? /^ | /g : stryMutAct_9fa48("1289") ? / | $/g : (stryCov_9fa48("1289", "1290"), /^ | $/g), stryMutAct_9fa48("1291") ? "Stryker was here!" : (stryCov_9fa48("1291"), ''));
        if (stryMutAct_9fa48("1293") ? false : stryMutAct_9fa48("1292") ? true : (stryCov_9fa48("1292", "1293"), U.length)) {
          if (stryMutAct_9fa48("1294")) {
            {}
          } else {
            stryCov_9fa48("1294");
            S.push(stryMutAct_9fa48("1295") ? [] : (stryCov_9fa48("1295"), [z, new RegExp((stryMutAct_9fa48("1296") ? "" : (stryCov_9fa48("1296"), '^(?:')) + U.replace(stryMutAct_9fa48("1299") ? /[\S,]+/g : stryMutAct_9fa48("1298") ? /[^\s,]+/g : stryMutAct_9fa48("1297") ? /[\s,]/g : (stryCov_9fa48("1297", "1298", "1299"), /[\s,]+/g), stryMutAct_9fa48("1300") ? "" : (stryCov_9fa48("1300"), '|')) + (stryMutAct_9fa48("1301") ? "" : (stryCov_9fa48("1301"), ')\\b'))), null]));
          }
        }
        W.push(stryMutAct_9fa48("1302") ? [] : (stryCov_9fa48("1302"), [F, stryMutAct_9fa48("1305") ? /^\S+/ : stryMutAct_9fa48("1304") ? /^\s/ : stryMutAct_9fa48("1303") ? /\s+/ : (stryCov_9fa48("1303", "1304", "1305"), /^\s+/), null, stryMutAct_9fa48("1306") ? "" : (stryCov_9fa48("1306"), ' \r\n\t\xA0')]));
        S.push(stryMutAct_9fa48("1307") ? [] : (stryCov_9fa48("1307"), [G, stryMutAct_9fa48("1311") ? /^@[a-z_$][^a-z_$@0-9]*/i : stryMutAct_9fa48("1310") ? /^@[a-z_$][a-z_$@0-9]/i : stryMutAct_9fa48("1309") ? /^@[^a-z_$][a-z_$@0-9]*/i : stryMutAct_9fa48("1308") ? /@[a-z_$][a-z_$@0-9]*/i : (stryCov_9fa48("1308", "1309", "1310", "1311"), /^@[a-z_$][a-z_$@0-9]*/i), null]), stryMutAct_9fa48("1312") ? [] : (stryCov_9fa48("1312"), [O, stryMutAct_9fa48("1322") ? /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\W+_t\b)/ : stryMutAct_9fa48("1321") ? /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w_t\b)/ : stryMutAct_9fa48("1320") ? /^(?:[@_]?[A-Z]+[a-z][^A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1319") ? /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]|\w+_t\b)/ : stryMutAct_9fa48("1318") ? /^(?:[@_]?[A-Z]+[^a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1317") ? /^(?:[@_]?[^A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1316") ? /^(?:[@_]?[A-Z][a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1315") ? /^(?:[^@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1314") ? /^(?:[@_][A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : stryMutAct_9fa48("1313") ? /(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/ : (stryCov_9fa48("1313", "1314", "1315", "1316", "1317", "1318", "1319", "1320", "1321", "1322"), /^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\w+_t\b)/), null]), stryMutAct_9fa48("1323") ? [] : (stryCov_9fa48("1323"), [F, stryMutAct_9fa48("1327") ? /^[a-z_$][^a-z_$@0-9]*/i : stryMutAct_9fa48("1326") ? /^[a-z_$][a-z_$@0-9]/i : stryMutAct_9fa48("1325") ? /^[^a-z_$][a-z_$@0-9]*/i : stryMutAct_9fa48("1324") ? /[a-z_$][a-z_$@0-9]*/i : (stryCov_9fa48("1324", "1325", "1326", "1327"), /^[a-z_$][a-z_$@0-9]*/i), null]), stryMutAct_9fa48("1328") ? [] : (stryCov_9fa48("1328"), [G, new RegExp(stryMutAct_9fa48("1349") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[^a-z]*" : stryMutAct_9fa48("1348") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]" : stryMutAct_9fa48("1347") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\D+)?)[a-z]*" : stryMutAct_9fa48("1346") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d)?)[a-z]*" : stryMutAct_9fa48("1345") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[^+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1344") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]\\d+)?)[a-z]*" : stryMutAct_9fa48("1343") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+))[a-z]*" : stryMutAct_9fa48("1342") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\D\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1341") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\D*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1340") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1339") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1338") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\D*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1337") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1336") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\D+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1335") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1334") ? "^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1333") ? "^(?:0x[a-f0-9]+|(?:\\D(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1332") ? "^(?:0x[^a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1331") ? "^(?:0x[a-f0-9]|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1330") ? "(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*" : stryMutAct_9fa48("1329") ? "" : (stryCov_9fa48("1329", "1330", "1331", "1332", "1333", "1334", "1335", "1336", "1337", "1338", "1339", "1340", "1341", "1342", "1343", "1344", "1345", "1346", "1347", "1348", "1349"), '^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*'), stryMutAct_9fa48("1350") ? "" : (stryCov_9fa48("1350"), 'i')), null, stryMutAct_9fa48("1351") ? "" : (stryCov_9fa48("1351"), '0123456789')]), stryMutAct_9fa48("1352") ? [] : (stryCov_9fa48("1352"), [F, stryMutAct_9fa48("1357") ? /^\\[\s\s]?/ : stryMutAct_9fa48("1356") ? /^\\[\S\S]?/ : stryMutAct_9fa48("1355") ? /^\\[^\s\S]?/ : stryMutAct_9fa48("1354") ? /^\\[\s\S]/ : stryMutAct_9fa48("1353") ? /\\[\s\S]?/ : (stryCov_9fa48("1353", "1354", "1355", "1356", "1357"), /^\\[\s\S]?/), null]), stryMutAct_9fa48("1358") ? [] : (stryCov_9fa48("1358"), [L, stryMutAct_9fa48("1363") ? /^.[^\s\W\.$@\'\"\`\/\#\\]*/ : stryMutAct_9fa48("1362") ? /^.[^\S\w\.$@\'\"\`\/\#\\]*/ : stryMutAct_9fa48("1361") ? /^.[\s\w\.$@\'\"\`\/\#\\]*/ : stryMutAct_9fa48("1360") ? /^.[^\s\w\.$@\'\"\`\/\#\\]/ : stryMutAct_9fa48("1359") ? /.[^\s\w\.$@\'\"\`\/\#\\]*/ : (stryCov_9fa48("1359", "1360", "1361", "1362", "1363"), /^.[^\s\w\.$@\'\"\`\/\#\\]*/), null]));
        return g(W, S);
      }
    }
    var K = i(stryMutAct_9fa48("1364") ? {} : (stryCov_9fa48("1364"), {
      keywords: A,
      hashComments: stryMutAct_9fa48("1365") ? false : (stryCov_9fa48("1365"), true),
      cStyleComments: stryMutAct_9fa48("1366") ? false : (stryCov_9fa48("1366"), true),
      multiLineStrings: stryMutAct_9fa48("1367") ? false : (stryCov_9fa48("1367"), true),
      regexLiterals: stryMutAct_9fa48("1368") ? false : (stryCov_9fa48("1368"), true)
    }));
    function Q(V, ag) {
      if (stryMutAct_9fa48("1369")) {
        {}
      } else {
        stryCov_9fa48("1369");
        var U = stryMutAct_9fa48("1373") ? /(?:^|\s)nocode(?:\S|$)/ : stryMutAct_9fa48("1372") ? /(?:^|\s)nocode(?:\s)/ : stryMutAct_9fa48("1371") ? /(?:^|\S)nocode(?:\s|$)/ : stryMutAct_9fa48("1370") ? /(?:\s)nocode(?:\s|$)/ : (stryCov_9fa48("1370", "1371", "1372", "1373"), /(?:^|\s)nocode(?:\s|$)/);
        var ab = stryMutAct_9fa48("1374") ? /\r\n|\n/ : (stryCov_9fa48("1374"), /\r\n?|\n/);
        var ac = V.ownerDocument;
        var S;
        if (stryMutAct_9fa48("1376") ? false : stryMutAct_9fa48("1375") ? true : (stryCov_9fa48("1375", "1376"), V.currentStyle)) {
          if (stryMutAct_9fa48("1377")) {
            {}
          } else {
            stryCov_9fa48("1377");
            S = V.currentStyle.whiteSpace;
          }
        } else {
          if (stryMutAct_9fa48("1378")) {
            {}
          } else {
            stryCov_9fa48("1378");
            if (stryMutAct_9fa48("1380") ? false : stryMutAct_9fa48("1379") ? true : (stryCov_9fa48("1379", "1380"), window.getComputedStyle)) {
              if (stryMutAct_9fa48("1381")) {
                {}
              } else {
                stryCov_9fa48("1381");
                S = ac.defaultView.getComputedStyle(V, null).getPropertyValue(stryMutAct_9fa48("1382") ? "" : (stryCov_9fa48("1382"), 'white-space'));
              }
            }
          }
        }
        var Z = stryMutAct_9fa48("1385") ? S || 'pre' === S.substring(0, 3) : stryMutAct_9fa48("1384") ? false : stryMutAct_9fa48("1383") ? true : (stryCov_9fa48("1383", "1384", "1385"), S && (stryMutAct_9fa48("1387") ? 'pre' !== S.substring(0, 3) : stryMutAct_9fa48("1386") ? true : (stryCov_9fa48("1386", "1387"), (stryMutAct_9fa48("1388") ? "" : (stryCov_9fa48("1388"), 'pre')) === (stryMutAct_9fa48("1389") ? S : (stryCov_9fa48("1389"), S.substring(0, 3))))));
        var af = ac.createElement(stryMutAct_9fa48("1390") ? "" : (stryCov_9fa48("1390"), 'LI'));
        while (stryMutAct_9fa48("1391") ? false : (stryCov_9fa48("1391"), V.firstChild)) {
          if (stryMutAct_9fa48("1392")) {
            {}
          } else {
            stryCov_9fa48("1392");
            af.appendChild(V.firstChild);
          }
        }
        var W = stryMutAct_9fa48("1393") ? [] : (stryCov_9fa48("1393"), [af]);
        function ae(al) {
          if (stryMutAct_9fa48("1394")) {
            {}
          } else {
            stryCov_9fa48("1394");
            switch (al.nodeType) {
              case 1:
                if (stryMutAct_9fa48("1395")) {} else {
                  stryCov_9fa48("1395");
                  if (stryMutAct_9fa48("1397") ? false : stryMutAct_9fa48("1396") ? true : (stryCov_9fa48("1396", "1397"), U.test(al.className))) {
                    if (stryMutAct_9fa48("1398")) {
                      {}
                    } else {
                      stryCov_9fa48("1398");
                      break;
                    }
                  }
                  if (stryMutAct_9fa48("1401") ? 'BR' !== al.nodeName : stryMutAct_9fa48("1400") ? false : stryMutAct_9fa48("1399") ? true : (stryCov_9fa48("1399", "1400", "1401"), (stryMutAct_9fa48("1402") ? "" : (stryCov_9fa48("1402"), 'BR')) === al.nodeName)) {
                    if (stryMutAct_9fa48("1403")) {
                      {}
                    } else {
                      stryCov_9fa48("1403");
                      ad(al);
                      if (stryMutAct_9fa48("1405") ? false : stryMutAct_9fa48("1404") ? true : (stryCov_9fa48("1404", "1405"), al.parentNode)) {
                        if (stryMutAct_9fa48("1406")) {
                          {}
                        } else {
                          stryCov_9fa48("1406");
                          al.parentNode.removeChild(al);
                        }
                      }
                    }
                  } else {
                    if (stryMutAct_9fa48("1407")) {
                      {}
                    } else {
                      stryCov_9fa48("1407");
                      for (var an = al.firstChild; stryMutAct_9fa48("1408") ? false : (stryCov_9fa48("1408"), an); an = an.nextSibling) {
                        if (stryMutAct_9fa48("1409")) {
                          {}
                        } else {
                          stryCov_9fa48("1409");
                          ae(an);
                        }
                      }
                    }
                  }
                  break;
                }
              case 3:
              case 4:
                if (stryMutAct_9fa48("1410")) {} else {
                  stryCov_9fa48("1410");
                  if (stryMutAct_9fa48("1412") ? false : stryMutAct_9fa48("1411") ? true : (stryCov_9fa48("1411", "1412"), Z)) {
                    if (stryMutAct_9fa48("1413")) {
                      {}
                    } else {
                      stryCov_9fa48("1413");
                      var am = al.nodeValue;
                      var aj = am.match(ab);
                      if (stryMutAct_9fa48("1415") ? false : stryMutAct_9fa48("1414") ? true : (stryCov_9fa48("1414", "1415"), aj)) {
                        if (stryMutAct_9fa48("1416")) {
                          {}
                        } else {
                          stryCov_9fa48("1416");
                          var ai = stryMutAct_9fa48("1417") ? am : (stryCov_9fa48("1417"), am.substring(0, aj.index));
                          al.nodeValue = ai;
                          var ah = stryMutAct_9fa48("1418") ? am : (stryCov_9fa48("1418"), am.substring(stryMutAct_9fa48("1419") ? aj.index - aj[0].length : (stryCov_9fa48("1419"), aj.index + aj[0].length)));
                          if (stryMutAct_9fa48("1421") ? false : stryMutAct_9fa48("1420") ? true : (stryCov_9fa48("1420", "1421"), ah)) {
                            if (stryMutAct_9fa48("1422")) {
                              {}
                            } else {
                              stryCov_9fa48("1422");
                              var ak = al.parentNode;
                              ak.insertBefore(ac.createTextNode(ah), al.nextSibling);
                            }
                          }
                          ad(al);
                          if (stryMutAct_9fa48("1425") ? false : stryMutAct_9fa48("1424") ? true : stryMutAct_9fa48("1423") ? ai : (stryCov_9fa48("1423", "1424", "1425"), !ai)) {
                            if (stryMutAct_9fa48("1426")) {
                              {}
                            } else {
                              stryCov_9fa48("1426");
                              al.parentNode.removeChild(al);
                            }
                          }
                        }
                      }
                    }
                  }
                  break;
                }
            }
          }
        }
        function ad(ak) {
          if (stryMutAct_9fa48("1427")) {
            {}
          } else {
            stryCov_9fa48("1427");
            while (stryMutAct_9fa48("1429") ? false : stryMutAct_9fa48("1428") ? ak.nextSibling : (stryCov_9fa48("1428", "1429"), !ak.nextSibling)) {
              if (stryMutAct_9fa48("1430")) {
                {}
              } else {
                stryCov_9fa48("1430");
                ak = ak.parentNode;
                if (stryMutAct_9fa48("1433") ? false : stryMutAct_9fa48("1432") ? true : stryMutAct_9fa48("1431") ? ak : (stryCov_9fa48("1431", "1432", "1433"), !ak)) {
                  if (stryMutAct_9fa48("1434")) {
                    {}
                  } else {
                    stryCov_9fa48("1434");
                    return;
                  }
                }
              }
            }
            function ai(al, ar) {
              if (stryMutAct_9fa48("1435")) {
                {}
              } else {
                stryCov_9fa48("1435");
                var aq = ar ? al.cloneNode(stryMutAct_9fa48("1436") ? true : (stryCov_9fa48("1436"), false)) : al;
                var ao = al.parentNode;
                if (stryMutAct_9fa48("1438") ? false : stryMutAct_9fa48("1437") ? true : (stryCov_9fa48("1437", "1438"), ao)) {
                  if (stryMutAct_9fa48("1439")) {
                    {}
                  } else {
                    stryCov_9fa48("1439");
                    var ap = ai(ao, 1);
                    var an = al.nextSibling;
                    ap.appendChild(aq);
                    for (var am = an; stryMutAct_9fa48("1440") ? false : (stryCov_9fa48("1440"), am); am = an) {
                      if (stryMutAct_9fa48("1441")) {
                        {}
                      } else {
                        stryCov_9fa48("1441");
                        an = am.nextSibling;
                        ap.appendChild(am);
                      }
                    }
                  }
                }
                return aq;
              }
            }
            var ah = ai(ak.nextSibling, 0);
            for (var aj; stryMutAct_9fa48("1443") ? (aj = ah.parentNode) || aj.nodeType === 1 : stryMutAct_9fa48("1442") ? false : (stryCov_9fa48("1442", "1443"), (aj = ah.parentNode) && (stryMutAct_9fa48("1445") ? aj.nodeType !== 1 : stryMutAct_9fa48("1444") ? true : (stryCov_9fa48("1444", "1445"), aj.nodeType === 1)));) {
              if (stryMutAct_9fa48("1446")) {
                {}
              } else {
                stryCov_9fa48("1446");
                ah = aj;
              }
            }
            W.push(ah);
          }
        }
        for (var Y = 0; stryMutAct_9fa48("1449") ? Y >= W.length : stryMutAct_9fa48("1448") ? Y <= W.length : stryMutAct_9fa48("1447") ? false : (stryCov_9fa48("1447", "1448", "1449"), Y < W.length); stryMutAct_9fa48("1450") ? --Y : (stryCov_9fa48("1450"), ++Y)) {
          if (stryMutAct_9fa48("1451")) {
            {}
          } else {
            stryCov_9fa48("1451");
            ae(W[Y]);
          }
        }
        if (stryMutAct_9fa48("1454") ? ag !== (ag | 0) : stryMutAct_9fa48("1453") ? false : stryMutAct_9fa48("1452") ? true : (stryCov_9fa48("1452", "1453", "1454"), ag === (ag | 0))) {
          if (stryMutAct_9fa48("1455")) {
            {}
          } else {
            stryCov_9fa48("1455");
            W[0].setAttribute(stryMutAct_9fa48("1456") ? "" : (stryCov_9fa48("1456"), 'value'), ag);
          }
        }
        var aa = ac.createElement(stryMutAct_9fa48("1457") ? "" : (stryCov_9fa48("1457"), 'OL'));
        aa.className = stryMutAct_9fa48("1458") ? "" : (stryCov_9fa48("1458"), 'linenums');
        var X = stryMutAct_9fa48("1461") ? Math.max(0, ag - 1 | 0) && 0 : stryMutAct_9fa48("1460") ? false : stryMutAct_9fa48("1459") ? true : (stryCov_9fa48("1459", "1460", "1461"), (stryMutAct_9fa48("1462") ? Math.min(0, ag - 1 | 0) : (stryCov_9fa48("1462"), Math.max(0, (stryMutAct_9fa48("1463") ? ag + 1 : (stryCov_9fa48("1463"), ag - 1)) | 0))) || 0);
        for (var Y = 0, T = W.length; stryMutAct_9fa48("1466") ? Y >= T : stryMutAct_9fa48("1465") ? Y <= T : stryMutAct_9fa48("1464") ? false : (stryCov_9fa48("1464", "1465", "1466"), Y < T); stryMutAct_9fa48("1467") ? --Y : (stryCov_9fa48("1467"), ++Y)) {
          if (stryMutAct_9fa48("1468")) {
            {}
          } else {
            stryCov_9fa48("1468");
            af = W[Y];
            af.className = (stryMutAct_9fa48("1469") ? "" : (stryCov_9fa48("1469"), 'L')) + (stryMutAct_9fa48("1470") ? (Y + X) * 10 : (stryCov_9fa48("1470"), (stryMutAct_9fa48("1471") ? Y - X : (stryCov_9fa48("1471"), Y + X)) % 10));
            if (stryMutAct_9fa48("1474") ? false : stryMutAct_9fa48("1473") ? true : stryMutAct_9fa48("1472") ? af.firstChild : (stryCov_9fa48("1472", "1473", "1474"), !af.firstChild)) {
              if (stryMutAct_9fa48("1475")) {
                {}
              } else {
                stryCov_9fa48("1475");
                af.appendChild(ac.createTextNode(stryMutAct_9fa48("1476") ? "" : (stryCov_9fa48("1476"), '\xA0')));
              }
            }
            aa.appendChild(af);
          }
        }
        V.appendChild(aa);
      }
    }
    function D(ac) {
      if (stryMutAct_9fa48("1477")) {
        {}
      } else {
        stryCov_9fa48("1477");
        var aj = /\bMSIE\b/.test(navigator.userAgent);
        var am = /\n/g;
        var al = ac.sourceCode;
        var an = al.length;
        var V = 0;
        var aa = ac.spans;
        var T = aa.length;
        var ah = 0;
        var X = ac.decorations;
        var Y = X.length;
        var Z = 0;
        X[Y] = an;
        var ar, aq;
        for (aq = ar = 0; stryMutAct_9fa48("1480") ? aq >= Y : stryMutAct_9fa48("1479") ? aq <= Y : stryMutAct_9fa48("1478") ? false : (stryCov_9fa48("1478", "1479", "1480"), aq < Y);) {
          if (stryMutAct_9fa48("1481")) {
            {}
          } else {
            stryCov_9fa48("1481");
            if (stryMutAct_9fa48("1484") ? X[aq] === X[aq + 2] : stryMutAct_9fa48("1483") ? false : stryMutAct_9fa48("1482") ? true : (stryCov_9fa48("1482", "1483", "1484"), X[aq] !== X[stryMutAct_9fa48("1485") ? aq - 2 : (stryCov_9fa48("1485"), aq + 2)])) {
              if (stryMutAct_9fa48("1486")) {
                {}
              } else {
                stryCov_9fa48("1486");
                X[stryMutAct_9fa48("1487") ? ar-- : (stryCov_9fa48("1487"), ar++)] = X[stryMutAct_9fa48("1488") ? aq-- : (stryCov_9fa48("1488"), aq++)];
                X[stryMutAct_9fa48("1489") ? ar-- : (stryCov_9fa48("1489"), ar++)] = X[stryMutAct_9fa48("1490") ? aq-- : (stryCov_9fa48("1490"), aq++)];
              }
            } else {
              if (stryMutAct_9fa48("1491")) {
                {}
              } else {
                stryCov_9fa48("1491");
                stryMutAct_9fa48("1492") ? aq -= 2 : (stryCov_9fa48("1492"), aq += 2);
              }
            }
          }
        }
        Y = ar;
        for (aq = ar = 0; stryMutAct_9fa48("1495") ? aq >= Y : stryMutAct_9fa48("1494") ? aq <= Y : stryMutAct_9fa48("1493") ? false : (stryCov_9fa48("1493", "1494", "1495"), aq < Y);) {
          if (stryMutAct_9fa48("1496")) {
            {}
          } else {
            stryCov_9fa48("1496");
            var at = X[aq];
            var ab = X[stryMutAct_9fa48("1497") ? aq - 1 : (stryCov_9fa48("1497"), aq + 1)];
            var W = stryMutAct_9fa48("1498") ? aq - 2 : (stryCov_9fa48("1498"), aq + 2);
            while (stryMutAct_9fa48("1500") ? W + 2 <= Y || X[W + 1] === ab : stryMutAct_9fa48("1499") ? false : (stryCov_9fa48("1499", "1500"), (stryMutAct_9fa48("1503") ? W + 2 > Y : stryMutAct_9fa48("1502") ? W + 2 < Y : stryMutAct_9fa48("1501") ? true : (stryCov_9fa48("1501", "1502", "1503"), (stryMutAct_9fa48("1504") ? W - 2 : (stryCov_9fa48("1504"), W + 2)) <= Y)) && (stryMutAct_9fa48("1506") ? X[W + 1] !== ab : stryMutAct_9fa48("1505") ? true : (stryCov_9fa48("1505", "1506"), X[stryMutAct_9fa48("1507") ? W - 1 : (stryCov_9fa48("1507"), W + 1)] === ab)))) {
              if (stryMutAct_9fa48("1508")) {
                {}
              } else {
                stryCov_9fa48("1508");
                stryMutAct_9fa48("1509") ? W -= 2 : (stryCov_9fa48("1509"), W += 2);
              }
            }
            X[stryMutAct_9fa48("1510") ? ar-- : (stryCov_9fa48("1510"), ar++)] = at;
            X[stryMutAct_9fa48("1511") ? ar-- : (stryCov_9fa48("1511"), ar++)] = ab;
            aq = W;
          }
        }
        Y = X.length = ar;
        var ae = null;
        while (stryMutAct_9fa48("1514") ? ah >= T : stryMutAct_9fa48("1513") ? ah <= T : stryMutAct_9fa48("1512") ? false : (stryCov_9fa48("1512", "1513", "1514"), ah < T)) {
          if (stryMutAct_9fa48("1515")) {
            {}
          } else {
            stryCov_9fa48("1515");
            var af = aa[ah];
            var S = stryMutAct_9fa48("1518") ? aa[ah + 2] && an : stryMutAct_9fa48("1517") ? false : stryMutAct_9fa48("1516") ? true : (stryCov_9fa48("1516", "1517", "1518"), aa[stryMutAct_9fa48("1519") ? ah - 2 : (stryCov_9fa48("1519"), ah + 2)] || an);
            var ag = X[Z];
            var ap = stryMutAct_9fa48("1522") ? X[Z + 2] && an : stryMutAct_9fa48("1521") ? false : stryMutAct_9fa48("1520") ? true : (stryCov_9fa48("1520", "1521", "1522"), X[stryMutAct_9fa48("1523") ? Z - 2 : (stryCov_9fa48("1523"), Z + 2)] || an);
            var W = stryMutAct_9fa48("1524") ? Math.max(S, ap) : (stryCov_9fa48("1524"), Math.min(S, ap));
            var ak = aa[stryMutAct_9fa48("1525") ? ah - 1 : (stryCov_9fa48("1525"), ah + 1)];
            var U;
            if (stryMutAct_9fa48("1528") ? ak.nodeType !== 1 || (U = al.substring(V, W)) : stryMutAct_9fa48("1527") ? false : stryMutAct_9fa48("1526") ? true : (stryCov_9fa48("1526", "1527", "1528"), (stryMutAct_9fa48("1530") ? ak.nodeType === 1 : stryMutAct_9fa48("1529") ? true : (stryCov_9fa48("1529", "1530"), ak.nodeType !== 1)) && (U = stryMutAct_9fa48("1531") ? al : (stryCov_9fa48("1531"), al.substring(V, W))))) {
              if (stryMutAct_9fa48("1532")) {
                {}
              } else {
                stryCov_9fa48("1532");
                if (stryMutAct_9fa48("1534") ? false : stryMutAct_9fa48("1533") ? true : (stryCov_9fa48("1533", "1534"), aj)) {
                  if (stryMutAct_9fa48("1535")) {
                    {}
                  } else {
                    stryCov_9fa48("1535");
                    U = U.replace(am, stryMutAct_9fa48("1536") ? "" : (stryCov_9fa48("1536"), '\r'));
                  }
                }
                ak.nodeValue = U;
                var ai = ak.ownerDocument;
                var ao = ai.createElement(stryMutAct_9fa48("1537") ? "" : (stryCov_9fa48("1537"), 'SPAN'));
                ao.className = X[stryMutAct_9fa48("1538") ? Z - 1 : (stryCov_9fa48("1538"), Z + 1)];
                var ad = ak.parentNode;
                ad.replaceChild(ao, ak);
                ao.appendChild(ak);
                if (stryMutAct_9fa48("1542") ? V >= S : stryMutAct_9fa48("1541") ? V <= S : stryMutAct_9fa48("1540") ? false : stryMutAct_9fa48("1539") ? true : (stryCov_9fa48("1539", "1540", "1541", "1542"), V < S)) {
                  if (stryMutAct_9fa48("1543")) {
                    {}
                  } else {
                    stryCov_9fa48("1543");
                    aa[stryMutAct_9fa48("1544") ? ah - 1 : (stryCov_9fa48("1544"), ah + 1)] = ak = ai.createTextNode(stryMutAct_9fa48("1545") ? al : (stryCov_9fa48("1545"), al.substring(W, S)));
                    ad.insertBefore(ak, ao.nextSibling);
                  }
                }
              }
            }
            V = W;
            if (stryMutAct_9fa48("1549") ? V < S : stryMutAct_9fa48("1548") ? V > S : stryMutAct_9fa48("1547") ? false : stryMutAct_9fa48("1546") ? true : (stryCov_9fa48("1546", "1547", "1548", "1549"), V >= S)) {
              if (stryMutAct_9fa48("1550")) {
                {}
              } else {
                stryCov_9fa48("1550");
                stryMutAct_9fa48("1551") ? ah -= 2 : (stryCov_9fa48("1551"), ah += 2);
              }
            }
            if (stryMutAct_9fa48("1555") ? V < ap : stryMutAct_9fa48("1554") ? V > ap : stryMutAct_9fa48("1553") ? false : stryMutAct_9fa48("1552") ? true : (stryCov_9fa48("1552", "1553", "1554", "1555"), V >= ap)) {
              if (stryMutAct_9fa48("1556")) {
                {}
              } else {
                stryCov_9fa48("1556");
                stryMutAct_9fa48("1557") ? Z -= 2 : (stryCov_9fa48("1557"), Z += 2);
              }
            }
          }
        }
      }
    }
    var t = {};
    function c(U, V) {
      if (stryMutAct_9fa48("1558")) {
        {}
      } else {
        stryCov_9fa48("1558");
        for (var S = V.length; stryMutAct_9fa48("1561") ? --S < 0 : stryMutAct_9fa48("1560") ? --S > 0 : stryMutAct_9fa48("1559") ? false : (stryCov_9fa48("1559", "1560", "1561"), (stryMutAct_9fa48("1562") ? ++S : (stryCov_9fa48("1562"), --S)) >= 0);) {
          if (stryMutAct_9fa48("1563")) {
            {}
          } else {
            stryCov_9fa48("1563");
            var T = V[S];
            if (stryMutAct_9fa48("1566") ? false : stryMutAct_9fa48("1565") ? true : stryMutAct_9fa48("1564") ? t.hasOwnProperty(T) : (stryCov_9fa48("1564", "1565", "1566"), !t.hasOwnProperty(T))) {
              if (stryMutAct_9fa48("1567")) {
                {}
              } else {
                stryCov_9fa48("1567");
                t[T] = U;
              }
            } else {
              if (stryMutAct_9fa48("1568")) {
                {}
              } else {
                stryCov_9fa48("1568");
                if (stryMutAct_9fa48("1570") ? false : stryMutAct_9fa48("1569") ? true : (stryCov_9fa48("1569", "1570"), window.console)) {
                  if (stryMutAct_9fa48("1571")) {
                    {}
                  } else {
                    stryCov_9fa48("1571");
                    console.warn(stryMutAct_9fa48("1572") ? "" : (stryCov_9fa48("1572"), 'cannot override language handler %s'), T);
                  }
                }
              }
            }
          }
        }
      }
    }
    function q(T, S) {
      if (stryMutAct_9fa48("1573")) {
        {}
      } else {
        stryCov_9fa48("1573");
        if (stryMutAct_9fa48("1576") ? false : stryMutAct_9fa48("1575") ? true : stryMutAct_9fa48("1574") ? T && t.hasOwnProperty(T) : (stryCov_9fa48("1574", "1575", "1576"), !(stryMutAct_9fa48("1579") ? T || t.hasOwnProperty(T) : stryMutAct_9fa48("1578") ? false : stryMutAct_9fa48("1577") ? true : (stryCov_9fa48("1577", "1578", "1579"), T && t.hasOwnProperty(T))))) {
          if (stryMutAct_9fa48("1580")) {
            {}
          } else {
            stryCov_9fa48("1580");
            T = (stryMutAct_9fa48("1583") ? /^\S*</ : stryMutAct_9fa48("1582") ? /^\s</ : stryMutAct_9fa48("1581") ? /\s*</ : (stryCov_9fa48("1581", "1582", "1583"), /^\s*</)).test(S) ? stryMutAct_9fa48("1584") ? "" : (stryCov_9fa48("1584"), 'default-markup') : stryMutAct_9fa48("1585") ? "" : (stryCov_9fa48("1585"), 'default-code');
          }
        }
        return t[T];
      }
    }
    c(K, stryMutAct_9fa48("1586") ? [] : (stryCov_9fa48("1586"), [stryMutAct_9fa48("1587") ? "" : (stryCov_9fa48("1587"), 'default-code')]));
    c(g(stryMutAct_9fa48("1588") ? ["Stryker was here"] : (stryCov_9fa48("1588"), []), stryMutAct_9fa48("1589") ? [] : (stryCov_9fa48("1589"), [stryMutAct_9fa48("1590") ? [] : (stryCov_9fa48("1590"), [F, stryMutAct_9fa48("1593") ? /^[<?]+/ : stryMutAct_9fa48("1592") ? /^[^<?]/ : stryMutAct_9fa48("1591") ? /[^<?]+/ : (stryCov_9fa48("1591", "1592", "1593"), /^[^<?]+/)]), stryMutAct_9fa48("1594") ? [] : (stryCov_9fa48("1594"), [E, stryMutAct_9fa48("1599") ? /^<!\w[^>]*(?:>)/ : stryMutAct_9fa48("1598") ? /^<!\w[>]*(?:>|$)/ : stryMutAct_9fa48("1597") ? /^<!\w[^>](?:>|$)/ : stryMutAct_9fa48("1596") ? /^<!\W[^>]*(?:>|$)/ : stryMutAct_9fa48("1595") ? /<!\w[^>]*(?:>|$)/ : (stryCov_9fa48("1595", "1596", "1597", "1598", "1599"), /^<!\w[^>]*(?:>|$)/)]), stryMutAct_9fa48("1600") ? [] : (stryCov_9fa48("1600"), [j, stryMutAct_9fa48("1606") ? /^<\!--[\s\S]*?(?:-\->)/ : stryMutAct_9fa48("1605") ? /^<\!--[\s\s]*?(?:-\->|$)/ : stryMutAct_9fa48("1604") ? /^<\!--[\S\S]*?(?:-\->|$)/ : stryMutAct_9fa48("1603") ? /^<\!--[^\s\S]*?(?:-\->|$)/ : stryMutAct_9fa48("1602") ? /^<\!--[\s\S](?:-\->|$)/ : stryMutAct_9fa48("1601") ? /<\!--[\s\S]*?(?:-\->|$)/ : (stryCov_9fa48("1601", "1602", "1603", "1604", "1605", "1606"), /^<\!--[\s\S]*?(?:-\->|$)/)]), stryMutAct_9fa48("1607") ? [] : (stryCov_9fa48("1607"), [stryMutAct_9fa48("1608") ? "" : (stryCov_9fa48("1608"), 'lang-'), stryMutAct_9fa48("1614") ? /^<\?([\s\S]+?)(?:\?>)/ : stryMutAct_9fa48("1613") ? /^<\?([\s\s]+?)(?:\?>|$)/ : stryMutAct_9fa48("1612") ? /^<\?([\S\S]+?)(?:\?>|$)/ : stryMutAct_9fa48("1611") ? /^<\?([^\s\S]+?)(?:\?>|$)/ : stryMutAct_9fa48("1610") ? /^<\?([\s\S])(?:\?>|$)/ : stryMutAct_9fa48("1609") ? /<\?([\s\S]+?)(?:\?>|$)/ : (stryCov_9fa48("1609", "1610", "1611", "1612", "1613", "1614"), /^<\?([\s\S]+?)(?:\?>|$)/)]), stryMutAct_9fa48("1615") ? [] : (stryCov_9fa48("1615"), [stryMutAct_9fa48("1616") ? "" : (stryCov_9fa48("1616"), 'lang-'), stryMutAct_9fa48("1622") ? /^<%([\s\S]+?)(?:%>)/ : stryMutAct_9fa48("1621") ? /^<%([\s\s]+?)(?:%>|$)/ : stryMutAct_9fa48("1620") ? /^<%([\S\S]+?)(?:%>|$)/ : stryMutAct_9fa48("1619") ? /^<%([^\s\S]+?)(?:%>|$)/ : stryMutAct_9fa48("1618") ? /^<%([\s\S])(?:%>|$)/ : stryMutAct_9fa48("1617") ? /<%([\s\S]+?)(?:%>|$)/ : (stryCov_9fa48("1617", "1618", "1619", "1620", "1621", "1622"), /^<%([\s\S]+?)(?:%>|$)/)]), stryMutAct_9fa48("1623") ? [] : (stryCov_9fa48("1623"), [L, stryMutAct_9fa48("1626") ? /^(?:<[%?]|[^%?]>)/ : stryMutAct_9fa48("1625") ? /^(?:<[^%?]|[%?]>)/ : stryMutAct_9fa48("1624") ? /(?:<[%?]|[%?]>)/ : (stryCov_9fa48("1624", "1625", "1626"), /^(?:<[%?]|[%?]>)/)]), stryMutAct_9fa48("1627") ? [] : (stryCov_9fa48("1627"), [stryMutAct_9fa48("1628") ? "" : (stryCov_9fa48("1628"), 'lang-'), stryMutAct_9fa48("1637") ? /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[>]*>/i : stryMutAct_9fa48("1636") ? /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]>/i : stryMutAct_9fa48("1635") ? /^<xmp\b[^>]*>([\s\s]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1634") ? /^<xmp\b[^>]*>([\S\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1633") ? /^<xmp\b[^>]*>([^\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1632") ? /^<xmp\b[^>]*>([\s\S])<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1631") ? /^<xmp\b[>]*>([\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1630") ? /^<xmp\b[^>]>([\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("1629") ? /<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i : (stryCov_9fa48("1629", "1630", "1631", "1632", "1633", "1634", "1635", "1636", "1637"), /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i)]), stryMutAct_9fa48("1638") ? [] : (stryCov_9fa48("1638"), [stryMutAct_9fa48("1639") ? "" : (stryCov_9fa48("1639"), 'lang-js'), stryMutAct_9fa48("1648") ? /^<script\b[^>]*>([\s\S]*?)(<\/script\b[>]*>)/i : stryMutAct_9fa48("1647") ? /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]>)/i : stryMutAct_9fa48("1646") ? /^<script\b[^>]*>([\s\s]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1645") ? /^<script\b[^>]*>([\S\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1644") ? /^<script\b[^>]*>([^\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1643") ? /^<script\b[^>]*>([\s\S])(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1642") ? /^<script\b[>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1641") ? /^<script\b[^>]>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("1640") ? /<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : (stryCov_9fa48("1640", "1641", "1642", "1643", "1644", "1645", "1646", "1647", "1648"), /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i)]), stryMutAct_9fa48("1649") ? [] : (stryCov_9fa48("1649"), [stryMutAct_9fa48("1650") ? "" : (stryCov_9fa48("1650"), 'lang-css'), stryMutAct_9fa48("1659") ? /^<style\b[^>]*>([\s\S]*?)(<\/style\b[>]*>)/i : stryMutAct_9fa48("1658") ? /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]>)/i : stryMutAct_9fa48("1657") ? /^<style\b[^>]*>([\s\s]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1656") ? /^<style\b[^>]*>([\S\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1655") ? /^<style\b[^>]*>([^\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1654") ? /^<style\b[^>]*>([\s\S])(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1653") ? /^<style\b[>]*>([\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1652") ? /^<style\b[^>]>([\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("1651") ? /<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i : (stryCov_9fa48("1651", "1652", "1653", "1654", "1655", "1656", "1657", "1658", "1659"), /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i)]), stryMutAct_9fa48("1660") ? [] : (stryCov_9fa48("1660"), [stryMutAct_9fa48("1661") ? "" : (stryCov_9fa48("1661"), 'lang-in.tag'), stryMutAct_9fa48("1666") ? /^(<\/?[a-z][<>]*>)/i : stryMutAct_9fa48("1665") ? /^(<\/?[a-z][^<>]>)/i : stryMutAct_9fa48("1664") ? /^(<\/?[^a-z][^<>]*>)/i : stryMutAct_9fa48("1663") ? /^(<\/[a-z][^<>]*>)/i : stryMutAct_9fa48("1662") ? /(<\/?[a-z][^<>]*>)/i : (stryCov_9fa48("1662", "1663", "1664", "1665", "1666"), /^(<\/?[a-z][^<>]*>)/i)])])), stryMutAct_9fa48("1667") ? [] : (stryCov_9fa48("1667"), [stryMutAct_9fa48("1668") ? "" : (stryCov_9fa48("1668"), 'default-markup'), stryMutAct_9fa48("1669") ? "" : (stryCov_9fa48("1669"), 'htm'), stryMutAct_9fa48("1670") ? "" : (stryCov_9fa48("1670"), 'html'), stryMutAct_9fa48("1671") ? "" : (stryCov_9fa48("1671"), 'mxml'), stryMutAct_9fa48("1672") ? "" : (stryCov_9fa48("1672"), 'xhtml'), stryMutAct_9fa48("1673") ? "" : (stryCov_9fa48("1673"), 'xml'), stryMutAct_9fa48("1674") ? "" : (stryCov_9fa48("1674"), 'xsl')]));
    c(g(stryMutAct_9fa48("1675") ? [] : (stryCov_9fa48("1675"), [stryMutAct_9fa48("1676") ? [] : (stryCov_9fa48("1676"), [F, stryMutAct_9fa48("1680") ? /^[\S]+/ : stryMutAct_9fa48("1679") ? /^[^\s]+/ : stryMutAct_9fa48("1678") ? /^[\s]/ : stryMutAct_9fa48("1677") ? /[\s]+/ : (stryCov_9fa48("1677", "1678", "1679", "1680"), /^[\s]+/), null, stryMutAct_9fa48("1681") ? "" : (stryCov_9fa48("1681"), ' \t\r\n')]), stryMutAct_9fa48("1682") ? [] : (stryCov_9fa48("1682"), [n, stryMutAct_9fa48("1689") ? /^(?:\"[^\"]*\"?|\'[^\']*\')/ : stryMutAct_9fa48("1688") ? /^(?:\"[^\"]*\"?|\'[\']*\'?)/ : stryMutAct_9fa48("1687") ? /^(?:\"[^\"]*\"?|\'[^\']\'?)/ : stryMutAct_9fa48("1686") ? /^(?:\"[^\"]*\"|\'[^\']*\'?)/ : stryMutAct_9fa48("1685") ? /^(?:\"[\"]*\"?|\'[^\']*\'?)/ : stryMutAct_9fa48("1684") ? /^(?:\"[^\"]\"?|\'[^\']*\'?)/ : stryMutAct_9fa48("1683") ? /(?:\"[^\"]*\"?|\'[^\']*\'?)/ : (stryCov_9fa48("1683", "1684", "1685", "1686", "1687", "1688", "1689"), /^(?:\"[^\"]*\"?|\'[^\']*\'?)/), null, stryMutAct_9fa48("1690") ? "" : (stryCov_9fa48("1690"), '"\'')])]), stryMutAct_9fa48("1691") ? [] : (stryCov_9fa48("1691"), [stryMutAct_9fa48("1692") ? [] : (stryCov_9fa48("1692"), [m, stryMutAct_9fa48("1703") ? /^^<\/?[a-z](?:[\w.:-]*\w)?|\/>$/i : stryMutAct_9fa48("1702") ? /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>/i : stryMutAct_9fa48("1701") ? /^^<\/?[a-z](?:[\w.:-]*\W)?|\/?>$/i : stryMutAct_9fa48("1700") ? /^^<\/?[a-z](?:[\W.:-]*\w)?|\/?>$/i : stryMutAct_9fa48("1699") ? /^^<\/?[a-z](?:[^\w.:-]*\w)?|\/?>$/i : stryMutAct_9fa48("1698") ? /^^<\/?[a-z](?:[\w.:-]\w)?|\/?>$/i : stryMutAct_9fa48("1697") ? /^^<\/?[a-z](?:[\w.:-]*\w)|\/?>$/i : stryMutAct_9fa48("1696") ? /^^<\/?[^a-z](?:[\w.:-]*\w)?|\/?>$/i : stryMutAct_9fa48("1695") ? /^^<\/[a-z](?:[\w.:-]*\w)?|\/?>$/i : stryMutAct_9fa48("1694") ? /^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i : stryMutAct_9fa48("1693") ? /^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i : (stryCov_9fa48("1693", "1694", "1695", "1696", "1697", "1698", "1699", "1700", "1701", "1702", "1703"), /^^<\/?[a-z](?:[\w.:-]*\w)?|\/?>$/i)]), stryMutAct_9fa48("1704") ? [] : (stryCov_9fa48("1704"), [P, stryMutAct_9fa48("1714") ? /^(?!style[\s=]|on)[a-z](?:[\w:-]*\W)?/i : stryMutAct_9fa48("1713") ? /^(?!style[\s=]|on)[a-z](?:[\W:-]*\w)?/i : stryMutAct_9fa48("1712") ? /^(?!style[\s=]|on)[a-z](?:[^\w:-]*\w)?/i : stryMutAct_9fa48("1711") ? /^(?!style[\s=]|on)[a-z](?:[\w:-]\w)?/i : stryMutAct_9fa48("1710") ? /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)/i : stryMutAct_9fa48("1709") ? /^(?!style[\s=]|on)[^a-z](?:[\w:-]*\w)?/i : stryMutAct_9fa48("1708") ? /^(?!style[\S=]|on)[a-z](?:[\w:-]*\w)?/i : stryMutAct_9fa48("1707") ? /^(?!style[^\s=]|on)[a-z](?:[\w:-]*\w)?/i : stryMutAct_9fa48("1706") ? /^(?=style[\s=]|on)[a-z](?:[\w:-]*\w)?/i : stryMutAct_9fa48("1705") ? /(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i : (stryCov_9fa48("1705", "1706", "1707", "1708", "1709", "1710", "1711", "1712", "1713", "1714"), /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i)]), stryMutAct_9fa48("1715") ? [] : (stryCov_9fa48("1715"), [stryMutAct_9fa48("1716") ? "" : (stryCov_9fa48("1716"), 'lang-uq.val'), stryMutAct_9fa48("1726") ? /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\S)))/ : stryMutAct_9fa48("1725") ? /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?!\s)))/ : stryMutAct_9fa48("1724") ? /^=\s*([^>\'\"\s]*(?:[^>\'\"\S\/]|\/(?=\s)))/ : stryMutAct_9fa48("1723") ? /^=\s*([^>\'\"\s]*(?:[>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1722") ? /^=\s*([^>\'\"\S]*(?:[^>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1721") ? /^=\s*([>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1720") ? /^=\s*([^>\'\"\s](?:[^>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1719") ? /^=\S*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1718") ? /^=\s([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/ : stryMutAct_9fa48("1717") ? /=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/ : (stryCov_9fa48("1717", "1718", "1719", "1720", "1721", "1722", "1723", "1724", "1725", "1726"), /^=\s*([^>\'\"\s]*(?:[^>\'\"\s\/]|\/(?=\s)))/)]), stryMutAct_9fa48("1727") ? [] : (stryCov_9fa48("1727"), [L, stryMutAct_9fa48("1730") ? /^[^=<>\/]+/ : stryMutAct_9fa48("1729") ? /^[=<>\/]/ : stryMutAct_9fa48("1728") ? /[=<>\/]+/ : (stryCov_9fa48("1728", "1729", "1730"), /^[=<>\/]+/)]), stryMutAct_9fa48("1731") ? [] : (stryCov_9fa48("1731"), [stryMutAct_9fa48("1732") ? "" : (stryCov_9fa48("1732"), 'lang-js'), stryMutAct_9fa48("1741") ? /^on\w+\s*=\s*\"([\"]+)\"/i : stryMutAct_9fa48("1740") ? /^on\w+\s*=\s*\"([^\"])\"/i : stryMutAct_9fa48("1739") ? /^on\w+\s*=\S*\"([^\"]+)\"/i : stryMutAct_9fa48("1738") ? /^on\w+\s*=\s\"([^\"]+)\"/i : stryMutAct_9fa48("1737") ? /^on\w+\S*=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1736") ? /^on\w+\s=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1735") ? /^on\W+\s*=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1734") ? /^on\w\s*=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1733") ? /on\w+\s*=\s*\"([^\"]+)\"/i : (stryCov_9fa48("1733", "1734", "1735", "1736", "1737", "1738", "1739", "1740", "1741"), /^on\w+\s*=\s*\"([^\"]+)\"/i)]), stryMutAct_9fa48("1742") ? [] : (stryCov_9fa48("1742"), [stryMutAct_9fa48("1743") ? "" : (stryCov_9fa48("1743"), 'lang-js'), stryMutAct_9fa48("1752") ? /^on\w+\s*=\s*\'([\']+)\'/i : stryMutAct_9fa48("1751") ? /^on\w+\s*=\s*\'([^\'])\'/i : stryMutAct_9fa48("1750") ? /^on\w+\s*=\S*\'([^\']+)\'/i : stryMutAct_9fa48("1749") ? /^on\w+\s*=\s\'([^\']+)\'/i : stryMutAct_9fa48("1748") ? /^on\w+\S*=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1747") ? /^on\w+\s=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1746") ? /^on\W+\s*=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1745") ? /^on\w\s*=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1744") ? /on\w+\s*=\s*\'([^\']+)\'/i : (stryCov_9fa48("1744", "1745", "1746", "1747", "1748", "1749", "1750", "1751", "1752"), /^on\w+\s*=\s*\'([^\']+)\'/i)]), stryMutAct_9fa48("1753") ? [] : (stryCov_9fa48("1753"), [stryMutAct_9fa48("1754") ? "" : (stryCov_9fa48("1754"), 'lang-js'), stryMutAct_9fa48("1764") ? /^on\w+\s*=\s*([^\"\'>\S]+)/i : stryMutAct_9fa48("1763") ? /^on\w+\s*=\s*([\"\'>\s]+)/i : stryMutAct_9fa48("1762") ? /^on\w+\s*=\s*([^\"\'>\s])/i : stryMutAct_9fa48("1761") ? /^on\w+\s*=\S*([^\"\'>\s]+)/i : stryMutAct_9fa48("1760") ? /^on\w+\s*=\s([^\"\'>\s]+)/i : stryMutAct_9fa48("1759") ? /^on\w+\S*=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1758") ? /^on\w+\s=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1757") ? /^on\W+\s*=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1756") ? /^on\w\s*=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1755") ? /on\w+\s*=\s*([^\"\'>\s]+)/i : (stryCov_9fa48("1755", "1756", "1757", "1758", "1759", "1760", "1761", "1762", "1763", "1764"), /^on\w+\s*=\s*([^\"\'>\s]+)/i)]), stryMutAct_9fa48("1765") ? [] : (stryCov_9fa48("1765"), [stryMutAct_9fa48("1766") ? "" : (stryCov_9fa48("1766"), 'lang-css'), stryMutAct_9fa48("1773") ? /^style\s*=\s*\"([\"]+)\"/i : stryMutAct_9fa48("1772") ? /^style\s*=\s*\"([^\"])\"/i : stryMutAct_9fa48("1771") ? /^style\s*=\S*\"([^\"]+)\"/i : stryMutAct_9fa48("1770") ? /^style\s*=\s\"([^\"]+)\"/i : stryMutAct_9fa48("1769") ? /^style\S*=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1768") ? /^style\s=\s*\"([^\"]+)\"/i : stryMutAct_9fa48("1767") ? /style\s*=\s*\"([^\"]+)\"/i : (stryCov_9fa48("1767", "1768", "1769", "1770", "1771", "1772", "1773"), /^style\s*=\s*\"([^\"]+)\"/i)]), stryMutAct_9fa48("1774") ? [] : (stryCov_9fa48("1774"), [stryMutAct_9fa48("1775") ? "" : (stryCov_9fa48("1775"), 'lang-css'), stryMutAct_9fa48("1782") ? /^style\s*=\s*\'([\']+)\'/i : stryMutAct_9fa48("1781") ? /^style\s*=\s*\'([^\'])\'/i : stryMutAct_9fa48("1780") ? /^style\s*=\S*\'([^\']+)\'/i : stryMutAct_9fa48("1779") ? /^style\s*=\s\'([^\']+)\'/i : stryMutAct_9fa48("1778") ? /^style\S*=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1777") ? /^style\s=\s*\'([^\']+)\'/i : stryMutAct_9fa48("1776") ? /style\s*=\s*\'([^\']+)\'/i : (stryCov_9fa48("1776", "1777", "1778", "1779", "1780", "1781", "1782"), /^style\s*=\s*\'([^\']+)\'/i)]), stryMutAct_9fa48("1783") ? [] : (stryCov_9fa48("1783"), [stryMutAct_9fa48("1784") ? "" : (stryCov_9fa48("1784"), 'lang-css'), stryMutAct_9fa48("1792") ? /^style\s*=\s*([^\"\'>\S]+)/i : stryMutAct_9fa48("1791") ? /^style\s*=\s*([\"\'>\s]+)/i : stryMutAct_9fa48("1790") ? /^style\s*=\s*([^\"\'>\s])/i : stryMutAct_9fa48("1789") ? /^style\s*=\S*([^\"\'>\s]+)/i : stryMutAct_9fa48("1788") ? /^style\s*=\s([^\"\'>\s]+)/i : stryMutAct_9fa48("1787") ? /^style\S*=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1786") ? /^style\s=\s*([^\"\'>\s]+)/i : stryMutAct_9fa48("1785") ? /style\s*=\s*([^\"\'>\s]+)/i : (stryCov_9fa48("1785", "1786", "1787", "1788", "1789", "1790", "1791", "1792"), /^style\s*=\s*([^\"\'>\s]+)/i)])])), stryMutAct_9fa48("1793") ? [] : (stryCov_9fa48("1793"), [stryMutAct_9fa48("1794") ? "" : (stryCov_9fa48("1794"), 'in.tag')]));
    c(g(stryMutAct_9fa48("1795") ? ["Stryker was here"] : (stryCov_9fa48("1795"), []), stryMutAct_9fa48("1796") ? [] : (stryCov_9fa48("1796"), [stryMutAct_9fa48("1797") ? [] : (stryCov_9fa48("1797"), [n, stryMutAct_9fa48("1802") ? /^[\s\s]+/ : stryMutAct_9fa48("1801") ? /^[\S\S]+/ : stryMutAct_9fa48("1800") ? /^[^\s\S]+/ : stryMutAct_9fa48("1799") ? /^[\s\S]/ : stryMutAct_9fa48("1798") ? /[\s\S]+/ : (stryCov_9fa48("1798", "1799", "1800", "1801", "1802"), /^[\s\S]+/)])])), stryMutAct_9fa48("1803") ? [] : (stryCov_9fa48("1803"), [stryMutAct_9fa48("1804") ? "" : (stryCov_9fa48("1804"), 'uq.val')]));
    c(i(stryMutAct_9fa48("1805") ? {} : (stryCov_9fa48("1805"), {
      keywords: l,
      hashComments: stryMutAct_9fa48("1806") ? false : (stryCov_9fa48("1806"), true),
      cStyleComments: stryMutAct_9fa48("1807") ? false : (stryCov_9fa48("1807"), true),
      types: e
    })), stryMutAct_9fa48("1808") ? [] : (stryCov_9fa48("1808"), [stryMutAct_9fa48("1809") ? "" : (stryCov_9fa48("1809"), 'c'), stryMutAct_9fa48("1810") ? "" : (stryCov_9fa48("1810"), 'cc'), stryMutAct_9fa48("1811") ? "" : (stryCov_9fa48("1811"), 'cpp'), stryMutAct_9fa48("1812") ? "" : (stryCov_9fa48("1812"), 'cxx'), stryMutAct_9fa48("1813") ? "" : (stryCov_9fa48("1813"), 'cyc'), stryMutAct_9fa48("1814") ? "" : (stryCov_9fa48("1814"), 'm')]));
    c(i(stryMutAct_9fa48("1815") ? {} : (stryCov_9fa48("1815"), {
      keywords: stryMutAct_9fa48("1816") ? "" : (stryCov_9fa48("1816"), 'null,true,false')
    })), stryMutAct_9fa48("1817") ? [] : (stryCov_9fa48("1817"), [stryMutAct_9fa48("1818") ? "" : (stryCov_9fa48("1818"), 'json')]));
    c(i(stryMutAct_9fa48("1819") ? {} : (stryCov_9fa48("1819"), {
      keywords: R,
      hashComments: stryMutAct_9fa48("1820") ? false : (stryCov_9fa48("1820"), true),
      cStyleComments: stryMutAct_9fa48("1821") ? false : (stryCov_9fa48("1821"), true),
      verbatimStrings: stryMutAct_9fa48("1822") ? false : (stryCov_9fa48("1822"), true),
      types: e
    })), stryMutAct_9fa48("1823") ? [] : (stryCov_9fa48("1823"), [stryMutAct_9fa48("1824") ? "" : (stryCov_9fa48("1824"), 'cs')]));
    c(i(stryMutAct_9fa48("1825") ? {} : (stryCov_9fa48("1825"), {
      keywords: x,
      cStyleComments: stryMutAct_9fa48("1826") ? false : (stryCov_9fa48("1826"), true)
    })), stryMutAct_9fa48("1827") ? [] : (stryCov_9fa48("1827"), [stryMutAct_9fa48("1828") ? "" : (stryCov_9fa48("1828"), 'java')]));
    c(i(stryMutAct_9fa48("1829") ? {} : (stryCov_9fa48("1829"), {
      keywords: H,
      hashComments: stryMutAct_9fa48("1830") ? false : (stryCov_9fa48("1830"), true),
      multiLineStrings: stryMutAct_9fa48("1831") ? false : (stryCov_9fa48("1831"), true)
    })), stryMutAct_9fa48("1832") ? [] : (stryCov_9fa48("1832"), [stryMutAct_9fa48("1833") ? "" : (stryCov_9fa48("1833"), 'bsh'), stryMutAct_9fa48("1834") ? "" : (stryCov_9fa48("1834"), 'csh'), stryMutAct_9fa48("1835") ? "" : (stryCov_9fa48("1835"), 'sh')]));
    c(i(stryMutAct_9fa48("1836") ? {} : (stryCov_9fa48("1836"), {
      keywords: I,
      hashComments: stryMutAct_9fa48("1837") ? false : (stryCov_9fa48("1837"), true),
      multiLineStrings: stryMutAct_9fa48("1838") ? false : (stryCov_9fa48("1838"), true),
      tripleQuotedStrings: stryMutAct_9fa48("1839") ? false : (stryCov_9fa48("1839"), true)
    })), stryMutAct_9fa48("1840") ? [] : (stryCov_9fa48("1840"), [stryMutAct_9fa48("1841") ? "" : (stryCov_9fa48("1841"), 'cv'), stryMutAct_9fa48("1842") ? "" : (stryCov_9fa48("1842"), 'py')]));
    c(i(stryMutAct_9fa48("1843") ? {} : (stryCov_9fa48("1843"), {
      keywords: s,
      hashComments: stryMutAct_9fa48("1844") ? false : (stryCov_9fa48("1844"), true),
      multiLineStrings: stryMutAct_9fa48("1845") ? false : (stryCov_9fa48("1845"), true),
      regexLiterals: stryMutAct_9fa48("1846") ? false : (stryCov_9fa48("1846"), true)
    })), stryMutAct_9fa48("1847") ? [] : (stryCov_9fa48("1847"), [stryMutAct_9fa48("1848") ? "" : (stryCov_9fa48("1848"), 'perl'), stryMutAct_9fa48("1849") ? "" : (stryCov_9fa48("1849"), 'pl'), stryMutAct_9fa48("1850") ? "" : (stryCov_9fa48("1850"), 'pm')]));
    c(i(stryMutAct_9fa48("1851") ? {} : (stryCov_9fa48("1851"), {
      keywords: f,
      hashComments: stryMutAct_9fa48("1852") ? false : (stryCov_9fa48("1852"), true),
      multiLineStrings: stryMutAct_9fa48("1853") ? false : (stryCov_9fa48("1853"), true),
      regexLiterals: stryMutAct_9fa48("1854") ? false : (stryCov_9fa48("1854"), true)
    })), stryMutAct_9fa48("1855") ? [] : (stryCov_9fa48("1855"), [stryMutAct_9fa48("1856") ? "" : (stryCov_9fa48("1856"), 'rb')]));
    c(i(stryMutAct_9fa48("1857") ? {} : (stryCov_9fa48("1857"), {
      keywords: w,
      cStyleComments: stryMutAct_9fa48("1858") ? false : (stryCov_9fa48("1858"), true),
      regexLiterals: stryMutAct_9fa48("1859") ? false : (stryCov_9fa48("1859"), true)
    })), stryMutAct_9fa48("1860") ? [] : (stryCov_9fa48("1860"), [stryMutAct_9fa48("1861") ? "" : (stryCov_9fa48("1861"), 'js')]));
    c(i(stryMutAct_9fa48("1862") ? {} : (stryCov_9fa48("1862"), {
      keywords: r,
      hashComments: 3,
      cStyleComments: stryMutAct_9fa48("1863") ? false : (stryCov_9fa48("1863"), true),
      multilineStrings: stryMutAct_9fa48("1864") ? false : (stryCov_9fa48("1864"), true),
      tripleQuotedStrings: stryMutAct_9fa48("1865") ? false : (stryCov_9fa48("1865"), true),
      regexLiterals: stryMutAct_9fa48("1866") ? false : (stryCov_9fa48("1866"), true)
    })), stryMutAct_9fa48("1867") ? [] : (stryCov_9fa48("1867"), [stryMutAct_9fa48("1868") ? "" : (stryCov_9fa48("1868"), 'coffee')]));
    c(g(stryMutAct_9fa48("1869") ? ["Stryker was here"] : (stryCov_9fa48("1869"), []), stryMutAct_9fa48("1870") ? [] : (stryCov_9fa48("1870"), [stryMutAct_9fa48("1871") ? [] : (stryCov_9fa48("1871"), [C, stryMutAct_9fa48("1876") ? /^[\s\s]+/ : stryMutAct_9fa48("1875") ? /^[\S\S]+/ : stryMutAct_9fa48("1874") ? /^[^\s\S]+/ : stryMutAct_9fa48("1873") ? /^[\s\S]/ : stryMutAct_9fa48("1872") ? /[\s\S]+/ : (stryCov_9fa48("1872", "1873", "1874", "1875", "1876"), /^[\s\S]+/)])])), stryMutAct_9fa48("1877") ? [] : (stryCov_9fa48("1877"), [stryMutAct_9fa48("1878") ? "" : (stryCov_9fa48("1878"), 'regex')]));
    function d(V) {
      if (stryMutAct_9fa48("1879")) {
        {}
      } else {
        stryCov_9fa48("1879");
        var U = V.langExtension;
        try {
          if (stryMutAct_9fa48("1880")) {
            {}
          } else {
            stryCov_9fa48("1880");
            var S = a(V.sourceNode);
            var T = S.sourceCode;
            V.sourceCode = T;
            V.spans = S.spans;
            V.basePos = 0;
            q(U, T)(V);
            D(V);
          }
        } catch (W) {
          if (stryMutAct_9fa48("1881")) {
            {}
          } else {
            stryCov_9fa48("1881");
            if (stryMutAct_9fa48("1883") ? false : stryMutAct_9fa48("1882") ? true : (stryCov_9fa48("1882", "1883"), (stryMutAct_9fa48("1884") ? "" : (stryCov_9fa48("1884"), 'console')) in window)) {
              if (stryMutAct_9fa48("1885")) {
                {}
              } else {
                stryCov_9fa48("1885");
                console.log((stryMutAct_9fa48("1888") ? W || W.stack : stryMutAct_9fa48("1887") ? false : stryMutAct_9fa48("1886") ? true : (stryCov_9fa48("1886", "1887", "1888"), W && W.stack)) ? W.stack : W);
              }
            }
          }
        }
      }
    }
    function y(W, V, U) {
      if (stryMutAct_9fa48("1889")) {
        {}
      } else {
        stryCov_9fa48("1889");
        var S = document.createElement(stryMutAct_9fa48("1890") ? "" : (stryCov_9fa48("1890"), 'PRE'));
        S.innerHTML = W;
        if (stryMutAct_9fa48("1892") ? false : stryMutAct_9fa48("1891") ? true : (stryCov_9fa48("1891", "1892"), U)) {
          if (stryMutAct_9fa48("1893")) {
            {}
          } else {
            stryCov_9fa48("1893");
            Q(S, U);
          }
        }
        var T = stryMutAct_9fa48("1894") ? {} : (stryCov_9fa48("1894"), {
          langExtension: V,
          numberLines: U,
          sourceNode: S
        });
        d(T);
        return S.innerHTML;
      }
    }
    function b(ad) {
      if (stryMutAct_9fa48("1895")) {
        {}
      } else {
        stryCov_9fa48("1895");
        function Y(af) {
          if (stryMutAct_9fa48("1896")) {
            {}
          } else {
            stryCov_9fa48("1896");
            return document.getElementsByTagName(af);
          }
        }
        var ac = stryMutAct_9fa48("1897") ? [] : (stryCov_9fa48("1897"), [Y(stryMutAct_9fa48("1898") ? "" : (stryCov_9fa48("1898"), 'pre')), Y(stryMutAct_9fa48("1899") ? "" : (stryCov_9fa48("1899"), 'code')), Y(stryMutAct_9fa48("1900") ? "" : (stryCov_9fa48("1900"), 'xmp'))]);
        var T = stryMutAct_9fa48("1901") ? ["Stryker was here"] : (stryCov_9fa48("1901"), []);
        for (var aa = 0; stryMutAct_9fa48("1904") ? aa >= ac.length : stryMutAct_9fa48("1903") ? aa <= ac.length : stryMutAct_9fa48("1902") ? false : (stryCov_9fa48("1902", "1903", "1904"), aa < ac.length); stryMutAct_9fa48("1905") ? --aa : (stryCov_9fa48("1905"), ++aa)) {
          if (stryMutAct_9fa48("1906")) {
            {}
          } else {
            stryCov_9fa48("1906");
            for (var Z = 0, V = ac[aa].length; stryMutAct_9fa48("1909") ? Z >= V : stryMutAct_9fa48("1908") ? Z <= V : stryMutAct_9fa48("1907") ? false : (stryCov_9fa48("1907", "1908", "1909"), Z < V); stryMutAct_9fa48("1910") ? --Z : (stryCov_9fa48("1910"), ++Z)) {
              if (stryMutAct_9fa48("1911")) {
                {}
              } else {
                stryCov_9fa48("1911");
                T.push(ac[aa][Z]);
              }
            }
          }
        }
        ac = null;
        var W = Date;
        if (stryMutAct_9fa48("1914") ? false : stryMutAct_9fa48("1913") ? true : stryMutAct_9fa48("1912") ? W.now : (stryCov_9fa48("1912", "1913", "1914"), !W.now)) {
          if (stryMutAct_9fa48("1915")) {
            {}
          } else {
            stryCov_9fa48("1915");
            W = stryMutAct_9fa48("1916") ? {} : (stryCov_9fa48("1916"), {
              now: function () {
                if (stryMutAct_9fa48("1917")) {
                  {}
                } else {
                  stryCov_9fa48("1917");
                  return stryMutAct_9fa48("1918") ? -new Date() : (stryCov_9fa48("1918"), +new Date());
                }
              }
            });
          }
        }
        var X = 0;
        var S;
        var ab = stryMutAct_9fa48("1924") ? /\blang(?:uage)?-([\w.]+)(?!\s)/ : stryMutAct_9fa48("1923") ? /\blang(?:uage)?-([\w.]+)(?=\S)/ : stryMutAct_9fa48("1922") ? /\blang(?:uage)?-([\W.]+)(?!\S)/ : stryMutAct_9fa48("1921") ? /\blang(?:uage)?-([^\w.]+)(?!\S)/ : stryMutAct_9fa48("1920") ? /\blang(?:uage)?-([\w.])(?!\S)/ : stryMutAct_9fa48("1919") ? /\blang(?:uage)-([\w.]+)(?!\S)/ : (stryCov_9fa48("1919", "1920", "1921", "1922", "1923", "1924"), /\blang(?:uage)?-([\w.]+)(?!\S)/);
        var ae = /\bprettyprint\b/;
        function U() {
          if (stryMutAct_9fa48("1925")) {
            {}
          } else {
            stryCov_9fa48("1925");
            var ag = window.PR_SHOULD_USE_CONTINUATION ? stryMutAct_9fa48("1926") ? W.now() - 250 : (stryCov_9fa48("1926"), W.now() + 250) : Infinity;
            for (; stryMutAct_9fa48("1928") ? X < T.length || W.now() < ag : stryMutAct_9fa48("1927") ? false : (stryCov_9fa48("1927", "1928"), (stryMutAct_9fa48("1931") ? X >= T.length : stryMutAct_9fa48("1930") ? X <= T.length : stryMutAct_9fa48("1929") ? true : (stryCov_9fa48("1929", "1930", "1931"), X < T.length)) && (stryMutAct_9fa48("1934") ? W.now() >= ag : stryMutAct_9fa48("1933") ? W.now() <= ag : stryMutAct_9fa48("1932") ? true : (stryCov_9fa48("1932", "1933", "1934"), W.now() < ag))); stryMutAct_9fa48("1935") ? X-- : (stryCov_9fa48("1935"), X++)) {
              if (stryMutAct_9fa48("1936")) {
                {}
              } else {
                stryCov_9fa48("1936");
                var aj = T[X];
                var ai = aj.className;
                if (stryMutAct_9fa48("1940") ? ai.indexOf('prettyprint') < 0 : stryMutAct_9fa48("1939") ? ai.indexOf('prettyprint') > 0 : stryMutAct_9fa48("1938") ? false : stryMutAct_9fa48("1937") ? true : (stryCov_9fa48("1937", "1938", "1939", "1940"), ai.indexOf(stryMutAct_9fa48("1941") ? "" : (stryCov_9fa48("1941"), 'prettyprint')) >= 0)) {
                  if (stryMutAct_9fa48("1942")) {
                    {}
                  } else {
                    stryCov_9fa48("1942");
                    var ah = ai.match(ab);
                    var am;
                    if (stryMutAct_9fa48("1945") ? !ah && (am = o(aj)) || 'CODE' === am.tagName : stryMutAct_9fa48("1944") ? false : stryMutAct_9fa48("1943") ? true : (stryCov_9fa48("1943", "1944", "1945"), (stryMutAct_9fa48("1947") ? !ah || (am = o(aj)) : stryMutAct_9fa48("1946") ? true : (stryCov_9fa48("1946", "1947"), (stryMutAct_9fa48("1948") ? ah : (stryCov_9fa48("1948"), !ah)) && (am = o(aj)))) && (stryMutAct_9fa48("1950") ? 'CODE' !== am.tagName : stryMutAct_9fa48("1949") ? true : (stryCov_9fa48("1949", "1950"), (stryMutAct_9fa48("1951") ? "" : (stryCov_9fa48("1951"), 'CODE')) === am.tagName)))) {
                      if (stryMutAct_9fa48("1952")) {
                        {}
                      } else {
                        stryCov_9fa48("1952");
                        ah = am.className.match(ab);
                      }
                    }
                    if (stryMutAct_9fa48("1954") ? false : stryMutAct_9fa48("1953") ? true : (stryCov_9fa48("1953", "1954"), ah)) {
                      if (stryMutAct_9fa48("1955")) {
                        {}
                      } else {
                        stryCov_9fa48("1955");
                        ah = ah[1];
                      }
                    }
                    var al = stryMutAct_9fa48("1956") ? true : (stryCov_9fa48("1956"), false);
                    for (var ak = aj.parentNode; stryMutAct_9fa48("1957") ? false : (stryCov_9fa48("1957"), ak); ak = ak.parentNode) {
                      if (stryMutAct_9fa48("1958")) {
                        {}
                      } else {
                        stryCov_9fa48("1958");
                        if (stryMutAct_9fa48("1961") ? (ak.tagName === 'pre' || ak.tagName === 'code' || ak.tagName === 'xmp') && ak.className || ak.className.indexOf('prettyprint') >= 0 : stryMutAct_9fa48("1960") ? false : stryMutAct_9fa48("1959") ? true : (stryCov_9fa48("1959", "1960", "1961"), (stryMutAct_9fa48("1963") ? ak.tagName === 'pre' || ak.tagName === 'code' || ak.tagName === 'xmp' || ak.className : stryMutAct_9fa48("1962") ? true : (stryCov_9fa48("1962", "1963"), (stryMutAct_9fa48("1965") ? (ak.tagName === 'pre' || ak.tagName === 'code') && ak.tagName === 'xmp' : stryMutAct_9fa48("1964") ? true : (stryCov_9fa48("1964", "1965"), (stryMutAct_9fa48("1967") ? ak.tagName === 'pre' && ak.tagName === 'code' : stryMutAct_9fa48("1966") ? false : (stryCov_9fa48("1966", "1967"), (stryMutAct_9fa48("1969") ? ak.tagName !== 'pre' : stryMutAct_9fa48("1968") ? false : (stryCov_9fa48("1968", "1969"), ak.tagName === (stryMutAct_9fa48("1970") ? "" : (stryCov_9fa48("1970"), 'pre')))) || (stryMutAct_9fa48("1972") ? ak.tagName !== 'code' : stryMutAct_9fa48("1971") ? false : (stryCov_9fa48("1971", "1972"), ak.tagName === (stryMutAct_9fa48("1973") ? "" : (stryCov_9fa48("1973"), 'code')))))) || (stryMutAct_9fa48("1975") ? ak.tagName !== 'xmp' : stryMutAct_9fa48("1974") ? false : (stryCov_9fa48("1974", "1975"), ak.tagName === (stryMutAct_9fa48("1976") ? "" : (stryCov_9fa48("1976"), 'xmp')))))) && ak.className)) && (stryMutAct_9fa48("1979") ? ak.className.indexOf('prettyprint') < 0 : stryMutAct_9fa48("1978") ? ak.className.indexOf('prettyprint') > 0 : stryMutAct_9fa48("1977") ? true : (stryCov_9fa48("1977", "1978", "1979"), ak.className.indexOf(stryMutAct_9fa48("1980") ? "" : (stryCov_9fa48("1980"), 'prettyprint')) >= 0)))) {
                          if (stryMutAct_9fa48("1981")) {
                            {}
                          } else {
                            stryCov_9fa48("1981");
                            al = stryMutAct_9fa48("1982") ? false : (stryCov_9fa48("1982"), true);
                            break;
                          }
                        }
                      }
                    }
                    if (stryMutAct_9fa48("1985") ? false : stryMutAct_9fa48("1984") ? true : stryMutAct_9fa48("1983") ? al : (stryCov_9fa48("1983", "1984", "1985"), !al)) {
                      if (stryMutAct_9fa48("1986")) {
                        {}
                      } else {
                        stryCov_9fa48("1986");
                        var af = aj.className.match(stryMutAct_9fa48("1989") ? /\blinenums\b(?::(\D+))?/ : stryMutAct_9fa48("1988") ? /\blinenums\b(?::(\d))?/ : stryMutAct_9fa48("1987") ? /\blinenums\b(?::(\d+))/ : (stryCov_9fa48("1987", "1988", "1989"), /\blinenums\b(?::(\d+))?/));
                        af = af ? (stryMutAct_9fa48("1992") ? af[1] || af[1].length : stryMutAct_9fa48("1991") ? false : stryMutAct_9fa48("1990") ? true : (stryCov_9fa48("1990", "1991", "1992"), af[1] && af[1].length)) ? stryMutAct_9fa48("1993") ? -af[1] : (stryCov_9fa48("1993"), +af[1]) : stryMutAct_9fa48("1994") ? false : (stryCov_9fa48("1994"), true) : stryMutAct_9fa48("1995") ? true : (stryCov_9fa48("1995"), false);
                        if (stryMutAct_9fa48("1997") ? false : stryMutAct_9fa48("1996") ? true : (stryCov_9fa48("1996", "1997"), af)) {
                          if (stryMutAct_9fa48("1998")) {
                            {}
                          } else {
                            stryCov_9fa48("1998");
                            Q(aj, af);
                          }
                        }
                        S = stryMutAct_9fa48("1999") ? {} : (stryCov_9fa48("1999"), {
                          langExtension: ah,
                          sourceNode: aj,
                          numberLines: af
                        });
                        d(S);
                      }
                    }
                  }
                }
              }
            }
            if (stryMutAct_9fa48("2003") ? X >= T.length : stryMutAct_9fa48("2002") ? X <= T.length : stryMutAct_9fa48("2001") ? false : stryMutAct_9fa48("2000") ? true : (stryCov_9fa48("2000", "2001", "2002", "2003"), X < T.length)) {
              if (stryMutAct_9fa48("2004")) {
                {}
              } else {
                stryCov_9fa48("2004");
                setTimeout(U, 250);
              }
            } else {
              if (stryMutAct_9fa48("2005")) {
                {}
              } else {
                stryCov_9fa48("2005");
                if (stryMutAct_9fa48("2007") ? false : stryMutAct_9fa48("2006") ? true : (stryCov_9fa48("2006", "2007"), ad)) {
                  if (stryMutAct_9fa48("2008")) {
                    {}
                  } else {
                    stryCov_9fa48("2008");
                    ad();
                  }
                }
              }
            }
          }
        }
        U();
      }
    }
    window.prettyPrintOne = y;
    window.prettyPrint = b;
    window.PR = stryMutAct_9fa48("2009") ? {} : (stryCov_9fa48("2009"), {
      createSimpleLexer: g,
      registerLangHandler: c,
      sourceDecorator: i,
      PR_ATTRIB_NAME: P,
      PR_ATTRIB_VALUE: n,
      PR_COMMENT: j,
      PR_DECLARATION: E,
      PR_KEYWORD: z,
      PR_LITERAL: G,
      PR_NOCODE: N,
      PR_PLAIN: F,
      PR_PUNCTUATION: L,
      PR_SOURCE: J,
      PR_STRING: C,
      PR_TAG: m,
      PR_TYPE: O
    });
  }
})();
PR.registerLangHandler(PR.createSimpleLexer(stryMutAct_9fa48("2010") ? ["Stryker was here"] : (stryCov_9fa48("2010"), []), stryMutAct_9fa48("2011") ? [] : (stryCov_9fa48("2011"), [stryMutAct_9fa48("2012") ? [] : (stryCov_9fa48("2012"), [PR.PR_DECLARATION, stryMutAct_9fa48("2017") ? /^<!\w[^>]*(?:>)/ : stryMutAct_9fa48("2016") ? /^<!\w[>]*(?:>|$)/ : stryMutAct_9fa48("2015") ? /^<!\w[^>](?:>|$)/ : stryMutAct_9fa48("2014") ? /^<!\W[^>]*(?:>|$)/ : stryMutAct_9fa48("2013") ? /<!\w[^>]*(?:>|$)/ : (stryCov_9fa48("2013", "2014", "2015", "2016", "2017"), /^<!\w[^>]*(?:>|$)/)]), stryMutAct_9fa48("2018") ? [] : (stryCov_9fa48("2018"), [PR.PR_COMMENT, stryMutAct_9fa48("2024") ? /^<\!--[\s\S]*?(?:-\->)/ : stryMutAct_9fa48("2023") ? /^<\!--[\s\s]*?(?:-\->|$)/ : stryMutAct_9fa48("2022") ? /^<\!--[\S\S]*?(?:-\->|$)/ : stryMutAct_9fa48("2021") ? /^<\!--[^\s\S]*?(?:-\->|$)/ : stryMutAct_9fa48("2020") ? /^<\!--[\s\S](?:-\->|$)/ : stryMutAct_9fa48("2019") ? /<\!--[\s\S]*?(?:-\->|$)/ : (stryCov_9fa48("2019", "2020", "2021", "2022", "2023", "2024"), /^<\!--[\s\S]*?(?:-\->|$)/)]), stryMutAct_9fa48("2025") ? [] : (stryCov_9fa48("2025"), [PR.PR_PUNCTUATION, stryMutAct_9fa48("2028") ? /^(?:<[%?]|[^%?]>)/ : stryMutAct_9fa48("2027") ? /^(?:<[^%?]|[%?]>)/ : stryMutAct_9fa48("2026") ? /(?:<[%?]|[%?]>)/ : (stryCov_9fa48("2026", "2027", "2028"), /^(?:<[%?]|[%?]>)/)]), stryMutAct_9fa48("2029") ? [] : (stryCov_9fa48("2029"), [stryMutAct_9fa48("2030") ? "" : (stryCov_9fa48("2030"), 'lang-'), stryMutAct_9fa48("2036") ? /^<\?([\s\S]+?)(?:\?>)/ : stryMutAct_9fa48("2035") ? /^<\?([\s\s]+?)(?:\?>|$)/ : stryMutAct_9fa48("2034") ? /^<\?([\S\S]+?)(?:\?>|$)/ : stryMutAct_9fa48("2033") ? /^<\?([^\s\S]+?)(?:\?>|$)/ : stryMutAct_9fa48("2032") ? /^<\?([\s\S])(?:\?>|$)/ : stryMutAct_9fa48("2031") ? /<\?([\s\S]+?)(?:\?>|$)/ : (stryCov_9fa48("2031", "2032", "2033", "2034", "2035", "2036"), /^<\?([\s\S]+?)(?:\?>|$)/)]), stryMutAct_9fa48("2037") ? [] : (stryCov_9fa48("2037"), [stryMutAct_9fa48("2038") ? "" : (stryCov_9fa48("2038"), 'lang-'), stryMutAct_9fa48("2044") ? /^<%([\s\S]+?)(?:%>)/ : stryMutAct_9fa48("2043") ? /^<%([\s\s]+?)(?:%>|$)/ : stryMutAct_9fa48("2042") ? /^<%([\S\S]+?)(?:%>|$)/ : stryMutAct_9fa48("2041") ? /^<%([^\s\S]+?)(?:%>|$)/ : stryMutAct_9fa48("2040") ? /^<%([\s\S])(?:%>|$)/ : stryMutAct_9fa48("2039") ? /<%([\s\S]+?)(?:%>|$)/ : (stryCov_9fa48("2039", "2040", "2041", "2042", "2043", "2044"), /^<%([\s\S]+?)(?:%>|$)/)]), stryMutAct_9fa48("2045") ? [] : (stryCov_9fa48("2045"), [stryMutAct_9fa48("2046") ? "" : (stryCov_9fa48("2046"), 'lang-'), stryMutAct_9fa48("2055") ? /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[>]*>/i : stryMutAct_9fa48("2054") ? /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]>/i : stryMutAct_9fa48("2053") ? /^<xmp\b[^>]*>([\s\s]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2052") ? /^<xmp\b[^>]*>([\S\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2051") ? /^<xmp\b[^>]*>([^\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2050") ? /^<xmp\b[^>]*>([\s\S])<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2049") ? /^<xmp\b[>]*>([\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2048") ? /^<xmp\b[^>]>([\s\S]+?)<\/xmp\b[^>]*>/i : stryMutAct_9fa48("2047") ? /<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i : (stryCov_9fa48("2047", "2048", "2049", "2050", "2051", "2052", "2053", "2054", "2055"), /^<xmp\b[^>]*>([\s\S]+?)<\/xmp\b[^>]*>/i)]), stryMutAct_9fa48("2056") ? [] : (stryCov_9fa48("2056"), [stryMutAct_9fa48("2057") ? "" : (stryCov_9fa48("2057"), 'lang-handlebars'), stryMutAct_9fa48("2076") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[>]*>)/i : stryMutAct_9fa48("2075") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]>)/i : stryMutAct_9fa48("2074") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\s]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2073") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\S\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2072") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([^\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2071") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S])(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2070") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2069") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2068") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template[^'"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2067") ? /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2066") ? /^<script\b[^>]*type\s*=\s*[^'"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2065") ? /^<script\b[^>]*type\s*=\s*['"]text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2064") ? /^<script\b[^>]*type\s*=\S*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2063") ? /^<script\b[^>]*type\s*=\s['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2062") ? /^<script\b[^>]*type\S*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2061") ? /^<script\b[^>]*type\s=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2060") ? /^<script\b[>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2059") ? /^<script\b[^>]type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2058") ? /<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : (stryCov_9fa48("2058", "2059", "2060", "2061", "2062", "2063", "2064", "2065", "2066", "2067", "2068", "2069", "2070", "2071", "2072", "2073", "2074", "2075", "2076"), /^<script\b[^>]*type\s*=\s*['"]?text\/x-handlebars-template['"]?\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i)]), stryMutAct_9fa48("2077") ? [] : (stryCov_9fa48("2077"), [stryMutAct_9fa48("2078") ? "" : (stryCov_9fa48("2078"), 'lang-js'), stryMutAct_9fa48("2087") ? /^<script\b[^>]*>([\s\S]*?)(<\/script\b[>]*>)/i : stryMutAct_9fa48("2086") ? /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]>)/i : stryMutAct_9fa48("2085") ? /^<script\b[^>]*>([\s\s]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2084") ? /^<script\b[^>]*>([\S\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2083") ? /^<script\b[^>]*>([^\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2082") ? /^<script\b[^>]*>([\s\S])(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2081") ? /^<script\b[>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2080") ? /^<script\b[^>]>([\s\S]*?)(<\/script\b[^>]*>)/i : stryMutAct_9fa48("2079") ? /<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i : (stryCov_9fa48("2079", "2080", "2081", "2082", "2083", "2084", "2085", "2086", "2087"), /^<script\b[^>]*>([\s\S]*?)(<\/script\b[^>]*>)/i)]), stryMutAct_9fa48("2088") ? [] : (stryCov_9fa48("2088"), [stryMutAct_9fa48("2089") ? "" : (stryCov_9fa48("2089"), 'lang-css'), stryMutAct_9fa48("2098") ? /^<style\b[^>]*>([\s\S]*?)(<\/style\b[>]*>)/i : stryMutAct_9fa48("2097") ? /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]>)/i : stryMutAct_9fa48("2096") ? /^<style\b[^>]*>([\s\s]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2095") ? /^<style\b[^>]*>([\S\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2094") ? /^<style\b[^>]*>([^\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2093") ? /^<style\b[^>]*>([\s\S])(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2092") ? /^<style\b[>]*>([\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2091") ? /^<style\b[^>]>([\s\S]*?)(<\/style\b[^>]*>)/i : stryMutAct_9fa48("2090") ? /<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i : (stryCov_9fa48("2090", "2091", "2092", "2093", "2094", "2095", "2096", "2097", "2098"), /^<style\b[^>]*>([\s\S]*?)(<\/style\b[^>]*>)/i)]), stryMutAct_9fa48("2099") ? [] : (stryCov_9fa48("2099"), [stryMutAct_9fa48("2100") ? "" : (stryCov_9fa48("2100"), 'lang-in.tag'), stryMutAct_9fa48("2105") ? /^(<\/?[a-z][<>]*>)/i : stryMutAct_9fa48("2104") ? /^(<\/?[a-z][^<>]>)/i : stryMutAct_9fa48("2103") ? /^(<\/?[^a-z][^<>]*>)/i : stryMutAct_9fa48("2102") ? /^(<\/[a-z][^<>]*>)/i : stryMutAct_9fa48("2101") ? /(<\/?[a-z][^<>]*>)/i : (stryCov_9fa48("2101", "2102", "2103", "2104", "2105"), /^(<\/?[a-z][^<>]*>)/i)]), stryMutAct_9fa48("2106") ? [] : (stryCov_9fa48("2106"), [PR.PR_DECLARATION, stryMutAct_9fa48("2115") ? /^{{[#^>/]?\s*[\w.][}]*}}/ : stryMutAct_9fa48("2114") ? /^{{[#^>/]?\s*[\w.][^}]}}/ : stryMutAct_9fa48("2113") ? /^{{[#^>/]?\s*[\W.][^}]*}}/ : stryMutAct_9fa48("2112") ? /^{{[#^>/]?\s*[^\w.][^}]*}}/ : stryMutAct_9fa48("2111") ? /^{{[#^>/]?\S*[\w.][^}]*}}/ : stryMutAct_9fa48("2110") ? /^{{[#^>/]?\s[\w.][^}]*}}/ : stryMutAct_9fa48("2109") ? /^{{[^#^>/]?\s*[\w.][^}]*}}/ : stryMutAct_9fa48("2108") ? /^{{[#^>/]\s*[\w.][^}]*}}/ : stryMutAct_9fa48("2107") ? /{{[#^>/]?\s*[\w.][^}]*}}/ : (stryCov_9fa48("2107", "2108", "2109", "2110", "2111", "2112", "2113", "2114", "2115"), /^{{[#^>/]?\s*[\w.][^}]*}}/)]), stryMutAct_9fa48("2116") ? [] : (stryCov_9fa48("2116"), [PR.PR_DECLARATION, stryMutAct_9fa48("2124") ? /^{{&?\s*[\w.][}]*}}/ : stryMutAct_9fa48("2123") ? /^{{&?\s*[\w.][^}]}}/ : stryMutAct_9fa48("2122") ? /^{{&?\s*[\W.][^}]*}}/ : stryMutAct_9fa48("2121") ? /^{{&?\s*[^\w.][^}]*}}/ : stryMutAct_9fa48("2120") ? /^{{&?\S*[\w.][^}]*}}/ : stryMutAct_9fa48("2119") ? /^{{&?\s[\w.][^}]*}}/ : stryMutAct_9fa48("2118") ? /^{{&\s*[\w.][^}]*}}/ : stryMutAct_9fa48("2117") ? /{{&?\s*[\w.][^}]*}}/ : (stryCov_9fa48("2117", "2118", "2119", "2120", "2121", "2122", "2123", "2124"), /^{{&?\s*[\w.][^}]*}}/)]), stryMutAct_9fa48("2125") ? [] : (stryCov_9fa48("2125"), [PR.PR_DECLARATION, stryMutAct_9fa48("2133") ? /^{{{>?\s*[\w.][}]*}}}/ : stryMutAct_9fa48("2132") ? /^{{{>?\s*[\w.][^}]}}}/ : stryMutAct_9fa48("2131") ? /^{{{>?\s*[\W.][^}]*}}}/ : stryMutAct_9fa48("2130") ? /^{{{>?\s*[^\w.][^}]*}}}/ : stryMutAct_9fa48("2129") ? /^{{{>?\S*[\w.][^}]*}}}/ : stryMutAct_9fa48("2128") ? /^{{{>?\s[\w.][^}]*}}}/ : stryMutAct_9fa48("2127") ? /^{{{>\s*[\w.][^}]*}}}/ : stryMutAct_9fa48("2126") ? /{{{>?\s*[\w.][^}]*}}}/ : (stryCov_9fa48("2126", "2127", "2128", "2129", "2130", "2131", "2132", "2133"), /^{{{>?\s*[\w.][^}]*}}}/)]), stryMutAct_9fa48("2134") ? [] : (stryCov_9fa48("2134"), [PR.PR_COMMENT, stryMutAct_9fa48("2137") ? /^{{![}]*}}/ : stryMutAct_9fa48("2136") ? /^{{![^}]}}/ : stryMutAct_9fa48("2135") ? /{{![^}]*}}/ : (stryCov_9fa48("2135", "2136", "2137"), /^{{![^}]*}}/)])])), stryMutAct_9fa48("2138") ? [] : (stryCov_9fa48("2138"), [stryMutAct_9fa48("2139") ? "" : (stryCov_9fa48("2139"), 'handlebars'), stryMutAct_9fa48("2140") ? "" : (stryCov_9fa48("2140"), 'hbs')]));
PR.registerLangHandler(PR.createSimpleLexer(stryMutAct_9fa48("2141") ? [] : (stryCov_9fa48("2141"), [stryMutAct_9fa48("2142") ? [] : (stryCov_9fa48("2142"), [PR.PR_PLAIN, stryMutAct_9fa48("2145") ? /^[^ \t\r\n\f]+/ : stryMutAct_9fa48("2144") ? /^[ \t\r\n\f]/ : stryMutAct_9fa48("2143") ? /[ \t\r\n\f]+/ : (stryCov_9fa48("2143", "2144", "2145"), /^[ \t\r\n\f]+/), null, stryMutAct_9fa48("2146") ? "" : (stryCov_9fa48("2146"), ' \t\r\n\f')])]), stryMutAct_9fa48("2147") ? [] : (stryCov_9fa48("2147"), [stryMutAct_9fa48("2148") ? [] : (stryCov_9fa48("2148"), [PR.PR_STRING, stryMutAct_9fa48("2155") ? /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\s])*\"/ : stryMutAct_9fa48("2154") ? /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\S\S])*\"/ : stryMutAct_9fa48("2153") ? /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[^\s\S])*\"/ : stryMutAct_9fa48("2152") ? /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n|\n|\f)|\\[\s\S])*\"/ : stryMutAct_9fa48("2151") ? /^\"(?:[\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/ : stryMutAct_9fa48("2150") ? /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])\"/ : stryMutAct_9fa48("2149") ? /\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/ : (stryCov_9fa48("2149", "2150", "2151", "2152", "2153", "2154", "2155"), /^\"(?:[^\n\r\f\\\"]|\\(?:\r\n?|\n|\f)|\\[\s\S])*\"/), null]), stryMutAct_9fa48("2156") ? [] : (stryCov_9fa48("2156"), [PR.PR_STRING, stryMutAct_9fa48("2163") ? /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\s])*\'/ : stryMutAct_9fa48("2162") ? /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\S\S])*\'/ : stryMutAct_9fa48("2161") ? /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[^\s\S])*\'/ : stryMutAct_9fa48("2160") ? /^\'(?:[^\n\r\f\\\']|\\(?:\r\n|\n|\f)|\\[\s\S])*\'/ : stryMutAct_9fa48("2159") ? /^\'(?:[\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/ : stryMutAct_9fa48("2158") ? /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])\'/ : stryMutAct_9fa48("2157") ? /\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/ : (stryCov_9fa48("2157", "2158", "2159", "2160", "2161", "2162", "2163"), /^\'(?:[^\n\r\f\\\']|\\(?:\r\n?|\n|\f)|\\[\s\S])*\'/), null]), stryMutAct_9fa48("2164") ? [] : (stryCov_9fa48("2164"), [stryMutAct_9fa48("2165") ? "" : (stryCov_9fa48("2165"), 'lang-css-str'), stryMutAct_9fa48("2168") ? /^url\(([\)\"\']*)\)/i : stryMutAct_9fa48("2167") ? /^url\(([^\)\"\'])\)/i : stryMutAct_9fa48("2166") ? /url\(([^\)\"\']*)\)/i : (stryCov_9fa48("2166", "2167", "2168"), /^url\(([^\)\"\']*)\)/i)]), stryMutAct_9fa48("2169") ? [] : (stryCov_9fa48("2169"), [PR.PR_KEYWORD, stryMutAct_9fa48("2174") ? /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\W]|$)/i : stryMutAct_9fa48("2173") ? /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[\-\w]|$)/i : stryMutAct_9fa48("2172") ? /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w])/i : stryMutAct_9fa48("2171") ? /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?![^\-\w]|$)/i : stryMutAct_9fa48("2170") ? /(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i : (stryCov_9fa48("2170", "2171", "2172", "2173", "2174"), /^(?:url|rgb|\!important|@import|@page|@media|@charset|inherit)(?=[^\-\w]|$)/i), null]), stryMutAct_9fa48("2175") ? [] : (stryCov_9fa48("2175"), [stryMutAct_9fa48("2176") ? "" : (stryCov_9fa48("2176"), 'lang-css-kw'), stryMutAct_9fa48("2189") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\S*:/i : stryMutAct_9fa48("2188") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s:/i : stryMutAct_9fa48("2187") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ))*)\s*:/i : stryMutAct_9fa48("2186") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[^0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2185") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f] ?))*)\s*:/i : stryMutAct_9fa48("2184") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[^_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2183") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?)))\s*:/i : stryMutAct_9fa48("2182") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2181") ? /^(-?(?:[_a-z]|(?:\\[^0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2180") ? /^(-?(?:[_a-z]|(?:\\[0-9a-f] ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2179") ? /^(-?(?:[^_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2178") ? /^(-(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : stryMutAct_9fa48("2177") ? /(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i : (stryCov_9fa48("2177", "2178", "2179", "2180", "2181", "2182", "2183", "2184", "2185", "2186", "2187", "2188", "2189"), /^(-?(?:[_a-z]|(?:\\[0-9a-f]+ ?))(?:[_a-z0-9\-]|\\(?:\\[0-9a-f]+ ?))*)\s*:/i)]), stryMutAct_9fa48("2190") ? [] : (stryCov_9fa48("2190"), [PR.PR_COMMENT, stryMutAct_9fa48("2199") ? /^\/\*[^*]*\*+(?:[^\/*][^*]*\*)*\// : stryMutAct_9fa48("2198") ? /^\/\*[^*]*\*+(?:[^\/*][*]*\*+)*\// : stryMutAct_9fa48("2197") ? /^\/\*[^*]*\*+(?:[^\/*][^*]\*+)*\// : stryMutAct_9fa48("2196") ? /^\/\*[^*]*\*+(?:[\/*][^*]*\*+)*\// : stryMutAct_9fa48("2195") ? /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)\// : stryMutAct_9fa48("2194") ? /^\/\*[^*]*\*(?:[^\/*][^*]*\*+)*\// : stryMutAct_9fa48("2193") ? /^\/\*[*]*\*+(?:[^\/*][^*]*\*+)*\// : stryMutAct_9fa48("2192") ? /^\/\*[^*]\*+(?:[^\/*][^*]*\*+)*\// : stryMutAct_9fa48("2191") ? /\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\// : (stryCov_9fa48("2191", "2192", "2193", "2194", "2195", "2196", "2197", "2198", "2199"), /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//)]), stryMutAct_9fa48("2200") ? [] : (stryCov_9fa48("2200"), [PR.PR_COMMENT, stryMutAct_9fa48("2201") ? /(?:<!--|-->)/ : (stryCov_9fa48("2201"), /^(?:<!--|-->)/)]), stryMutAct_9fa48("2202") ? [] : (stryCov_9fa48("2202"), [PR.PR_LITERAL, stryMutAct_9fa48("2212") ? /^(?:\d+|\d*\.\d+)(?:%|[^a-z]+)?/i : stryMutAct_9fa48("2211") ? /^(?:\d+|\d*\.\d+)(?:%|[a-z])?/i : stryMutAct_9fa48("2210") ? /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)/i : stryMutAct_9fa48("2209") ? /^(?:\d+|\d*\.\D+)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2208") ? /^(?:\d+|\d*\.\d)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2207") ? /^(?:\d+|\D*\.\d+)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2206") ? /^(?:\d+|\d\.\d+)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2205") ? /^(?:\D+|\d*\.\d+)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2204") ? /^(?:\d|\d*\.\d+)(?:%|[a-z]+)?/i : stryMutAct_9fa48("2203") ? /(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i : (stryCov_9fa48("2203", "2204", "2205", "2206", "2207", "2208", "2209", "2210", "2211", "2212"), /^(?:\d+|\d*\.\d+)(?:%|[a-z]+)?/i)]), stryMutAct_9fa48("2213") ? [] : (stryCov_9fa48("2213"), [PR.PR_LITERAL, stryMutAct_9fa48("2217") ? /^#(?:[^0-9a-f]{3}){1,2}/i : stryMutAct_9fa48("2216") ? /^#(?:[0-9a-f]){1,2}/i : stryMutAct_9fa48("2215") ? /^#(?:[0-9a-f]{3})/i : stryMutAct_9fa48("2214") ? /#(?:[0-9a-f]{3}){1,2}/i : (stryCov_9fa48("2214", "2215", "2216", "2217"), /^#(?:[0-9a-f]{3}){1,2}/i)]), stryMutAct_9fa48("2218") ? [] : (stryCov_9fa48("2218"), [PR.PR_PLAIN, stryMutAct_9fa48("2232") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ))*/i : stryMutAct_9fa48("2231") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\Da-f]+ ?))*/i : stryMutAct_9fa48("2230") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[^\da-f]+ ?))*/i : stryMutAct_9fa48("2229") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f] ?))*/i : stryMutAct_9fa48("2228") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\D\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2227") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[^_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2226") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))/i : stryMutAct_9fa48("2225") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2224") ? /^-?(?:[_a-z]|(?:\\[\Da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2223") ? /^-?(?:[_a-z]|(?:\\[^\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2222") ? /^-?(?:[_a-z]|(?:\\[\da-f] ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2221") ? /^-?(?:[^_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2220") ? /^-(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2219") ? /-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : (stryCov_9fa48("2219", "2220", "2221", "2222", "2223", "2224", "2225", "2226", "2227", "2228", "2229", "2230", "2231", "2232"), /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i)]), stryMutAct_9fa48("2233") ? [] : (stryCov_9fa48("2233"), [PR.PR_PUNCTUATION, stryMutAct_9fa48("2238") ? /^[^\s\W\'\"]+/ : stryMutAct_9fa48("2237") ? /^[^\S\w\'\"]+/ : stryMutAct_9fa48("2236") ? /^[\s\w\'\"]+/ : stryMutAct_9fa48("2235") ? /^[^\s\w\'\"]/ : stryMutAct_9fa48("2234") ? /[^\s\w\'\"]+/ : (stryCov_9fa48("2234", "2235", "2236", "2237", "2238"), /^[^\s\w\'\"]+/)])])), stryMutAct_9fa48("2239") ? [] : (stryCov_9fa48("2239"), [stryMutAct_9fa48("2240") ? "" : (stryCov_9fa48("2240"), 'css')]));
PR.registerLangHandler(PR.createSimpleLexer(stryMutAct_9fa48("2241") ? ["Stryker was here"] : (stryCov_9fa48("2241"), []), stryMutAct_9fa48("2242") ? [] : (stryCov_9fa48("2242"), [stryMutAct_9fa48("2243") ? [] : (stryCov_9fa48("2243"), [PR.PR_KEYWORD, stryMutAct_9fa48("2257") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ))*/i : stryMutAct_9fa48("2256") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\Da-f]+ ?))*/i : stryMutAct_9fa48("2255") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[^\da-f]+ ?))*/i : stryMutAct_9fa48("2254") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f] ?))*/i : stryMutAct_9fa48("2253") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\D\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2252") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[^_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2251") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))/i : stryMutAct_9fa48("2250") ? /^-?(?:[_a-z]|(?:\\[\da-f]+ ))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2249") ? /^-?(?:[_a-z]|(?:\\[\Da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2248") ? /^-?(?:[_a-z]|(?:\\[^\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2247") ? /^-?(?:[_a-z]|(?:\\[\da-f] ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2246") ? /^-?(?:[^_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2245") ? /^-(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : stryMutAct_9fa48("2244") ? /-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i : (stryCov_9fa48("2244", "2245", "2246", "2247", "2248", "2249", "2250", "2251", "2252", "2253", "2254", "2255", "2256", "2257"), /^-?(?:[_a-z]|(?:\\[\da-f]+ ?))(?:[_a-z\d\-]|\\(?:\\[\da-f]+ ?))*/i)])])), stryMutAct_9fa48("2258") ? [] : (stryCov_9fa48("2258"), [stryMutAct_9fa48("2259") ? "" : (stryCov_9fa48("2259"), 'css-kw')]));
PR.registerLangHandler(PR.createSimpleLexer(stryMutAct_9fa48("2260") ? ["Stryker was here"] : (stryCov_9fa48("2260"), []), stryMutAct_9fa48("2261") ? [] : (stryCov_9fa48("2261"), [stryMutAct_9fa48("2262") ? [] : (stryCov_9fa48("2262"), [PR.PR_STRING, stryMutAct_9fa48("2265") ? /^[\)\"\']+/ : stryMutAct_9fa48("2264") ? /^[^\)\"\']/ : stryMutAct_9fa48("2263") ? /[^\)\"\']+/ : (stryCov_9fa48("2263", "2264", "2265"), /^[^\)\"\']+/)])])), stryMutAct_9fa48("2266") ? [] : (stryCov_9fa48("2266"), [stryMutAct_9fa48("2267") ? "" : (stryCov_9fa48("2267"), 'css-str')]));