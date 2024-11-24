var APP_DATA = {
  "scenes": [
    {
      "id": "0-main-gate",
      "name": "Main Gate",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.122659198375281,
        "pitch": 0.02979385689329561,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.6044465297466193,
          "pitch": 0.2213900309176733,
          "rotation": 0,
          "target": "1-congressional-gate"
        },
        {
          "yaw": -2.6053710662536798,
          "pitch": 0.28696343707773053,
          "rotation": 11.780972450961727,
          "target": "2-intersection"
        },
        {
          "yaw": 0.34952832103798315,
          "pitch": 0.24898542845502547,
          "rotation": 5.497787143782138,
          "target": "35-annex-a-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-congressional-gate",
      "name": "Congressional Gate",
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
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": -3.08360032683907,
        "pitch": -0.25783523194224856,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.119522980581502,
          "pitch": 0.22787242328037927,
          "rotation": 0,
          "target": "0-main-gate"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-intersection",
      "name": "Intersection",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.9953560150901879,
        "pitch": -0.019615665646817604,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.7153291694136055,
          "pitch": 0.27962915975918357,
          "rotation": 0,
          "target": "3-covered-court-motor-parking"
        },
        {
          "yaw": -1.99809585240531,
          "pitch": 0.6389263651069861,
          "rotation": 0.7853981633974483,
          "target": "0-main-gate"
        },
        {
          "yaw": -0.02485315426269885,
          "pitch": 0.26779154879429967,
          "rotation": 0.7853981633974483,
          "target": "16-drawing-laboratory-garden"
        },
        {
          "yaw": 2.289578346882961,
          "pitch": 0.20398223985944242,
          "rotation": 7.853981633974483,
          "target": "11-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-covered-court-motor-parking",
      "name": "Covered Court (Motor Parking)",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.485738869168756,
        "pitch": 0.013387549314682445,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.592002068199676,
          "pitch": 0.37172508146943173,
          "rotation": 6.283185307179586,
          "target": "4-covered-court-"
        },
        {
          "yaw": -0.8099817476403715,
          "pitch": 0.2604417305996414,
          "rotation": 0.7853981633974483,
          "target": "11-stairs"
        },
        {
          "yaw": -1.617811381483321,
          "pitch": 0.3185315623493743,
          "rotation": 0,
          "target": "8-room-103-and-104-bs-hallway"
        },
        {
          "yaw": 0.14782766332998065,
          "pitch": 0.3932018510196098,
          "rotation": 0,
          "target": "2-intersection"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.0468471495138854,
          "pitch": 0.29664706890820014,
          "title": "Covered Court",
          "text": "It is&nbsp; used for basketball, volleyball, and other physical activities. It also serves as a venue for various events, such as kamustahan, parties, and academic events."
        }
      ]
    },
    {
      "id": "4-covered-court-",
      "name": "Covered Court ",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 1.8187202546506018,
        "pitch": -0.08320894514756105,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.8325465195585178,
          "pitch": 0.234369912546736,
          "rotation": 0,
          "target": "3-covered-court-motor-parking"
        },
        {
          "yaw": 1.638742668547092,
          "pitch": 0.5184107487885932,
          "rotation": 0,
          "target": "5-covered-court"
        },
        {
          "yaw": -2.4157860623329164,
          "pitch": 0.23116229854234938,
          "rotation": 0,
          "target": "9-room-105-106-107-and-clinics-hallway"
        },
        {
          "yaw": -1.2591991385733863,
          "pitch": 0.1949435352227109,
          "rotation": 0,
          "target": "11-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-covered-court",
      "name": "Covered Court",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 2.0284875642060047,
        "pitch": -0.09281143966245509,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5175378313055994,
          "pitch": 0.47714513765533795,
          "rotation": 0,
          "target": "4-covered-court-"
        },
        {
          "yaw": 1.7100243479419772,
          "pitch": 0.501569147425597,
          "rotation": 0,
          "target": "6-covered-court"
        },
        {
          "yaw": -0.35736648347249833,
          "pitch": 0.23621015654294908,
          "rotation": 0.7853981633974483,
          "target": "19-cafeterias-standing-tables"
        },
        {
          "yaw": 2.342650389935601,
          "pitch": 0.1507079094139101,
          "rotation": 0.7853981633974483,
          "target": "7-covered-court-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-covered-court",
      "name": "Covered Court",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 2.328652789832873,
        "pitch": -0.11418404241991809,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5312169832180533,
          "pitch": 0.45411802538745505,
          "rotation": 0,
          "target": "5-covered-court"
        },
        {
          "yaw": 2.531027954902557,
          "pitch": 0.2432025631140391,
          "rotation": 0.7853981633974483,
          "target": "7-covered-court-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-covered-court-restroom",
      "name": "Covered Court Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.4375239834989575,
        "pitch": -0.08183381779672416,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.2988298858608402,
          "pitch": 0.4207921525359879,
          "rotation": 0,
          "target": "10-room-105-106-107-and-clinics-hallway"
        },
        {
          "yaw": 0.7700645220186733,
          "pitch": 0.33919869023531746,
          "rotation": 5.497787143782138,
          "target": "6-covered-court"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5753191678375504,
          "pitch": -0.1966820256505848,
          "title": "School Clinic",
          "text": "<span style=\"color: oklab(0.89908 -0.00192907 -0.0048306); font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">This is where they provide basic healthcare services to students and staff.</span>"
        }
      ]
    },
    {
      "id": "8-room-103-and-104-bs-hallway",
      "name": "Room 103 and 104 B's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.35175097232501074,
        "pitch": -0.0942994439514937,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.119495424196053,
          "pitch": 0.38264826574398114,
          "rotation": 0,
          "target": "3-covered-court-motor-parking"
        },
        {
          "yaw": 0.009992290208996835,
          "pitch": 0.4397571077292657,
          "rotation": 0,
          "target": "9-room-105-106-107-and-clinics-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-room-105-106-107-and-clinics-hallway",
      "name": "Room 105, 106, 107, and Clinic's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 3.0387012609954827,
        "pitch": 0.09356780937798703,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.62471243398688,
          "pitch": 0.4060703159532828,
          "rotation": 0,
          "target": "8-room-103-and-104-bs-hallway"
        },
        {
          "yaw": 3.11278504902657,
          "pitch": 0.4805557212128395,
          "rotation": 0,
          "target": "10-room-105-106-107-and-clinics-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-room-105-106-107-and-clinics-hallway",
      "name": "Room 105, 106, 107, and Clinic's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.05725518982789,
        "pitch": -0.01748683341171109,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.03126962045013215,
          "pitch": 0.25244249811857244,
          "rotation": 0,
          "target": "9-room-105-106-107-and-clinics-hallway"
        },
        {
          "yaw": 3.1170204199661464,
          "pitch": 0.3610297172634418,
          "rotation": 0,
          "target": "7-covered-court-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.036249146002960586,
        "pitch": 0.17940182268086957,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.05171327339488663,
          "pitch": 0.4307240672430197,
          "rotation": 1.5707963267948966,
          "target": "8-room-103-and-104-bs-hallway"
        },
        {
          "yaw": -0.22081057959364436,
          "pitch": 0.41800414178739587,
          "rotation": 4.71238898038469,
          "target": "3-covered-court-motor-parking"
        },
        {
          "yaw": 0.2820658671298233,
          "pitch": 0.08650241393213065,
          "rotation": 0,
          "target": "12-office-of-the-student-affairs-and-room-204-206-bs-hallway-charging-station"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-office-of-the-student-affairs-and-room-204-206-bs-hallway-charging-station",
      "name": "Office of the Student Affairs and Room 204-206 B's Hallway (Charging Station)",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8228026362458625,
        "pitch": -0.00016774528594254434,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.125416037886752,
          "pitch": 0.27484492642915015,
          "rotation": 0,
          "target": "13-office-of-the-student-affairs-and-room-204-206-bs-hallway"
        },
        {
          "yaw": -1.656691390549792,
          "pitch": 0.412530284467568,
          "rotation": 0,
          "target": "11-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-office-of-the-student-affairs-and-room-204-206-bs-hallway",
      "name": "Office of the Student Affairs and Room 204-206 B's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.2381316970146283,
        "pitch": -0.0052460651290431315,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.07578650007424947,
          "pitch": 0.2239090923101248,
          "rotation": 0,
          "target": "12-office-of-the-student-affairs-and-room-204-206-bs-hallway-charging-station"
        },
        {
          "yaw": 1.659348982051485,
          "pitch": 0.26007610020552896,
          "rotation": 0,
          "target": "14-office-of-the-student-affairs-and-room-204-206-bs-restroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5161711702768077,
          "pitch": -0.5641836435344665,
          "title": "Office of the Student Affairs",
          "text": "<div>Takes charge of the campus life of the students, their welfare and discipline, and dormitory facilities.</div>"
        }
      ]
    },
    {
      "id": "14-office-of-the-student-affairs-and-room-204-206-bs-restroom",
      "name": "Office of the Student Affairs and Room 204-206 B's Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.1932564096739906,
        "pitch": 0.06721518308042818,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.1362810868484203,
          "pitch": 0.4946994594560188,
          "rotation": 0,
          "target": "15-nstp-office-and-guidance-and-counseling-room-fire-exit"
        },
        {
          "yaw": 0.04148745017180566,
          "pitch": 0.3838142129987361,
          "rotation": 0,
          "target": "13-office-of-the-student-affairs-and-room-204-206-bs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-nstp-office-and-guidance-and-counseling-room-fire-exit",
      "name": "NSTP Office and Guidance and Counseling Room (Fire Exit)",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.4759291521690727,
        "pitch": 0.036466456681640835,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.06824111667868138,
          "pitch": 0.47985270321479945,
          "rotation": 0,
          "target": "14-office-of-the-student-affairs-and-room-204-206-bs-restroom"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.549000366547933,
          "pitch": -0.4823808550034041,
          "title": "Guidance and Counseling Office",
          "text": "A dedicated space in a school where students can seek support and guidance from trained counselors. It provides a safe, confidential environment for discussing personal, academic, and social concerns, helping students navigate challenges, set goals, and promote emotional well-being.&nbsp;"
        },
        {
          "yaw": -0.45607106730855484,
          "pitch": -0.44529082835860123,
          "title": "NSTP Office",
          "text": "This is where the head of the NSTP tracks program participation, and provides information and support related to the program’s civic and community service initiatives."
        }
      ]
    },
    {
      "id": "16-drawing-laboratory-garden",
      "name": "Drawing Laboratory (Garden)",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.3635541450772948,
        "pitch": -0.20159586260014883,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.6339738188313992,
          "pitch": 0.3345480756399599,
          "rotation": 0,
          "target": "2-intersection"
        },
        {
          "yaw": -0.1372554647947748,
          "pitch": 0.34525929233138086,
          "rotation": 0,
          "target": "17-room-101-b-and-drawing-laboratorys-hallway"
        },
        {
          "yaw": -2.0080505473205044,
          "pitch": 0.23401635075686933,
          "rotation": 0.7853981633974483,
          "target": "24-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6385862414797927,
          "pitch": -0.41505638596399486,
          "title": "Drawing Laboratory",
          "text": "Where students practice drawing, whether it's for art, design, or technical purposes, specifically art related courses/strand. It is equipped with materials like drawing boards, sketch pads, and other tools to help students develop their drawing skills."
        }
      ]
    },
    {
      "id": "17-room-101-b-and-drawing-laboratorys-hallway",
      "name": "Room 101-B and Drawing Laboratory's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.30207621669132934,
        "pitch": -0.153508776108378,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.09024270959360692,
          "pitch": 0.3363568432188302,
          "rotation": 0,
          "target": "18-cafeterias-intersection"
        },
        {
          "yaw": -3.076319045330381,
          "pitch": 0.46026797776845285,
          "rotation": 0,
          "target": "16-drawing-laboratory-garden"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-cafeterias-intersection",
      "name": "Cafeteria's Intersection",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.5995511306980159,
        "pitch": -0.11028081228813846,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.604141925952848,
          "pitch": 0.4273786622149274,
          "rotation": 0,
          "target": "19-cafeterias-standing-tables"
        },
        {
          "yaw": -3.1215271306978742,
          "pitch": 0.3176208767853037,
          "rotation": 0,
          "target": "17-room-101-b-and-drawing-laboratorys-hallway"
        },
        {
          "yaw": 0.014378376807222537,
          "pitch": 0.3833210292968232,
          "rotation": 0,
          "target": "20-chroma-room-and-cafeterias-restroom"
        },
        {
          "yaw": 0.8658365545444351,
          "pitch": 0.31079304214825676,
          "rotation": 5.497787143782138,
          "target": "23-cafeterias-dining-tables"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-cafeterias-standing-tables",
      "name": "Cafeterias Standing Tables",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -1.901286249158721,
        "pitch": -0.022404090904501572,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.1588838452533814,
          "pitch": 0.18314854405467784,
          "rotation": 5.497787143782138,
          "target": "5-covered-court"
        },
        {
          "yaw": 0.31023230524838574,
          "pitch": 0.22684240459739158,
          "rotation": 14.137166941154074,
          "target": "3-covered-court-motor-parking"
        },
        {
          "yaw": -1.870669338660882,
          "pitch": 0.20447530548731763,
          "rotation": 0.7853981633974483,
          "target": "23-cafeterias-dining-tables"
        },
        {
          "yaw": -2.9673219180084285,
          "pitch": 0.3508024833492662,
          "rotation": 1.5707963267948966,
          "target": "20-chroma-room-and-cafeterias-restroom"
        },
        {
          "yaw": 2.9587222317625894,
          "pitch": 0.3391362145601633,
          "rotation": 4.71238898038469,
          "target": "17-room-101-b-and-drawing-laboratorys-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-chroma-room-and-cafeterias-restroom",
      "name": "Chroma Room and Cafeterias Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.1522432596321721,
        "pitch": -0.12255227679102987,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.138798370232056,
          "pitch": 0.3315398417760207,
          "rotation": 0,
          "target": "18-cafeterias-intersection"
        },
        {
          "yaw": -0.08332766982601036,
          "pitch": 0.3503657783039067,
          "rotation": 4.71238898038469,
          "target": "21-hugot-canteen"
        },
        {
          "yaw": 0.16919226845256752,
          "pitch": 0.5628521222193452,
          "rotation": 1.5707963267948966,
          "target": "23-cafeterias-dining-tables"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.3784650267962704,
          "pitch": -0.7066088672337116,
          "title": "Chroma Room",
          "text": "A specialized room equipped with a green screen for video production, photography, and digital media projects."
        }
      ]
    },
    {
      "id": "21-hugot-canteen",
      "name": "Hugot Canteen",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3977122061595946,
          "pitch": 0.32374041332304415,
          "rotation": 0,
          "target": "20-chroma-room-and-cafeterias-restroom"
        },
        {
          "yaw": -3.033571265938585,
          "pitch": 0.6156068798867125,
          "rotation": 0,
          "target": "22-hugot-canteens-tables"
        },
        {
          "yaw": 0.8488318437362761,
          "pitch": 0.3038733170898311,
          "rotation": 0.7853981633974483,
          "target": "23-cafeterias-dining-tables"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-hugot-canteens-tables",
      "name": "Hugot Canteen's Tables",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -1.6744491800944985,
        "pitch": 0.14568824937326497,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.08947928764262691,
          "pitch": 0.5769104232054243,
          "rotation": 0,
          "target": "21-hugot-canteen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cafeterias-dining-tables",
      "name": "Cafeteria's Dining Tables",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7785262454080843,
          "pitch": 0.23884141356342958,
          "rotation": 5.497787143782138,
          "target": "21-hugot-canteen"
        },
        {
          "yaw": -0.020157996494859276,
          "pitch": 0.219333793667138,
          "rotation": 0,
          "target": "19-cafeterias-standing-tables"
        },
        {
          "yaw": 0.38049294485121266,
          "pitch": 0.1903080754417008,
          "rotation": 0.7853981633974483,
          "target": "18-cafeterias-intersection"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-stairs",
      "name": "Stairs",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.8447626406710285,
        "pitch": 0.2029436960766109,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.7556773232349343,
          "pitch": 0.7494311804251197,
          "rotation": 5.497787143782138,
          "target": "16-drawing-laboratory-garden"
        },
        {
          "yaw": 2.9603671521578097,
          "pitch": 0.11456427464248975,
          "rotation": 0,
          "target": "25-room-201-203-bs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-room-201-203-bs-hallway",
      "name": "Room 201-203 B's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.02749939316941763,
          "pitch": 0.26892496606670235,
          "rotation": 0,
          "target": "26-room-201-203-bs-hallway"
        },
        {
          "yaw": -1.8489827525651634,
          "pitch": 0.1486445477059668,
          "rotation": 0.7853981633974483,
          "target": "29-stairs"
        },
        {
          "yaw": -1.3632559687008108,
          "pitch": 0.6083079507508735,
          "rotation": 3.9269908169872414,
          "target": "24-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-room-201-203-bs-hallway",
      "name": "Room 201-203 B's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.900580265024397,
        "pitch": -0.03811448048638155,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.048813926014279474,
          "pitch": 0.2351069708371707,
          "rotation": 0,
          "target": "25-room-201-203-bs-hallway"
        },
        {
          "yaw": -3.1091896672221218,
          "pitch": 0.2425605465335554,
          "rotation": 0,
          "target": "27-room-201-203-bs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-room-201-203-bs-hallway",
      "name": "Room 201-203 B's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.7349156141537136,
        "pitch": 0.041459607629104056,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.06841076511495814,
          "pitch": 0.33183472985711226,
          "rotation": 0,
          "target": "26-room-201-203-bs-hallway"
        },
        {
          "yaw": -3.0841813149850648,
          "pitch": 0.4237723697429363,
          "rotation": 0,
          "target": "28-room-201-203-bs-restroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-room-201-203-bs-restroom",
      "name": "Room 201-203 B's Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04531318609216228,
          "pitch": 0.3195327240227428,
          "rotation": 0,
          "target": "27-room-201-203-bs-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0300021453061756,
        "pitch": 0.2488869841204675,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.6875496399883865,
          "pitch": 0.6719683363760076,
          "rotation": 5.497787143782138,
          "target": "25-room-201-203-bs-hallway"
        },
        {
          "yaw": 3.0375439624279714,
          "pitch": 0.07826752184491781,
          "rotation": 0,
          "target": "30-3rd-floor-annex-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-3rd-floor-annex-b",
      "name": "3rd Floor Annex-B",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8496938208966114,
        "pitch": 0.1641398644725225,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.095787193211425,
          "pitch": 0.3114841145975369,
          "rotation": 0,
          "target": "31-avr-1-3s-hallway"
        },
        {
          "yaw": 1.940117343570881,
          "pitch": 0.6766958511120933,
          "rotation": 5.497787143782138,
          "target": "29-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-avr-1-3s-hallway",
      "name": "Avr 1-3's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9643078579178024,
        "pitch": 0.03917584319085066,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.043787533491617125,
          "pitch": 0.3322040054549191,
          "rotation": 0,
          "target": "30-3rd-floor-annex-b"
        },
        {
          "yaw": -3.0946824685477523,
          "pitch": 0.34552247375390976,
          "rotation": 0,
          "target": "32-avr-1-3s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2469828734932591,
          "pitch": -0.24934499999940662,
          "title": "Audio-Visual Room 1",
          "text": "<div>Used for classes, seminars, and events like kamustahan, equipped with audio-visual tools for presentations.</div>"
        }
      ]
    },
    {
      "id": "32-avr-1-3s-hallway",
      "name": "Avr 1-3's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0509182410056273,
        "pitch": 0.11998235330888463,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.01793325278740454,
          "pitch": 0.35483351131897933,
          "rotation": 0,
          "target": "31-avr-1-3s-hallway"
        },
        {
          "yaw": 3.083699709885238,
          "pitch": 0.3496780317418242,
          "rotation": 0,
          "target": "33-avr-1-3s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.19434309216094192,
          "pitch": -0.2473220162813341,
          "title": "Audio-Visual Room 2",
          "text": "<div>Used for classes, seminars, and events like kamustahan, equipped with audio-visual tools for presentations.</div>"
        }
      ]
    },
    {
      "id": "33-avr-1-3s-hallway",
      "name": "Avr 1-3's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0495424655724594,
        "pitch": 0.2323106253177869,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.029839633918118835,
          "pitch": 0.3465944728334289,
          "rotation": 0,
          "target": "32-avr-1-3s-hallway"
        },
        {
          "yaw": -3.101698435951448,
          "pitch": 0.3925336556597685,
          "rotation": 0,
          "target": "34-avr-1-3s-restroom-fire-exit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2407805354282413,
          "pitch": -0.27177849783419994,
          "title": "Audio-Visual Room 3",
          "text": "Used for classes, seminars, and events like kamustahan, equipped with audio-visual tools for presentations."
        }
      ]
    },
    {
      "id": "34-avr-1-3s-restroom-fire-exit",
      "name": "Avr 1-3's Restroom (Fire Exit)",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.9922168254524433,
        "pitch": -0.11413778588772594,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.1412465868268704,
          "pitch": 0.3263173608076606,
          "rotation": 0,
          "target": "33-avr-1-3s-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-annex-a-building",
      "name": "Annex-A Building",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.27051441904241,
        "pitch": -0.050094184931339214,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.5236611027761775,
          "pitch": 0.3047489152481546,
          "rotation": 0,
          "target": "0-main-gate"
        },
        {
          "yaw": 1.5770612491535863,
          "pitch": 0.2747960111805803,
          "rotation": 0,
          "target": "36-waiting-shedarea"
        },
        {
          "yaw": 0.0018579666549989327,
          "pitch": 0.36103010702250415,
          "rotation": 0,
          "target": "41-hotel-and-engineering-laboratories-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-waiting-shedarea",
      "name": "Waiting Shed/Area",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -3.0809291741626463,
        "pitch": -0.08295477509731164,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.080883112850822,
          "pitch": 0.3694732373461669,
          "rotation": 0,
          "target": "37-waiting-shedarea"
        },
        {
          "yaw": -1.5641997682483186,
          "pitch": 0.264986850210839,
          "rotation": 0.7853981633974483,
          "target": "38-main-building"
        },
        {
          "yaw": 1.5239105245528366,
          "pitch": 0.2152896345823727,
          "rotation": 0,
          "target": "35-annex-a-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-waiting-shedarea",
      "name": "Waiting Shed/Area",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -3.0876941631444517,
        "pitch": -0.12773906299687354,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.07112299899467622,
          "pitch": 0.3769226272290087,
          "rotation": 0,
          "target": "36-waiting-shedarea"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1322984615705076,
          "pitch": -0.3904674884769346,
          "title": "Waiting Area/Shed",
          "text": "This is&nbsp; where students and visitors can stay while waiting, such as before school starts or for the gate to open. It provides a place for people to wait comfortably, offering protection from the weather."
        }
      ]
    },
    {
      "id": "38-main-building",
      "name": "Main Building",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 1.931620104643093,
        "pitch": -0.09607295596183718,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.5082583935720493,
          "pitch": 0.1286685187695369,
          "rotation": 5.497787143782138,
          "target": "36-waiting-shedarea"
        },
        {
          "yaw": 3.116748584351214,
          "pitch": 0.25059618218433144,
          "rotation": 0,
          "target": "39-edsa-gate-tunnel"
        },
        {
          "yaw": 1.6670958301757741,
          "pitch": 0.35432964243408094,
          "rotation": 6.283185307179586,
          "target": "54-main-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-edsa-gate-tunnel",
      "name": "EDSA Gate Tunnel",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 2.7794170902573896,
        "pitch": 0.013658958293135015,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.1377848281829355,
          "pitch": 0.283297777958488,
          "rotation": 0,
          "target": "40-edsa-gate"
        },
        {
          "yaw": 0.11523946497101889,
          "pitch": 0.42455991659678816,
          "rotation": 0,
          "target": "38-main-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-edsa-gate",
      "name": "EDSA Gate",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -3.039674760836716,
        "pitch": -0.32645795937642674,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.093563065818133,
          "pitch": 0.1988433765136577,
          "rotation": 0,
          "target": "39-edsa-gate-tunnel"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-hotel-and-engineering-laboratories-hallway",
      "name": "Hotel and Engineering Laboratories' Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.9430035362962652,
        "pitch": 0.004819454324756833,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.090823207047624,
          "pitch": 0.4719199582725224,
          "rotation": 0,
          "target": "35-annex-a-building"
        },
        {
          "yaw": 0.017060573877293095,
          "pitch": 0.300709992514518,
          "rotation": 0,
          "target": "42-hotel-and-engineering-laboratories-hallway"
        },
        {
          "yaw": 1.6008045690565664,
          "pitch": -0.03482288748755202,
          "rotation": 0.7853981633974483,
          "target": "44-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.132195912854371,
          "pitch": -0.8127820528840921,
          "title": "Hotel Laboratory",
          "text": "Occasionally utilized during research defenses and Hospitality Management students' laboratory activities."
        },
        {
          "yaw": 0.48246304364378645,
          "pitch": -0.48699929057430325,
          "title": "Engineering Laboratory",
          "text": "This is where laboratory activities related to engineering takes place and where&nbsp;Computer and Communications Technology&nbsp; (CCTEC) and engineering students attend their laboratory classes."
        }
      ]
    },
    {
      "id": "42-hotel-and-engineering-laboratories-hallway",
      "name": "Hotel and Engineering Laboratories' Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.02348644595037719,
        "pitch": 0.0060238715587317415,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.053020227523003,
          "pitch": 0.46033194052634485,
          "rotation": 0,
          "target": "41-hotel-and-engineering-laboratories-hallway"
        },
        {
          "yaw": 0.04760291450834586,
          "pitch": 0.34068122077137986,
          "rotation": 0,
          "target": "43-hotel-and-engineering-laboratories-restroom-fire-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-hotel-and-engineering-laboratories-restroom-fire-exit",
      "name": "Hotel and Engineering Laboratories' Restroom (Fire Exit)",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.6444846276268699,
        "pitch": -0.04080287227531798,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.1203198161165417,
          "pitch": 0.3746378310361216,
          "rotation": 0,
          "target": "42-hotel-and-engineering-laboratories-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.9867470094981474,
        "pitch": 0.3150639890545719,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.733309998347302,
          "pitch": 0.758634905344687,
          "rotation": 5.497787143782138,
          "target": "41-hotel-and-engineering-laboratories-hallway"
        },
        {
          "yaw": 2.931546562398874,
          "pitch": 0.04718410813525864,
          "rotation": 0.7853981633974483,
          "target": "45-science-laboratory-faculty-and-defense-rooms-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-science-laboratory-faculty-and-defense-rooms-hallway",
      "name": "Science Laboratory, Faculty, and Defense Room's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.5744293577909332,
        "pitch": 0.04808708649177973,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.03374349075152949,
          "pitch": 0.31771558550428125,
          "rotation": 0,
          "target": "46-science-laboratory-faculty-and-defense-rooms-hallway"
        },
        {
          "yaw": 1.1613789686326257,
          "pitch": 0.0985839932734347,
          "rotation": 0.7853981633974483,
          "target": "48-stairs"
        },
        {
          "yaw": 1.7039642963353252,
          "pitch": 0.6197817930358767,
          "rotation": 11.780972450961727,
          "target": "44-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1620948544991876,
          "pitch": -0.18347080725053821,
          "title": "Faculty",
          "text": "This is where the coaches or professors and other faculty members can be located."
        },
        {
          "yaw": 0.2643864280181685,
          "pitch": -0.31579467657764226,
          "title": "Science Laboratory",
          "text": "The science room is where experiments are conducted and dissections take place."
        }
      ]
    },
    {
      "id": "46-science-laboratory-faculty-and-defense-rooms-hallway",
      "name": "Science Laboratory, Faculty, and Defense Room's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.08961800431811007,
        "pitch": 0.027303973415380156,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.03166051919135171,
          "pitch": 0.3044326359647531,
          "rotation": 0,
          "target": "47-science-laboratory-faculty-and-defense-rooms-restroom-fire-exit"
        },
        {
          "yaw": -3.1407247208103186,
          "pitch": 0.33726451397747503,
          "rotation": 0,
          "target": "45-science-laboratory-faculty-and-defense-rooms-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-science-laboratory-faculty-and-defense-rooms-restroom-fire-exit",
      "name": "Science Laboratory, Faculty, and Defense Room's Restroom (Fire Exit)",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.5973623195341116,
        "pitch": 0.033470089551830284,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.5794388625003712,
          "pitch": 0.2794192531086708,
          "rotation": 0,
          "target": "46-science-laboratory-faculty-and-defense-rooms-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0631234422635423,
          "pitch": -0.4992922591752045,
          "title": "Research Office / Defense Room",
          "text": "The defense room is where students research defenses take place."
        }
      ]
    },
    {
      "id": "48-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.0657854871905581,
        "pitch": 0.30516804889014537,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.4669144608686686,
          "pitch": 0.6339588915504137,
          "rotation": 5.497787143782138,
          "target": "45-science-laboratory-faculty-and-defense-rooms-hallway"
        },
        {
          "yaw": -0.1474374976206203,
          "pitch": 0.037667966571238054,
          "rotation": 0.7853981633974483,
          "target": "49-kitchen-laboratorys-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-kitchen-laboratorys-hallway",
      "name": "Kitchen Laboratory's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.7948277000609885,
        "pitch": -0.23221866552512438,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.3429831294813752,
          "pitch": 0.58222966181647,
          "rotation": 5.497787143782138,
          "target": "48-stairs"
        },
        {
          "yaw": 3.0750741702853297,
          "pitch": 0.3221955863076076,
          "rotation": 0,
          "target": "50-kitchen-and-dining-laboratories-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9360800054043494,
          "pitch": -0.6053225686858177,
          "title": "Title",
          "text": "Where Culinary Arts or Culinary Management students work, and where cooking laboratory activities take place."
        }
      ]
    },
    {
      "id": "50-kitchen-and-dining-laboratories-hallway",
      "name": "Kitchen and Dining Laboratories' Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.5134501173552817,
        "pitch": 0.14273813908871702,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.03155922218460283,
          "pitch": 0.4385877884537983,
          "rotation": 0,
          "target": "49-kitchen-laboratorys-hallway"
        },
        {
          "yaw": -3.10185053935966,
          "pitch": 0.30402835146072604,
          "rotation": 0,
          "target": "51-kitchen-and-dining-laboratories-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.442756196577351,
          "pitch": -0.4591052257306032,
          "title": "Dining Laboratory",
          "text": "This serves as the laboratory for Restaurant and Café Operations (RESCO) and Hotel Management students, where they perform different laboratory activities related to their course/strand."
        }
      ]
    },
    {
      "id": "51-kitchen-and-dining-laboratories-hallway",
      "name": "Kitchen and Dining Laboratories' Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.628124818100625,
        "pitch": 0.08212757092202772,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.1300674587897745,
          "pitch": 0.32376428222840303,
          "rotation": 0.7853981633974483,
          "target": "52-kitchen-and-dining-laboratories-fire-exit-restroom"
        },
        {
          "yaw": -0.0007330133676131112,
          "pitch": 0.45450528341802965,
          "rotation": 0,
          "target": "50-kitchen-and-dining-laboratories-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-kitchen-and-dining-laboratories-fire-exit-restroom",
      "name": "Kitchen and Dining Laboratories' Fire Exit (Restroom)",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.3029388285329393,
        "pitch": 0.04991924179159213,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.9960164739166082,
          "pitch": 0.5754084195788032,
          "rotation": 5.497787143782138,
          "target": "53-kitchen-and-dining-laboratories-restroom"
        },
        {
          "yaw": -0.0019574227658480936,
          "pitch": 0.47417981821989663,
          "rotation": 0,
          "target": "51-kitchen-and-dining-laboratories-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-kitchen-and-dining-laboratories-restroom",
      "name": "Kitchen and Dining Laboratories' Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.194827055739294,
        "pitch": -0.11792618507586639,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "54-main-building",
      "name": "Main Building",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 2.2158020613031004,
        "pitch": -0.04678915464455713,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.6639395295607269,
          "pitch": 0.3100747761215281,
          "rotation": 10.995574287564278,
          "target": "39-edsa-gate-tunnel"
        },
        {
          "yaw": 0.48221660632199814,
          "pitch": 0.42867075880283423,
          "rotation": 1.5707963267948966,
          "target": "36-waiting-shedarea"
        },
        {
          "yaw": -0.15528256622607906,
          "pitch": 0.6699324824543815,
          "rotation": 0,
          "target": "38-main-building"
        },
        {
          "yaw": 3.1062079740272903,
          "pitch": 0.10264129431123337,
          "rotation": 0.7853981633974483,
          "target": "55-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.11228466746281285,
        "pitch": 0.3162650688497699,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.6101509984950635,
          "pitch": 0.7144213544745099,
          "rotation": 5.497787143782138,
          "target": "54-main-building"
        },
        {
          "yaw": -0.47874438120494567,
          "pitch": 0.056764241028629314,
          "rotation": 0.7853981633974483,
          "target": "56-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-stairs",
      "name": "Stairs",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -3.0382412379499097,
        "pitch": 0.14288065382848103,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.6068614449937257,
          "pitch": 0.6236182158821251,
          "rotation": 5.497787143782138,
          "target": "55-stairs"
        },
        {
          "yaw": 2.928874766074043,
          "pitch": 0.10123810288411761,
          "rotation": 0.7853981633974483,
          "target": "57-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.09397926741507945,
        "pitch": 0.17755231935425542,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.37995116773420357,
          "pitch": 0.624199144448351,
          "rotation": 5.497787143782138,
          "target": "56-stairs"
        },
        {
          "yaw": -0.45447494271143185,
          "pitch": 0.13013793187149325,
          "rotation": 0,
          "target": "58-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-stairs",
      "name": "Stairs",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.5794763681345554,
        "pitch": 0.3115930659721933,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.9300782641913976,
          "pitch": 0.6538940588062871,
          "rotation": 4.71238898038469,
          "target": "57-stairs"
        },
        {
          "yaw": -1.6217610097494202,
          "pitch": 0.5804063466399221,
          "rotation": 0,
          "target": "59-main-building-2nd-floor"
        },
        {
          "yaw": 2.7602224700404117,
          "pitch": 0.029189355201525657,
          "rotation": 0.7853981633974483,
          "target": "73-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-main-building-2nd-floor",
      "name": "Main Building 2nd Floor",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.0268736839722195,
        "pitch": 0.10592609961474864,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4611858617131785,
          "pitch": 0.5849733931100793,
          "rotation": 0,
          "target": "60-computer-laboratory-4"
        },
        {
          "yaw": -3.1098578517629036,
          "pitch": 0.6403779750950047,
          "rotation": 12.566370614359176,
          "target": "66-admissions-office"
        },
        {
          "yaw": -1.5700994842735518,
          "pitch": 0.754400325345074,
          "rotation": 0,
          "target": "58-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-computer-laboratory-4",
      "name": "Computer Laboratory 4",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 1.3341547661979067,
        "pitch": 0.048658973486929824,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.7498834893061517,
          "pitch": 0.44577437010593357,
          "rotation": 0,
          "target": "58-stairs"
        },
        {
          "yaw": 1.3976285495174192,
          "pitch": 0.5377074368503099,
          "rotation": 0,
          "target": "61-computer-laboratory-4-and-cashiers-hallway"
        },
        {
          "yaw": -1.952735246838401,
          "pitch": 0.5008966592449404,
          "rotation": 4.71238898038469,
          "target": "66-admissions-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.12359495985090696,
          "pitch": -0.8228999462000797,
          "title": "Computer Laboratory 4",
          "text": "A dedicated space equipped with computers and technology for students especially for technology related courses/strands."
        }
      ]
    },
    {
      "id": "61-computer-laboratory-4-and-cashiers-hallway",
      "name": "Computer Laboratory 4 and Cashier's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.4399530413692734,
        "pitch": 0.3342622863589213,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.4598145638645619,
          "pitch": 0.43675340621633296,
          "rotation": 5.497787143782138,
          "target": "62-cashier"
        },
        {
          "yaw": 3.013982483906574,
          "pitch": 0.3145766555704661,
          "rotation": 0,
          "target": "63-computer-laboratory-4s-hallway"
        },
        {
          "yaw": 1.44480943309987,
          "pitch": 0.6086486462119165,
          "rotation": 0,
          "target": "60-computer-laboratory-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-cashier",
      "name": "Cashier",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.059089657049790745,
        "pitch": 0.005548509979821148,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.6434467161142692,
          "pitch": 0.43846544105440266,
          "rotation": 5.497787143782138,
          "target": "61-computer-laboratory-4-and-cashiers-hallway"
        },
        {
          "yaw": -1.2276102971370761,
          "pitch": 0.3413005271386069,
          "rotation": 7.853981633974483,
          "target": "63-computer-laboratory-4s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.005981227356439689,
          "pitch": -0.42660912240901716,
          "title": "Cashier",
          "text": "The office responsible for processing payments, handling fees, and managing financial transactions for students and staff."
        }
      ]
    },
    {
      "id": "63-computer-laboratory-4s-hallway",
      "name": "Computer Laboratory 4's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 1.337895290753675,
        "pitch": 0.11004950226215016,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.6320346863224042,
          "pitch": 0.4258786071962515,
          "rotation": 0,
          "target": "61-computer-laboratory-4-and-cashiers-hallway"
        },
        {
          "yaw": 1.228378222166354,
          "pitch": 0.3689799220901051,
          "rotation": 0,
          "target": "64-registrar-and-prowares"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-registrar-and-prowares",
      "name": "Registrar and Prowares",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.5262838975244506,
        "pitch": 0.0887761596771206,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.676167812665293,
          "pitch": 0.893422052907928,
          "rotation": 5.497787143782138,
          "target": "65-main-building-2nd-floors-restroom"
        },
        {
          "yaw": 1.5264206305937007,
          "pitch": 0.3916720109040899,
          "rotation": 0.7853981633974483,
          "target": "63-computer-laboratory-4s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7277403552328074,
          "pitch": -0.329563875338879,
          "title": "Prowares",
          "text": "The official retailer of STI uniforms, offering a range of high-quality, school-approved attire for students of STI education services."
        },
        {
          "yaw": 0.20346649715830623,
          "pitch": -0.3008247695745041,
          "title": "Registrar",
          "text": "<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">The office responsible for maintaining student records</span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">, managing course registrations</span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">, issuing transcripts</span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">, and overseeing academic policies and procedures</span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">.</span>"
        }
      ]
    },
    {
      "id": "65-main-building-2nd-floors-restroom",
      "name": "Main Building 2nd Floor's Restroom",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6239375975256891,
        "pitch": -0.03652878998284592,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 2.9702546115917636,
          "pitch": 0.5640920636070774,
          "rotation": 1.5707963267948966,
          "target": "64-registrar-and-prowares"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-admissions-office",
      "name": "Admissions Office",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.10471975511965503,
        "pitch": -0.07952864304409246,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.450125613155926,
          "pitch": 0.6454649541642592,
          "rotation": 0,
          "target": "68-studios-hallway"
        },
        {
          "yaw": -1.8030486512914123,
          "pitch": 0.4912159500554054,
          "rotation": 4.71238898038469,
          "target": "58-stairs"
        },
        {
          "yaw": -1.3991124924025105,
          "pitch": 0.47608507825012225,
          "rotation": 7.853981633974483,
          "target": "60-computer-laboratory-4"
        },
        {
          "yaw": 0.5968026643130102,
          "pitch": 0.9786971116540659,
          "rotation": 5.497787143782138,
          "target": "67-admissions-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.044216595717408325,
          "pitch": -0.7693287124591048,
          "title": "Admissions Office",
          "text": "The department responsible for handling student applications, enrollment processes, and providing information about academic programs."
        }
      ]
    },
    {
      "id": "67-admissions-office",
      "name": "Admissions Office",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.09391712662034557,
        "pitch": -0.08695777657937143,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.007569640765939,
          "pitch": 0.7244472887181832,
          "rotation": 0,
          "target": "66-admissions-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-studios-hallway",
      "name": "Studio's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.6614104174150892,
        "pitch": -0.11383115361146068,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.04096305579745696,
          "pitch": 0.6492706935758861,
          "rotation": 0,
          "target": "69-computer-laboratory-1s-hallway"
        },
        {
          "yaw": -1.663215571712298,
          "pitch": 0.5303087733036396,
          "rotation": 0,
          "target": "66-admissions-office"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-computer-laboratory-1s-hallway",
      "name": "Computer Laboratory 1's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.6504649615657545,
        "pitch": -0.12122653622578383,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.2645655659135162,
          "pitch": 0.7815692062914827,
          "rotation": 0.7853981633974483,
          "target": "68-studios-hallway"
        },
        {
          "yaw": -1.899697693095364,
          "pitch": 0.3960535719687144,
          "rotation": 0.7853981633974483,
          "target": "70-computer-laboratory-2s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.115317552336517,
          "pitch": -0.6169555570620204,
          "title": "Computer Laboratory 1",
          "text": "A dedicated space equipped with computers and technology for students especially for technology related courses/strands."
        }
      ]
    },
    {
      "id": "70-computer-laboratory-2s-hallway",
      "name": "Computer Laboratory 2's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -2.539100878832981,
        "pitch": -0.3854842249519166,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.7270283960132247,
          "pitch": 0.3142126432121497,
          "rotation": 0,
          "target": "71-computer-laboratory-3-and-management-information-systems-mis-offices-hallway"
        },
        {
          "yaw": 1.4931040556442028,
          "pitch": 0.5118647263233029,
          "rotation": 0,
          "target": "69-computer-laboratory-1s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.942974322988972,
          "pitch": -0.8920188113616696,
          "title": "Computer Laboratory 2",
          "text": "A dedicated space equipped with computers and technology for students especially for technology related courses/strands."
        }
      ]
    },
    {
      "id": "71-computer-laboratory-3-and-management-information-systems-mis-offices-hallway",
      "name": "Computer Laboratory 3 and Management Information Systems (MIS) Office's Hallway",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 1.3639956432760965,
        "pitch": 0.026084374502829633,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4445887276298874,
          "pitch": 0.3878460769793879,
          "rotation": 0,
          "target": "72-computer-laboratories-restroom"
        },
        {
          "yaw": -1.7049226775278363,
          "pitch": 0.487657587938914,
          "rotation": 0,
          "target": "70-computer-laboratory-2s-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9495305956536839,
          "pitch": -0.566658518292126,
          "title": "Computer Laboratory 3",
          "text": "A dedicated space equipped with computers and technology for students especially for technology related courses/strands."
        },
        {
          "yaw": -2.8445738124033006,
          "pitch": -0.610505775076664,
          "title": "<span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">Management Information System </span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">(MIS</span><span style=\"margin: 0px; padding: 0px; border: 0px; font-family: &quot;gg sans&quot;, &quot;Noto Sans&quot;, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; vertical-align: baseline; outline: 0px; color: oklab(0.89908 -0.00192907 -0.0048306); white-space-collapse: break-spaces; background-color: oklab(0.0846607 0.00000385568 0.00000169128 / 0.06);\">)</span>",
          "text": "The department responsible for managing computer-related tasks, maintaining the STI accounts, and ensuring the smooth operation of technological systems within the institution."
        }
      ]
    },
    {
      "id": "72-computer-laboratories-restroom",
      "name": "Computer Laboratories' Restroom",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.3768332010608031,
        "pitch": 0.01626398840146237,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.5172461904566,
          "pitch": 0.31878139045560516,
          "rotation": 0,
          "target": "71-computer-laboratory-3-and-management-information-systems-mis-offices-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-stairs",
      "name": "Stairs",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0180364051777815,
        "pitch": 0.2412658986228493,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -2.7466290872897545,
          "pitch": 0.7002556625752092,
          "rotation": 5.497787143782138,
          "target": "58-stairs"
        },
        {
          "yaw": 2.798103655882418,
          "pitch": 0.10738580197225289,
          "rotation": 0,
          "target": "74-main-building-3rd-floor-charging-station-and-room-301-ms-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-main-building-3rd-floor-charging-station-and-room-301-ms-hallway",
      "name": "Main Building 3rd Floor (Charging Station and Room 301-M's Hallway)",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.8876543472569356,
        "pitch": 0.10269622409563794,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.0962937441608887,
          "pitch": 0.7642019856664515,
          "rotation": 5.497787143782138,
          "target": "73-stairs"
        },
        {
          "yaw": -1.470139935759338,
          "pitch": 0.5441590011194926,
          "rotation": 12.566370614359176,
          "target": "75-room-302-ms-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-room-302-ms-hallway",
      "name": "Room 302-M's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.4149659114287694,
        "pitch": 0.19739670146760346,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.4741591801042162,
          "pitch": 0.4620900321775956,
          "rotation": 0,
          "target": "74-main-building-3rd-floor-charging-station-and-room-301-ms-hallway"
        },
        {
          "yaw": -1.5370838813360432,
          "pitch": 0.572498650244956,
          "rotation": 0,
          "target": "76-main-building-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-main-building-3rd-floor-hallway",
      "name": "Main Building 3rd Floor Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07630335849372827,
          "pitch": 0.5935135484589367,
          "rotation": 0,
          "target": "77-main-building-3rd-floor-restroom-fire-exit"
        },
        {
          "yaw": -1.6392800219493644,
          "pitch": 0.6038921389772689,
          "rotation": 0,
          "target": "75-room-302-ms-hallway"
        },
        {
          "yaw": 3.085778381701415,
          "pitch": 0.5913564359440215,
          "rotation": 0,
          "target": "78-room-303-m-and-librarys-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "77-main-building-3rd-floor-restroom-fire-exit",
      "name": "Main Building 3rd Floor Restroom (Fire Exit)",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.7300778432034924,
        "pitch": -0.04764032172601418,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.009605144237332,
          "pitch": 0.5368723071032715,
          "rotation": 0,
          "target": "76-main-building-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "78-room-303-m-and-librarys-hallway",
      "name": "Room 303-M and Library's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.8551243859026698,
        "pitch": 0.07609589093923574,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.3458703703669705,
          "pitch": 0.22952727937569506,
          "rotation": 0,
          "target": "79-room-304-ms-hallway"
        },
        {
          "yaw": 1.0467952782818486,
          "pitch": 0.764123033034819,
          "rotation": 5.497787143782138,
          "target": "81-library"
        },
        {
          "yaw": -1.7498195605710798,
          "pitch": 0.6767654057928052,
          "rotation": 0,
          "target": "76-main-building-3rd-floor-hallway"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8247796193445254,
          "pitch": -0.5273950295594023,
          "title": "Library",
          "text": "&nbsp;A space offering books, research materials, and digital resources to support academic studies."
        }
      ]
    },
    {
      "id": "79-room-304-ms-hallway",
      "name": "Room 304-M's Hallway",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.497572034689524,
        "pitch": -0.11956305466816985,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 1.6020993479659609,
          "pitch": 0.40169358360994956,
          "rotation": 0,
          "target": "80-main-building-3rd-floors-fire-exit"
        },
        {
          "yaw": -1.5999060242880816,
          "pitch": 0.4027606859031323,
          "rotation": 0,
          "target": "78-room-303-m-and-librarys-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "80-main-building-3rd-floors-fire-exit",
      "name": "Main Building 3rd Floor's Fire Exit",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8056772361069324,
        "pitch": 0.01370808347954977,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.006139219180901989,
          "pitch": 0.40739215121509176,
          "rotation": 0,
          "target": "79-room-304-ms-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "81-library",
      "name": "Library",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 1.592820678114677,
        "pitch": 0.012946523286252898,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.048708384127969,
          "pitch": 0.36004466069042174,
          "rotation": 0,
          "target": "82-library"
        },
        {
          "yaw": 0.04395179792840409,
          "pitch": 0.37944591706191844,
          "rotation": 0,
          "target": "84-quiet-room--library"
        },
        {
          "yaw": -1.3104890244036973,
          "pitch": 0.48664710598563055,
          "rotation": 0,
          "target": "78-room-303-m-and-librarys-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "82-library",
      "name": "Library",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -3.1413616784928866,
        "pitch": 0.15948666951724277,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.0876067715155386,
          "pitch": 0.3729086343424832,
          "rotation": 0,
          "target": "83-cozy-room"
        },
        {
          "yaw": -0.09874808544249447,
          "pitch": 0.5248916242915094,
          "rotation": 0,
          "target": "81-library"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.1282893117187136,
          "pitch": -0.3065207590170118,
          "title": "Cozy Room",
          "text": "A relaxation space where students unwind, featuring a Play Station 4 for entertainment."
        }
      ]
    },
    {
      "id": "83-cozy-room",
      "name": "Cozy Room",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.8516427835403597,
        "pitch": -0.018647962284209285,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -1.6828500533756312,
          "pitch": 0.4739948074370659,
          "rotation": 0,
          "target": "82-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "84-quiet-room--library",
      "name": "Quiet Room / Library",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": -0.015959232468787832,
        "pitch": 0.1422030519817703,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -0.018343302888563784,
          "pitch": 0.5655339976112401,
          "rotation": 0,
          "target": "85-gaming-room"
        },
        {
          "yaw": 3.109705307618519,
          "pitch": 0.4577064740597656,
          "rotation": 0,
          "target": "81-library"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "85-gaming-room",
      "name": "Gaming Room",
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
        }
      ],
      "faceSize": 1022,
      "initialViewParameters": {
        "yaw": 0.013425609630724367,
        "pitch": -0.30311933206120933,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 3.109092700344595,
          "pitch": 0.5300983372158825,
          "rotation": 0,
          "target": "84-quiet-room--library"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.028275782643808256,
          "pitch": -0.908957004849615,
          "title": "Gaming Room",
          "text": "A space equipped with high-end PCs for gaming."
        }
      ]
    }
  ],
  "name": "STI College Munoz-EDSA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
