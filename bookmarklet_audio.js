function _typeof(n) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
        return typeof n
    } : function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, _typeof(n)
}

function _slicedToArray(n, t) {
    return _arrayWithHoles(n) || _iterableToArrayLimit(n, t) || _unsupportedIterableToArray(n, t) || _nonIterableRest()
}

function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArrayLimit(n, t) {
    var i = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
    if (null != i) {
        var e, o, s, u, f = [],
            r = !0,
            h = !1;
        try {
            if (s = (i = i.call(n)).next, 0 === t) {
                if (Object(i) !== i) return;
                r = !1
            } else
                for (; !(r = (e = s.call(i)).done) && (f.push(e.value), f.length !== t); r = !0);
        } catch (n) {
            h = !0;
            o = n
        } finally {
            try {
                if (!r && null != i.return && (u = i.return(), Object(u) !== u)) return
            } finally {
                if (h) throw o;
            }
        }
        return f
    }
}

function _arrayWithHoles(n) {
    if (Array.isArray(n)) return n
}

function _toConsumableArray(n) {
    return _arrayWithoutHoles(n) || _iterableToArray(n) || _unsupportedIterableToArray(n) || _nonIterableSpread()
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(n, t) {
    if (n) {
        if (typeof n == "string") return _arrayLikeToArray(n, t);
        var i = Object.prototype.toString.call(n).slice(8, -1);
        return (i === "Object" && n.constructor && (i = n.constructor.name), i === "Map" || i === "Set") ? Array.from(n) : i === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(n, t) : void 0
    }
}

function _iterableToArray(n) {
    if (typeof Symbol != "undefined" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n)
}

function _arrayWithoutHoles(n) {
    if (Array.isArray(n)) return _arrayLikeToArray(n)
}

function _arrayLikeToArray(n, t) {
    (t == null || t > n.length) && (t = n.length);
    for (var i = 0, r = new Array(t); i < t; i++) r[i] = n[i];
    return r
}

function _classCallCheck(n, t) {
    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _defineProperties(n, t) {
    for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, _toPropertyKey(i.key), i)
}

function _createClass(n, t, i) {
    return t && _defineProperties(n.prototype, t), i && _defineProperties(n, i), Object.defineProperty(n, "prototype", {
        writable: !1
    }), n
}

function _defineProperty(n, t, i) {
    return t = _toPropertyKey(t), t in n ? Object.defineProperty(n, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : n[t] = i, n
}

function _toPropertyKey(n) {
    var t = _toPrimitive(n, "string");
    return "symbol" == _typeof(t) ? t : t + ""
}

function _toPrimitive(n, t) {
    var i, r;
    if ("object" != _typeof(n) || !n) return n;
    if (i = n[Symbol.toPrimitive], void 0 !== i) {
        if (r = i.call(n, t || "default"), "object" != _typeof(r)) return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === t ? String : Number)(n)
}

function concatUint8Array() {
    for (var i, r, u = arguments.length, n = new Array(u), t = 0; t < u; t++) n[t] = arguments[t];
    return n = n.filter(Boolean), i = new Uint8Array(n.reduce(function(n, t) {
        return n + t.byteLength
    }, 0)), r = 0, n.forEach(function(n) {
        i.set(n, r);
        r += n.byteLength
    }), i
}

function readBig16(n) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (n[t] << 8) + (n[t + 1] || 0)
}

function readBig24(n) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (n[t] << 16) + (n[t + 1] << 8) + (n[t + 2] || 0)
}

function readBig32(n) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return (n[t] << 24 >>> 0) + (n[t + 1] << 16) + (n[t + 2] << 8) + (n[t + 3] || 0)
}

function readBig64(n) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return readBig32(n, t) * MAX_SIZE + readBig32(n, t + 4)
}

function getAvcCodec(n) {
    for (var r = "avc1.", t, i = 0; i < 3; i++) t = n[i].toString(16), t.length < 2 && (t = "0".concat(t)), r += t;
    return r
}

function parse(n) {
    var r, i, t;
    if (!Array.isArray(n)) {
        for (r = [], i = "", t = 0; t < n.length; t++) t % 2 && (i = n[t - 1] + n[t], r.push(parseInt(i, 16)), i = "");
        return r
    }
    return n.map(function(n) {
        return parseInt(n, 16)
    })
}

function hashVal(n) {
    var t = 0,
        i, r;
    if (n.length === 0) return t;
    for (i = 0; i < n.length; i++) r = n.charCodeAt(i), t = (t << 5) - t + r | 0;
    return t
}

function getSamples(n, t, i, r, u, f) {
    var p = [],
        w = u === null || u === void 0 ? void 0 : u.entries,
        s = t.entries,
        nt = r.entries,
        tt = i.entrySizes,
        l = f === null || f === void 0 ? void 0 : f.entries,
        a, h;
    l && (a = {}, l.forEach(function(n) {
        a[n - 1] = !0
    }));
    w && (h = [], w.forEach(function(n) {
        for (var i = n.count, r = n.offset, t = 0; t < i; t++) h.push(r)
    }));
    var e, b = -1,
        k = 0,
        o = 0,
        v = 0,
        c = 0,
        y = 0,
        d = s[0].samplesPerChunk,
        g = s[1] ? s[1].firstChunk - 1 : Infinity;
    return n.entries.forEach(function(n) {
        for (var u = n.count, t = n.delta, r = 0; r < u; r++) e = {
            dts: k,
            duration: t,
            size: tt[o] || i.sampleSize,
            offset: nt[v] + y,
            index: o
        }, l && (e.keyframe = a[o], e.keyframe && b++, e.gopId = b), h && o < h.length && (e.pts = e.dts + h[o]), p.push(e), k += t, o++, o < d ? y += e.size : (v++, y = 0, v >= g && (c++, g = s[c + 1] ? s[c + 1].firstChunk - 1 : Infinity), d += s[c].samplesPerChunk)
    }), p
}

function parseVisualSampleEntry(n, t) {
    return n.dataReferenceIndex = readBig16(t, 6), n.width = readBig16(t, 24), n.height = readBig16(t, 26), n.horizresolution = readBig32(t, 28), n.vertresolution = readBig32(t, 32), n.frameCount = readBig16(t, 40), n.depth = readBig16(t, 74), 78
}

function parseAudioSampleEntry(n, t) {
    return n.dataReferenceIndex = readBig16(t, 6), n.channelCount = readBig16(t, 16), n.sampleSize = readBig16(t, 18), n.sampleRate = readBig32(t, 24) / 65536, 28
}

function parseBox(n, t, i) {
    if (n) {
        if (n.size !== n.data.length) throw new Error("box ".concat(n.type, " size !== data.length"));
        var r = {
            start: n.start,
            size: n.size,
            headerSize: n.headerSize,
            type: n.type
        };
        return t && (r.version = n.data[n.headerSize], r.flags = readBig24(n.data, n.headerSize + 1), r.headerSize += 4), i(r, n.data.subarray(r.headerSize), r.start + r.headerSize), r
    }
}

