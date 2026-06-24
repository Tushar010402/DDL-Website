module.exports = {
  apps: [{
    name: 'drdangslab',
    cwd: '/var/www/my-next-project',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -H 127.0.0.1 -p 3002',
    interpreter: '/usr/bin/node',
    // Cluster mode with 2 instances enables gapless rolling reloads
    // (one instance keeps serving while the other reloads). Both share port 3002.
    exec_mode: 'cluster',
    instances: 2,
    env: {
      NODE_ENV: 'production',
    },

    // Restart protection - prevents restart storms
    autorestart: true,
    max_restarts: 10,                    // Max 10 restarts within min_uptime window
    min_uptime: '10s',                   // Must run 10s to be considered stable
    restart_delay: 5000,                 // Wait 5s between restarts
    exp_backoff_restart_delay: 1000,     // Exponential backoff starting at 1s (caps at 15s)
    max_memory_restart: '500M',
    kill_timeout: 5000,
    watch: false,

    // Logging - persistent paths (NOT /tmp)
    out_file: '/var/log/pm2/drdangslab-out.log',
    error_file: '/var/log/pm2/drdangslab-error.log',
    merge_logs: true,
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
  }]
};
