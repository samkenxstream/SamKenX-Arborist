/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/audit-report.js TAP audit outdated nyc and mkdirp > json version 1`] = `
{
  "vulnerabilities": {
    "handlebars": {
      "name": "handlebars",
      "severity": "high",
      "via": [
        {
          "findings": [
            {
              "version": "4.0.11",
              "paths": [
                "nyc>istanbul-reports>handlebars"
              ]
            }
          ],
          "id": 755,
          "created": "2018-12-28T20:34:57.708Z",
          "updated": "2019-09-16T15:12:18.445Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "",
            "name": "Mahmoud Gamal, Matías Lang"
          },
          "reported_by": {
            "link": "",
            "name": "Mahmoud Gamal, Matías Lang"
          },
          "module_name": "handlebars",
          "cves": [],
          "vulnerable_versions": "<=4.0.13 || >=4.1.0 <4.1.2",
          "patched_versions": ">=4.0.14 <4.1.0 || >=4.1.2",
          "overview": "Versions of \`handlebars\` prior to 4.0.14 are vulnerable to Prototype Pollution. Templates may alter an Objects' prototype, thus allowing an attacker to execute arbitrary code on the server.",
          "recommendation": "For handlebars 4.1.x upgrade to 4.1.2 or later.\\nFor handlebars 4.0.x upgrade to 4.0.14 or later.",
          "references": "",
          "access": "public",
          "severity": "critical",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 6,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/755"
        },
        {
          "findings": [
            {
              "version": "4.0.11",
              "paths": [
                "nyc>istanbul-reports>handlebars"
              ]
            }
          ],
          "id": 1325,
          "created": "2019-11-18T19:42:01.445Z",
          "updated": "2020-02-26T17:55:51.120Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "",
            "name": "Vladyslav Babkin",
            "email": ""
          },
          "reported_by": {
            "link": "",
            "name": "Vladyslav Babkin",
            "email": ""
          },
          "module_name": "handlebars",
          "cves": [],
          "vulnerable_versions": "<3.0.8 || >=4.0.0 <4.5.3",
          "patched_versions": ">=3.0.8 <4.0.0 || >=4.5.3",
          "overview": "Versions of \`handlebars\` prior to 3.0.8 or 4.5.3 are vulnerable to prototype pollution. It is possible to add or modify properties to the Object prototype through a malicious template. This may allow attackers to crash the application or execute Arbitrary Code in specific conditions.",
          "recommendation": "Upgrade to version 3.0.8, 4.5.3 or later.",
          "references": "",
          "access": "public",
          "severity": "high",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 4,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1325"
        }
      ],
      "effects": [],
      "range": "<=4.7.3",
      "nodes": [
        "node_modules/nyc/node_modules/handlebars"
      ],
      "fixAvailable": true
    },
    "lodash": {
      "name": "lodash",
      "severity": "high",
      "via": [
        {
          "findings": [
            {
              "version": "4.17.10",
              "paths": [
                "nyc>istanbul-lib-instrument>babel-generator>babel-types>lodash",
                "nyc>istanbul-lib-instrument>babel-template>babel-traverse>babel-types>lodash",
                "nyc>istanbul-lib-instrument>babel-traverse>babel-types>lodash",
                "nyc>istanbul-lib-instrument>babel-template>babel-types>lodash",
                "nyc>istanbul-lib-instrument>babel-types>lodash",
                "nyc>istanbul-lib-instrument>babel-generator>lodash",
                "nyc>istanbul-lib-instrument>babel-template>babel-traverse>lodash",
                "nyc>istanbul-lib-instrument>babel-traverse>lodash",
                "nyc>istanbul-lib-instrument>babel-template>lodash"
              ]
            }
          ],
          "id": 782,
          "created": "2019-02-13T16:16:53.770Z",
          "updated": "2019-06-27T14:01:44.172Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "",
            "name": "asgerf"
          },
          "reported_by": {
            "link": "",
            "name": "asgerf"
          },
          "module_name": "lodash",
          "cves": [
            "CVE-2018-16487"
          ],
          "vulnerable_versions": "<4.17.11",
          "patched_versions": ">=4.17.11",
          "overview": "Versions of \`lodash\` before 4.17.5 are vulnerable to prototype pollution. \\n\\nThe vulnerable functions are 'defaultsDeep', 'merge', and 'mergeWith' which allow a malicious user to modify the prototype of \`Object\` via \`{constructor: {prototype: {...}}}\` causing the addition or modification of an existing property that will exist on all objects.\\n\\n",
          "recommendation": "Update to version 4.17.11 or later.",
          "references": "- [HackerOne Report](https://hackerone.com/reports/380873)",
          "access": "public",
          "severity": "high",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 3,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/782"
        }
      ],
      "effects": [],
      "range": "<=4.17.11",
      "nodes": [
        "node_modules/nyc/node_modules/lodash"
      ],
      "fixAvailable": true
    },
    "set-value": {
      "name": "set-value",
      "severity": "high",
      "via": [
        {
          "findings": [
            {
              "version": "2.0.0",
              "paths": [
                "nyc>micromatch>braces>snapdragon>base>cache-base>set-value",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>cache-base>set-value",
                "nyc>micromatch>extglob>snapdragon>base>cache-base>set-value",
                "nyc>micromatch>nanomatch>snapdragon>base>cache-base>set-value",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>cache-base>set-value",
                "nyc>micromatch>snapdragon>base>cache-base>set-value",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>cache-base>set-value",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>cache-base>set-value",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>cache-base>set-value",
                "nyc>test-exclude>micromatch>snapdragon>base>cache-base>set-value"
              ]
            },
            {
              "version": "0.4.3",
              "paths": [
                "nyc>micromatch>braces>snapdragon>base>cache-base>union-value>set-value",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>cache-base>union-value>set-value",
                "nyc>micromatch>extglob>snapdragon>base>cache-base>union-value>set-value",
                "nyc>micromatch>nanomatch>snapdragon>base>cache-base>union-value>set-value",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>cache-base>union-value>set-value",
                "nyc>micromatch>snapdragon>base>cache-base>union-value>set-value",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>cache-base>union-value>set-value",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>cache-base>union-value>set-value",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>cache-base>union-value>set-value",
                "nyc>test-exclude>micromatch>snapdragon>base>cache-base>union-value>set-value"
              ]
            }
          ],
          "id": 1012,
          "created": "2019-06-20T14:35:11.974Z",
          "updated": "2019-07-12T21:43:14.145Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "",
            "name": "Jon Schlinkert"
          },
          "reported_by": {
            "link": "",
            "name": "Jon Schlinkert"
          },
          "module_name": "set-value",
          "cves": [
            "CVE-2019-10747"
          ],
          "vulnerable_versions": "<2.0.1 || >=3.0.0 <3.0.1",
          "patched_versions": ">=2.0.1 <3.0.0 || >=3.0.1",
          "overview": "Versions of \`set-value\` prior to 3.0.1 or 2.0.1 are vulnerable to Prototype Pollution. The \`set\` function fails to validate which Object properties it updates. This allows attackers to modify the prototype of Object, causing the addition or modification of an existing property on all objects.\\n\\n",
          "recommendation": "If you are using \`set-value\` 3.x, upgrade to version 3.0.1 or later.\\nIf you are using \`set-value\` 2.x, upgrade to version 2.0.1 or later.\\n",
          "references": "- [Snyk Report](https://snyk.io/vuln/SNYK-JS-SETVALUE-450213)",
          "access": "public",
          "severity": "high",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 5,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1012"
        }
      ],
      "effects": [
        "union-value"
      ],
      "range": "<=2.0.0 || 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/set-value",
        "node_modules/nyc/node_modules/union-value/node_modules/set-value"
      ],
      "fixAvailable": true
    },
    "mixin-deep": {
      "name": "mixin-deep",
      "severity": "high",
      "via": [
        {
          "findings": [
            {
              "version": "1.3.1",
              "paths": [
                "nyc>micromatch>braces>snapdragon>base>mixin-deep",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>mixin-deep",
                "nyc>micromatch>extglob>snapdragon>base>mixin-deep",
                "nyc>micromatch>nanomatch>snapdragon>base>mixin-deep",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>mixin-deep",
                "nyc>micromatch>snapdragon>base>mixin-deep",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>mixin-deep",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>mixin-deep",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>mixin-deep",
                "nyc>test-exclude>micromatch>snapdragon>base>mixin-deep"
              ]
            }
          ],
          "id": 1013,
          "created": "2019-06-20T14:51:39.425Z",
          "updated": "2019-07-12T18:53:21.152Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "",
            "name": "Snyk Security Team"
          },
          "reported_by": {
            "link": "",
            "name": "Snyk Security Team"
          },
          "module_name": "mixin-deep",
          "cves": [
            "CVE-2019-10746"
          ],
          "vulnerable_versions": "<1.3.2 || >=2.0.0 <2.0.1",
          "patched_versions": ">=1.3.2 <2.0.0 || >=2.0.1",
          "overview": "Versions of \`mixin-deep\` prior to 2.0.1 or 1.3.2 are vulnerable to Prototype Pollution. The \`mixinDeep\` function fails to validate which Object properties it updates. This allows attackers to modify the prototype of Object, causing the addition or modification of an existing property on all objects.\\n\\n",
          "recommendation": "If you are using \`mixin-deep\` 2.x, upgrade to version 2.0.1 or later.\\nIf you are using \`mixin-deep\` 1.x, upgrade to version 1.3.2 or later.",
          "references": "- [Snyk Report](https://snyk.io/vuln/SNYK-JS-MIXINDEEP-450212)",
          "access": "public",
          "severity": "high",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 5,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1013"
        }
      ],
      "effects": [],
      "range": "<=1.3.1 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mixin-deep"
      ],
      "fixAvailable": true
    },
    "mem": {
      "name": "mem",
      "severity": "low",
      "via": [
        {
          "findings": [
            {
              "version": "1.1.0",
              "paths": [
                "nyc>yargs>os-locale>mem"
              ]
            }
          ],
          "id": 1084,
          "created": "2019-07-18T21:30:31.935Z",
          "updated": "2019-11-19T23:31:37.349Z",
          "deleted": null,
          "title": "Denial of Service",
          "found_by": {
            "link": "",
            "name": "Juan Campa",
            "email": ""
          },
          "reported_by": {
            "link": "",
            "name": "Juan Campa",
            "email": ""
          },
          "module_name": "mem",
          "cves": [],
          "vulnerable_versions": "<4.0.0",
          "patched_versions": ">=4.0.0",
          "overview": "Versions of \`mem\` prior to 4.0.0 are vulnerable to Denial of Service (DoS).  The package fails to remove old values from the cache even after a value passes its \`maxAge\` property. This may allow attackers to exhaust the system's memory if they are able to abuse the application logging.",
          "recommendation": "Upgrade to version 4.0.0 or later.",
          "references": "- [Snyk Report](https://snyk.io/vuln/npm:mem:20180117)",
          "access": "public",
          "severity": "low",
          "cwe": "CWE-400",
          "metadata": {
            "module_type": "",
            "exploitability": 2,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1084"
        }
      ],
      "effects": [
        "os-locale"
      ],
      "range": "<4.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/mem"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "minimist": {
      "name": "minimist",
      "severity": "low",
      "via": [
        {
          "findings": [
            {
              "version": "0.0.8",
              "paths": [
                "mkdirp>minimist"
              ]
            },
            {
              "version": "0.0.8",
              "paths": [
                "nyc>caching-transform>mkdirp>minimist",
                "nyc>find-cache-dir>mkdirp>minimist",
                "nyc>istanbul-lib-report>mkdirp>minimist",
                "nyc>istanbul-lib-source-maps>mkdirp>minimist",
                "nyc>mkdirp>minimist",
                "nyc>spawn-wrap>mkdirp>minimist",
                "nyc>istanbul-reports>handlebars>optimist>minimist"
              ]
            }
          ],
          "id": 1179,
          "created": "2019-09-23T15:01:43.049Z",
          "updated": "2020-03-18T19:41:45.921Z",
          "deleted": null,
          "title": "Prototype Pollution",
          "found_by": {
            "link": "https://www.checkmarx.com/resources/blog/",
            "name": "Checkmarx Research Team",
            "email": ""
          },
          "reported_by": {
            "link": "https://www.checkmarx.com/resources/blog/",
            "name": "Checkmarx Research Team",
            "email": ""
          },
          "module_name": "minimist",
          "cves": [],
          "vulnerable_versions": "<0.2.1 || >=1.0.0 <1.2.3",
          "patched_versions": ">=0.2.1 <1.0.0 || >=1.2.3",
          "overview": "Affected versions of \`minimist\` are vulnerable to prototype pollution. Arguments are not properly sanitized, allowing an attacker to modify the prototype of \`Object\`, causing the addition or modification of an existing property that will exist on all objects.  \\nParsing the argument \`--__proto__.y=Polluted\` adds a \`y\` property with value \`Polluted\` to all objects. The argument \`--__proto__=Polluted\` raises and uncaught error and crashes the application.  \\nThis is exploitable if attackers have control over the arguments being passed to \`minimist\`.\\n",
          "recommendation": "Upgrade to versions 0.2.1, 1.2.3 or later.",
          "references": "- [GitHub commit 1](https://github.com/substack/minimist/commit/4cf1354839cb972e38496d35e12f806eea92c11f#diff-a1e0ee62c91705696ddb71aa30ad4f95)\\n- [GitHub commit 2](https://github.com/substack/minimist/commit/63e7ed05aa4b1889ec2f3b196426db4500cbda94)",
          "access": "public",
          "severity": "low",
          "cwe": "CWE-471",
          "metadata": {
            "module_type": "",
            "exploitability": 1,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1179"
        }
      ],
      "effects": [
        "mkdirp",
        "optimist"
      ],
      "range": "<0.2.1 || >=1.0.0 <1.2.3",
      "nodes": [
        "node_modules/minimist",
        "node_modules/nyc/node_modules/minimist"
      ],
      "fixAvailable": true
    },
    "kind-of": {
      "name": "kind-of",
      "severity": "low",
      "via": [
        {
          "findings": [
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>braces>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>extglob>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>snapdragon>base>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>braces>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>extglob>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>snapdragon>base>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>braces>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>micromatch>extglob>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>micromatch>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>snapdragon>base>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>snapdragon>base>define-property>is-descriptor>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>braces>snapdragon>use>kind-of",
                "nyc>micromatch>extglob>expand-brackets>snapdragon>use>kind-of",
                "nyc>micromatch>extglob>snapdragon>use>kind-of",
                "nyc>micromatch>nanomatch>snapdragon>use>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>snapdragon>use>kind-of",
                "nyc>micromatch>snapdragon>use>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon>use>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>snapdragon>use>kind-of",
                "nyc>test-exclude>micromatch>extglob>snapdragon>use>kind-of",
                "nyc>test-exclude>micromatch>snapdragon>use>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>braces>snapdragon-node>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon-node>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>braces>snapdragon-node>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon-node>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>braces>snapdragon-node>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>snapdragon-node>define-property>is-descriptor>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>braces>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>extglob>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>nanomatch>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>to-regex>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>nanomatch>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>braces>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>extglob>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>nanomatch>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>to-regex>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>nanomatch>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>braces>to-regex>define-property>is-descriptor>kind-of",
                "nyc>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>kind-of",
                "nyc>micromatch>extglob>to-regex>define-property>is-descriptor>kind-of",
                "nyc>micromatch>nanomatch>to-regex>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>to-regex>define-property>is-descriptor>kind-of",
                "nyc>micromatch>to-regex>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>braces>to-regex>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>expand-brackets>to-regex>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>to-regex>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>to-regex>define-property>is-descriptor>kind-of",
                "nyc>micromatch>define-property>is-descriptor>kind-of",
                "nyc>micromatch>nanomatch>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>define-property>is-descriptor>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>extglob>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>micromatch>extglob>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>micromatch>extglob>define-property>is-descriptor>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>micromatch>nanomatch>kind-of",
                "nyc>test-exclude>micromatch>nanomatch>kind-of"
              ]
            },
            {
              "version": "6.0.2",
              "paths": [
                "nyc>test-exclude>micromatch>extglob>define-property>is-descriptor>is-accessor-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>define-property>is-descriptor>is-data-descriptor>kind-of",
                "nyc>test-exclude>micromatch>extglob>define-property>is-descriptor>kind-of",
                "nyc>test-exclude>micromatch>kind-of"
              ]
            }
          ],
          "id": 1490,
          "created": "2020-03-06T21:22:12.305Z",
          "updated": "2020-03-09T14:12:20.619Z",
          "deleted": null,
          "title": "Validation Bypass",
          "found_by": {
            "link": "",
            "name": "Feng Xiao",
            "email": ""
          },
          "reported_by": {
            "link": "",
            "name": "Feng Xiao",
            "email": ""
          },
          "module_name": "kind-of",
          "cves": [],
          "vulnerable_versions": ">=6.0.0 <6.0.3",
          "patched_versions": ">=6.0.3",
          "overview": "Versions of \`kind-of\` 6.x prior to 6.0.3 are vulnerable to a Validation Bypass. A maliciously crafted object can alter the result of the type check, allowing attackers to bypass the type checking validation. ",
          "recommendation": "Upgrade to versions 6.0.3 or later.",
          "references": "- [GitHub issue](https://github.com/jonschlinkert/kind-of/issues/30)",
          "access": "public",
          "severity": "low",
          "cwe": "CWE-20",
          "metadata": {
            "module_type": "",
            "exploitability": 3,
            "affected_components": ""
          },
          "url": "https://npmjs.com/advisories/1490"
        }
      ],
      "effects": [],
      "range": "6.0.0 - 6.0.2",
      "nodes": [
        "node_modules/nyc/node_modules/base/node_modules/kind-of",
        "node_modules/nyc/node_modules/define-property/node_modules/kind-of",
        "node_modules/nyc/node_modules/extglob/node_modules/kind-of",
        "node_modules/nyc/node_modules/micromatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/nanomatch/node_modules/kind-of",
        "node_modules/nyc/node_modules/snapdragon-node/node_modules/kind-of",
        "node_modules/nyc/node_modules/test-exclude/node_modules/kind-of",
        "node_modules/nyc/node_modules/use/node_modules/kind-of"
      ],
      "fixAvailable": true
    },
    "union-value": {
      "name": "union-value",
      "severity": "high",
      "via": [
        "set-value"
      ],
      "effects": [],
      "range": "<=1.0.0 || 2.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/union-value"
      ],
      "fixAvailable": true
    },
    "os-locale": {
      "name": "os-locale",
      "severity": "low",
      "via": [
        "mem"
      ],
      "effects": [
        "yargs"
      ],
      "range": "2.0.0 - 3.0.0",
      "nodes": [
        "node_modules/nyc/node_modules/os-locale"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "mkdirp": {
      "name": "mkdirp",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [],
      "range": "0.4.1 - 0.5.1",
      "nodes": [
        "node_modules/mkdirp",
        "node_modules/nyc/node_modules/mkdirp"
      ],
      "fixAvailable": true
    },
    "optimist": {
      "name": "optimist",
      "severity": "low",
      "via": [
        "minimist"
      ],
      "effects": [],
      "range": ">=0.6.0",
      "nodes": [
        "node_modules/nyc/node_modules/optimist"
      ],
      "fixAvailable": true
    },
    "yargs": {
      "name": "yargs",
      "severity": "low",
      "via": [
        "os-locale"
      ],
      "effects": [
        "nyc"
      ],
      "range": "8.0.1 - 11.1.0 || 12.0.0-candidate.0 - 12.0.1",
      "nodes": [
        "node_modules/nyc/node_modules/yargs"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    },
    "nyc": {
      "name": "nyc",
      "severity": "low",
      "via": [
        "yargs"
      ],
      "effects": [],
      "range": "11.0.0-candidate.1 - 13.1.0",
      "nodes": [
        "node_modules/nyc"
      ],
      "fixAvailable": {
        "name": "nyc",
        "version": "15.0.0",
        "isSemVerMajor": true
      }
    }
  },
  "metadata": {
    "vulnerabilities": {
      "info": 0,
      "low": 8,
      "moderate": 0,
      "high": 5,
      "critical": 0
    },
    "dependencies": {
      "prod": 317,
      "dev": 0,
      "optional": 12,
      "peer": 0,
      "peerOptional": 0,
      "total": 329
    }
  }
}
`