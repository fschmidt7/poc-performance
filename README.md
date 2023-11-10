# Performance Tests

Project containing <a href="https://k6.io"><b>k6</b></a> scripts for many types of performance tests for Youse platform.

## How to install

### Clone repository:

```bash
git clone git@github.com:
```

### Install k6:

```bash
brew install k6
```

For more installation options, visit <a href="https://k6.io/docs/get-started/installation">official documentation</a>.

## How to run

For predefined execution options, just run the test script. Example:

```bash
k6 run src/scenarios/poc/poc-api.test.js
```

Execution options can be customized in command line. Example:

```bash
k6 run --vus 10 --duration 30s src/scenarios/poc/poc-api.test.js
```

### Using <a href="https://docs.docker.com/get-docker">Docker</a>

It's also possible to send k6 metrics to influxDB and visualize test results in Grafana. You can do it using Docker:

#### Preparing:

```bash
docker-compose -f ./docker-compose.yml up -d influxdb grafana
```

#### Running tests:

```bash
docker-compose -f ./docker-compose.yml run k6 run src/scenarios/poc/poc-api.test.js
```

#### Visualizing results:

```bash
TO DO
```

## Architecture

TO DO

## How to create create new tests

TO DO

## Links

- <a href="https://k6.io/docs">k6 docs</a>
- <a href="https://k6.io/docs/test-types/introduction">Test types</a>
