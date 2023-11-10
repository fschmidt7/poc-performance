export function loadTestOptions() {
  return {
    stages: [
      { duration: '10s', target: 5 },
      { duration: '30s', target: 10 },
      { duration: '10s', target: 0 },
    ],
    thresholds: {
      http_req_duration: ['p(95) < 5000'],
      http_req_failed: ['rate<0.01'],
      checks: ['rate>0.99'],
    },
  }
}
