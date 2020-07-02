var APP_DATA = {
  "scenes": [
    {
      "id": "0-gebude",
      "name": "Gebäude",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6890654484584493,
        "pitch": -0.08586456101109086,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.7215018370597015,
          "pitch": 0.04696441735395318,
          "rotation": 0.7853981633974483,
          "target": "1-innenhalle"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.29840964146595,
          "pitch": -0.6363778208002753,
          "title": "Arbeiten 4.0",
          "text": "<span style=\"font-size:12.0pt;font-family:&quot;Calibri&quot;,sans-serif;\nmso-fareast-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;\ncolor:#221E1F;mso-ansi-language:DE;mso-fareast-language:EN-US;mso-bidi-language:\nAR-SA\">Das Gebäude ist auf dem ehemaligen Gelände des Flughafen-Tegel\nplatziert. Dadurch entsteht mittels eines großen Volumens ein ebenwürdiger\nGegenspieler zum nahe gelege­nen, ehemaligen Terminalgebäude, welches in\nZukunft eine Hochschule als Nutzer haben wird. Durch die großzügigen Öffnungen\nnach Nord-Osten zum Grünzug und Nord-Westen zum See wirkt das Gebäude in der\nErdgeschosszone auch für Besucher sehr einladend. Das Gebäude ist maßgeblich\naus modularen Stahlrahmen mit den Maßen 5x5x4 zusammenge­setzt. Dadurch wird\neine Flexible Nutzung ermöglicht und auch hinsichtlich einer späteren\nNachnutzung viel Spielraum geboten. Einschnitte durchbrechen die zunächst klare\nGeomet­rie und belichten den Innenraum. Dadurch löst sich die Form in eine\nspielerische Landschaft auf. Die entstandenen Abzugsflächen werden für\nSportstätten, Werkstätten und Laborar­beitsplätze genutzt.</span>"
        }
      ]
    },
    {
      "id": "1-innenhalle",
      "name": "Innenhalle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.611292894799119,
        "pitch": -0.3035096400023498,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -2.240357117432655,
          "pitch": -0.1156114283778269,
          "rotation": 10.995574287564278,
          "target": "2-sport-und-erschlieung"
        },
        {
          "yaw": -2.977034502727914,
          "pitch": -0.4716505541751168,
          "rotation": 5.497787143782138,
          "target": "4-lageplan-und-cafe"
        },
        {
          "yaw": 2.674615426644827,
          "pitch": -0.21825712868461444,
          "rotation": 5.497787143782138,
          "target": "3-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sport-und-erschlieung",
      "name": "Sport und Erschließung",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5748240096841233,
        "pitch": -0.0017522598152268642,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 2.2875984179871303,
          "pitch": -0.2733641137661671,
          "rotation": 0,
          "target": "4-lageplan-und-cafe"
        },
        {
          "yaw": 0.9676492138079986,
          "pitch": 0.14697641991850574,
          "rotation": 4.71238898038469,
          "target": "1-innenhalle"
        },
        {
          "yaw": 2.5269452548767175,
          "pitch": -0.29033298795136986,
          "rotation": 0,
          "target": "3-terrasse"
        },
        {
          "yaw": 1.1366448253687054,
          "pitch": 0.02655821253817159,
          "rotation": 4.71238898038469,
          "target": "0-gebude"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terrasse",
      "name": "Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6647755942099707,
        "pitch": 0.0806039515009509,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": 1.7536219881242685,
          "pitch": 0.0029661124785338444,
          "rotation": 0,
          "target": "4-lageplan-und-cafe"
        },
        {
          "yaw": 2.272176584852958,
          "pitch": 0.2622780742807116,
          "rotation": 0.7853981633974483,
          "target": "1-innenhalle"
        },
        {
          "yaw": 1.3900502168630382,
          "pitch": 0.11261930631972561,
          "rotation": 0,
          "target": "2-sport-und-erschlieung"
        },
        {
          "yaw": -3.107794796535865,
          "pitch": 0.17800113511979987,
          "rotation": 0,
          "target": "0-gebude"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lageplan-und-cafe",
      "name": "Lageplan und Cafe",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4083464502631173,
        "pitch": -0.03329293648953069,
        "fov": 1.557758975746875
      },
      "linkHotspots": [
        {
          "yaw": -1.3743373247306891,
          "pitch": -0.3994767357902411,
          "rotation": 3.9269908169872414,
          "target": "1-innenhalle"
        },
        {
          "yaw": -1.3267480108207863,
          "pitch": -0.5881014543511345,
          "rotation": 3.141592653589793,
          "target": "0-gebude"
        },
        {
          "yaw": -1.503165519873015,
          "pitch": -0.2318998647421342,
          "rotation": 1.5707963267948966,
          "target": "2-sport-und-erschlieung"
        },
        {
          "yaw": 0.17678281748523084,
          "pitch": -0.14177001746348594,
          "rotation": 4.71238898038469,
          "target": "3-terrasse"
        },
        {
          "yaw": 2.2471519110721685,
          "pitch": 0.04641031143347263,
          "rotation": 0,
          "target": "3-terrasse"
        },
        {
          "yaw": 0.7418064974987324,
          "pitch": 0.06979690275104744,
          "rotation": 3.141592653589793,
          "target": "0-gebude"
        },
        {
          "yaw": -2.561928883061128,
          "pitch": 0.08102643575394097,
          "rotation": 2.356194490192345,
          "target": "2-sport-und-erschlieung"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6059439188905422,
          "pitch": -0.5320049036654027,
          "title": "Arbeiten 4.0",
          "text": "<span style=\"font-size:12.0pt;font-family:&quot;Calibri&quot;,sans-serif;\nmso-fareast-font-family:Calibri;mso-bidi-font-family:&quot;Times New Roman&quot;;\ncolor:#221E1F;mso-ansi-language:DE;mso-fareast-language:EN-US;mso-bidi-language:\nAR-SA\">Das Gebäude ist auf dem ehemaligen Gelände des Flughafen-Tegel\nplatziert. Dadurch entsteht mittels eines großen Volumens ein ebenwürdiger\nGegenspieler zum nahe gelege­nen, ehemaligen Terminalgebäude, welches in\nZukunft eine Hochschule als Nutzer haben wird. Durch die großzügigen Öffnungen\nnach Nord-Osten zum Grünzug und Nord-Westen zum See wirkt das Gebäude in der\nErdgeschosszone auch für Besucher sehr einladend. Das Gebäude ist maßgeblich\naus modularen Stahlrahmen mit den Maßen 5x5x4 zusammenge­setzt. Dadurch wird\neine Flexible Nutzung ermöglicht und auch hinsichtlich einer späteren\nNachnutzung viel Spielraum geboten. Einschnitte durchbrechen die zunächst klare\nGeomet­rie und belichten den Innenraum. Dadurch löst sich die Form in eine\nspielerische Landschaft auf. Die entstandenen Abzugsflächen werden für\nSportstätten, Werkstätten und Laborar­beitsplätze genutzt.</span>"
        }
      ]
    }
  ],
  "name": "Arbeiten 4.0 ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
