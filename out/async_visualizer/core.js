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
async_visualizer.core.XRay = (function (){var obj13762 = {};return obj13762;
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
cljs.core.async.impl.channels.ManyToManyChannel.prototype.async_visualizer$core$XRay$reveal$arity$1 = (function (c){var c__$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"puts","puts",1017356982),cljs.core.map.call(null,(function (p1__13763_SHARP_){return p1__13763_SHARP_.val;
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
async_visualizer.core.color = (function color(color__$1,owner){if(typeof async_visualizer.core.t13767 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t13767 = (function (owner,color,meta13768){
this.owner = owner;
this.color = color;
this.meta13768 = meta13768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t13767.cljs$lang$type = true;
async_visualizer.core.t13767.cljs$lang$ctorStr = "async-visualizer.core/t13767";
async_visualizer.core.t13767.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t13767");
});
async_visualizer.core.t13767.prototype.om$core$IRender$ = true;
async_visualizer.core.t13767.prototype.om$core$IRender$render$arity$1 = (function (this__4992__auto__){var self__ = this;
var this__4992__auto____$1 = this;return React.DOM.i({"className": [cljs.core.str("dot "),cljs.core.str(cljs.core.name.call(null,self__.color))].join('')},"");
});
async_visualizer.core.t13767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13769){var self__ = this;
var _13769__$1 = this;return self__.meta13768;
});
async_visualizer.core.t13767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13769,meta13768__$1){var self__ = this;
var _13769__$1 = this;return (new async_visualizer.core.t13767(self__.owner,self__.color,meta13768__$1));
});
async_visualizer.core.__GT_t13767 = (function __GT_t13767(owner__$1,color__$2,meta13768){return (new async_visualizer.core.t13767(owner__$1,color__$2,meta13768));
});
}
return (new async_visualizer.core.t13767(owner,color__$1,null));
});
async_visualizer.core.buffer = (function buffer(buf,owner){if(typeof async_visualizer.core.t13774 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t13774 = (function (owner,buf,buffer,meta13775){
this.owner = owner;
this.buf = buf;
this.buffer = buffer;
this.meta13775 = meta13775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t13774.cljs$lang$type = true;
async_visualizer.core.t13774.cljs$lang$ctorStr = "async-visualizer.core/t13774";
async_visualizer.core.t13774.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t13774");
});
async_visualizer.core.t13774.prototype.om$core$IRender$ = true;
async_visualizer.core.t13774.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return async_visualizer.core.css_transition_group.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),"buffer",new cljs.core.Keyword(null,"transitionName","transitionName",3305020658),"dots",new cljs.core.Keyword(null,"children","children",2673430897),cljs.core.map.call(null,(function (p1__13770_SHARP_){return om.core.build.call(null,async_visualizer.core.color,p1__13770_SHARP_);
}),self__.buf)], null)));
});
async_visualizer.core.t13774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13776){var self__ = this;
var _13776__$1 = this;return self__.meta13775;
});
async_visualizer.core.t13774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13776,meta13775__$1){var self__ = this;
var _13776__$1 = this;return (new async_visualizer.core.t13774(self__.owner,self__.buf,self__.buffer,meta13775__$1));
});
async_visualizer.core.__GT_t13774 = (function __GT_t13774(owner__$1,buf__$1,buffer__$1,meta13775){return (new async_visualizer.core.t13774(owner__$1,buf__$1,buffer__$1,meta13775));
});
}
return (new async_visualizer.core.t13774(owner,buf,buffer,null));
});
async_visualizer.core.channel = (function channel(ch,owner){if(typeof async_visualizer.core.t13780 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t13780 = (function (owner,ch,channel,meta13781){
this.owner = owner;
this.ch = ch;
this.channel = channel;
this.meta13781 = meta13781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t13780.cljs$lang$type = true;
async_visualizer.core.t13780.cljs$lang$ctorStr = "async-visualizer.core/t13780";
async_visualizer.core.t13780.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t13780");
});
async_visualizer.core.t13780.prototype.om$core$IRender$ = true;
async_visualizer.core.t13780.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "channel"},React.DOM.div(null,"Wating puts:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"puts","puts",1017356982).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"Buffer:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"buf","buf",1014002149).cljs$core$IFn$_invoke$arity$1(self__.ch))),React.DOM.div(null,"Waiting takes:",om.core.build.call(null,async_visualizer.core.buffer,new cljs.core.Keyword(null,"takes","takes",1124028478).cljs$core$IFn$_invoke$arity$1(self__.ch))));
});
async_visualizer.core.t13780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13782){var self__ = this;
var _13782__$1 = this;return self__.meta13781;
});
async_visualizer.core.t13780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13782,meta13781__$1){var self__ = this;
var _13782__$1 = this;return (new async_visualizer.core.t13780(self__.owner,self__.ch,self__.channel,meta13781__$1));
});
async_visualizer.core.__GT_t13780 = (function __GT_t13780(owner__$1,ch__$1,channel__$1,meta13781){return (new async_visualizer.core.t13780(owner__$1,ch__$1,channel__$1,meta13781));
});
}
return (new async_visualizer.core.t13780(owner,ch,channel,null));
});
async_visualizer.core.example_one = (function example_one(data,owner){if(typeof async_visualizer.core.t13787 !== 'undefined')
{} else
{
/**
* @constructor
*/
async_visualizer.core.t13787 = (function (owner,data,example_one,meta13788){
this.owner = owner;
this.data = data;
this.example_one = example_one;
this.meta13788 = meta13788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
async_visualizer.core.t13787.cljs$lang$type = true;
async_visualizer.core.t13787.cljs$lang$ctorStr = "async-visualizer.core/t13787";
async_visualizer.core.t13787.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"async-visualizer.core/t13787");
});
async_visualizer.core.t13787.prototype.om$core$IRender$ = true;
async_visualizer.core.t13787.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var ch = new cljs.core.Keyword(null,"ch","ch",1013907415).cljs$core$IFn$_invoke$arity$1(self__.data);return React.DOM.div({"className": "example-container"},React.DOM.div({"className": "text-center controls"},React.DOM.button({"onClick": (function (___$2){cljs.core.async.put_BANG_.call(null,ch,new cljs.core.Keyword(null,"red","red",1014017027));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,">! ch ",om.core.build.call(null,async_visualizer.core.color,new cljs.core.Keyword(null,"red","red",1014017027))))),React.DOM.div({"className": "channel-container"},om.core.build.call(null,async_visualizer.core.channel,async_visualizer.core.reveal.call(null,ch))),React.DOM.div({"className": "text-center controls "},React.DOM.button({"onClick": (function (___$2){cljs.core.async.take_BANG_.call(null,ch,(function (p1__13783_SHARP_){return cljs.core.prn.call(null,p1__13783_SHARP_);
}));
return om.core.refresh_BANG_.call(null,self__.owner);
}), "className": "pure-button"},React.DOM.code(null,"<! ch"))));
});
async_visualizer.core.t13787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13789){var self__ = this;
var _13789__$1 = this;return self__.meta13788;
});
async_visualizer.core.t13787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13789,meta13788__$1){var self__ = this;
var _13789__$1 = this;return (new async_visualizer.core.t13787(self__.owner,self__.data,self__.example_one,meta13788__$1));
});
async_visualizer.core.__GT_t13787 = (function __GT_t13787(owner__$1,data__$1,example_one__$1,meta13788){return (new async_visualizer.core.t13787(owner__$1,data__$1,example_one__$1,meta13788));
});
}
return (new async_visualizer.core.t13787(owner,data,example_one,null));
});
om.core.root.call(null,async_visualizer.core.example_one,cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",1013907415),cljs.core.async.chan.call(null,cljs.core.async.buffer.call(null,5))], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.querySelector(".example-one")], null));

//# sourceMappingURL=core.js.map