function Concat(n) {
    for (var u, f, e = 0, i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), t = 1; t < i; t++) r[t - 1] = arguments[t];
    return r.forEach(function(n) {
        e += n.length
    }), u = new n(e), f = 0, r.forEach(function(n) {
        u.set(n, f);
        f += n.length
    }), u
}
var _MP, MAX_SIZE = Math.pow(2, 32),
    TrackType = {
        VIDEO: "video",
        AUDIO: "audio",
        METADATA: "metadata"
    },
    VideoCodecType = {
        AVC: "avc",
        HEVC: "hevc"
    },
    AudioCodecType = {
        AAC: "aac",
        G711PCMA: "g7110a",
        G711PCMU: "g7110m"
    },
    VideoTrack = function() {
        function n() {
            _classCallCheck(this, n);
            _defineProperty(this, "id", 1);
            _defineProperty(this, "type", TrackType.VIDEO);
            _defineProperty(this, "codecType", VideoCodecType.AVC);
            _defineProperty(this, "pid", -1);
            _defineProperty(this, "hvcC", undefined);
            _defineProperty(this, "codec", "");
            _defineProperty(this, "timescale", 0);
            _defineProperty(this, "formatTimescale", 0);
            _defineProperty(this, "sequenceNumber", 0);
            _defineProperty(this, "baseMediaDecodeTime", 0);
            _defineProperty(this, "baseDts", 0);
            _defineProperty(this, "duration", 0);
            _defineProperty(this, "warnings", []);
            _defineProperty(this, "samples", []);
            _defineProperty(this, "pps", []);
            _defineProperty(this, "sps", []);
            _defineProperty(this, "vps", []);
            _defineProperty(this, "fpsNum", 0);
            _defineProperty(this, "fpsDen", 0);
            _defineProperty(this, "sarRatio", []);
            _defineProperty(this, "width", 0);
            _defineProperty(this, "height", 0);
            _defineProperty(this, "nalUnitSize", 4);
            _defineProperty(this, "present", !1);
            _defineProperty(this, "isVideoEncryption", !1);
            _defineProperty(this, "isAudioEncryption", !1);
            _defineProperty(this, "isVideo", !0);
            _defineProperty(this, "kid", null);
            _defineProperty(this, "pssh", null);
            _defineProperty(this, "ext", void 0)
        }
        return _createClass(n, [{
            key: "reset",
            value: function() {
                this.sequenceNumber = this.width = this.height = this.fpsDen = this.fpsNum = this.duration = this.baseMediaDecodeTime = this.timescale = 0;
                this.codec = "";
                this.present = !1;
                this.pid = -1;
                this.pps = [];
                this.sps = [];
                this.vps = [];
                this.sarRatio = [];
                this.samples = [];
                this.warnings = [];
                this.hvcC = null
            }
        }, {
            key: "exist",
            value: function() {
                return !!(this.pps.length && this.sps.length && this.codec)
            }
        }, {
            key: "hasSample",
            value: function() {
                return !!this.samples.length
            }
        }, {
            key: "isEncryption",
            get: function() {
                return this.isVideoEncryption
            }
        }])
    }(),
    AudioTrack = function() {
        function n() {
            _classCallCheck(this, n);
            _defineProperty(this, "id", 2);
            _defineProperty(this, "type", TrackType.AUDIO);
            _defineProperty(this, "codecType", AudioCodecType.AAC);
            _defineProperty(this, "pid", -1);
            _defineProperty(this, "codec", "");
            _defineProperty(this, "sequenceNumber", 0);
            _defineProperty(this, "sampleDuration", 0);
            _defineProperty(this, "timescale", 0);
            _defineProperty(this, "formatTimescale", 0);
            _defineProperty(this, "baseMediaDecodeTime", 0);
            _defineProperty(this, "duration", 0);
            _defineProperty(this, "warnings", []);
            _defineProperty(this, "samples", []);
            _defineProperty(this, "baseDts", 0);
            _defineProperty(this, "sampleSize", 16);
            _defineProperty(this, "sampleRate", 0);
            _defineProperty(this, "channelCount", 0);
            _defineProperty(this, "objectType", 0);
            _defineProperty(this, "sampleRateIndex", 0);
            _defineProperty(this, "config", []);
            _defineProperty(this, "present", !1);
            _defineProperty(this, "isVideoEncryption", !1);
            _defineProperty(this, "isAudioEncryption", !1);
            _defineProperty(this, "kid", null);
            _defineProperty(this, "ext", void 0)
        }
        return _createClass(n, [{
            key: "reset",
            value: function() {
                this.sequenceNumber = 0;
                this.timescale = 0;
                this.sampleDuration = 0;
                this.sampleRate = 0;
                this.channelCount = 0;
                this.baseMediaDecodeTime = 0;
                this.present = !1;
                this.pid = -1;
                this.codec = "";
                this.samples = [];
                this.config = [];
                this.warnings = []
            }
        }, {
            key: "exist",
            value: function() {
                return !!(this.sampleRate && this.channelCount && this.codec && this.codecType === AudioCodecType.AAC)
            }
        }, {
            key: "hasSample",
            value: function() {
                return !!this.samples.length
            }
        }, {
            key: "isEncryption",
            get: function() {
                return this.isAudioEncryption
            }
        }])
    }(),
    Sample = _createClass(function Sample(n, t) {
        _classCallCheck(this, Sample);
        _defineProperty(this, "time", 0);
        this.data = n;
        this.originPts = this.pts = t
    }),
    MetadataTrack = function() {
        function n() {
            _classCallCheck(this, n);
            _defineProperty(this, "id", 3);
            _defineProperty(this, "type", TrackType.METADATA);
            _defineProperty(this, "timescale", 0);
            _defineProperty(this, "flvScriptSamples", []);
            _defineProperty(this, "seiSamples", [])
        }
        return _createClass(n, [{
            key: "exist",
            value: function() {
                return !!((this.flvScriptSamples.length || this.seiSamples.length) && this.timescale)
            }
        }, {
            key: "reset",
            value: function() {
                this.timescale = 0;
                this.flvScriptSamples = [];
                this.seiSamples = []
            }
        }, {
            key: "hasSample",
            value: function() {
                return !!(this.flvScriptSamples.length || this.seiSamples.length)
            }
        }])
    }(),
    VideoSample = function() {
        function n(t, i, r) {
            _classCallCheck(this, n);
            _defineProperty(this, "flag", {});
            _defineProperty(this, "keyframe", !1);
            _defineProperty(this, "gopId", 0);
            _defineProperty(this, "duration", 0);
            _defineProperty(this, "size", 0);
            _defineProperty(this, "units", []);
            _defineProperty(this, "chromaFormat", 420);
            this.originPts = this.pts = t;
            this.originDts = this.dts = i;
            r && (this.units = r)
        }
        return _createClass(n, [{
            key: "cts",
            get: function() {
                return this.pts - this.dts
            }
        }, {
            key: "setToKeyframe",
            value: function() {
                this.keyframe = !0;
                this.flag.dependsOn = 2;
                this.flag.isNonSyncSample = 0
            }
        }])
    }(),
    AudioSample = _createClass(function AudioSample(n, t, i, r) {
        _classCallCheck(this, AudioSample);
        _defineProperty(this, "duration", 1024);
        _defineProperty(this, "flag", {
            dependsOn: 2,
            isNonSyncSample: 0
        });
        _defineProperty(this, "keyframe", !0);
        this.originPts = this.pts = this.dts = n;
        this.data = t;
        this.size = t.byteLength;
        this.sampleOffset = r;
        i && (this.duration = i)
    }),
    AAC = function() {
        function n() {
            _classCallCheck(this, n)
        }
        return _createClass(n, null, [{
            key: "getRateIndexByRate",
            value: function(t) {
                return n.FREQ.indexOf(t)
            }
        }, {
            key: "getFrameDuration",
            value: function(n) {
                var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9e4;
                return 1024 * t / n
            }
        }])
    }(),
    MP4Parser, padStart, toHex, video_id, t;
