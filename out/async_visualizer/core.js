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
async_visualizer.core.XRay = (function (){var obj9273 = {};return obj9273;
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
cljs.core.async.impl.channels.ManyToManyChannel.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (c){var c__$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"puts","puts",1017356982),cljs.core.map.call(null,(function (p1__9274_SHARP_){return p1__9274_SHARP_.val;
}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,async_visualizer.core.reveal.call(null,c__$1.puts))),new cljs.core.Keyword(null,"takes","takes",1124028478),cljs.core.map.call(null,(function (_){return new cljs.core.Keyword(null,"sleeping","sleeping",3923007773);
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
async_visualizer.core.color = (function color(color__$1,owner){if(typeof async_visualizer.core.t9278 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t9278 = (function (owner,color,meta9279){
this.owner = owner;
this.color = color;
this.meta9279 = meta9279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t9278.cljs$lang$type = true;
async_visualizer.core.t9278.cljs$lang$ctorStr = "async-visualizer.core/t9278";
async_visualizer.core.t9278.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t9278");
});
async_visualizer.core.t9278.prototype.om$core$IRender$ = true;
async_visualizer.core.t9278.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;return React.DOM.i({"className": [cljs.core.str("dot "),cljs.core.str(cljs.core.name.call(null,self__.color))].join('')},"");
});
async_visualizer.core.t9278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9280){var self__ = this;
var _9280__$1 = this;return self__.meta9279;
});
async_visualizer.core.t9278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9280,meta9279__$1){var self__ = this;
var _9280__$1 = this;return (new async_visualizer.core.t9278(self__.owner,self__.color,meta9279__$1));
});
async_visualizer.core.__GT_t9278 = (function __GT_t9278(owner__$1,color__$2,meta9279){return (new async_visualizer.core.t9278(owner__$1,color__$2,meta9279));
});
}
return (new async_visualizer.core.t9278(owner,color__$1,null));
});
async_visualizer.core.buffer = (function buffer(buf,owner){if(typeof async_visualizer.core.t9284 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t9284 = (function (owner,buf,buffer,meta9285){
this.owner = owner;
this.buf = buf;
this.buffer = buffer;
this.meta9285 = meta9285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t9284.cljs$lang$type = true;
async_visualizer.core.t9284.cljs$lang$ctorStr = "async-visualizer.core/t9284";
async_visualizer.core.t9284.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t9284");
});
async_visualizer.core.t9284.prototype.om$core$IRender$ = true;
async_visualizer.core.t9284.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.empty_QMARK_.call(null,self__.buf))
{return React.DOM.span({"className": "buffer empty"},"empty");
} else
{return cljs.core.apply.call(null,om.dom.span,{"className": "buffer"},om.core.build_all.call(null,async_visualizer.core.color,self__.buf));
}
});
async_visualizer.core.t9284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9286){var self__ = this;
var _9286__$1 = this;return self__.meta9285;
});
async_visualizer.core.t9284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9286,meta9285__$1){var self__ = this;
var _9286__$1 = this;return (new async_visualizer.core.t9284(self__.owner,self__.buf,self__.buffer,meta9285__$1));
});
async_visualizer.core.__GT_t9284 = (function __GT_t9284(owner__$1,buf__$1,buffer__$1,meta9285){return (new async_visualizer.core.t9284(owner__$1,buf__$1,buffer__$1,meta9285));
});
}
return (new async_visualizer.core.t9284(owner,buf,buffer,null));
});
async_visualizer.core.channel = (function channel(ch,owner){if(typeof async_visualizer.core.t9290 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t9290 = (function (owner,ch,channel,meta9291){
this.owner = owner;
this.ch = ch;
this.channel = channel;
this.meta9291 = meta9291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t9290.cljs$lang$type = true;
async_visualizer.core.t9290.cljs$lang$ctorStr = "async-visualizer.core/t9290";
async_visualizer.core.t9290.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t9290");
});
async_visualizer.core.t9290.prototype.om$core$IRender$ = true;
async_visualizer.core.t9290.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "channel"},React.DOM.div(null,"Wating puts:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"puts","puts",1017356982).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"Buffer:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"Waiting takes:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"takes","takes",1124028478).cljs$core$IFn$_invoke$arity$1(self__.ch))));
});
async_visualizer.core.t9290.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9292){var self__ = this;
var _9292__$1 = this;return self__.meta9291;
});
async_visualizer.core.t9290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9292,meta9291__$1){var self__ = this;
var _9292__$1 = this;return (new async_visualizer.core.t9290(self__.owner,self__.ch,self__.channel,meta9291__$1));
});
async_visualizer.core.__GT_t9290 = (function __GT_t9290(owner__$1,ch__$1,channel__$1,meta9291){return (new async_visualizer.core.t9290(owner__$1,ch__$1,channel__$1,meta9291));
});
}
return (new async_visualizer.core.t9290(owner,ch,channel,null));
});
async_visualizer.core.example_one = (function example_one(data,owner){if(typeof async_visualizer.core.t9296 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t9296 = (function (owner,data,example_one,meta9297){
this.owner = owner;
this.data = data;
this.example_one = example_one;
this.meta9297 = meta9297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t9296.cljs$lang$type = true;
async_visualizer.core.t9296.cljs$lang$ctorStr = "async-visualizer.core/t9296";
async_visualizer.core.t9296.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t9296");
});
async_visualizer.core.t9296.prototype.om$core$IRender$ = true;
async_visualizer.core.t9296.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"className": "text-center"},React.DOM.div({"className": "text-center controls"},React.DOM.button({"onClick": (function (___$2){cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"red","red",1014017027));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,new cljs.core.Keyword(null,"red","red",1014017027))))),React.DOM.div({"className": "chanel"},om.core.build.call(null,async_visualizer.core.channel,async_visualizer.core.reveal.call(null,ch))));
});
async_visualizer.core.t9296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9298){var self__ = this;
var _9298__$1 = this;return self__.meta9297;
});
async_visualizer.core.t9296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9298,meta9297__$1){var self__ = this;
var _9298__$1 = this;return (new async_visualizer.core.t9296(self__.owner,self__.data,self__.example_one,meta9297__$1));
});
async_visualizer.core.__GT_t9296 = (function __GT_t9296(owner__$1,data__$1,example_one__$1,meta9297){return (new async_visualizer.core.t9296(owner__$1,data__$1,example_one__$1,meta9297));
});
}
return (new async_visualizer.core.t9296(owner,data,example_one,null));
});
om.core.root.call(null,async_visualizer.core.example_one,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",1013907415),cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,5))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.querySelector(".example-one")], null));

//# sourceMappingURL=core.js.map