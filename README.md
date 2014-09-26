# ![Kira](https://raw.githubusercontent.com/chrisenytc/kira/master/logo.png)

> A awesome DDoS tool for making attacks to any target

[![Build Status](https://secure.travis-ci.org/chrisenytc/kira.png?branch=master)](https://travis-ci.org/chrisenytc/kira) [![NPM version](https://badge-me.herokuapp.com/api/npm/kira.png)](http://badges.enytc.com/for/npm/kira)

## Getting Started
Install the module with: 

```bash
$ npm install -g kira
```

Example:

```javascript
var Kira = require('kira');
//Create new instance of Kira
var api = new Kira();
```

## How to use

Example of use the Kira CLI

```bash
$ kira kill http://localhost:3000 --proxy https://54.234.95.169:80
```

## Documentation

#### .kill(url, maxLimit, length, enableProxy)

**Parameter**: `url`
**Type**: `String`
**Example**: `http://example.com`


**Parameter**: `maxLimit`
**Type**: `Number`
**Example**: `200`


**Parameter**: `length`
**Type**: `Number`
**Example**: `10000`

**Parameter**: `enableProxy`
**Type**: `String`
**Example**: `https://54.234.95.169:80`


The 'kill' method is responsible for send many requests to a target

How to use this method

```javascript

api.kill('http://example.com', 200, 10000, 'https://54.234.95.169:80');
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/chrisenytc/kira/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/kira/issues).

## License 

The MIT License

Copyright (c) 2014, Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

