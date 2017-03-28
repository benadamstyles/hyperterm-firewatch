'use strict'

const RED = '#e26b73';
const GREEN = '#6ac38a';
const YELLOW = '#e6c176';
const BLUE = '#5e9ccf';
const MAGENTA = '#df671f';
const CYAN = '#51b6c3';
const WHITE = '#ebebff';
const BLACK = '#6b7380';

const BRIGHT_RED = '#C9525A';
const BRIGHT_GREEN = '#51AA71';
const BRIGHT_YELLOW = '#CDA85D';
const BRIGHT_BLUE = '#4583B6';
const BRIGHT_MAGENTA = '#C64E06';
const BRIGHT_CYAN = '#389DAA';
const BRIGHT_WHITE = '#D2D2E6';
const BRIGHT_BLACK = '#525A67';

const DEEP_BLACK = '#202228';

const BACKGROUND_COLOR = '#282C34';
const FOREGROUND_COLOR = WHITE;
const BORDER_COLOR = DEEP_BLACK;

const COLORS = {
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: MAGENTA,
  cyan: CYAN,
  white: WHITE,
  black: BLACK,

  lightRed: BRIGHT_RED,
  lightGreen: BRIGHT_GREEN,
  lightYellow: BRIGHT_YELLOW,
  lightBlue: BRIGHT_BLUE,
  lightMagenta: BRIGHT_MAGENTA,
  lightCyan: BRIGHT_CYAN,
  lightWhite: BRIGHT_WHITE,
  lightBlack: BRIGHT_BLACK,
};

const TERM_CSS = `
  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: ${DEEP_BLACK};
  }
`;

const CSS = `
  .hyper_main {
    border: 0 !important;
  }

  .header_header {
    top: 0;
    left: 0;
    right: 0;
  }

  .tabs_borderShim {
    display: none !important;
  }

  .tabs_list {
    margin-left: 0;
    background: ${DEEP_BLACK};
  }

  .tab_tab {
    color: ${FOREGROUND_COLOR} !important;
    border: 0 !important;
    padding-left: 0 !important;
  }

  .tab_active {
    color: ${WHITE};
    height: calc(100% + 1px);
  }

  .tabs_list .tab_active {
    background-color: ${BACKGROUND_COLOR} !important;
  }

  .tab_text {
    color: ${FOREGROUND_COLOR};
    border: 0 !important;
    opacity: 0.5;
  }

  .tab_hasActivity .tab_text .tab_textInner::after {
    content: ' *';
  }

  .tab_active .tab_text {
    opacity: 1;
  }
`;

exports.decorateConfig = (config) => (
  Object.assign({}, config, {
    backgroundColor: BACKGROUND_COLOR,
    foregroundColor: FOREGROUND_COLOR,
    borderColor: BORDER_COLOR,
    cursorColor: FOREGROUND_COLOR,
    colors: COLORS,
    css: `
      ${config.css || ''}
      ${CSS}
    `,
    termCSS: `
      ${config.termCSS || ''}
      ${TERM_CSS}
    `,
  })
);

exports.middleware = () => (next) => (action) => {
  /* eslint-disable no-param-reassign, default-case */
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = FOREGROUND_COLOR;
      action.config.backgroundColor = BACKGROUND_COLOR;
      action.config.cursorColor = FOREGROUND_COLOR;
      action.config.borderColor = BORDER_COLOR;
      action.config.colors = COLORS;
      action.config.css = `${action.config.css || ''}${CSS}`;
  }
  next(action);
};
