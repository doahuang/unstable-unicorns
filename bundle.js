(function(){function m(i,r,o){function c(t,e){if(!r[t]){if(!i[t]){var a="function"==typeof require&&require;if(!e&&a)return a(t,!0);if(d)return d(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var s=r[t]={exports:{}};i[t][0].call(s.exports,function(e){var a=i[t][1][e];return c(a||e)},s,s.exports,m,i,r,o)}return r[t].exports}for(var d="function"==typeof require&&require,e=0;e<o.length;e++)c(o[e]);return c}return m})()({1:[function(e,a,t){a.exports=Object.freeze([["Unicorn Poison","DESTROY a Unicorn card.","http://unstablegameswiki.com/images/3/30/UU-Base-051-SE.png"],["Back Kick","Return a card in another player's Stable to their hand. That player must DISCARD a card.","http://unstablegameswiki.com/images/d/dd/UU-Base-052-SE.png"],["Change of Luck","DRAW 2 cards and DISCARD 3 cards, then take another turn.","http://unstablegameswiki.com/images/d/d0/UU-Base-053-SE.png"],["Glitter Tornado","Return a card in each player's Stable (including yours) to their hand.","http://unstablegameswiki.com/images/6/68/UU-Base-054-SE.png"],["Unicorn Swap","Move a Unicorn card in your Stable to any other player's Stable, then STEAL a Unicorn card from that player's Stable.","http://unstablegameswiki.com/images/8/8c/UU-Base-055-SE.png"],["Re-Target","Move an Upgrade or Downgrade card from any player's Stable to any other player's Stable.","http://unstablegameswiki.com/images/1/1a/UU-Base-056-SE.png"],["Unfair Bargain","Trade hands with any other player.","http://unstablegameswiki.com/images/d/d2/UU-Base-057-SE.png"],["Two-For-One","SACRIFICE a card, then DESTROY 2 cards.","http://unstablegameswiki.com/images/e/ec/UU-Base-058-SE.png"],["Targeted Destruction","DESTROY an Upgrade card or SACRIFICE a Downgrade card.","http://unstablegameswiki.com/images/0/0e/UU-Base-060-SE.png"],["Mystical Vortex","Each player (including you) must DISCARD a card. Shuffle the discard pile into the deck.","http://unstablegameswiki.com/images/5/54/UU-Base-061-SE.png"],["Good Deal","DRAW 3 cards and DISCARD a card.","http://unstablegameswiki.com/images/b/b2/UU-Base-062-SE.png"],["Shake Up","Shuffle this card, your hand, and the discard pile into the deck. DRAW 5 cards.","http://unstablegameswiki.com/images/4/4d/UU-Base-063-SE.png"],["Blatant Thievery","Look at another player's hand. Choose a card and add it to your hand.","http://unstablegameswiki.com/images/8/8a/UU-Base-064-SE.png"],["Reset Button","Each player (including you) must SACRIFICE all Upgrade and Downgrade cards in their Stable. Shuffle the discard pile into the deck.","http://unstablegameswiki.com/images/d/dc/UU-Base-065-SE.png"],["Kiss of Life","Bring a Unicorn card from the discard pile into your Stable.","http://unstablegameswiki.com/images/8/8b/UU-Base-089-SE.png"]])},{}],2:[function(e,a,t){const n=e("./types");const s=e("./base-deck").map(([e,a,t])=>new n(e,a,t));a.exports={baseDeckMagics:s}},{"./base-deck":1,"./types":3}],3:[function(e,a,t){const n=e("../types");class s extends n{constructor(e,a,t){super(e,a,t)}}a.exports=s},{"../types":4}],4:[function(e,a,t){class n{constructor(e,a,t){this.name=e;this.desc=a;this.img=t;Object.freeze(this)}}a.exports=n},{}],5:[function(e,a,t){a.exports=Object.freeze([[,"http://unstablegameswiki.com/images/9/90/UU-Base-001-SE.png"],[,"http://unstablegameswiki.com/images/4/40/UU-Base-002-SE.png"],[,"http://unstablegameswiki.com/images/f/f0/UU-Base-003-SE.png"],[,"http://unstablegameswiki.com/images/b/b0/UU-Base-004-SE.png"],[,"http://unstablegameswiki.com/images/0/0f/UU-Base-005-SE.png"],[,"http://unstablegameswiki.com/images/7/75/UU-Base-006-SE.png"],[,"http://unstablegameswiki.com/images/a/a0/UU-Base-007-SE.png"],[,"http://unstablegameswiki.com/images/f/fc/UU-Base-008-SE.png"],[,"http://unstablegameswiki.com/images/1/10/UU-Base-009-SE.png"],[,"http://unstablegameswiki.com/images/6/62/UU-Base-010-SE.png"],[,"http://unstablegameswiki.com/images/2/20/UU-Base-011-SE.png"],[,"http://unstablegameswiki.com/images/d/d5/UU-Base-012-SE.png"],["Baby Narwhal","http://unstablegameswiki.com/images/9/9b/UU-Base-013-SE.png"]])},{}],6:[function(e,a,t){a.exports=Object.freeze([[,"Beards are like, so hot.","http://unstablegameswiki.com/images/9/90/UU-Base-014-SE.png"],[,"Pumpkin spice is the pumpkin spice of life.","http://unstablegameswiki.com/images/6/66/UU-Base-015-SE.png"],[,"Dance like nobody's watching.","http://unstablegameswiki.com/images/3/38/UU-Base-016-SE.png"],[,"Vinyl records and mixtapes only.","http://unstablegameswiki.com/images/0/06/UU-Base-017-SE.png"],[,"Popped collars are for date nights only.","http://unstablegameswiki.com/images/0/06/UU-Base-018-SE.png"],[,"💖🙌💅🙌💖💁‍♀️💁‍♀️😂😂😂","http://unstablegameswiki.com/images/6/65/UU-Base-019-SE.png"],[,"#nomakeup #nofilter #sunnies #shameless #selfie #basic #TGIF #unicornhairdontcare","http://unstablegameswiki.com/images/4/4c/UU-Base-020-SE.png"],["Basic Narwhal","This card has no special powers, but it sure is cute!","http://unstablegameswiki.com/images/8/80/UU-Base-021-SE.png"]])},{}],7:[function(e,a,t){const{BabyUnicorn:n,BasicUnicorn:s,MagicalUnicorn:i}=e("../types");const r=e("./baby").map(([e,a])=>new n(e,a));const o=e("./basic").map(([e,a,t])=>new s(e,a,t));const c=e("./magical").map(([e,a,t])=>new i(e,a,t));a.exports={babyUnicorns:r,basicUnicorns:o,magicalUnicorns:c}},{"../types":9,"./baby":5,"./basic":6,"./magical":8}],8:[function(e,a,t){a.exports=Object.freeze([["Rhinocorn","If this card is in your Stable at the beginning of your turn, you may DESTROY a Unicorn card. If you do, immediately end your turn.","http://unstablegameswiki.com/images/0/05/UU-Base-022-SE.png"],["Magical Kittencorn","This card cannot be destroyed by Magic cards.","http://unstablegameswiki.com/images/8/87/UU-Base-023-SE.png"],["Stabby the Unicorn","If this card is sacrificed or destroyed, you may DESTROY a Unicorn card.","http://unstablegameswiki.com/images/6/60/UU-Base-024-SE.png"],["Rainbow Unicorn","When this card enters your Stable, you may bring a Basic Unicorn card from your hand into your Stable.","http://unstablegameswiki.com/images/2/26/UU-Base-026-SE.png"],["Extremely Destructive Unicorn","When this card enters your Stable, each player (including you) must SACRIFICE a Unicorn card.","http://unstablegameswiki.com/images/3/3f/UU-Base-028-SE.png"],["Chainsaw Unicorn","When this card enters your Stable, you may DESTROY an Upgrade card or SACRIFICE a Downgrade card.","http://unstablegameswiki.com/images/d/d5/UU-Base-029-SE.png"],["Llamacorn","When this card enters your Stable, each player (including you) must DISCARD a card.","http://unstablegameswiki.com/images/2/20/UU-Base-030-SE.png"],["Americorn","When this card enters your Stable, you may pull a card at random from another player's hand.","http://unstablegameswiki.com/images/2/2b/UU-Base-031-SE.png"],["Ginormous Unicorn","This card counts for 2 Unicorns. You cannot play any Neigh cards.","http://unstablegameswiki.com/images/f/f3/UU-Base-032-SE.png"],["Seductive Unicorn","When this card enters your Stable, you may DISCARD a card, then STEAL a Unicorn card.","http://unstablegameswiki.com/images/c/c2/UU-Base-033-SE.png"],["Queen Bee Unicorn","Basic Unicorn cards cannot enter any player's Stable except yours.","http://unstablegameswiki.com/images/9/9b/UU-Base-035-SE.png"],["Greedy Flying Unicorn","When this card enters your Stable, DRAW a card.\nIf this card is sacrificed or destroyed, return it to your hand.","http://unstablegameswiki.com/images/6/61/UU-Base-036-SE.png"],["Annoying Flying Unicorn","When this card enters your Stable, you may force another player to DISCARD a card.\nIf this card is sacrificed or destroyed, return it to your hand.","http://unstablegameswiki.com/images/4/47/UU-Base-037-SE.png"],["Magical Flying Unicorn","When this card enters your Stable, you may add a Magic card from the discard pile to your hand.\nIf this card is sacrificed or destroyed, return it to your hand.","http://unstablegameswiki.com/images/3/31/UU-Base-038-SE.png"],["Swift Flying Unicorn","When this card enters your Stable, you may add a Neigh card from the discard pile to your hand.\nIf this card is sacrificed or destroyed, return it to your hand.","http://unstablegameswiki.com/images/8/82/UU-Base-039-SE.png"],["Majestic Flying Unicorn","When this card enters your Stable, you may add a Unicorn card from the discard pile to your hand.\nIf this card is sacrificed or destroyed, return it to your hand.","http://unstablegameswiki.com/images/0/0f/UU-Base-040-SE.png"],["Unicorn Phoenix","If this card would be sacrificed or destroyed, you may DISCARD a card instead.","http://unstablegameswiki.com/images/5/52/UU-Base-041-SE.png"],["Unicorn on the Cob","When this card enters your Stable, DRAW 2 cards and DISCARD a card.","http://unstablegameswiki.com/images/0/06/UU-Base-042-SE.png"],["Black Knight Unicorn","If a Unicorn card in your Stable would be destroyed, you may SACRIFICE this card instead.","http://unstablegameswiki.com/images/d/da/UU-Base-043-SE.png"],["Shark With a Horn","When this card enters your Stable, you may SACRIFICE this card, then DESTROY a Unicorn card.","http://unstablegameswiki.com/images/c/c2/UU-Base-044-SE.png"],["Shabby the Narwhal","When this card enters your Stable, you may search the deck for a Downgrade card and add it to your hand, then shuffle the deck.","http://unstablegameswiki.com/images/3/3b/UU-Base-045-SE.png"],["Narwhal Torpedo","When this card enters your Stable, SACRIFICE all Downgrade cards in your Stable.","http://unstablegameswiki.com/images/8/8f/UU-Base-046-SE.png"],["Alluring Narwhal","When this card enters your Stable, you may STEAL an Upgrade card.","http://unstablegameswiki.com/images/2/24/UU-Base-047-SE.png"],["Mermaid Unicorn","When this card enters your Stable, return a card in another player's Stable to their hand.","http://unstablegameswiki.com/images/3/3e/UU-Base-048-SE.png"],["Classy Narwhal","When this card enters your Stable, you may search the deck for an Upgrade card and add it to your hand, then shuffle the deck.","http://unstablegameswiki.com/images/2/21/UU-Base-049-SE.png"],["The Great Narwhal",'When this card enters your Stable, you may search the deck for a card with "Narwhal" in its name and add it to your hand, then shuffle the deck.',"http://unstablegameswiki.com/images/a/af/UU-Base-050-SE.png"],["Dark Angel Unicorn","When this card enters your Stable, you may SACRIFICE a Unicorn card, then bring a Unicorn card from the discard pile into your Stable.","http://unstablegameswiki.com/images/6/61/UU-Base-088-SE.png"],["Mother Goose Unicorn","When this card enters your Stable, you may bring a Baby Unicorn card from the Nursery into your Stable.","http://unstablegameswiki.com/images/d/d1/UU-Base-085-SE.png"],["Necromancer Unicorn","When this card enters your Stable, you may DISCARD 2 Unicorn cards, then bring a Unicorn card from the discard pile into your Stable.","http://unstablegameswiki.com/images/4/4b/UU-Base-087-SE.png"],["Unicorn Oracle","When this card enters your Stable, look at the top 3 cards of the deck and add one of them to your hand, then return the other two to the top of the deck in any order.","http://unstablegameswiki.com/images/7/7a/UU-Base-086-SE.png"]])},{}],9:[function(e,a,t){const n=e("../types");class s extends n{constructor(e,a,t){super(e,a,t)}}class i extends s{constructor(e="Baby Unicorn",a){super(e,"If this card would be sacrificed, destroyed, or returned to your hand, return it to the Nursery instead.",a)}}class r extends s{constructor(e="Basic Unicorn",a,t){super(e,a,t)}}class o extends s{constructor(e,a,t){super(e,a,t)}}a.exports={BabyUnicorn:i,BasicUnicorn:r,MagicalUnicorn:o}},{"../types":4}],10:[function(a,e,t){(function(){const e=a("./cards/unicorn/base-deck");const t=[["#baby-unicorn",e.babyUnicorns],["#basic-unicorn",e.basicUnicorns],["#magical-unicorn",e.magicalUnicorns],["#magic",a("./cards/magic").baseDeckMagics]];for(let a=0;a<t.length;a++){const[n,s]=t[a];const i=document.querySelector(n);for(let e=0;e<s.length;e++){const r=s[e];const o=document.createElement("li");const c=document.createElement("img");c.alt=r.name;c.width=200;if(a>1||e>4){c.loading="lazy"}const d="wsrv.nl/?url="+r.img+"&w=400";c.src="https://"+d+"&output=webp&default=ssl:"+encodeURIComponent(d);const m=document.createElement("b");m.innerText=r.name;const h=document.createElement("p");h.innerText=r.desc;o.append(c,m,h);i.appendChild(o)}}})()},{"./cards/magic":2,"./cards/unicorn/base-deck":7}]},{},[10]);