function nieudane(){
	$.post(`http://${GetParentResourceName()}/nieudane`)
}
	
	function udane(){
	$.post(`http://${GetParentResourceName()}/udane`)
}


(function(t) {
	function e(e) {
		for (var i, a, o = e[0], c = e[1], u = e[2], m = 0, d = []; m < o.length; m++) a = o[m], Object.prototype.hasOwnProperty.call(n, a) && n[a] && d.push(n[a][0]), n[a] = 0;
		for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
		l && l(e);
		while (d.length) d.shift()();
		return s.push.apply(s, u || []), r()
	}

	function r() {
		for (var t, e = 0; e < s.length; e++) {
			for (var r = s[e], i = !0, o = 1; o < r.length; o++) {
				var c = r[o];
				0 !== n[c] && (i = !1)
			}
			i && (s.splice(e--, 1), t = a(a.s = r[0]))
		}
		return t
	}
	var i = {},
		n = {
			app: 0
		},
		s = [];

	function a(e) {
		if (i[e]) return i[e].exports;
		var r = i[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(r.exports, r, r.exports, a), r.l = !0, r.exports
	}
	a.m = t, a.c = i, a.d = function(t, e, r) {
		a.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: r
		})
	}, a.r = function(t) {
		"undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, a.t = function(t, e) {
		if (1 & e && (t = a(t)), 8 & e) return t;
		if (4 & e && "object" === typeof t && t && t.__esModule) return t;
		var r = Object.create(null);
		if (a.r(r), Object.defineProperty(r, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var i in t) a.d(r, i, function(e) {
				return t[e]
			}.bind(null, i));
		return r
	}, a.n = function(t) {
		var e = t && t.__esModule ? function() {
			return t["default"]
		} : function() {
			return t
		};
		return a.d(e, "a", e), e
	}, a.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, a.p = "";
	var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
		c = o.push.bind(o);
	o.push = e, o = o.slice();
	for (var u = 0; u < o.length; u++) e(o[u]);
	var l = c;
	s.push([0, "chunk-vendors"]), r()
})({
	0: function(t, e, r) {
		t.exports = r("56d7")
	},
	"11cd": function(t, e, r) {
		"use strict";
		r("aa91")
	},
	2979: function(t, e, r) {},
	"2d20": function(t, e, r) {},
	3990: function(t, e, r) {
		"use strict";
		r("b5b7")
	},
	4006: function(t, e, r) {
		"use strict";
		r("cd56")
	},
	"46e5": function(module, __webpack_exports__, __webpack_require__) {
		"use strict";
		__webpack_require__.d(__webpack_exports__, "a", (function() {
			return GenerateRainDrop
		}));
		var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af"),
			core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

		function rand(t, e) {
			return t = Math.ceil(t), e = Math.floor(e), Math.floor(Math.random() * (e - t + 1)) + t
		}
		var operands = ["+", "-", "*"];

		function GenerateRainDrop() {
			var operand = operands[rand(0, operands.length - 1)],
				a, b;
			"-" === operand ? (b = rand(1, 12), a = rand(b, 12)) : (a = rand(1, 12), b = rand(1, 12));
			var ans = eval("".concat(a).concat(operand).concat(b));
			return {
				op: "".concat(a, " ").concat(operand, " ").concat(b),
				ans: ans
			}
		}
	},
	"4f9f": function(t, e, r) {
		"use strict";
		r("d520")
	},
	"56d7": function(t, e, r) {
		"use strict";
		r.r(e);
		r("e260"), r("e6cf"), r("cca6"), r("a79d");
		var i = r("2b0e"),
			n = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return t.isVisible ? r("div", {
					staticClass: "app"
				}, [r("Home")], 1) : t._e()
			},
			s = [],
			a = r("5530"),
			o = r("2f62"),
			c = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "wrapper"
				}, [r("div", {
					staticClass: "home"
				}, ["codeMemory" === t.currentGame ? r("CodeMemory") : t._e(), "memoryBlock" === t.currentGame ? r("MemoryBlock") : t._e(), "cableConnect" === t.currentGame ? r("PipeConnect") : t._e(), "flappyBird" === t.currentGame ? r("FlappyBird") : t._e(), "aimTrainer" === t.currentGame ? r("AimTrainer") : t._e(), "rainDrops" === t.currentGame ? r("RainDrops") : t._e(), "memoryCard" === t.currentGame ? r("MemoryCard") : t._e(), "simonSays" === t.currentGame ? r("SimonSays") : t._e(), t.isDev && null === t.currentGame ? r("div", [r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "codeMemory")
						}
					}
				}, [t._v("CodeMemory")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "memoryBlock")
						}
					}
				}, [t._v("MemoryBlock")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "cableConnect")
						}
					}
				}, [t._v("CableConnect")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "flappyBird")
						}
					}
				}, [t._v("Flappy Bird")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "aimTrainer")
						}
					}
				}, [t._v("AimTrainer")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "rainDrops")
						}
					}
				}, [t._v("RainDrops")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "memoryCard")
						}
					}
				}, [t._v("Memory Card")]), r("button", {
					on: {
						click: function(e) {
							return t.$store.commit("setCurrentGame", "simonSays")
						}
					}
				}, [t._v("Simon Says")])]) : t._e()], 1)])
			},
			u = [],
			l = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "code_memory_wrapper"
				}, [r("div", {
					staticClass: "code_memory"
				}, [t.currState === t.STATE_BEFORE_DISPLAY ? r("div", {
					staticClass: "text_wrapper center"
				}, [r("p", [t._v("PRZYGOTUJ SIĘ...")])]) : t.currState === t.STATE_DISPLAYING ? r("div", {
					staticClass: "text_wrapper"
				}, [r("p", [t._v(t._s(t.getFormatedCode))])]) : t.currState === t.STATE_GUESSING ? r("div", {
					staticClass: "text_wrapper spread"
				}, t._l(t.getFormatedGuessedCode, (function(e, i) {
					return r("p", {
						key: i,
						staticClass: "underline",
						class: "" === e.trim() ? "" : t.isValid(i, e) ? "green" : "red"
					}, [t._v(t._s(e))])
				})), 0) : t.currState === t.STATE_FAILED ? r("div", {
					staticClass: "text_wrapper center"
				}, [r("p", [t._v("BRAK DOSTĘPU")])]) : t.currState === t.STATE_SUCCESS ? r("div", {
					staticClass: "text_wrapper center"
				}, [r("p", [t._v("DOSTĘP PRZYZNANY")])]) : t._e(), r("div", {
					ref: "timeLeft",
					staticClass: "timeLeft"
				})])])
			},
			m = [];
		r("a15b"), r("38cf"), r("2ca0"), r("a9e3"), r("498a"), r("99af");
		i["a"].use(o["a"]);
		var d = !1,
			f = new o["a"].Store({
				state: {
					isVisible: d,
					currentGame: null,
					isDev: d,
					gameMemoryTime: 15e3,
					cableConnectTime: 2e4,
					blockCount: 8,
					flappyBirdPoles: 20,
					aimTrainerTime: 15e3,
					aimTrainerFreq: 500,
					dropsNeeded: 10,
					dropsFreq: 2100,
					cardsNeeded: 10,
					stepsNeeded: 5
				},
				mutations: {
					setCurrentGame: function(t, e) {
						t.currentGame = e
					},
					setVisible: function(t, e) {
						t.isVisible = e
					},
					setGameMemoryTime: function(t, e) {
						t.gameMemoryTime = e
					},
					setCableConnectTime: function(t, e) {
						t.cableConnectTime = e
					},
					setBlockCount: function(t, e) {
						e > 12 && (e = 12), t.blockCount = e
					},
					setFlappyBirdPoles: function(t, e) {
						t.flappyBirdPoles = e
					},
					setAimTrainerTime: function(t, e) {
						t.aimTrainerTime = e
					},
					setAimTrainerFreq: function(t, e) {
						t.aimTrainerFreq = e
					},
					setDropsNeeded: function(t, e) {
						t.dropsNeeded = e
					},
					setDropsFreq: function(t, e) {
						t.dropsFreq = e
					},
					setCardsNeeded: function(t, e) {
						t.cardsNeeded = e
					},
					setStepsNeeded: function(t, e) {
						t.stepsNeeded = e
					}
				},
				actions: {},
				getters: {
					isVisible: function(t) {
						var e = t.isVisible;
						return e
					},
					isDev: function(t) {
						var e = t.isDev;
						return e
					},
					currentGame: function(t) {
						var e = t.currentGame;
						return e
					},
					gameMemoryTime: function(t) {
						var e = t.gameMemoryTime;
						return e
					},
					cableConnectTime: function(t) {
						var e = t.cableConnectTime;
						return e
					},
					blockCount: function(t) {
						var e = t.blockCount;
						return e
					},
					flappyBirdPoles: function(t) {
						var e = t.flappyBirdPoles;
						return e
					},
					aimTrainerTime: function(t) {
						var e = t.aimTrainerTime;
						return e
					},
					aimTrainerFreq: function(t) {
						var e = t.aimTrainerFreq;
						return e
					},
					dropsNeeded: function(t) {
						var e = t.dropsNeeded;
						return e
					},
					dropsFreq: function(t) {
						var e = t.dropsFreq;
						return e
					},
					cardsNeeded: function(t) {
						var e = t.cardsNeeded;
						return e
					},
					stepsNeeded: function(t) {
						var e = t.stepsNeeded;
						return e
					}
				}
			}),
			S = ["error", "lost", "win"];

		function h() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
			if ("" !== t) {
				var e = f.getters.currentGame;
				if (e) {
					-1 === S.indexOf(t) && (t = "".concat(e, "_").concat(t));
					var r = new Audio("sounds/".concat(t, ".mp3"));
					r.volume = .2, r.play()
				}
			}
		}

        window.addEventListener('message', function(event) {
            if (event.data.type == "otworz") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'flappyBird'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		window.addEventListener('message', function(event) {
            if (event.data.type == "otworz2") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'simonSays'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		window.addEventListener('message', function(event) {
            if (event.data.type == "otworz3") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'rainDrops'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		window.addEventListener('message', function(event) {
            if (event.data.type == "otworz4") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'aimTrainer'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		window.addEventListener('message', function(event) {
            if (event.data.type == "otworz5") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'codeMemory'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		window.addEventListener('message', function(event) {
            if (event.data.type == "otworz6") {
                f.commit("setVisible", true), f.commit("setCurrentGame", 'memoryCard'), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", 5), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
            } 
        })

		

		

		var _ = {
				name: "CodeMemory",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_DISPLAYING: 1,
						STATE_GUESSING: 2,
						STATE_FAILED: 3,
						STATE_SUCCESS: 4,
						currState: 0,
						currentKey: "",
						guessedKey: "",
						timeLeft: -1,
						timeSet: 1,
						interval: null
					}
				},
				computed: Object(a["a"])(Object(a["a"])({}, Object(o["b"])(["gameMemoryTime"])), {}, {
					getFormatedCode: function() {
						for (var t = [], e = 0; e < this.currentKey.length; e += 2) t.push(this.currentKey[e] + this.currentKey[e + 1]);
						return t.join(" ")
					},
					getFormatedGuessedCode: function() {
						var t = [],
							e = this.guessedKey;
						14 !== e.length && (e += " ".repeat(14 - e.length));
						for (var r = 0; r < e.length; r += 2) t.push(e[r] + e[r + 1]);
						return t
					}
				}),
				methods: {
					handleKeyDown: function(t) {
						if ("Enter" !== t.code) {
							if (!(this.currState !== this.STATE_GUESSING || this.guessedKey.length >= 14) && t.code.startsWith("Digit")) {
								var e = t.code.substr(-1),
									r = Number(e);
								if (isNaN(r) || r < 0 || r > 9) return;
								this.guessedKey += r, 14 === this.guessedKey.length ? this.guessedKey === this.currentKey ? (h("win"), this.currState = this.STATE_SUCCESS, this.timeLeft = 4e3, this.timeSet = 4e3) : (h("error"), this.currState = this.STATE_FAILED, this.timeLeft = 4e3, this.timeSet = 4e3) : this.currentKey.startsWith(this.guessedKey) || (h("error"), this.currState = this.STATE_FAILED, this.timeLeft = 4e3, this.timeSet = 4e3)
							}
						} else this.timeLeft = 0
					},
					generateKey: function() {
						for (var t = "", e = 0; e < 14; e++) t += Math.round(9 * Math.random());
						return t
					},
					isValid: function(t, e) {
						return 1 === e.trim().length ? this.currentKey[2 * t] === e.trim() : this.currentKey[2 * t] + this.currentKey[2 * t + 1] === e
					},
					fail: function() {
						h("lost"), this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this;
					this.timeLeft = 4e3, this.timeSet = 4e3, this.currentKey = this.generateKey(), window.addEventListener("keypress", this.handleKeyDown);
					var e = (new Date).getTime();
					this.interval = setInterval((function() {
						var r = (new Date).getTime();
						t.timeLeft -= r - e, e = r, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%"), t.timeLeft <= 0 && (t.currState === t.STATE_BEFORE_DISPLAY ? (h("intro"), t.currState = t.STATE_DISPLAYING, t.timeLeft = t.gameMemoryTime, t.timeSet = t.gameMemoryTime) : t.currState === t.STATE_DISPLAYING ? (t.currState = t.STATE_GUESSING, t.timeLeft = t.gameMemoryTime, t.timeSet = t.gameMemoryTime) : t.currState === t.STATE_GUESSING ? (h("error"), t.currState = t.STATE_FAILED, t.timeLeft = 4e3, t.timeSet = 4e3) : t.currState === t.STATE_FAILED ? t.fail() : t.currState === t.STATE_SUCCESS && t.win())
					}), 1)
				},
				beforeDestroy: function() {
					window.removeEventListener("keypress", this.handleKeyDown), clearInterval(this.interval)
				}
			},
			p = _,
			T = (r("bca7"), r("2877")),
			v = Object(T["a"])(p, l, m, !1, null, "50ea6117", null),
			E = v.exports,
			A = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "memory_block_wrapper"
				}, [t.currentState === t.STATE_DISPLAYING || t.currentState === t.STATE_GUESSING ? r("div", {
					staticClass: "block_grid"
				}, t._l(t.grid, (function(e, i) {
					return r("div", {
						staticClass: "block_row"
					}, t._l(e, (function(e, n) {
						return r("div", {
							key: n + "-" + i,
							staticClass: "block",
							class: t.shouldGlow(e) ? "glow" : "",
							on: {
								click: function(e) {
									return t.clicked(i, n)
								}
							}
						}, [t._v(" " + t._s(t.currentState !== t.STATE_GUESSING ? e : "") + " ")])
					})), 0)
				})), 0) : r("div", {
					staticClass: "block_grid"
				}, [t.currentState === t.STATE_BEFORE_DISPLAY ? r("p", {
					staticClass: "state_text"
				}, [t._v("PRZYGOTUJ SIĘ")]) : t._e(), t.currentState === t.STATE_FAILED ? r("p", {
					staticClass: "state_text"
				}, [t._v("BRAK DOSTĘPU")]) : t._e(), t.currentState === t.STATE_SUCCESS ? r("p", {
					staticClass: "state_text"
				}, [t._v("DOSTĘP PRZYZNANY")]) : t._e()]), r("div", {
					staticClass: "outer_text"
				}, [r("div", {
					staticClass: "time_left_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})]), r("p", [t._v("Memory block")])])])
			},
			C = [],
			g = {
				name: "MemoryBlock",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_DISPLAYING: 1,
						STATE_GUESSING: 2,
						STATE_FAILED: 3,
						STATE_SUCCESS: 4,
						currentState: 0,
						rows: 4,
						columns: 8,
						grid: [],
						interval: null,
						timeLeft: -1,
						timeSet: 1,
						currentGuess: 0
					}
				},
				computed: Object(a["a"])({}, Object(o["b"])(["gameMemoryTime", "blockCount"])),
				methods: {
					clicked: function(t, e) {
						if (this.currentState === this.STATE_GUESSING) {
							if ("" === this.grid[t][e] || this.grid[t][e] !== this.currentGuess) {
								if ("" !== this.grid[t][e] && this.grid[t][e] < this.currentGuess) return;
								return h("error"), this.currentState = this.STATE_FAILED, this.timeLeft = 4e3, void(this.timeSet = 4e3)
							}
							this.currentGuess++, this.currentGuess > this.blockCount ? (h("win"), this.currentState = this.STATE_SUCCESS, this.timeLeft = 4e3, this.timeSet = 4e3) : h("goodBlock")
						}
					},
					shouldGlow: function(t) {
						return "" !== t && (!isNaN(Number(t)) && Number(t) < this.currentGuess)
					},
					getFreeCells: function(t) {
						for (var e = [], r = 0; r < this.rows; r++)
							for (var i = 0; i < this.columns; i++) {
								if (this.rows > 2) {
									if (i !== t[r].length - 1 && "" !== t[r][i + 1]) continue;
									if (0 !== i && "" !== t[r][i - 1]) continue;
									if (r !== t.length - 1 && "" !== t[r + 1][i]) continue;
									if (0 !== r && "" !== t[r - 1][i]) continue
								}
								"" === t[r][i] && e.push({
									row: r,
									cell: i
								})
							}
						return e
					},
					generateGrid: function() {
						for (var t = [], e = 0; e < this.rows; e++) {
							for (var r = [], i = 0; i < this.columns; i++) r.push("");
							t.push(r)
						}
						for (var n = 1; n <= this.blockCount; n++) {
							var s = this.getFreeCells(t);
							if (0 === s.length) break;
							var a = s[Math.floor(Math.random() * s.length)],
								o = a.row,
								c = a.cell;
							t[o][c] = n
						}
						return t
					},
					fail: function() {
						h("lost"), this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this,
						e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3, this.interval = setInterval((function() {
						var r = (new Date).getTime();
						t.timeLeft -= r - e, e = r, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%"), t.timeLeft <= 0 && (t.currentState === t.STATE_BEFORE_DISPLAY ? (h("intro"), t.grid = t.generateGrid(), t.currentState = t.STATE_DISPLAYING, t.timeLeft = t.gameMemoryTime, t.timeSet = t.gameMemoryTime) : t.currentState === t.STATE_DISPLAYING ? (t.currentGuess = 1, t.currentState = t.STATE_GUESSING, t.timeLeft = t.gameMemoryTime, t.timeSet = t.gameMemoryTime) : t.currentState === t.STATE_GUESSING ? (h("error"), t.currentState = t.STATE_FAILED, t.timeLeft = 4e3, t.timeSet = 4e3) : t.currentState === t.STATE_SUCCESS ? t.win() : t.currentState === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			b = g,
			w = (r("abdc"), Object(T["a"])(b, A, C, !1, null, "f350bcaa", null)),
			y = w.exports,
			L = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "pipe_connect_wrapper"
				}, [r("div", {
					staticClass: "ui"
				}, [r("p", {
					staticClass: "title"
				}, [t._v(t._s(t.titleText))]), r("div", {
					staticClass: "timer_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})])]), r("div", {
					staticClass: "grid"
				}, t._l(t.grid, (function(e, i) {
					return r("div", {
						key: i,
						staticClass: "row"
					}, t._l(e, (function(e, n) {
						var s, a;
						return r("div", {
							staticClass: "cell",
							on: {
								click: function(e) {
									return t.rotate(i, n)
								}
							}
						}, [i === t.grid.length - 1 && n === t.grid[0].length - 1 ? r("div", {
							staticClass: "pipe-finish",
							class: {
								glow: t.isConnected(i, n)
							}
						}) : "flat" === e.type ? r("div", {
							staticClass: "pipe_flat",
							class: (s = {}, s["rotated-" + e.rotation] = !0, s.glow = t.isConnected(i, n), s)
						}) : "corner" === e.type ? r("div", {
							staticClass: "pipe_corner",
							class: (a = {}, a["rotated-" + e.rotation] = !0, a)
						}, [r("div", {
							staticClass: "top_part",
							class: {
								glow: t.isConnected(i, n)
							}
						}), r("div", {
							staticClass: "side_part",
							class: {
								glow: t.isConnected(i, n)
							}
						})]) : t._e()])
					})), 0)
				})), 0)])
			},
			I = [],
			G = r("b85c"),
			D = (r("4de4"), r("d3b7"), r("caad"), r("2532"), 0),
			N = 1,
			k = 2,
			O = 3;

		function P(t, e, r) {
			var i = [];
			if (0 !== t && 0 === r[t - 1][e] && i.push(D), t !== r.length - 1 && 0 === r[t + 1][e] && i.push(N), 0 !== e && 0 === r[t][e - 1] && i.push(k), e !== r[0].length - 1 && 0 === r[t][e + 1] && i.push(O), i = i.filter((function(i) {
					return i === k ? t !== r.length - 1 && 0 !== t : i !== D || 0 !== e && e !== r[0].length - 1
				})), 0 === i.length) return null;
			var n = i[Math.floor(Math.random() * i.length)];
			return n
		}

		function x() {
			for (var t = [], e = [], r = 0; r < 4; r++) {
				for (var i = [], n = 0; n < 8; n++) i.push(0);
				e.push(i)
			}
			e[0][0] = 1;
			var s = 0,
				a = 0;
			while (s < 3 || a < 7) {
				var o = P(s, a, e);
				if (null === o) return x();
				o === D ? s-- : o === N ? s++ : o === k ? a-- : o === O && a++, e[s][a] = 1, t.push(o)
			}
			return t
		}

		function F() {
			for (var t = x(), e = [], r = 0; r < 4; r++) {
				for (var i = [], n = 0; n < 8; n++) {
					var s = Math.random() > .5 ? "corner" : "flat",
						a = Math.floor(4 * Math.random());
					3 === r && 7 === n && (s = "corner", a = 0), i.push({
						type: s,
						rotation: a,
						row: r,
						cell: n
					})
				}
				e.push(i)
			}
			for (var o = 0, c = 0, u = 0; u < t.length - 1; u++) {
				var l = t[u],
					m = t[u + 1];
				0 === o && 0 === c && (e[o][c] = l === N ? {
					type: "flat",
					rotation: 0,
					row: o,
					cell: c
				} : {
					type: "corner",
					rotation: 1,
					row: o,
					cell: c
				}), l === D ? o-- : l === N ? o++ : l === k ? c-- : l === O && c++, e[o][c] = l === m ? {
					type: "flat",
					rotation: Math.floor(4 * Math.random()),
					row: o,
					cell: c
				} : {
					type: "corner",
					rotation: Math.floor(4 * Math.random()),
					row: o,
					cell: c
				}
			}
			return e
		}
		var B = {
				name: "CableConnect",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_CONNECTING: 1,
						STATE_SUCCESS: 2,
						STATE_FAILED: 3,
						currentState: 0,
						grid: [],
						timeLeft: 0,
						timeSet: 0,
						interval: null
					}
				},
				computed: Object(a["a"])(Object(a["a"])({}, Object(o["b"])(["cableConnectTime"])), {}, {
					titleText: function() {
						return this.currentState === this.STATE_BEFORE_DISPLAY ? "PRZYGOTUJ SIĘ" : this.currentState === this.STATE_CONNECTING ? "POŁĄCZ KABEL" : this.currentState === this.STATE_SUCCESS ? "PRZYZNANO DOSTĘP" : this.currentState === this.STATE_FAILED ? "BRAK DOSTĘPU" : void 0
					}
				}),
				methods: {
					rotate: function(t, e) {
						this.currentState === this.STATE_CONNECTING && (0 === t && 0 === e || t === this.grid.length - 1 && e === this.grid[0].length - 1 || (this.grid[t][e].rotation = (this.grid[t][e].rotation + 1) % 4, h("pipeConnected"), this.isConnected(this.grid.length - 1, this.grid[0].length - 1) && (h("win"), this.currentState = this.STATE_SUCCESS, this.timeLeft = 5e3, this.timeSet = 5e3)))
					},
					getOpositeEnd: function(t) {
						return t === D ? N : t === N ? D : t === k ? O : t === O ? k : void 0
					},
					getElementAtEnd: function(t, e, r) {
						return r === D ? this.grid[t - 1][e] : r === N ? this.grid[t + 1][e] : r === k ? this.grid[t][e - 1] : this.grid[t][e + 1]
					},
					getEnds: function(t, e) {
						var r = this,
							i = this.grid[t][e].type,
							n = this.grid[t][e].rotation,
							s = [];
						if ("flat" === i) s = n % 2 === 0 ? [D, N] : [k, O];
						else switch (n) {
							case 0:
								s = [D, k];
								break;
							case 1:
								s = [D, O];
								break;
							case 2:
								s = [O, N];
								break;
							case 3:
								s = [N, k]
						}
						return s = s.filter((function(i) {
							return (i !== D || 0 !== t) && ((i !== N || t !== r.grid.length - 1) && ((i !== k || 0 !== e) && !(i === O && e === r.grid[0].length - 1)))
						})), s
					},
					isConnected: function(t, e, r) {
						if (0 === t && 0 === e) return !0;
						var i, n = this.getEnds(t, e),
							s = Object(G["a"])(n);
						try {
							for (s.s(); !(i = s.n()).done;) {
								var a = i.value,
									o = this.getElementAtEnd(t, e, a);
								if (o !== r && (o.row !== this.grid.length - 1 || o.cell !== this.grid[0].length - 1)) {
									var c = this.getEnds(o.row, o.cell);
									if (c.includes(this.getOpositeEnd(a)) && this.isConnected(o.row, o.cell, this.grid[t][e])) return !0
								}
							}
						} catch (u) {
							s.e(u)
						} finally {
							s.f()
						}
						return !1
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this;
					this.grid = F();
					var e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3, this.interval = setInterval((function() {
						var r = (new Date).getTime();
						t.timeLeft -= r - e, e = r, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%"), t.timeLeft <= 0 && (t.currentState === t.STATE_BEFORE_DISPLAY ? (h("intro"), t.currentState = t.STATE_CONNECTING, t.timeLeft = t.cableConnectTime, t.timeSet = t.cableConnectTime) : t.currentState === t.STATE_CONNECTING ? (h("lost"), t.currentState = t.STATE_FAILED, t.timeLeft = 4e3, t.timeSet = 4e3) : t.currentState === t.STATE_SUCCESS ? t.win() : t.currentState === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			M = B,
			Y = (r("9962"), Object(T["a"])(M, L, I, !1, null, "5b5be6ee", null)),
			j = Y.exports,
			R = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "flappy_bird_wrapper"
				}, [r("div", {
					directives: [{
						name: "show",
						rawName: "v-show",
						value: t.state !== t.STATE_WAITING && t.state !== t.STATE_PLAYING,
						expression: "state !== STATE_WAITING && state !== STATE_PLAYING"
					}],
					ref: "timeLeft",
					staticClass: "timeLeft"
				}), t.state === t.STATE_LOST ? r("div", {
					staticClass: "text_wrapper center"
				}, [r("p", [t._v("BRAK DOSTĘPU")])]) : t.state === t.STATE_WON ? r("div", {
					staticClass: "text_wrapper center"
				}, [r("p", [t._v("DOSTĘP PRZYZNANY")])]) : t.state === t.STATE_WAITING || t.state === t.STATE_PLAYING ? r("div", {
					staticClass: "game"
				}, [r("div", {
					staticClass: "bird",
					style: t.birdVars
				}, [r("svg", {
					attrs: {
						width: "100%",
						height: "100%",
						viewBox: "0 0 244 228",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}
				}, [r("g", {
					attrs: {
						filter: "url(#filter0_ddif_101_61)"
					}
				}, [r("path", {
					attrs: {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M74 153.248L126.5 78.0943C140.75 67.677 158.75 79.2104 156.5 89.6277L170 96.3246L156.125 102.649C158.375 160.689 116.75 154.364 74 153.248ZM140 83.303C142.25 83.303 144.5 85.1632 144.5 87.7675C144.5 90.3718 142.25 92.2321 140 92.2321C137.375 92.2321 135.5 90.3718 135.5 87.7675C135.5 85.1632 137.375 83.303 140 83.303Z",
						fill: "white"
					}
				})]), r("defs", [r("filter", {
					attrs: {
						id: "filter0_ddif_101_61",
						x: "0.788483",
						y: "0.788483",
						width: "242.423",
						height: "226.423",
						filterUnits: "userSpaceOnUse",
						"color-interpolation-filters": "sRGB"
					}
				}, [r("feFlood", {
					attrs: {
						"flood-opacity": "0",
						result: "BackgroundImageFix"
					}
				}), r("feColorMatrix", {
					attrs: {
						in: "SourceAlpha",
						type: "matrix",
						values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
						result: "hardAlpha"
					}
				}), r("feOffset"), r("feGaussianBlur", {
					attrs: {
						stdDeviation: "36.6058"
					}
				}), r("feColorMatrix", {
					attrs: {
						type: "matrix",
						values: "0 0 0 0 0.54902 0 0 0 0 0.192157 0 0 0 0 1 0 0 0 0.5 0"
					}
				}), r("feBlend", {
					attrs: {
						mode: "normal",
						in2: "BackgroundImageFix",
						result: "effect1_dropShadow_101_61"
					}
				}), r("feColorMatrix", {
					attrs: {
						in: "SourceAlpha",
						type: "matrix",
						values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
						result: "hardAlpha"
					}
				}), r("feOffset"), r("feGaussianBlur", {
					attrs: {
						stdDeviation: "9.45563"
					}
				}), r("feColorMatrix", {
					attrs: {
						type: "matrix",
						values: "0 0 0 0 0.547334 0 0 0 0 0.191667 0 0 0 0 1 0 0 0 0.7 0"
					}
				}), r("feBlend", {
					attrs: {
						mode: "normal",
						in2: "effect1_dropShadow_101_61",
						result: "effect2_dropShadow_101_61"
					}
				}), r("feBlend", {
					attrs: {
						mode: "normal",
						in: "SourceGraphic",
						in2: "effect2_dropShadow_101_61",
						result: "shape"
					}
				}), r("feColorMatrix", {
					attrs: {
						in: "SourceAlpha",
						type: "matrix",
						values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
						result: "hardAlpha"
					}
				}), r("feOffset"), r("feGaussianBlur", {
					attrs: {
						stdDeviation: "3.66058"
					}
				}), r("feComposite", {
					attrs: {
						in2: "hardAlpha",
						operator: "arithmetic",
						k2: "-1",
						k3: "1"
					}
				}), r("feColorMatrix", {
					attrs: {
						type: "matrix",
						values: "0 0 0 0 0.54902 0 0 0 0 0.192157 0 0 0 0 1 0 0 0 0.5 0"
					}
				}), r("feBlend", {
					attrs: {
						mode: "normal",
						in2: "shape",
						result: "effect3_innerShadow_101_61"
					}
				}), r("feGaussianBlur", {
					attrs: {
						stdDeviation: "0.675402",
						result: "effect4_foregroundBlur_101_61"
					}
				})], 1)])])]), t._l(t.pipes, (function(t, e) {
					return r("div", {
						key: e,
						staticClass: "pipeBlock",
						style: t.getVars()
					}, [r("div", {
						staticClass: "topPipe"
					}), r("div", {
						staticClass: "bottomPipe"
					})])
				}))], 2) : t._e()])
			},
			U = [],
			$ = {
				name: "FlappyBird",
				data: function() {
					return {
						state: 0,
						STATE_WAITING: 0,
						STATE_PLAYING: 1,
						STATE_LOST: 2,
						STATE_WON: 3,
						timeLeft: 0,
						timeSet: 0,
						vel: {
							x: 0,
							y: 0
						},
						bird: {
							x: .1,
							y: .5
						},
						pipes: [],
						interval: null
					}
				},
				computed: Object(a["a"])(Object(a["a"])({}, Object(o["b"])(["flappyBirdPoles"])), {}, {
					birdVars: function() {
						return {
							"--x": "calc(".concat(100 * this.bird.x, "% - 10%)"),
							"--y": "calc(".concat(100 * this.bird.y, "% - 10%)")
						}
					}
				}),
				methods: {
					handleKeyDown: function(t) {
						this.state === this.STATE_WAITING && (this.state = this.STATE_PLAYING), this.state === this.STATE_PLAYING && (h("jump"), this.vel.y = -.003)
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					},
					generatePipe: function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
						return {
							x: 1.2 + t,
							y: .4 * Math.random() + .4,
							getVars: function() {
								return {
									"--x": "".concat(100 * this.x, "%"),
									"--y": "calc(".concat(100 * this.y, "% - 150%)")
								}
							}
						}
					}
				},
				created: function() {
					var t = this;
					window.addEventListener("keypress", this.handleKeyDown);
					var e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3, h("intro");
					for (var r = 0, i = Math.min(this.flappyBirdPoles, 6), n = 0; n < i; n++) r++, this.pipes.push(this.generatePipe(.2 * n));
					this.interval = setInterval((function() {
						var i = (new Date).getTime(),
							n = (i - e) / 1e3;
						if (t.state !== t.STATE_PLAYING && (t.timeLeft -= 1e3 * n, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%")), e = i, t.state === t.STATE_PLAYING) {
							t.vel.y += .01 * n, t.bird.y += t.vel.y;
							for (var s = 0; s < t.pipes.length; s++) {
								t.pipes[s].x -= .1 * n;
								var a = t.pipes[s];
								if (Math.abs(t.bird.x - a.x) - .0125 <= .025) {
									var o = a.y;
									if (Math.abs(t.bird.y - o) > .115) return t.timeLeft = 4e3, t.timeSet = 4e3, t.state = t.STATE_LOST, void h("lose")
								}
							}
							if (r < t.flappyBirdPoles && t.pipes[0].x < -.1 && (r++, t.pipes.shift(), t.pipes.push(t.generatePipe(-.1))), t.pipes[t.pipes.length - 1].x < -.1) return t.state = t.STATE_WON, t.timeLeft = 4e3, t.timeSet = 4e3, void h("win");
							t.bird.y < 0 ? (t.bird.y = 0, t.timeLeft = 4e3, t.timeSet = 4e3, t.state = t.STATE_LOST, h("lose")) : t.bird.y > 1 && (t.bird.y = 1, t.timeLeft = 4e3, t.timeSet = 4e3, t.state = t.STATE_LOST, h("lose"))
						}
						t.timeLeft <= 0 && (t.state === t.STATE_LOST ? t.fail() : t.state === t.STATE_WON && t.win())
					}), 0)
				},
				beforeDestroy: function() {
					window.removeEventListener("keypress", this.handleKeyDown), clearInterval(this.interval)
				}
			},
			K = $,
			q = (r("11cd"), Object(T["a"])(K, R, U, !1, null, "6cfd7f2c", null)),
			Z = q.exports,
			W = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "memory_block_wrapper"
				}, [t.currentState === t.STATE_PLAYING ? r("div", {
					staticClass: "block_grid"
				}, t._l(t.grid, (function(e, i) {
					return r("div", {
						staticClass: "block_row"
					}, t._l(e, (function(e, n) {
						return r("div", {
							key: n + "-" + i,
							staticClass: "block",
							class: t.shouldGlow(e) ? "glow" : "",
							on: {
								click: function(e) {
									return t.clicked(i, n)
								}
							}
						})
					})), 0)
				})), 0) : r("div", {
					staticClass: "block_grid"
				}, [t.currentState === t.STATE_BEFORE_DISPLAY ? r("p", {
					staticClass: "state_text"
				}, [t._v("PRZYGOTUJ SIĘ")]) : t._e(), t.currentState === t.STATE_FAILED ? r("p", {
					staticClass: "state_text"
				}, [t._v("BRAK DOSTĘPU")]) : t._e(), t.currentState === t.STATE_SUCCESS ? r("p", {
					staticClass: "state_text"
				}, [t._v("DOSTĘP PRZYZNANY")]) : t._e()]), r("div", {
					staticClass: "outer_text"
				}, [r("div", {
					staticClass: "time_left_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})]), r("p", [t._v("Rozwal ścianę")])])])
			},
			V = [],
			J = {
				name: "MemoryBlock",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_PLAYING: 1,
						STATE_FAILED: 2,
						STATE_SUCCESS: 3,
						currentState: 0,
						rows: 4,
						columns: 8,
						grid: [],
						interval: null,
						timeLeft: -1,
						timeSet: 1,
						blockAmount: 0
					}
				},
				computed: Object(a["a"])({}, Object(o["b"])(["aimTrainerTime", "aimTrainerFreq"])),
				methods: {
					clicked: function(t, e) {
						if ("" === this.grid[t][e]) return this.timeSet = 4e3, this.timeLeft = this.timeSet, this.currentState = this.STATE_FAILED, void h("error");
						this.blockAmount--, h("blockGood"), this.$set(this.grid[t], e, "")
					},
					shouldGlow: function(t) {
						return "" !== t
					},
					generateGrid: function() {
						for (var t = [], e = 0; e < this.rows; e++) {
							for (var r = [], i = 0; i < this.columns; i++) r.push("");
							t.push(r)
						}
						return t
					},
					newBlock: function(t) {
						var e = Math.floor(Math.random() * this.rows),
							r = Math.floor(Math.random() * this.columns);
						if ("" !== this.grid[e][r]) return this.newBlock(t);
						this.$set(this.grid[e], r, t)
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this,
						e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3;
					var r = -1,
						i = 0;
					this.interval = setInterval((function() {
						var n = (new Date).getTime(),
							s = n - e;
						if (t.timeLeft -= s, e = n, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%"), t.currentState === t.STATE_PLAYING) {
							if (i -= s, t.blockAmount > 2) return t.timeSet = 4e3, t.timeLeft = t.timeSet, t.currentState = t.STATE_FAILED, void h("error");
							i <= 0 && (i = t.aimTrainerFreq, r++, t.blockAmount++, t.newBlock(r))
						}
						t.timeLeft <= 0 && (t.currentState === t.STATE_BEFORE_DISPLAY ? (t.grid = t.generateGrid(), t.currentState = t.STATE_PLAYING, t.timeLeft = t.aimTrainerTime, t.timeSet = t.aimTrainerTime, h("intro")) : t.currentState === t.STATE_PLAYING ? (t.timeSet = 4e3, t.timeLeft = t.timeSet, t.currentState = t.STATE_SUCCESS, h("win")) : t.currentState === t.STATE_SUCCESS ? t.win() : t.currentState === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			z = J,
			H = (r("9bec"), Object(T["a"])(z, W, V, !1, null, "84626d86", null)),
			X = H.exports,
			Q = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "rain_drops_wrapper"
				}, [r("div", {
					staticClass: "top-row"
				}, [t.state === t.STATE_BEFORE_DISPLAY ? r("div", [t._v("Przygotuj się")]) : t.state === t.STATE_PLAYING ? r("div", [t._v(t._s(t.dropsDone) + "/" + t._s(t.dropsNeeded))]) : t.state === t.STATE_FAILED ? r("div", [t._v("Odmowa dostępu")]) : t.state === t.STATE_SUCCESS ? r("div", [t._v("Przyznano dostęp")]) : t._e(), r("div", {
					staticClass: "time_left_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})])]), t.state !== t.STATE_BEFORE_DISPLAY ? [r("div", {
					staticClass: "grid"
				}, t._l(t.grid, (function(e, i) {
					return r("div", {
						staticClass: "grid_row"
					}, t._l(e, (function(e, n) {
						return r("div", {
							key: n + "-" + i,
							staticClass: "block",
							class: void 0 !== t.getBlock(i, n) ? "full" : ""
						}, [t.getBlock(i, n) ? [t._v(" " + t._s(t.getBlock(i, n).op) + " ")] : t._e()], 2)
					})), 0)
				})), 0), r("input", {
					directives: [{
						name: "model",
						rawName: "v-model",
						value: t.inputAns,
						expression: "inputAns"
					}],
					staticClass: "ans",
					attrs: {
						placeholder: "Wpisz wynik działania"
					},
					domProps: {
						value: t.inputAns
					},
					on: {
						keydown: function(e) {
							return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.onEnter()
						},
						input: function(e) {
							e.target.composing || (t.inputAns = e.target.value)
						}
					}
				})] : t._e()], 2)
			},
			tt = [],
			et = r("3835"),
			rt = (r("ac1f"), r("1276"), r("46e5")),
			it = {
				name: "RainDrops",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_PLAYING: 1,
						STATE_FAILED: 2,
						STATE_SUCCESS: 3,
						state: 0,
						dropsDone: 0,
						grid: [],
						blocks: {},
						interval: null,
						inputAns: "",
						timeLeft: 4e3,
						timeSet: 4e3
					}
				},
				computed: Object(a["a"])({}, Object(o["b"])(["dropsNeeded", "dropsFreq"])),
				methods: {
					generateGrid: function() {
						for (var t = [], e = 0; e < 4; e++) {
							for (var r = [], i = 0; i < 5; i++) r.push(null);
							t.push(r)
						}
						return t
					},
					newBlock: function() {
						var t = Object(rt["a"])(),
							e = Math.floor(5 * Math.random());
						this.$set(this.blocks, "0-".concat(e), t)
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					},
					getBlock: function(t, e) {
						return this.blocks["".concat(t, "-").concat(e)]
					},
					onEnter: function() {
						if (this.state === this.STATE_PLAYING) {
							var t = !1;
							for (var e in this.blocks) {
								var r = this.blocks[e];
								r.ans === Number(this.inputAns) && (t = !0, this.dropsDone++, h("blockGood"), delete this.blocks[e])
							}
							t || (this.timeLeft = 4e3, this.timeSet = 4e3, this.state = this.STATE_FAILED, h("error")), this.dropsDone >= this.dropsNeeded && (this.timeLeft = 4e3, this.timeSet = 4e3, this.state = this.STATE_SUCCESS, h("win")), this.inputAns = ""
						}
					}
				},
				created: function() {
					var t = this,
						e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3, this.grid = this.generateGrid();
					var r = 0;
					this.interval = setInterval((function() {
						var i = (new Date).getTime(),
							n = i - e;
						if (e = i, t.state === t.STATE_PLAYING) {
							if (r -= n, r <= 0) {
								for (var s in t.blocks) {
									var a = s.split("-"),
										o = Object(et["a"])(a, 2),
										c = o[0],
										u = o[1];
									if (Number(c) >= 4) return t.state = t.STATE_FAILED, t.timeSet = 4e3, t.timeLeft = t.timeSet, void h("error");
									t.blocks["".concat(Number(c) + 1, "-").concat(u)] = t.blocks[s], delete t.blocks[s]
								}
								r = t.dropsFreq, t.newBlock()
							}
						} else t.timeLeft -= n, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%");
						t.timeLeft <= 0 && (t.state === t.STATE_BEFORE_DISPLAY ? (h("intro"), t.state = t.STATE_PLAYING) : t.state === t.STATE_SUCCESS ? t.win() : t.state === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			nt = it,
			st = (r("3990"), Object(T["a"])(nt, Q, tt, !1, null, "0d3f6ed2", null)),
			at = st.exports,
			ot = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					ref: "wrap",
					staticClass: "memory_card_wrapper",
					attrs: {
						tabindex: "0"
					},
					on: {
						keydown: t.keyup
					}
				}, [r("div", {
					staticClass: "block_grid"
				}, [t._m(0), r("div", {
					staticClass: "block_row"
				}, t._l(t.cards, (function(e, i) {
					return r("div", {
						key: "" + e.id,
						staticClass: "block",
						class: t.hidden(i) ? "glow" : ""
					}, [r("p", {
						staticClass: "sm",
						class: t.hidden(i) ? "" : "light"
					}, [t._v(t._s(e.id))]), t.hidden(i) ? t._e() : [t._v(t._s(e.code))]], 2)
				})), 0), t.currentState === t.STATE_BEFORE_DISPLAY ? r("p", {
					staticClass: "state_text"
				}, [t._v("PRZYGOTUJ SIĘ")]) : t._e(), t.currentState === t.STATE_PLAYING ? r("p", {
					staticClass: "state_text"
				}, [t._v(t._s(t.cardsDone) + "/" + t._s(t.cardsNeeded))]) : t._e(), t.currentState === t.STATE_FAILED ? r("p", {
					staticClass: "state_text"
				}, [t._v("BRAK DOSTĘPU")]) : t._e(), t.currentState === t.STATE_SUCCESS ? r("p", {
					staticClass: "state_text"
				}, [t._v("DOSTĘP PRZYZNANY")]) : t._e()]), r("div", {
					staticClass: "outer_text"
				}, [r("div", {
					staticClass: "time_left_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})]), r("p", [t._v("Memory Card")])])])
			},
			ct = [function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					staticClass: "tip"
				}, [r("p", {
					staticClass: "state_text sm"
				}, [t._v("Czy wartość odkrytej komórki jest taka sama jak wartość pierwszej komórki od lewej?")]), r("p", {
					staticClass: "state_text sm"
				}, [t._v("← NIE | TAK →")])])
			}],
			ut = ["X", "Y", "Z"],
			lt = {
				name: "MemoryCard",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_PLAYING: 1,
						STATE_FAILED: 2,
						STATE_SUCCESS: 3,
						currentState: 0,
						cards: [],
						interval: null,
						timeLeft: -1,
						timeSet: 1,
						cardsDone: 0,
						uniqueId: 0
					}
				},
				computed: Object(a["a"])({}, Object(o["b"])(["cardsNeeded"])),
				methods: {
					keyup: function(t) {
						if (this.currentState === this.STATE_PLAYING) {
							var e = !0;
							if ("ArrowRight" === t.code ? e = this.cards[0].code === this.cards[this.cards.length - 1].code : "ArrowLeft" === t.code && (e = this.cards[0].code !== this.cards[this.cards.length - 1].code), e) {
								if (this.cardsDone++, this.cardsDone >= this.cardsNeeded) return this.currentState = this.STATE_SUCCESS, this.timeSet = 4e3, void(this.timeLeft = this.timeSet);
								this.nextCard()
							} else this.currentState = this.STATE_FAILED, this.timeSet = 4e3, this.timeLeft = this.timeSet
						}
					},
					hidden: function(t) {
						return this.currentState !== this.STATE_BEFORE_DISPLAY && t !== this.cards.length - 1
					},
					generateCard: function() {
						return this.uniqueId++, {
							code: ut[Math.floor(Math.random() * ut.length)],
							id: this.uniqueId
						}
					},
					nextCard: function() {
						var t = this.generateCard();
						this.cards.shift(), this.cards.push(t)
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this,
						e = (new Date).getTime();
					this.timeLeft = 4e3, this.timeSet = 4e3;
					for (var r = 0; r < 3; r++) this.cards.push(this.generateCard());
					this.interval = setInterval((function() {
						var r = (new Date).getTime(),
							i = r - e;
						e = r, t.currentState !== t.STATE_PLAYING && (t.timeLeft -= i, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%")), t.timeLeft <= 0 && (t.currentState === t.STATE_BEFORE_DISPLAY ? (t.currentState = t.STATE_PLAYING, t.timeLeft = 1, t.timeSet = 1, t.$refs["wrap"].focus(), h("intro")) : t.currentState === t.STATE_SUCCESS ? t.win() : t.currentState === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			mt = lt,
			dt = (r("ca31"), Object(T["a"])(mt, ot, ct, !1, null, "51a96e2a", null)),
			ft = dt.exports,
			St = function() {
				var t = this,
					e = t.$createElement,
					r = t._self._c || e;
				return r("div", {
					ref: "wrap",
					staticClass: "simon_says_wrapper",
					attrs: {
						tabindex: "0"
					}
				}, [r("div", {
					staticClass: "block_grid"
				}, [t.currentState === t.STATE_BEFORE_DISPLAY ? r("p", {
					staticClass: "state_text"
				}, [t._v("PRZYGOTUJ SIĘ")]) : t._e(), t.currentState === t.STATE_PLAYING ? r("p", {
					staticClass: "state_text"
				}, [t._v("POWTARZAJ RUCHY")]) : t._e(), t.currentState === t.STATE_FAILED ? r("p", {
					staticClass: "state_text"
				}, [t._v("NIEPOWODZENIE")]) : t._e(), t.currentState === t.STATE_SUCCESS ? r("p", {
					staticClass: "state_text"
				}, [t._v("SUKCES")]) : t._e(), t._l(3, (function(e) {
					return r("div", {
						staticClass: "block_row"
					}, t._l(3, (function(i) {
						return r("div", {
							staticClass: "block",
							class: (t.shouldGlow(3 * (e - 1) + i) ? "glow" : "") + " color-" + (3 * (e - 1) + i),
							on: {
								click: function(r) {
									t.clicked(3 * (e - 1) + i)
								},
								mousedown: function(r) {
									t.currentGlow = 3 * (e - 1) + i
								},
								mouseup: function(e) {
									t.currentGlow = -1
								}
							}
						}, [r("p", {
							staticClass: "sm",
							class: t.shouldGlow(3 * (e - 1) + i) ? "light" : ""
						}, [t._v(t._s(3 * (e - 1) + i))])])
					})), 0)
				}))], 2), r("div", {
					staticClass: "outer_text"
				}, [r("div", {
					staticClass: "time_left_wrapper"
				}, [r("div", {
					ref: "timeLeft",
					staticClass: "time_left"
				})]), r("p", [t._v("Simon Says")])])])
			},
			ht = [],
			_t = {
				name: "SimonSays",
				data: function() {
					return {
						STATE_BEFORE_DISPLAY: 0,
						STATE_PLAYING: 1,
						STATE_FAILED: 2,
						STATE_SUCCESS: 3,
						currentState: 0,
						interval: null,
						timeLeft: -1,
						timeSet: 1,
						currentStep: -1,
						currentIndex: 0,
						currentGlow: -1,
						isShowing: !1,
						steps: []
					}
				},
				computed: Object(a["a"])({}, Object(o["b"])(["stepsNeeded"])),
				methods: {
					shouldGlow: function(t) {
						return this.currentState === this.STATE_PLAYING && (this.isShowing ? t === this.steps[this.currentStep] : t === this.currentGlow)
					},
					genNewStep: function() {
						return 1 + Math.round(8 * Math.random())
					},
					clicked: function(t) {
						this.currentState !== this.STATE_PLAYING || this.isShowing || (h("click"), t === this.steps[this.currentIndex] ? (this.currentIndex++, this.currentIndex >= this.steps.length && (this.isShowing = !0, this.steps.length >= this.stepsNeeded && (h("win"), this.currentState = this.STATE_SUCCESS, this.timeSet = 2e3, this.timeLeft = this.timeSet), this.steps.push(this.genNewStep()), this.currentIndex = 0)) : (h("lost"), this.currentState = this.STATE_FAILED, this.timeSet = 2e3, this.timeLeft = this.timeSet))
					},
					fail: function() {
						this.$minigameApi.failGame()
					},
					win: function() {
						this.$minigameApi.winGame()
					}
				},
				created: function() {
					var t = this,
						e = (new Date).getTime();
					this.timeLeft = 2e3, this.timeSet = 2e3, this.steps.push(this.genNewStep());
					var r = 1e3;
					this.interval = setInterval((function() {
						var i = (new Date).getTime(),
							n = i - e;
						if (e = i, t.currentState !== t.STATE_PLAYING && (t.timeLeft -= n, t.$refs["timeLeft"].style.width = "".concat(t.timeLeft / (t.timeSet / 100), "%")), t.currentState === t.STATE_PLAYING && t.isShowing && (r -= n, r <= 0))
							if (t.currentStep++, r = 400, t.currentStep >= t.steps.length) t.isShowing = !1, t.currentStep = -1;
							else {
								h("show");
								var s = t.currentStep;
								t.currentStep = -1, setTimeout((function() {
									t.currentStep = s
								}), 100)
							} t.timeLeft <= 0 && (t.currentState === t.STATE_BEFORE_DISPLAY ? (t.currentState = t.STATE_PLAYING, t.isShowing = !0, t.timeLeft = 1, t.timeSet = 1, h("intro")) : t.currentState === t.STATE_SUCCESS ? t.win() : t.currentState === t.STATE_FAILED && t.fail())
					}), 1)
				},
				beforeDestroy: function() {
					clearInterval(this.interval)
				}
			},
			pt = _t,
			Tt = (r("4f9f"), Object(T["a"])(pt, St, ht, !1, null, "377188c3", null)),
			vt = Tt.exports,
			Et = {
				name: "Home",
				components: {
					SimonSays: vt,
					MemoryCard: ft,
					RainDrops: at,
					MemoryBlock: y,
					CodeMemory: E,
					PipeConnect: j,
					FlappyBird: Z,
					AimTrainer: X
				},
				computed: Object(a["a"])({}, Object(o["b"])(["currentGame", "isDev"]))
			},
			At = Et,
			Ct = (r("4006"), Object(T["a"])(At, c, u, !1, null, "5bd08abd", null)),
			gt = Ct.exports,
			bt = {
				name: "App",
				components: {
					Home: gt
				},
				computed: Object(a["a"])({}, Object(o["b"])(["isDev", "isVisible"])),
				created: function() {
					this.isDev && (document.body.style.backgroundColor = "rgb(80,80,80)")
				}
			},
			wt = bt,
			yt = (r("5c0b"), Object(T["a"])(wt, n, s, !1, null, null, null)),
			Lt = yt.exports,
			It = r("1da1"),
			Gt = r("d4ec"),
			Dt = r("bee2"),
			Nt = (r("96cf"), r("e9c4"), "https://".concat(f.getters.isDev ? "" : GetParentResourceName(), "/")),
			kt = function() {
				function t() {
					var e = this;
					Object(Gt["a"])(this, t), window.addEventListener("message", (function(t) {
						var r = t.data.event;
						void 0 !== r && "function" === typeof e["on" + r] && e["on" + r](t.data)
					})), window.addEventListener("keydown", (function(t) {
						"Escape" === t.key && e.post("close")
					}))
				}
				return Object(Dt["a"])(t, [{
					key: "post",
					value: function() {
						var t = Object(It["a"])(regeneratorRuntime.mark((function t(e, r) {
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return r = void 0 === r ? "{}" : JSON.stringify(r), t.next = 3, fetch(Nt + e, {
											body: r,
											method: "POST"
										});
									case 3:
										return t.abrupt("return", t.sent);
									case 4:
									case "end":
										return t.stop()
								}
							}), t)
						})));

						function e(e, r) {
							return t.apply(this, arguments)
						}
						return e
					}()
				}, {
					key: "onRunGame",
					value: function(t) {
						var e = t.gameName,
							r = t.options;
						f.commit("setVisible", !0), f.commit("setCurrentGame", e), ("codeMemory" === e || "memoryBlock" === e) && r && r.gameMemoryTime && f.commit("setGameMemoryTime", r.gameMemoryTime), "memoryBlock" === e && r && r.blockCount && f.commit("setBlockCount", r.blockCount), "cableConnect" === e && r && r.cableConnectTime && f.commit("setCableConnectTime", r.cableConnectTime), "flappyBird" === e && r && r.flappyBirdPoles && f.commit("setFlappyBirdPoles", r.flappyBirdPoles), "aimTrainer" === e && r && (r.aimTrainerTime && f.commit("setAimTrainerTime", r.aimTrainerTime), r.aimTrainerFreq && f.commit("setAimTrainerFreq", r.aimTrainerFreq)), "rainDrops" === e && r && (r.dropsNeeded && f.commit("setDropsNeeded", r.dropsNeeded), r.dropsFreq && f.commit("setDropsFreq", r.dropsFreq)), "memoryCard" === e && r && r.cardsNeeded && f.commit("setCardsNeeded", r.cardsNeeded), "simonSays" === e && r && r.stepsNeeded && f.commit("setStepsNeeded", r.stepsNeeded)
					}
				}, {
					key: "onNuiFix",
					value: function() {
						f.commit("setVisible", !1), f.commit("setCurrentGame", null)
					}
				}, {
					key: "failGame",
					value: function() {
						var t = Object(It["a"])(regeneratorRuntime.mark((function t() {
							var e;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
										return e = f.getters.currentGame, f.commit("setCurrentGame", null), f.commit("setVisible", f.getters.isDev), t.next = 5, nieudane();
									case 5:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}()
				}, {
					key: "winGame",
					value: function() {
						var t = Object(It["a"])(regeneratorRuntime.mark((function t() {
							var e;
							return regeneratorRuntime.wrap((function(t) {
								while (1) switch (t.prev = t.next) {
									case 0:
                                        console.log(e)
										return e = f.getters.currentGame, f.commit("setCurrentGame", null), f.commit("setVisible", f.getters.isDev), t.next = 5, udane();
									case 5:
									case "end":
										return t.stop()
								}
							}), t, this)
						})));

						function e() {
							return t.apply(this, arguments)
						}
						return e
					}()
				}]), t
			}(),
			Ot = new kt;
		i["a"].config.productionTip = !1, i["a"].prototype.$minigameApi = Ot, new i["a"]({
			store: f,
			render: function(t) {
				return t(Lt)
			}
		}).$mount("#app")
	},
	"5c0b": function(t, e, r) {
		"use strict";
		r("9c0c")
	},
	9962: function(t, e, r) {
		"use strict";
		r("be73")
	},
	"9bec": function(t, e, r) {
		"use strict";
		r("2d20")
	},
	"9c0c": function(t, e, r) {},
	aa91: function(t, e, r) {},
	abdc: function(t, e, r) {
		"use strict";
		r("e08d")
	},
	b5b7: function(t, e, r) {},
	bca7: function(t, e, r) {
		"use strict";
		r("2979")
	},
	be73: function(t, e, r) {},
	bf81: function(t, e, r) {},
	ca31: function(t, e, r) {
		"use strict";
		r("bf81")
	},
	cd56: function(t, e, r) {},
	d520: function(t, e, r) {},
	e08d: function(t, e, r) {}
});

