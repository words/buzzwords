(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.buzzwords = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
  "4g",
  "accountable talk",
  "adaptive learning",
  "aggregator",
  "agile",
  "ajax",
  "algorithm",
  "alignment",
  "analytics",
  "antifragile",
  "at the end of the day",
  "back-end",
  "ballpark figure",
  "bandwidth",
  "benchmarking",
  "best of breed",
  "best practices",
  "best-in-class",
  "beta",
  "big data",
  "big society",
  "bizmeth",
  "bleeding edge",
  "blog",
  "bloom's taxonomy",
  "boil the frog",
  "boil the ocean",
  "booger flicker",
  "brain break",
  "brand",
  "break through the clutter",
  "brick-and-mortar",
  "bricks-and-clicks",
  "bring to the table",
  "bring your own device",
  "building capabilities",
  "business process outsourcing",
  "business-to-business",
  "business-to-consumer",
  "buzzword",
  "buzzword compliant",
  "calibrate expectations",
  "cast a wider net",
  "cbow",
  "clear goal",
  "clickthrough",
  "client-centric",
  "close the loop",
  "cloud",
  "cloud computing",
  "co-opetition",
  "collaboration",
  "come-to-jesus moment",
  "common core",
  "content management",
  "content management system",
  "content marketing",
  "convergence",
  "cooperative learning",
  "core competency",
  "countless",
  "cross-platform",
  "crowdsourcing",
  "crystallization",
  "customer-centric",
  "data mining",
  "data science",
  "datafication",
  "deep dive",
  "design pattern",
  "devops",
  "differentiated instruction",
  "digital divide",
  "digital literacy",
  "digital remastering",
  "digital rights management",
  "digital signage",
  "disruptive innovation",
  "disruptive technologies",
  "diversity",
  "document management",
  "dot-bomb",
  "downsizing",
  "drain the pond",
  "drinking the kool-aid",
  "e-learning",
  "eating your own dogfood",
  "employer branding",
  "empowerment",
  "enable",
  "engine",
  "enterprise",
  "enterprise content management",
  "enterprise service bus",
  "entitlement",
  "event horizon",
  "exit strategy",
  "eyeballs",
  "face time",
  "flipped classroom",
  "folksonomy",
  "framework",
  "free",
  "free value",
  "fulfilment issues",
  "functional training",
  "fuzzy logic",
  "generation x",
  "generation y",
  "global citizen",
  "globalization",
  "going forward",
  "granular",
  "grow",
  "guard rails",
  "guided reading",
  "headlights",
  "herding cats",
  "higher-order thinking",
  "hitting our numbers",
  "holistic",
  "holistic approach",
  "html5",
  "hyperlocal",
  "immersion",
  "impact",
  "information society",
  "information superhighway",
  "innovation",
  "instructional scaffolding",
  "integrated marketing solution",
  "internet of things",
  "invested in",
  "knowledge process outsourcing",
  "leverage",
  "logistics",
  "long tail",
  "low hanging fruit",
  "make it pop",
  "management visibility",
  "mashup",
  "milestone",
  "mindshare",
  "mission critical",
  "mobile",
  "modularity",
  "moving forward",
  "multiple intelligences",
  "nanotechnology",
  "netiquette",
  "new economy",
  "new normal",
  "new sincerity",
  "next generation",
  "offshoring",
  "on the runway",
  "organic growth",
  "outside the box",
  "paas",
  "pain point",
  "pandering",
  "paradigm",
  "paradigm shift",
  "paralysis by analysis",
  "part of our dna",
  "peel back the onion",
  "performant",
  "pick and shovel work",
  "pizzazz",
  "podcasting",
  "political capital",
  "portal",
  "proactive",
  "project-based learning",
  "push the envelope",
  "quick-win",
  "reach out",
  "real-time",
  "relaying",
  "responsive",
  "return on investment",
  "reverse fulfilment",
  "rightshoring",
  "robust",
  "run like a business",
  "saas",
  "scalability",
  "sea change",
  "seamless",
  "sensorization",
  "serum",
  "share options",
  "shoot",
  "short runway",
  "sisterhood",
  "skeuomorphic",
  "social bookmarking",
  "social currency",
  "social software",
  "socialize",
  "solution",
  "sox",
  "spam",
  "spin-up",
  "stakeholder",
  "startup",
  "statist",
  "storytelling",
  "strategic communication",
  "strategy",
  "streamline",
  "struts",
  "student engagement",
  "survival strategy",
  "sustainability",
  "sync-up",
  "synergy",
  "systems development life-cycle",
  "tagging",
  "talent relationship management",
  "tee off",
  "the sale is completed. we just have the pick and shovel work left.",
  "think outside the box",
  "touch base",
  "touchpoint",
  "transmedia",
  "transparency",
  "unpack",
  "upcycling",
  "upselling",
  "user generated content",
  "value-added",
  "viral",
  "virtualization",
  "visibility",
  "vlogging",
  "vortal",
  "we need all hands on deck",
  "web 2.0",
  "web services",
  "webinar",
  "weblog",
  "wellness",
  "wheelhouse",
  "wikiality",
  "win-win",
  "wood behind the arrow",
  "workflow"
]
},{}],2:[function(require,module,exports){
'use strict';

/*
 * Dependencies.
 */

var Interface;

Interface = require('datalist-interface');

/*
 * Data.
 */

var words;

words = require('./data/buzzwords.json');

/*
 * Expose buzzwords.
 */

module.exports = new Interface(words);

},{"./data/buzzwords.json":1,"datalist-interface":3}],3:[function(require,module,exports){
'use strict';

/**
 * An interface for a list of items.
 *
 * @constructor
 * @param {Array.<*>} values
 */
function DatalistInterface(values) {
    this.values = [];
    this.add.apply(this, values);
}

/**
 * Add all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function add(/* values... */) {
    var self;

    self = this;

    self.values.push.apply(self.values, arguments);

    return self;
}

/**
 * Remove all arguments.
 *
 * @this DatalistInterface
 * @return {DatalistInterface} - Self.
 */
function remove(/* values... */) {
    var values,
        index,
        position;

    values = this.values;
    index = arguments.length;

    while (index--) {
        position = values.indexOf(arguments[index]);

        if (position !== -1) {
            values.splice(position, 1);
        }
    }

    return this;
}

/**
 * Whether or not `value` is in context.
 *
 * @this DatalistInterface
 * @param {*} value
 * @return {boolean}
 */
function is(value) {
    return this.values.indexOf(value) !== -1;
}

/**
 * Get all values.
 *
 * @this DatalistInterface
 * @return {Array.<*>}
 */
function all() {
    return this.values.concat();
}

/**
 * Stringify all values.
 *
 * @this DatalistInterface
 * @return {string}
 */
function toString() {
    return this.values.toString();
}

/*
 * Expose methods on prototype.
 */

var datalistInterfacePrototype;

datalistInterfacePrototype = DatalistInterface.prototype;

datalistInterfacePrototype.add = add;
datalistInterfacePrototype.remove = remove;
datalistInterfacePrototype.is = is;
datalistInterfacePrototype.has = is;
datalistInterfacePrototype.all = all;
datalistInterfacePrototype.valueOf = all;
datalistInterfacePrototype.toJSON = all;
datalistInterfacePrototype.toString = toString;

/*
 * Expose `DatalistInterface`.
 */

module.exports = DatalistInterface;

},{}]},{},[2])(2)
});