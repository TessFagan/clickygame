
state = { data: h.a, score: 0, topScore: 0 }, i.handleCorrectGuess = function (e) { var t = i.state, n = t.topScore, r = t.score, o = r + 1, a = Math.max(o, n); i.setState({ data: i.shuffleData(e), score: o, topScore: a }) }

handleIncorrectGuess = function (e) { i.setState({ data: i.resetData(e), score: 0 }) }

createElement("nav", { className: "navbar" }

createElement("ul", null, o.a.createElement("li", { className: "brand" }

createElement("li", null, "Score: ", e.score, " | Top Score: ", e.topScore)))})

Object.getPrototypeOf(t)).call.apply(e, [this].concat(u))), i.state = { message: "", animating: !1 }, i.renderMessage = function () { switch (i.state.message) { case "correct": return "You guessed correctly!"; case "incorrect": return "You guessed incorrectly!"; default: return "Click an image to begin!" } }

createElement("header", { className: "header" }, o.a.createElement("h1", null, "Clicky Game!"), o.a.createElement("h2", null, "Click on an image to earn points, but don't click on any more than once!"))})

createElement("main", { className: "container" }, e.children)})

createElement("div", { role: "img", "aria-label": "click item", onClick: function () { return e.handleClick(e.id) }, style: { backgroundImage: 'url("' + e.image + '")' }, className: "click-item" + (e.shake ? " shake" : "") })})

createElement("img", { alt: "react", src: "assets/images/react.svg" })))}); t.a = a}, function(e, t) { }, function(e, t) { e.exports = [{ id: 1, image: "/assets/images/beth.png", clicked: !1 }, { id: 2, image: "/assets/images/birdperson.png", clicked: !1 }, { id: 3, image: "/assets/images/evilmorty.png", clicked: !1 }, { id: 4, image: "/assets/images/gianthead.png", clicked: !1 }, { id: 5, image: "/assets/images/goldenford.png", clicked: !1 }, { id: 6, image: "/assets/images/jerry.png", clicked: !1 }, { id: 7, image: "/assets/images/jessica.png", clicked: !1 }, { id: 8, image: "/assets/images/meeseeks.png", clicked: !1 }, { id: 9, image: "/assets/images/morty.png", clicked: !1 }, { id: 10, image: "/assets/images/mr.png", clicked: !1 }, { id: 11, image: "/assets/images/rick.png", clicked: !1 }, { id: 12, image: "/assets/images/summer.png", clicked: !1 }] }

createElement("footer", { className: "footer" }

createElement("div", { className: "bottom" }