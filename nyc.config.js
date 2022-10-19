module.exports = {
  all: true,
  include: ['src/**/*.js'],
  'check-coverage': true,
  lines: 50,
  watermarks: {
    lines: [50, 95],
  },
  reporter: ['text', 'html'],
}
