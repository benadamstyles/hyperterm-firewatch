'use strict'
const foregroundColor = '#abb2bf'
const backgroundColor = '#282b34'
const black = '#6b7380'
const red = '#e26b73'
const green = '#6ac38a'
const yellow = '#e6c176'
const blue = '#5e9ccf'
const magenta = '#df671f'
const cyan = '#51b6c3'
const gray = '#ebebff'
const brightBlack = '#6b7380'
const brightWhite = '#ebebff'
const borderColor = red
const cursorColor = '#f8f8f0'

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: [
      // normal
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,

      // bright
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    ],
    css: `
      ${config.css || ''}

      .tabs_list,
      .tab_tab {
        border-color: transparent !important;
      }

      .tab_tab {
        background-color: transparent;
      }

      .tab_tab.tab_active {
        background-color: transparent;
      }

      .tab_active:before {
        border-color: ${cyan};
      }
    `
  })
}