_defineProperty(AAC, "FREQ", [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]);
MP4Parser = function() {
    function n() {
        _classCallCheck(this, n)
    }
    return _createClass(n, null, [{
        key: "findBox",
        value: function(t, i) {
            var f = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0,
                e = [],
                s;
            if (!t) return e;
            for (var r = 0, o = "", u = 0; t.length > 7;) {
                if (r = readBig32(t), o = String.fromCharCode.apply(null, t.subarray(4, 8)), u = 8, r === 1 ? (r = readBig64(t, 8), u += 8) : r || (r = t.length), !i[0] || o === i[0])
                    if (s = t.subarray(0, r), i.length < 2) e.push({
                        start: f,
                        size: r,
                        headerSize: u,
                        type: o,
                        data: s
                    });
                    else return n.findBox(s.subarray(u), i.slice(1), f + u);
                f += r;
                t = t.subarray(r)
            }
            return e
        }
    }, {
        key: "tfhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.trackId = readBig32(t);
                var i = 4,
                    r = n.flags & 1,
                    u = n.flags & 2,
                    f = n.flags & 8,
                    e = n.flags & 16,
                    o = n.flags & 32;
                r && (i += 4, n.baseDataOffset = readBig32(t, i), i += 4);
                u && (n.sampleDescriptionIndex = readBig32(t, i), i += 4);
                f && (n.defaultSampleDuration = readBig32(t, i), i += 4);
                e && (n.defaultSampleSize = readBig32(t, i), i += 4);
                o && (n.defaultSampleFlags = readBig32(t, i))
            })
        }
    }, {
        key: "sidx",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var i = 0,
                    e, f, r, u;
                for (n.reference_ID = readBig32(t, i), i += 4, n.timescale = readBig32(t, i), i += 4, n.version === 0 ? (n.earliest_presentation_time = readBig32(t, i), i += 4, n.first_offset = readBig32(t, i), i += 4) : (n.earliest_presentation_time = readBig64(t, i), i += 8, n.first_offset = readBig64(t, i), i += 8), i += 2, n.references = [], e = readBig16(t, i), i += 2, f = 0; f < e; f++) r = {}, n.references.push(r), u = readBig32(t, i), i += 4, r.reference_type = u >> 31 & 1, r.referenced_size = u & 2147483647, r.subsegment_duration = readBig32(t, i), i += 4, u = readBig32(t, i), i += 4, r.starts_with_SAP = u >> 31 & 1, r.SAP_type = u >> 28 & 7, r.SAP_delta_time = u & 268435455
            })
        }
    }, {
        key: "moov",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.mvhd = n.mvhd(n.findBox(i, ["mvhd"], r)[0]);
                t.trak = n.findBox(i, ["trak"], r).map(function(t) {
                    return n.trak(t)
                });
                t.pssh = n.pssh(n.findBox(i, ["pssh"], r)[0])
            })
        }
    }, {
        key: "mvhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var i = 0;
                n.version === 1 ? (n.timescale = readBig32(t, 16), n.duration = readBig64(t, 20), i += 28) : (n.timescale = readBig32(t, 8), n.duration = readBig32(t, 12), i += 16);
                n.nextTrackId = readBig32(t, i + 76)
            })
        }
    }, {
        key: "trak",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.tkhd = n.tkhd(n.findBox(i, ["tkhd"], r)[0]);
                t.mdia = n.mdia(n.findBox(i, ["mdia"], r)[0])
            })
        }
    }, {
        key: "tkhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var i = 0;
                n.version === 1 ? (n.trackId = readBig32(t, 16), n.duration = readBig64(t, 24), i += 32) : (n.trackId = readBig32(t, 8), n.duration = readBig32(t, 16), i += 20);
                n.width = readBig32(t, i + 52);
                n.height = readBig32(t, i + 56)
            })
        }
    }, {
        key: "mdia",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.mdhd = n.mdhd(n.findBox(i, ["mdhd"], r)[0]);
                t.hdlr = n.hdlr(n.findBox(i, ["hdlr"], r)[0]);
                t.minf = n.minf(n.findBox(i, ["minf"], r)[0])
            })
        }
    }, {
        key: "mdhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var r = 0,
                    i;
                n.version === 1 ? (n.timescale = readBig32(t, 16), n.duration = readBig64(t, 20), r += 28) : (n.timescale = readBig32(t, 8), n.duration = readBig32(t, 12), r += 16);
                i = readBig16(t, r);
                n.language = String.fromCharCode((i >> 10 & 31) + 96, (i >> 5 & 31) + 96, (i & 31) + 96)
            })
        }
    }, {
        key: "hdlr",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.version === 0 && (n.handlerType = String.fromCharCode.apply(null, t.subarray(4, 8)))
            })
        }
    }, {
        key: "minf",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.vmhd = n.vmhd(n.findBox(i, ["vmhd"], r)[0]);
                t.smhd = n.smhd(n.findBox(i, ["smhd"], r)[0]);
                t.stbl = n.stbl(n.findBox(i, ["stbl"], r)[0])
            })
        }
    }, {
        key: "vmhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.graphicsmode = readBig16(t);
                n.opcolor = [readBig16(t, 2), readBig16(t, 4), readBig16(t, 6)]
            })
        }
    }, {
        key: "smhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.balance = readBig16(t)
            })
        }
    }, {
        key: "stbl",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                var u, f;
                t.stsd = n.stsd(n.findBox(i, ["stsd"], r)[0]);
                t.stts = n.stts(n.findBox(i, ["stts"], r)[0]);
                t.ctts = n.ctts(n.findBox(i, ["ctts"], r)[0]);
                t.stsc = n.stsc(n.findBox(i, ["stsc"], r)[0]);
                t.stsz = n.stsz(n.findBox(i, ["stsz"], r)[0]);
                t.stco = n.stco(n.findBox(i, ["stco"], r)[0]);
                t.stco || (t.co64 = n.co64(n.findBox(i, ["co64"], r)[0]), t.stco = t.co64);
                f = (u = t.stsd.entries[0]) === null || u === void 0 || (u = u.sinf) === null || u === void 0 || (u = u.schi) === null || u === void 0 ? void 0 : u.tenc.default_IV_size;
                t.stss = n.stss(n.findBox(i, ["stss"], r)[0]);
                t.senc = n.senc(n.findBox(i, ["senc"], r)[0], f)
            })
        }
    }, {
        key: "senc",
        value: function(n) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
            return parseBox(n, !0, function(n, i) {
                var r = 0,
                    c = readBig32(i, r),
                    o, u, f, h, s, e;
                for (r += 4, n.samples = [], o = 0; o < c; o++) {
                    for (u = {}, u.InitializationVector = [], f = 0; f < t; f++) u.InitializationVector[f] = i[r + f];
                    if (r += t, n.flags & 2)
                        for (u.subsamples = [], h = readBig16(i, r), r += 2, s = 0; s < h; s++) e = {}, e.BytesOfClearData = readBig16(i, r), r += 2, e.BytesOfProtectedData = readBig32(i, r), r += 4, u.subsamples.push(e);
                    n.samples.push(u)
                }
            })
        }
    }, {
        key: "pssh",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var s, u, f, h, c, e = [], o = [], i = 0, r = 0; r < 16; r++) o.push(toHex(t[i + r]));
                if (i += 16, n.version > 0)
                    for (s = readBig32(t, i), i += 4, u = 0; u < ("" + s).length; u++)
                        for (f = 0; f < 16; f++) h = t[i], i += 1, e.push(toHex(h));
                c = readBig32(t, i);
                n.data_size = c;
                i += 4;
                n.kid = e;
                n.system_id = o;
                n.buffer = t
            })
        }
    }, {
        key: "stsd",
        value: function(t) {
            return parseBox(t, !0, function(t, i, r) {
                t.entryCount = readBig32(i);
                t.entries = n.findBox(i.subarray(4), [], r + 4).map(function(t) {
                    switch (t.type) {
                        case "avc1":
                        case "avc2":
                        case "avc3":
                        case "avc4":
                            return n.avc1(t);
                        case "hvc1":
                        case "hev1":
                            return n.hvc1(t);
                        case "mp4a":
                            return n.mp4a(t);
                        case "alaw":
                        case "ulaw":
                            return n.alaw(t);
                        case "enca":
                            return parseBox(t, !1, function(t, i, r) {
                                t.channelCount = readBig16(i, 16);
                                t.samplesize = readBig16(i, 18);
                                t.sampleRate = readBig32(i, 24) / 65536;
                                i = i.subarray(28);
                                t.sinf = n.sinf(n.findBox(i, ["sinf"], r)[0]);
                                t.esds = n.esds(n.findBox(i, ["esds"], r)[0])
                            });
                        case "encv":
                            return parseBox(t, !1, function(t, i, r) {
                                t.width = readBig16(i, 24);
                                t.height = readBig16(i, 26);
                                t.horizresolution = readBig32(i, 28);
                                t.vertresolution = readBig32(i, 32);
                                i = i.subarray(78);
                                t.sinf = n.sinf(n.findBox(i, ["sinf"], r)[0]);
                                t.avcC = n.avcC(n.findBox(i, ["avcC"], r)[0]);
                                t.hvcC = n.hvcC(n.findBox(i, ["hvcC"], r)[0]);
                                t.pasp = n.pasp(n.findBox(i, ["pasp"], r)[0])
                            })
                    }
                }).filter(Boolean)
            })
        }
    }, {
        key: "tenc",
        value: function(n) {
            return parseBox(n, !1, function(n, t) {
                var i = 6,
                    r;
                for (n.default_IsEncrypted = t[i], i += 1, n.default_IV_size = t[i], i += 1, n.default_KID = [], r = 0; r < 16; r++) n.default_KID.push(toHex(t[i])), i += 1
            })
        }
    }, {
        key: "schi",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.tenc = n.tenc(n.findBox(i, ["tenc"], r)[0])
            })
        }
    }, {
        key: "sinf",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.schi = n.schi(n.findBox(i, ["schi"], r)[0]);
                t.frma = n.frma(n.findBox(i, ["frma"], r)[0])
            })
        }
    }, {
        key: "frma",
        value: function(n) {
            return parseBox(n, !1, function(n, t) {
                n.data_format = "";
                for (var i = 0; i < 4; i++) n.data_format += String.fromCharCode(t[i])
            })
        }
    }, {
        key: "avc1",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                var u = parseVisualSampleEntry(t, i),
                    f = i.subarray(u);
                r += u;
                t.avcC = n.avcC(n.findBox(f, ["avcC"], r)[0]);
                t.pasp = n.pasp(n.findBox(f, ["pasp"], r)[0])
            })
        }
    }, {
        key: "avcC",
        value: function(n) {
            return parseBox(n, !1, function(n, t) {
                var i, r, u, f, e;
                for (n.configurationVersion = t[0], n.AVCProfileIndication = t[1], n.profileCompatibility = t[2], n.AVCLevelIndication = t[3], n.codec = getAvcCodec([t[1], t[2], t[3]]), n.lengthSizeMinusOne = t[4] & 3, n.spsLength = t[5] & 31, n.sps = [], i = 6, r = 0; r < n.spsLength; r++) u = readBig16(t, i), i += 2, n.sps.push(t.subarray(i, i + u)), i += u;
                for (n.ppsLength = t[i], i += 1, n.pps = [], f = 0; f < n.ppsLength; f++) e = readBig16(t, i), i += 2, n.pps.push(t.subarray(i, i += e)), i += e
            })
        }
    }, {
        key: "hvc1",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                var u = parseVisualSampleEntry(t, i),
                    f = i.subarray(u);
                r += u;
                t.hvcC = n.hvcC(n.findBox(f, ["hvcC"], r)[0]);
                t.pasp = n.pasp(n.findBox(f, ["pasp"], r)[0])
            })
        }
    }, {
        key: "hvcC",
        value: function(n) {
            return parseBox(n, !1, function(t, i) {
                var f, s, u, h, l, a, v;
                t.data = n.data;
                t.codec = "hev1.1.6.L93.B0";
                t.configurationVersion = i[0];
                f = i[1];
                t.generalProfileSpace = f >> 6;
                t.generalTierFlag = (f & 32) >> 5;
                t.generalProfileIdc = f & 31;
                t.generalProfileCompatibility = readBig32(i, 2);
                t.generalConstraintIndicatorFlags = i.subarray(6, 12);
                t.generalLevelIdc = i[12];
                t.avgFrameRate = readBig16(i, 19);
                t.numOfArrays = i[22];
                t.vps = [];
                t.sps = [];
                t.pps = [];
                var r = 23,
                    e = 0,
                    c = 0,
                    o = 0;
                for (s = 0; s < t.numOfArrays; s++) {
                    for (e = i[r] & 63, c = readBig16(i, r + 1), r += 3, u = [], h = 0; h < c; h++) o = readBig16(i, r), r += 2, u.push(i.subarray(r, r + o)), r += o;
                    e === 32 ? (l = t.vps).push.apply(l, u) : e === 33 ? (a = t.sps).push.apply(a, u) : e === 34 && (v = t.pps).push.apply(v, u)
                }
            })
        }
    }, {
        key: "pasp",
        value: function(n) {
            return parseBox(n, !1, function(n, t) {
                n.hSpacing = readBig32(t);
                n.vSpacing = readBig32(t, 4)
            })
        }
    }, {
        key: "mp4a",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                var u = parseAudioSampleEntry(t, i);
                t.esds = n.esds(n.findBox(i.subarray(u), ["esds"], r + u)[0])
            })
        }
    }, {
        key: "esds",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var u, f;
                n.codec = "mp4a.";
                for (var i = 0, r = 0, o = 0, e = 0; t.length;) {
                    for (i = 0, e = t[i], r = t[i + 1], i += 2; r & 128;) o = (r & 127) << 7, r = t[i], i += 1;
                    if (o += r & 127, e === 3) t = t.subarray(i + 3);
                    else if (e === 4) n.codec += (t[i].toString(16) + ".").padStart(3, "0"), t = t.subarray(i + 13);
                    else {
                        if (e === 5) {
                            u = n.config = t.subarray(i, i + o);
                            f = (u[0] & 248) >> 3;
                            f === 31 && u.length >= 2 && (f = 32 + ((u[0] & 7) << 3) + ((u[1] & 224) >> 5));
                            n.objectType = f;
                            n.codec += f.toString(16);
                            n.codec[n.codec.length - 1] === "." && (n.codec = n.codec.substring(0, n.codec.length - 1));
                            return
                        }
                        n.codec[n.codec.length - 1] === "." && (n.codec = n.codec.substring(0, n.codec.length - 1));
                        return
                    }
                }
            })
        }
    }, {
        key: "alaw",
        value: function(n) {
            return parseBox(n, !1, function(n, t) {
                parseAudioSampleEntry(n, t)
            })
        }
    }, {
        key: "stts",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var r = readBig32(t), u = [], i = 4, f = 0; f < r; f++) u.push({
                    count: readBig32(t, i),
                    delta: readBig32(t, i + 4)
                }), i += 8;
                n.entryCount = r;
                n.entries = u
            })
        }
    }, {
        key: "ctts",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var r = readBig32(t),
                    u = [],
                    i = 4,
                    f, e;
                if (n.version === 1)
                    for (f = 0; f < r; f++) u.push({
                        count: readBig32(t, i),
                        offset: readBig32(t, i + 4)
                    }), i += 8;
                else
                    for (e = 0; e < r; e++) u.push({
                        count: readBig32(t, i),
                        offset: -(~readBig32(t, i + 4) + 1)
                    }), i += 8;
                n.entryCount = r;
                n.entries = u
            })
        }
    }, {
        key: "stsc",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var r = readBig32(t), u = [], i = 4, f = 0; f < r; f++) u.push({
                    firstChunk: readBig32(t, i),
                    samplesPerChunk: readBig32(t, i + 4),
                    sampleDescriptionIndex: readBig32(t, i + 8)
                }), i += 12;
                n.entryCount = r;
                n.entries = u
            })
        }
    }, {
        key: "stsz",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var u = readBig32(t),
                    f = readBig32(t, 4),
                    e = [],
                    i, r;
                if (!u)
                    for (i = 8, r = 0; r < f; r++) e.push(readBig32(t, i)), i += 4;
                n.sampleSize = u;
                n.sampleCount = f;
                n.entrySizes = e
            })
        }
    }, {
        key: "stco",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var i = readBig32(t), r = [], u = 4, f = 0; f < i; f++) r.push(readBig32(t, u)), u += 4;
                n.entryCount = i;
                n.entries = r
            })
        }
    }, {
        key: "co64",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var i = readBig32(t), r = [], u = 4, f = 0; f < i; f++) r.push(readBig64(t, u)), u += 8;
                n.entryCount = i;
                n.entries = r
            })
        }
    }, {
        key: "stss",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                for (var i = readBig32(t), r = [], u = 4, f = 0; f < i; f++) r.push(readBig32(t, u)), u += 4;
                n.entryCount = i;
                n.entries = r
            })
        }
    }, {
        key: "moof",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.mfhd = n.mfhd(n.findBox(i, ["mfhd"], r)[0]);
                t.traf = n.findBox(i, ["traf"], r).map(function(t) {
                    return n.traf(t)
                })
            })
        }
    }, {
        key: "mfhd",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.sequenceNumber = readBig32(t)
            })
        }
    }, {
        key: "traf",
        value: function(t) {
            return parseBox(t, !1, function(t, i, r) {
                t.tfhd = n.tfhd(n.findBox(i, ["tfhd"], r)[0]);
                t.tfdt = n.tfdt(n.findBox(i, ["tfdt"], r)[0]);
                t.trun = n.trun(n.findBox(i, ["trun"], r)[0])
            })
        }
    }, {
        key: "trun",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                var o = n.version,
                    r = n.flags,
                    f = t.length,
                    s = n.sampleCount = readBig32(t),
                    i = 4,
                    u, e;
                if (f > i && r & 1 && (n.dataOffset = -(~readBig32(t, i) + 1), i += 4), f > i && r & 4 && (n.firstSampleFlags = readBig32(t, i), i += 4), n.samples = [], f > i)
                    for (e = 0; e < s; e++) u = {}, r & 256 && (u.duration = readBig32(t, i), i += 4), r & 512 && (u.size = readBig32(t, i), i += 4), r & 1024 && (u.flags = readBig32(t, i), i += 4), r & 2048 && (u.cts = o ? readBig32(t, i) : -(~readBig32(t, i + 4) + 1), i += 4), n.samples.push(u)
            })
        }
    }, {
        key: "tfdt",
        value: function(n) {
            return parseBox(n, !0, function(n, t) {
                n.baseMediaDecodeTime = n.version === 1 ? readBig64(t) : readBig32(t)
            })
        }
    }, {
        key: "probe",
        value: function(t) {
            return !!n.findBox(t, ["ftyp"])
        }
    }, {
        key: "parseSampleFlags",
        value: function(n) {
            return {
                isLeading: (n[0] & 12) >>> 2,
                dependsOn: n[0] & 3,
                isDependedOn: (n[1] & 192) >>> 6,
                hasRedundancy: (n[1] & 48) >>> 4,
                paddingValue: (n[1] & 14) >>> 1,
                isNonSyncSample: n[1] & 1,
                degradationPriority: n[2] << 8 | n[3]
            }
        }
    }, {
        key: "moovToTrack",
        value: function(n, t, i) {
            var tt, it, nt = n.trak,
                o, s, rt, h, c, u, ut, f, v, y, p, w, ft, et, ot, l, a, r, st, e, b, k, d, g;
            if (nt && nt.length) {
                if (o = nt.find(function(n) {
                        var t;
                        return ((t = n.mdia) === null || t === void 0 || (t = t.hdlr) === null || t === void 0 ? void 0 : t.handlerType) === "vide"
                    }), s = nt.find(function(n) {
                        var t;
                        return ((t = n.mdia) === null || t === void 0 || (t = t.hdlr) === null || t === void 0 ? void 0 : t.handlerType) === "soun"
                    }), o && t) {
                    if (u = t, ut = (rt = o.tkhd) === null || rt === void 0 ? void 0 : rt.trackId, ut !== null && ut !== undefined && (u.id = o.tkhd.trackId), u.tkhdDuration = o.tkhd.duration, u.mvhdDurtion = n.mvhd.duration, u.mvhdTimecale = n.mvhd.timescale, u.timescale = u.formatTimescale = o.mdia.mdhd.timescale, u.duration = o.mdia.mdhd.duration || u.mvhdDurtion / u.mvhdTimecale * u.timescale, f = o.mdia.minf.stbl.stsd.entries[0], u.width = f.width, u.height = f.height, f.pasp && (u.sarRatio = [f.pasp.hSpacing, f.pasp.vSpacing]), f.hvcC) u.codecType = VideoCodecType.HEVC, u.codec = f.hvcC.codec, u.vps = f.hvcC.vps, u.sps = f.hvcC.sps, u.pps = f.hvcC.pps, u.hvcC = f.hvcC.data;
                    else if (f.avcC) u.codec = f.avcC.codec, u.sps = f.avcC.sps, u.pps = f.avcC.pps;
                    else throw new Error("unknown video stsd entry");
                    u.present = !0;
                    u.ext = {};
                    u.ext.stss = (h = o.mdia) === null || h === void 0 || (h = h.minf) === null || h === void 0 || (h = h.stbl) === null || h === void 0 ? void 0 : h.stss;
                    u.ext.ctts = (c = o.mdia) === null || c === void 0 || (c = c.minf) === null || c === void 0 || (c = c.stbl) === null || c === void 0 ? void 0 : c.ctts;
                    f && f.type === "encv" && (u.isVideoEncryption = !0, f.default_KID = (v = f.sinf) === null || v === void 0 || (v = v.schi) === null || v === void 0 ? void 0 : v.tenc.default_KID, f.default_IsEncrypted = (y = f.sinf) === null || y === void 0 || (y = y.schi) === null || y === void 0 ? void 0 : y.tenc.default_IsEncrypted, f.default_IV_size = (p = f.sinf) === null || p === void 0 || (p = p.schi) === null || p === void 0 ? void 0 : p.tenc.default_IV_size, u.videoSenc = o.mdia.minf.stbl.senc && o.mdia.minf.stbl.senc.samples, f.data_format = (w = f.sinf) === null || w === void 0 || (w = w.frma) === null || w === void 0 ? void 0 : w.data_format, u.useEME = n.useEME, u.kidValue = n.kidValue, u.pssh = n.pssh, u.encv = f)
                }
                if (s && i) {
                    r = i;
                    st = (ft = s.tkhd) === null || ft === void 0 ? void 0 : ft.trackId;
                    st !== null && st !== undefined && (r.id = s.tkhd.trackId);
                    r.tkhdDuration = s.tkhd.duration;
                    r.mvhdDurtion = n.mvhd.duration;
                    r.mvhdTimecale = n.mvhd.timescale;
                    r.timescale = r.formatTimescale = s.mdia.mdhd.timescale;
                    r.duration = s.mdia.mdhd.duration || r.mvhdDurtion / r.mvhdTimecale * r.timescale;
                    e = s.mdia.minf.stbl.stsd.entries[0];
                    r.sampleSize = e.sampleSize;
                    r.sampleRate = e.sampleRate;
                    r.channelCount = e.channelCount;
                    r.present = !0;
                    switch (e.type) {
                        case "alaw":
                            r.codecType = r.codec = AudioCodecType.G711PCMA;
                            r.sampleRate = 8e3;
                            break;
                        case "ulaw":
                            r.codecType = r.codec = AudioCodecType.G711PCMU;
                            r.sampleRate = 8e3;
                            break;
                        default:
                            r.sampleDuration = AAC.getFrameDuration(r.sampleRate, r.timescale);
                            r.sampleRateIndex = AAC.getRateIndexByRate(r.sampleRate);
                            r.objectType = ((tt = e.esds) === null || tt === void 0 ? void 0 : tt.objectType) || 2;
                            e.esds && (r.config = Array.from(e.esds.config));
                            r.codec = ((it = e.esds) === null || it === void 0 ? void 0 : it.codec) || "mp4a.40.2"
                    }
                    r.sampleDuration = AAC.getFrameDuration(r.sampleRate, r.timescale);
                    r.objectType = ((et = e.esds) === null || et === void 0 ? void 0 : et.objectType) || 2;
                    e.esds && (e.esds.config ? r.config = Array.from(e.esds.config) : console.warn("esds config is null"));
                    r.codec = ((ot = e.esds) === null || ot === void 0 ? void 0 : ot.codec) || "mp4a.40.2";
                    r.sampleRateIndex = AAC.getRateIndexByRate(r.sampleRate);
                    r.ext = {};
                    r.ext.stss = (l = s.mdia) === null || l === void 0 || (l = l.minf) === null || l === void 0 || (l = l.stbl) === null || l === void 0 ? void 0 : l.stss;
                    r.ext.ctts = (a = s.mdia) === null || a === void 0 || (a = a.minf) === null || a === void 0 || (a = a.stbl) === null || a === void 0 ? void 0 : a.ctts;
                    r.present = !0;
                    e && e.type === "enca" && (r.isAudioEncryption = !0, e.data_format = (b = e.sinf) === null || b === void 0 || (b = b.frma) === null || b === void 0 ? void 0 : b.data_format, e.default_KID = (k = e.sinf) === null || k === void 0 || (k = k.schi) === null || k === void 0 ? void 0 : k.tenc.default_KID, e.default_IsEncrypted = (d = e.sinf) === null || d === void 0 || (d = d.schi) === null || d === void 0 ? void 0 : d.tenc.default_IsEncrypted, e.default_IV_size = (g = e.sinf) === null || g === void 0 || (g = g.schi) === null || g === void 0 ? void 0 : g.tenc.default_IV_size, r.audioSenc = s.mdia.minf.stbl.senc && s.mdia.minf.stbl.senc.samples, r.useEME = n.useEME, r.kidValue = n.kidValue, r.enca = e)
                }
                if (i && (i.isVideoEncryption = t ? t.isVideoEncryption : !1), t && (t.isAudioEncryption = i ? i.isAudioEncryption : !1), t !== null && t !== void 0 && t.encv || i !== null && i !== void 0 && i.enca) {
                    var ht, ct, lt = t === null || t === void 0 || (ht = t.encv) === null || ht === void 0 ? void 0 : ht.default_KID,
                        at = i === null || i === void 0 || (ct = i.enca) === null || ct === void 0 ? void 0 : ct.default_KID,
                        vt = lt || at ? (lt || at).join("") : null;
                    t && (t.kid = vt);
                    i && (i.kid = vt)
                }
                return t && (t.flags = 3841), i && (i.flags = 1793), {
                    videoTrack: t,
                    audioTrack: i
                }
            }
        }
    }, {
        key: "evaluateDefaultDuration",
        value: function(n, t, i) {
            var r, u = t === null || t === void 0 || (r = t.samples) === null || r === void 0 ? void 0 : r.length,
                f;
            return u ? (f = 1024 * u / t.timescale, f * n.timescale / i) : 1024
        }
    }, {
        key: "moofToSamples",
        value: function(t, i, r) {
            var u = {};
            return t.mfhd && (i && (i.sequenceNumber = t.mfhd.sequenceNumber), r && (r.sequenceNumber = t.mfhd.sequenceNumber)), t.traf.forEach(function(t) {
                var f = t.tfhd,
                    h = t.tfdt,
                    e = t.trun,
                    v;
                if (f && e) {
                    h && (i && i.id === f.trackId && (i.baseMediaDecodeTime = h.baseMediaDecodeTime), r && r.id === f.trackId && (r.baseMediaDecodeTime = h.baseMediaDecodeTime));
                    var c = f.defaultSampleSize || 0,
                        l = f.defaultSampleDuration || n.evaluateDefaultDuration(i, r, e.samples.length || e.sampleCount),
                        s = e.dataOffset || 0,
                        o = 0,
                        a = -1;
                    if (!e.samples.length && e.sampleCount)
                        for (u[f.trackId] = [], v = 0; v < e.sampleCount; v++) u[f.trackId].push({
                            offset: s,
                            dts: o,
                            duration: l,
                            size: c
                        }), o += l, s += c;
                    else u[f.trackId] = e.samples.map(function(n, t) {
                        return n = {
                            offset: s,
                            dts: o,
                            pts: o + (n.cts || 0),
                            duration: n.duration || l,
                            size: n.size || c,
                            gopId: a,
                            keyframe: t === 0 || n.flags !== null && n.flags !== undefined && (n.flags & 65536) >>> 0 != 65536
                        }, n.keyframe && (a++, n.gopId = a), o += n.duration, s += n.size, n
                    })
                }
            }), u
        }
    }, {
        key: "moovToSamples",
        value: function(n) {
            var e = n.trak,
                o, f, h, c, i, t, r, s, u;
            if (e && e.length && (o = e.find(function(n) {
                    var t;
                    return ((t = n.mdia) === null || t === void 0 || (t = t.hdlr) === null || t === void 0 ? void 0 : t.handlerType) === "vide"
                }), f = e.find(function(n) {
                    var t;
                    return ((t = n.mdia) === null || t === void 0 || (t = t.hdlr) === null || t === void 0 ? void 0 : t.handlerType) === "soun"
                }), o || f)) {
                if (o) {
                    if (t = (i = o.mdia) === null || i === void 0 || (i = i.minf) === null || i === void 0 ? void 0 : i.stbl, !t) return;
                    var l = t.stts,
                        a = t.stsc,
                        v = t.stsz,
                        y = t.stco,
                        p = t.stss,
                        g = t.ctts;
                    if (!l || !a || !v || !y || !p) return;
                    h = getSamples(l, a, v, y, g, p)
                }
                if (f) {
                    if (u = (r = f.mdia) === null || r === void 0 || (r = r.minf) === null || r === void 0 ? void 0 : r.stbl, !u) return;
                    var nt = (s = f.mdia.mdhd) === null || s === void 0 ? void 0 : s.timescale,
                        w = u.stts,
                        b = u.stsc,
                        k = u.stsz,
                        d = u.stco;
                    if (!nt || !w || !b || !k || !d) return;
                    c = getSamples(w, b, k, d)
                }
                return {
                    videoSamples: h,
                    audioSamples: c
                }
            }
        }
    }])
}();
padStart = function(n, t, i) {
    for (var r = String(i), u = t >> 0, o = Math.ceil(u / r.length), f = [], e = String(n); o--;) f.push(r);
    return f.join("").substring(0, u - e.length) + e
};
toHex = function() {
    for (var t = [], i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
    return r.forEach(function(n) {
        t.push(padStart(Number(n).toString(16), 2, 0))
    }), t[0]
};
var Buffer = function() {
        function n() {
            _classCallCheck(this, n);
            this.buffer = new Uint8Array(0)
        }
        return _createClass(n, [{
            key: "write",
            value: function() {
                for (var t = this, i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
                r.forEach(function(n) {
                    n ? t.buffer = Concat(Uint8Array, t.buffer, n) : window.console.warn(n)
                })
            }
        }], [{
            key: "writeUint16",
            value: function(n) {
                return new Uint8Array([n >> 8 & 255, n & 255])
            }
        }, {
            key: "writeUint32",
            value: function(n) {
                return new Uint8Array([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255])
            }
        }])
    }(),
    UINT32_MAX = Math.pow(2, 32) - 1,
    MP4 = function() {
        function n() {
            _classCallCheck(this, n)
        }
        return _createClass(n, null, [{
            key: "box",
            value: function(n) {
                for (var i, t, e, f = arguments.length, r = new Array(f > 1 ? f - 1 : 0), u = 1; u < f; u++) r[u - 1] = arguments[u];
                return r = r.filter(Boolean), i = 8 + r.reduce(function(n, t) {
                    return n + t.byteLength
                }, 0), t = new Uint8Array(i), t[0] = i >> 24 & 255, t[1] = i >> 16 & 255, t[2] = i >> 8 & 255, t[3] = i & 255, t.set(n, 4), e = 8, r.forEach(function(n) {
                    t.set(n, e);
                    e += n.byteLength
                }), t
            }
        }, {
            key: "ftyp",
            value: function(t) {
                var i = t.find(function(n) {
                    return n.type === TrackType.VIDEO && n.codecType === VideoCodecType.HEVC
                });
                return i ? n.FTYPHEV1 : n.FTYPAVC1
            }
        }, {
            key: "initSegment",
            value: function(t) {
                var i = n.ftyp(t);
                return concatUint8Array(i, n.moov(t))
            }
        }, {
            key: "pssh",
            value: function(t) {
                var i = new Uint8Array([1, 0, 0, 0].concat([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75], [0, 0, 0, 1], parse(t.kid), [0, 0, 0, 0]));
                return n.box(n.types.pssh, i)
            }
        }, {
            key: "moov",
            value: function(t) {
                if (t[0].useEME && (t[0].encv || t[0].enca)) {
                    t[0].pssh || (t[0].pssh = {
                        kid: t[0].kid
                    });
                    var i = this.pssh(t[0].pssh);
                    return n.box.apply(n, [n.types.moov, n.mvhd(t[0].mvhdDurtion || t[0].duration, t[0].mvhdTimecale || t[0].timescale), n.mvex(t)].concat(_toConsumableArray(t.map(function(t) {
                        return n.trak(t)
                    })), [i]))
                }
                return n.box.apply(n, [n.types.moov, n.mvhd(t[0].mvhdDurtion || t[0].duration, t[0].mvhdTimecale || t[0].timescale)].concat(_toConsumableArray(t.map(function(t) {
                    return n.trak(t)
                })), [n.mvex(t)]))
            }
        }, {
            key: "mvhd",
            value: function(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9e4;
                return n.box(n.types.mvhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]))
            }
        }, {
            key: "trak",
            value: function(t) {
                return n.box(n.types.trak, n.tkhd(t.id, t.tkhdDuration || 0, t.width, t.height), n.mdia(t))
            }
        }, {
            key: "tkhd",
            value: function(t, i) {
                var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0,
                    u = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
                return n.box(n.types.tkhd, new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 0, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, r >> 8 & 255, r & 255, 0, 0, u >> 8 & 255, u & 255, 0, 0]))
            }
        }, {
            key: "mdia",
            value: function(t) {
                return n.box(n.types.mdia, n.mdhd(t.duration, t.timescale), n.hdlr(t.type), n.minf(t))
            }
        }, {
            key: "mdhd",
            value: function(t) {
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9e4;
                return n.box(n.types.mdhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, t & 255, 85, 196, 0, 0]))
            }
        }, {
            key: "hdlr",
            value: function(t) {
                return n.box(n.types.hdlr, n.HDLR_TYPES[t])
            }
        }, {
            key: "minf",
            value: function(t) {
                return n.box(n.types.minf, t.type === TrackType.VIDEO ? n.VMHD : n.SMHD, n.DINF, n.stbl(t))
            }
        }, {
            key: "stbl",
            value: function(t) {
                var i = [];
                return t && t.ext && t.ext.stss && i.push(n.stss(t.ext.stss.entries)), n.box(n.types.stbl, n.stsd(t), n.STTS, i[0], n.STSC, n.STSZ, n.STCO)
            }
        }, {
            key: "stsd",
            value: function(t) {
                var i;
                return i = t.type === "audio" ? t.useEME && t.enca ? n.enca(t) : n.mp4a(t) : t.useEME && t.encv ? n.encv(t) : n.avc1hev1(t), n.box(n.types.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), i)
            }
        }, {
            key: "enca",
            value: function(t) {
                var r = t.enca.channelCount,
                    i = t.enca.sampleRate,
                    u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, r, 0, 16, 0, 0, 0, 0, i >> 8 & 255, i & 255, 0, 0]),
                    f = n.esds(t.config),
                    e = n.sinf(t.enca);
                return n.box(n.types.enca, u, f, e)
            }
        }, {
            key: "encv",
            value: function(t) {
                var e, o, i = t.sps.length > 0 ? t.sps[0] : [],
                    f = t.pps.length > 0 ? t.pps[0] : [],
                    s = t.width,
                    h = t.height,
                    r = t.sarRatio[0],
                    u = t.sarRatio[1],
                    c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, s & 255, h >> 8 & 255, h & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]),
                    l = new Uint8Array((e = (o = [1, i[1], i[2], i[3], 255, 225, i.length >>> 8 & 255, i.length & 255]).concat.apply(o, _toConsumableArray(i)).concat([1, f.length >>> 8 & 255, f.length & 255])).concat.apply(e, _toConsumableArray(f))),
                    a = new Uint8Array([0, 0, 88, 57, 0, 15, 200, 192, 0, 4, 86, 72]),
                    v = n.sinf(t.encv),
                    y = new Uint8Array([r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255]);
                return n.box(n.types.encv, c, n.box(n.types.avcC, l), n.box(n.types.btrt, a), v, n.box(n.types.pasp, y))
            }
        }, {
            key: "schi",
            value: function(t) {
                var i = new Uint8Array([]),
                    r = n.tenc(t);
                return n.box(n.types.schi, i, r)
            }
        }, {
            key: "tenc",
            value: function(t) {
                var i = new Uint8Array([0, 0, 0, 0, 0, 0, t.default_IsEncrypted & 255, t.default_IV_size & 255].concat(parse(t.default_KID)));
                return n.box(n.types.tenc, i)
            }
        }, {
            key: "sinf",
            value: function(t) {
                var i = new Uint8Array([]),
                    r = new Uint8Array([t.data_format.charCodeAt(0), t.data_format.charCodeAt(1), t.data_format.charCodeAt(2), t.data_format.charCodeAt(3)]),
                    u = new Uint8Array([0, 0, 0, 0, 99, 101, 110, 99, 0, 1, 0, 0]),
                    f = n.schi(t);
                return n.box(n.types.sinf, i, n.box(n.types.frma, r), n.box(n.types.schm, u), f)
            }
        }, {
            key: "avc1hev1",
            value: function(t) {
                var i = t.codecType === VideoCodecType.HEVC,
                    u = i ? n.types.hvc1 : n.types.avc1,
                    f = i ? n.hvcC(t) : n.avcC(t),
                    r = [new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.width >> 8 & 255, t.width & 255, t.height >> 8 & 255, t.height & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), f];
                return i ? r.push(n.box(n.types.fiel, new Uint8Array([1, 0]))) : t.sarRatio && t.sarRatio.length > 1 && r.push(n.pasp(t.sarRatio)), n.box.apply(n, [u].concat(r))
            }
        }, {
            key: "avcC",
            value: function(t) {
                var f, e, i = [],
                    u = [],
                    r;
                return t.sps.forEach(function(n) {
                    r = n.byteLength;
                    i.push(r >>> 8 & 255);
                    i.push(r & 255);
                    i.push.apply(i, _toConsumableArray(n))
                }), t.pps.forEach(function(n) {
                    r = n.byteLength;
                    u.push(r >>> 8 & 255);
                    u.push(r & 255);
                    u.push.apply(u, _toConsumableArray(n))
                }), n.box(n.types.avcC, new Uint8Array((f = (e = [1, i[3], i[4], i[5], 255, 224 | t.sps.length]).concat.apply(e, i).concat([t.pps.length])).concat.apply(f, u)))
            }
        }, {
            key: "hvcC",
            value: function(t) {
                var i = t.hvcC,
                    h;
                if (i instanceof ArrayBuffer || i instanceof Uint8Array) return i;
                var f = t.vps,
                    e = t.sps,
                    o = t.pps,
                    r;
                if (i) {
                    var s = i.generalProfileCompatibilityFlags,
                        u = i.generalConstraintIndicatorFlags,
                        c = (f.length && 1) + (e.length && 1) + (o.length && 1);
                    r = [1, i.generalProfileSpace << 6 | i.generalTierFlag << 5 | i.generalProfileIdc, s >>> 24, s >>> 16, s >>> 8, s, u[0], u[1], u[2], u[3], u[4], u[5], i.generalLevelIdc, 240, 0, 252, i.chromaFormatIdc | 252, i.bitDepthLumaMinus8 | 248, i.bitDepthChromaMinus8 | 248, 0, 0, i.numTemporalLayers << 3 | i.temporalIdNested << 2 | 3, c];
                    h = function(n) {
                        var t;
                        r.push(n.length >> 8, n.length);
                        (t = r).push.apply(t, _toConsumableArray(n))
                    };
                    f.length && (r.push(160, 0, f.length), f.forEach(h));
                    e.length && (r.push(161, 0, e.length), e.forEach(h));
                    o.length && (r.push(162, 0, o.length), o.forEach(h))
                } else r = [1, 1, 96, 0, 0, 0, 144, 0, 0, 0, 0, 0, 93, 240, 0, 252, 253, 248, 248, 0, 0, 15, 3, 160, 0, 1, 0, 24, 64, 1, 12, 1, 255, 255, 1, 96, 0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 153, 152, 9, 161, 0, 1, 0, 45, 66, 1, 1, 1, 96, 0, 0, 3, 0, 144, 0, 0, 3, 0, 0, 3, 0, 93, 160, 2, 128, 128, 45, 22, 89, 153, 164, 147, 43, 154, 128, 128, 128, 130, 0, 0, 3, 0, 2, 0, 0, 3, 0, 50, 16, 162, 0, 1, 0, 7, 68, 1, 193, 114, 180, 98, 64];
                return n.box(n.types.hvcC, new Uint8Array(r))
            }
        }, {
            key: "pasp",
            value: function(t) {
                var u = _slicedToArray(t, 2),
                    i = u[0],
                    r = u[1];
                return n.box(n.types.pasp, new Uint8Array([i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255]))
            }
        }, {
            key: "mp4a",
            value: function(t) {
                return n.box(n.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, t.sampleRate >> 8 & 255, t.sampleRate & 255, 0, 0]), t.config.length ? n.esds(t.config) : undefined)
            }
        }, {
            key: "esds",
            value: function(t) {
                var i = t.length;
                return n.box(n.types.esds, new Uint8Array([0, 0, 0, 0, 3, 23 + i, 0, 0, 0, 4, 15 + i, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5].concat([i]).concat(t).concat([6, 1, 2])))
            }
        }, {
            key: "mvex",
            value: function(t) {
                return n.box.apply(n, [n.types.mvex].concat(_toConsumableArray(t.map(function(t) {
                    return n.trex(t.id)
                }))))
            }
        }, {
            key: "trex",
            value: function(t) {
                return n.box(n.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
            }
        }, {
            key: "trex1",
            value: function(t) {
                return n.box(n.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0]))
            }
        }, {
            key: "trex2",
            value: function(t) {
                return n.box(n.types.trex, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0]))
            }
        }, {
            key: "moof",
            value: function(t) {
                return n.box.apply(n, [n.types.moof, n.mfhd(t[0].samples ? t[0].samples[0].gopId : 0)].concat(_toConsumableArray(t.map(function(t) {
                    return n.traf(t)
                }))))
            }
        }, {
            key: "mfhd",
            value: function(t) {
                return n.box(n.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255]))
            }
        }, {
            key: "traf",
            value: function(t) {
                var r = n.tfhd(t.id),
                    u = n.tfdt(t, t.baseMediaDecodeTime),
                    i = 0,
                    e, f, o, s, h, c;
                if (t.isVideo && t.videoSenc && (e = t.videoSenc, e.forEach(function(n) {
                        i = i + 8;
                        n.subsamples && n.subsamples.length && (i = i + 2, i = i + n.subsamples.length * 6)
                    })), t.videoSencLength = i, t.useEME && (t.isVideoEncryption || t.isAudioEncryption)) {
                    if (t.isVideoEncryption) {
                        if (t.isVideo) {
                            var l = n.saiz(t),
                                a = n.saio(t),
                                v = n.trun1(t),
                                y = n.senc(t);
                            return n.box(n.types.traf, r, u, l, a, v, y)
                        }
                        if (t.isAudioEncryption) {
                            var p = n.sbgp(),
                                w = n.saiz(t),
                                b = n.saio(t),
                                k = n.senc(t),
                                d = n.trun1(t);
                            return n.box(n.types.traf, r, u, p, w, b, k, d)
                        }
                        return s = n.sbgp(), h = n.trun1(t), n.box(n.types.traf, r, u, s, h)
                    }
                    if (t.isVideo) return c = n.trun1(t), n.box(n.types.traf, r, u, c);
                    var g = n.sbgp(),
                        nt = n.saiz(t),
                        tt = n.saio(t),
                        it = n.senc(t),
                        rt = n.trun1(t);
                    return n.box(n.types.traf, r, u, g, nt, tt, it, rt)
                }
                return f = n.sdtp(t), o = 76, n.box(n.types.traf, r, u, f, n.trun(t.samples, f.byteLength + o))
            }
        }, {
            key: "sdtp",
            value: function(t) {
                var i = new Buffer;
                return t.samples.forEach(function(n) {
                    i.write(new Uint8Array(t.isVideo ? [n.keyframe ? 32 : 16] : [16]))
                }), n.box(n.types.sdtp, this.extension(0, 0), i.buffer)
            }
        }, {
            key: "trun1",
            value: function(t) {
                var i = new Buffer,
                    e = Buffer.writeUint32(t.samples.length),
                    r = null,
                    f, u;
                return t.isVideo ? (f = t.videoSencLength, r = Buffer.writeUint32(t.samples.length * 16 + f + 149), !t.isVideoEncryption && t.isAudioEncryption && (r = Buffer.writeUint32(t.samples.length * 16 + 92))) : (u = t.samples.length * 12 + 124, t.isAudioEncryption && (u = t.samples.length * 12 + 8 * t.audioSenc.length + 177), r = Buffer.writeUint32(u)), t.samples.forEach(function(n) {
                    i.write(Buffer.writeUint32(n.duration));
                    i.write(Buffer.writeUint32(n.size));
                    i.write(Buffer.writeUint32(n.keyframe ? 33554432 : 65536));
                    t.isVideo && i.write(Buffer.writeUint32(n.cts ? n.cts : 0))
                }), n.box(n.types.trun, this.extension(0, t.flags), e, r, i.buffer)
            }
        }, {
            key: "senc",
            value: function(t) {
                var i = new Buffer,
                    f = t.samples.length,
                    e = t.isVideo ? 16 : 8,
                    o = t.isVideo ? 2 : 0,
                    u = [],
                    r = 0;
                return t.isVideo ? (u = t.videoSenc, r = t.videoSencLength) : u = t.audioSenc, r = r || e * f, i.write(Buffer.writeUint32(16 + r), n.types.senc, this.extension(0, o)), i.write(Buffer.writeUint32(f)), u.forEach(function(n) {
                    for (var t = 0; t < n.InitializationVector.length; t++) i.write(new Uint8Array([n.InitializationVector[t]]));
                    n.subsamples && n.subsamples.length && (i.write(Buffer.writeUint16(n.subsamples.length)), n.subsamples.forEach(function(n) {
                        i.write(Buffer.writeUint16(n.BytesOfClearData));
                        i.write(Buffer.writeUint32(n.BytesOfProtectedData))
                    }))
                }), i.buffer
            }
        }, {
            key: "saio",
            value: function(t) {
                var i = t.samples.length * 12 + 141,
                    r;
                return !t.isVideo && t.isAudioEncryption && (i = 149), r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255]), n.box(n.types.saio, r)
            }
        }, {
            key: "saiz",
            value: function(t) {
                var i = t.samples.length,
                    r = new Uint8Array([0, 0, 0, 0, 16, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, i & 255]);
                return n.box(n.types.saiz, r)
            }
        }, {
            key: "sbgp",
            value: function() {
                var t = new Uint8Array([114, 111, 108, 108, 0, 0, 0, 1, 0, 0, 1, 25, 0, 0, 0, 1]);
                return n.box(n.types.sbgp, this.extension(0, 0), t)
            }
        }, {
            key: "extension",
            value: function(n, t) {
                return new Uint8Array([n, t >> 16 & 255, t >> 8 & 255, t & 255])
            }
        }, {
            key: "tfhd",
            value: function(t) {
                return n.box(n.types.tfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255]))
            }
        }, {
            key: "tfdt",
            value: function(t, i) {
                var u = Math.floor(i / (UINT32_MAX + 1)),
                    r = Math.floor(i % (UINT32_MAX + 1));
                return t.useEME && (t.isVideoEncryption || t.isAudioEncryption) ? n.box(n.types.tfdt, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255])) : n.box(n.types.tfdt, new Uint8Array([1, 0, 0, 0, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255, r >> 24, r >> 16 & 255, r >> 8 & 255, r & 255]))
            }
        }, {
            key: "trun",
            value: function(t, i) {
                var u = t.length,
                    l = 12 + 16 * u,
                    e, f;
                for (i += 8 + l, e = new Uint8Array(l), e.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, u & 255, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, i & 255], 0), f = 0; f < u; f++) {
                    var o = t[f],
                        s = o.duration,
                        h = o.size,
                        a = o.flag,
                        r = a === void 0 ? {} : a,
                        v = o.cts,
                        c = v === void 0 ? 0 : v;
                    e.set([s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, s & 255, h >>> 24 & 255, h >>> 16 & 255, h >>> 8 & 255, h & 255, r.isLeading << 2 | (r.dependsOn === null || r.dependsOn === undefined ? 1 : r.dependsOn), r.isDependedOn << 6 | r.hasRedundancy << 4 | r.paddingValue << 1 | (r.isNonSyncSample === null || r.isNonSyncSample === undefined ? 1 : r.isNonSyncSample), r.degradationPriority & 61440, r.degradationPriority & 15, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, c & 255], 12 + 16 * f)
                }
                return n.box(n.types.trun, e)
            }
        }, {
            key: "moovMP4",
            value: function(t) {
                var r = t.length - 1,
                    i = t[r],
                    u = Math.ceil(i.duration / i.timescale * 1e3);
                return n.box.apply(n, [n.types.moov, n.mvhd(u, 1e3)].concat(_toConsumableArray(t.map(function(t) {
                    return n.trackMP4(t)
                }))))
            }
        }, {
            key: "trackMP4",
            value: function(t) {
                var i = Math.ceil(t.duration / t.timescale * 1e3);
                return n.box(n.types.trak, n.tkhd(t.id, i, t.width, t.height), n.mdiaMP4(t))
            }
        }, {
            key: "mdiaMP4",
            value: function(t) {
                return n.box(n.types.mdia, n.mdhd(t.duration, t.timescale), n.hdlr(t.type), n.minfMP4(t))
            }
        }, {
            key: "minfMP4",
            value: function(t) {
                return n.box(n.types.minf, t.type === TrackType.VIDEO ? n.VMHD : n.SMHD, n.DINF, n.stblMP4(t))
            }
        }, {
            key: "stblMP4",
            value: function(t) {
                var i = t.ext,
                    r = [n.stsd(t), n.stts(i.stts), n.stsc(i.stsc), n.stsz(i.stsz), n.stco(i.stco)];
                return i.stss.length && r.push(n.stss(i.stss)), i.ctts.length && r.push(n.ctts(i.ctts)), n.box.apply(n, [n.types.stbl].concat(r))
            }
        }, {
            key: "stts",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(8 * i),
                    u = 0;
                return t.forEach(function(n) {
                    var t = n.value,
                        i = n.count;
                    r.set([i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255], u);
                    u += 8
                }), n.box(n.types.stts, concatUint8Array(new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "stsc",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(12 * i),
                    u = 0;
                return t.forEach(function(n) {
                    var t = n.firstChunk,
                        i = n.samplesPerChunk,
                        f = n.sampleDescIndex;
                    r.set([t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, f >> 24, f >> 16 & 255, f >> 8 & 255, f & 255], u);
                    u += 12
                }), n.box(n.types.stsc, concatUint8Array(new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "stsz",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(4 * i),
                    u = 0;
                return t.forEach(function(n) {
                    r.set([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255], u);
                    u += 4
                }), n.box(n.types.stsz, concatUint8Array(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "stco",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(4 * i),
                    u = 0;
                return t.forEach(function(n) {
                    r.set([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255], u);
                    u += 4
                }), n.box(n.types.stco, concatUint8Array(new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "stss",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(4 * i),
                    u = 0;
                return t.forEach(function(n) {
                    r.set([n >> 24, n >> 16 & 255, n >> 8 & 255, n & 255], u);
                    u += 4
                }), n.box(n.types.stss, concatUint8Array(new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "ctts",
            value: function(t) {
                var i = t.length,
                    r = new Uint8Array(8 * i),
                    u = 0;
                return t.forEach(function(n) {
                    var t = n.value,
                        i = n.count;
                    r.set([i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255], u);
                    u += 8
                }), n.box(n.types.ctts, concatUint8Array(new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, i & 255]), r))
            }
        }, {
            key: "styp",
            value: function() {
                return n.box(n.types.styp, new Uint8Array([109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105, 120]))
            }
        }, {
            key: "sidx",
            value: function(t) {
                var f = t.timescale,
                    s = t.samples[0].duration,
                    e = s * t.samples.length,
                    o = t.samples[0].sampleOffset * s,
                    u = 8,
                    r, i, h, c;
                return t.samples.forEach(function(n) {
                    u += n.size
                }), r = 0, t.isVideo ? (i = 0, t.videoSenc && (h = t.videoSenc), t.isVideo && h.forEach(function(n) {
                    i = i + 8;
                    n.subsamples && n.subsamples.length && (i = i + 2, i = i + n.subsamples.length * 6)
                }), t.videoSencLength = i, r = u + 141 + t.samples.length * 16 + i, t.useEME && t.isAudioEncryption && !t.isVideoEncryption && (r = u + t.samples.length * 16 + 84)) : (r = u + 116 + t.samples.length * 12, t.useEME && t.isAudioEncryption && (r = u + 169 + t.samples.length * 12 + 8 * t.audioSenc.length)), c = new Uint8Array([0, 0, 0, 0, 0, 0, 0, t.id & 255, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, f & 255, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, o & 255, 0, 0, 0, 0, 0, 0, 0, 1, 0, r >> 16 & 255, r >> 8 & 255, r & 255, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, e & 255, 144, 0, 0, 0]), n.box(n.types.sidx, c)
            }
        }, {
            key: "mdat",
            value: function(t) {
                return n.box(n.types.mdat, t)
            }
        }])
    }();
_MP = MP4;
_defineProperty(MP4, "types", ["avc1", "avcC", "hvc1", "hvcC", "dinf", "dref", "esds", "ftyp", "hdlr", "mdat", "mdhd", "mdia", "mfhd", "minf", "moof", "moov", "mp4a", "mvex", "mvhd", "pasp", "stbl", "stco", "stsc", "stsd", "stsz", "stts", "tfdt", "tfhd", "traf", "trak", "trex", "tkhd", "vmhd", "smhd", "ctts", "stss", "styp", "pssh", "sidx", "sbgp", "saiz", "saio", "senc", "trun", "encv", "enca", "sinf", "btrt", "frma", "tenc", "schm", "schi", "mehd", "fiel", "sdtp"].reduce(function(n, t) {
    return n[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)], n
}, Object.create(null)));
_defineProperty(MP4, "HDLR_TYPES", {
    video: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
    audio: new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])
});
_defineProperty(MP4, "FTYPAVC1", _MP.box(_MP.types.ftyp, new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99, 49])));
_defineProperty(MP4, "FTYPHEV1", _MP.box(_MP.types.ftyp, new Uint8Array([105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 104, 101, 118, 49])));
_defineProperty(MP4, "DINF", _MP.box(_MP.types.dinf, _MP.box(_MP.types.dref, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]))));
_defineProperty(MP4, "VMHD", _MP.box(_MP.types.vmhd, new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])));
_defineProperty(MP4, "SMHD", _MP.box(_MP.types.smhd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])));
_defineProperty(MP4, "StblTable", new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]));
_defineProperty(MP4, "STTS", _MP.box(_MP.types.stts, _MP.StblTable));
_defineProperty(MP4, "STSC", _MP.box(_MP.types.stsc, _MP.StblTable));
_defineProperty(MP4, "STSZ", _MP.box(_MP.types.stsz, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])));
_defineProperty(MP4, "STCO", _MP.box(_MP.types.stco, _MP.StblTable));
var FMP4Demuxer = function() {
        function n(t, i, r) {
            _classCallCheck(this, n);
            this.videoTrack = t || new VideoTrack;
            this.audioTrack = i || new AudioTrack;
            this.metadataTrack = r || new MetadataTrack
        }
        return _createClass(n, [{
            key: "demux",
            value: function(n, t) {
                var r = this.videoTrack,
                    i = this.audioTrack,
                    e = r.exist(),
                    o = i.exist(),
                    u, f;
                if (r.samples = [], i.samples = [], t && !o) {
                    if (u = MP4Parser.findBox(t, ["moov"])[0], !u) throw new Error("cannot found moov box");
                    MP4Parser.moovToTrack(MP4Parser.moov(u), r, i)
                }
                if (n && !e) {
                    if (f = MP4Parser.findBox(n, ["moov"])[0], !f) throw new Error("cannot found moov box");
                    MP4Parser.moovToTrack(MP4Parser.moov(f), r, i)
                }
                return t && MP4Parser.findBox(t, ["moof"]).forEach(function(n) {
                    var u = MP4Parser.moofToSamples(MP4Parser.moof(n), r, i)[i.id],
                        e = i.baseMediaDecodeTime,
                        f;
                    u && (f = n.start, u.map(function(n) {
                        n.offset += f;
                        var r = t.subarray(n.offset, n.offset + n.size);
                        i.samples.push(new AudioSample(n.dts + e, r, n.duration))
                    }))
                }), n && MP4Parser.findBox(n, ["moof"]).forEach(function(t) {
                    var u = MP4Parser.moofToSamples(MP4Parser.moof(t), r, i),
                        e = r.baseMediaDecodeTime,
                        s = i.baseMediaDecodeTime,
                        o = t.start,
                        f;
                    Object.keys(u).forEach(function(t) {
                        r.id == t ? u[t].map(function(t) {
                            var i, s, u, h;
                            for (t.offset += o, i = new VideoSample((t.pts || t.dts) + e, t.dts + e), i.duration = t.duration, i.gopId = t.gopId, t.keyframe && i.setToKeyframe(), s = n.subarray(t.offset, t.offset + t.size), i.data = s, u = 0, h = s.length - 1; u < h;) f = readBig32(s, u), u += 4, i.units.push(s.subarray(u, u + f)), u += f;
                            r.samples.push(i)
                        }) : i.id == t && u[t].map(function(t) {
                            t.offset += o;
                            var r = n.subarray(t.offset, t.offset + t.size);
                            i.samples.push(new AudioSample(t.dts + s, r, t.duration))
                        })
                    })
                }), t && n && (r.id = 1, i.id = 2), {
                    videoTrack: r,
                    audioTrack: i,
                    metadataTrack: this.metadataTrack
                }
            }
        }, {
            key: "reset",
            value: function() {
                this.videoTrack.reset();
                this.audioTrack.reset();
                this.metadataTrack.reset()
            }
        }], [{
            key: "probe",
            value: function(n) {
                return MP4Parser.probe(n)
            }
        }])
    }(),
    MP4Remuxer = function() {
        function n(t, i) {
            _classCallCheck(this, n);
            this.videoTrack = t;
            this.audioTrack = i
        }
        return _createClass(n, [{
            key: "remux",
            value: function(n, t) {
                this.videoTrack = n || this.videoTrack;
                this.audioTrack = t || this.audioTrack;
                var r = (n === null || n === void 0 ? void 0 : n.exist()) && (n === null || n === void 0 ? void 0 : n.hasSample()),
                    u = (t === null || t === void 0 ? void 0 : t.exist()) && (t === null || t === void 0 ? void 0 : t.hasSample()),
                    i, f;
                return r && u ? i = this._remuxMix(n, t) : r ? i = this._remuxTrack(n) : u && (f = this._remuxTrack(t)), n && (n.samples = []), t && (t.samples = []), {
                    videoSegment: i,
                    audioSegment: f
                }
            }
        }, {
            key: "_remuxMix",
            value: function(n, t) {
                var i = MP4.ftyp([n, t]),
                    r = this._remuxData(n, i.byteLength + 8),
                    u = r.mdatData,
                    f = r.chunkOffset,
                    e = this._remuxData(t, f),
                    o = e.mdatData,
                    s = MP4.mdat(concatUint8Array(u, o)),
                    h = MP4.moovMP4([n, t]);
                return n.ext = undefined, t.ext = undefined, n.samples = [], t.samples = [], concatUint8Array(i, s, h)
            }
        }, {
            key: "_remuxTrack",
            value: function(n) {
                var t = MP4.ftyp([n]),
                    i = this._remuxData(n, t.byteLength + 8),
                    r = i.mdatData,
                    u = MP4.mdat(r),
                    f = MP4.moovMP4([n]);
                return n.ext = undefined, n.samples = [], concatUint8Array(t, u, f)
            }
        }, {
            key: "_remuxData",
            value: function(n, t) {
                var c = this,
                    e = n.type === TrackType.VIDEO,
                    o = n.samples,
                    s = 0,
                    r;
                e ? o.forEach(function(n) {
                    s += n.units.reduce(function(n, t) {
                        return n + t.byteLength
                    }, 0);
                    s += n.units.length * 4
                }) : s = o.reduce(function(n, t) {
                    return n + t.size
                }, 0);
                var h = new Uint8Array(s),
                    y = new DataView(h.buffer),
                    u = n.ext = {
                        stts: [],
                        stsc: [],
                        stsz: [],
                        stco: [],
                        stss: [],
                        ctts: []
                    },
                    l = 1,
                    f = 0,
                    a = 0,
                    i, v = o.length,
                    p = function() {
                        i = o[r];
                        a += i.duration;
                        var n = e ? 0 : i.size;
                        e ? i.units.forEach(function(t) {
                            y.setUint32(f, t.byteLength);
                            f += 4;
                            h.set(t, f);
                            f += t.byteLength;
                            n += 4 + t.byteLength
                        }) : (h.set(i.data, f), f += n);
                        i.size = n;
                        u.stsz.push(n);
                        e && c._fillCttsSamples(u.ctts, i.cts);
                        c._fillSttsSamples(u.stts, i, o[r + 1]);
                        c._fillStcoSamples(u.stco, r, l, t);
                        t += n;
                        e && i.keyframe && u.stss.push(r + 1)
                    };
                for (r = 0; r < v; r++) p();
                return n.duration = a, this._fillStscSamples(u.stsc, v, l), {
                    mdatData: h,
                    chunkOffset: t
                }
            }
        }, {
            key: "_fillSttsSamples",
            value: function(n, t, i) {
                var r = n[n.length - 1];
                if (i) {
                    r && r.value === t.duration ? r.count++ : n.push({
                        value: t.duration,
                        count: 1
                    });
                    return
                }
                r ? r.count++ : n.push({
                    value: 40,
                    count: 1
                })
            }
        }, {
            key: "_fillCttsSamples",
            value: function(n, t) {
                var i = n[n.length - 1];
                i && i.value === t ? i.count++ : n.push({
                    value: t,
                    count: 1
                })
            }
        }, {
            key: "_fillStcoSamples",
            value: function(n, t, i, r) {
                t % i || n.push(r)
            }
        }, {
            key: "_fillStscSamples",
            value: function(n, t, i) {
                if (t <= i) n.push({
                    firstChunk: 1,
                    samplesPerChunk: t,
                    sampleDescIndex: 1
                });
                else {
                    var u = Math.floor(t / i),
                        r = t % i;
                    n.push({
                        firstChunk: 1,
                        samplesPerChunk: i,
                        sampleDescIndex: 1
                    });
                    r && n.push({
                        firstChunk: u + 1,
                        samplesPerChunk: r,
                        sampleDescIndex: 1
                    })
                }
            }
        }])
    }(),
    dataStream = {
        audio: {
            files: [],
            finish: null
        }
    },
    download = function(n, t) {
        var u = new Blob([n], {
                type: "video/mp4"
            }),
            r, i;
        n = null;
        r = URL.createObjectURL(u);
        i = document.createElement("a");
        document.body.appendChild(i);
        i.style = "display: none";
        i.href = r;
        i.download = t;
        i.click();
        window.URL.revokeObjectURL(r)
    },
    arrayConcat = function(n) {
        var r = n.reduce(function(n, t) {
                return n + t.length
            }, 0),
            t = new Uint8Array(r),
            i = 0;
        return n.forEach(function(n) {
            t.set(n, i);
            i += n.length
        }), t
    },
    stop_record = function(n) {
        var r = arrayConcat(dataStream.audio.files),
            t, i, u;
        dataStream = null;
        t = new FMP4Demuxer;
        t.demux(null, r);
        r = null;
        i = new MP4Remuxer;
        u = i.remux(null, t.audioTrack).audioSegment;
        t = null;
        i = null;
        download(u, n + ".wav")
    },
    domand_print = function(n, t, i, r) {
        document.getElementById(n).innerHTML = n + " ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰çŠ¶æ³:" + i + "/" + t + " è©¦è¡Œå›žæ•°:" + (i + r) + " ã‚¨ãƒ©ãƒ¼å›žæ•°:" + r
    },
    downloads = function(n, t, i, r, u) {
        var f, o, s, e, h, c;
        for (f = o = s = 0, e = function e(u) {
                if (u === undefined && (u = s++), !dataStream[r].files[u]) {
                    var c = new XMLHttpRequest;
                    c.withCredentials = !0;
                    c.responseType = "arraybuffer";
                    c.open("GET", n[u]);
                    c.onreadystatechange = function() {
                        c.readyState === XMLHttpRequest.DONE && (c.status >= 200 && c.status < 400 ? (dataStream[r].files[u] = c.response, u ? crypto.subtle.decrypt({
                            name: "AES-CBC",
                            iv: i
                        }, t, dataStream[r].files[u]).then(function(n) {
                            dataStream[r].files[u] = new Uint8Array(n);
                            h()
                        }) : (dataStream[r].files[u] = new Uint8Array(dataStream[r].files[u]), h())) : (domand_print(r, n.length, f, ++o), setTimeout(e, 1e3, u)))
                    };
                    c.send()
                }
            }, h = function() {
                domand_print(r, n.length, ++f, o);
                f === n.length ? (dataStream[r].finish = !0, dataStream.audio.finish && stop_record(u)) : s < n.length && e()
            }, c = 0; c < 2; c++) e()
    },
    get_key = function(n, t, i, r, u) {
        var f = new XMLHttpRequest;
        f.withCredentials = !0;
        f.responseType = "arraybuffer";
        f.open("GET", n);
        f.onreadystatechange = function() {
            if (f.readyState === XMLHttpRequest.DONE && f.status >= 200 && f.status < 400) {
                var n = f.response;
                crypto.subtle.importKey("raw", n, {
                    name: "AES-CBC"
                }, !1, ["decrypt"]).then(function(n) {
                    downloads(i, n, t, r, u)
                })
            }
        };
        f.send()
    },
    m3u8_media = function(n, t, i) {
        var r = new XMLHttpRequest;
        r.withCredentials = !0;
        r.open("GET", n);
        r.onreadystatechange = function() {
            if (r.readyState === XMLHttpRequest.DONE && r.status >= 200 && r.status < 400) {
                var u = r.responseText,
                    f = null,
                    e = null,
                    n = u.replace(/"/g, "\n").split("\n"),
                    o = n.filter(function(n) {
                        return n.indexOf(".cmfv") !== -1 || n.indexOf(".cmfa") !== -1
                    }),
                    f = n.filter(function(n) {
                        return n.indexOf(".key") !== -1
                    })[0],
                    e = Uint8Array.from(n.filter(function(n) {
                        return /^,IV=0x[0-9A-F]{32}$/.test(n)
                    })[0].slice(6).match(/.{2}/g).map(function(n) {
                        return parseInt(n, 16)
                    }));
                get_key(f, e, o, t, i)
            }
        };
        r.send()
    },
    m3u8_variants = function(n, t) {
        var i = new XMLHttpRequest;
        i.withCredentials = !0;
        i.open("GET", n);
        i.onreadystatechange = function() {
            if (i.readyState === XMLHttpRequest.DONE && i.status >= 200 && i.status < 400) {
                var n = i.responseText,
                    r = n.replace(/"/g, "\n").split("\n"),
                    u = r.filter(function(n) {
                        return n.indexOf(".m3u8") !== -1
                    });
                document.body.innerHTML = '<p id="audio">audio ãƒ€ã‚¦ãƒ³ãƒ­ãƒ¼ãƒ‰çŠ¶æ³:0/0 è©¦è¡Œå›žæ•°:0 ã‚¨ãƒ©ãƒ¼å›žæ•°:0<\/p>';
                m3u8_media(u[0], "audio", t)
            }
        };
        i.send()
    },
    domand = function(n, t, i) {
        var f = "https://nvapi.nicovideo.jp/v1/watch/" + t + "/access-rights/hls?actionTrackId=AAAAAAAAAA_" + i,
            r = new XMLHttpRequest,
            u;
        r.withCredentials = !0;
        r.open("POST", f);
        r.setRequestHeader("Content-Type", "application/json");
        r.setRequestHeader("X-Access-Right-Key", n.accessRightKey);
        r.setRequestHeader("X-Frontend-Id", "6");
        r.setRequestHeader("X-Frontend-Version", "0");
        r.setRequestHeader("X-Request-With", "https://www.nicovideo.jp");
        r.onreadystatechange = function() {
            if (r.readyState === XMLHttpRequest.DONE) {
                var n = JSON.parse(r.responseText);
                r.status >= 200 && r.status < 400 && m3u8_variants(n.data.contentUrl, t)
            }
        };
        u = [];
        n.videos.forEach(function(t) {
            n.audios.forEach(function(n) {
                t.isAvailable && n.isAvailable && u.push([t.id, n.id])
            })
        });
        r.send(JSON.stringify({
            outputs: [u[0]]
        }))
    },
    v3 = function v3(n, t, i) {
        var u = "https://www.nicovideo.jp/api/watch/v3" + (n ? "_guest/" : "/") + t + "?_frontendId=6&_frontendVersion=0&actionTrackId=AAAAAAAAAA_" + i + "&skips=harmful&noSideEffect=false&t=" + i,
            r = new XMLHttpRequest;
        r.withCredentials = !0;
        r.open("GET", u);
        r.onreadystatechange = function() {
            if (r.readyState === XMLHttpRequest.DONE) {
                var u = JSON.parse(r.responseText);
                r.status >= 200 && r.status < 400 ? u.data.media.domand ? domand(u.data.media.domand, t, i) : document.body.innerHTML = "<p>" + u.data.okReason + "<\/p>" : n ? document.body.innerHTML = "<p>" + u.meta.errorCode + "<\/p>" : v3(!0, t, i)
            }
        };
        r.send()
    };
/flapi\.nicovideo\.jp\/\?(\w+)/.test(document.URL) && (video_id = RegExp.$1, t = (new Date).getTime(), v3(!1, video_id, t))
