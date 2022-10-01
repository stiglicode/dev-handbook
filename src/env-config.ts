const envConfig: Record<string, unknown> = {
  mode: import.meta.env.REACT_APP_MODE || 'production',
  baseUrl: import.meta.env.REACT_APP_BASE_URL || 'localhost',
  proxyHost: import.meta.env.REACT_APP_PROXY_HOST || '',
  proxyPort: import.meta.env.REACT_APP_PROXY_PORT || 0
};

export default envConfig;