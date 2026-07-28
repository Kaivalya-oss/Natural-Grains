import require$$6 from "url";
import require$$1$1 from "querystring";
import require$$0$1 from "fs";
import require$$1 from "path";
import require$$4 from "https";
import require$$5$1 from "http";
import { r as requireExtend, a as requireIsString, b as requireIsEmpty, c as requireIsUndefined, d as requireIsObject, e as requireIsArray, f as requireIsFunction, g as requireIsPlainObject, h as requireMap, i as requireTake, j as requireAt, k as requireClone, l as requireFilter, m as requireIncludes, n as requireIsNumber, o as requireCompact, p as requireFirst, q as requireLast, s as requireLodash } from "./lodash.mjs";
import require$$0 from "crypto";
import require$$5 from "stream";
import { c as commonjsGlobal } from "./react.mjs";
var cloudinary$1 = { exports: {} };
var entries;
var hasRequiredEntries;
function requireEntries() {
  if (hasRequiredEntries) return entries;
  hasRequiredEntries = 1;
  entries = Object.entries ? Object.entries : function(obj) {
    let ownProps = Object.keys(obj), i = ownProps.length, resArray = new Array(i);
    while (i--) {
      resArray[i] = [ownProps[i], obj[ownProps[i]]];
    }
    return resArray;
  };
  return entries;
}
var config;
var hasRequiredConfig;
function requireConfig() {
  if (hasRequiredConfig) return config;
  hasRequiredConfig = 1;
  const extend = requireExtend();
  const isObject = requireIsObject();
  const isString = requireIsString();
  const isUndefined = requireIsUndefined();
  const isEmpty = requireIsEmpty();
  const entries2 = requireEntries();
  const { URL } = require$$6;
  let cloudinary_config = void 0;
  function putNestedValue(params, key, value) {
    let chain = key.split(/[\[\]]+/).filter((i) => i.length);
    let outer = params;
    let lastKey = chain.pop();
    for (let j = 0; j < chain.length; j++) {
      let innerKey = chain[j];
      let inner = outer[innerKey];
      if (inner == null) {
        inner = {};
        outer[innerKey] = inner;
      }
      outer = inner;
    }
    outer[lastKey] = value;
    return params;
  }
  function parseCloudinaryConfigFromEnvURL(ENV_STR) {
    let conf = {};
    const uri = new URL(ENV_STR);
    const auth = uri.username && uri.password ? `${uri.username}:${uri.password}` : uri.username || null;
    if (uri.protocol === "cloudinary:") {
      conf = Object.assign({}, conf, {
        cloud_name: uri.hostname,
        api_key: uri.username || auth && auth.split(":")[0],
        api_secret: uri.password || auth && auth.split(":")[1],
        private_cdn: uri.pathname != null && uri.pathname !== "" && uri.pathname !== "/",
        secure_distribution: uri.pathname && uri.pathname !== "/" ? uri.pathname.substring(1) : void 0
      });
    } else if (uri.protocol === "account:") {
      conf = Object.assign({}, conf, {
        account_id: uri.hostname,
        provisioning_api_key: uri.username || auth && auth.split(":")[0],
        provisioning_api_secret: uri.password || auth && auth.split(":")[1]
      });
    }
    return conf;
  }
  function extendCloudinaryConfigFromQuery(ENV_URL, confToExtend = {}) {
    const url = new URL(ENV_URL);
    if (url.search) {
      const query = {};
      url.searchParams.forEach((value, key) => {
        query[key] = value;
      });
      entries2(query).forEach(([key, value]) => putNestedValue(confToExtend, key, value));
    }
  }
  function extendCloudinaryConfig(parsedConfig, confToExtend = {}) {
    entries2(parsedConfig).forEach(([key, value]) => {
      if (value !== void 0) {
        confToExtend[key] = value;
      }
    });
    return confToExtend;
  }
  config = function(new_config, new_value) {
    if (cloudinary_config == null || new_config === true) {
      if (cloudinary_config == null) {
        cloudinary_config = {};
      } else {
        Object.keys(cloudinary_config).forEach((key) => delete cloudinary_config[key]);
      }
      let CLOUDINARY_ENV_URL = process.env.CLOUDINARY_URL;
      let CLOUDINARY_ENV_ACCOUNT_URL = process.env.CLOUDINARY_ACCOUNT_URL;
      let CLOUDINARY_API_PROXY = process.env.CLOUDINARY_API_PROXY;
      if (CLOUDINARY_ENV_URL && !CLOUDINARY_ENV_URL.toLowerCase().startsWith("cloudinary://")) {
        throw new Error("Invalid CLOUDINARY_URL protocol. URL should begin with 'cloudinary://'");
      }
      if (CLOUDINARY_ENV_ACCOUNT_URL && !CLOUDINARY_ENV_ACCOUNT_URL.toLowerCase().startsWith("account://")) {
        throw new Error("Invalid CLOUDINARY_ACCOUNT_URL protocol. URL should begin with 'account://'");
      }
      if (!isEmpty(CLOUDINARY_API_PROXY)) {
        extendCloudinaryConfig({ api_proxy: CLOUDINARY_API_PROXY }, cloudinary_config);
      }
      [CLOUDINARY_ENV_URL, CLOUDINARY_ENV_ACCOUNT_URL].forEach((ENV_URL) => {
        if (ENV_URL) {
          let parsedConfig = parseCloudinaryConfigFromEnvURL(ENV_URL);
          extendCloudinaryConfig(parsedConfig, cloudinary_config);
          extendCloudinaryConfigFromQuery(ENV_URL, cloudinary_config);
        }
      });
    }
    if (!isUndefined(new_value)) {
      cloudinary_config[new_config] = new_value;
    } else if (isString(new_config)) {
      return cloudinary_config[new_config];
    } else if (isObject(new_config)) {
      extend(cloudinary_config, new_config);
    }
    return cloudinary_config;
  };
  return config;
}
var utils = { exports: {} };
var smart_escape_1;
var hasRequiredSmart_escape;
function requireSmart_escape() {
  if (hasRequiredSmart_escape) return smart_escape_1;
  hasRequiredSmart_escape = 1;
  function smart_escape(string, unsafe = /([^a-zA-Z0-9_.\-\/:]+)/g) {
    return string.replace(unsafe, function(match) {
      return match.split("").map(function(c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
      }).join("");
    });
  }
  smart_escape_1 = smart_escape;
  return smart_escape_1;
}
var consumeOption_1;
var hasRequiredConsumeOption;
function requireConsumeOption() {
  if (hasRequiredConsumeOption) return consumeOption_1;
  hasRequiredConsumeOption = 1;
  function consumeOption(options, option_name, default_value) {
    let result = options[option_name];
    delete options[option_name];
    return result != null ? result : default_value;
  }
  consumeOption_1 = consumeOption;
  return consumeOption_1;
}
var toArray_1;
var hasRequiredToArray;
function requireToArray() {
  if (hasRequiredToArray) return toArray_1;
  hasRequiredToArray = 1;
  const isArray = requireIsArray();
  function toArray(arg) {
    switch (true) {
      case arg == null:
        return [];
      case isArray(arg):
        return arg;
      default:
        return [arg];
    }
  }
  toArray_1 = toArray;
  return toArray_1;
}
var base64EncodeURL = {};
var base64Encode = {};
var hasRequiredBase64Encode;
function requireBase64Encode() {
  if (hasRequiredBase64Encode) return base64Encode;
  hasRequiredBase64Encode = 1;
  function base64Encode$1(input) {
    if (!(input instanceof Buffer)) {
      input = Buffer.from(String(input), "binary");
    }
    return input.toString("base64");
  }
  base64Encode.base64Encode = base64Encode$1;
  return base64Encode;
}
var hasRequiredBase64EncodeURL;
function requireBase64EncodeURL() {
  if (hasRequiredBase64EncodeURL) return base64EncodeURL;
  hasRequiredBase64EncodeURL = 1;
  const { base64Encode: base64Encode2 } = requireBase64Encode();
  function base64EncodeURL$1(sourceUrl) {
    try {
      sourceUrl = decodeURI(sourceUrl);
    } catch (error) {
    }
    sourceUrl = encodeURI(sourceUrl);
    return base64Encode2(sourceUrl).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  base64EncodeURL.base64EncodeURL = base64EncodeURL$1;
  return base64EncodeURL;
}
var encodeDoubleArray_1;
var hasRequiredEncodeDoubleArray;
function requireEncodeDoubleArray() {
  if (hasRequiredEncodeDoubleArray) return encodeDoubleArray_1;
  hasRequiredEncodeDoubleArray = 1;
  const isArray = requireIsArray();
  const toArray = requireToArray();
  function encodeDoubleArray(array) {
    array = toArray(array);
    if (!isArray(array[0])) {
      array = [array];
    }
    return array.map((e) => toArray(e).join(",")).join("|");
  }
  encodeDoubleArray_1 = encodeDoubleArray;
  return encodeDoubleArray_1;
}
var auth_token;
var hasRequiredAuth_token;
function requireAuth_token() {
  if (hasRequiredAuth_token) return auth_token;
  hasRequiredAuth_token = 1;
  const crypto = require$$0;
  const smart_escape = requireSmart_escape();
  const unsafe = /([ "#%&'/:;<=>?@[\]^`{|}~]+)/g;
  function digest(message, key) {
    return crypto.createHmac("sha256", Buffer.from(key, "hex")).update(message).digest("hex");
  }
  function escapeToLower(url) {
    const safeUrl = smart_escape(url, unsafe);
    return safeUrl.replace(/%../g, function(match) {
      return match.toLowerCase();
    });
  }
  auth_token = function(options) {
    const tokenName = options.token_name ? options.token_name : "__cld_token__";
    const tokenSeparator = "~";
    if (options.expiration == null) {
      if (options.duration != null) {
        let start = options.start_time != null ? options.start_time : Math.round(Date.now() / 1e3);
        options.expiration = start + options.duration;
      } else {
        throw new Error("Must provide either expiration or duration");
      }
    }
    let tokenParts = [];
    if (options.ip != null) {
      tokenParts.push(`ip=${options.ip}`);
    }
    if (options.start_time != null) {
      tokenParts.push(`st=${options.start_time}`);
    }
    tokenParts.push(`exp=${options.expiration}`);
    if (options.acl != null) {
      if (Array.isArray(options.acl) === true) {
        options.acl = options.acl.join("!");
      }
      tokenParts.push(`acl=${escapeToLower(options.acl)}`);
    }
    let toSign = [...tokenParts];
    if (options.url != null && options.acl == null) {
      let url = escapeToLower(options.url);
      toSign.push(`url=${url}`);
    }
    let auth = digest(toSign.join(tokenSeparator), options.key);
    tokenParts.push(`hmac=${auth}`);
    if (!options.url && !options.acl) {
      throw "authToken must contain either an acl or a url property";
    }
    return `${tokenName}=${tokenParts.join(tokenSeparator)}`;
  };
  return auth_token;
}
var utf8_encode;
var hasRequiredUtf8_encode;
function requireUtf8_encode() {
  if (hasRequiredUtf8_encode) return utf8_encode;
  hasRequiredUtf8_encode = 1;
  utf8_encode = function utf8_encode2(argString) {
    let c1, enc, n;
    if (argString == null) {
      return "";
    }
    let string = argString + "";
    let utftext = "";
    let start = 0;
    let end = 0;
    let stringl = string.length;
    n = 0;
    while (n < stringl) {
      c1 = string.charCodeAt(n);
      enc = null;
      if (c1 < 128) {
        end++;
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(c1 >> 6 | 192, c1 & 63 | 128);
      } else {
        enc = String.fromCharCode(c1 >> 12 | 224, c1 >> 6 & 63 | 128, c1 & 63 | 128);
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.slice(start, end);
        }
        utftext += enc;
        start = n + 1;
        end = start;
      }
      n++;
    }
    if (end > start) {
      utftext += string.slice(start, stringl);
    }
    return utftext;
  };
  return utf8_encode;
}
var crc32_1;
var hasRequiredCrc32;
function requireCrc32() {
  if (hasRequiredCrc32) return crc32_1;
  hasRequiredCrc32 = 1;
  const utf8_encode2 = requireUtf8_encode();
  function crc32(str) {
    let crc, i, iTop, table, x, y;
    str = utf8_encode2(str);
    table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D";
    crc = 0;
    x = 0;
    y = 0;
    crc = crc ^ -1;
    i = 0;
    iTop = str.length;
    while (i < iTop) {
      y = (crc ^ str.charCodeAt(i)) & 255;
      x = "0x" + table.substr(y * 9, 8);
      crc = crc >>> 8 ^ x;
      i++;
    }
    crc = crc ^ -1;
    if (crc < 0) {
      crc += 4294967296;
    }
    return crc;
  }
  crc32_1 = crc32;
  return crc32_1;
}
var ensurePresenceOf_1;
var hasRequiredEnsurePresenceOf;
function requireEnsurePresenceOf() {
  if (hasRequiredEnsurePresenceOf) return ensurePresenceOf_1;
  hasRequiredEnsurePresenceOf = 1;
  function ensurePresenceOf(parameters) {
    let missing = Object.keys(parameters).filter((key) => parameters[key] === void 0);
    if (missing.length) {
      console.error(missing.join(",") + " cannot be undefined");
    }
  }
  ensurePresenceOf_1 = ensurePresenceOf;
  return ensurePresenceOf_1;
}
var ensureOption = { exports: {} };
var hasRequiredEnsureOption;
function requireEnsureOption() {
  if (hasRequiredEnsureOption) return ensureOption.exports;
  hasRequiredEnsureOption = 1;
  function defaults(defaultOptions) {
    return function ensureOption2(options, name2, defaultValue) {
      let value;
      if (typeof options[name2] !== "undefined") {
        value = options[name2];
      } else if (typeof defaultOptions[name2] !== "undefined") {
        value = defaultOptions[name2];
      } else if (typeof defaultValue !== "undefined") {
        value = defaultValue;
      } else {
        throw new Error(`Must supply ${name2}`);
      }
      return value;
    };
  }
  ensureOption.exports = defaults({});
  ensureOption.exports.defaults = defaults;
  return ensureOption.exports;
}
var isRemoteUrl_1;
var hasRequiredIsRemoteUrl;
function requireIsRemoteUrl() {
  if (hasRequiredIsRemoteUrl) return isRemoteUrl_1;
  hasRequiredIsRemoteUrl = 1;
  const isString = requireIsString();
  function isRemoteUrl(url) {
    const SUBSTRING_LENGTH = 120;
    const urlSubstring = isString(url) && url.substring(0, SUBSTRING_LENGTH);
    return isString(url) && /^ftp:|^https?:|^gs:|^s3:|^data:([\w-.]+\/[\w-.]+(\+[\w-.]+)?)?(;[\w-.]+=[\w-.]+)*;base64,([a-zA-Z0-9\/+\n=]+)$/.test(urlSubstring);
  }
  isRemoteUrl_1 = isRemoteUrl;
  return isRemoteUrl_1;
}
var getSDKVersions_1;
var hasRequiredGetSDKVersions;
function requireGetSDKVersions() {
  if (hasRequiredGetSDKVersions) return getSDKVersions_1;
  hasRequiredGetSDKVersions = 1;
  const fs = require$$0$1;
  const path = require$$1;
  const sdkCode = "M";
  function readSdkSemver() {
    const pkgJsonPath = path.join(__dirname, "../../../package.json");
    try {
      const pkgJSONFile = fs.readFileSync(pkgJsonPath, "utf-8");
      return JSON.parse(pkgJSONFile).version;
    } catch (e) {
      if (e.code === "ENOENT") {
        return "0.0.0";
      }
      return "n/a";
    }
  }
  function getSDKVersions(useSDKVersion = "default", useNodeVersion = "default") {
    const sdkSemver = useSDKVersion === "default" ? readSdkSemver() : useSDKVersion;
    const version2 = process.version.slice(1);
    const techVersion = useNodeVersion === "default" ? version2 : useNodeVersion;
    const product = "A";
    return {
      sdkSemver,
      techVersion,
      sdkCode,
      product
    };
  }
  getSDKVersions_1 = getSDKVersions;
  return getSDKVersions_1;
}
var removePatchFromSemver;
var hasRequiredRemovePatchFromSemver;
function requireRemovePatchFromSemver() {
  if (hasRequiredRemovePatchFromSemver) return removePatchFromSemver;
  hasRequiredRemovePatchFromSemver = 1;
  removePatchFromSemver = (semVerStr) => {
    let parts = semVerStr.split(".");
    return `${parts[0]}.${parts[1]}`;
  };
  return removePatchFromSemver;
}
var stringPad;
var hasRequiredStringPad;
function requireStringPad() {
  if (hasRequiredStringPad) return stringPad;
  hasRequiredStringPad = 1;
  function repeatStringNumTimes(string, times) {
    let repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  stringPad = (value, targetLength, padString) => {
    targetLength = targetLength >> 0;
    padString = String(typeof padString !== "undefined" ? padString : " ");
    if (value.length > targetLength) {
      return String(value);
    } else {
      targetLength = targetLength - value.length;
      if (targetLength > padString.length) {
        padString += repeatStringNumTimes(padString, targetLength / padString.length);
      }
      return padString.slice(0, targetLength) + String(value);
    }
  };
  return stringPad;
}
var reverseVersion;
var hasRequiredReverseVersion;
function requireReverseVersion() {
  if (hasRequiredReverseVersion) return reverseVersion;
  hasRequiredReverseVersion = 1;
  const stringPad2 = requireStringPad();
  reverseVersion = (semVer) => {
    if (semVer.split(".").length < 2) {
      throw new Error("invalid semVer, must have at least two segments");
    }
    return semVer.split(".").reverse().map((segment) => {
      return stringPad2(segment, 2, "0");
    }).join(".");
  };
  return reverseVersion;
}
var base64Map_1;
var hasRequiredBase64Map;
function requireBase64Map() {
  if (hasRequiredBase64Map) return base64Map_1;
  hasRequiredBase64Map = 1;
  const stringPad2 = requireStringPad();
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let num = 0;
  let base64Map = {};
  [...chars].forEach((char) => {
    let key = num.toString(2);
    key = stringPad2(key, 6, "0");
    base64Map[key] = char;
    num++;
  });
  base64Map_1 = base64Map;
  return base64Map_1;
}
var encodeVersion;
var hasRequiredEncodeVersion;
function requireEncodeVersion() {
  if (hasRequiredEncodeVersion) return encodeVersion;
  hasRequiredEncodeVersion = 1;
  const reverseVersion2 = requireReverseVersion();
  const stringPad2 = requireStringPad();
  const base64Map = requireBase64Map();
  encodeVersion = (semVer) => {
    let strResult = "";
    let parts = semVer.split(".").length;
    let paddedStringLength = parts * 6;
    let paddedReversedSemver = reverseVersion2(semVer);
    let num = parseInt(paddedReversedSemver.split(".").join(""));
    let paddedBinary = num.toString(2);
    paddedBinary = stringPad2(paddedBinary, paddedStringLength, "0");
    if (paddedBinary.length % 6 !== 0) {
      throw "Version must be smaller than 43.21.26)";
    }
    paddedBinary.match(/.{1,6}/g).forEach((bitString) => {
      strResult += base64Map[bitString];
    });
    return strResult;
  };
  return encodeVersion;
}
var analytics;
var hasRequiredAnalytics;
function requireAnalytics() {
  if (hasRequiredAnalytics) return analytics;
  hasRequiredAnalytics = 1;
  const removePatchFromSemver2 = requireRemovePatchFromSemver();
  const encodeVersion2 = requireEncodeVersion();
  function getSDKAnalyticsSignature(analyticsOptions = {}) {
    try {
      const twoPartVersion = removePatchFromSemver2(analyticsOptions.techVersion);
      const encodedSDKVersion = encodeVersion2(analyticsOptions.sdkSemver);
      const encodedTechVersion = encodeVersion2(twoPartVersion);
      const featureCode = analyticsOptions.feature;
      const SDKCode = analyticsOptions.sdkCode;
      const product = analyticsOptions.product;
      const algoVersion = "B";
      return `${algoVersion}${product}${SDKCode}${encodedSDKVersion}${encodedTechVersion}${featureCode}`;
    } catch (e) {
      return "E";
    }
  }
  function getAnalyticsOptions(options) {
    let analyticsOptions = {
      sdkSemver: options.sdkSemver,
      techVersion: options.techVersion,
      sdkCode: options.sdkCode,
      product: options.product,
      feature: "0"
    };
    if (options.urlAnalytics) {
      if (options.accessibility) {
        analyticsOptions.feature = "D";
      }
      if (options.loading === "lazy") {
        analyticsOptions.feature = "C";
      }
      if (options.responsive) {
        analyticsOptions.feature = "A";
      }
      if (options.placeholder) {
        analyticsOptions.feature = "B";
      }
      return analyticsOptions;
    } else {
      return {};
    }
  }
  analytics = {
    getSDKAnalyticsSignature,
    getAnalyticsOptions
  };
  return analytics;
}
const author = "Cloudinary <info@cloudinary.com>";
const name = "cloudinary";
const description = "Cloudinary NPM for node.js integration";
const version = "2.10.0";
const homepage = "https://cloudinary.com";
const license = "MIT";
const repository = { "type": "git", "url": "https://github.com/cloudinary/cloudinary_npm.git" };
const main = "cloudinary.js";
const dependencies = { "lodash": "^4.17.23" };
const devDependencies = { "@types/expect.js": "^0.3.32", "@types/mocha": "^10.0.10", "@types/node": "^22.9.3", "date-fns": "^2.30.0", "dotenv": "^8.2.0", "dtslint": "^2.0.6", "eslint": "^6.8.0", "eslint-config-airbnb-base": "^14.2.1", "eslint-plugin-import": "^2.32.0", "eslint-plugin-node": "^11.1.0", "expect.js": "^0.3.1", "glob": "^7.2.3", "jsdoc": "^4.0.4", "jsdom": "^15.2.1", "jsdom-global": "^3.0.2", "mocha": "^7.2.0", "nyc": "^15.1.0", "rimraf": "^3.0.2", "sinon": "^9.2.4", "typescript": "^4.9.5", "webpack-cli": "^3.3.12" };
const files = ["lib/**/*", "cloudinary.js", "babel.config.js", "package.json", "types/index.d.ts"];
const types = "types";
const scripts = { "test": "tools/scripts/test.sh", "test:unit": "tools/scripts/test.es6.unit.sh", "test-with-temp-cloud": "tools/scripts/tests-with-temp-cloud.sh", "dtslint": "tools/scripts/ditslint.sh", "lint": "tools/scripts/lint.sh", "coverage": "tools/scripts/test.es6.sh --coverage", "test-es6": "tools/scripts/test.es6.sh", "docs": "tools/scripts/docs.sh" };
const engines = { "node": ">=9" };
const require$$35 = {
  author,
  name,
  description,
  version,
  homepage,
  license,
  repository,
  main,
  dependencies,
  devDependencies,
  files,
  types,
  scripts,
  engines
};
var consts;
var hasRequiredConsts;
function requireConsts() {
  if (hasRequiredConsts) return consts;
  hasRequiredConsts = 1;
  const DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION = {
    width: "auto",
    crop: "limit"
  };
  const DEFAULT_POSTER_OPTIONS = {
    format: "jpg",
    resource_type: "video"
  };
  const DEFAULT_VIDEO_SOURCE_TYPES = ["webm", "mp4", "ogv"];
  const CONDITIONAL_OPERATORS = {
    "=": "eq",
    "!=": "ne",
    "<": "lt",
    ">": "gt",
    "<=": "lte",
    ">=": "gte",
    "&&": "and",
    "||": "or",
    "*": "mul",
    "/": "div",
    "+": "add",
    "-": "sub",
    "^": "pow"
  };
  let SIMPLE_PARAMS = [
    ["audio_codec", "ac"],
    ["audio_frequency", "af"],
    ["bit_rate", "br"],
    ["color_space", "cs"],
    ["default_image", "d"],
    ["delay", "dl"],
    ["density", "dn"],
    ["duration", "du"],
    ["end_offset", "eo"],
    ["fetch_format", "f"],
    ["gravity", "g"],
    ["page", "pg"],
    ["prefix", "p"],
    ["start_offset", "so"],
    ["streaming_profile", "sp"],
    ["video_codec", "vc"],
    ["video_sampling", "vs"]
  ];
  const PREDEFINED_VARS = {
    "aspect_ratio": "ar",
    "aspectRatio": "ar",
    "current_page": "cp",
    "currentPage": "cp",
    "duration": "du",
    "face_count": "fc",
    "faceCount": "fc",
    "height": "h",
    "initial_aspect_ratio": "iar",
    "initial_height": "ih",
    "initial_width": "iw",
    "initialAspectRatio": "iar",
    "initialHeight": "ih",
    "initialWidth": "iw",
    "initial_duration": "idu",
    "initialDuration": "idu",
    "page_count": "pc",
    "page_x": "px",
    "page_y": "py",
    "pageCount": "pc",
    "pageX": "px",
    "pageY": "py",
    "tags": "tags",
    "width": "w"
  };
  const TRANSFORMATION_PARAMS = [
    "angle",
    "aspect_ratio",
    "audio_codec",
    "audio_frequency",
    "background",
    "bit_rate",
    "border",
    "color",
    "color_space",
    "crop",
    "default_image",
    "delay",
    "density",
    "dpr",
    "duration",
    "effect",
    "end_offset",
    "fetch_format",
    "flags",
    "fps",
    "gravity",
    "height",
    "if",
    "keyframe_interval",
    "offset",
    "opacity",
    "overlay",
    "page",
    "prefix",
    "quality",
    "radius",
    "raw_transformation",
    "responsive_width",
    "size",
    "start_offset",
    "streaming_profile",
    "transformation",
    "underlay",
    "variables",
    "video_codec",
    "video_sampling",
    "width",
    "x",
    "y",
    "zoom"
    // + any key that starts with '$'
  ];
  const LAYER_KEYWORD_PARAMS = {
    font_weight: "normal",
    font_style: "normal",
    text_decoration: "none",
    text_align: null,
    stroke: "none"
  };
  const UPLOAD_PREFIX = "https://api.cloudinary.com";
  const SUPPORTED_SIGNATURE_ALGORITHMS = ["sha1", "sha256"];
  const DEFAULT_SIGNATURE_ALGORITHM = "sha1";
  consts = {
    DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION,
    DEFAULT_POSTER_OPTIONS,
    DEFAULT_VIDEO_SOURCE_TYPES,
    CONDITIONAL_OPERATORS,
    PREDEFINED_VARS,
    LAYER_KEYWORD_PARAMS,
    TRANSFORMATION_PARAMS,
    SIMPLE_PARAMS,
    UPLOAD_PREFIX,
    SUPPORTED_SIGNATURE_ALGORITHMS,
    DEFAULT_SIGNATURE_ALGORITHM
  };
  return consts;
}
var qPolyfill;
var hasRequiredQPolyfill;
function requireQPolyfill() {
  if (hasRequiredQPolyfill) return qPolyfill;
  hasRequiredQPolyfill = 1;
  const scheduleCompatCallback = typeof setImmediate === "function" ? (fn) => setImmediate(fn) : (fn) => setTimeout(fn, 0);
  function qFinally(onFinally) {
    const handler = typeof onFinally === "function" ? onFinally : () => onFinally;
    const PromiseCtor = typeof this.constructor === "function" && typeof this.constructor.resolve === "function" ? this.constructor : Promise;
    return this.then(
      (value) => PromiseCtor.resolve(handler()).then(() => value),
      (reason) => PromiseCtor.resolve(handler()).then(() => {
        throw reason;
      })
    );
  }
  function qFin(handler) {
    return this.finally(handler);
  }
  function qDone(onFulfilled, onRejected) {
    this.then(onFulfilled, onRejected).catch((err) => {
      scheduleCompatCallback(() => {
        throw err;
      });
    });
  }
  function qNodeify(callback) {
    if (typeof callback !== "function") {
      return this;
    }
    this.then(
      (value) => scheduleCompatCallback(() => callback(null, value)),
      (error) => scheduleCompatCallback(() => callback(error))
    );
    return this;
  }
  function qFail(onRejected) {
    return this.catch(onRejected);
  }
  function qProgress() {
    return this;
  }
  function qSpread(onFulfilled, onRejected) {
    return this.then(
      (values) => {
        if (typeof onFulfilled !== "function") {
          return values;
        }
        if (Array.isArray(values)) {
          return onFulfilled.apply(void 0, values);
        }
        return onFulfilled(values);
      },
      onRejected
    );
  }
  function applyQCompat(promise) {
    if (!promise || typeof promise !== "object" && typeof promise !== "function") {
      return promise;
    }
    if (promise.__cloudinaryQCompatApplied) {
      return promise;
    }
    Object.defineProperty(promise, "__cloudinaryQCompatApplied", {
      value: true,
      enumerable: false
    });
    const nativeThen = promise.then;
    if (typeof nativeThen === "function") {
      promise.then = function(...args) {
        return applyQCompat(nativeThen.apply(this, args));
      };
    }
    const nativeCatch = promise.catch;
    if (typeof nativeCatch === "function") {
      promise.catch = function(...args) {
        return applyQCompat(nativeCatch.apply(this, args));
      };
    }
    const nativeFinally = promise.finally;
    if (typeof nativeFinally === "function") {
      promise.finally = function(...args) {
        return applyQCompat(nativeFinally.apply(this, args));
      };
    } else {
      promise.finally = qFinally;
    }
    if (typeof promise.fin !== "function") {
      promise.fin = qFin;
    }
    if (typeof promise.done !== "function") {
      promise.done = qDone;
    }
    if (typeof promise.nodeify !== "function") {
      promise.nodeify = qNodeify;
    }
    if (typeof promise.fail !== "function") {
      promise.fail = qFail;
    }
    if (typeof promise.progress !== "function") {
      promise.progress = qProgress;
    }
    if (typeof promise.spread !== "function") {
      promise.spread = qSpread;
    }
    return promise;
  }
  qPolyfill = applyQCompat;
  return qPolyfill;
}
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils.exports;
  hasRequiredUtils = 1;
  (function(module, exports) {
    const crypto = require$$0;
    const querystring = require$$1$1;
    const { URL } = require$$6;
    const compact = requireCompact();
    const first = requireFirst();
    const isFunction = requireIsFunction();
    requireIsPlainObject();
    const last = requireLast();
    const map = requireMap();
    const take = requireTake();
    const at = requireAt();
    const clone = requireClone();
    const extend = requireExtend();
    const filter = requireFilter();
    const includes = requireIncludes();
    const isArray = requireIsArray();
    const isEmpty = requireIsEmpty();
    const isNumber = requireIsNumber();
    const isObject = requireIsObject();
    const isString = requireIsString();
    const isUndefined = requireIsUndefined();
    const smart_escape = requireSmart_escape();
    const consumeOption = requireConsumeOption();
    const toArray = requireToArray();
    let { base64EncodeURL: base64EncodeURL2 } = requireBase64EncodeURL();
    const encodeDoubleArray = requireEncodeDoubleArray();
    const config2 = requireConfig();
    const generate_token = requireAuth_token();
    const crc32 = requireCrc32();
    const ensurePresenceOf = requireEnsurePresenceOf();
    const ensureOption2 = requireEnsureOption().defaults(config2());
    const entries2 = requireEntries();
    const isRemoteUrl = requireIsRemoteUrl();
    const getSDKVersions = requireGetSDKVersions();
    const {
      getAnalyticsOptions,
      getSDKAnalyticsSignature
    } = requireAnalytics();
    exports = module.exports;
    const utils2 = module.exports;
    try {
      utils2.VERSION = require$$35.version;
    } catch (error) {
      utils2.VERSION = "";
    }
    function generate_auth_token(options) {
      let token_options = Object.assign({}, config2().auth_token, options);
      return generate_token(token_options);
    }
    exports.CF_SHARED_CDN = "d3jpl91pxevbkh.cloudfront.net";
    exports.OLD_AKAMAI_SHARED_CDN = "cloudinary-a.akamaihd.net";
    exports.AKAMAI_SHARED_CDN = "res.cloudinary.com";
    exports.SHARED_CDN = exports.AKAMAI_SHARED_CDN;
    exports.USER_AGENT = `CloudinaryNodeJS/${exports.VERSION} (Node ${process.versions.node})`;
    exports.userPlatform = "";
    function getUserAgent() {
      return isEmpty(utils2.userPlatform) ? `${utils2.USER_AGENT}` : `${utils2.userPlatform} ${utils2.USER_AGENT}`;
    }
    const {
      DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION,
      DEFAULT_POSTER_OPTIONS,
      DEFAULT_VIDEO_SOURCE_TYPES,
      CONDITIONAL_OPERATORS,
      PREDEFINED_VARS,
      LAYER_KEYWORD_PARAMS,
      TRANSFORMATION_PARAMS,
      SIMPLE_PARAMS,
      UPLOAD_PREFIX,
      SUPPORTED_SIGNATURE_ALGORITHMS,
      DEFAULT_SIGNATURE_ALGORITHM
    } = requireConsts();
    const applyQCompat = requireQPolyfill();
    function textStyle(layer) {
      let keywords = [];
      let style = "";
      if (!isEmpty(layer.text_style)) {
        return layer.text_style;
      }
      Object.keys(LAYER_KEYWORD_PARAMS).forEach((attr) => {
        let default_value = LAYER_KEYWORD_PARAMS[attr];
        let attr_value = layer[attr] || default_value;
        if (attr_value !== default_value) {
          keywords.push(attr_value);
        }
      });
      Object.keys(layer).forEach((attr) => {
        if (attr === "letter_spacing" || attr === "line_spacing") {
          keywords.push(`${attr}_${layer[attr]}`);
        }
        if (attr === "font_hinting") {
          keywords.push(`${attr.split("_").pop()}_${layer[attr]}`);
        }
        if (attr === "font_antialiasing") {
          keywords.push(`antialias_${layer[attr]}`);
        }
      });
      if (layer.hasOwnProperty("font_size") || !isEmpty(keywords)) {
        if (!layer.font_size) throw new Error("Must supply font_size for text in overlay/underlay");
        if (!layer.font_family) throw new Error("Must supply font_family for text in overlay/underlay");
        keywords.unshift(layer.font_size);
        keywords.unshift(layer.font_family);
        style = compact(keywords).join("_");
      }
      return style;
    }
    function normalize_expression(expression) {
      if (!isString(expression) || expression.length === 0 || expression.match(/^!.+!$/)) {
        return expression;
      }
      const operators = "\\|\\||>=|<=|&&|!=|>|=|<|/|-|\\^|\\+|\\*";
      const operatorsPattern = "((" + operators + ")(?=[ _]))";
      const operatorsReplaceRE = new RegExp(operatorsPattern, "g");
      expression = expression.replace(operatorsReplaceRE, (match) => CONDITIONAL_OPERATORS[match]);
      const predefinedVarsPattern = "(" + Object.keys(PREDEFINED_VARS).map((v) => `:${v}|${v}`).join("|") + ")";
      const userVariablePattern = "(\\$_*[^_ ]+)";
      const variablesReplaceRE = new RegExp(`${userVariablePattern}|${predefinedVarsPattern}`, "g");
      expression = expression.replace(variablesReplaceRE, (match) => PREDEFINED_VARS[match] || match);
      return expression.replace(/[ _]+/g, "_");
    }
    function process_custom_function(customFunction) {
      if (!isObject(customFunction)) {
        return customFunction;
      }
      if (customFunction.function_type === "remote") {
        const encodedSource = base64EncodeURL2(customFunction.source);
        return [customFunction.function_type, encodedSource].join(":");
      }
      return [customFunction.function_type, customFunction.source].join(":");
    }
    function process_custom_pre_function(customPreFunction) {
      let result = process_custom_function(customPreFunction);
      return utils2.isString(result) ? `pre:${result}` : null;
    }
    function process_if(ifValue) {
      return ifValue ? "if_" + normalize_expression(ifValue) : ifValue;
    }
    function process_layer(layer) {
      if (isString(layer)) {
        let resourceType = null;
        let layerUrl = "";
        let fetchLayerBegin = "fetch:";
        if (layer.startsWith(fetchLayerBegin)) {
          layerUrl = layer.substring(fetchLayerBegin.length);
        } else if (layer.indexOf(":fetch:", 0) !== -1) {
          const parts = layer.split(":", 3);
          resourceType = parts[0];
          layerUrl = parts[2];
        } else {
          return layer;
        }
        layer = {
          url: layerUrl,
          type: "fetch"
        };
        if (resourceType) {
          layer.resource_type = resourceType;
        }
      }
      if (typeof layer !== "object") {
        return layer;
      }
      let {
        resource_type,
        text,
        type,
        public_id,
        format,
        url: fetchUrl
      } = layer;
      const components = [];
      if (!isEmpty(text) && isEmpty(resource_type)) {
        resource_type = "text";
      }
      if (!isEmpty(fetchUrl) && isEmpty(type)) {
        type = "fetch";
      }
      if (!isEmpty(public_id) && !isEmpty(format)) {
        public_id = `${public_id}.${format}`;
      }
      if (isEmpty(public_id) && resource_type !== "text" && type !== "fetch") {
        throw new Error("Must supply public_id for non-text overlay");
      }
      if (!isEmpty(resource_type) && resource_type !== "image") {
        components.push(resource_type);
      }
      if (!isEmpty(type) && type !== "upload") {
        components.push(type);
      }
      if (resource_type === "text" || resource_type === "subtitles") {
        if (isEmpty(public_id) && isEmpty(text)) {
          throw new Error("Must supply either text or public_in in overlay");
        }
        const textOptions = textStyle(layer);
        if (!isEmpty(textOptions)) {
          components.push(textOptions);
        }
        if (!isEmpty(public_id)) {
          public_id = public_id.replace("/", ":");
          components.push(public_id);
        }
        if (!isEmpty(text)) {
          const variablesRegex = new RegExp(/(\$\([a-zA-Z]\w+\))/g);
          const textDividedByVariables = text.split(variablesRegex).filter((x) => x);
          const encodedParts = textDividedByVariables.map((subText) => {
            const matches = variablesRegex[Symbol.match](subText);
            const isVariable = matches ? matches.length > 0 : false;
            if (isVariable) {
              return subText;
            }
            return encodeCurlyBraces(encodeURIComponent(smart_escape(subText, new RegExp(/([,\/])/g))));
          });
          components.push(encodedParts.join(""));
        }
      } else if (type === "fetch") {
        const encodedUrl = base64EncodeURL2(fetchUrl);
        components.push(encodedUrl);
      } else {
        public_id = public_id.replace("/", ":");
        components.push(public_id);
      }
      return components.join(":");
    }
    function replaceAllSubstrings(string, search2, replacement = "") {
      return string.split(search2).join(replacement);
    }
    function encodeCurlyBraces(input) {
      return replaceAllSubstrings(replaceAllSubstrings(input, "(", "%28"), ")", "%29");
    }
    function process_radius(radius) {
      if (!radius) {
        return radius;
      }
      if (!isArray(radius)) {
        radius = [radius];
      }
      if (radius.length === 0 || radius.length > 4) {
        throw new Error("Radius array should contain between 1 and 4 values");
      }
      if (radius.findIndex((x) => x === null) >= 0) {
        throw new Error("Corner: Cannot be null");
      }
      return radius.map(normalize_expression).join(":");
    }
    function build_multi_and_sprite_params(tagOrOptions, options) {
      let tag = null;
      if (typeof tagOrOptions === "string") {
        tag = tagOrOptions;
      } else {
        if (isEmpty(options)) {
          options = tagOrOptions;
        } else {
          throw new Error("First argument must be a tag when additional options are passed");
        }
        tag = null;
      }
      if (!options && !tag) {
        throw new Error("Either tag or urls are required");
      }
      if (!options) {
        options = {};
      }
      const urls = options.urls;
      const transformation = generate_transformation_string(extend({}, options, {
        fetch_format: options.format
      }));
      return {
        tag,
        transformation,
        urls,
        timestamp: utils2.timestamp(),
        async: options.async,
        notification_url: options.notification_url
      };
    }
    function build_upload_params(options) {
      let params = {
        access_mode: options.access_mode,
        allowed_formats: options.allowed_formats && toArray(options.allowed_formats).join(","),
        asset_folder: options.asset_folder,
        async: utils2.as_safe_bool(options.async),
        backup: utils2.as_safe_bool(options.backup),
        callback: options.callback,
        cinemagraph_analysis: utils2.as_safe_bool(options.cinemagraph_analysis),
        colors: utils2.as_safe_bool(options.colors),
        display_name: options.display_name,
        discard_original_filename: utils2.as_safe_bool(options.discard_original_filename),
        eager: utils2.build_eager(options.eager),
        eager_async: utils2.as_safe_bool(options.eager_async),
        eager_notification_url: options.eager_notification_url,
        eval: options.eval,
        exif: utils2.as_safe_bool(options.exif),
        faces: utils2.as_safe_bool(options.faces),
        folder: options.folder,
        format: options.format,
        filename_override: options.filename_override,
        image_metadata: utils2.as_safe_bool(options.image_metadata),
        media_metadata: utils2.as_safe_bool(options.media_metadata),
        invalidate: utils2.as_safe_bool(options.invalidate),
        moderation: options.moderation,
        notification_url: options.notification_url,
        overwrite: utils2.as_safe_bool(options.overwrite),
        phash: utils2.as_safe_bool(options.phash),
        proxy: options.proxy,
        public_id: options.public_id,
        public_id_prefix: options.public_id_prefix,
        quality_analysis: utils2.as_safe_bool(options.quality_analysis),
        responsive_breakpoints: utils2.generate_responsive_breakpoints_string(options.responsive_breakpoints),
        return_delete_token: utils2.as_safe_bool(options.return_delete_token),
        timestamp: options.timestamp || exports.timestamp(),
        transformation: decodeURIComponent(utils2.generate_transformation_string(clone(options))),
        type: options.type,
        unique_filename: utils2.as_safe_bool(options.unique_filename),
        upload_preset: options.upload_preset,
        use_filename: utils2.as_safe_bool(options.use_filename),
        use_filename_as_display_name: utils2.as_safe_bool(options.use_filename_as_display_name),
        quality_override: options.quality_override,
        accessibility_analysis: utils2.as_safe_bool(options.accessibility_analysis),
        use_asset_folder_as_public_id_prefix: utils2.as_safe_bool(options.use_asset_folder_as_public_id_prefix),
        visual_search: utils2.as_safe_bool(options.visual_search),
        on_success: options.on_success,
        auto_transcription: options.auto_transcription,
        auto_chaptering: utils2.as_safe_bool(options.auto_chaptering)
      };
      return utils2.updateable_resource_params(options, params);
    }
    function encode_key_value(arg) {
      if (!isObject(arg)) {
        return arg;
      }
      return entries2(arg).map(([k, v]) => `${k}=${v}`).join("|");
    }
    function escapeMetadataValue(value) {
      return value.toString().replace(/([=|])/g, "\\$&");
    }
    function encode_context(metadataObj) {
      if (!isObject(metadataObj)) {
        return metadataObj;
      }
      return entries2(metadataObj).map(([key, value]) => {
        if (isString(value)) {
          return `${key}=${escapeMetadataValue(value)}`;
        } else if (isArray(value)) {
          let values = value.map((innerVal) => {
            return `"${escapeMetadataValue(innerVal)}"`;
          }).join(",");
          return `${key}=[${values}]`;
        } else if (Number.isInteger(value)) {
          return `${key}=${escapeMetadataValue(String(value))}`;
        } else {
          return value.toString();
        }
      }).join("|");
    }
    function build_eager(transformations) {
      return toArray(transformations).map((transformation) => {
        const transformationString = utils2.generate_transformation_string(clone(transformation));
        const format = transformation.format;
        return format == null ? transformationString : `${transformationString}/${format}`;
      }).join("|");
    }
    function build_custom_headers(headers) {
      switch (true) {
        case headers == null:
          return void 0;
        case isArray(headers):
          return headers.join("\n");
        case isObject(headers):
          return entries2(headers).map(([k, v]) => `${k}:${v}`).join("\n");
        default:
          return headers;
      }
    }
    function generate_transformation_string(options) {
      if (utils2.isString(options)) {
        return options;
      }
      if (isArray(options)) {
        return options.map((t) => utils2.generate_transformation_string(clone(t))).filter(utils2.present).join("/");
      }
      let responsive_width = consumeOption(options, "responsive_width", config2().responsive_width);
      let width = options.width;
      let height = options.height;
      let size = consumeOption(options, "size");
      if (size) {
        [width, height] = size.split("x");
        [options.width, options.height] = [width, height];
      }
      let has_layer = options.overlay || options.underlay;
      let crop = consumeOption(options, "crop");
      let angle = toArray(consumeOption(options, "angle")).join(".");
      let no_html_sizes = has_layer || utils2.present(angle) || crop === "fit" || crop === "limit" || responsive_width;
      if (width && (width.toString().indexOf("auto") === 0 || no_html_sizes || parseFloat(width) < 1)) {
        delete options.width;
      }
      if (height && (no_html_sizes || parseFloat(height) < 1)) {
        delete options.height;
      }
      let background = consumeOption(options, "background");
      background = background && background.replace(/^#/, "rgb:");
      let color = consumeOption(options, "color");
      color = color && color.replace(/^#/, "rgb:");
      let base_transformations = toArray(consumeOption(options, "transformation", []));
      let named_transformation = [];
      if (base_transformations.some(isObject)) {
        base_transformations = base_transformations.map((tr) => utils2.generate_transformation_string(isObject(tr) ? clone(tr) : { transformation: tr }));
      } else {
        named_transformation = base_transformations.join(".");
        base_transformations = [];
      }
      let effect = consumeOption(options, "effect");
      if (isArray(effect)) {
        effect = effect.join(":");
      } else if (isObject(effect)) {
        effect = entries2(effect).map(([key, value]) => `${key}:${value}`);
      }
      let border = consumeOption(options, "border");
      if (isObject(border)) {
        border = `${border.width != null ? border.width : 2}px_solid_${(border.color != null ? border.color : "black").replace(/^#/, "rgb:")}`;
      } else if (/^\d+$/.exec(border)) {
        options.border = border;
        border = void 0;
      }
      let flags = toArray(consumeOption(options, "flags")).join(".");
      let dpr = consumeOption(options, "dpr", config2().dpr);
      if (options.offset != null) {
        [options.start_offset, options.end_offset] = split_range(consumeOption(options, "offset"));
      }
      if (options.start_offset) {
        options.start_offset = normalize_expression(options.start_offset);
      }
      if (options.end_offset) {
        options.end_offset = normalize_expression(options.end_offset);
      }
      let overlay = process_layer(consumeOption(options, "overlay"));
      let radius = process_radius(consumeOption(options, "radius"));
      let underlay = process_layer(consumeOption(options, "underlay"));
      let ifValue = process_if(consumeOption(options, "if"));
      let custom_function = process_custom_function(consumeOption(options, "custom_function"));
      let custom_pre_function = process_custom_pre_function(consumeOption(options, "custom_pre_function"));
      let fps = consumeOption(options, "fps");
      if (isArray(fps)) {
        fps = fps.join("-");
      }
      let params = {
        a: normalize_expression(angle),
        ar: normalize_expression(consumeOption(options, "aspect_ratio")),
        b: background,
        bo: border,
        c: crop,
        co: color,
        dpr: normalize_expression(dpr),
        e: normalize_expression(effect),
        fl: flags,
        fn: custom_function || custom_pre_function,
        fps,
        h: normalize_expression(height),
        ki: normalize_expression(consumeOption(options, "keyframe_interval")),
        l: overlay,
        o: normalize_expression(consumeOption(options, "opacity")),
        q: normalize_expression(consumeOption(options, "quality")),
        r: radius,
        t: named_transformation,
        u: underlay,
        w: normalize_expression(width),
        x: normalize_expression(consumeOption(options, "x")),
        y: normalize_expression(consumeOption(options, "y")),
        z: normalize_expression(consumeOption(options, "zoom"))
      };
      SIMPLE_PARAMS.forEach(([name2, short]) => {
        let value = consumeOption(options, name2);
        if (value !== void 0) {
          params[short] = value;
        }
      });
      if (params.vc != null) {
        params.vc = process_video_params(params.vc);
      }
      ["so", "eo", "du"].forEach((short) => {
        if (params[short] !== void 0) {
          params[short] = norm_range_value(params[short]);
        }
      });
      let variablesParam = consumeOption(options, "variables", []);
      let variables = entries2(options).filter(([key, value]) => key.startsWith("$")).map(([key, value]) => {
        delete options[key];
        return `${key}_${normalize_expression(value)}`;
      }).sort().concat(variablesParam.map(([name2, value]) => `${name2}_${normalize_expression(value)}`)).join(",");
      let transformations = entries2(params).filter(([key, value]) => utils2.present(value)).map(([key, value]) => key + "_" + value).sort().join(",");
      let raw_transformation = consumeOption(options, "raw_transformation");
      transformations = compact([ifValue, variables, transformations, raw_transformation]).join(",");
      base_transformations.push(transformations);
      transformations = base_transformations;
      if (responsive_width) {
        let responsive_width_transformation = config2().responsive_width_transformation || DEFAULT_RESPONSIVE_WIDTH_TRANSFORMATION;
        transformations.push(utils2.generate_transformation_string(clone(responsive_width_transformation)));
      }
      if (String(width).startsWith("auto") || responsive_width) {
        options.responsive = true;
      }
      if (dpr === "auto") {
        options.hidpi = true;
      }
      return filter(transformations, utils2.present).join("/");
    }
    function updateable_resource_params(options, params = {}) {
      if (options.access_control != null) {
        params.access_control = utils2.jsonArrayParam(options.access_control);
      }
      if (options.auto_tagging != null) {
        params.auto_tagging = options.auto_tagging;
      }
      if (options.background_removal != null) {
        params.background_removal = options.background_removal;
      }
      if (options.categorization != null) {
        params.categorization = options.categorization;
      }
      if (options.context != null) {
        params.context = utils2.encode_context(options.context);
      }
      if (options.metadata != null) {
        params.metadata = utils2.encode_context(options.metadata);
      }
      if (options.custom_coordinates != null) {
        params.custom_coordinates = encodeDoubleArray(options.custom_coordinates);
      }
      if (options.detection != null) {
        params.detection = options.detection;
      }
      if (options.face_coordinates != null) {
        params.face_coordinates = encodeDoubleArray(options.face_coordinates);
      }
      if (options.headers != null) {
        params.headers = utils2.build_custom_headers(options.headers);
      }
      if (options.notification_url != null) {
        params.notification_url = options.notification_url;
      }
      if (options.ocr != null) {
        params.ocr = options.ocr;
      }
      if (options.raw_convert != null) {
        params.raw_convert = options.raw_convert;
      }
      if (options.similarity_search != null) {
        params.similarity_search = options.similarity_search;
      }
      if (options.tags != null) {
        params.tags = toArray(options.tags).join(",");
      }
      if (options.quality_override != null) {
        params.quality_override = options.quality_override;
      }
      if (options.asset_folder != null) {
        params.asset_folder = options.asset_folder;
      }
      if (options.display_name != null) {
        params.display_name = options.display_name;
      }
      if (options.unique_display_name != null) {
        params.unique_display_name = options.unique_display_name;
      }
      if (options.visual_search != null) {
        params.visual_search = options.visual_search;
      }
      if (options.regions != null) {
        params.regions = JSON.stringify(options.regions);
      }
      const autoTranscription = options.auto_transcription;
      if (autoTranscription != null) {
        if (typeof autoTranscription === "boolean") {
          params.auto_transcription = utils2.as_safe_bool(autoTranscription);
        } else {
          const isAutoTranscriptionObject = typeof autoTranscription === "object" && !Array.isArray(autoTranscription);
          if (isAutoTranscriptionObject && Object.keys(autoTranscription).includes("translate")) {
            params.auto_transcription = JSON.stringify(autoTranscription);
          }
        }
      }
      return params;
    }
    const URL_KEYS = ["api_secret", "auth_token", "cdn_subdomain", "cloud_name", "cname", "format", "long_url_signature", "private_cdn", "resource_type", "secure", "secure_cdn_subdomain", "secure_distribution", "shorten", "sign_url", "ssl_detected", "type", "url_suffix", "use_root_path", "version"];
    function extractUrlParams(options) {
      return pickOnlyExistingValues(options, ...URL_KEYS);
    }
    function extractTransformationParams(options) {
      return pickOnlyExistingValues(options, ...TRANSFORMATION_PARAMS);
    }
    function patchFetchFormat(options = {}) {
      if (options.type === "fetch") {
        if (options.fetch_format == null) {
          options.fetch_format = consumeOption(options, "format");
        }
      }
    }
    function build_distribution_domain(source, options) {
      const cloud_name = consumeOption(options, "cloud_name", config2().cloud_name);
      if (!cloud_name) {
        throw new Error("Must supply cloud_name in tag or in configuration");
      }
      let secure = consumeOption(options, "secure", true);
      const ssl_detected = consumeOption(options, "ssl_detected", config2().ssl_detected);
      if (secure === null) {
        secure = ssl_detected || config2().secure;
      }
      const private_cdn = consumeOption(options, "private_cdn", config2().private_cdn);
      const cname = consumeOption(options, "cname", config2().cname);
      const secure_distribution = consumeOption(options, "secure_distribution", config2().secure_distribution);
      const cdn_subdomain = consumeOption(options, "cdn_subdomain", config2().cdn_subdomain);
      const secure_cdn_subdomain = consumeOption(options, "secure_cdn_subdomain", config2().secure_cdn_subdomain);
      return unsigned_url_prefix(source, cloud_name, private_cdn, cdn_subdomain, secure_cdn_subdomain, cname, secure, secure_distribution);
    }
    function url(public_id, options = {}) {
      let signature, source_to_sign;
      utils2.patchFetchFormat(options);
      let type = consumeOption(options, "type", null);
      let transformation = utils2.generate_transformation_string(options);
      let resource_type = consumeOption(options, "resource_type", "image");
      let version2 = consumeOption(options, "version");
      let force_version = consumeOption(options, "force_version", config2().force_version);
      if (force_version == null) {
        force_version = true;
      }
      let long_url_signature = !!consumeOption(options, "long_url_signature", config2().long_url_signature);
      let format = consumeOption(options, "format");
      let shorten = consumeOption(options, "shorten", config2().shorten);
      let sign_url = consumeOption(options, "sign_url", config2().sign_url);
      let api_secret = consumeOption(options, "api_secret", config2().api_secret);
      let url_suffix = consumeOption(options, "url_suffix");
      let use_root_path = consumeOption(options, "use_root_path", config2().use_root_path);
      let signature_algorithm = consumeOption(options, "signature_algorithm", config2().signature_algorithm || DEFAULT_SIGNATURE_ALGORITHM);
      if (long_url_signature) {
        signature_algorithm = "sha256";
      }
      let auth_token2 = consumeOption(options, "auth_token");
      if (auth_token2 !== false) {
        auth_token2 = exports.merge(config2().auth_token, auth_token2);
      }
      let preloaded = /^(image|raw)\/([a-z0-9_]+)\/v(\d+)\/([^#]+)$/.exec(public_id);
      if (preloaded) {
        resource_type = preloaded[1];
        type = preloaded[2];
        version2 = preloaded[3];
        public_id = preloaded[4];
      }
      let original_source = public_id;
      if (public_id == null) {
        return original_source;
      }
      public_id = public_id.toString();
      if (type === null && public_id.match(/^https?:\//i)) {
        return original_source;
      }
      [resource_type, type] = finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten);
      [public_id, source_to_sign] = finalize_source(public_id, format, url_suffix);
      if (version2 == null && force_version && source_to_sign.indexOf("/") >= 0 && !source_to_sign.match(/^v[0-9]+/) && !source_to_sign.match(/^https?:\//)) {
        version2 = 1;
      }
      if (version2 != null) {
        version2 = `v${version2}`;
      } else {
        version2 = null;
      }
      transformation = transformation.replace(/([^:])\/\//g, "$1/");
      if (sign_url && isEmpty(auth_token2)) {
        let to_sign = [transformation, source_to_sign].filter(function(part) {
          return part != null && part !== "";
        }).join("/");
        const signatureConfig = {};
        if (long_url_signature) {
          signatureConfig.algorithm = "sha256";
          signatureConfig.signatureLength = 32;
        } else {
          signatureConfig.algorithm = signature_algorithm;
          signatureConfig.signatureLength = 8;
        }
        const truncated = compute_hash(to_sign + api_secret, signatureConfig.algorithm, "base64").slice(0, signatureConfig.signatureLength).replace(/\//g, "_").replace(/\+/g, "-");
        signature = `s--${truncated}--`;
      }
      let prefix = build_distribution_domain(public_id, options);
      let resultUrl = [prefix, resource_type, type, signature, transformation, version2, public_id].filter(function(part) {
        return part != null && part !== "";
      }).join("/").replace(/ /g, "%20");
      if (sign_url && !isEmpty(auth_token2)) {
        const parsedUrl = new URL(resultUrl, "http://dummy");
        auth_token2.url = parsedUrl.pathname + parsedUrl.search;
        let token = generate_token(auth_token2);
        resultUrl += `?${token}`;
      }
      const urlAnalytics = ensureOption2(options, "urlAnalytics", ensureOption2(options, "analytics", true));
      if (urlAnalytics === true) {
        let {
          sdkCode: sdkCodeDefault,
          sdkSemver: sdkSemverDefault,
          techVersion: techVersionDefault,
          product: productDefault
        } = getSDKVersions();
        const sdkCode = ensureOption2(options, "sdkCode", ensureOption2(options, "sdk_code", sdkCodeDefault));
        const sdkSemver = ensureOption2(options, "sdkSemver", ensureOption2(options, "sdk_semver", sdkSemverDefault));
        const techVersion = ensureOption2(options, "techVersion", ensureOption2(options, "tech_version", techVersionDefault));
        const product = ensureOption2(options, "product", productDefault);
        let sdkVersions = {
          sdkCode,
          sdkSemver,
          techVersion,
          product,
          urlAnalytics
        };
        let analyticsOptions = getAnalyticsOptions(Object.assign({}, options, sdkVersions));
        let sdkAnalyticsSignature = getSDKAnalyticsSignature(analyticsOptions);
        let appender = "?";
        if (resultUrl.indexOf("?") >= 0) {
          appender = "&";
        }
        resultUrl = `${resultUrl}${appender}_a=${sdkAnalyticsSignature}`;
      }
      return resultUrl;
    }
    function video_url(public_id, options) {
      options = extend({
        resource_type: "video"
      }, options);
      return utils2.url(public_id, options);
    }
    function finalize_source(source, format, url_suffix) {
      let source_to_sign;
      source = source.replace(/([^:])\/\//g, "$1/");
      if (source.match(/^https?:\//i)) {
        source = smart_escape(source);
        source_to_sign = source;
      } else {
        source = encodeURIComponent(decodeURIComponent(source)).replace(/%3A/g, ":").replace(/%2F/g, "/");
        source_to_sign = source;
        if (url_suffix) {
          if (url_suffix.match(/[\.\/]/)) {
            throw new Error("url_suffix should not include . or /");
          }
          source = source + "/" + url_suffix;
        }
        if (format != null) {
          source = source + "." + format;
          source_to_sign = source_to_sign + "." + format;
        }
      }
      return [source, source_to_sign];
    }
    function video_thumbnail_url(public_id, options) {
      options = extend({}, DEFAULT_POSTER_OPTIONS, options);
      return utils2.url(public_id, options);
    }
    function finalize_resource_type(resource_type, type, url_suffix, use_root_path, shorten) {
      if (type == null) {
        type = "upload";
      }
      if (url_suffix != null) {
        if (resource_type === "image" && type === "upload") {
          resource_type = "images";
          type = null;
        } else if (resource_type === "image" && type === "private") {
          resource_type = "private_images";
          type = null;
        } else if (resource_type === "image" && type === "authenticated") {
          resource_type = "authenticated_images";
          type = null;
        } else if (resource_type === "raw" && type === "upload") {
          resource_type = "files";
          type = null;
        } else if (resource_type === "video" && type === "upload") {
          resource_type = "videos";
          type = null;
        } else {
          throw new Error("URL Suffix only supported for image/upload, image/private, image/authenticated, video/upload and raw/upload");
        }
      }
      if (use_root_path) {
        if (resource_type === "image" && type === "upload" || resource_type === "images" && type == null) {
          resource_type = null;
          type = null;
        } else {
          throw new Error("Root path only supported for image/upload");
        }
      }
      if (shorten && resource_type === "image" && type === "upload") {
        resource_type = "iu";
        type = null;
      }
      return [resource_type, type];
    }
    function unsigned_url_prefix(source, cloud_name, private_cdn, cdn_subdomain, secure_cdn_subdomain, cname, secure, secure_distribution) {
      let prefix;
      if (cloud_name.indexOf("/") === 0) {
        return "/res" + cloud_name;
      }
      let shared_domain = !private_cdn;
      if (secure) {
        if (secure_distribution == null || secure_distribution === exports.OLD_AKAMAI_SHARED_CDN) {
          secure_distribution = private_cdn ? cloud_name + "-res.cloudinary.com" : exports.SHARED_CDN;
        }
        if (shared_domain == null) {
          shared_domain = secure_distribution === exports.SHARED_CDN;
        }
        if (secure_cdn_subdomain == null && shared_domain) {
          secure_cdn_subdomain = cdn_subdomain;
        }
        if (secure_cdn_subdomain) {
          secure_distribution = secure_distribution.replace("res.cloudinary.com", "res-" + (crc32(source) % 5 + 1 + ".cloudinary.com"));
        }
        prefix = "https://" + secure_distribution;
      } else if (cname) {
        let subdomain = cdn_subdomain ? "a" + (crc32(source) % 5 + 1) + "." : "";
        prefix = "http://" + subdomain + cname;
      } else {
        let cdn_part = private_cdn ? cloud_name + "-" : "";
        let subdomain_part = cdn_subdomain ? "-" + (crc32(source) % 5 + 1) : "";
        let host = [cdn_part, "res", subdomain_part, ".cloudinary.com"].join("");
        prefix = "http://" + host;
      }
      if (shared_domain) {
        prefix += "/" + cloud_name;
      }
      return prefix;
    }
    function base_api_url_v1_1() {
      return base_api_url("v1_1");
    }
    function base_api_url_v2() {
      return base_api_url("v2");
    }
    function base_api_url(api_version) {
      if (!api_version || api_version.length === 0) {
        throw new Error("api_version needs to be a non-empty string");
      }
      return (path = [], options = []) => {
        let cloudinary2 = ensureOption2(options, "upload_prefix", UPLOAD_PREFIX);
        let cloud_name = ensureOption2(options, "cloud_name");
        let encode_path = (unencoded_path) => encodeURIComponent(unencoded_path).replace("'", "%27");
        let encoded_path = Array.isArray(path) ? path.map(encode_path) : encode_path(path);
        return [cloudinary2, api_version, cloud_name].concat(encoded_path).join("/");
      };
    }
    function api_url(action = "upload", options = {}) {
      let resource_type = options.resource_type || "image";
      return base_api_url_v1_1()([resource_type, action], options);
    }
    function random_public_id() {
      return crypto.randomBytes(12).toString("base64").replace(/[^a-z0-9]/g, "");
    }
    function signed_preloaded_image(result) {
      return `${result.resource_type}/upload/v${result.version}/${filter([result.public_id, result.format], utils2.present).join(".")}#${result.signature}`;
    }
    function encode_param(value) {
      return String(value).replace(/&/g, "%26");
    }
    function api_string_to_sign(params_to_sign, signature_version = 2) {
      let params = entries2(params_to_sign).map(([k, v]) => [String(k), Array.isArray(v) ? v.join(",") : v]).filter(([k, v]) => v !== null && v !== void 0 && v !== "");
      params.sort((a, b) => a[0].localeCompare(b[0]));
      let paramStrings = params.map(([k, v]) => {
        const paramString = `${k}=${v}`;
        return signature_version >= 2 ? encode_param(paramString) : paramString;
      });
      return paramStrings.join("&");
    }
    function api_sign_request(params_to_sign, api_secret, signature_algorithm = null, signature_version = null) {
      if (signature_version == null) {
        signature_version = config2().signature_version || 2;
      }
      const to_sign = api_string_to_sign(params_to_sign, signature_version);
      const algo = signature_algorithm || config2().signature_algorithm || DEFAULT_SIGNATURE_ALGORITHM;
      return compute_hash(to_sign + api_secret, algo, "hex");
    }
    function compute_hash(input, signature_algorithm, encoding) {
      if (!SUPPORTED_SIGNATURE_ALGORITHMS.includes(signature_algorithm)) {
        throw new Error(`Signature algorithm ${signature_algorithm} is not supported. Supported algorithms: ${SUPPORTED_SIGNATURE_ALGORITHMS.join(", ")}`);
      }
      const hash = crypto.createHash(signature_algorithm).update(input).digest();
      return Buffer.from(hash).toString(encoding);
    }
    function clear_blank(hash) {
      let filtered_hash = {};
      entries2(hash).filter(([k, v]) => utils2.present(v)).forEach(([k, v]) => {
        filtered_hash[k] = v.filter ? v.filter((x) => x) : v;
      });
      return filtered_hash;
    }
    function sort_object_by_key(object) {
      return Object.keys(object).sort().reduce((obj, key) => {
        obj[key] = object[key];
        return obj;
      }, {});
    }
    function merge(hash1, hash2) {
      return { ...hash1, ...hash2 };
    }
    function sign_request(params, options = {}) {
      let apiKey = ensureOption2(options, "api_key");
      let apiSecret = ensureOption2(options, "api_secret");
      let signature_algorithm = options.signature_algorithm;
      let signature_version = options.signature_version;
      params = exports.clear_blank(params);
      params.signature = exports.api_sign_request(params, apiSecret, signature_algorithm, signature_version);
      params.api_key = apiKey;
      return params;
    }
    function webhook_signature(data, timestamp, options = {}) {
      ensurePresenceOf({
        data,
        timestamp
      });
      let api_secret = ensureOption2(options, "api_secret");
      let signature_algorithm = ensureOption2(options, "signature_algorithm", DEFAULT_SIGNATURE_ALGORITHM);
      return compute_hash(data + timestamp + api_secret, signature_algorithm, "hex");
    }
    function verifyNotificationSignature(body, timestamp, signature, valid_for = 7200) {
      if (timestamp < Math.round(Date.now() / 1e3) - valid_for) {
        return false;
      }
      const payload_hash = utils2.webhook_signature(body, timestamp, {
        api_secret: config2().api_secret,
        signature_algorithm: config2().signature_algorithm
      });
      return signature === payload_hash;
    }
    function process_request_params(params, options) {
      if (options.unsigned != null && options.unsigned) {
        params = exports.clear_blank(params);
        delete params.timestamp;
      } else if (options.oauth_token || config2().oauth_token) {
        params = exports.clear_blank(params);
      } else if (options.signature) {
        params = exports.clear_blank(options);
      } else {
        params = exports.sign_request(params, options);
      }
      return params;
    }
    function private_download_url(public_id, format, options = {}) {
      let params = exports.sign_request({
        timestamp: options.timestamp || exports.timestamp(),
        public_id,
        format,
        type: options.type,
        attachment: options.attachment,
        expires_at: options.expires_at
      }, options);
      return exports.api_url("download", options) + "?" + querystring.stringify(params);
    }
    function zip_download_url(tag, options = {}) {
      let params = exports.sign_request({
        timestamp: options.timestamp || exports.timestamp(),
        tag,
        transformation: utils2.generate_transformation_string(options)
      }, options);
      return exports.api_url("download_tag.zip", options) + "?" + hashToQuery(params);
    }
    function download_backedup_asset(asset_id, version_id, options = {}) {
      let params = exports.sign_request({
        timestamp: options.timestamp || exports.timestamp(),
        asset_id,
        version_id
      }, options);
      return exports.base_api_url_v1()(["download_backup"], options) + "?" + hashToQuery(params);
    }
    function api_download_url(action, params, options) {
      const download_params = {
        ...params,
        mode: "download"
      };
      let cloudinary_params = exports.sign_request(download_params, options);
      return exports.api_url(action, options) + "?" + hashToQuery(cloudinary_params);
    }
    function download_archive_url(options = {}) {
      const params = exports.archive_params(merge(options, {
        mode: "download"
      }));
      return api_download_url("generate_archive", params, options);
    }
    function download_zip_url(options = {}) {
      return exports.download_archive_url(merge(options, {
        target_format: "zip"
      }));
    }
    function download_folder(folder_path, options = {}) {
      options.resource_type = options.resource_type || "all";
      options.prefixes = folder_path;
      let cloudinary_params = exports.sign_request(exports.archive_params(merge(options, {
        mode: "download"
      })), options);
      return exports.api_url("generate_archive", options) + "?" + hashToQuery(cloudinary_params);
    }
    function join_pair(key, value) {
      if (!value) {
        return void 0;
      }
      return value === true ? key : key + "='" + value + "'";
    }
    function escapeQuotes(value) {
      return isString(value) ? value.replace(/\"/g, "&#34;").replace(/\'/g, "&#39;") : value;
    }
    exports.html_attrs = function html_attrs(attrs) {
      return filter(map(attrs, function(value, key) {
        return join_pair(key, escapeQuotes(value));
      })).sort().join(" ");
    };
    const CLOUDINARY_JS_CONFIG_PARAMS = ["api_key", "cloud_name", "private_cdn", "secure_distribution", "cdn_subdomain"];
    function cloudinary_js_config() {
      let params = pickOnlyExistingValues(config2(), ...CLOUDINARY_JS_CONFIG_PARAMS);
      return `<script type='text/javascript'>
$.cloudinary.config(${JSON.stringify(params)});
<\/script>`;
    }
    function v1_result_adapter(callback) {
      if (callback == null) {
        return void 0;
      }
      return function(result) {
        if (result.error != null) {
          return callback(result.error);
        }
        return callback(void 0, result);
      };
    }
    function v1_adapter(name2, num_pass_args, v1) {
      return function(...args) {
        let pass_args = take(args, num_pass_args);
        let options = args[num_pass_args];
        let callback = args[num_pass_args + 1];
        if (callback == null && isFunction(options)) {
          callback = options;
          options = {};
        }
        callback = v1_result_adapter(callback);
        args = pass_args.concat([callback, options]);
        return v1[name2].apply(this, args);
      };
    }
    function v1_adapters(exports2, v1, mapping) {
      return Object.keys(mapping).map((name2) => {
        let num_pass_args = mapping[name2];
        exports2[name2] = v1_adapter(name2, num_pass_args, v1);
        return exports2[name2];
      });
    }
    function as_safe_bool(value) {
      if (value == null) {
        return void 0;
      }
      if (value === true || value === "true" || value === "1") {
        value = 1;
      }
      if (value === false || value === "false" || value === "0") {
        value = 0;
      }
      return value;
    }
    const NUMBER_PATTERN = "([0-9]*)\\.([0-9]+)|([0-9]+)";
    const OFFSET_ANY_PATTERN = `(${NUMBER_PATTERN})([%pP])?`;
    const RANGE_VALUE_RE = RegExp(`^${OFFSET_ANY_PATTERN}$`);
    const OFFSET_ANY_PATTERN_RE = RegExp(`(${OFFSET_ANY_PATTERN})\\.\\.(${OFFSET_ANY_PATTERN})`);
    function split_range(range) {
      switch (range.constructor) {
        case String:
          if (!OFFSET_ANY_PATTERN_RE.test(range)) {
            return range;
          }
          return range.split("..");
        case Array:
          return [first(range), last(range)];
        default:
          return [null, null];
      }
    }
    function norm_range_value(value) {
      let offset = String(value).match(RANGE_VALUE_RE);
      if (offset) {
        let modifier = offset[5] ? "p" : "";
        value = `${offset[1] || offset[4]}${modifier}`;
      }
      return value;
    }
    function process_video_params(param) {
      switch (param.constructor) {
        case Object: {
          let video = "";
          if ("codec" in param) {
            video = param.codec;
            if ("profile" in param) {
              video += ":" + param.profile;
              if ("level" in param) {
                video += ":" + param.level;
              }
            }
          }
          return video;
        }
        case String:
          return param;
        default:
          return null;
      }
    }
    function archive_params(options = {}) {
      return {
        allow_missing: exports.as_safe_bool(options.allow_missing),
        async: exports.as_safe_bool(options.async),
        expires_at: options.expires_at,
        flatten_folders: exports.as_safe_bool(options.flatten_folders),
        flatten_transformations: exports.as_safe_bool(options.flatten_transformations),
        keep_derived: exports.as_safe_bool(options.keep_derived),
        mode: options.mode,
        notification_url: options.notification_url,
        prefixes: options.prefixes && toArray(options.prefixes),
        fully_qualified_public_ids: options.fully_qualified_public_ids && toArray(options.fully_qualified_public_ids),
        public_ids: options.public_ids && toArray(options.public_ids),
        skip_transformation_name: exports.as_safe_bool(options.skip_transformation_name),
        tags: options.tags && toArray(options.tags),
        target_format: options.target_format,
        target_public_id: options.target_public_id,
        target_asset_folder: options.target_asset_folder,
        target_tags: options.target_tags && toArray(options.target_tags),
        timestamp: options.timestamp || exports.timestamp(),
        transformations: utils2.build_eager(options.transformations),
        type: options.type,
        use_original_filename: exports.as_safe_bool(options.use_original_filename)
      };
    }
    exports.process_layer = process_layer;
    exports.create_source_tag = function create_source_tag(src, source_type, codecs = null) {
      let video_type = source_type === "ogv" ? "ogg" : source_type;
      let mime_type = `video/${video_type}`;
      if (!isEmpty(codecs)) {
        let codecs_str = isArray(codecs) ? codecs.join(", ") : codecs;
        mime_type += `; codecs=${codecs_str}`;
      }
      return `<source ${utils2.html_attrs({
        src,
        type: mime_type
      })}>`;
    };
    function build_explicit_api_params(public_id, options = {}) {
      return [exports.build_upload_params(extend({}, { public_id }, options))];
    }
    function generate_responsive_breakpoints_string(breakpoints) {
      if (breakpoints == null) {
        return null;
      }
      breakpoints = clone(breakpoints);
      if (!isArray(breakpoints)) {
        breakpoints = [breakpoints];
      }
      for (let j = 0; j < breakpoints.length; j++) {
        let breakpoint_settings = breakpoints[j];
        if (breakpoint_settings != null) {
          if (breakpoint_settings.transformation) {
            breakpoint_settings.transformation = utils2.generate_transformation_string(clone(breakpoint_settings.transformation));
          }
        }
      }
      return JSON.stringify(breakpoints);
    }
    function build_streaming_profiles_param(options = {}) {
      let params = pickOnlyExistingValues(options, "display_name", "representations");
      if (isArray(params.representations)) {
        params.representations = JSON.stringify(params.representations.map((r) => ({
          transformation: utils2.generate_transformation_string(r.transformation)
        })));
      }
      return params;
    }
    function hashToParameters(hash) {
      return entries2(hash).reduce((parameters, [key, value]) => {
        if (isArray(value)) {
          key = key.endsWith("[]") ? key : key + "[]";
          const items = value.map((v) => [key, v]);
          parameters = parameters.concat(items);
        } else {
          parameters.push([key, value]);
        }
        return parameters;
      }, []);
    }
    function hashToQuery(hash) {
      return hashToParameters(hash).map(([key, value]) => `${querystring.escape(key)}=${querystring.escape(value)}`).join("&");
    }
    function present(value) {
      return value != null && ("" + value).length > 0;
    }
    function pickOnlyExistingValues(source, ...keys) {
      let result = {};
      if (source) {
        keys.forEach((key) => {
          if (source[key] != null) {
            result[key] = source[key];
          }
        });
      }
      return result;
    }
    function jsonArrayParam(data, modifier) {
      if (!data) {
        return null;
      }
      if (isString(data)) {
        data = JSON.parse(data);
      }
      if (!isArray(data)) {
        data = [data];
      }
      if (isFunction(modifier)) {
        data = modifier(data);
      }
      return JSON.stringify(data);
    }
    exports.NOP = function() {
    };
    function deferredPromise() {
      let resolve, reject;
      const promise = new Promise((_resolve, _reject) => {
        resolve = _resolve;
        reject = _reject;
      });
      applyQCompat(promise);
      promise.catch(() => {
      });
      return {
        resolve,
        reject,
        promise
      };
    }
    exports.deferredPromise = deferredPromise;
    exports.generate_auth_token = generate_auth_token;
    exports.getUserAgent = getUserAgent;
    exports.build_upload_params = build_upload_params;
    exports.build_multi_and_sprite_params = build_multi_and_sprite_params;
    exports.api_download_url = api_download_url;
    exports.timestamp = () => Math.floor((/* @__PURE__ */ new Date()).getTime() / 1e3);
    exports.option_consume = consumeOption;
    exports.build_array = toArray;
    exports.encode_double_array = encodeDoubleArray;
    exports.encode_key_value = encode_key_value;
    exports.encode_context = encode_context;
    exports.build_eager = build_eager;
    exports.build_custom_headers = build_custom_headers;
    exports.generate_transformation_string = generate_transformation_string;
    exports.updateable_resource_params = updateable_resource_params;
    exports.extractUrlParams = extractUrlParams;
    exports.extractTransformationParams = extractTransformationParams;
    exports.patchFetchFormat = patchFetchFormat;
    exports.url = url;
    exports.video_url = video_url;
    exports.video_thumbnail_url = video_thumbnail_url;
    exports.api_url = api_url;
    exports.random_public_id = random_public_id;
    exports.signed_preloaded_image = signed_preloaded_image;
    exports.api_sign_request = api_sign_request;
    exports.clear_blank = clear_blank;
    exports.merge = merge;
    exports.sign_request = sign_request;
    exports.webhook_signature = webhook_signature;
    exports.verifyNotificationSignature = verifyNotificationSignature;
    exports.process_request_params = process_request_params;
    exports.private_download_url = private_download_url;
    exports.zip_download_url = zip_download_url;
    exports.download_archive_url = download_archive_url;
    exports.download_zip_url = download_zip_url;
    exports.cloudinary_js_config = cloudinary_js_config;
    exports.v1_adapters = v1_adapters;
    exports.as_safe_bool = as_safe_bool;
    exports.archive_params = archive_params;
    exports.build_explicit_api_params = build_explicit_api_params;
    exports.generate_responsive_breakpoints_string = generate_responsive_breakpoints_string;
    exports.build_streaming_profiles_param = build_streaming_profiles_param;
    exports.hashToParameters = hashToParameters;
    exports.present = present;
    exports.only = pickOnlyExistingValues;
    exports.pickOnlyExistingValues = pickOnlyExistingValues;
    exports.jsonArrayParam = jsonArrayParam;
    exports.download_folder = download_folder;
    exports.base_api_url_v1 = base_api_url_v1_1;
    exports.base_api_url_v2 = base_api_url_v2;
    exports.download_backedup_asset = download_backedup_asset;
    exports.compute_hash = compute_hash;
    exports.build_distribution_domain = build_distribution_domain;
    exports.sort_object_by_key = sort_object_by_key;
    exports.DEFAULT_POSTER_OPTIONS = DEFAULT_POSTER_OPTIONS;
    exports.DEFAULT_VIDEO_SOURCE_TYPES = DEFAULT_VIDEO_SOURCE_TYPES;
    Object.assign(module.exports, {
      normalize_expression,
      at,
      clone,
      extend,
      filter,
      includes,
      isArray,
      isEmpty,
      isNumber,
      isObject,
      isRemoteUrl,
      isString,
      isUndefined,
      keys: (source) => Object.keys(source),
      ensurePresenceOf
    });
    function verify_api_response_signature(public_id, version2, signature) {
      const api_secret = config2().api_secret;
      const expected = exports.api_sign_request(
        {
          public_id,
          version: version2
        },
        api_secret,
        null,
        1
      );
      return signature === expected;
    }
    exports.verify_api_response_signature = verify_api_response_signature;
  })(utils, utils.exports);
  return utils.exports;
}
var uploader$1 = {};
var cache;
var hasRequiredCache;
function requireCache() {
  if (hasRequiredCache) return cache;
  hasRequiredCache = 1;
  const CACHE = /* @__PURE__ */ Symbol.for("com.cloudinary.cache");
  const CACHE_ADAPTER = /* @__PURE__ */ Symbol.for("com.cloudinary.cacheAdapter");
  const { ensurePresenceOf, generate_transformation_string } = requireUtils();
  class CacheAdapter {
    /**
     * Get a value from the cache
     * @param {string} publicId
     * @param {string} type
     * @param {string} resourceType
     * @param {string} transformation
     * @param {string} format
     * @return {*} the value associated with the provided arguments
     */
    get(publicId, type, resourceType, transformation, format) {
    }
    /**
     * Set a new value in the cache
     * @param {string} publicId
     * @param {string} type
     * @param {string} resourceType
     * @param {string} transformation
     * @param {string} format
     * @param {*} value
     */
    set(publicId, type, resourceType, transformation, format, value) {
    }
    /**
     * Delete all values in the cache
     */
    flushAll() {
    }
  }
  const Cache = {
    /**
     * The adapter interface. Extend this class to implement a specific adapter.
     * @type CacheAdapter
     */
    CacheAdapter,
    /**
     * Set the cache adapter
     * @param {CacheAdapter} adapter The cache adapter
     */
    setAdapter(adapter) {
      if (this.adapter) {
        console.warn("Overriding existing cache adapter");
      }
      this.adapter = adapter;
    },
    /**
     * Get the adapter the Cache is using
     * @return {CacheAdapter} the current cache adapter
     */
    getAdapter() {
      return this.adapter;
    },
    /**
     * Get an item from the cache
     * @param {string} publicId
     * @param {object} options
     * @return {*}
     */
    get(publicId, options) {
      if (!this.adapter) {
        return void 0;
      }
      ensurePresenceOf({ publicId });
      let transformation = generate_transformation_string({ ...options });
      return this.adapter.get(
        publicId,
        options.type || "upload",
        options.resource_type || "image",
        transformation,
        options.format
      );
    },
    /**
     * Set a new value in the cache
     * @param {string} publicId
     * @param {object} options
     * @param {*} value
     * @return {*}
     */
    set(publicId, options, value) {
      if (!this.adapter) {
        return void 0;
      }
      ensurePresenceOf({ publicId, value });
      let transformation = generate_transformation_string({ ...options });
      return this.adapter.set(
        publicId,
        options.type || "upload",
        options.resource_type || "image",
        transformation,
        options.format,
        value
      );
    },
    /**
     * Clear all items in the cache
     * @return {*} Returns the value from the adapter's flushAll() method
     */
    flushAll() {
      if (!this.adapter) {
        return void 0;
      }
      return this.adapter.flushAll();
    }
  };
  Object.defineProperty(Cache, "instance", {
    get() {
      return commonjsGlobal[CACHE];
    }
  });
  Object.defineProperty(Cache, "adapter", {
    /**
     *
     * @return {CacheAdapter} The current cache adapter
     */
    get() {
      return commonjsGlobal[CACHE_ADAPTER];
    },
    /**
     * Set the cache adapter to be used by Cache
     * @param {CacheAdapter} adapter Cache adapter
     */
    set(adapter) {
      commonjsGlobal[CACHE_ADAPTER] = adapter;
    }
  });
  Object.freeze(Cache);
  let symbols = Object.getOwnPropertySymbols(commonjsGlobal);
  if (symbols.indexOf(CACHE) < 0) {
    commonjsGlobal[CACHE] = Cache;
  }
  cache = Cache;
  return cache;
}
var upload_stream;
var hasRequiredUpload_stream;
function requireUpload_stream() {
  if (hasRequiredUpload_stream) return upload_stream;
  hasRequiredUpload_stream = 1;
  const Transform = require$$5.Transform;
  class UploadStream extends Transform {
    constructor(options) {
      super();
      this.boundary = options.boundary;
    }
    _transform(data, encoding, next) {
      let buffer = Buffer.isBuffer(data) ? data : Buffer.from(data, encoding);
      this.push(buffer);
      next();
    }
    _flush(next) {
      this.push(Buffer.from("\r\n", "ascii"));
      this.push(Buffer.from("--" + this.boundary + "--", "ascii"));
      return next();
    }
  }
  upload_stream = UploadStream;
  return upload_stream;
}
var hasRequiredUploader$1;
function requireUploader$1() {
  if (hasRequiredUploader$1) return uploader$1;
  hasRequiredUploader$1 = 1;
  (function(exports) {
    const fs = require$$0$1;
    const {
      extname,
      basename
    } = require$$1;
    const Writable = require$$5.Writable;
    const { upload_prefix } = requireConfig()();
    const isSecure = !(upload_prefix && upload_prefix.slice(0, 5) === "http:");
    const https = isSecure ? require$$4 : require$$5$1;
    const { URL } = require$$6;
    const Cache = requireCache();
    const utils2 = requireUtils();
    const UploadStream = requireUpload_stream();
    const config2 = requireConfig();
    const ensureOption2 = requireEnsureOption().defaults(config2());
    const agent = config2.api_proxy ? new https.Agent(config2.api_proxy) : null;
    const {
      build_upload_params,
      extend,
      includes,
      isEmpty,
      isObject,
      isRemoteUrl,
      merge,
      pickOnlyExistingValues
    } = utils2;
    exports.unsigned_upload_stream = function unsigned_upload_stream(upload_preset, callback, options = {}) {
      return exports.upload_stream(callback, merge(options, {
        unsigned: true,
        upload_preset
      }));
    };
    exports.upload_stream = function upload_stream2(callback, options = {}) {
      return exports.upload(null, callback, extend({
        stream: true
      }, options));
    };
    exports.unsigned_upload = function unsigned_upload(file, upload_preset, callback, options = {}) {
      return exports.upload(file, callback, merge(options, {
        unsigned: true,
        upload_preset
      }));
    };
    exports.upload = function upload(file, callback, options = {}) {
      return call_api("upload", callback, options, function() {
        let params = build_upload_params(options);
        return isRemoteUrl(file) ? [params, { file }] : [params, {}, file];
      });
    };
    exports.upload_large = function upload_large(path, callback, options = {}) {
      if (path != null && isRemoteUrl(path)) {
        return exports.upload(path, callback, options);
      }
      if (path != null && !options.filename) {
        options.filename = path.split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "");
      }
      return exports.upload_chunked(path, callback, extend({
        resource_type: "raw"
      }, options));
    };
    exports.upload_chunked = function upload_chunked(path, callback, options) {
      let file_reader = fs.createReadStream(path);
      let out_stream = exports.upload_chunked_stream(callback, options);
      return file_reader.pipe(out_stream);
    };
    class Chunkable extends Writable {
      constructor(options) {
        super(options);
        this.chunk_size = options.chunk_size != null ? options.chunk_size : 2e7;
        this.buffer = Buffer.alloc(0);
        this.active = true;
        this.on("finish", () => {
          if (this.active) {
            this.emit("ready", this.buffer, true, function() {
            });
          }
        });
      }
      _write(data, encoding, done) {
        if (!this.active) {
          done();
        }
        if (this.buffer.length + data.length <= this.chunk_size) {
          this.buffer = Buffer.concat([this.buffer, data], this.buffer.length + data.length);
          done();
        } else {
          const grab = this.chunk_size - this.buffer.length;
          this.buffer = Buffer.concat([this.buffer, data.slice(0, grab)], this.buffer.length + grab);
          this.emit("ready", this.buffer, false, (active) => {
            this.active = active;
            if (this.active) {
              const remaining = data.slice(grab);
              this.buffer = Buffer.alloc(0);
              this._write(remaining, encoding, done);
            }
          });
        }
      }
    }
    exports.upload_large_stream = function upload_large_stream(_unused_, callback, options = {}) {
      return exports.upload_chunked_stream(callback, extend({
        resource_type: "raw"
      }, options));
    };
    exports.upload_chunked_stream = function upload_chunked_stream(callback, options = {}) {
      options = extend({}, options, {
        stream: true
      });
      options.x_unique_upload_id = utils2.random_public_id();
      let params = build_upload_params(options);
      let chunk_size = options.chunk_size != null ? options.chunk_size : options.part_size;
      let chunker = new Chunkable({
        chunk_size
      });
      let sent = 0;
      chunker.on("ready", function(buffer, is_last, done) {
        let chunk_start = sent;
        sent += buffer.length;
        options.content_range = `bytes ${chunk_start}-${sent - 1}/${is_last ? sent : -1}`;
        params.timestamp = utils2.timestamp();
        let finished_part = function(result) {
          const errorOrLast = result.error != null || is_last;
          if (errorOrLast && typeof callback === "function") {
            callback(result);
          }
          return done(!errorOrLast);
        };
        let stream = call_api("upload", finished_part, options, function() {
          return [params, {}, buffer];
        });
        return stream.write(buffer, "buffer", function() {
          return stream.end();
        });
      });
      return chunker;
    };
    exports.explicit = function explicit(public_id, callback, options = {}) {
      return call_api("explicit", callback, options, function() {
        return utils2.build_explicit_api_params(public_id, options);
      });
    };
    exports.create_archive = function create_archive(callback, options = {}, target_format = null) {
      return call_api("generate_archive", callback, options, function() {
        let opt = utils2.archive_params(options);
        if (target_format) {
          opt.target_format = target_format;
        }
        return [opt];
      });
    };
    exports.create_zip = function create_zip(callback, options = {}) {
      return exports.create_archive(callback, options, "zip");
    };
    exports.create_slideshow = function create_slideshow(options, callback) {
      options.resource_type = ensureOption2(options, "resource_type", "video");
      return call_api("create_slideshow", callback, options, function() {
        const manifest_transformation = utils2.generate_transformation_string(extend({}, options.manifest_transformation));
        const transformation = utils2.generate_transformation_string(extend({}, ensureOption2(options, "transformation", {})));
        return [
          {
            timestamp: utils2.timestamp(),
            manifest_transformation,
            upload_preset: options.upload_preset,
            overwrite: options.overwrite,
            public_id: options.public_id,
            notification_url: options.notification_url,
            manifest_json: options.manifest_json,
            tags: options.tags,
            transformation
          }
        ];
      });
    };
    exports.destroy = function destroy(public_id, callback, options = {}) {
      return call_api("destroy", callback, options, function() {
        return [
          {
            timestamp: utils2.timestamp(),
            type: options.type,
            invalidate: options.invalidate,
            public_id,
            notification_url: options.notification_url
          }
        ];
      });
    };
    exports.rename = function rename(from_public_id, to_public_id, callback, options = {}) {
      return call_api("rename", callback, options, function() {
        return [
          {
            timestamp: utils2.timestamp(),
            type: options.type,
            from_public_id,
            to_public_id,
            overwrite: options.overwrite,
            invalidate: options.invalidate,
            to_type: options.to_type,
            context: options.context,
            metadata: options.metadata,
            notification_url: options.notification_url
          }
        ];
      });
    };
    const TEXT_PARAMS = ["public_id", "font_family", "font_size", "font_color", "text_align", "font_weight", "font_style", "background", "opacity", "text_decoration", "font_hinting", "font_antialiasing"];
    exports.text = function text(content, callback, options = {}) {
      return call_api("text", callback, options, function() {
        let textParams = pickOnlyExistingValues(options, ...TEXT_PARAMS);
        let params = {
          timestamp: utils2.timestamp(),
          text: content,
          ...textParams
        };
        return [params];
      });
    };
    exports.generate_sprite = function generate_sprite(tag, callback, options = {}) {
      return call_api("sprite", callback, options, function() {
        return [utils2.build_multi_and_sprite_params(tag, options)];
      });
    };
    exports.download_generated_sprite = function download_generated_sprite(tag, options = {}) {
      return utils2.api_download_url("sprite", utils2.build_multi_and_sprite_params(tag, options), options);
    };
    exports.download_multi = function download_multi(tag, options = {}) {
      return utils2.api_download_url("multi", utils2.build_multi_and_sprite_params(tag, options), options);
    };
    exports.multi = function multi(tag, callback, options = {}) {
      return call_api("multi", callback, options, function() {
        return [utils2.build_multi_and_sprite_params(tag, options)];
      });
    };
    exports.explode = function explode(public_id, callback, options = {}) {
      return call_api("explode", callback, options, function() {
        const transformation = utils2.generate_transformation_string(extend({}, options));
        return [
          {
            timestamp: utils2.timestamp(),
            public_id,
            transformation,
            format: options.format,
            type: options.type,
            notification_url: options.notification_url
          }
        ];
      });
    };
    exports.add_tag = function add_tag(tag, public_ids = [], callback, options = {}) {
      const exclusive = utils2.option_consume("exclusive", options);
      const command = exclusive ? "set_exclusive" : "add";
      return call_tags_api(tag, command, public_ids, callback, options);
    };
    exports.remove_tag = function remove_tag(tag, public_ids = [], callback, options = {}) {
      return call_tags_api(tag, "remove", public_ids, callback, options);
    };
    exports.remove_all_tags = function remove_all_tags(public_ids = [], callback, options = {}) {
      return call_tags_api(null, "remove_all", public_ids, callback, options);
    };
    exports.replace_tag = function replace_tag(tag, public_ids = [], callback, options = {}) {
      return call_tags_api(tag, "replace", public_ids, callback, options);
    };
    function call_tags_api(tag, command, public_ids = [], callback, options = {}) {
      return call_api("tags", callback, options, function() {
        let params = {
          timestamp: utils2.timestamp(),
          public_ids: utils2.build_array(public_ids),
          command,
          type: options.type
        };
        if (tag != null) {
          params.tag = tag;
        }
        return [params];
      });
    }
    exports.add_context = function add_context(context, public_ids = [], callback, options = {}) {
      return call_context_api(context, "add", public_ids, callback, options);
    };
    exports.remove_all_context = function remove_all_context(public_ids = [], callback, options = {}) {
      return call_context_api(null, "remove_all", public_ids, callback, options);
    };
    function call_context_api(context, command, public_ids = [], callback, options = {}) {
      return call_api("context", callback, options, function() {
        let params = {
          timestamp: utils2.timestamp(),
          public_ids: utils2.build_array(public_ids),
          command,
          type: options.type
        };
        if (context != null) {
          params.context = utils2.encode_context(context);
        }
        return [params];
      });
    }
    function cacheResults(result, {
      type,
      resource_type
    }) {
      if (result.responsive_breakpoints) {
        result.responsive_breakpoints.forEach(
          ({
            transformation,
            url,
            breakpoints
          }) => Cache.set(
            result.public_id,
            {
              type,
              resource_type,
              raw_transformation: transformation,
              format: extname(breakpoints[0].url).slice(1)
            },
            breakpoints.map((i) => i.width)
          )
        );
      }
    }
    function parseResult(buffer, res) {
      let result = "";
      try {
        result = JSON.parse(buffer);
        if (result.error && !result.error.name) {
          result.error.name = "Error";
        }
      } catch (jsonError) {
        result = {
          error: {
            message: `Server return invalid JSON response. Status Code ${res.statusCode}. ${jsonError}`,
            name: "Error"
          }
        };
      }
      return result;
    }
    function call_api(action, callback, options, get_params) {
      if (typeof callback !== "function") {
        callback = function() {
        };
      }
      const USE_PROMISES = !options.disable_promises;
      const deferred = utils2.deferredPromise();
      if (options == null) {
        options = {};
      }
      let [params, unsigned_params, file] = get_params.call();
      params = utils2.process_request_params(params, options);
      params = extend(params, unsigned_params);
      let api_url = utils2.api_url(action, options);
      let boundary = utils2.random_public_id();
      let errorRaised = false;
      let handle_response = function(res) {
        if (errorRaised) ;
        else if (res.error) {
          errorRaised = true;
          if (USE_PROMISES) {
            deferred.reject(res);
          }
          callback(res);
        } else if (includes([200, 400, 401, 404, 420, 500], res.statusCode)) {
          let buffer = "";
          res.on("data", (d) => {
            buffer += d;
            return buffer;
          });
          res.on("end", () => {
            let result2;
            if (errorRaised) {
              return;
            }
            result2 = parseResult(buffer, res);
            if (result2.error) {
              result2.error.http_code = res.statusCode;
              if (USE_PROMISES) {
                deferred.reject(result2.error);
              }
            } else {
              cacheResults(result2, options);
              if (USE_PROMISES) {
                deferred.resolve(result2);
              }
            }
            callback(result2);
          });
          res.on("error", (error) => {
            errorRaised = true;
            if (USE_PROMISES) {
              deferred.reject(error);
            }
            callback({ error });
          });
        } else {
          let error = {
            message: `Server returned unexpected status code - ${res.statusCode}`,
            http_code: res.statusCode,
            name: "UnexpectedResponse"
          };
          if (USE_PROMISES) {
            deferred.reject(error);
          }
          callback({ error });
        }
      };
      let post_data = utils2.hashToParameters(params).filter(([key, value]) => value != null).map(
        ([key, value]) => Buffer.from(encodeFieldPart(boundary, key, value), "utf8")
      );
      let result = post(api_url, post_data, boundary, file, handle_response, options);
      if (isObject(result)) {
        return result;
      }
      if (USE_PROMISES) {
        return deferred.promise;
      }
    }
    function post(url, post_data, boundary, file, callback, options) {
      let file_header;
      let finish_buffer = Buffer.from("--" + boundary + "--", "ascii");
      let oauth_token = options.oauth_token || config2().oauth_token;
      if (file != null || options.stream) {
        let filename = options.stream ? options.filename ? options.filename : "file" : basename(file);
        file_header = Buffer.from(encodeFilePart(boundary, "application/octet-stream", "file", filename), "binary");
      }
      const parsedUrl = new URL(url);
      let post_options = {
        protocol: parsedUrl.protocol,
        hostname: parsedUrl.hostname,
        path: parsedUrl.pathname + parsedUrl.search,
        pathname: parsedUrl.pathname,
        query: parsedUrl.search ? parsedUrl.search.substring(1) : ""
      };
      if (parsedUrl.port) {
        post_options.port = parsedUrl.port;
      }
      let headers = {
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "User-Agent": utils2.getUserAgent()
      };
      if (options.content_range != null) {
        headers["Content-Range"] = options.content_range;
      }
      if (options.x_unique_upload_id != null) {
        headers["X-Unique-Upload-Id"] = options.x_unique_upload_id;
      }
      if (options.extra_headers !== null) {
        headers = merge(headers, options.extra_headers);
      }
      if (oauth_token != null) {
        headers.Authorization = `Bearer ${oauth_token}`;
      }
      post_options = extend(post_options, {
        method: "POST",
        headers
      });
      if (options.agent != null) {
        post_options.agent = options.agent;
      }
      let proxy = options.api_proxy || config2().api_proxy;
      if (!isEmpty(proxy)) {
        if (!post_options.agent && agent) {
          post_options.agent = agent;
        } else if (!post_options.agent) {
          post_options.agent = new https.Agent(proxy);
        } else {
          console.warn("Proxy is set, but request uses a custom agent, proxy is ignored.");
        }
      }
      let post_request = https.request(post_options, callback);
      let upload_stream2 = new UploadStream({ boundary });
      upload_stream2.pipe(post_request);
      let timeout = false;
      post_request.on("error", function(error) {
        if (timeout) {
          error = {
            message: "Request Timeout",
            http_code: 499,
            name: "TimeoutError"
          };
        }
        return callback({ error });
      });
      post_request.setTimeout(options.timeout != null ? options.timeout : 6e4, function() {
        timeout = true;
        return post_request.abort();
      });
      post_data.forEach((postDatum) => post_request.write(postDatum));
      if (options.stream) {
        post_request.write(file_header);
        return upload_stream2;
      }
      if (file != null) {
        post_request.write(file_header);
        fs.createReadStream(file).on("error", function(error) {
          callback({
            error
          });
          return post_request.abort();
        }).pipe(upload_stream2);
      } else {
        post_request.write(finish_buffer);
        post_request.end();
      }
      return true;
    }
    function encodeFieldPart(boundary, name2, value) {
      return [
        `--${boundary}\r
`,
        `Content-Disposition: form-data; name="${name2}"\r
`,
        "\r\n",
        `${value}\r
`,
        ""
      ].join("");
    }
    function encodeFilePart(boundary, type, name2, filename) {
      return [
        `--${boundary}\r
`,
        `Content-Disposition: form-data; name="${name2}"; filename="${filename}"\r
`,
        `Content-Type: ${type}\r
`,
        "\r\n",
        ""
      ].join("");
    }
    exports.direct_upload = function direct_upload(callback_url, options = {}) {
      let params = build_upload_params(extend({
        callback: callback_url
      }, options));
      params = utils2.process_request_params(params, options);
      let api_url = utils2.api_url("upload", options);
      return {
        hidden_fields: params,
        form_attrs: {
          action: api_url,
          method: "POST",
          enctype: "multipart/form-data"
        }
      };
    };
    exports.upload_tag_params = function upload_tag_params(options = {}) {
      let params = build_upload_params(options);
      params = utils2.process_request_params(params, options);
      return JSON.stringify(params);
    };
    exports.upload_url = function upload_url(options = {}) {
      if (options.resource_type == null) {
        options.resource_type = "auto";
      }
      return utils2.api_url("upload", options);
    };
    exports.image_upload_tag = function image_upload_tag(field, options = {}) {
      let html_options = options.html || {};
      let tag_options = extend({
        type: "file",
        name: "file",
        "data-url": exports.upload_url(options),
        "data-form-data": exports.upload_tag_params(options),
        "data-cloudinary-field": field,
        "data-max-chunk-size": options.chunk_size,
        "class": [html_options.class, "cloudinary-fileupload"].join(" ")
      }, html_options);
      return `<input ${utils2.html_attrs(tag_options)}/>`;
    };
    exports.unsigned_image_upload_tag = function unsigned_image_upload_tag(field, upload_preset, options = {}) {
      return exports.image_upload_tag(field, merge(options, {
        unsigned: true,
        upload_preset
      }));
    };
    exports.update_metadata = function update_metadata(metadata, public_ids, callback, options = {}) {
      return call_api("metadata", callback, options, function() {
        let params = {
          metadata: utils2.encode_context(metadata),
          public_ids: utils2.build_array(public_ids),
          timestamp: utils2.timestamp(),
          type: options.type,
          clear_invalid: options.clear_invalid
        };
        return [params];
      });
    };
  })(uploader$1);
  return uploader$1;
}
var api$1 = {};
var execute_request_1;
var hasRequiredExecute_request;
function requireExecute_request() {
  if (hasRequiredExecute_request) return execute_request_1;
  hasRequiredExecute_request = 1;
  const config2 = requireConfig();
  const https = /^http:/.test(config2().upload_prefix) ? require$$5$1 : require$$4;
  const querystring = require$$1$1;
  const utils2 = requireUtils();
  const ensureOption2 = requireEnsureOption().defaults(config2());
  const { URL } = require$$6;
  const { extend, includes, isEmpty } = utils2;
  const agent = config2.api_proxy ? new https.Agent(config2.api_proxy) : null;
  function execute_request(method, params, auth, api_url, callback, options = {}) {
    method = method.toUpperCase();
    const deferred = utils2.deferredPromise();
    let query_params, handle_response;
    let key = auth.key;
    let secret = auth.secret;
    let oauth_token = auth.oauth_token;
    let content_type = "application/x-www-form-urlencoded";
    if (options.content_type === "json") {
      query_params = JSON.stringify(params);
      content_type = "application/json";
    } else {
      query_params = querystring.stringify(params);
    }
    if (method === "GET") {
      api_url += "?" + query_params;
    }
    const parsedUrl = new URL(api_url);
    let request_options = {
      protocol: parsedUrl.protocol,
      hostname: parsedUrl.hostname,
      path: parsedUrl.pathname + parsedUrl.search,
      pathname: parsedUrl.pathname,
      query: parsedUrl.search ? parsedUrl.search.substring(1) : ""
    };
    if (parsedUrl.port) {
      request_options.port = parsedUrl.port;
    }
    request_options = extend(request_options, {
      method,
      headers: {
        "Content-Type": content_type,
        "User-Agent": utils2.getUserAgent()
      }
    });
    if (oauth_token) {
      request_options.headers.Authorization = `Bearer ${oauth_token}`;
    } else {
      request_options.auth = key + ":" + secret;
    }
    if (options.agent != null) {
      request_options.agent = options.agent;
    }
    let proxy = options.api_proxy || config2().api_proxy;
    if (!isEmpty(proxy)) {
      if (!request_options.agent && agent) {
        request_options.agent = agent;
      } else if (!request_options.agent) {
        request_options.agent = new https.Agent(proxy);
      } else {
        console.warn("Proxy is set, but request uses a custom agent, proxy is ignored.");
      }
    }
    if (method !== "GET") {
      request_options.headers["Content-Length"] = Buffer.byteLength(query_params);
    }
    handle_response = function(res) {
      const { hide_sensitive = false, debug = false } = config2();
      const sanitizedOptions = { ...request_options };
      const requestId = res.headers["x-request-id"];
      if (hide_sensitive === true) {
        if ("auth" in sanitizedOptions) {
          delete sanitizedOptions.auth;
        }
        if ("Authorization" in sanitizedOptions.headers) {
          delete sanitizedOptions.headers.Authorization;
        }
      }
      if (includes([200, 400, 401, 403, 404, 409, 420, 500], res.statusCode)) {
        let buffer = "";
        let error = false;
        res.on("data", function(d) {
          buffer += d;
          return buffer;
        });
        res.on("end", function() {
          let result;
          if (error) {
            return;
          }
          try {
            result = JSON.parse(buffer);
          } catch (e) {
            result = {
              error: {
                message: "Server return invalid JSON response. Status Code " + res.statusCode
              }
            };
          }
          if (result.error) {
            result.error.http_code = res.statusCode;
            if (debug && requestId) {
              result.error.request_id = requestId;
            }
          } else {
            if (res.headers["x-featureratelimit-limit"]) {
              result.rate_limit_allowed = parseInt(res.headers["x-featureratelimit-limit"]);
            }
            if (res.headers["x-featureratelimit-reset"]) {
              result.rate_limit_reset_at = new Date(res.headers["x-featureratelimit-reset"]);
            }
            if (res.headers["x-featureratelimit-remaining"]) {
              result.rate_limit_remaining = parseInt(res.headers["x-featureratelimit-remaining"]);
            }
            if (debug && requestId) {
              result.request_id = requestId;
            }
          }
          if (result.error) {
            deferred.reject(Object.assign({
              request_options: sanitizedOptions,
              query_params
            }, result));
          } else {
            deferred.resolve(result);
          }
          if (typeof callback === "function") {
            callback(result);
          }
        });
        res.on("error", function(e) {
          error = true;
          let err_obj = {
            error: {
              message: e,
              http_code: res.statusCode,
              request_options: sanitizedOptions,
              query_params
            }
          };
          if (debug && requestId) {
            err_obj.error.request_id = requestId;
          }
          deferred.reject(err_obj.error);
          if (typeof callback === "function") {
            callback(err_obj);
          }
        });
      } else {
        let err_obj = {
          error: {
            message: "Server returned unexpected status code - " + res.statusCode,
            http_code: res.statusCode,
            request_options: sanitizedOptions,
            query_params
          }
        };
        if (debug && requestId) {
          err_obj.error.request_id = requestId;
        }
        deferred.reject(err_obj.error);
        if (typeof callback === "function") {
          callback(err_obj);
        }
      }
    };
    const request = https.request(request_options, handle_response);
    request.on("error", function(e) {
      deferred.reject(e);
      return typeof callback === "function" ? callback({ error: e }) : void 0;
    });
    request.setTimeout(ensureOption2(options, "timeout", 6e4));
    if (method !== "GET") {
      request.write(query_params);
    }
    request.end();
    return deferred.promise;
  }
  execute_request_1 = execute_request;
  return execute_request_1;
}
var call_api_1;
var hasRequiredCall_api;
function requireCall_api() {
  if (hasRequiredCall_api) return call_api_1;
  hasRequiredCall_api = 1;
  const config2 = requireConfig();
  const utils2 = requireUtils();
  const ensureOption2 = requireEnsureOption().defaults(config2());
  const execute_request = requireExecute_request();
  const { ensurePresenceOf } = utils2;
  function call_api(method, uri, params, callback, options) {
    ensurePresenceOf({ method, uri });
    const api_url = utils2.base_api_url_v1()(uri, options);
    let auth = {};
    if (options.oauth_token || config2().oauth_token) {
      auth = {
        oauth_token: ensureOption2(options, "oauth_token")
      };
    } else {
      auth = {
        key: ensureOption2(options, "api_key"),
        secret: ensureOption2(options, "api_secret")
      };
    }
    return execute_request(method, params, auth, api_url, callback, options);
  }
  call_api_1 = call_api;
  return call_api_1;
}
var hasRequiredApi$1;
function requireApi$1() {
  if (hasRequiredApi$1) return api$1;
  hasRequiredApi$1 = 1;
  const utils2 = requireUtils();
  const call_api = requireCall_api();
  const {
    extend,
    pickOnlyExistingValues
  } = utils2;
  const TRANSFORMATIONS_URI = "transformations";
  function deleteResourcesParams(options, params = {}) {
    return extend(params, pickOnlyExistingValues(options, "keep_original", "invalidate", "next_cursor", "transformations"));
  }
  function getResourceParams(options) {
    return pickOnlyExistingValues(options, "exif", "cinemagraph_analysis", "colors", "derived_next_cursor", "faces", "image_metadata", "media_metadata", "pages", "phash", "coordinates", "max_results", "versions", "accessibility_analysis", "related", "related_next_cursor");
  }
  api$1.ping = function ping(callback, options = {}) {
    return call_api("get", ["ping"], {}, callback, options);
  };
  api$1.usage = function usage(callback, options = {}) {
    const uri = ["usage"];
    if (options.date) {
      uri.push(options.date);
    }
    return call_api("get", uri, {}, callback, options);
  };
  api$1.resource_types = function resource_types(callback, options = {}) {
    return call_api("get", ["resources"], {}, callback, options);
  };
  api$1.resources = function resources(callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type;
    uri = ["resources", resource_type];
    if (type != null) {
      uri.push(type);
    }
    if (options.start_at != null && Object.prototype.toString.call(options.start_at) === "[object Date]") {
      options.start_at = options.start_at.toUTCString();
    }
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "prefix", "tags", "context", "direction", "moderations", "start_at", "metadata", "fields"), callback, options);
  };
  api$1.resources_by_tag = function resources_by_tag(tag, callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = ["resources", resource_type, "tags", tag];
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
  };
  api$1.resources_by_context = function resources_by_context(key, value, callback, options = {}) {
    let params, resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = ["resources", resource_type, "context"];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields");
    params.key = key;
    if (value != null) {
      params.value = value;
    }
    return call_api("get", uri, params, callback, options);
  };
  api$1.resources_by_moderation = function resources_by_moderation(kind, status, callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = ["resources", resource_type, "moderations", kind, status];
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "direction", "moderations", "metadata", "fields"), callback, options);
  };
  api$1.resource_by_asset_id = function resource_by_asset_id(asset_id, callback, options = {}) {
    const uri = ["resources", asset_id];
    return call_api("get", uri, getResourceParams(options), callback, options);
  };
  api$1.resources_by_asset_folder = function resources_by_asset_folder(asset_folder, callback, options = {}) {
    let params, uri;
    uri = ["resources", "by_asset_folder"];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results", "tags", "context", "moderations", "fields");
    params.asset_folder = asset_folder;
    return call_api("get", uri, params, callback, options);
  };
  api$1.resources_by_asset_ids = function resources_by_asset_ids(asset_ids, callback, options = {}) {
    let params, uri;
    uri = ["resources", "by_asset_ids"];
    params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
    params["asset_ids[]"] = asset_ids;
    return call_api("get", uri, params, callback, options);
  };
  api$1.resources_by_ids = function resources_by_ids(public_ids, callback, options = {}) {
    let params, resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type];
    params = pickOnlyExistingValues(options, "tags", "context", "moderations", "fields");
    params["public_ids[]"] = public_ids;
    return call_api("get", uri, params, callback, options);
  };
  api$1.resource = function resource(public_id, callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type, public_id];
    return call_api("get", uri, getResourceParams(options), callback, options);
  };
  api$1.restore = function restore(public_ids, callback, options = {}) {
    options.content_type = "json";
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type, "restore"];
    return call_api("post", uri, {
      public_ids,
      versions: options.versions
    }, callback, options);
  };
  api$1.restore_by_asset_ids = function restore_by_asset_ids(asset_ids, callback, options = {}) {
    options.content_type = "json";
    let uri = ["resources", "restore"];
    if (!Array.isArray(asset_ids)) {
      asset_ids = [asset_ids];
    }
    return call_api(
      "post",
      uri,
      {
        asset_ids,
        versions: options.versions
      },
      callback,
      options
    );
  };
  api$1.update = function update(public_id, callback, options = {}) {
    let params, resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type, public_id];
    params = utils2.updateable_resource_params(options);
    if (options.moderation_status != null) {
      params.moderation_status = options.moderation_status;
    }
    if (options.clear_invalid != null) {
      params.clear_invalid = options.clear_invalid;
    }
    return call_api("post", uri, params, callback, options);
  };
  api$1.delete_resources = function delete_resources(public_ids, callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type];
    return call_api("delete", uri, deleteResourcesParams(options, {
      "public_ids[]": public_ids
    }), callback, options);
  };
  api$1.delete_resources_by_asset_ids = function delete_resources_by_asset_ids(asset_ids, callback, options = {}) {
    let uri = ["resources"];
    return call_api("delete", uri, deleteResourcesParams(options, {
      "asset_ids[]": asset_ids
    }), callback, options);
  };
  api$1.delete_resources_by_prefix = function delete_resources_by_prefix(prefix, callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type];
    return call_api("delete", uri, deleteResourcesParams(options, {
      prefix
    }), callback, options);
  };
  api$1.delete_resources_by_tag = function delete_resources_by_tag(tag, callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = ["resources", resource_type, "tags", tag];
    return call_api("delete", uri, deleteResourcesParams(options), callback, options);
  };
  api$1.delete_all_resources = function delete_all_resources(callback, options = {}) {
    let resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = ["resources", resource_type, type];
    return call_api("delete", uri, deleteResourcesParams(options, {
      all: true
    }), callback, options);
  };
  api$1.delete_backed_up_assets = (assetId, versionIds, callback, options = {}) => {
    const params = deleteBackupParams(versionIds);
    return call_api("delete", ["resources", "backup", assetId], params, callback, options);
  };
  const deleteBackupParams = (versionIds = []) => {
    return {
      "version_ids[]": Array.isArray(versionIds) ? versionIds : [versionIds]
    };
  };
  const createRelationParams = (publicIds = []) => {
    return {
      assets_to_relate: Array.isArray(publicIds) ? publicIds : [publicIds]
    };
  };
  const deleteRelationParams = (publicIds = []) => {
    return {
      assets_to_unrelate: Array.isArray(publicIds) ? publicIds : [publicIds]
    };
  };
  api$1.add_related_assets = (publicId, assetsToRelate, callback, options = {}) => {
    const params = createRelationParams(assetsToRelate);
    const resourceType = options.resource_type || "image";
    const type = options.type || "upload";
    options.content_type = "json";
    return call_api("post", ["resources", "related_assets", resourceType, type, publicId], params, callback, options);
  };
  api$1.add_related_assets_by_asset_id = (assetId, assetsToRelate, callback, options = {}) => {
    const params = createRelationParams(assetsToRelate);
    options.content_type = "json";
    return call_api("post", ["resources", "related_assets", assetId], params, callback, options);
  };
  api$1.delete_related_assets = (publicId, assetsToUnrelate, callback, options = {}) => {
    const params = deleteRelationParams(assetsToUnrelate);
    const resourceType = options.resource_type || "image";
    const type = options.type || "upload";
    options.content_type = "json";
    return call_api("delete", ["resources", "related_assets", resourceType, type, publicId], params, callback, options);
  };
  api$1.delete_related_assets_by_asset_id = (assetId, assetsToUnrelate, callback, options = {}) => {
    const params = deleteRelationParams(assetsToUnrelate);
    options.content_type = "json";
    return call_api("delete", ["resources", "related_assets", assetId], params, callback, options);
  };
  api$1.delete_derived_resources = function delete_derived_resources(derived_resource_ids, callback, options = {}) {
    let uri;
    uri = ["derived_resources"];
    return call_api("delete", uri, {
      "derived_resource_ids[]": derived_resource_ids
    }, callback, options);
  };
  api$1.delete_derived_by_transformation = function delete_derived_by_transformation(public_ids, transformations, callback, options = {}) {
    let params, resource_type, type, uri;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    uri = "resources/" + resource_type + "/" + type;
    params = extend({
      "public_ids[]": public_ids
    }, pickOnlyExistingValues(options, "invalidate"));
    params.keep_original = true;
    params.transformations = utils2.build_eager(transformations);
    return call_api("delete", uri, params, callback, options);
  };
  api$1.tags = function tags(callback, options = {}) {
    let resource_type, uri;
    resource_type = options.resource_type || "image";
    uri = ["tags", resource_type];
    return call_api("get", uri, pickOnlyExistingValues(options, "next_cursor", "max_results", "prefix"), callback, options);
  };
  api$1.transformations = function transformations(callback, options = {}) {
    const params = pickOnlyExistingValues(options, "next_cursor", "max_results", "named");
    return call_api("get", TRANSFORMATIONS_URI, params, callback, options);
  };
  api$1.transformation = function transformation(transformationName, callback, options = {}) {
    const params = pickOnlyExistingValues(options, "next_cursor", "max_results");
    params.transformation = utils2.build_eager(transformationName);
    return call_api("get", TRANSFORMATIONS_URI, params, callback, options);
  };
  api$1.delete_transformation = function delete_transformation(transformationName, callback, options = {}) {
    const params = {};
    params.transformation = utils2.build_eager(transformationName);
    return call_api("delete", TRANSFORMATIONS_URI, params, callback, options);
  };
  api$1.update_transformation = function update_transformation(transformationName, updates, callback, options = {}) {
    const params = pickOnlyExistingValues(updates, "allowed_for_strict");
    params.transformation = utils2.build_eager(transformationName);
    if (updates.unsafe_update != null) {
      params.unsafe_update = utils2.build_eager(updates.unsafe_update);
    }
    return call_api("put", TRANSFORMATIONS_URI, params, callback, options);
  };
  api$1.create_transformation = function create_transformation(name2, definition, callback, options = {}) {
    const params = { name: name2 };
    params.transformation = utils2.build_eager(definition);
    return call_api("post", TRANSFORMATIONS_URI, params, callback, options);
  };
  api$1.upload_presets = function upload_presets(callback, options = {}) {
    return call_api("get", ["upload_presets"], pickOnlyExistingValues(options, "next_cursor", "max_results"), callback, options);
  };
  api$1.upload_preset = function upload_preset(name2, callback, options = {}) {
    let uri;
    uri = ["upload_presets", name2];
    return call_api("get", uri, {}, callback, options);
  };
  api$1.delete_upload_preset = function delete_upload_preset(name2, callback, options = {}) {
    let uri;
    uri = ["upload_presets", name2];
    return call_api("delete", uri, {}, callback, options);
  };
  api$1.update_upload_preset = function update_upload_preset(name2, callback, options = {}) {
    let params, uri;
    uri = ["upload_presets", name2];
    params = utils2.merge(utils2.clear_blank(utils2.build_upload_params(options)), pickOnlyExistingValues(options, "unsigned", "disallow_public_id", "live"));
    return call_api("put", uri, params, callback, options);
  };
  api$1.create_upload_preset = function create_upload_preset(callback, options = {}) {
    let params, uri;
    uri = ["upload_presets"];
    params = utils2.merge(utils2.clear_blank(utils2.build_upload_params(options)), pickOnlyExistingValues(options, "name", "unsigned", "disallow_public_id", "live"));
    return call_api("post", uri, params, callback, options);
  };
  api$1.root_folders = function root_folders(callback, options = {}) {
    let uri, params;
    uri = ["folders"];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results");
    return call_api("get", uri, params, callback, options);
  };
  api$1.sub_folders = function sub_folders(path, callback, options = {}) {
    let uri, params;
    uri = ["folders", path];
    params = pickOnlyExistingValues(options, "next_cursor", "max_results");
    return call_api("get", uri, params, callback, options);
  };
  api$1.create_folder = function create_folder(path, callback, options = {}) {
    let uri;
    uri = ["folders", path];
    return call_api("post", uri, {}, callback, options);
  };
  api$1.delete_folder = function delete_folder(path, callback, options = {}) {
    let uri;
    uri = ["folders", path];
    return call_api("delete", uri, {}, callback, options);
  };
  api$1.rename_folder = function rename_folder(old_path, new_path, callback, options = {}) {
    let uri;
    uri = ["folders", old_path];
    let rename_folder_params = {
      to_folder: new_path
    };
    options.content_type = "json";
    return call_api("put", uri, rename_folder_params, callback, options);
  };
  api$1.upload_mappings = function upload_mappings(callback, options = {}) {
    let params;
    params = pickOnlyExistingValues(options, "next_cursor", "max_results");
    return call_api("get", "upload_mappings", params, callback, options);
  };
  api$1.upload_mapping = function upload_mapping(name2, callback, options = {}) {
    if (name2 == null) {
      name2 = null;
    }
    return call_api("get", "upload_mappings", {
      folder: name2
    }, callback, options);
  };
  api$1.delete_upload_mapping = function delete_upload_mapping(name2, callback, options = {}) {
    return call_api("delete", "upload_mappings", {
      folder: name2
    }, callback, options);
  };
  api$1.update_upload_mapping = function update_upload_mapping(name2, callback, options = {}) {
    let params;
    params = pickOnlyExistingValues(options, "template");
    params.folder = name2;
    return call_api("put", "upload_mappings", params, callback, options);
  };
  api$1.create_upload_mapping = function create_upload_mapping(name2, callback, options = {}) {
    let params;
    params = pickOnlyExistingValues(options, "template");
    params.folder = name2;
    return call_api("post", "upload_mappings", params, callback, options);
  };
  function publishResource(byKey, value, callback, options = {}) {
    let params, resource_type, uri;
    params = pickOnlyExistingValues(options, "type", "invalidate", "overwrite");
    params[byKey] = value;
    resource_type = options.resource_type || "image";
    uri = ["resources", resource_type, "publish_resources"];
    options = extend({
      resource_type
    }, options);
    return call_api("post", uri, params, callback, options);
  }
  api$1.publish_by_prefix = function publish_by_prefix(prefix, callback, options = {}) {
    return publishResource("prefix", prefix, callback, options);
  };
  api$1.publish_by_tag = function publish_by_tag(tag, callback, options = {}) {
    return publishResource("tag", tag, callback, options);
  };
  api$1.publish_by_ids = function publish_by_ids(public_ids, callback, options = {}) {
    return publishResource("public_ids", public_ids, callback, options);
  };
  api$1.list_streaming_profiles = function list_streaming_profiles(callback, options = {}) {
    return call_api("get", "streaming_profiles", {}, callback, options);
  };
  api$1.get_streaming_profile = function get_streaming_profile(name2, callback, options = {}) {
    return call_api("get", "streaming_profiles/" + name2, {}, callback, options);
  };
  api$1.delete_streaming_profile = function delete_streaming_profile(name2, callback, options = {}) {
    return call_api("delete", "streaming_profiles/" + name2, {}, callback, options);
  };
  api$1.update_streaming_profile = function update_streaming_profile(name2, callback, options = {}) {
    let params;
    params = utils2.build_streaming_profiles_param(options);
    return call_api("put", "streaming_profiles/" + name2, params, callback, options);
  };
  api$1.create_streaming_profile = function create_streaming_profile(name2, callback, options = {}) {
    let params;
    params = utils2.build_streaming_profiles_param(options);
    params.name = name2;
    return call_api("post", "streaming_profiles", params, callback, options);
  };
  function updateResourcesAccessMode(access_mode, by_key, value, callback, options = {}) {
    let params, resource_type, type;
    resource_type = options.resource_type || "image";
    type = options.type || "upload";
    params = {
      access_mode
    };
    params[by_key] = value;
    return call_api("post", "resources/" + resource_type + "/" + type + "/update_access_mode", params, callback, options);
  }
  api$1.search = function search2(params, callback, options = {}) {
    options.content_type = "json";
    return call_api("post", "resources/search", params, callback, options);
  };
  api$1.visual_search = function visual_search(params, callback, options = {}) {
    const allowedParams = pickOnlyExistingValues(params, "image_url", "image_asset_id", "text");
    return call_api("get", ["resources", "visual_search"], allowedParams, callback, options);
  };
  api$1.search_folders = function search_folders2(params, callback, options = {}) {
    options.content_type = "json";
    return call_api("post", "folders/search", params, callback, options);
  };
  api$1.update_resources_access_mode_by_prefix = function update_resources_access_mode_by_prefix(access_mode, prefix, callback, options = {}) {
    return updateResourcesAccessMode(access_mode, "prefix", prefix, callback, options);
  };
  api$1.update_resources_access_mode_by_tag = function update_resources_access_mode_by_tag(access_mode, tag, callback, options = {}) {
    return updateResourcesAccessMode(access_mode, "tag", tag, callback, options);
  };
  api$1.update_resources_access_mode_by_ids = function update_resources_access_mode_by_ids(access_mode, ids, callback, options = {}) {
    return updateResourcesAccessMode(access_mode, "public_ids[]", ids, callback, options);
  };
  api$1.add_metadata_field = function add_metadata_field(field, callback, options = {}) {
    const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions", "allow_dynamic_list_values");
    options.content_type = "json";
    return call_api("post", ["metadata_fields"], params, callback, options);
  };
  api$1.list_metadata_fields = function list_metadata_fields(callback, options = {}) {
    return call_api("get", ["metadata_fields"], {}, callback, options);
  };
  api$1.delete_metadata_field = function delete_metadata_field(field_external_id, callback, options = {}) {
    return call_api("delete", ["metadata_fields", field_external_id], {}, callback, options);
  };
  api$1.metadata_field_by_field_id = function metadata_field_by_field_id(external_id, callback, options = {}) {
    return call_api("get", ["metadata_fields", external_id], {}, callback, options);
  };
  api$1.update_metadata_field = function update_metadata_field(external_id, field, callback, options = {}) {
    const params = pickOnlyExistingValues(field, "external_id", "type", "label", "mandatory", "default_value", "validation", "datasource", "restrictions", "default_disabled", "allow_dynamic_list_values");
    options.content_type = "json";
    return call_api("put", ["metadata_fields", external_id], params, callback, options);
  };
  api$1.update_metadata_field_datasource = function update_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
    const params = pickOnlyExistingValues(entries_external_id, "values");
    options.content_type = "json";
    return call_api("put", ["metadata_fields", field_external_id, "datasource"], params, callback, options);
  };
  api$1.delete_datasource_entries = function delete_datasource_entries(field_external_id, entries_external_id, callback, options = {}) {
    options.content_type = "json";
    const params = { external_ids: entries_external_id };
    return call_api("delete", ["metadata_fields", field_external_id, "datasource"], params, callback, options);
  };
  api$1.restore_metadata_field_datasource = function restore_metadata_field_datasource(field_external_id, entries_external_id, callback, options = {}) {
    options.content_type = "json";
    const params = { external_ids: entries_external_id };
    return call_api("post", ["metadata_fields", field_external_id, "datasource_restore"], params, callback, options);
  };
  api$1.order_metadata_field_datasource = function order_metadata_field_datasource(field_external_id, sort_by, direction, callback, options = {}) {
    options.content_type = "json";
    const params = {
      order_by: sort_by,
      direction
    };
    return call_api("post", ["metadata_fields", field_external_id, "datasource", "order"], params, callback, options);
  };
  api$1.reorder_metadata_fields = function reorder_metadata_fields(order_by, direction, callback, options = {}) {
    options.content_type = "json";
    const params = {
      order_by,
      direction
    };
    return call_api("put", ["metadata_fields", "order"], params, callback, options);
  };
  api$1.list_metadata_rules = function list_metadata_rules(callback, options = {}) {
    return call_api("get", ["metadata_rules"], {}, callback, options);
  };
  api$1.add_metadata_rule = function add_metadata_rule(metadata_rule, callback, options = {}) {
    options.content_type = "json";
    const params = pickOnlyExistingValues(metadata_rule, "metadata_field_id", "condition", "result", "name");
    return call_api("post", ["metadata_rules"], params, callback, options);
  };
  api$1.update_metadata_rule = function update_metadata_rule(field_external_id, updated_metadata_rule, callback, options = {}) {
    options.content_type = "json";
    const params = pickOnlyExistingValues(updated_metadata_rule, "metadata_field_id", "condition", "result", "name", "state");
    return call_api("put", ["metadata_rules", field_external_id], params, callback, options);
  };
  api$1.delete_metadata_rule = function delete_metadata_rule(field_external_id, callback, options = {}) {
    return call_api("delete", ["metadata_rules", field_external_id], {}, callback, options);
  };
  api$1.config = function config2(callback, options = {}) {
    const params = pickOnlyExistingValues(options, "settings");
    return call_api("get", ["config"], params, callback, options);
  };
  return api$1;
}
var call_analysis_api_1;
var hasRequiredCall_analysis_api;
function requireCall_analysis_api() {
  if (hasRequiredCall_analysis_api) return call_analysis_api_1;
  hasRequiredCall_analysis_api = 1;
  const utils2 = requireUtils();
  const config2 = requireConfig();
  const ensureOption2 = requireEnsureOption().defaults(config2());
  const execute_request = requireExecute_request();
  const { ensurePresenceOf } = utils2;
  function call_analysis_api(method, uri, params, callback, options) {
    ensurePresenceOf({
      method,
      uri
    });
    const api_url = utils2.base_api_url_v2()(uri, options);
    let auth = {};
    if (options.oauth_token || config2().oauth_token) {
      auth = {
        oauth_token: ensureOption2(options, "oauth_token")
      };
    } else {
      auth = {
        key: ensureOption2(options, "api_key"),
        secret: ensureOption2(options, "api_secret")
      };
    }
    options.content_type = "json";
    return execute_request(method, params, auth, api_url, callback, options);
  }
  call_analysis_api_1 = {
    call_analysis_api
  };
  return call_analysis_api_1;
}
var analysis;
var hasRequiredAnalysis;
function requireAnalysis() {
  if (hasRequiredAnalysis) return analysis;
  hasRequiredAnalysis = 1;
  requireUtils();
  const { call_analysis_api } = requireCall_analysis_api();
  function analyze_uri(uri, analysis_type, options = {}, callback) {
    const params = {
      uri,
      analysis_type
    };
    if (analysis_type === "custom") {
      if (!("model_name" in options) || !("model_version" in options)) {
        throw new Error('Setting analysis_type to "custom" requires additional params: "model_name" and "model_version"');
      }
      params.parameters = {
        custom: {
          model_name: options.model_name,
          model_version: options.model_version
        }
      };
    }
    let api_uri = ["analysis", "analyze", "uri"];
    return call_analysis_api("POST", api_uri, params, callback, options);
  }
  analysis = {
    analyze_uri
  };
  return analysis;
}
var call_account_api_1;
var hasRequiredCall_account_api;
function requireCall_account_api() {
  if (hasRequiredCall_account_api) return call_account_api_1;
  hasRequiredCall_account_api = 1;
  const config2 = requireConfig();
  const utils2 = requireUtils();
  const ensureOption2 = requireEnsureOption().defaults(config2());
  const execute_request = requireExecute_request();
  const { ensurePresenceOf } = utils2;
  function call_account_api(method, uri, params, callback, options) {
    ensurePresenceOf({ method, uri });
    const cloudinary2 = ensureOption2(options, "upload_prefix", "https://api.cloudinary.com");
    const account_id = ensureOption2(options, "account_id");
    const api_url = [cloudinary2, "v1_1", "provisioning", "accounts", account_id].concat(uri).join("/");
    const auth = {
      key: ensureOption2(options, "provisioning_api_key"),
      secret: ensureOption2(options, "provisioning_api_secret")
    };
    return execute_request(method, params, auth, api_url, callback, options);
  }
  call_account_api_1 = call_account_api;
  return call_account_api_1;
}
var account;
var hasRequiredAccount;
function requireAccount() {
  if (hasRequiredAccount) return account;
  hasRequiredAccount = 1;
  const utils2 = requireUtils();
  const call_account_api = requireCall_account_api();
  const { pickOnlyExistingValues } = utils2;
  function sub_accounts(enabled, ids = [], prefix, options = {}, callback) {
    let params = {
      enabled,
      ids,
      prefix
    };
    let uri = ["sub_accounts"];
    return call_account_api("GET", uri, params, callback, options);
  }
  function sub_account(sub_account_id, options = {}, callback) {
    let uri = ["sub_accounts", sub_account_id];
    return call_account_api("GET", uri, {}, callback, options);
  }
  function create_sub_account(name2, cloud_name, custom_attributes, enabled, base_account, options = {}, callback) {
    let params = {
      cloud_name,
      name: name2,
      custom_attributes,
      enabled,
      base_sub_account_id: base_account
    };
    options.content_type = "json";
    let uri = ["sub_accounts"];
    return call_account_api("POST", uri, params, callback, options);
  }
  function delete_sub_account(sub_account_id, options = {}, callback) {
    let uri = ["sub_accounts", sub_account_id];
    return call_account_api("DELETE", uri, {}, callback, options);
  }
  function update_sub_account(sub_account_id, name2, cloud_name, custom_attributes, enabled, options = {}, callback) {
    let params = {
      cloud_name,
      name: name2,
      custom_attributes,
      enabled
    };
    options.content_type = "json";
    let uri = ["sub_accounts", sub_account_id];
    return call_account_api("PUT", uri, params, callback, options);
  }
  function user(user_id, options = {}, callback) {
    let uri = ["users", user_id];
    return call_account_api("GET", uri, {}, callback, options);
  }
  function users(pending, user_ids, prefix, sub_account_id, options = {}, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    }
    let uri = ["users"];
    let params = {
      ids: user_ids,
      pending,
      prefix,
      sub_account_id,
      last_login: options.lastLogin,
      from: options.fromDate,
      to: options.toDate,
      activity: options.activity
    };
    return call_account_api("GET", uri, pickOnlyExistingValues(params, "ids", "pending", "prefix", "sub_account_id", "last_login", "from", "to", "activity"), callback, options);
  }
  function create_user(name2, email, role, sub_account_ids, options = {}, callback) {
    let uri = ["users"];
    let params = {
      name: name2,
      email,
      role,
      sub_account_ids
    };
    options.content_type = "json";
    return call_account_api("POST", uri, params, callback, options);
  }
  function update_user(user_id, name2, email, role, sub_account_ids, options = {}, callback) {
    let uri = ["users", user_id];
    let params = {
      name: name2,
      email,
      role,
      sub_account_ids
    };
    options.content_type = "json";
    return call_account_api("PUT", uri, params, callback, options);
  }
  function delete_user(user_id, options = {}, callback) {
    let uri = ["users", user_id];
    return call_account_api("DELETE", uri, {}, callback, options);
  }
  function create_user_group(name2, options = {}, callback) {
    let uri = ["user_groups"];
    options.content_type = "json";
    let params = {
      name: name2
    };
    return call_account_api("POST", uri, params, callback, options);
  }
  function update_user_group(group_id, name2, options = {}, callback) {
    let uri = ["user_groups", group_id];
    let params = {
      name: name2
    };
    return call_account_api("PUT", uri, params, callback, options);
  }
  function delete_user_group(group_id, options = {}, callback) {
    let uri = ["user_groups", group_id];
    return call_account_api("DELETE", uri, {}, callback, options);
  }
  function add_user_to_group(group_id, user_id, options = {}, callback) {
    let uri = ["user_groups", group_id, "users", user_id];
    return call_account_api("POST", uri, {}, callback, options);
  }
  function remove_user_from_group(group_id, user_id, options = {}, callback) {
    let uri = ["user_groups", group_id, "users", user_id];
    return call_account_api("DELETE", uri, {}, callback, options);
  }
  function user_group(group_id, options = {}, callback) {
    let uri = ["user_groups", group_id];
    return call_account_api("GET", uri, {}, callback, options);
  }
  function user_groups(options = {}, callback) {
    let uri = ["user_groups"];
    return call_account_api("GET", uri, {}, callback, options);
  }
  function user_group_users(group_id, options = {}, callback) {
    let uri = ["user_groups", group_id, "users"];
    return call_account_api("GET", uri, {}, callback, options);
  }
  function access_keys(sub_account_id, options = {}, callback) {
    const params = pickOnlyExistingValues({
      page_size: options.page_size,
      page: options.page,
      sort_by: options.sort_by,
      sort_order: options.sort_order
    }, "page_size", "page", "sort_by", "sort_order");
    const uri = ["sub_accounts", sub_account_id, "access_keys"];
    return call_account_api("GET", uri, params, callback, options);
  }
  function generate_access_key(sub_account_id, options = {}, callback) {
    const params = pickOnlyExistingValues({
      name: options.name,
      enabled: options.enabled
    }, "name", "enabled");
    options.content_type = "json";
    const uri = ["sub_accounts", sub_account_id, "access_keys"];
    return call_account_api("POST", uri, params, callback, options);
  }
  function update_access_key(sub_account_id, api_key, options = {}, callback) {
    const params = pickOnlyExistingValues(
      {
        name: options.name,
        enabled: options.enabled,
        dedicated_for: options.dedicated_for
      },
      "name",
      "enabled",
      "dedicated_for"
    );
    options.content_type = "json";
    const uri = ["sub_accounts", sub_account_id, "access_keys", api_key];
    return call_account_api("PUT", uri, params, callback, options);
  }
  function delete_access_key(sub_account_id, api_key, options = {}, callback) {
    const uri = ["sub_accounts", sub_account_id, "access_keys", api_key];
    return call_account_api("DELETE", uri, {}, callback, options);
  }
  function delete_access_key_by_name(sub_account_id, options = {}, callback) {
    const params = { name: options.name };
    const uri = ["sub_accounts", sub_account_id, "access_keys"];
    return call_account_api("DELETE", uri, params, callback, options);
  }
  account = {
    sub_accounts,
    create_sub_account,
    delete_sub_account,
    sub_account,
    update_sub_account,
    user,
    users,
    user_group,
    user_groups,
    user_group_users,
    remove_user_from_group,
    delete_user,
    update_user_group,
    update_user,
    create_user,
    create_user_group,
    add_user_to_group,
    delete_user_group,
    access_keys,
    generate_access_key,
    update_access_key,
    delete_access_key,
    delete_access_key_by_name
  };
  return account;
}
var preloaded_file;
var hasRequiredPreloaded_file;
function requirePreloaded_file() {
  if (hasRequiredPreloaded_file) return preloaded_file;
  hasRequiredPreloaded_file = 1;
  let PRELOADED_CLOUDINARY_PATH, utils2;
  utils2 = requireUtils();
  requireConfig();
  PRELOADED_CLOUDINARY_PATH = /^([^\/]+)\/([^\/]+)\/v(\d+)\/([^#]+)#([^\/]+)$/;
  class PreloadedFile {
    constructor(file_info) {
      let matches, public_id_and_format;
      matches = file_info.match(PRELOADED_CLOUDINARY_PATH);
      if (!matches) {
        throw "Invalid preloaded file info";
      }
      this.resource_type = matches[1];
      this.type = matches[2];
      this.version = matches[3];
      this.filename = matches[4];
      this.signature = matches[5];
      public_id_and_format = PreloadedFile.split_format(this.filename);
      this.public_id = public_id_and_format[0];
      this.format = public_id_and_format[1];
    }
    is_valid() {
      return utils2.verify_api_response_signature(this.public_id, this.version, this.signature);
    }
    static split_format(identifier) {
      let format, last_dot, public_id;
      last_dot = identifier.lastIndexOf(".");
      if (last_dot === -1) {
        return [identifier, null];
      }
      public_id = identifier.substr(0, last_dot);
      format = identifier.substr(last_dot + 1);
      return [public_id, format];
    }
    identifier() {
      return `v${this.version}/${this.filename}`;
    }
    toString() {
      return `${this.resource_type}/${this.type}/v${this.version}/${this.filename}#${this.signature}`;
    }
    toJSON() {
      let result = {};
      Object.getOwnPropertyNames(this).forEach((key) => {
        let val = this[key];
        if (typeof val !== "function") {
          result[key] = val;
        }
      });
      return result;
    }
  }
  preloaded_file = PreloadedFile;
  return preloaded_file;
}
var generateBreakpoints_1;
var hasRequiredGenerateBreakpoints;
function requireGenerateBreakpoints() {
  if (hasRequiredGenerateBreakpoints) return generateBreakpoints_1;
  hasRequiredGenerateBreakpoints = 1;
  function generateBreakpoints(srcset) {
    let breakpoints = srcset.breakpoints || [];
    if (breakpoints.length) {
      return breakpoints;
    }
    let [min_width, max_width, max_images] = [srcset.min_width, srcset.max_width, srcset.max_images].map(Number);
    if ([min_width, max_width, max_images].some(Number.isNaN)) {
      throw "Either (min_width, max_width, max_images) or breakpoints must be provided to the image srcset attribute";
    }
    if (min_width > max_width) {
      throw "min_width must be less than max_width";
    }
    if (max_images <= 0) {
      throw "max_images must be a positive integer";
    } else if (max_images === 1) {
      min_width = max_width;
    }
    let stepSize = Math.ceil((max_width - min_width) / Math.max(max_images - 1, 1));
    for (let current = min_width; current < max_width; current += stepSize) {
      breakpoints.push(current);
    }
    breakpoints.push(max_width);
    return breakpoints;
  }
  generateBreakpoints_1 = generateBreakpoints;
  return generateBreakpoints_1;
}
var srcsetUtils;
var hasRequiredSrcsetUtils;
function requireSrcsetUtils() {
  if (hasRequiredSrcsetUtils) return srcsetUtils;
  hasRequiredSrcsetUtils = 1;
  const utils2 = requireUtils();
  const generateBreakpoints = requireGenerateBreakpoints();
  const Cache = requireCache();
  const isEmpty = utils2.isEmpty;
  function scaledUrl(public_id, width, transformation, options = {}) {
    let configParams = utils2.extractUrlParams(options);
    transformation = transformation || options;
    configParams.raw_transformation = utils2.generate_transformation_string([utils2.extend({}, transformation), { crop: "scale", width }]);
    return utils2.url(public_id, configParams);
  }
  function getOrGenerateBreakpoints(public_id, srcset = {}, options = {}) {
    let breakpoints = [];
    if (srcset.useCache) {
      breakpoints = Cache.get(public_id, options);
      if (!breakpoints) {
        breakpoints = [];
      }
    } else {
      breakpoints = generateBreakpoints(srcset);
    }
    return breakpoints;
  }
  function generateSrcsetAttribute(public_id, breakpoints, transformation, options) {
    options = utils2.clone(options);
    utils2.patchFetchFormat(options);
    return breakpoints.map((width) => `${scaledUrl(public_id, width, transformation, options)} ${width}w`).join(", ");
  }
  function generateSizesAttribute(breakpoints = []) {
    return breakpoints.map((width) => `(max-width: ${width}px) ${width}px`).join(", ");
  }
  function generateImageResponsiveAttributes(publicId, attributes = {}, srcsetData = {}, options = {}) {
    let responsiveAttributes = {};
    if (isEmpty(srcsetData)) {
      return responsiveAttributes;
    }
    const generateSizes = !attributes.sizes && srcsetData.sizes === true;
    const generateSrcset = !attributes.srcset;
    if (generateSrcset || generateSizes) {
      let breakpoints = getOrGenerateBreakpoints(publicId, srcsetData, options);
      if (generateSrcset) {
        let transformation = srcsetData.transformation;
        let srcsetAttr = generateSrcsetAttribute(publicId, breakpoints, transformation, options);
        if (!isEmpty(srcsetAttr)) {
          responsiveAttributes.srcset = srcsetAttr;
        }
      }
      if (generateSizes) {
        let sizesAttr = generateSizesAttribute(breakpoints);
        if (!isEmpty(sizesAttr)) {
          responsiveAttributes.sizes = sizesAttr;
        }
      }
    }
    return responsiveAttributes;
  }
  function generateMediaAttr(options = {}) {
    let mediaQuery = [];
    if (options.min_width != null) {
      mediaQuery.push(`(min-width: ${options.min_width}px)`);
    }
    if (options.max_width != null) {
      mediaQuery.push(`(max-width: ${options.max_width}px)`);
    }
    return mediaQuery.join(" and ");
  }
  srcsetUtils = {
    srcsetUrl: scaledUrl,
    generateSrcsetAttribute,
    generateSizesAttribute,
    generateMediaAttr,
    generateImageResponsiveAttributes
  };
  return srcsetUtils;
}
var api = {};
var hasRequiredApi;
function requireApi() {
  if (hasRequiredApi) return api;
  hasRequiredApi = 1;
  (function(exports) {
    const api2 = requireApi$1();
    const v1_adapters = requireUtils().v1_adapters;
    v1_adapters(exports, api2, {
      ping: 0,
      usage: 0,
      resource_types: 0,
      resources: 0,
      resources_by_tag: 1,
      resources_by_context: 2,
      resources_by_moderation: 2,
      resource_by_asset_id: 1,
      resources_by_asset_ids: 1,
      resources_by_ids: 1,
      resources_by_asset_folder: 1,
      resource: 1,
      restore: 1,
      restore_by_asset_ids: 1,
      update: 1,
      delete_resources: 1,
      delete_resources_by_asset_ids: 1,
      delete_resources_by_prefix: 1,
      delete_resources_by_tag: 1,
      delete_all_resources: 0,
      delete_derived_resources: 1,
      tags: 0,
      transformations: 0,
      transformation: 1,
      delete_transformation: 1,
      update_transformation: 2,
      create_transformation: 2,
      upload_presets: 0,
      upload_preset: 1,
      delete_upload_preset: 1,
      update_upload_preset: 1,
      create_upload_preset: 0,
      root_folders: 0,
      sub_folders: 1,
      delete_folder: 1,
      rename_folder: 2,
      create_folder: 1,
      upload_mappings: 0,
      upload_mapping: 1,
      delete_upload_mapping: 1,
      update_upload_mapping: 1,
      create_upload_mapping: 1,
      list_streaming_profiles: 0,
      get_streaming_profile: 1,
      delete_streaming_profile: 1,
      update_streaming_profile: 1,
      create_streaming_profile: 1,
      publish_by_ids: 1,
      publish_by_tag: 1,
      publish_by_prefix: 1,
      update_resources_access_mode_by_prefix: 2,
      update_resources_access_mode_by_tag: 2,
      update_resources_access_mode_by_ids: 2,
      search: 1,
      search_folders: 1,
      visual_search: 1,
      delete_derived_by_transformation: 2,
      add_metadata_field: 1,
      list_metadata_fields: 1,
      delete_metadata_field: 1,
      metadata_field_by_field_id: 1,
      update_metadata_field: 2,
      update_metadata_field_datasource: 2,
      delete_datasource_entries: 2,
      restore_metadata_field_datasource: 2,
      order_metadata_field_datasource: 3,
      reorder_metadata_fields: 2,
      list_metadata_rules: 1,
      add_metadata_rule: 1,
      delete_metadata_rule: 1,
      update_metadata_rule: 2,
      add_related_assets: 2,
      add_related_assets_by_asset_id: 2,
      delete_related_assets: 2,
      delete_related_assets_by_asset_id: 2,
      delete_backed_up_assets: 2,
      config: 0
    });
  })(api);
  return api;
}
var uploader = {};
var hasRequiredUploader;
function requireUploader() {
  if (hasRequiredUploader) return uploader;
  hasRequiredUploader = 1;
  (function(exports) {
    const uploader2 = requireUploader$1();
    const v1_adapters = requireUtils().v1_adapters;
    v1_adapters(exports, uploader2, {
      unsigned_upload_stream: 1,
      upload_stream: 0,
      unsigned_upload: 2,
      upload: 1,
      upload_large_part: 0,
      upload_large: 1,
      upload_chunked: 1,
      upload_chunked_stream: 0,
      explicit: 1,
      destroy: 1,
      rename: 2,
      text: 1,
      generate_sprite: 1,
      multi: 1,
      explode: 1,
      add_tag: 2,
      remove_tag: 2,
      remove_all_tags: 1,
      add_context: 2,
      remove_all_context: 1,
      replace_tag: 2,
      create_archive: 0,
      create_zip: 0,
      update_metadata: 2
    });
    exports.direct_upload = uploader2.direct_upload;
    exports.upload_tag_params = uploader2.upload_tag_params;
    exports.upload_url = uploader2.upload_url;
    exports.image_upload_tag = uploader2.image_upload_tag;
    exports.unsigned_image_upload_tag = uploader2.unsigned_image_upload_tag;
    exports.create_slideshow = uploader2.create_slideshow;
    exports.download_generated_sprite = uploader2.download_generated_sprite;
    exports.download_multi = uploader2.download_multi;
  })(uploader);
  return uploader;
}
var search;
var hasRequiredSearch;
function requireSearch() {
  if (hasRequiredSearch) return search;
  hasRequiredSearch = 1;
  const api2 = requireApi();
  const config2 = requireConfig();
  const {
    isEmpty,
    isNumber,
    compute_hash,
    build_distribution_domain,
    clear_blank,
    sort_object_by_key
  } = requireUtils();
  const { base64Encode: base64Encode2 } = requireBase64Encode();
  const Search = class Search2 {
    constructor() {
      this.query_hash = {
        sort_by: [],
        aggregate: [],
        with_field: [],
        fields: []
      };
      this._ttl = 300;
    }
    static instance() {
      return new Search2();
    }
    static expression(value) {
      return this.instance().expression(value);
    }
    static max_results(value) {
      return this.instance().max_results(value);
    }
    static next_cursor(value) {
      return this.instance().next_cursor(value);
    }
    static aggregate(value) {
      return this.instance().aggregate(value);
    }
    static with_field(value) {
      return this.instance().with_field(value);
    }
    static fields(value) {
      return this.instance().fields(value);
    }
    static sort_by(field_name, dir = "asc") {
      return this.instance().sort_by(field_name, dir);
    }
    static ttl(newTtl) {
      return this.instance().ttl(newTtl);
    }
    static execute(options, callback) {
      return this.instance().execute(options, callback);
    }
    expression(value) {
      this.query_hash.expression = value;
      return this;
    }
    max_results(value) {
      this.query_hash.max_results = value;
      return this;
    }
    next_cursor(value) {
      this.query_hash.next_cursor = value;
      return this;
    }
    aggregate(value) {
      const found = this.query_hash.aggregate.find((v) => v === value);
      if (!found) {
        this.query_hash.aggregate.push(value);
      }
      return this;
    }
    with_field(value) {
      if (Array.isArray(value)) {
        this.query_hash.with_field = this.query_hash.with_field.concat(value);
      } else {
        this.query_hash.with_field.push(value);
      }
      this.query_hash.with_field = Array.from(new Set(this.query_hash.with_field));
      return this;
    }
    fields(value) {
      if (Array.isArray(value)) {
        this.query_hash.fields = this.query_hash.fields.concat(value);
      } else {
        this.query_hash.fields.push(value);
      }
      this.query_hash.fields = Array.from(new Set(this.query_hash.fields));
      return this;
    }
    sort_by(field_name, dir = "desc") {
      let sort_bucket;
      sort_bucket = {};
      sort_bucket[field_name] = dir;
      const previously_sorted_obj = this.query_hash.sort_by.find((sort_by) => sort_by[field_name]);
      if (previously_sorted_obj) {
        previously_sorted_obj[field_name] = dir;
      } else {
        this.query_hash.sort_by.push(sort_bucket);
      }
      return this;
    }
    ttl(newTtl) {
      if (isNumber(newTtl)) {
        this._ttl = newTtl;
        return this;
      }
      throw new Error("New TTL value has to be a Number.");
    }
    to_query() {
      Object.keys(this.query_hash).forEach((k) => {
        let v = this.query_hash[k];
        if (!isNumber(v) && isEmpty(v)) {
          delete this.query_hash[k];
        }
      });
      return this.query_hash;
    }
    execute(options, callback) {
      if (callback === null) {
        callback = options;
      }
      options = options || {};
      return api2.search(this.to_query(), options, callback);
    }
    to_url(ttl, next_cursor, options = {}) {
      const apiSecret = "api_secret" in options ? options.api_secret : config2().api_secret;
      if (!apiSecret) {
        throw new Error("Must supply api_secret");
      }
      const urlTtl = ttl || this._ttl;
      const query = this.to_query();
      let urlCursor = next_cursor;
      if (query.next_cursor && !next_cursor) {
        urlCursor = query.next_cursor;
      }
      delete query.next_cursor;
      const dataOrderedByKey = sort_object_by_key(clear_blank(query));
      const encodedQuery = base64Encode2(JSON.stringify(dataOrderedByKey));
      const urlPrefix = build_distribution_domain(options.source, options);
      const signature = compute_hash(`${urlTtl}${encodedQuery}${apiSecret}`, "sha256", "hex");
      const urlWithoutCursor = `${urlPrefix}/search/${signature}/${urlTtl}/${encodedQuery}`;
      return urlCursor ? `${urlWithoutCursor}/${urlCursor}` : urlWithoutCursor;
    }
  };
  search = Search;
  return search;
}
var search_folders;
var hasRequiredSearch_folders;
function requireSearch_folders() {
  if (hasRequiredSearch_folders) return search_folders;
  hasRequiredSearch_folders = 1;
  const Search = requireSearch();
  const api2 = requireApi();
  const SearchFolders = class SearchFolders2 extends Search {
    constructor() {
      super();
    }
    static instance() {
      return new SearchFolders2();
    }
    execute(options, callback) {
      if (callback === null) {
        callback = options;
      }
      options = options || {};
      return api2.search_folders(this.to_query(), options, callback);
    }
  };
  search_folders = SearchFolders;
  return search_folders;
}
var v2_1;
var hasRequiredV2;
function requireV2() {
  if (hasRequiredV2) return v2_1;
  hasRequiredV2 = 1;
  const v1 = requireCloudinary$1();
  const api2 = requireApi();
  const uploader2 = requireUploader();
  const search2 = requireSearch();
  const search_folders2 = requireSearch_folders();
  const v2 = {
    ...v1,
    api: api2,
    uploader: uploader2,
    search: search2,
    search_folders: search_folders2
  };
  v2_1 = v2;
  return v2_1;
}
var hasRequiredCloudinary$1;
function requireCloudinary$1() {
  if (hasRequiredCloudinary$1) return cloudinary$1.exports;
  hasRequiredCloudinary$1 = 1;
  (function(module, exports) {
    const _ = requireLodash();
    exports.config = requireConfig();
    exports.utils = requireUtils();
    exports.uploader = requireUploader$1();
    exports.api = requireApi$1();
    exports.analysis = requireAnalysis();
    const account2 = requireAccount();
    exports.provisioning = {
      account: account2
    };
    exports.PreloadedFile = requirePreloaded_file();
    exports.Cache = requireCache();
    const cloudinary2 = module.exports;
    const optionConsume = cloudinary2.utils.option_consume;
    exports.url = function url(public_id, options) {
      options = _.extend({}, options);
      return cloudinary2.utils.url(public_id, options);
    };
    const { generateImageResponsiveAttributes, generateMediaAttr } = requireSrcsetUtils();
    function chainTransformations(options, transformation = []) {
      let urlOptions = cloudinary2.utils.extractUrlParams(options);
      let currentTransformation = cloudinary2.utils.extractTransformationParams(options);
      transformation = cloudinary2.utils.build_array(transformation);
      urlOptions.transformation = [currentTransformation, ...transformation];
      return urlOptions;
    }
    exports.image = function image(source, options) {
      let localOptions = _.extend({}, options);
      let srcsetParam = optionConsume(localOptions, "srcset");
      let attributes = optionConsume(localOptions, "attributes", {});
      let src = cloudinary2.utils.url(source, localOptions);
      if ("html_width" in localOptions) localOptions.width = optionConsume(localOptions, "html_width");
      if ("html_height" in localOptions) localOptions.height = optionConsume(localOptions, "html_height");
      let client_hints = optionConsume(localOptions, "client_hints", cloudinary2.config().client_hints);
      let responsive = optionConsume(localOptions, "responsive");
      let hidpi = optionConsume(localOptions, "hidpi");
      if ((responsive || hidpi) && !client_hints) {
        localOptions["data-src"] = src;
        let classes = [responsive ? "cld-responsive" : "cld-hidpi"];
        let current_class = optionConsume(localOptions, "class");
        if (current_class) classes.push(current_class);
        localOptions.class = classes.join(" ");
        src = optionConsume(localOptions, "responsive_placeholder", cloudinary2.config().responsive_placeholder);
        if (src === "blank") {
          src = cloudinary2.BLANK;
        }
      }
      let html = "<img ";
      if (src) html += "src='" + src + "' ";
      let responsiveAttributes = {};
      if (cloudinary2.utils.isString(srcsetParam)) {
        responsiveAttributes.srcset = srcsetParam;
      } else {
        responsiveAttributes = generateImageResponsiveAttributes(source, attributes, srcsetParam, options);
      }
      if (!cloudinary2.utils.isEmpty(responsiveAttributes)) {
        delete localOptions.width;
        delete localOptions.height;
      }
      html += cloudinary2.utils.html_attrs(_.extend(localOptions, responsiveAttributes, attributes)) + "/>";
      return html;
    };
    exports.video = function video(public_id, options) {
      options = _.extend({}, options);
      public_id = public_id.replace(/\.(mp4|ogv|webm)$/, "");
      let source_types = optionConsume(options, "source_types", []);
      let source_transformation = optionConsume(options, "source_transformation", {});
      let sources = optionConsume(options, "sources", []);
      let fallback = optionConsume(options, "fallback_content", "");
      if (source_types.length === 0) source_types = cloudinary2.utils.DEFAULT_VIDEO_SOURCE_TYPES;
      let video_options = _.cloneDeep(options);
      if (video_options.hasOwnProperty("poster")) {
        if (_.isPlainObject(video_options.poster)) {
          if (video_options.poster.hasOwnProperty("public_id")) {
            video_options.poster = cloudinary2.utils.url(video_options.poster.public_id, video_options.poster);
          } else {
            video_options.poster = cloudinary2.utils.url(public_id, _.extend({}, cloudinary2.utils.DEFAULT_POSTER_OPTIONS, video_options.poster));
          }
        }
      } else {
        video_options.poster = cloudinary2.utils.url(public_id, _.extend({}, cloudinary2.utils.DEFAULT_POSTER_OPTIONS, options));
      }
      if (!video_options.poster) delete video_options.poster;
      let html = "<video ";
      if (!video_options.hasOwnProperty("resource_type")) video_options.resource_type = "video";
      let multi_source_types = _.isArray(source_types) && source_types.length > 1;
      let has_sources = _.isArray(sources) && sources.length > 0;
      let source = public_id;
      if (!multi_source_types && !has_sources) {
        source = source + "." + cloudinary2.utils.build_array(source_types)[0];
      }
      let src = cloudinary2.utils.url(source, video_options);
      if (!multi_source_types && !has_sources) video_options.src = src;
      if (video_options.hasOwnProperty("html_width")) video_options.width = optionConsume(video_options, "html_width");
      if (video_options.hasOwnProperty("html_height")) video_options.height = optionConsume(video_options, "html_height");
      html = html + cloudinary2.utils.html_attrs(video_options) + ">";
      if (multi_source_types && !has_sources) {
        sources = source_types.map((source_type) => ({
          type: source_type,
          transformations: source_transformation[source_type] || {}
        }));
      }
      if (_.isArray(sources) && sources.length > 0) {
        html += sources.map((source_data) => {
          let source_type = source_data.type;
          let codecs = source_data.codecs;
          let transformation = source_data.transformations || {};
          src = cloudinary2.utils.url(source + "." + source_type, _.extend({ resource_type: "video" }, _.cloneDeep(options), _.cloneDeep(transformation)));
          return cloudinary2.utils.create_source_tag(src, source_type, codecs);
        }).join("");
      }
      return `${html}${fallback}</video>`;
    };
    exports.source = function source(public_id, options = {}) {
      let srcsetParam = cloudinary2.utils.extend({}, options.srcset, cloudinary2.config().srcset);
      let attributes = options.attributes || {};
      cloudinary2.utils.extend(attributes, generateImageResponsiveAttributes(public_id, attributes, srcsetParam, options));
      if (!attributes.srcset) {
        attributes.srcset = cloudinary2.url(public_id, options);
      }
      if (!attributes.media && options.media) {
        attributes.media = generateMediaAttr(options.media);
      }
      return `<source ${cloudinary2.utils.html_attrs(attributes)}>`;
    };
    exports.picture = function picture(public_id, options = {}) {
      let sources = options.sources || [];
      options = cloudinary2.utils.clone(options);
      delete options.sources;
      cloudinary2.utils.patchFetchFormat(options);
      return "<picture>" + sources.map((source) => {
        let sourceOptions = chainTransformations(options, source.transformation);
        sourceOptions.media = source;
        return cloudinary2.source(public_id, sourceOptions);
      }).join("") + cloudinary2.image(public_id, options) + "</picture>";
    };
    exports.cloudinary_js_config = cloudinary2.utils.cloudinary_js_config;
    exports.CF_SHARED_CDN = cloudinary2.utils.CF_SHARED_CDN;
    exports.AKAMAI_SHARED_CDN = cloudinary2.utils.AKAMAI_SHARED_CDN;
    exports.SHARED_CDN = cloudinary2.utils.SHARED_CDN;
    exports.BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    exports.v2 = requireV2();
  })(cloudinary$1, cloudinary$1.exports);
  return cloudinary$1.exports;
}
var cloudinary;
var hasRequiredCloudinary;
function requireCloudinary() {
  if (hasRequiredCloudinary) return cloudinary;
  hasRequiredCloudinary = 1;
  cloudinary = requireCloudinary$1();
  return cloudinary;
}
var cloudinaryExports = requireCloudinary();
export {
  cloudinaryExports as c
};
