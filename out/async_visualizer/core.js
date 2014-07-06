// Compiled by ClojureScript 0.0-2173
goog.provide('async_visualizer.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('om.dom');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.channels');
cljs.core.enable_console_print_BANG_.call(null);
async_visualizer.core.css_transition_group = ((React["addons"])["CSSTransitionGroup"]);
async_visualizer.core._STAR_unique_id_STAR_ = 0;
async_visualizer.core.uid = (function uid(){return async_visualizer.core._STAR_unique_id_STAR_ = (async_visualizer.core._STAR_unique_id_STAR_ + 1);
});
async_visualizer.core.dot = (function() {
var dot = null;
var dot__1 = (function (color){return dot.call(null,color,async_visualizer.core.uid.call(null));
});
var dot__2 = (function (color,uid){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),color,new cljs.core.Keyword(null,"uid","uid",1014020034),uid], null);
});
dot = function(color,uid){
switch(arguments.length){
case 1:
return dot__1.call(this,color);
case 2:
return dot__2.call(this,color,uid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dot.cljs$core$IFn$_invoke$arity$1 = dot__1;
dot.cljs$core$IFn$_invoke$arity$2 = dot__2;
return dot;
})()
;
async_visualizer.core.XRay = (function (){var obj22988 = {};return obj22988;
})();
async_visualizer.core.reveal = (function reveal(item){if((function (){var and__3431__auto__ = item;if(and__3431__auto__)
{return item.async_visualizer$core$XRay$reveal$arity$1;
} else
{return and__3431__auto__;
}
})())
{return item.async_visualizer$core$XRay$reveal$arity$1(item);
} else
{var x__4070__auto__ = (((item == null))?null:item);return (function (){var or__3443__auto__ = (async_visualizer.core.reveal[goog.typeOf(x__4070__auto__)]);if(or__3443__auto__)
{return or__3443__auto__;
} else
{var or__3443__auto____$1 = (async_visualizer.core.reveal["_"]);if(or__3443__auto____$1)
{return or__3443__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"XRay.reveal",item);
}
}
})().call(null,item);
}
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.async_visualizer$core$XRay$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (c){var c__$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"puts","puts",1017356982),cljs.core.map.call(null,(function (p1__22989_SHARP_){return p1__22989_SHARP_.val;
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,async_visualizer.core.reveal.call(null,c__$1.puts))),new cljs.core.Keyword(null,"takes","takes",1124028478),cljs.core.map.call(null,(function (i){return async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"sleeping","sleeping",3923007773),cljs.core.hash.call(null,i));
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,async_visualizer.core.reveal.call(null,c__$1.takes))),new cljs.core.Keyword(null,"buf","buf",1014002149),(cljs.core.truth_(c__$1.buf)?cljs.core.remove.call(null,cljs.core.nil_QMARK_,async_visualizer.core.reveal.call(null,c__$1.buf)):null)], null);
});
cljs.core.async.impl.buffers.RingBuffer.prototype.async_visualizer$core$XRay$ = true;
cljs.core.async.impl.buffers.RingBuffer.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (buf){var buf__$1 = this;var head = buf__$1.head;var tail = buf__$1.tail;var arr = buf__$1.arr;if((tail < head))
{return cljs.core.take.call(null,head,cljs.core.drop.call(null,tail,arr));
} else
{if((tail >= head))
{return cljs.core.concat.call(null,cljs.core.drop.call(null,tail,arr),cljs.core.take.call(null,head,arr));
} else
{return null;
}
}
});
cljs.core.async.impl.buffers.SlidingBuffer.prototype.async_visualizer$core$XRay$ = true;
cljs.core.async.impl.buffers.SlidingBuffer.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (buf){var buf__$1 = this;return async_visualizer.core.reveal.call(null,buf__$1.buf);
});
cljs.core.async.impl.buffers.FixedBuffer.prototype.async_visualizer$core$XRay$ = true;
cljs.core.async.impl.buffers.FixedBuffer.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (buf){var buf__$1 = this;return async_visualizer.core.reveal.call(null,buf__$1.buf);
});
cljs.core.async.impl.buffers.DroppingBuffer.prototype.async_visualizer$core$XRay$ = true;
cljs.core.async.impl.buffers.DroppingBuffer.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (buf){var buf__$1 = this;return async_visualizer.core.reveal.call(null,buf__$1.buf);
});
async_visualizer.core.color = (function color(color__$1,owner){if(typeof async_visualizer.core.t22993 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t22993 = (function (owner,color,meta22994){
this.owner = owner;
this.color = color;
this.meta22994 = meta22994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t22993.cljs$lang$type = true;
async_visualizer.core.t22993.cljs$lang$ctorStr = "async-visualizer.core/t22993";
async_visualizer.core.t22993.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t22993");
});
async_visualizer.core.t22993.prototype.om$core$IRender$ = true;
async_visualizer.core.t22993.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;var c = (function (){var or__3443__auto__ = new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(self__.color);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return self__.color;
}
})();return React.DOM.i({"className": [cljs.core.str("dot "),cljs.core.str(cljs.core.name.call(null,c))].join('')},"");
});
async_visualizer.core.t22993.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22995){var self__ = this;
var _22995__$1 = this;return self__.meta22994;
});
async_visualizer.core.t22993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22995,meta22994__$1){var self__ = this;
var _22995__$1 = this;return (new async_visualizer.core.t22993(self__.owner,self__.color,meta22994__$1));
});
async_visualizer.core.__GT_t22993 = (function __GT_t22993(owner__$1,color__$2,meta22994){return (new async_visualizer.core.t22993(owner__$1,color__$2,meta22994));
});
}
return (new async_visualizer.core.t22993(owner,color__$1,null));
});
async_visualizer.core.dot_group = (function dot_group(buf,owner){if(typeof async_visualizer.core.t23000 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t23000 = (function (owner,buf,dot_group,meta23001){
this.owner = owner;
this.buf = buf;
this.dot_group = dot_group;
this.meta23001 = meta23001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t23000.cljs$lang$type = true;
async_visualizer.core.t23000.cljs$lang$ctorStr = "async-visualizer.core/t23000";
async_visualizer.core.t23000.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t23000");
});
async_visualizer.core.t23000.prototype.om$core$IRender$ = true;
async_visualizer.core.t23000.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;return async_visualizer.core.css_transition_group.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"buffer",new cljs.core.Keyword(null,"transitionName","transitionName",3305020658),"dots",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.reverse.call(null,cljs.core.map.call(null,(function (p1__22996_SHARP_){return om.core.build.call(null,async_visualizer.core.color,p1__22996_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"react-key","react-key",4184082563),(function (){var or__3443__auto__ = new cljs.core.Keyword(null,"uid","uid",1014020034).cljs$core$IFn$_invoke$arity$1(p1__22996_SHARP_);if(cljs.core.truth_(or__3443__auto__))
{return or__3443__auto__;
} else
{return async_visualizer.core.uid.call(null);
}
})()], null));
}),self__.buf))], null)));
});
async_visualizer.core.t23000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23002){var self__ = this;
var _23002__$1 = this;return self__.meta23001;
});
async_visualizer.core.t23000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23002,meta23001__$1){var self__ = this;
var _23002__$1 = this;return (new async_visualizer.core.t23000(self__.owner,self__.buf,self__.dot_group,meta23001__$1));
});
async_visualizer.core.__GT_t23000 = (function __GT_t23000(owner__$1,buf__$1,dot_group__$1,meta23001){return (new async_visualizer.core.t23000(owner__$1,buf__$1,dot_group__$1,meta23001));
});
}
return (new async_visualizer.core.t23000(owner,buf,dot_group,null));
});
async_visualizer.core.channel = (function channel(ch,owner){if(typeof async_visualizer.core.t23006 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t23006 = (function (owner,ch,channel,meta23007){
this.owner = owner;
this.ch = ch;
this.channel = channel;
this.meta23007 = meta23007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t23006.cljs$lang$type = true;
async_visualizer.core.t23006.cljs$lang$ctorStr = "async-visualizer.core/t23006";
async_visualizer.core.t23006.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t23006");
});
async_visualizer.core.t23006.prototype.om$core$IRender$ = true;
async_visualizer.core.t23006.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;return React.DOM.div({"className": "channel"},React.DOM.div(null,"P",om.core.build.call(null,async_visualizer.core.dot_group,new cljs.core.Keyword(null,"puts","puts",1017356982).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"B",om.core.build.call(null,async_visualizer.core.dot_group,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"T",om.core.build.call(null,async_visualizer.core.dot_group,new cljs.core.Keyword(null,"takes","takes",1124028478).cljs$core$IFn$_invoke$arity$1(self__.ch))));
});
async_visualizer.core.t23006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23008){var self__ = this;
var _23008__$1 = this;return self__.meta23007;
});
async_visualizer.core.t23006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23008,meta23007__$1){var self__ = this;
var _23008__$1 = this;return (new async_visualizer.core.t23006(self__.owner,self__.ch,self__.channel,meta23007__$1));
});
async_visualizer.core.__GT_t23006 = (function __GT_t23006(owner__$1,ch__$1,channel__$1,meta23007){return (new async_visualizer.core.t23006(owner__$1,ch__$1,channel__$1,meta23007));
});
}
return (new async_visualizer.core.t23006(owner,ch,channel,null));
});
async_visualizer.core.example_one = (function example_one(data,owner){if(typeof async_visualizer.core.t23034 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t23034 = (function (owner,data,example_one,meta23035){
this.owner = owner;
this.data = data;
this.example_one = example_one;
this.meta23035 = meta23035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t23034.cljs$lang$type = true;
async_visualizer.core.t23034.cljs$lang$ctorStr = "async-visualizer.core/t23034";
async_visualizer.core.t23034.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t23034");
});
async_visualizer.core.t23034.prototype.om$core$IRenderState$ = true;
async_visualizer.core.t23034.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(self__.data);var res = new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(state);return React.DOM.div({"className": "example-root"},React.DOM.div({"className": "controls"},React.DOM.button({"onClick": (function (___$2){cljs.core.async.put_BANG_.call(null,ch,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"red","red",1014017027)));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"red","red",1014017027)))))," ",React.DOM.button({"onClick": (function (___$2){cljs.core.async.put_BANG_.call(null,ch,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"blue","blue",1016931276)));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"blue","blue",1016931276)))))),om.core.build.call(null,async_visualizer.core.dot_group,res));
});
async_visualizer.core.t23034.prototype.om$core$IWillMount$ = true;
async_visualizer.core.t23034.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(self__.data);var c__6237__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6238__auto__ = (function (){var switch__6222__auto__ = (function (state_23047){var state_val_23048 = (state_23047[1]);if((state_val_23048 === 4))
{var inst_23039 = (state_23047[2]);var inst_23040 = [inst_23039];var inst_23041 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_23040,null));var inst_23042 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"result","result",4374444943),inst_23041);var state_23047__$1 = (function (){var statearr_23049 = state_23047;(statearr_23049[7] = inst_23042);
return statearr_23049;
})();var statearr_23050_23059 = state_23047__$1;(statearr_23050_23059[2] = null);
(statearr_23050_23059[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_23048 === 3))
{var inst_23045 = (state_23047[2]);var state_23047__$1 = state_23047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23047__$1,inst_23045);
} else
{if((state_val_23048 === 2))
{var state_23047__$1 = state_23047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23047__$1,4,ch);
} else
{if((state_val_23048 === 1))
{var state_23047__$1 = state_23047;var statearr_23051_23060 = state_23047__$1;(statearr_23051_23060[2] = null);
(statearr_23051_23060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6222__auto__){
return (function() {
var state_machine__6223__auto__ = null;
var state_machine__6223__auto____0 = (function (){var statearr_23055 = [null,null,null,null,null,null,null,null];(statearr_23055[0] = state_machine__6223__auto__);
(statearr_23055[1] = 1);
return statearr_23055;
});
var state_machine__6223__auto____1 = (function (state_23047){while(true){
var ret_value__6224__auto__ = (function (){try{while(true){
var result__6225__auto__ = switch__6222__auto__.call(null,state_23047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6225__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6225__auto__;
}
break;
}
}catch (e23056){if((e23056 instanceof Object))
{var ex__6226__auto__ = e23056;var statearr_23057_23061 = state_23047;(statearr_23057_23061[5] = ex__6226__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e23056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6224__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__23062 = state_23047;
state_23047 = G__23062;
continue;
}
} else
{return ret_value__6224__auto__;
}
break;
}
});
state_machine__6223__auto__ = function(state_23047){
switch(arguments.length){
case 0:
return state_machine__6223__auto____0.call(this);
case 1:
return state_machine__6223__auto____1.call(this,state_23047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6223__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6223__auto____0;
state_machine__6223__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6223__auto____1;
return state_machine__6223__auto__;
})()
;})(switch__6222__auto__))
})();var state__6239__auto__ = (function (){var statearr_23058 = f__6238__auto__.call(null);(statearr_23058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6237__auto__);
return statearr_23058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6239__auto__);
}));
return c__6237__auto__;
});
async_visualizer.core.t23034.prototype.om$core$IInitState$ = true;
async_visualizer.core.t23034.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",4374444943),cljs.core.PersistentVector.EMPTY], null);
});
async_visualizer.core.t23034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23036){var self__ = this;
var _23036__$1 = this;return self__.meta23035;
});
async_visualizer.core.t23034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23036,meta23035__$1){var self__ = this;
var _23036__$1 = this;return (new async_visualizer.core.t23034(self__.owner,self__.data,self__.example_one,meta23035__$1));
});
async_visualizer.core.__GT_t23034 = (function __GT_t23034(owner__$1,data__$1,example_one__$1,meta23035){return (new async_visualizer.core.t23034(owner__$1,data__$1,example_one__$1,meta23035));
});
}
return (new async_visualizer.core.t23034(owner,data,example_one,null));
});
om.core.root.call(null,async_visualizer.core.example_one,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",1013907415),cljs.core.async.chan.call(null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.querySelector(".example-one")], null));
async_visualizer.core.example_two = (function example_two(data,owner){if(typeof async_visualizer.core.t23067 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t23067 = (function (owner,data,example_two,meta23068){
this.owner = owner;
this.data = data;
this.example_two = example_two;
this.meta23068 = meta23068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t23067.cljs$lang$type = true;
async_visualizer.core.t23067.cljs$lang$ctorStr = "async-visualizer.core/t23067";
async_visualizer.core.t23067.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t23067");
});
async_visualizer.core.t23067.prototype.om$core$IRender$ = true;
async_visualizer.core.t23067.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"className": "example-root"},React.DOM.div({"className": "controls"},React.DOM.button({"onClick": (function (_){cljs.core.async.put_BANG_.call(null,ch,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"red","red",1014017027)));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"red","red",1014017027)))))," ",React.DOM.button({"onClick": (function (_){cljs.core.async.put_BANG_.call(null,ch,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"blue","blue",1016931276)));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,async_visualizer.core.dot.call(null,new cljs.core.Keyword(null,"blue","blue",1016931276)))))),React.DOM.div({"className": "channel-container"},om.core.build.call(null,async_visualizer.core.channel,async_visualizer.core.reveal.call(null,ch))),React.DOM.div({"className": "controls"},React.DOM.button({"onClick": (function (_){cljs.core.async.take_BANG_.call(null,ch,(function (p1__23063_SHARP_){return cljs.core.prn.call(null,p1__23063_SHARP_);
}));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,"<! ch"))));
});
async_visualizer.core.t23067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23069){var self__ = this;
var _23069__$1 = this;return self__.meta23068;
});
async_visualizer.core.t23067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23069,meta23068__$1){var self__ = this;
var _23069__$1 = this;return (new async_visualizer.core.t23067(self__.owner,self__.data,self__.example_two,meta23068__$1));
});
async_visualizer.core.__GT_t23067 = (function __GT_t23067(owner__$1,data__$1,example_two__$1,meta23068){return (new async_visualizer.core.t23067(owner__$1,data__$1,example_two__$1,meta23068));
});
}
return (new async_visualizer.core.t23067(owner,data,example_two,null));
});
om.core.root.call(null,async_visualizer.core.example_two,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",1013907415),cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,5))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.querySelector(".example-two")], null));

//# sourceMappingURL=core.js.map