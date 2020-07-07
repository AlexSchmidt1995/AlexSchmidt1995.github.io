var APP_DATA = {
  "scenes": [
    {
      "id": "0-ansicht",
      "name": "Ansicht",
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
        "yaw": 1.5740190943932024,
        "pitch": 0.06152304845571166,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.578630362742236,
          "pitch": 0.239587379986121,
          "rotation": 5.497787143782138,
          "target": "1-tischtennisarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-tischtennisarea",
      "name": "Tischtennisarea",
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
        "yaw": 1.7104987189519898,
        "pitch": -0.2610668800257976,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.8384200192436317,
          "pitch": -0.07607749634280125,
          "rotation": 4.71238898038469,
          "target": "2-foyer"
        },
        {
          "yaw": -0.3042324445104363,
          "pitch": -0.1506602238352741,
          "rotation": 0.7853981633974483,
          "target": "0-ansicht"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-foyer",
      "name": "Foyer",
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
        "yaw": 1.5992914982560293,
        "pitch": -0.15554331798836785,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.543951538241112,
          "pitch": 0.05299109413852676,
          "rotation": 5.497787143782138,
          "target": "3-klassenverbund"
        },
        {
          "yaw": 1.8948411685347706,
          "pitch": 0.038302404179356486,
          "rotation": 0,
          "target": "4-erschlieung-1"
        },
        {
          "yaw": 0.8528085380250232,
          "pitch": 0.07414828509990201,
          "rotation": 5.497787143782138,
          "target": "17-lehrerzimmer-eg"
        },
        {
          "yaw": -0.20715635219271888,
          "pitch": 0.12638029371449377,
          "rotation": 0.7853981633974483,
          "target": "1-tischtennisarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-klassenverbund",
      "name": "Klassenverbund",
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
        "yaw": 1.6332723666102655,
        "pitch": -0.0000066708639128165714,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.18515229888895846,
          "pitch": 0.06814780887985705,
          "rotation": 0.7853981633974483,
          "target": "2-foyer"
        },
        {
          "yaw": 1.2798759075434933,
          "pitch": 0.16170135391056917,
          "rotation": 1.5707963267948966,
          "target": "19-meeting-zusammenfassung"
        },
        {
          "yaw": -2.211239795907087,
          "pitch": 0.36559597623690365,
          "rotation": 0.7853981633974483,
          "target": "21-arbeitsblatt"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-erschlieung-1",
      "name": "Erschließung 1",
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
        "yaw": 1.5870308821339627,
        "pitch": -0.034565181775192855,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.182754490256909,
          "pitch": -0.03289738175238455,
          "rotation": 10.995574287564278,
          "target": "5-erschlieung-2"
        },
        {
          "yaw": 0.13814643289901873,
          "pitch": 0.09558552146969035,
          "rotation": 5.497787143782138,
          "target": "2-foyer"
        },
        {
          "yaw": -0.4965903160727745,
          "pitch": 0.10434788126471162,
          "rotation": 5.497787143782138,
          "target": "19-meeting-zusammenfassung"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-erschlieung-2",
      "name": "Erschließung 2",
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
        "yaw": 1.6580627893946076,
        "pitch": -0.046909889552047446,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.270410333595315,
          "pitch": -0.005808404770053954,
          "rotation": 5.497787143782138,
          "target": "6-erschlieung-3"
        },
        {
          "yaw": -0.9086950651501731,
          "pitch": 0.1984142952025465,
          "rotation": 0.7853981633974483,
          "target": "11-meeting-research-1"
        },
        {
          "yaw": 0.8747405788712115,
          "pitch": 0.15550059763411106,
          "rotation": 1.5707963267948966,
          "target": "4-erschlieung-1"
        },
        {
          "yaw": -0.24786067652385668,
          "pitch": 0.17493215606113388,
          "rotation": 0,
          "target": "18-meeting-research-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-erschlieung-3",
      "name": "Erschließung 3",
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
        "yaw": 1.6051073994695209,
        "pitch": -0.05184777266278928,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.1823779951753153,
          "pitch": 0.04862522106262013,
          "rotation": 5.497787143782138,
          "target": "7-erschlieung-4"
        },
        {
          "yaw": -2.184225075638002,
          "pitch": 0.16468299319567237,
          "rotation": 0,
          "target": "12-lehrerzimmer-og"
        },
        {
          "yaw": 0.9949387305285562,
          "pitch": 0.14477154335520837,
          "rotation": 7.853981633974483,
          "target": "5-erschlieung-2"
        },
        {
          "yaw": -0.6915337764741967,
          "pitch": 0.1469403697716576,
          "rotation": 2.356194490192345,
          "target": "20-meeting-explosion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-erschlieung-4",
      "name": "Erschließung 4",
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
        "yaw": 1.6171009804192416,
        "pitch": -0.07161088755113276,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.1081814948723325,
          "pitch": -0.0009103929399003619,
          "rotation": 5.497787143782138,
          "target": "8-erschlieung-5"
        },
        {
          "yaw": -0.006835286913201344,
          "pitch": 0.11268969225496583,
          "rotation": 5.497787143782138,
          "target": "13-multifunktionsraum"
        },
        {
          "yaw": -2.7746087597733684,
          "pitch": 0.09302595328561125,
          "rotation": 0.7853981633974483,
          "target": "14-thinktank"
        },
        {
          "yaw": 1.2554871261789202,
          "pitch": 0.12595257022733364,
          "rotation": 7.853981633974483,
          "target": "6-erschlieung-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-erschlieung-5",
      "name": "Erschließung 5",
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
        "yaw": 1.0436356547639498,
        "pitch": 0.2740525126461719,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.5059036374561643,
          "pitch": -0.04973554193162322,
          "rotation": 10.995574287564278,
          "target": "9-erschlieung-6"
        },
        {
          "yaw": -0.9111564252636732,
          "pitch": 0.07350890459719928,
          "rotation": 5.497787143782138,
          "target": "15-thinktank-und-besprecher"
        },
        {
          "yaw": 0.35898909215492125,
          "pitch": 0.17005710499057258,
          "rotation": 1.5707963267948966,
          "target": "7-erschlieung-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-erschlieung-6",
      "name": "Erschließung 6",
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
        "yaw": 1.6028868889356165,
        "pitch": 0.22708709475584854,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.73844136594271,
          "pitch": 0.06627345091840553,
          "rotation": 5.497787143782138,
          "target": "10-dachgarten"
        },
        {
          "yaw": 0.13148195296520626,
          "pitch": 0.08919935200211526,
          "rotation": 4.71238898038469,
          "target": "16-thinktank-und-besprecher-2"
        },
        {
          "yaw": 1.2231193314806905,
          "pitch": 0.15098566240117428,
          "rotation": 1.5707963267948966,
          "target": "8-erschlieung-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dachgarten",
      "name": "Dachgarten",
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
        "yaw": 1.5475682235248946,
        "pitch": 0.016002631754727048,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.1184596815443193,
          "pitch": 0.12662524739965164,
          "rotation": 6.283185307179586,
          "target": "9-erschlieung-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-meeting-research-1",
      "name": "Meeting (Research 1)",
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
        "yaw": 1.7202060225870621,
        "pitch": 0.30807363905029916,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.430352469977194,
          "pitch": 0.17201729398073518,
          "rotation": 0.7853981633974483,
          "target": "5-erschlieung-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-lehrerzimmer-og",
      "name": "Lehrerzimmer OG",
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
        "yaw": 1.629914281477192,
        "pitch": -0.08888189599335306,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.056535734373723,
          "pitch": 0.23207663331323225,
          "rotation": 11.780972450961727,
          "target": "6-erschlieung-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-multifunktionsraum",
      "name": "Multifunktionsraum",
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
        "yaw": -1.2357928452384321,
        "pitch": 0.24716562428651478,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.5749603736755304,
          "pitch": 0.07832181015168871,
          "rotation": 0.7853981633974483,
          "target": "7-erschlieung-4"
        },
        {
          "yaw": 1.891007295016724,
          "pitch": 0.03513964757415167,
          "rotation": 5.497787143782138,
          "target": "14-thinktank"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-thinktank",
      "name": "ThinkTank",
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
        "yaw": -0.05669998189314818,
        "pitch": -0.019751532442967346,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.42754673592362913,
          "pitch": 0.08853771589052428,
          "rotation": 5.497787143782138,
          "target": "7-erschlieung-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-thinktank-und-besprecher",
      "name": "ThinkTank und Besprecher",
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
        "yaw": 0.6678555811202784,
        "pitch": 0.2863972204230265,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 1.1209515037835018,
          "pitch": 0.08573980288447913,
          "rotation": 0.7853981633974483,
          "target": "8-erschlieung-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-thinktank-und-besprecher-2",
      "name": "ThinkTank und Besprecher 2",
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
        "yaw": 1.538278840489034,
        "pitch": 0.44229085360951004,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 2.613566476731486,
          "pitch": 0.10893671587962572,
          "rotation": 0.7853981633974483,
          "target": "9-erschlieung-6"
        },
        {
          "yaw": 1.5807173536226777,
          "pitch": 0.7987715834376328,
          "rotation": 0.7853981633974483,
          "target": "20-meeting-explosion"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-lehrerzimmer-eg",
      "name": "Lehrerzimmer EG",
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
        "yaw": 1.5569597891167746,
        "pitch": -0.19343219970716596,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.7794937844138783,
          "pitch": 0.09995075742375548,
          "rotation": 0.7853981633974483,
          "target": "2-foyer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-meeting-research-2",
      "name": "Meeting (Research 2)",
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
        "yaw": 1.7202320597493301,
        "pitch": 0.3106821033983316,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.49652940221402275,
          "pitch": 0.12884634953945273,
          "rotation": 0.7853981633974483,
          "target": "5-erschlieung-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-meeting-zusammenfassung",
      "name": "Meeting (Zusammenfassung)",
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
        "yaw": 1.6295676179334873,
        "pitch": 0.2049221490957862,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.32265877136892485,
          "pitch": 0.09189258455722538,
          "rotation": 0.7853981633974483,
          "target": "4-erschlieung-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-meeting-explosion",
      "name": "Meeting (Explosion)",
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
        "yaw": 1.599291498256024,
        "pitch": 0.150605434877626,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.3130626301747697,
          "pitch": -0.5526607196741438,
          "rotation": 0.7853981633974483,
          "target": "16-thinktank-und-besprecher-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-arbeitsblatt",
      "name": "Arbeitsblatt",
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
        "yaw": 1.6517683563601722,
        "pitch": 0.9252211775542065,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.0347132102027725,
          "pitch": -0.06976226926027351,
          "rotation": 0,
          "target": "3-klassenverbund"
        },
        {
          "yaw": 1.3029881771999392,
          "pitch": 0.40326188157725085,
          "rotation": 3.141592653589793,
          "target": "3-klassenverbund"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Twisted Thoughts",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
