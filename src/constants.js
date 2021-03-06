const AUTO_ADD = 'autoAdd'
const CODE = 'code'
const EMOJI_FORMAT = 'emojiFormat'
const HOOK_MODE = 'hook'
const HOOK_FILE_CONTENTS = '#!/bin/sh\n# gitmoji as a commit hook\n' +
  'exec < /dev/tty\ngitmoji --hook $1\n'
const HOOK_PATH = '/hooks/prepare-commit-msg'
const HOOK_PERMISSIONS = 0o775
const SIGNED_COMMIT = 'signedCommit'
const TITLE_MAX_LENGTH_COUNT = 48

module.exports = {
  AUTO_ADD,
  CODE,
  EMOJI_FORMAT,
  HOOK_FILE_CONTENTS,
  HOOK_MODE,
  HOOK_PATH,
  HOOK_PERMISSIONS,
  SIGNED_COMMIT,
  TITLE_MAX_LENGTH_COUNT
}
