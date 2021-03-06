export const FONT_SIZE_LIST = [
    {
        fontSize: 12
    },
    {
        fontSize: 14
    },
    {
        fontSize: 16
    },
    {
        fontSize: 18
    },
    {
        fontSize: 20
    },
    {
        fontSize: 22
    },
    {
        fontSize: 24
    }
]

export const FONT_FAMILY_LIST = [
    { font: 'Default' },
    { font: 'Cabin' },
    { font: 'Days One' },
    { font: 'Montserrat' },
    { font: 'Tangerine' }
]

export function ThemeList(vue) {
    return [
      {
        name: 'Default',
        style: {
          body: {
            'color': '#4c5059',
            'background': '#cecece',
            'padding-top': '48px!important',
            'padding-bottom': '48px!important'
          }
        }
      },
      {
        name: 'Gold',
        style: {
          body: {
            'color': '#5c5b56',
            'background': '#c6c2b6',
            'padding-top': '48px!important',
            'padding-bottom': '48px!important'
          }
        }
      },
      {
        name: 'Eye',
        style: {
          body: {
            'color': '#404c42',
            'background': '#a9c1a9',
            'padding-top': '48px!important',
            'padding-bottom': '48px!important'
          }
        }
      },
      {
        name: 'Night',
        style: {
          body: {
            'color': '#cecece',
            'background': '#000000',
            'padding-top': '48px!important',
            'padding-bottom': '48px!important'
          }
        }
      }
    ]
  }