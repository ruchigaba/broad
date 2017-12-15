export const Stats: any[] = [
  {age: "6 weeks", population: 6},
  {age: "9 weeks", population: 9},
  {age: "3 weeks", population: 3},
];
export const Stats1: any[] = [
  {age: "15 weeks", population: 15},
  {age: "7 weeks", population: 7},
  {age: "4 weeks", population: 4},
];
export const Stats2: any[] = [
  {age: "12 weeks", population: 12},
  {age: "7 weeks", population: 7},
  {age: "5 weeks", population: 5},
];
export const Stats3: any[] = [
  // {age: "<5", population: 2704659},
  // {age: "5-13", population: 4499890},
  {age: "<50", population: sessionStorage.getItem("array4")},
  {age: "51-500", population: sessionStorage.getItem("array3")},
  {age: "501-1500", population: sessionStorage.getItem("array2")},
  {age: "1501-3000", population:sessionStorage.getItem("array1")},
  {age: "≥3000", population:sessionStorage.getItem("array") },
];
export interface Stock {
  // date: Date,
  // value: number
  client_id:any,
  description:any,
  value:any
}

export const Stocks: Stock[] = [
 // {date: new Date("2010-01-01"), value: 210.73},
 
  {
    "client_id": 31189,
    "description": "GENESIS HEALTHCARE (IN-AIG)",
    "value": 4452
  },
  {
    "client_id": 20410,
    "description": "NORTHWELL HEALTH (IN-ARC)",
    "value": 4447
  },
  {
    "client_id": 28314,
    "description": "ADECCO (TPA-IN-AIG)",
    "value": 3541
  },
  {
    "client_id": 29005,
    "description": "ALLIED WORLD NAC - DBA/FVWC (IN-AWA)",
    "value": 3301
  },
  {
    "client_id": 28697,
    "description": "EMPLOYERS INSURANCE GROUP (IN-ECI)",
    "value": 2245
  },
  {
    "client_id": 29606,
    "description": "CHARTER COMMUNICATIONS, INC. (IN-ODR)",
    "value": 2231
  },
  {
    "client_id": 21123,
    "description": "HYUNDAI MOTOR MANUFACTURING ALABAMA, LLC",
    "value": 1796
  },
  {
    "client_id": 35147,
    "description": "GOVERNMENT EMPLOYEES INS CO (IN-ARC)",
    "value": 1752
  },
  {
    "client_id": 30291,
    "description": "FRANKCRUM (EML, WC)",
    "value": 1493
  },
  {
    "client_id": 20772,
    "description": "ACOSTA, INC. (IN-HAR)",
    "value": 1387
  },
  {
    "client_id": 22360,
    "description": "PREFERRED OPERATOR GROUP, LLC - T/O (IN-DIS)",
    "value": 1339
  },
  {
    "client_id": 29416,
    "description": "STATE OF CO DEDICATED UNIT (SI)",
    "value": 1294
  },
  {
    "client_id": 29274,
    "description": "WORK FIRST CASUALTY COMPANY (IN-WFC)",
    "value": 1238
  },
  {
    "client_id": 29560,
    "description": "GOVERNMENT EMPLOYEES INS CO (IN-AIG)",
    "value": 1176
  },
  {
    "client_id": 15355,
    "description": "COCA-COLA BOTTLERS' ASSOCIATION, THE",
    "value": 1140
  },
  {
    "client_id": 22055,
    "description": "HAIER US APPLIANCE SOLUTIONS, INC. (IN-ODR)",
    "value": 1123
  },
  {
    "client_id": 21857,
    "description": "HCA HEALTHCARE - CLIENT FUNDED (IN-ACE)",
    "value": 1046
  },
  {
    "client_id": 28120,
    "description": "BAXTER INTERNATIONAL INC. (TPA-IN-ODR)",
    "value": 1019
  },
  {
    "client_id": 28462,
    "description": "FARM FAMILY CASUALTY INSURANCE COMPANY",
    "value": 1006
  },
  {
    "client_id": 21256,
    "description": "STAPLES, INC. (IN-ACE)",
    "value": 969
  },
  {
    "client_id": 16434,
    "description": "MV TRANSPORTATION, INC. (ACE)",
    "value": 928
  },
  {
    "client_id": 19868,
    "description": "ENTERPRISE PRODUCTS COMPANY (IN-AIG)",
    "value": 908
  },
  {
    "client_id": 20265,
    "description": "LOVE'S COUNTRY STORES, INC. (IN-ACE)",
    "value": 893
  },
  {
    "client_id": 13240,
    "description": "TVI, INC. (WC)",
    "value": 874
  },
  {
    "client_id": 21327,
    "description": "COX ENTERPRISES/COX AUTOMOTIVE (01/01/15 & AFTER)",
    "value": 851
  },
  {
    "client_id": 29394,
    "description": "AMERISOURCEBERGEN CORPORATION (IN-ARC)",
    "value": 841
  },
  {
    "client_id": 21936,
    "description": "FOREVER 21, INC. (IN-ACE)",
    "value": 818
  },
  {
    "client_id": 6626,
    "description": "CASSENS TRANSPORT COMPANY",
    "value": 811
  },
  {
    "client_id": 20734,
    "description": "HEI HOSPITALITY, LLC (IN-CRU)",
    "value": 753
  },
  {
    "client_id": 21993,
    "description": "CHICAGO BRIDGE & IRON COMPANY (IN-XLI)",
    "value": 741
  },
  {
    "client_id": 22091,
    "description": "FIVE STAR QUALITY CARE, INC. (IN-SNI)",
    "value": 713
  },
  {
    "client_id": 15402,
    "description": "ECOLAB INC. (12/31/02 & AFTER)",
    "value": 691
  },
  {
    "client_id": 21510,
    "description": "GARDAWORLD SECURITY CORPORATION (IN-AIG)",
    "value": 654
  },
  {
    "client_id": 22067,
    "description": "MEDLINE INDUSTRIES, INC. (IN-HAR)",
    "value": 630
  },
  {
    "client_id": 28335,
    "description": "TRINITY INDUSTRIES (IN-ACE)",
    "value": 614
  },
  {
    "client_id": 21341,
    "description": "MV TRANSPORTATION, INC. (SI)",
    "value": 608
  },
  {
    "client_id": 35241,
    "description": "ZACHRY HOLDINGS, INC. - BB (IN-ZUR)",
    "value": 608
  },
  {
    "client_id": 22529,
    "description": "AARON'S, INC. (IN-XLI)",
    "value": 593
  },
  {
    "client_id": 19795,
    "description": "SCL HEALTH SYSTEM (SI)",
    "value": 560
  },
  {
    "client_id": 30269,
    "description": "GENERAL DYNAMICS (IN-AIG)",
    "value": 554
  },
  {
    "client_id": 29420,
    "description": "RACETRAC PETROLEUM, INC. (SI - 06/01/11 & AFTER)",
    "value": 552
  },
  {
    "client_id": 35112,
    "description": "AMEDISYS, INC. (IN-ARC)",
    "value": 547
  },
  {
    "client_id": 15853,
    "description": "CENTIMARK CORPORATION (S/I OHIO)",
    "value": 540
  },
  {
    "client_id": 28126,
    "description": "SANOFI-AVENTIS U.S. LLC (IN-ZUR)",
    "value": 540
  },
  {
    "client_id": 20752,
    "description": "RPC, INC. (IN-ACE)",
    "value": 528
  },
  {
    "client_id": 14380,
    "description": "ACCIDENT FUND INSURANCE COMPANY OF AMERICA",
    "value": 524
  },
  {
    "client_id": 15791,
    "description": "GANDER MOUNTAIN COMPANY (IN-AIG)",
    "value": 522
  },
  {
    "client_id": 15942,
    "description": "KONICA MINOLTA BUSINESS SOLUTIONS U.S.A., INC.",
    "value": 490
  },
  {
    "client_id": 16282,
    "description": "ACCIDENT FUND - GENERAL (03)",
    "value": 489
  },
  {
    "client_id": 28109,
    "description": "ILLINOIS TOOL WORKS INC. (IN-ZUR)",
    "value": 475
  },
  {
    "client_id": 22020,
    "description": "ENTERPRISE PRODUCTS COMPANY (IN-ODR)",
    "value": 467
  },
  {
    "client_id": 17302,
    "description": "JELD-WEN, INC. (WC 06/01/07 & AFTER)",
    "value": 464
  },
  {
    "client_id": 21187,
    "description": "EXTENDED STAY AMERICA, INC. (IN-SNI)",
    "value": 459
  },
  {
    "client_id": 30800,
    "description": "CLAYTON HOMES (IN-XLI)",
    "value": 456
  },
  {
    "client_id": 30341,
    "description": "SAIA INC. (SI)",
    "value": 441
  },
  {
    "client_id": 28449,
    "description": "AMERICAN TIRE DISTRIBUTORS, INC. (IN-XLI)",
    "value": 431
  },
  {
    "client_id": 21056,
    "description": "USA TRUCK, INC. - AR & LA (SI)",
    "value": 426
  },
  {
    "client_id": 28719,
    "description": "PENTAIR (IN-AIG)",
    "value": 418
  },
  {
    "client_id": 20289,
    "description": "IGNITE RESTAURANT GROUP (IN-ZUR)",
    "value": 410
  },
  {
    "client_id": 22218,
    "description": "CLARKWESTERN DIETRICH BUILDING SYSTEMS, LLC",
    "value": 407
  },
  {
    "client_id": 30954,
    "description": "SAIA INC. (IN-ACE)",
    "value": 397
  },
  {
    "client_id": 30268,
    "description": "HCA HEALTHCARE",
    "value": 390
  },
  {
    "client_id": 30548,
    "description": "THE PROSURE FUND",
    "value": 385
  },
  {
    "client_id": 21985,
    "description": "RICOH USA, INC. (IN-SNI)",
    "value": 354
  },
  {
    "client_id": 18479,
    "description": "BRADEN PARTNERS, LP (SJA)",
    "value": 352
  },
  {
    "client_id": 19757,
    "description": "BREAKTHRU BEVERAGE GROUP (IN-HAR)",
    "value": 335
  },
  {
    "client_id": 15793,
    "description": "SJICA PROGRAM",
    "value": 333
  },
  {
    "client_id": 21976,
    "description": "DRIVETIME AUTOMOTIVE (IN-ACE)",
    "value": 327
  },
  {
    "client_id": 19606,
    "description": "SAMSUNG FIRE & MARINE INSURANCE CO. (US BRANCH)",
    "value": 321
  },
  {
    "client_id": 22294,
    "description": "FORMAN MILLS, INC. (IN-STA)",
    "value": 321
  },
  {
    "client_id": 20503,
    "description": "JPMORGAN CHASE (IN-AIG)",
    "value": 314
  },
  {
    "client_id": 15083,
    "description": "DIEBOLD, INC. (03/01/02 & AFTER)",
    "value": 301
  },
  {
    "client_id": 28941,
    "description": "LIFE CARE SERVICES LLC (IN-ZUR)",
    "value": 299
  },
  {
    "client_id": 29093,
    "description": "UNITED ROAD SERVICES, INC. (IN-ACE)",
    "value": 292
  },
  {
    "client_id": 30206,
    "description": "LABORATORY CORP OF AMERICA",
    "value": 288
  },
  {
    "client_id": 16347,
    "description": "COX ENTERPRISES, INC. (01/01/06 - 12/31/14)",
    "value": 287
  },
  {
    "client_id": 20281,
    "description": "LG ELECTRONICS USA, INC.",
    "value": 287
  },
  {
    "client_id": 20599,
    "description": "SYKES ENTERPRISES, INC. (IN-HAR)",
    "value": 274
  },
  {
    "client_id": 18292,
    "description": "CAL-MAINE FOODS, INC. (03/01/09 & AFTER)",
    "value": 256
  },
  {
    "client_id": 20411,
    "description": "LENOX HILL HOSPITAL T/O (SI)",
    "value": 253
  },
  {
    "client_id": 21499,
    "description": "SUPERIOR GROUP (IN-ACE)",
    "value": 249
  },
  {
    "client_id": 22516,
    "description": "SWIRE COCA-COLA (IN-XLI)",
    "value": 248
  },
  {
    "client_id": 21494,
    "description": "USC (SI)",
    "value": 247
  },
  {
    "client_id": 29476,
    "description": "ILLINOIS TOOL WORKS INC.-T/O (SI)",
    "value": 234
  },
  {
    "client_id": 29053,
    "description": "LMC NON-BROADSPIRE",
    "value": 231
  },
  {
    "client_id": 21868,
    "description": "MUSASHI AUTO PARTS MICHIGAN, INC.",
    "value": 224
  },
  {
    "client_id": 18096,
    "description": "CSX TRANSPORTATION, INC.",
    "value": 217
  },
  {
    "client_id": 7703,
    "description": "HYSTER-YALE GROUP, INC. (SI)",
    "value": 216
  },
  {
    "client_id": 13627,
    "description": "CASSENS TRANSPORT COMPANY (INSURED)",
    "value": 213
  },
  {
    "client_id": 20146,
    "description": "VCA ANTECH INC. (IN-HAR)",
    "value": 213
  },
  {
    "client_id": 17382,
    "description": "SJFM - SOMPO JAPAN FIRE & MARINE",
    "value": 212
  },
  {
    "client_id": 22439,
    "description": "COWORX STAFFING SERVICES (IN-ACE)",
    "value": 212
  },
  {
    "client_id": 22455,
    "description": "TEMPUR SEALY INTERNATIONAL - R&Q (IN-ARC)",
    "value": 209
  },
  {
    "client_id": 28427,
    "description": "MEMORIAL SLOAN-KETTERING CANCER CENTER (SI)",
    "value": 206
  },
  {
    "client_id": 29074,
    "description": "TUESDAY MORNING CORPORATION-WC (IN-SNI)",
    "value": 201
  },
  {
    "client_id": 19728,
    "description": "ASTRAZENECA (IN-ODR)",
    "value": 198
  },
  {
    "client_id": 30272,
    "description": "UNILEVER USA - AIG",
    "value": 198
  },
  {
    "client_id": 28709,
    "description": "BRAND SERVICES INC. (IN-ACE)",
    "value": 196
  },
  {
    "client_id": 31200,
    "description": "ZF TRW (IN-ZUR)",
    "value": 195
  },
  {
    "client_id": 28322,
    "description": "RAIL MANAGEMENT SERVICES, LLC (IN-ACE)",
    "value": 192
  },
  {
    "client_id": 22138,
    "description": "7-ELEVEN, INC. (IN-ACE)",
    "value": 187
  },
  {
    "client_id": 21305,
    "description": "TOWNE HOLDINGS INC. - CARRIER-FUNDED (IN-XLI)",
    "value": 185
  },
  {
    "client_id": 19701,
    "description": "P.F. CHANG'S CHINA BISTRO, INC.",
    "value": 182
  },
  {
    "client_id": 26350,
    "description": "KALEIDA HEALTH (TPA-INS-ZUR)",
    "value": 180
  },
  {
    "client_id": 22366,
    "description": "THE HERITAGE GROUP - T/O (IN-ZUR)",
    "value": 178
  },
  {
    "client_id": 20225,
    "description": "UNITED SITE SERVICES, INC. (IN-SNI)",
    "value": 175
  },
  {
    "client_id": 22132,
    "description": "7-ELEVEN, INC. - TAKEOVER (IN-ACE)",
    "value": 173
  },
  {
    "client_id": 21271,
    "description": "JOY GLOBAL INC. (SI)",
    "value": 172
  },
  {
    "client_id": 35181,
    "description": "NEXTERA ENERGY RESOURCES, LLC (IN-EVE)",
    "value": 169
  },
  {
    "client_id": 19650,
    "description": "JOANN (IN-ARC)",
    "value": 165
  },
  {
    "client_id": 20321,
    "description": "FIVE STAR QUALITY CARE, INC. (IN-AIG)",
    "value": 164
  },
  {
    "client_id": 29845,
    "description": "KALEIDA HEALTH (ZURICH FUNDED)",
    "value": 161
  },
  {
    "client_id": 28075,
    "description": "JOHNSON & JOHNSON (TPA-IN-ACE)",
    "value": 160
  },
  {
    "client_id": 15431,
    "description": "SWIRE PACIFIC HOLDINGS, INC. - BOTTLING COMPANY",
    "value": 159
  },
  {
    "client_id": 19710,
    "description": "MISSION LINEN SUPPLY (IN-SNI)",
    "value": 159
  },
  {
    "client_id": 30356,
    "description": "SAIA INC. (WC - DISCOVER RE)",
    "value": 158
  },
  {
    "client_id": 29538,
    "description": "JV INDUSTRIAL COMPANIES (ZUR-EXC)",
    "value": 156
  },
  {
    "client_id": 15950,
    "description": "CANON U.S.A., INC.",
    "value": 155
  },
  {
    "client_id": 29593,
    "description": "ADECCO - WC OHIO (SI)",
    "value": 155
  },
  {
    "client_id": 29314,
    "description": "AMEDISYS, INC. (IN-HAR)",
    "value": 153
  },
  {
    "client_id": 15949,
    "description": "JSP INTERNATIONAL GROUP LTD",
    "value": 152
  },
  {
    "client_id": 29447,
    "description": "FUGATE ENTERPRISES (IN-AIG)",
    "value": 150
  },
  {
    "client_id": 21726,
    "description": "EPLICA CORPORATE SERVICES, INC. - T/O (IN-AIG)",
    "value": 147
  },
  {
    "client_id": 15720,
    "description": "HCR MANORCARE, INC. (02/01/04 & AFTER)",
    "value": 146
  },
  {
    "client_id": 15939,
    "description": "OLYMPUS CORPORATION OF AMERICAS",
    "value": 146
  },
  {
    "client_id": 17421,
    "description": "PETRO HOLDINGS AKA STAR GAS (WC)",
    "value": 145
  },
  {
    "client_id": 20304,
    "description": "C.H. ROBINSON WORLDWIDE, INC. (IN-ODR)",
    "value": 145
  },
  {
    "client_id": 14487,
    "description": "LAND O'LAKES, INC.",
    "value": 138
  },
  {
    "client_id": 22151,
    "description": "HOT TOPIC, INC. (IN-CHU)",
    "value": 135
  },
  {
    "client_id": 5053,
    "description": "E. & J. GALLO WINERY (WC ONLY)",
    "value": 133
  },
  {
    "client_id": 10430,
    "description": "JELD-WEN, INC. (S/I WC)",
    "value": 131
  },
  {
    "client_id": 29244,
    "description": "A.J. RICHARD & SONS, INC. (IN-ZUR)",
    "value": 131
  },
  {
    "client_id": 16007,
    "description": "YKK CORPORATION OF AMERICA",
    "value": 130
  },
  {
    "client_id": 19655,
    "description": "CHARLES RIVER LABS",
    "value": 130
  },
  {
    "client_id": 8361,
    "description": "HOSPITAL SISTERS HEALTH SYSTEM",
    "value": 129
  },
  {
    "client_id": 29840,
    "description": "ORTHO-CLINICAL DIAGNOSTICS (IN-ACE)",
    "value": 126
  },
  {
    "client_id": 21696,
    "description": "CREATIVE RISK SOLUTIONS - KEY MECHANICAL (IN-HAR)",
    "value": 124
  },
  {
    "client_id": 29481,
    "description": "UNITED STATES STEEL CORP (SI)",
    "value": 124
  },
  {
    "client_id": 21381,
    "description": "SAKS FIFTH AVENUE (IN-SNI)",
    "value": 123
  },
  {
    "client_id": 16281,
    "description": "ACCIDENT FUND - NATIONAL (02)",
    "value": 120
  },
  {
    "client_id": 28421,
    "description": "MONDELEZ NOVATION IN-ACE",
    "value": 119
  },
  {
    "client_id": 9996,
    "description": "CRUM & FORSTER INSURANCE COMPANY",
    "value": 118
  },
  {
    "client_id": 21400,
    "description": "NISSHA USA",
    "value": 118
  },
  {
    "client_id": 28977,
    "description": "NORTH AMERICAN FAMILY - CAPTIVE (IN-ACE)",
    "value": 116
  },
  {
    "client_id": 15767,
    "description": "HITACHI GROUP",
    "value": 113
  },
  {
    "client_id": 20055,
    "description": "CELADON GROUP, INC. (IN-ACE)",
    "value": 113
  },
  {
    "client_id": 21725,
    "description": "EPLICA CORPORATE SERVICES, INC. (IN-AIG)",
    "value": 113
  },
  {
    "client_id": 22453,
    "description": "SGL CARBON, LLC",
    "value": 113
  },
  {
    "client_id": 21445,
    "description": "RICOH USA, INC. (IN-AIG)",
    "value": 112
  },
  {
    "client_id": 29421,
    "description": "RACETRAC PETROLEUM, INC./RACEWAY (IN-ARC)",
    "value": 111
  },
  {
    "client_id": 35234,
    "description": "MEDIA SERVICES, INC - CA WC (IN-ARC)",
    "value": 111
  },
  {
    "client_id": 28325,
    "description": "PRAXAIR, INC. (TPA-INS-ODR)",
    "value": 110
  },
  {
    "client_id": 28576,
    "description": "FLINT HILLS RESOURCES, LP (IN-ODR)",
    "value": 109
  },
  {
    "client_id": 18731,
    "description": "YOKOHAMA CORPORATION OF NORTH AMERICA",
    "value": 107
  },
  {
    "client_id": 21869,
    "description": "COVANCE, INC. (IN-ACE)",
    "value": 106
  },
  {
    "client_id": 22505,
    "description": "STEW LEONARDS HOLDINGS, LLC (IN-ARC)",
    "value": 106
  },
  {
    "client_id": 21714,
    "description": "WESTROCK COMPANY (IN-ACE)",
    "value": 103
  },
  {
    "client_id": 15990,
    "description": "PUGET SOUND ENERGY",
    "value": 102
  },
  {
    "client_id": 22332,
    "description": "SANDERSON FARMS, INC. (IN-ARC)",
    "value": 101
  },
  {
    "client_id": 13139,
    "description": "MANHEIM AUCTIONS, INC. (WC 01/01/99 - 12/31/14)",
    "value": 97
  },
  {
    "client_id": 19976,
    "description": "WESTFIELD INSURANCE (IN-OHF)",
    "value": 97
  },
  {
    "client_id": 28780,
    "description": "CONOCO - DUPONT PRE 10/1/98 (SELF-INSD)",
    "value": 97
  },
  {
    "client_id": 30682,
    "description": "SKILLED CARE WORKERS COMP",
    "value": 97
  },
  {
    "client_id": 22117,
    "description": "SHISEIDO/BARE ESCENTUALS (SJF)",
    "value": 96
  },
  {
    "client_id": 29813,
    "description": "RYDER SERVICES CORPORATION (IN-ODR)",
    "value": 95
  },
  {
    "client_id": 21317,
    "description": "STAPLES, INC. - OH (SI)",
    "value": 94
  },
  {
    "client_id": 21495,
    "description": "USC - TAKEOVER (SI)",
    "value": 94
  },
  {
    "client_id": 17490,
    "description": "VULCAN MATERIALS COMPANY (FL ROCK 01/01/08 & AFTER",
    "value": 92
  },
  {
    "client_id": 22528,
    "description": "SELECTIVE INS.-TAKEOVER OUT OF FOOTPRINT (IN-SEL)",
    "value": 90
  },
  {
    "client_id": 19703,
    "description": "HYUNDAI MOTOR AMERICA",
    "value": 89
  },
  {
    "client_id": 28389,
    "description": "HELENA CHEMICAL (IN-SJI)",
    "value": 87
  },
  {
    "client_id": 28484,
    "description": "E.I. DUPONT DE NEMOURS & CO. (IN-ODR)",
    "value": 86
  },
  {
    "client_id": 15964,
    "description": "CELADON GROUP, INC.",
    "value": 85
  },
  {
    "client_id": 15811,
    "description": "NSK CORPORATION",
    "value": 84
  },
  {
    "client_id": 19322,
    "description": "MOUNTAIRE CORPORATION (03/01/11 - 02/28/17)",
    "value": 84
  },
  {
    "client_id": 20524,
    "description": "HSBC NORTH AMERICA (IN-AIG)",
    "value": 84
  },
  {
    "client_id": 30288,
    "description": "CAPTAIN D'S, LLC (WC - ACE USA)",
    "value": 83
  },
  {
    "client_id": 20864,
    "description": "ZOE HOLDING COMPANY, INC. (IN-XLI)",
    "value": 81
  },
  {
    "client_id": 20007,
    "description": "GATE PETROLEUM COMPANY (IN-XLI)",
    "value": 80
  },
  {
    "client_id": 19932,
    "description": "DMG MORI SEIKI AMERICAS HOLDING CORPORATION (SJF)",
    "value": 79
  },
  {
    "client_id": 3958,
    "description": "QUEENS SURFACE CORPORATION",
    "value": 78
  },
  {
    "client_id": 20902,
    "description": "ANN INC. (IN-SNI)",
    "value": 78
  },
  {
    "client_id": 22221,
    "description": "AISIN HOLDINGS OF AMERICA, INC.",
    "value": 76
  },
  {
    "client_id": 20675,
    "description": "99 CENTS ONLY STORES - WC (SI)",
    "value": 75
  },
  {
    "client_id": 21203,
    "description": "SAKS FIFTH AVENUE - TAKEOVER (IN-ARC)",
    "value": 75
  },
  {
    "client_id": 4766,
    "description": "CEMEX MATERIALS (SELF-INSURED)",
    "value": 74
  },
  {
    "client_id": 35129,
    "description": "SCOTTS COMPANY - SLS (IN-AIG)",
    "value": 74
  },
  {
    "client_id": 15741,
    "description": "HITACHI AUTOMOTIVE SYSTEMS AMERICAS, INC.",
    "value": 70
  },
  {
    "client_id": 31179,
    "description": "MARSDEN HOLDING LLC (IN-XLI)",
    "value": 68
  },
  {
    "client_id": 22072,
    "description": "KINDER MORGAN, INC. (IN-ODR)",
    "value": 67
  },
  {
    "client_id": 22081,
    "description": "MILLENNIUM HOTELS & RESORTS (IN-ARC)",
    "value": 66
  },
  {
    "client_id": 22444,
    "description": "BEMIS COMPANY, INC. (IN-LMI)",
    "value": 66
  },
  {
    "client_id": 27798,
    "description": "LEGGETT & PLATT (DIS04)",
    "value": 65
  },
  {
    "client_id": 21512,
    "description": "GARDAWORLD SECURITY CORP - TAKEOVER (IN-AIG)",
    "value": 64
  },
  {
    "client_id": 20260,
    "description": "PSC INDUSTRIAL OUTSOURCING L.P. (IN-ACE)",
    "value": 63
  },
  {
    "client_id": 21298,
    "description": "ALCOTT HR LLC (IN-ZUR)",
    "value": 63
  },
  {
    "client_id": 21055,
    "description": "USA TRUCK, INC. (IN-ACE)",
    "value": 62
  },
  {
    "client_id": 22077,
    "description": "KEOLIS TRANSIT AMERICA, INC. (IN-ACE)",
    "value": 62
  },
  {
    "client_id": 22124,
    "description": "DON QUIJOTE/MARUKAI CORPORATION",
    "value": 62
  },
  {
    "client_id": 28524,
    "description": "INVISTA (IN-ODR)",
    "value": 62
  },
  {
    "client_id": 15062,
    "description": "GKN PLC",
    "value": 61
  },
  {
    "client_id": 22266,
    "description": "RESTAURANT TECHNOLOGIES, INC. (IN-HAR)",
    "value": 59
  },
  {
    "client_id": 35009,
    "description": "DEL FRISCO'S RESTAURANT GROUP (IN-ACE)",
    "value": 57
  },
  {
    "client_id": 29533,
    "description": "PEOPLE 2.0 (IN-AIG)",
    "value": 56
  },
  {
    "client_id": 35064,
    "description": "CHEMOURS COMPANY (IN-ODR)",
    "value": 56
  },
  {
    "client_id": 35081,
    "description": "AVALONBAY COMMUNITIES, INC. (ACE-EXC)",
    "value": 56
  },
  {
    "client_id": 15806,
    "description": "HITACHI HIGH TECHNOLOGIES AMERICA, INC.",
    "value": 55
  },
  {
    "client_id": 28682,
    "description": "TULANE UNIVERSITY (SI)",
    "value": 55
  },
  {
    "client_id": 19586,
    "description": "ROCKTENN COMPANY (AIG)",
    "value": 54
  },
  {
    "client_id": 21362,
    "description": "EPSON AMERICA, INC.",
    "value": 53
  },
  {
    "client_id": 29318,
    "description": "NATIONWIDE MUTUAL (IN-ARC)",
    "value": 53
  },
  {
    "client_id": 19765,
    "description": "STEINWAY & SONS (IN-DIS)",
    "value": 52
  },
  {
    "client_id": 28338,
    "description": "HARNISH GROUP INC.",
    "value": 52
  },
  {
    "client_id": 19651,
    "description": "JOANN - OHIO ONLY (SI)",
    "value": 51
  },
  {
    "client_id": 20645,
    "description": "OKLAHOMA NATURAL GAS (SI)",
    "value": 51
  },
  {
    "client_id": 21379,
    "description": "LORD & TAYLOR (IN-SNI)",
    "value": 51
  },
  {
    "client_id": 27637,
    "description": "ZENITH INSURANCE CO (ZIC01)",
    "value": 51
  },
  {
    "client_id": 19168,
    "description": "FMR LLC (01/01/11 & AFTER)",
    "value": 49
  },
  {
    "client_id": 21860,
    "description": "COWORX STAFFING SERVICES (IN-ZUR)",
    "value": 49
  },
  {
    "client_id": 29816,
    "description": "AMERICAN WOODMARK CORP (IN-QBE)",
    "value": 49
  },
  {
    "client_id": 21017,
    "description": "ANDEAVOR (IN-ZUR)",
    "value": 48
  },
  {
    "client_id": 21204,
    "description": "SAKS FIFTH AVENUE - TAKEOVER (IN-ZUR)",
    "value": 48
  },
  {
    "client_id": 22073,
    "description": "KINDER MORGAN, INC. - TAKEOVER (IN-ODR)",
    "value": 48
  },
  {
    "client_id": 22761,
    "description": "RED ROBIN (IN-SNI)",
    "value": 48
  },
  {
    "client_id": 21562,
    "description": "STANDEX INTERNATIONAL CORPORATION (IN-DIS)",
    "value": 47
  },
  {
    "client_id": 22421,
    "description": "SUSIECAKES HOLDINGS INC. (SJF)",
    "value": 47
  },
  {
    "client_id": 15721,
    "description": "WISMETTAC ASIAN FOODS",
    "value": 45
  },
  {
    "client_id": 21240,
    "description": "AW NORTH CAROLINA, INC.",
    "value": 45
  },
  {
    "client_id": 18343,
    "description": "WESTINGHOUSE ELECTRIC COMPANY (WC 04/01/09 & AFTER",
    "value": 44
  },
  {
    "client_id": 20237,
    "description": "STRYKER CORP. DBA HOWMEDICA OSTEONICS CORP. (SI)",
    "value": 43
  },
  {
    "client_id": 19704,
    "description": "MARY WASHINGTON HEALTHCARE",
    "value": 42
  },
  {
    "client_id": 21523,
    "description": "M&T BANK (IN-HAR)",
    "value": 42
  },
  {
    "client_id": 21848,
    "description": "FINISHMASTER, INC. (IN-ARC)",
    "value": 42
  },
  {
    "client_id": 28380,
    "description": "SSA COOPER LLC (IN-ACE)",
    "value": 41
  },
  {
    "client_id": 29482,
    "description": "UNITED STATES STEEL CORP-TAKEOVER (SI)",
    "value": 41
  },
  {
    "client_id": 30277,
    "description": "SUN HEALTHCARE GROUP- AIG (AL, APD, PIP, WC) AY940",
    "value": 39
  },
  {
    "client_id": 28360,
    "description": "SPIRIT AEROSYSTEMS, INC. (IN-AIG)",
    "value": 38
  },
  {
    "client_id": 14212,
    "description": "TRIBOROUGH BRIDGE AND TUNNEL AUTHORITY",
    "value": 37
  },
  {
    "client_id": 16099,
    "description": "MUTUAL TRADING CO., INC.",
    "value": 37
  },
  {
    "client_id": 30281,
    "description": "GENESIS HEALTHCARE GROUP, INC. - OH (SI)",
    "value": 37
  },
  {
    "client_id": 1522,
    "description": "CHEVRON CORPORATION",
    "value": 35
  },
  {
    "client_id": 16894,
    "description": "MPS GROUP, INC. (CNA TAKEOVER CLAIMS 03/01/99-02/2",
    "value": 35
  },
  {
    "client_id": 18783,
    "description": "CHEVRON CORPORATION (JONES ACT 01/01/10 & AFTER)",
    "value": 35
  },
  {
    "client_id": 21443,
    "description": "MILLENNIUM HOTELS & RESORTS (AIG-EXC)",
    "value": 35
  },
  {
    "client_id": 16940,
    "description": "GOLDEN CORRAL CORPORATION (INSURED WC 11/01/06 - 1",
    "value": 34
  },
  {
    "client_id": 21411,
    "description": "SAMSUNG FIRE & MARINE INSURANCE CO. (FAIRVIEW)",
    "value": 34
  },
  {
    "client_id": 22414,
    "description": "JTEKT NORTH AMERICA CORPORATION",
    "value": 34
  },
  {
    "client_id": 22621,
    "description": "HERC RENTALS INC. - T/O (IN-CHU)",
    "value": 34
  },
  {
    "client_id": 30702,
    "description": "WYANDOTTE, CITY OF (GENERAL SERVICES)",
    "value": 34
  },
  {
    "client_id": 18386,
    "description": "WARD MANUFACTURING, LLC",
    "value": 33
  },
  {
    "client_id": 11048,
    "description": "PERDUE FARMS INC. (S/I 01/01/81 & AFTER)",
    "value": 32
  },
  {
    "client_id": 19965,
    "description": "ADAMS AND ASSOCIATES, INC. (IN-ACE)",
    "value": 32
  },
  {
    "client_id": 31072,
    "description": "MARO WORKERS' COMPENSATION FUND (WC 1995)",
    "value": 31
  },
  {
    "client_id": 19340,
    "description": "ADVANCE AMERICA, CASH ADVANCE CTR, INC (CLNT FUND)",
    "value": 30
  },
  {
    "client_id": 21540,
    "description": "MATRIX SERVICE COMPANY - WC & AL (IN-XLI)",
    "value": 30
  },
  {
    "client_id": 30330,
    "description": "THE WONDERFUL COMPANY - SI",
    "value": 30
  },
  {
    "client_id": 14635,
    "description": "TRIBUNE COMPANY (03/01/01 - 2/28/02)",
    "value": 29
  },
  {
    "client_id": 30336,
    "description": "SUN CHEMICAL CORPORATION - AIG",
    "value": 29
  },
  {
    "client_id": 21421,
    "description": "CURTIS-MARUYASU AMERICA, INC.",
    "value": 28
  },
  {
    "client_id": 21467,
    "description": "NISSIN FOODS (USA) COMPANY, INC.",
    "value": 28
  },
  {
    "client_id": 28795,
    "description": "BENETO INC. (AIG-EXC)",
    "value": 28
  },
  {
    "client_id": 35070,
    "description": "E.I. DUPONT #28484 TO CHEMOURS (IN-ODR)",
    "value": 27
  },
  {
    "client_id": 2278,
    "description": "FMC CORPORATION (INSURED W/C 10/1/89 - 09/30/98)",
    "value": 26
  },
  {
    "client_id": 17729,
    "description": "STERIS (OHIO PROGRAM)",
    "value": 26
  },
  {
    "client_id": 29299,
    "description": "NRG ENERGY, INC. - CAPTIVE (IN-ACE)",
    "value": 26
  },
  {
    "client_id": 16527,
    "description": "CENTIMARK CORPORATION (05/01/06 & AFTER)",
    "value": 25
  },
  {
    "client_id": 22359,
    "description": "PREFERRED OPERATOR GROUP, LLC (IN-SNI)",
    "value": 25
  },
  {
    "client_id": 22365,
    "description": "THE HERITAGE GROUP (IN-ZUR)",
    "value": 25
  },
  {
    "client_id": 22616,
    "description": "TRANSPORT AMERICA (SI)",
    "value": 25
  },
  {
    "client_id": 29337,
    "description": "SCOTTS COMPANY LLC, THE (IN-AIG)",
    "value": 25
  },
  {
    "client_id": 15438,
    "description": "HOLIDAY COMPANIES (04/01/03 & AFTER)",
    "value": 24
  },
  {
    "client_id": 18730,
    "description": "SCHINDLER ELEVATOR CORPORATION (WC ZURICH FUNDED)",
    "value": 24
  },
  {
    "client_id": 22150,
    "description": "TORRID, LLC (IN-CHU)",
    "value": 24
  },
  {
    "client_id": 29452,
    "description": "HORSEMEN'S WC INS. TRUST (SI)",
    "value": 24
  },
  {
    "client_id": 30294,
    "description": "HILLSBOROUGH CO SCHOOL BD (SELF-INSURED WC)",
    "value": 24
  },
  {
    "client_id": 21764,
    "description": "TOYOTOMI AMERICA CORPORATION (SJA)",
    "value": 23
  },
  {
    "client_id": 30573,
    "description": "COATS NORTH AMERICA CONSOLIDATED INC.",
    "value": 23
  },
  {
    "client_id": 22245,
    "description": "JCI - NON-SHELL AUTO CAPTIVE (IN-ODR)",
    "value": 22
  },
  {
    "client_id": 29383,
    "description": "CHICO'S FAS, INC.-WC (IN-HAR)",
    "value": 22
  },
  {
    "client_id": 16348,
    "description": "COX ENTERPRISES, INC. (S/I 01/01/06 & AFTER)",
    "value": 20
  },
  {
    "client_id": 21419,
    "description": "AMERICAN DENTAL PARTNERS, INC. (IN-ARC)",
    "value": 20
  },
  {
    "client_id": 26557,
    "description": "AURORA, IL, CITY OF",
    "value": 20
  },
  {
    "client_id": 29036,
    "description": "SCHERING-PLOUGH CORPORATION (IN-ACE)",
    "value": 20
  },
  {
    "client_id": 29225,
    "description": "MEDIA SERVICES, INC (IN-ARC)",
    "value": 20
  },
  {
    "client_id": 30558,
    "description": "MICHIGAN INDEPENDENT COLLEGES & UNIVERSITIES",
    "value": 20
  },
  {
    "client_id": 20853,
    "description": "THE PANTRY (IN-XLI)",
    "value": 19
  },
  {
    "client_id": 21935,
    "description": "GREAT LAKES WATER AUTHORITY (SI)",
    "value": 19
  },
  {
    "client_id": 20635,
    "description": "NATIONAL STORES, INC. (IN-HAR)",
    "value": 18
  },
  {
    "client_id": 20805,
    "description": "HOUSING PARTNERSHIP INSURANCE EXCHANGE (IN-DIS)",
    "value": 18
  },
  {
    "client_id": 22355,
    "description": "GOLDEN CORRAL CORPORATION (IN-SNI)",
    "value": 18
  },
  {
    "client_id": 28055,
    "description": "APPLE METRO, INC. (TPA-IN-ZUR)",
    "value": 18
  },
  {
    "client_id": 28445,
    "description": "ROCKWELL AUTOMATION (SI)",
    "value": 18
  },
  {
    "client_id": 31069,
    "description": "FEDERAL SIGNAL CORP. - AIG (2677546AX847)",
    "value": 18
  },
  {
    "client_id": 11670,
    "description": "RELX GROUP (INSURED)",
    "value": 17
  },
  {
    "client_id": 20896,
    "description": "FOREVER 21, INC. (IN-AIG)",
    "value": 17
  },
  {
    "client_id": 22643,
    "description": "SIGN RESOURCE, INC.",
    "value": 17
  },
  {
    "client_id": 22671,
    "description": "HITACHI KOKI U.S.A., LTD.",
    "value": 17
  },
  {
    "client_id": 25285,
    "description": "XEROX SI",
    "value": 17
  },
  {
    "client_id": 25842,
    "description": "TEXTRON INC.",
    "value": 17
  },
  {
    "client_id": 29094,
    "description": "UNITED ROAD SERVICES, INC. (SI)",
    "value": 17
  },
  {
    "client_id": 29404,
    "description": "CH2M - WC (IN-XLI)",
    "value": 17
  },
  {
    "client_id": 17405,
    "description": "GORTON'S INC. - WC PROGRAM",
    "value": 16
  },
  {
    "client_id": 18248,
    "description": "SPORTS AUTHORITY, THE (INSURED WC & AL 02/01/09-01",
    "value": 16
  },
  {
    "client_id": 20844,
    "description": "CPS ENERGY (SI)",
    "value": 16
  },
  {
    "client_id": 21853,
    "description": "PERDUE FARMS, INC. (IN-ZUR)",
    "value": 16
  },
  {
    "client_id": 28377,
    "description": "L'OREAL USA, INC. (IN-XLI)",
    "value": 16
  },
  {
    "client_id": 28722,
    "description": "FRUIT OF THE LOOM (IN-ACE)",
    "value": 16
  },
  {
    "client_id": 29279,
    "description": "LEXINGTON MEDICAL CENTER (SI)",
    "value": 16
  },
  {
    "client_id": 29310,
    "description": "PRIDE INDUSTRIES (IN-CRU)",
    "value": 16
  },
  {
    "client_id": 21083,
    "description": "LUTHERAN SENIOR SERVICES LLC (IN-SNI)",
    "value": 15
  },
  {
    "client_id": 22036,
    "description": "CENTRAL GLASS AMERICA, INC.",
    "value": 15
  },
  {
    "client_id": 22323,
    "description": "TEMPUR SEALY INTERNATIONAL - CAPTIVE (IN-ARC)",
    "value": 15
  },
  {
    "client_id": 19587,
    "description": "WESTROCK COMPANY (SI)",
    "value": 14
  },
  {
    "client_id": 21117,
    "description": "UNICARRIERS AMERICAS CORPORATION",
    "value": 14
  },
  {
    "client_id": 21246,
    "description": "FOREVER 21, INC. (SI)",
    "value": 14
  },
  {
    "client_id": 22652,
    "description": "BENIHANA INC. (IN-ZUR)",
    "value": 14
  },
  {
    "client_id": 20110,
    "description": "WHITE CASTLE SYSTEM, INC. (SI)",
    "value": 13
  },
  {
    "client_id": 20602,
    "description": "99 CENTS ONLY STORES - GL (SI)",
    "value": 13
  },
  {
    "client_id": 20984,
    "description": "M&T BANK (IN-ZUR)",
    "value": 13
  },
  {
    "client_id": 21532,
    "description": "JAMES RIVER INSURANCE COMPANY (IN-JRG)",
    "value": 13
  },
  {
    "client_id": 21942,
    "description": "ODOM CORPORATION - WC (IN-DIS)",
    "value": 13
  },
  {
    "client_id": 22282,
    "description": "HSS INC. (IN-HAR)",
    "value": 13
  },
  {
    "client_id": 31175,
    "description": "THE WONDERFUL COMPANY (IN-ODR)",
    "value": 13
  },
  {
    "client_id": 18538,
    "description": "SUNTRUST BANKS, INC. (ARCH 08/01/09 & AFTER)",
    "value": 12
  },
  {
    "client_id": 21535,
    "description": "MURATA MACHINERY USA HOLDINGS, INC. (SJA)",
    "value": 12
  },
  {
    "client_id": 28106,
    "description": "E.I. DUPONT DE NEMOURS & CO. TPA SI",
    "value": 12
  },
  {
    "client_id": 28443,
    "description": "ASSOCIATED MATERIALS INC (XLI-EXC)",
    "value": 12
  },
  {
    "client_id": 29987,
    "description": "MOLEX, INC. (IN-ODR)",
    "value": 12
  },
  {
    "client_id": 3519,
    "description": "ADVENTIST HEALTH SYSTEM/WEST",
    "value": 11
  },
  {
    "client_id": 14816,
    "description": "COST PLUS WORLD MARKET (WC & AL)",
    "value": 11
  },
  {
    "client_id": 16101,
    "description": "PRAIRIE FARMS DAIRY, INC. (04/01/05 - 03/31/14)",
    "value": 11
  },
  {
    "client_id": 19529,
    "description": "GENUINE PARTS COMPANY (09/01/11 & AFTER)",
    "value": 11
  },
  {
    "client_id": 19557,
    "description": "ARVADA, CO, CITY OF",
    "value": 11
  },
  {
    "client_id": 20259,
    "description": "AMERICAN OUTDOOR BRANDS CORP-T/O SI EXCESS",
    "value": 11
  },
  {
    "client_id": 20444,
    "description": "RADIOSHACK CORPORATION (IN-SNI)",
    "value": 11
  },
  {
    "client_id": 21975,
    "description": "TS TECH AMERICAS, INC.",
    "value": 11
  },
  {
    "client_id": 28651,
    "description": "GLAXOSMITHKLINE (IN-ODR)",
    "value": 11
  },
  {
    "client_id": 29555,
    "description": "AVERY DENNISON (IN-ODR)",
    "value": 11
  },
  {
    "client_id": 2546,
    "description": "SCHINDLER ENTERPRISES",
    "value": 10
  },
  {
    "client_id": 6861,
    "description": "AMAX INC. (INSURED WC/LIABILITY)",
    "value": 10
  },
  {
    "client_id": 14707,
    "description": "STERIS (INSURED WC/AL)",
    "value": 10
  },
  {
    "client_id": 20329,
    "description": "MIWD HOLDING COMPANY, LLC (IN-XLI)",
    "value": 10
  },
  {
    "client_id": 22473,
    "description": "EMPIRE MERCHANTS NORTH (IN-EVE)",
    "value": 10
  },
  {
    "client_id": 28522,
    "description": "KOCH INDUSTRIES, INC. (IN-ODR)",
    "value": 10
  },
  {
    "client_id": 29315,
    "description": "SIX FLAGS ENTERTAINMENT CORP (IN-HAR)",
    "value": 10
  },
  {
    "client_id": 29542,
    "description": "THE CHILDREN'S PLACE (IN-SNI)",
    "value": 10
  },
  {
    "client_id": 21923,
    "description": "MILLER MILLING COMPANY",
    "value": 9
  },
  {
    "client_id": 22749,
    "description": "USR PARENT, INC. - WC (IN-CHU)",
    "value": 9
  },
  {
    "client_id": 35015,
    "description": "SANOFI COMPANIES (IN-ODR)",
    "value": 9
  },
  {
    "client_id": 19565,
    "description": "AMERICAN INTERNATIONAL GROUP, INC.",
    "value": 8
  },
  {
    "client_id": 21131,
    "description": "JOY GLOBAL INC. - TAKEOVER (SI)",
    "value": 8
  },
  {
    "client_id": 21294,
    "description": "ALTRA INDUSTRIAL MOTION CORP. (IN-DIS)",
    "value": 8
  },
  {
    "client_id": 21688,
    "description": "HUNT CONSOLIDATED, INC. (IN-ACE)",
    "value": 8
  },
  {
    "client_id": 21908,
    "description": "AXALTA COATING SYSTEMS LLC (IN-STA)",
    "value": 8
  },
  {
    "client_id": 21927,
    "description": "STAPLES, INC. - WC TAKEOVER (IN-ACE)",
    "value": 8
  },
  {
    "client_id": 30681,
    "description": "WARREN CONSOLIDATED SCHOOLS",
    "value": 8
  },
  {
    "client_id": 2933,
    "description": "SCHINDLER ENTERPRISES (S/I WC)",
    "value": 7
  },
  {
    "client_id": 11659,
    "description": "DIEBOLD, INC. SELF-INSURED PROGRAM",
    "value": 7
  },
  {
    "client_id": 22432,
    "description": "LIMBACH FACILITY SERVICES, LLC - WC, GL (IN-XLI)",
    "value": 7
  },
  {
    "client_id": 29258,
    "description": "JOHNSON & JOHNSON (SPECIAL SI)",
    "value": 7
  },
  {
    "client_id": 31141,
    "description": "UNISYS CORPORATION (EML, AL, GL, PD, WC)",
    "value": 7
  },
  {
    "client_id": 35126,
    "description": "RTG FURNITURE CORP. (IN-ACE)",
    "value": 7
  },
  {
    "client_id": 21455,
    "description": "MARY'S GONE CRACKERS, INC.",
    "value": 6
  },
  {
    "client_id": 22130,
    "description": "ARCHDIOCESE OF GALVESTON/HOUSTON (IN-CMI)",
    "value": 6
  },
  {
    "client_id": 22785,
    "description": "SAMSUNG FIRE & MARINE CO.-AFFILIATE CLAIMS(IN-SFM)",
    "value": 6
  },
  {
    "client_id": 28509,
    "description": "VWR INTERNATIONAL, INC. (IN-ACE)",
    "value": 6
  },
  {
    "client_id": 29598,
    "description": "SEAGATE TECHNOLOGY LLC (IN-ZUR)",
    "value": 6
  },
  {
    "client_id": 29818,
    "description": "UNITED LAUNCH ALLIANCE, LLC (AIG-EXC)",
    "value": 6
  },
  {
    "client_id": 29846,
    "description": "NORTH AMERICAN FAMILY INSTITUTE (IN-CRU)",
    "value": 6
  },
  {
    "client_id": 15418,
    "description": "WILLIAMS COMPANIES, INC., THE (03/01/03 & AFTER)",
    "value": 5
  },
  {
    "client_id": 16636,
    "description": "DAIICHI SANKYO, INC.",
    "value": 5
  },
  {
    "client_id": 19736,
    "description": "ASTRAZENECA - TAKEOVER (IN-ODR)",
    "value": 5
  },
  {
    "client_id": 20441,
    "description": "CITY FURNITURE, INC. (IN-HAR)",
    "value": 5
  },
  {
    "client_id": 21548,
    "description": "DAVID'S BRIDAL, INC. (IN-HAR)",
    "value": 5
  },
  {
    "client_id": 22338,
    "description": "ACE PARKING MANAGEMENT, INC. - WC (IN-CHU)",
    "value": 5
  },
  {
    "client_id": 28547,
    "description": "ALBERTO CULVER COMPANY (IN-ACE)",
    "value": 5
  },
  {
    "client_id": 28759,
    "description": "SMT LINES (IN-ACE)",
    "value": 5
  },
  {
    "client_id": 29229,
    "description": "AVALONBAY COMMUNITIES, INC. (IN-ACE)",
    "value": 5
  },
  {
    "client_id": 29627,
    "description": "LUMBERMENS MUTUAL CASUALTY-BHCT CLAIMS",
    "value": 5
  },
  {
    "client_id": 31035,
    "description": "JOHN T. MATHER MEMORIAL HOSPITAL",
    "value": 5
  },
  {
    "client_id": 2856,
    "description": "GAF CORPORATION/INTERNATIONAL SPECIALTY PRODUCTS",
    "value": 4
  },
  {
    "client_id": 13097,
    "description": "SOUTHWIRE COMPANY (INSURED)",
    "value": 4
  },
  {
    "client_id": 13098,
    "description": "SOUTHWIRE COMPANY (SELF-INSURED WC)",
    "value": 4
  },
  {
    "client_id": 15098,
    "description": "TRANSAMERICA CORPORATION (AEGON WC)",
    "value": 4
  },
  {
    "client_id": 16960,
    "description": "CISCO SYSTEMS, INC.",
    "value": 4
  },
  {
    "client_id": 20445,
    "description": "GLORY GLOBAL SOLUTIONS",
    "value": 4
  },
  {
    "client_id": 21105,
    "description": "WCA WASTE CORPORATION (IN-AIG)",
    "value": 4
  },
  {
    "client_id": 21448,
    "description": "UBER (IN-ODR)",
    "value": 4
  },
  {
    "client_id": 22118,
    "description": "TOSHIBA AMERICA, INC.",
    "value": 4
  },
  {
    "client_id": 22313,
    "description": "HSS INC. - LATE RPT (IN-ZUR)",
    "value": 4
  },
  {
    "client_id": 22683,
    "description": "TRANSDIGM GROUP INC. (IN-HAR)",
    "value": 4
  },
  {
    "client_id": 26319,
    "description": "FPL-FLORIDA POWER & LIGHT (SI)",
    "value": 4
  },
  {
    "client_id": 28713,
    "description": "KATE SPADE & COMPANY (IN-HAR)",
    "value": 4
  },
  {
    "client_id": 29270,
    "description": "HEALTH CARE SERVICE CORPORATION (IN-ZUR)",
    "value": 4
  },
  {
    "client_id": 14430,
    "description": "DOW CHEMICAL COMPANY, THE (INS. WC)(12/01/00-11/30",
    "value": 3
  },
  {
    "client_id": 15945,
    "description": "SHARP MANUFACTURING COMPANY OF AMERICA",
    "value": 3
  },
  {
    "client_id": 16173,
    "description": "CINEMARK (06/30/05 & AFTER)",
    "value": 3
  },
  {
    "client_id": 20031,
    "description": "TEREX CORPORATION (IN-ACE)",
    "value": 3
  },
  {
    "client_id": 20081,
    "description": "TEREX CORPORATION (SI)",
    "value": 3
  },
  {
    "client_id": 20931,
    "description": "GRUMA CORPORATION (IN-ACE)",
    "value": 3
  },
  {
    "client_id": 21119,
    "description": "NATCHITOCHES PARISH SCHOOL BOARD (SI)",
    "value": 3
  },
  {
    "client_id": 21357,
    "description": "YOSHINOYA AMERICA, INC.",
    "value": 3
  },
  {
    "client_id": 21497,
    "description": "TOSHIBA AMERICA ENERGY SYSTEMS CORPORATION",
    "value": 3
  },
  {
    "client_id": 21686,
    "description": "NIPPONKOA (TAKEOVER CLAIMS)",
    "value": 3
  },
  {
    "client_id": 22134,
    "description": "7-ELEVEN, INC. - TAKEOVER (SI)",
    "value": 3
  },
  {
    "client_id": 25270,
    "description": "NORTHWEST AIRLINES, INC.",
    "value": 3
  },
  {
    "client_id": 25636,
    "description": "TRANS WORLD AIRLINES, INC",
    "value": 3
  },
  {
    "client_id": 28269,
    "description": "AVERY DENNISON (SI)",
    "value": 3
  },
  {
    "client_id": 28424,
    "description": "PHILIP MORRIS USA INC NOVATION (IN-ACE)",
    "value": 3
  },
  {
    "client_id": 28481,
    "description": "NEXTERA ENERGY DUANE ARNOLD (SI)",
    "value": 3
  },
  {
    "client_id": 28971,
    "description": "ASCEND PERFORMANCE MATERIALS HOLDINGS (IN-ACE)",
    "value": 3
  },
  {
    "client_id": 29326,
    "description": "CRETEX COMPANIES, INC. (IN-ZUR)",
    "value": 3
  },
  {
    "client_id": 30621,
    "description": "ANN ARBOR SCHOOLS",
    "value": 3
  },
  {
    "client_id": 1568,
    "description": "CITICORP/CITIBANK, N.A.",
    "value": 2
  },
  {
    "client_id": 8565,
    "description": "PANTRY PRIDE ENTERPRISES, INC. (10/01/83-07/31/86)",
    "value": 2
  },
  {
    "client_id": 14234,
    "description": "TRIBUNE COMPANY",
    "value": 2
  },
  {
    "client_id": 15976,
    "description": "BELDEN INC.",
    "value": 2
  },
  {
    "client_id": 16367,
    "description": "CARAUSTAR INDUSTRIES, INC. (01/01/06 & AFTER)",
    "value": 2
  },
  {
    "client_id": 16901,
    "description": "WESTINGHOUSE ELECTRIC COMPANY (S/I GATES TAKEOVER)",
    "value": 2
  },
  {
    "client_id": 19378,
    "description": "CROWLEY HOLDINGS, INC. (04/01/11 - 03/31/17)",
    "value": 2
  },
  {
    "client_id": 21429,
    "description": "MIZKAN AMERICA, INC.",
    "value": 2
  },
  {
    "client_id": 21743,
    "description": "NHK INTERNATIONAL CORPORATION",
    "value": 2
  },
  {
    "client_id": 21841,
    "description": "NISSIN BRAKE OHIO, INC.",
    "value": 2
  },
  {
    "client_id": 22113,
    "description": "KIKKOMAN FOODS, INC. (SJA)",
    "value": 2
  },
  {
    "client_id": 22288,
    "description": "HSS INC. - TAKEOVER (IN-ZUR)",
    "value": 2
  },
  {
    "client_id": 22329,
    "description": "ROPER CORPORATION - T/O (SI)",
    "value": 2
  },
  {
    "client_id": 22494,
    "description": "SRS DISTRIBUTION - AL & WC (IN-ZUR)",
    "value": 2
  },
  {
    "client_id": 22507,
    "description": "MOUNTAIRE CORPORATION (IN-LMI)",
    "value": 2
  },
  {
    "client_id": 22523,
    "description": "CATHAY PACIFIC AIRWAYS, LIMITED (IN-XLI)",
    "value": 2
  },
  {
    "client_id": 27400,
    "description": "LENNAR CORPORATION (IN-ODR)",
    "value": 2
  },
  {
    "client_id": 28115,
    "description": "GOVERNMENT EMPLOYEES INS CO (TPA-ZURICH)",
    "value": 2
  },
  {
    "client_id": 28125,
    "description": "BAXTER INTERNATIONAL INC. (TPA-SI)",
    "value": 2
  },
  {
    "client_id": 28327,
    "description": "FLINT GROUP (IN-DIS)",
    "value": 2
  },
  {
    "client_id": 28383,
    "description": "A.J. RICHARD & SONS (IN-XLI)",
    "value": 2
  },
  {
    "client_id": 28431,
    "description": "SEARS MERCHANDISE - NOVATION (IN-ACE)",
    "value": 2
  },
  {
    "client_id": 29271,
    "description": "HEALTH CARE SERVICE CORPORATION (SI)",
    "value": 2
  },
  {
    "client_id": 29991,
    "description": "UNITED LAUNCH ALLIANCE, LLC (IN-STA)",
    "value": 2
  },
  {
    "client_id": 30276,
    "description": "SUN HEALTHCARE GROUP-AIG (AL, APD, WC) CLIENT FUND",
    "value": 2
  },
  {
    "client_id": 35068,
    "description": "E.I. DUPONT #28106 TO CHEMOURS (SI)",
    "value": 2
  },
  {
    "client_id": 35203,
    "description": "AMERICAN WOODMARK CORP (IN-HAR)",
    "value": 2
  },
  {
    "client_id": 2892,
    "description": "GENCON INSURANCE COMPANY OF VERMONT",
    "value": 1
  },
  {
    "client_id": 9071,
    "description": "MARGATE, FL, CITY OF",
    "value": 1
  },
  {
    "client_id": 11650,
    "description": "RELX GROUP (OHIO - WC)",
    "value": 1
  },
  {
    "client_id": 14621,
    "description": "WILLIAMS COMPANIES, INC., THE (03/01/01 & AFTER)",
    "value": 1
  },
  {
    "client_id": 16146,
    "description": "COCA-COLA BOTTLERS' ASSOCIATION, THE (USF&G)",
    "value": 1
  },
  {
    "client_id": 16190,
    "description": "ACE USA (ESIS - ID, MT, OR, CO, HI, NV, AK, DE)",
    "value": 1
  },
  {
    "client_id": 16300,
    "description": "COCA-COLA BOTTLING OF NORTHERN NEW ENGLAND, INC.",
    "value": 1
  },
  {
    "client_id": 16331,
    "description": "DAIOHS USA, INC.",
    "value": 1
  },
  {
    "client_id": 16361,
    "description": "PERDUE FARMS INC. (01/01/06 - 12/31/15)",
    "value": 1
  },
  {
    "client_id": 16433,
    "description": "MV TRANSPORTATION, INC. (DED LIABILITY)",
    "value": 1
  },
  {
    "client_id": 17485,
    "description": "CARLSON, INC. (USA 07/01/05 & AFTER)",
    "value": 1
  },
  {
    "client_id": 18721,
    "description": "KAISER ALUMINUM (INSURED WC)",
    "value": 1
  },
  {
    "client_id": 19150,
    "description": "PCS ADMINISTRATION (USA) INC. (01/01/11 & AFTER)",
    "value": 1
  },
  {
    "client_id": 19762,
    "description": "SPORTS AUTHORITY, THE (WC)",
    "value": 1
  },
  {
    "client_id": 19974,
    "description": "WESTFIELD CORPORATE - OH ONLY (SI)",
    "value": 1
  },
  {
    "client_id": 20077,
    "description": "BEMIS COMPANY, INC. (IN-AIG)",
    "value": 1
  },
  {
    "client_id": 20251,
    "description": "AMERICAN OUTDOOR BRANDS CORP (IN-SNI)",
    "value": 1
  },
  {
    "client_id": 20913,
    "description": "U.S. BEEF CORPORATION (IN-XLI)",
    "value": 1
  },
  {
    "client_id": 20997,
    "description": "SIGNODE INDUSTRIAL GROUP, LLC (IN-XLI)",
    "value": 1
  },
  {
    "client_id": 21202,
    "description": "SAKS FIFTH AVENUE (SI)",
    "value": 1
  },
  {
    "client_id": 21342,
    "description": "HONEYBEE FOODS CORPORATION",
    "value": 1
  },
  {
    "client_id": 21647,
    "description": "CREATIVE RISK SOLUTIONS - APACHE HOSE (IN-HAR)",
    "value": 1
  },
  {
    "client_id": 21973,
    "description": "C. R. BARD, INC. (IN-SNI)",
    "value": 1
  },
  {
    "client_id": 22044,
    "description": "TOSHIBA GLOBAL COMMERCE SOLUTIONS, INC.",
    "value": 1
  },
  {
    "client_id": 22095,
    "description": "SANDERSON FARMS, INC. - T/O (IN-AIG)",
    "value": 1
  },
  {
    "client_id": 22140,
    "description": "7-ELEVEN, INC. (SI)",
    "value": 1
  },
  {
    "client_id": 22240,
    "description": "CABOT CORPORATION (IN-ODR)",
    "value": 1
  },
  {
    "client_id": 22303,
    "description": "HOYA HOLDINGS, INC. (SJA)",
    "value": 1
  },
  {
    "client_id": 22399,
    "description": "IMASEN BUCYRUS TECHNOLOGY, INC. (SAIC)",
    "value": 1
  },
  {
    "client_id": 22446,
    "description": "AJINOMOTO NORTH AMERICA, INC.",
    "value": 1
  },
  {
    "client_id": 22513,
    "description": "INTUIT, INC. (IN-SNI)",
    "value": 1
  },
  {
    "client_id": 22522,
    "description": "SELECTIVE INSURANCE - TAKEOVER EE CLAIMS (IN-SEL)",
    "value": 1
  },
  {
    "client_id": 22662,
    "description": "PK MANAGEMENT, LLC",
    "value": 1
  },
  {
    "client_id": 25870,
    "description": "CHARMER INDUSTRIES, INC.",
    "value": 1
  },
  {
    "client_id": 27667,
    "description": "OKLAHOMA STATE UNIVERSITY",
    "value": 1
  },
  {
    "client_id": 28102,
    "description": "JOHNSON & JOHNSON (TPA-SI)",
    "value": 1
  },
  {
    "client_id": 28592,
    "description": "KOCH INDUSTRIES, INC. - TAKEOVER (SI)",
    "value": 1
  },
  {
    "client_id": 28783,
    "description": "JOHNSON & JOHNSON - NOVATION (IN-ODR)",
    "value": 1
  },
  {
    "client_id": 29097,
    "description": "RACETRAC PETROLEUM, INC./RACEWAY (SI)",
    "value": 1
  },
  {
    "client_id": 29115,
    "description": "RTG FURNITURE CORP-CLIENT FUNDED (IN-CNA)",
    "value": 1
  },
  {
    "client_id": 29292,
    "description": "MERCK & CO., INC. (IN-ACE)",
    "value": 1
  },
  {
    "client_id": 29470,
    "description": "ILLINOIS TOOL WORKS INC.-NEW/LATE RPT (SI) OH",
    "value": 1
  },
  {
    "client_id": 29611,
    "description": "ASSOCIATED MATERIALS, INC. (IN-ZUR)",
    "value": 1
  },
  {
    "client_id": 30266,
    "description": "HCA HEALTHCARE (NEVADA)",
    "value": 1
  },
  {
    "client_id": 30557,
    "description": "ATLANTIC HEALTH SYSTEM, INC. (WC - SI)",
    "value": 1
  },
  {
    "client_id": 35111,
    "description": "COST PLUS, INC. - LIABILITY (IN-SNI)",
    "value": 1
  },
  {
    "client_id": 35128,
    "description": "S E INDEPENDENT DELIVERY (IN-ACE)",
    "value": 1
  }

];
