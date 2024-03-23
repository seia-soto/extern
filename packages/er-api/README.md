# er-api

An EternalReturn Open API client.

**Features**

- Built-in ratelimit control
- Fully typed API responses
- ES module
- MIT licensed

---

# Usage

Visit [https://er-api.seia.io](https://er-api.seia.io) to see exports.

**ErApi**

```ts
import { ErApi } from 'er-api';

// The API key can be omitted if you export an environment variable named "ER_API_KEY".
const client = new ErApi('api-key');
```

**ErApiQueue**

The default client comes with built-in queue manager rate limits only one request to be sent within a second.
If you want to adjust the limitation, please initialise your own queue manager by providing in argument:

```ts
import { ErApi, ErApiQueue } from 'er-api';

const client = new ErApi(undefined, {
  queue: new ErApiQueue({
    size: 10_000_000,
    period: 1 * 1000,
  }),
});
```

This integration can be disabled by omitting the `queue` property of constructor option.

```ts
const client = new ErApi(undefined, {});
```

**ErTranslationClient**

The EternalReturn translation assets come with custom defined format:

```
key┃value {0} {1}
```

We provide a built-in parser to use them easily.

```ts
import { parseRawTranslation, ErTranslationClient } from 'er-api';

const t = new ErTranslationClient(parseRawTranslation(text));

t.compile(key, 'arg0', 'arg1', ...); // string
```

# LICENSE

The client library is distributed under MIT license.

The EternalReturn assets included in this repository are the property of Nimble Neuron Corp.
