SystemJS.config({
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "npm:": "jspm_packages/npm/",
      "dnit/": "src/"
    }
  },
  devConfig: {
    "map": {
      "babel": "npm:babel-core@5.8.38",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.10"
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "es2015": false
  },
  meta: {
    "npm:three@0.78.0/build/three.js": {
      "format": "global"
    }
  },
  packages: {
    "dnit": {
      "main": "dnit.js"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
    "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
    "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
    "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
    "dlib": "npm:dlib@0.0.11",
    "events": "github:jspm/nodelibs-events@0.2.0-alpha",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
    "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
    "text": "github:systemjs/plugin-text@0.0.8",
    "three": "npm:three@0.78.0",
    "util": "github:jspm/nodelibs-util@0.2.0-alpha",
    "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
    "webcomponents.js": "npm:webcomponents.js@0.7.22"
  },
  packages: {
    "github:jspm/nodelibs-buffer@0.2.0-alpha": {
      "map": {
        "buffer-browserify": "npm:buffer@4.9.1"
      }
    },
    "npm:d@0.1.1": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es6-iterator@2.0.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12",
        "es6-symbol": "npm:es6-symbol@3.1.0"
      }
    },
    "npm:event-emitter@0.3.4": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:es5-ext@0.10.12": {
      "map": {
        "es6-symbol": "npm:es6-symbol@3.1.0",
        "es6-iterator": "npm:es6-iterator@2.0.0"
      }
    },
    "npm:es6-symbol@3.1.0": {
      "map": {
        "d": "npm:d@0.1.1",
        "es5-ext": "npm:es5-ext@0.10.12"
      }
    },
    "npm:gl-buffer@2.1.2": {
      "map": {
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-ops": "npm:ndarray-ops@1.2.2",
        "typedarray-pool": "npm:typedarray-pool@1.1.0"
      }
    },
    "npm:gl-texture2d@2.0.10": {
      "map": {
        "ndarray": "npm:ndarray@1.0.18",
        "ndarray-ops": "npm:ndarray-ops@1.2.2",
        "typedarray-pool": "npm:typedarray-pool@1.1.0"
      }
    },
    "npm:ndarray@1.0.18": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4",
        "iota-array": "npm:iota-array@1.0.0"
      }
    },
    "npm:ndarray-ops@1.2.2": {
      "map": {
        "cwise-compiler": "npm:cwise-compiler@1.1.2"
      }
    },
    "npm:typedarray-pool@1.1.0": {
      "map": {
        "bit-twiddle": "npm:bit-twiddle@1.0.2",
        "dup": "npm:dup@1.0.0"
      }
    },
    "npm:cwise-compiler@1.1.2": {
      "map": {
        "uniq": "npm:uniq@1.0.1"
      }
    },
    "npm:gl-shader@4.2.0": {
      "map": {
        "gl-format-compiler-error": "npm:gl-format-compiler-error@1.0.2",
        "weakmap-shim": "npm:weakmap-shim@1.1.0"
      }
    },
    "npm:gl-format-compiler-error@1.0.2": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3",
        "gl-constants": "npm:gl-constants@1.0.0",
        "glsl-shader-name": "npm:glsl-shader-name@1.0.0",
        "add-line-numbers": "npm:add-line-numbers@1.0.1"
      }
    },
    "npm:glsl-shader-name@1.0.0": {
      "map": {
        "glsl-tokenizer": "npm:glsl-tokenizer@2.1.2",
        "atob-lite": "npm:atob-lite@1.0.0"
      }
    },
    "npm:glsl-tokenizer@2.1.2": {
      "map": {
        "through2": "npm:through2@0.6.5"
      }
    },
    "npm:through2@0.6.5": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "inherits": "npm:inherits@2.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:add-line-numbers@1.0.1": {
      "map": {
        "pad-left": "npm:pad-left@1.0.2"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:pad-left@1.0.2": {
      "map": {
        "repeat-string": "npm:repeat-string@1.5.4"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.1",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "github:jspm/nodelibs-stream@0.2.0-alpha": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.1.5",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.1.2",
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "isarray": "npm:isarray@1.0.0",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "github:jspm/nodelibs-crypto@0.2.0-alpha": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:pbkdf2@3.0.4": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "sha.js": "npm:sha.js@2.4.5",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.2"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "inherits": "npm:inherits@2.0.1",
        "elliptic": "npm:elliptic@6.3.1",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.1",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:sha.js@2.4.5": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:elliptic@6.3.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:cipher-base@1.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.5"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.4",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.8.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "inherits": "npm:inherits@2.0.1",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.2",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:asn1.js@4.8.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:dlib@0.0.11": {
      "map": {
        "event-emitter": "npm:event-emitter@0.3.4",
        "gl-texture2d": "npm:gl-texture2d@2.0.10",
        "min-signal": "npm:min-signal@0.0.5",
        "gl-buffer": "npm:gl-buffer@2.1.2",
        "webcomponents.js": "npm:webcomponents.js@0.7.22",
        "gl-matrix": "npm:gl-matrix@2.3.2",
        "gl-shader": "npm:gl-shader@4.2.0",
        "gl-texture-cube": "npm:gl-texture-cube@1.0.1",
        "controlkit": "npm:controlkit@0.1.9",
        "gl-fbo": "npm:gl-fbo@2.0.5"
      }
    },
    "npm:gl-fbo@2.0.5": {
      "map": {
        "gl-texture2d": "npm:gl-texture2d@2.0.10"
      }
    }
  }
});
