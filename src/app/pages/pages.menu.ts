export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'merchant',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Add New Merchant', // menu title
            icon: 'ion-android-add-circle', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 100,
          },
        },
      },
      {
        path: 'merchants',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Manage Merchants', // menu title
            icon: 'ion-compose', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 150,
          },
        },
      },
      {
        path: 'user',
        data: {
          menu: {
            title: 'Add New Tax User',
            icon: 'fa fa-user-plus',
            pathMatch: 'prefix',
            selected: false,
            expanded: false
          }
        }
      },
      {
        path: 'users',
        data: {
          menu: {
            title: 'Manage All Users',
            icon: 'fa fa-users',
            pathMatch: 'prefix',
            selected: false,
            expanded: false
          }
        }
      },
      {
        path: 'export-merchant',
        data: {
          menu: {
            title: 'Export Merchant',
            icon: 'fa fa-file-excel-o',
            pathMatch: 'prefix',
            selected: false,
            expanded: false
          }
        }
      }
    ]
  }
];
      /*
      {
        path: 'editors',
        data: {
          menu: {
            title: 'general.menu.editors',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          },
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              },
            },
          },
        ],
      },
    
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          },
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              },
            },
          },
        ],
      },
      */
      /*
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.charts',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              },
            },
          },
        ],
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'general.menu.ui_features',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          },
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: 'general.menu.typography',
              },
            },
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: 'general.menu.buttons',
              },
            },
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: 'general.menu.icons',
              },
            },
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: 'general.menu.modals',
              },
            },
          },
          {
            path: 'slim',
            data: {
              menu: {
                title: 'Slim loading bar',
              },
            },
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'general.menu.grid',
              },
            },
          },
        ],
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: 'general.menu.form_elements',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: 'general.menu.form_inputs',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: 'general.menu.form_layouts',
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: 'general.menu.tables',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
                title: 'general.menu.basic_tables',
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
                title: 'general.menu.smart_tables',
              }
            }
          },
          {
            path: 'datatables',
            data: {
              menu: {
                title: 'Data Tables',
              }
            }
          },
           {
             path: 'hottables',
             data: {
               menu: {
                 title: 'Hot Tables',
               }
             }
           }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'general.menu.maps',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: 'general.menu.google_maps',
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
                title: 'general.menu.leaflet_maps',
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
                title: 'general.menu.bubble_maps',
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.pages',
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
                title: 'general.menu.login'
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
                title: 'general.menu.register'
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.menu_level_1',
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_1',
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1_2',
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2_1',
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
  }
];
*/
