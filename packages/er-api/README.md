# er-api

An EternalReturn Open API client.

**Features**

- Built-in ratelimit control
- Fully typed API responses
- ES module
- MIT licensed

---

# Usage

```ts
import { ErClient } from 'er-api';

// The API key can be omitted if you export an environment variable named "ER_API_KEY".
const client = new ErClient('api-key');
```

**ErClientQueue**

The default client comes with built-in queue manager rate limits only one request to be sent within a second.
If you want to adjust the limitation, please initialise your own queue manager by providing in argument:

```ts
import { ErClient, ErClientQueue } from 'er-api';

const client = new ErClient(undefined, {
  queue: new ErClientQueue({
    size: 10_000_000,
    period: 1 * 1000,
  }),
});
```

This integration can be disabled by omitting the `queue` property of constructor option.

```ts
const client = new ErClient(undefined, {});
```

# LICENSE

The client library is distributed under MIT license.

The EternalReturn assets included in this repository are the property of Nimble Neuron Corp.
