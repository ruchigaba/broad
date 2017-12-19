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
export const SAMPLE_DATA: any[] = [
    {age: '1-20', population: sessionStorage.getItem("array3")},
    {age: '21-60', population: sessionStorage.getItem("array2")},
    {age: '61-100', population: sessionStorage.getItem("array1")},
    {age: '>100', population: sessionStorage.getItem("array")},
   
];
export const StatsAve: any[] = [
  // {age: "<5", population: 2704659},
  // {age: "5-13", population: 4499890},
  {age: "<50", population: sessionStorage.getItem("array3")},
  {age: "50-150", population: sessionStorage.getItem("array2")},
  {age: "151-300", population: sessionStorage.getItem("array1")},
  {age: ">300", population:sessionStorage.getItem("array")},
];
export interface Stock_Average {
  // date: Date,
  // value: number
Client_num:any,
  Prog_desc:any,
  user_access:any,
  num_user:any
  
}
export const Stocks_Avg: Stock_Average[] =
[
  {
    "Client_num": 22360,
    "Prog_desc": "PREFERRED OPERATOR GROUP, LLC - T/O (IN-DIS)",
    "user_access": 2,
    "num_user": 1339
  },
  {
    "Client_num": 28126,
    "Prog_desc": "SANOFI-AVENTIS U.S. LLC (IN-ZUR)",
    "user_access": 1,
    "num_user": 540
  },
  {
    "Client_num": 28120,
    "Prog_desc": "BAXTER INTERNATIONAL INC. (TPA-IN-ODR)",
    "user_access": 3,
    "num_user": 1019
  },
  {
    "Client_num": 15853,
    "Prog_desc": "CENTIMARK CORPORATION (S/I OHIO)",
    "user_access": 2,
    "num_user": 540
  },
  {
    "Client_num": 29476,
    "Prog_desc": "ILLINOIS TOOL WORKS INC.-T/O (SI)",
    "user_access": 1,
    "num_user": 234
  },
  {
    "Client_num": 22020,
    "Prog_desc": "ENTERPRISE PRODUCTS COMPANY (IN-ODR)",
    "user_access": 2,
    "num_user": 467
  },
  {
    "Client_num": 22218,
    "Prog_desc": "CLARKWESTERN DIETRICH BUILDING SYSTEMS, LLC",
    "user_access": 2,
    "num_user": 407
  },
  {
    "Client_num": 19868,
    "Prog_desc": "ENTERPRISE PRODUCTS COMPANY (IN-AIG)",
    "user_access": 5,
    "num_user": 908
  },
  {
    "Client_num": 20752,
    "Prog_desc": "RPC, INC. (IN-ACE)",
    "user_access": 3,
    "num_user": 528
  },
  {
    "Client_num": 21271,
    "Prog_desc": "JOY GLOBAL INC. (SI)",
    "user_access": 1,
    "num_user": 172
  },
  {
    "Client_num": 35181,
    "Prog_desc": "NEXTERA ENERGY RESOURCES, LLC (IN-EVE)",
    "user_access": 1,
    "num_user": 169
  },
  {
    "Client_num": 16282,
    "Prog_desc": "ACCIDENT FUND - GENERAL (03)",
    "user_access": 3,
    "num_user": 489
  },
  {
    "Client_num": 15355,
    "Prog_desc": "COCA-COLA BOTTLERS' ASSOCIATION, THE",
    "user_access": 7,
    "num_user": 1140
  },
  {
    "Client_num": 29845,
    "Prog_desc": "KALEIDA HEALTH (ZURICH FUNDED)",
    "user_access": 1,
    "num_user": 161
  },
  {
    "Client_num": 22294,
    "Prog_desc": "FORMAN MILLS, INC. (IN-STA)",
    "user_access": 2,
    "num_user": 321
  },
  {
    "Client_num": 30356,
    "Prog_desc": "SAIA INC. (WC - DISCOVER RE)",
    "user_access": 1,
    "num_user": 158
  },
  {
    "Client_num": 29538,
    "Prog_desc": "JV INDUSTRIAL COMPANIES (ZUR-EXC)",
    "user_access": 1,
    "num_user": 156
  },
  {
    "Client_num": 15949,
    "Prog_desc": "JSP INTERNATIONAL GROUP LTD",
    "user_access": 1,
    "num_user": 152
  },
  {
    "Client_num": 35241,
    "Prog_desc": "ZACHRY HOLDINGS, INC. - BB (IN-ZUR)",
    "user_access": 4,
    "num_user": 608
  },
  {
    "Client_num": 20734,
    "Prog_desc": "HEI HOSPITALITY, LLC (IN-CRU)",
    "user_access": 5,
    "num_user": 753
  },
  {
    "Client_num": 29447,
    "Prog_desc": "FUGATE ENTERPRISES (IN-AIG)",
    "user_access": 1,
    "num_user": 150
  },
  {
    "Client_num": 22529,
    "Prog_desc": "AARON'S, INC. (IN-XLI)",
    "user_access": 4,
    "num_user": 593
  },
  {
    "Client_num": 21726,
    "Prog_desc": "EPLICA CORPORATE SERVICES, INC. - T/O (IN-AIG)",
    "user_access": 1,
    "num_user": 147
  },
  {
    "Client_num": 15720,
    "Prog_desc": "HCR MANORCARE, INC. (02/01/04 & AFTER)",
    "user_access": 1,
    "num_user": 146
  },
  {
    "Client_num": 20304,
    "Prog_desc": "C.H. ROBINSON WORLDWIDE, INC. (IN-ODR)",
    "user_access": 1,
    "num_user": 145
  },
  {
    "Client_num": 20289,
    "Prog_desc": "IGNITE RESTAURANT GROUP (IN-ZUR)",
    "user_access": 3,
    "num_user": 410
  },
  {
    "Client_num": 22151,
    "Prog_desc": "HOT TOPIC, INC. (IN-CHU)",
    "user_access": 1,
    "num_user": 135
  },
  {
    "Client_num": 5053,
    "Prog_desc": "E. & J. GALLO WINERY (WC ONLY)",
    "user_access": 1,
    "num_user": 133
  },
  {
    "Client_num": 16007,
    "Prog_desc": "YKK CORPORATION OF AMERICA",
    "user_access": 1,
    "num_user": 130
  },
  {
    "Client_num": 20411,
    "Prog_desc": "LENOX HILL HOSPITAL T/O (SI)",
    "user_access": 2,
    "num_user": 253
  },
  {
    "Client_num": 21696,
    "Prog_desc": "CREATIVE RISK SOLUTIONS - KEY MECHANICAL (IN-HAR)",
    "user_access": 1,
    "num_user": 124
  },
  {
    "Client_num": 21936,
    "Prog_desc": "FOREVER 21, INC. (IN-ACE)",
    "user_access": 7,
    "num_user": 818
  },
  {
    "Client_num": 28977,
    "Prog_desc": "NORTH AMERICAN FAMILY - CAPTIVE (IN-ACE)",
    "user_access": 1,
    "num_user": 116
  },
  {
    "Client_num": 22453,
    "Prog_desc": "SGL CARBON, LLC",
    "user_access": 1,
    "num_user": 113
  },
  {
    "Client_num": 29421,
    "Prog_desc": "RACETRAC PETROLEUM, INC./RACEWAY (IN-ARC)",
    "user_access": 1,
    "num_user": 111
  },
  {
    "Client_num": 21993,
    "Prog_desc": "CHICAGO BRIDGE & IRON COMPANY (IN-XLI)",
    "user_access": 7,
    "num_user": 741
  },
  {
    "Client_num": 29394,
    "Prog_desc": "AMERISOURCEBERGEN CORPORATION (IN-ARC)",
    "user_access": 8,
    "num_user": 841
  },
  {
    "Client_num": 21714,
    "Prog_desc": "WESTROCK COMPANY (IN-ACE)",
    "user_access": 1,
    "num_user": 103
  },
  {
    "Client_num": 28335,
    "Prog_desc": "TRINITY INDUSTRIES (IN-ACE)",
    "user_access": 6,
    "num_user": 614
  },
  {
    "Client_num": 29093,
    "Prog_desc": "UNITED ROAD SERVICES, INC. (IN-ACE)",
    "user_access": 3,
    "num_user": 292
  },
  {
    "Client_num": 13139,
    "Prog_desc": "MANHEIM AUCTIONS, INC. (WC 01/01/99 - 12/31/14)",
    "user_access": 1,
    "num_user": 97
  },
  {
    "Client_num": 28780,
    "Prog_desc": "CONOCO - DUPONT PRE 10/1/98 (SELF-INSD)",
    "user_access": 1,
    "num_user": 97
  },
  {
    "Client_num": 28322,
    "Prog_desc": "RAIL MANAGEMENT SERVICES, LLC (IN-ACE)",
    "user_access": 2,
    "num_user": 192
  },
  {
    "Client_num": 20281,
    "Prog_desc": "LG ELECTRONICS USA, INC.",
    "user_access": 3,
    "num_user": 287
  },
  {
    "Client_num": 29813,
    "Prog_desc": "RYDER SERVICES CORPORATION (IN-ODR)",
    "user_access": 1,
    "num_user": 95
  },
  {
    "Client_num": 22528,
    "Prog_desc": "SELECTIVE INS.-TAKEOVER OUT OF FOOTPRINT (IN-SEL)",
    "user_access": 1,
    "num_user": 90
  },
  {
    "Client_num": 26350,
    "Prog_desc": "KALEIDA HEALTH (TPA-INS-ZUR)",
    "user_access": 2,
    "num_user": 180
  },
  {
    "Client_num": 19703,
    "Prog_desc": "HYUNDAI MOTOR AMERICA",
    "user_access": 1,
    "num_user": 89
  },
  {
    "Client_num": 18479,
    "Prog_desc": "BRADEN PARTNERS, LP (SJA)",
    "user_access": 4,
    "num_user": 352
  },
  {
    "Client_num": 15791,
    "Prog_desc": "GANDER MOUNTAIN COMPANY (IN-AIG)",
    "user_access": 6,
    "num_user": 522
  },
  {
    "Client_num": 18292,
    "Prog_desc": "CAL-MAINE FOODS, INC. (03/01/09 & AFTER)",
    "user_access": 3,
    "num_user": 256
  },
  {
    "Client_num": 28719,
    "Prog_desc": "PENTAIR (IN-AIG)",
    "user_access": 5,
    "num_user": 418
  },
  {
    "Client_num": 20321,
    "Prog_desc": "FIVE STAR QUALITY CARE, INC. (IN-AIG)",
    "user_access": 2,
    "num_user": 164
  },
  {
    "Client_num": 19932,
    "Prog_desc": "DMG MORI SEIKI AMERICAS HOLDING CORPORATION (SJF)",
    "user_access": 1,
    "num_user": 79
  },
  {
    "Client_num": 20902,
    "Prog_desc": "ANN INC. (IN-SNI)",
    "user_access": 1,
    "num_user": 78
  },
  {
    "Client_num": 30268,
    "Prog_desc": "HCA HEALTHCARE",
    "user_access": 5,
    "num_user": 390
  },
  {
    "Client_num": 15950,
    "Prog_desc": "CANON U.S.A., INC.",
    "user_access": 2,
    "num_user": 155
  },
  {
    "Client_num": 16434,
    "Prog_desc": "MV TRANSPORTATION, INC. (ACE)",
    "user_access": 12,
    "num_user": 928
  },
  {
    "Client_num": 30800,
    "Prog_desc": "CLAYTON HOMES (IN-XLI)",
    "user_access": 6,
    "num_user": 456
  },
  {
    "Client_num": 21203,
    "Prog_desc": "SAKS FIFTH AVENUE - TAKEOVER (IN-ARC)",
    "user_access": 1,
    "num_user": 75
  },
  {
    "Client_num": 21868,
    "Prog_desc": "MUSASHI AUTO PARTS MICHIGAN, INC.",
    "user_access": 3,
    "num_user": 224
  },
  {
    "Client_num": 29606,
    "Prog_desc": "CHARTER COMMUNICATIONS, INC. (IN-ODR)",
    "user_access": 30,
    "num_user": 2231
  },
  {
    "Client_num": 4766,
    "Prog_desc": "CEMEX MATERIALS (SELF-INSURED)",
    "user_access": 1,
    "num_user": 74
  },
  {
    "Client_num": 7703,
    "Prog_desc": "HYSTER-YALE GROUP, INC. (SI)",
    "user_access": 3,
    "num_user": 216
  },
  {
    "Client_num": 15942,
    "Prog_desc": "KONICA MINOLTA BUSINESS SOLUTIONS U.S.A., INC.",
    "user_access": 7,
    "num_user": 490
  },
  {
    "Client_num": 19795,
    "Prog_desc": "SCL HEALTH SYSTEM (SI)",
    "user_access": 8,
    "num_user": 560
  },
  {
    "Client_num": 22067,
    "Prog_desc": "MEDLINE INDUSTRIES, INC. (IN-HAR)",
    "user_access": 9,
    "num_user": 630
  },
  {
    "Client_num": 22455,
    "Prog_desc": "TEMPUR SEALY INTERNATIONAL - R&Q (IN-ARC)",
    "user_access": 3,
    "num_user": 209
  },
  {
    "Client_num": 29420,
    "Prog_desc": "RACETRAC PETROLEUM, INC. (SI - 06/01/11 & AFTER)",
    "user_access": 8,
    "num_user": 552
  },
  {
    "Client_num": 6626,
    "Prog_desc": "CASSENS TRANSPORT COMPANY",
    "user_access": 12,
    "num_user": 811
  },
  {
    "Client_num": 19728,
    "Prog_desc": "ASTRAZENECA (IN-ODR)",
    "user_access": 3,
    "num_user": 198
  },
  {
    "Client_num": 29244,
    "Prog_desc": "A.J. RICHARD & SONS, INC. (IN-ZUR)",
    "user_access": 2,
    "num_user": 131
  },
  {
    "Client_num": 29840,
    "Prog_desc": "ORTHO-CLINICAL DIAGNOSTICS (IN-ACE)",
    "user_access": 2,
    "num_user": 126
  },
  {
    "Client_num": 13240,
    "Prog_desc": "TVI, INC. (WC)",
    "user_access": 14,
    "num_user": 874
  },
  {
    "Client_num": 22124,
    "Prog_desc": "DON QUIJOTE/MARUKAI CORPORATION",
    "user_access": 1,
    "num_user": 62
  },
  {
    "Client_num": 21056,
    "Prog_desc": "USA TRUCK, INC. - AR & LA (SI)",
    "user_access": 7,
    "num_user": 426
  },
  {
    "Client_num": 21341,
    "Prog_desc": "MV TRANSPORTATION, INC. (SI)",
    "user_access": 10,
    "num_user": 608
  },
  {
    "Client_num": 19701,
    "Prog_desc": "P.F. CHANG'S CHINA BISTRO, INC.",
    "user_access": 3,
    "num_user": 182
  },
  {
    "Client_num": 35147,
    "Prog_desc": "GOVERNMENT EMPLOYEES INS CO (IN-ARC)",
    "user_access": 29,
    "num_user": 1752
  },
  {
    "Client_num": 21123,
    "Prog_desc": "HYUNDAI MOTOR MANUFACTURING ALABAMA, LLC",
    "user_access": 30,
    "num_user": 1796
  },
  {
    "Client_num": 22366,
    "Prog_desc": "THE HERITAGE GROUP - T/O (IN-ZUR)",
    "user_access": 3,
    "num_user": 178
  },
  {
    "Client_num": 21400,
    "Prog_desc": "NISSHA USA",
    "user_access": 2,
    "num_user": 118
  },
  {
    "Client_num": 29560,
    "Prog_desc": "GOVERNMENT EMPLOYEES INS CO (IN-AIG)",
    "user_access": 20,
    "num_user": 1176
  },
  {
    "Client_num": 21187,
    "Prog_desc": "EXTENDED STAY AMERICA, INC. (IN-SNI)",
    "user_access": 8,
    "num_user": 459
  },
  {
    "Client_num": 15767,
    "Prog_desc": "HITACHI GROUP",
    "user_access": 2,
    "num_user": 113
  },
  {
    "Client_num": 29533,
    "Prog_desc": "PEOPLE 2.0 (IN-AIG)",
    "user_access": 1,
    "num_user": 56
  },
  {
    "Client_num": 35064,
    "Prog_desc": "CHEMOURS COMPANY (IN-ODR)",
    "user_access": 1,
    "num_user": 56
  },
  {
    "Client_num": 35081,
    "Prog_desc": "AVALONBAY COMMUNITIES, INC. (ACE-EXC)",
    "user_access": 1,
    "num_user": 56
  },
  {
    "Client_num": 21976,
    "Prog_desc": "DRIVETIME AUTOMOTIVE (IN-ACE)",
    "user_access": 6,
    "num_user": 327
  },
  {
    "Client_num": 28576,
    "Prog_desc": "FLINT HILLS RESOURCES, LP (IN-ODR)",
    "user_access": 2,
    "num_user": 109
  },
  {
    "Client_num": 18096,
    "Prog_desc": "CSX TRANSPORTATION, INC.",
    "user_access": 4,
    "num_user": 217
  },
  {
    "Client_num": 20772,
    "Prog_desc": "ACOSTA, INC. (IN-HAR)",
    "user_access": 26,
    "num_user": 1387
  },
  {
    "Client_num": 13627,
    "Prog_desc": "CASSENS TRANSPORT COMPANY (INSURED)",
    "user_access": 4,
    "num_user": 213
  },
  {
    "Client_num": 17382,
    "Prog_desc": "SJFM - SOMPO JAPAN FIRE & MARINE",
    "user_access": 4,
    "num_user": 212
  },
  {
    "Client_num": 21362,
    "Prog_desc": "EPSON AMERICA, INC.",
    "user_access": 1,
    "num_user": 53
  },
  {
    "Client_num": 22505,
    "Prog_desc": "STEW LEONARDS HOLDINGS, LLC (IN-ARC)",
    "user_access": 2,
    "num_user": 106
  },
  {
    "Client_num": 14380,
    "Prog_desc": "ACCIDENT FUND INSURANCE COMPANY OF AMERICA",
    "user_access": 10,
    "num_user": 524
  },
  {
    "Client_num": 29005,
    "Prog_desc": "ALLIED WORLD NAC - DBA/FVWC (IN-AWA)",
    "user_access": 63,
    "num_user": 3301
  },
  {
    "Client_num": 31189,
    "Prog_desc": "GENESIS HEALTHCARE (IN-AIG)",
    "user_access": 85,
    "num_user": 4452
  },
  {
    "Client_num": 28338,
    "Prog_desc": "HARNISH GROUP INC.",
    "user_access": 1,
    "num_user": 52
  },
  {
    "Client_num": 17302,
    "Prog_desc": "JELD-WEN, INC. (WC 06/01/07 & AFTER)",
    "user_access": 9,
    "num_user": 464
  },
  {
    "Client_num": 15990,
    "Prog_desc": "PUGET SOUND ENERGY",
    "user_access": 2,
    "num_user": 102
  },
  {
    "Client_num": 28709,
    "Prog_desc": "BRAND SERVICES INC. (IN-ACE)",
    "user_access": 4,
    "num_user": 196
  },
  {
    "Client_num": 29816,
    "Prog_desc": "AMERICAN WOODMARK CORP (IN-QBE)",
    "user_access": 1,
    "num_user": 49
  },
  {
    "Client_num": 30341,
    "Prog_desc": "SAIA INC. (SI)",
    "user_access": 9,
    "num_user": 441
  },
  {
    "Client_num": 21204,
    "Prog_desc": "SAKS FIFTH AVENUE - TAKEOVER (IN-ZUR)",
    "user_access": 1,
    "num_user": 48
  },
  {
    "Client_num": 28697,
    "Prog_desc": "EMPLOYERS INSURANCE GROUP (IN-ECI)",
    "user_access": 47,
    "num_user": 2245
  },
  {
    "Client_num": 21317,
    "Prog_desc": "STAPLES, INC. - OH (SI)",
    "user_access": 2,
    "num_user": 94
  },
  {
    "Client_num": 21562,
    "Prog_desc": "STANDEX INTERNATIONAL CORPORATION (IN-DIS)",
    "user_access": 1,
    "num_user": 47
  },
  {
    "Client_num": 22421,
    "Prog_desc": "SUSIECAKES HOLDINGS INC. (SJF)",
    "user_access": 1,
    "num_user": 47
  },
  {
    "Client_num": 20410,
    "Prog_desc": "NORTHWELL HEALTH (IN-ARC)",
    "user_access": 95,
    "num_user": 4447
  },
  {
    "Client_num": 21510,
    "Prog_desc": "GARDAWORLD SECURITY CORPORATION (IN-AIG)",
    "user_access": 14,
    "num_user": 654
  },
  {
    "Client_num": 14487,
    "Prog_desc": "LAND O'LAKES, INC.",
    "user_access": 3,
    "num_user": 138
  },
  {
    "Client_num": 17490,
    "Prog_desc": "VULCAN MATERIALS COMPANY (FL ROCK 01/01/08 & AFTER",
    "user_access": 2,
    "num_user": 92
  },
  {
    "Client_num": 20599,
    "Prog_desc": "SYKES ENTERPRISES, INC. (IN-HAR)",
    "user_access": 6,
    "num_user": 274
  },
  {
    "Client_num": 15721,
    "Prog_desc": "WISMETTAC ASIAN FOODS",
    "user_access": 1,
    "num_user": 45
  },
  {
    "Client_num": 30291,
    "Prog_desc": "FRANKCRUM (EML, WC)",
    "user_access": 34,
    "num_user": 1493
  },
  {
    "Client_num": 22132,
    "Prog_desc": "7-ELEVEN, INC. - TAKEOVER (IN-ACE)",
    "user_access": 4,
    "num_user": 173
  },
  {
    "Client_num": 28484,
    "Prog_desc": "E.I. DUPONT DE NEMOURS & CO. (IN-ODR)",
    "user_access": 2,
    "num_user": 86
  },
  {
    "Client_num": 15964,
    "Prog_desc": "CELADON GROUP, INC.",
    "user_access": 2,
    "num_user": 85
  },
  {
    "Client_num": 19704,
    "Prog_desc": "MARY WASHINGTON HEALTHCARE",
    "user_access": 1,
    "num_user": 42
  },
  {
    "Client_num": 20524,
    "Prog_desc": "HSBC NORTH AMERICA (IN-AIG)",
    "user_access": 2,
    "num_user": 84
  },
  {
    "Client_num": 21848,
    "Prog_desc": "FINISHMASTER, INC. (IN-ARC)",
    "user_access": 1,
    "num_user": 42
  },
  {
    "Client_num": 28380,
    "Prog_desc": "SSA COOPER LLC (IN-ACE)",
    "user_access": 1,
    "num_user": 41
  },
  {
    "Client_num": 15431,
    "Prog_desc": "SWIRE PACIFIC HOLDINGS, INC. - BOTTLING COMPANY",
    "user_access": 4,
    "num_user": 159
  },
  {
    "Client_num": 19710,
    "Prog_desc": "MISSION LINEN SUPPLY (IN-SNI)",
    "user_access": 4,
    "num_user": 159
  },
  {
    "Client_num": 28421,
    "Prog_desc": "MONDELEZ NOVATION IN-ACE",
    "user_access": 3,
    "num_user": 119
  },
  {
    "Client_num": 22091,
    "Prog_desc": "FIVE STAR QUALITY CARE, INC. (IN-SNI)",
    "user_access": 18,
    "num_user": 713
  },
  {
    "Client_num": 9996,
    "Prog_desc": "CRUM & FORSTER INSURANCE COMPANY",
    "user_access": 3,
    "num_user": 118
  },
  {
    "Client_num": 3958,
    "Prog_desc": "QUEENS SURFACE CORPORATION",
    "user_access": 2,
    "num_user": 78
  },
  {
    "Client_num": 31200,
    "Prog_desc": "ZF TRW (IN-ZUR)",
    "user_access": 5,
    "num_user": 195
  },
  {
    "Client_num": 20265,
    "Prog_desc": "LOVE'S COUNTRY STORES, INC. (IN-ACE)",
    "user_access": 23,
    "num_user": 893
  },
  {
    "Client_num": 29274,
    "Prog_desc": "WORK FIRST CASUALTY COMPANY (IN-WFC)",
    "user_access": 32,
    "num_user": 1238
  },
  {
    "Client_num": 29314,
    "Prog_desc": "AMEDISYS, INC. (IN-HAR)",
    "user_access": 4,
    "num_user": 153
  },
  {
    "Client_num": 22055,
    "Prog_desc": "HAIER US APPLIANCE SOLUTIONS, INC. (IN-ODR)",
    "user_access": 30,
    "num_user": 1123
  },
  {
    "Client_num": 21305,
    "Prog_desc": "TOWNE HOLDINGS INC. - CARRIER-FUNDED (IN-XLI)",
    "user_access": 5,
    "num_user": 185
  },
  {
    "Client_num": 35129,
    "Prog_desc": "SCOTTS COMPANY - SLS (IN-AIG)",
    "user_access": 2,
    "num_user": 74
  },
  {
    "Client_num": 30269,
    "Prog_desc": "GENERAL DYNAMICS (IN-AIG)",
    "user_access": 15,
    "num_user": 554
  },
  {
    "Client_num": 28325,
    "Prog_desc": "PRAXAIR, INC. (TPA-INS-ODR)",
    "user_access": 3,
    "num_user": 110
  },
  {
    "Client_num": 28109,
    "Prog_desc": "ILLINOIS TOOL WORKS INC. (IN-ZUR)",
    "user_access": 13,
    "num_user": 475
  },
  {
    "Client_num": 35112,
    "Prog_desc": "AMEDISYS, INC. (IN-ARC)",
    "user_access": 15,
    "num_user": 547
  },
  {
    "Client_num": 28449,
    "Prog_desc": "AMERICAN TIRE DISTRIBUTORS, INC. (IN-XLI)",
    "user_access": 12,
    "num_user": 431
  },
  {
    "Client_num": 18731,
    "Prog_desc": "YOKOHAMA CORPORATION OF NORTH AMERICA",
    "user_access": 3,
    "num_user": 107
  },
  {
    "Client_num": 16894,
    "Prog_desc": "MPS GROUP, INC. (CNA TAKEOVER CLAIMS 03/01/99-02/2",
    "user_access": 1,
    "num_user": 35
  },
  {
    "Client_num": 21443,
    "Prog_desc": "MILLENNIUM HOTELS & RESORTS (AIG-EXC)",
    "user_access": 1,
    "num_user": 35
  },
  {
    "Client_num": 30548,
    "Prog_desc": "THE PROSURE FUND",
    "user_access": 11,
    "num_user": 385
  },
  {
    "Client_num": 16940,
    "Prog_desc": "GOLDEN CORRAL CORPORATION (INSURED WC 11/01/06 - 1",
    "user_access": 1,
    "num_user": 34
  },
  {
    "Client_num": 21411,
    "Prog_desc": "SAMSUNG FIRE & MARINE INSURANCE CO. (FAIRVIEW)",
    "user_access": 1,
    "num_user": 34
  },
  {
    "Client_num": 22414,
    "Prog_desc": "JTEKT NORTH AMERICA CORPORATION",
    "user_access": 1,
    "num_user": 34
  },
  {
    "Client_num": 30702,
    "Prog_desc": "WYANDOTTE, CITY OF (GENERAL SERVICES)",
    "user_access": 1,
    "num_user": 34
  },
  {
    "Client_num": 31179,
    "Prog_desc": "MARSDEN HOLDING LLC (IN-XLI)",
    "user_access": 2,
    "num_user": 68
  },
  {
    "Client_num": 28462,
    "Prog_desc": "FARM FAMILY CASUALTY INSURANCE COMPANY",
    "user_access": 30,
    "num_user": 1006
  },
  {
    "Client_num": 19757,
    "Prog_desc": "BREAKTHRU BEVERAGE GROUP (IN-HAR)",
    "user_access": 10,
    "num_user": 335
  },
  {
    "Client_num": 28941,
    "Prog_desc": "LIFE CARE SERVICES LLC (IN-ZUR)",
    "user_access": 9,
    "num_user": 299
  },
  {
    "Client_num": 18386,
    "Prog_desc": "WARD MANUFACTURING, LLC",
    "user_access": 1,
    "num_user": 33
  },
  {
    "Client_num": 22444,
    "Prog_desc": "BEMIS COMPANY, INC. (IN-LMI)",
    "user_access": 2,
    "num_user": 66
  },
  {
    "Client_num": 30272,
    "Prog_desc": "UNILEVER USA - AIG",
    "user_access": 6,
    "num_user": 198
  },
  {
    "Client_num": 27798,
    "Prog_desc": "LEGGETT & PLATT (DIS04)",
    "user_access": 2,
    "num_user": 65
  },
  {
    "Client_num": 19976,
    "Prog_desc": "WESTFIELD INSURANCE (IN-OHF)",
    "user_access": 3,
    "num_user": 97
  },
  {
    "Client_num": 11048,
    "Prog_desc": "PERDUE FARMS INC. (S/I 01/01/81 & AFTER)",
    "user_access": 1,
    "num_user": 32
  },
  {
    "Client_num": 21512,
    "Prog_desc": "GARDAWORLD SECURITY CORP - TAKEOVER (IN-AIG)",
    "user_access": 2,
    "num_user": 64
  },
  {
    "Client_num": 22117,
    "Prog_desc": "SHISEIDO/BARE ESCENTUALS (SJF)",
    "user_access": 3,
    "num_user": 96
  },
  {
    "Client_num": 28314,
    "Prog_desc": "ADECCO (TPA-IN-AIG)",
    "user_access": 112,
    "num_user": 3541
  },
  {
    "Client_num": 20260,
    "Prog_desc": "PSC INDUSTRIAL OUTSOURCING L.P. (IN-ACE)",
    "user_access": 2,
    "num_user": 63
  },
  {
    "Client_num": 21298,
    "Prog_desc": "ALCOTT HR LLC (IN-ZUR)",
    "user_access": 2,
    "num_user": 63
  },
  {
    "Client_num": 21495,
    "Prog_desc": "USC - TAKEOVER (SI)",
    "user_access": 3,
    "num_user": 94
  },
  {
    "Client_num": 21055,
    "Prog_desc": "USA TRUCK, INC. (IN-ACE)",
    "user_access": 2,
    "num_user": 62
  },
  {
    "Client_num": 22516,
    "Prog_desc": "SWIRE COCA-COLA (IN-XLI)",
    "user_access": 8,
    "num_user": 248
  },
  {
    "Client_num": 22439,
    "Prog_desc": "COWORX STAFFING SERVICES (IN-ACE)",
    "user_access": 7,
    "num_user": 212
  },
  {
    "Client_num": 15793,
    "Prog_desc": "SJICA PROGRAM",
    "user_access": 11,
    "num_user": 333
  },
  {
    "Client_num": 19340,
    "Prog_desc": "ADVANCE AMERICA, CASH ADVANCE CTR, INC (CLNT FUND)",
    "user_access": 1,
    "num_user": 30
  },
  {
    "Client_num": 21540,
    "Prog_desc": "MATRIX SERVICE COMPANY - WC & AL (IN-XLI)",
    "user_access": 1,
    "num_user": 30
  },
  {
    "Client_num": 30330,
    "Prog_desc": "THE WONDERFUL COMPANY - SI",
    "user_access": 1,
    "num_user": 30
  },
  {
    "Client_num": 22266,
    "Prog_desc": "RESTAURANT TECHNOLOGIES, INC. (IN-HAR)",
    "user_access": 2,
    "num_user": 59
  },
  {
    "Client_num": 20225,
    "Prog_desc": "UNITED SITE SERVICES, INC. (IN-SNI)",
    "user_access": 6,
    "num_user": 175
  },
  {
    "Client_num": 14635,
    "Prog_desc": "TRIBUNE COMPANY (03/01/01 - 2/28/02)",
    "user_access": 1,
    "num_user": 29
  },
  {
    "Client_num": 17421,
    "Prog_desc": "PETRO HOLDINGS AKA STAR GAS (WC)",
    "user_access": 5,
    "num_user": 145
  },
  {
    "Client_num": 15811,
    "Prog_desc": "NSK CORPORATION",
    "user_access": 3,
    "num_user": 84
  },
  {
    "Client_num": 19322,
    "Prog_desc": "MOUNTAIRE CORPORATION (03/01/11 - 02/28/17)",
    "user_access": 3,
    "num_user": 84
  },
  {
    "Client_num": 21467,
    "Prog_desc": "NISSIN FOODS (USA) COMPANY, INC.",
    "user_access": 1,
    "num_user": 28
  },
  {
    "Client_num": 28795,
    "Prog_desc": "BENETO INC. (AIG-EXC)",
    "user_access": 1,
    "num_user": 28
  },
  {
    "Client_num": 28682,
    "Prog_desc": "TULANE UNIVERSITY (SI)",
    "user_access": 2,
    "num_user": 55
  },
  {
    "Client_num": 15083,
    "Prog_desc": "DIEBOLD, INC. (03/01/02 & AFTER)",
    "user_access": 11,
    "num_user": 301
  },
  {
    "Client_num": 19586,
    "Prog_desc": "ROCKTENN COMPANY (AIG)",
    "user_access": 2,
    "num_user": 54
  },
  {
    "Client_num": 35070,
    "Prog_desc": "E.I. DUPONT #28484 TO CHEMOURS (IN-ODR)",
    "user_access": 1,
    "num_user": 27
  },
  {
    "Client_num": 21869,
    "Prog_desc": "COVANCE, INC. (IN-ACE)",
    "user_access": 4,
    "num_user": 106
  },
  {
    "Client_num": 30954,
    "Prog_desc": "SAIA INC. (IN-ACE)",
    "user_access": 15,
    "num_user": 397
  },
  {
    "Client_num": 21256,
    "Prog_desc": "STAPLES, INC. (IN-ACE)",
    "user_access": 37,
    "num_user": 969
  },
  {
    "Client_num": 16347,
    "Prog_desc": "COX ENTERPRISES, INC. (01/01/06 - 12/31/14)",
    "user_access": 11,
    "num_user": 287
  },
  {
    "Client_num": 2278,
    "Prog_desc": "FMC CORPORATION (INSURED W/C 10/1/89 - 09/30/98)",
    "user_access": 1,
    "num_user": 26
  },
  {
    "Client_num": 17729,
    "Prog_desc": "STERIS (OHIO PROGRAM)",
    "user_access": 1,
    "num_user": 26
  },
  {
    "Client_num": 19655,
    "Prog_desc": "CHARLES RIVER LABS",
    "user_access": 5,
    "num_user": 130
  },
  {
    "Client_num": 19765,
    "Prog_desc": "STEINWAY & SONS (IN-DIS)",
    "user_access": 2,
    "num_user": 52
  },
  {
    "Client_num": 29299,
    "Prog_desc": "NRG ENERGY, INC. - CAPTIVE (IN-ACE)",
    "user_access": 1,
    "num_user": 26
  },
  {
    "Client_num": 29593,
    "Prog_desc": "ADECCO - WC OHIO (SI)",
    "user_access": 6,
    "num_user": 155
  },
  {
    "Client_num": 29053,
    "Prog_desc": "LMC NON-BROADSPIRE",
    "user_access": 9,
    "num_user": 231
  },
  {
    "Client_num": 20645,
    "Prog_desc": "OKLAHOMA NATURAL GAS (SI)",
    "user_access": 2,
    "num_user": 51
  },
  {
    "Client_num": 29416,
    "Prog_desc": "STATE OF CO DEDICATED UNIT (SI)",
    "user_access": 51,
    "num_user": 1294
  },
  {
    "Client_num": 22616,
    "Prog_desc": "TRANSPORT AMERICA (SI)",
    "user_access": 1,
    "num_user": 25
  },
  {
    "Client_num": 29337,
    "Prog_desc": "SCOTTS COMPANY LLC, THE (IN-AIG)",
    "user_access": 1,
    "num_user": 25
  },
  {
    "Client_num": 19606,
    "Prog_desc": "SAMSUNG FIRE & MARINE INSURANCE CO. (US BRANCH)",
    "user_access": 13,
    "num_user": 321
  },
  {
    "Client_num": 21860,
    "Prog_desc": "COWORX STAFFING SERVICES (IN-ZUR)",
    "user_access": 2,
    "num_user": 49
  },
  {
    "Client_num": 15939,
    "Prog_desc": "OLYMPUS CORPORATION OF AMERICAS",
    "user_access": 6,
    "num_user": 146
  },
  {
    "Client_num": 30682,
    "Prog_desc": "SKILLED CARE WORKERS COMP",
    "user_access": 4,
    "num_user": 97
  },
  {
    "Client_num": 16281,
    "Prog_desc": "ACCIDENT FUND - NATIONAL (02)",
    "user_access": 5,
    "num_user": 120
  },
  {
    "Client_num": 18730,
    "Prog_desc": "SCHINDLER ELEVATOR CORPORATION (WC ZURICH FUNDED)",
    "user_access": 1,
    "num_user": 24
  },
  {
    "Client_num": 29452,
    "Prog_desc": "HORSEMEN'S WC INS. TRUST (SI)",
    "user_access": 1,
    "num_user": 24
  },
  {
    "Client_num": 15402,
    "Prog_desc": "ECOLAB INC. (12/31/02 & AFTER)",
    "user_access": 29,
    "num_user": 691
  },
  {
    "Client_num": 15741,
    "Prog_desc": "HITACHI AUTOMOTIVE SYSTEMS AMERICAS, INC.",
    "user_access": 3,
    "num_user": 70
  },
  {
    "Client_num": 21327,
    "Prog_desc": "COX ENTERPRISES/COX AUTOMOTIVE (01/01/15 & AFTER)",
    "user_access": 37,
    "num_user": 851
  },
  {
    "Client_num": 21857,
    "Prog_desc": "HCA HEALTHCARE - CLIENT FUNDED (IN-ACE)",
    "user_access": 46,
    "num_user": 1046
  },
  {
    "Client_num": 21240,
    "Prog_desc": "AW NORTH CAROLINA, INC.",
    "user_access": 2,
    "num_user": 45
  },
  {
    "Client_num": 29074,
    "Prog_desc": "TUESDAY MORNING CORPORATION-WC (IN-SNI)",
    "user_access": 9,
    "num_user": 201
  },
  {
    "Client_num": 35234,
    "Prog_desc": "MEDIA SERVICES, INC - CA WC (IN-ARC)",
    "user_access": 5,
    "num_user": 111
  },
  {
    "Client_num": 22081,
    "Prog_desc": "MILLENNIUM HOTELS & RESORTS (IN-ARC)",
    "user_access": 3,
    "num_user": 66
  },
  {
    "Client_num": 22245,
    "Prog_desc": "JCI - NON-SHELL AUTO CAPTIVE (IN-ODR)",
    "user_access": 1,
    "num_user": 22
  },
  {
    "Client_num": 8361,
    "Prog_desc": "HOSPITAL SISTERS HEALTH SYSTEM",
    "user_access": 6,
    "num_user": 129
  },
  {
    "Client_num": 21985,
    "Prog_desc": "RICOH USA, INC. (IN-SNI)",
    "user_access": 17,
    "num_user": 354
  },
  {
    "Client_num": 22138,
    "Prog_desc": "7-ELEVEN, INC. (IN-ACE)",
    "user_access": 9,
    "num_user": 187
  },
  {
    "Client_num": 21499,
    "Prog_desc": "SUPERIOR GROUP (IN-ACE)",
    "user_access": 12,
    "num_user": 249
  },
  {
    "Client_num": 30288,
    "Prog_desc": "CAPTAIN D'S, LLC (WC - ACE USA)",
    "user_access": 4,
    "num_user": 83
  },
  {
    "Client_num": 28524,
    "Prog_desc": "INVISTA (IN-ODR)",
    "user_access": 3,
    "num_user": 62
  },
  {
    "Client_num": 29481,
    "Prog_desc": "UNITED STATES STEEL CORP (SI)",
    "user_access": 6,
    "num_user": 124
  },
  {
    "Client_num": 22332,
    "Prog_desc": "SANDERSON FARMS, INC. (IN-ARC)",
    "user_access": 5,
    "num_user": 101
  },
  {
    "Client_num": 16348,
    "Prog_desc": "COX ENTERPRISES, INC. (S/I 01/01/06 & AFTER)",
    "user_access": 1,
    "num_user": 20
  },
  {
    "Client_num": 20007,
    "Prog_desc": "GATE PETROLEUM COMPANY (IN-XLI)",
    "user_access": 4,
    "num_user": 80
  },
  {
    "Client_num": 21419,
    "Prog_desc": "AMERICAN DENTAL PARTNERS, INC. (IN-ARC)",
    "user_access": 1,
    "num_user": 20
  },
  {
    "Client_num": 26557,
    "Prog_desc": "AURORA, IL, CITY OF",
    "user_access": 1,
    "num_user": 20
  },
  {
    "Client_num": 29036,
    "Prog_desc": "SCHERING-PLOUGH CORPORATION (IN-ACE)",
    "user_access": 1,
    "num_user": 20
  },
  {
    "Client_num": 20853,
    "Prog_desc": "THE PANTRY (IN-XLI)",
    "user_access": 1,
    "num_user": 19
  },
  {
    "Client_num": 20055,
    "Prog_desc": "CELADON GROUP, INC. (IN-ACE)",
    "user_access": 6,
    "num_user": 113
  },
  {
    "Client_num": 21725,
    "Prog_desc": "EPLICA CORPORATE SERVICES, INC. (IN-AIG)",
    "user_access": 6,
    "num_user": 113
  },
  {
    "Client_num": 21445,
    "Prog_desc": "RICOH USA, INC. (IN-AIG)",
    "user_access": 6,
    "num_user": 112
  },
  {
    "Client_num": 14212,
    "Prog_desc": "TRIBOROUGH BRIDGE AND TUNNEL AUTHORITY",
    "user_access": 2,
    "num_user": 37
  },
  {
    "Client_num": 16099,
    "Prog_desc": "MUTUAL TRADING CO., INC.",
    "user_access": 2,
    "num_user": 37
  },
  {
    "Client_num": 15806,
    "Prog_desc": "HITACHI HIGH TECHNOLOGIES AMERICA, INC.",
    "user_access": 3,
    "num_user": 55
  },
  {
    "Client_num": 20805,
    "Prog_desc": "HOUSING PARTNERSHIP INSURANCE EXCHANGE (IN-DIS)",
    "user_access": 1,
    "num_user": 18
  },
  {
    "Client_num": 28055,
    "Prog_desc": "APPLE METRO, INC. (TPA-IN-ZUR)",
    "user_access": 1,
    "num_user": 18
  },
  {
    "Client_num": 30206,
    "Prog_desc": "LABORATORY CORP OF AMERICA",
    "user_access": 16,
    "num_user": 288
  },
  {
    "Client_num": 31069,
    "Prog_desc": "FEDERAL SIGNAL CORP. - AIG (2677546AX847)",
    "user_access": 1,
    "num_user": 18
  },
  {
    "Client_num": 28075,
    "Prog_desc": "JOHNSON & JOHNSON (TPA-IN-ACE)",
    "user_access": 9,
    "num_user": 160
  },
  {
    "Client_num": 18783,
    "Prog_desc": "CHEVRON CORPORATION (JONES ACT 01/01/10 & AFTER)",
    "user_access": 2,
    "num_user": 35
  },
  {
    "Client_num": 28427,
    "Prog_desc": "MEMORIAL SLOAN-KETTERING CANCER CENTER (SI)",
    "user_access": 12,
    "num_user": 206
  },
  {
    "Client_num": 19651,
    "Prog_desc": "JOANN - OHIO ONLY (SI)",
    "user_access": 3,
    "num_user": 51
  },
  {
    "Client_num": 22643,
    "Prog_desc": "SIGN RESOURCE, INC.",
    "user_access": 1,
    "num_user": 17
  },
  {
    "Client_num": 22671,
    "Prog_desc": "HITACHI KOKI U.S.A., LTD.",
    "user_access": 1,
    "num_user": 17
  },
  {
    "Client_num": 25285,
    "Prog_desc": "XEROX SI",
    "user_access": 1,
    "num_user": 17
  },
  {
    "Client_num": 25842,
    "Prog_desc": "TEXTRON INC.",
    "user_access": 1,
    "num_user": 17
  },
  {
    "Client_num": 29094,
    "Prog_desc": "UNITED ROAD SERVICES, INC. (SI)",
    "user_access": 1,
    "num_user": 17
  },
  {
    "Client_num": 10430,
    "Prog_desc": "JELD-WEN, INC. (S/I WC)",
    "user_access": 8,
    "num_user": 131
  },
  {
    "Client_num": 17405,
    "Prog_desc": "GORTON'S INC. - WC PROGRAM",
    "user_access": 1,
    "num_user": 16
  },
  {
    "Client_num": 22073,
    "Prog_desc": "KINDER MORGAN, INC. - TAKEOVER (IN-ODR)",
    "user_access": 3,
    "num_user": 48
  },
  {
    "Client_num": 22761,
    "Prog_desc": "RED ROBIN (IN-SNI)",
    "user_access": 3,
    "num_user": 48
  },
  {
    "Client_num": 28722,
    "Prog_desc": "FRUIT OF THE LOOM (IN-ACE)",
    "user_access": 1,
    "num_user": 16
  },
  {
    "Client_num": 21381,
    "Prog_desc": "SAKS FIFTH AVENUE (IN-SNI)",
    "user_access": 8,
    "num_user": 123
  },
  {
    "Client_num": 21083,
    "Prog_desc": "LUTHERAN SENIOR SERVICES LLC (IN-SNI)",
    "user_access": 1,
    "num_user": 15
  },
  {
    "Client_num": 20237,
    "Prog_desc": "STRYKER CORP. DBA HOWMEDICA OSTEONICS CORP. (SI)",
    "user_access": 3,
    "num_user": 43
  },
  {
    "Client_num": 35009,
    "Prog_desc": "DEL FRISCO'S RESTAURANT GROUP (IN-ACE)",
    "user_access": 4,
    "num_user": 57
  },
  {
    "Client_num": 21117,
    "Prog_desc": "UNICARRIERS AMERICAS CORPORATION",
    "user_access": 1,
    "num_user": 14
  },
  {
    "Client_num": 21246,
    "Prog_desc": "FOREVER 21, INC. (SI)",
    "user_access": 1,
    "num_user": 14
  },
  {
    "Client_num": 29482,
    "Prog_desc": "UNITED STATES STEEL CORP-TAKEOVER (SI)",
    "user_access": 3,
    "num_user": 41
  },
  {
    "Client_num": 22072,
    "Prog_desc": "KINDER MORGAN, INC. (IN-ODR)",
    "user_access": 5,
    "num_user": 67
  },
  {
    "Client_num": 20110,
    "Prog_desc": "WHITE CASTLE SYSTEM, INC. (SI)",
    "user_access": 1,
    "num_user": 13
  },
  {
    "Client_num": 20602,
    "Prog_desc": "99 CENTS ONLY STORES - GL (SI)",
    "user_access": 1,
    "num_user": 13
  },
  {
    "Client_num": 20984,
    "Prog_desc": "M&T BANK (IN-ZUR)",
    "user_access": 1,
    "num_user": 13
  },
  {
    "Client_num": 21942,
    "Prog_desc": "ODOM CORPORATION - WC (IN-DIS)",
    "user_access": 1,
    "num_user": 13
  },
  {
    "Client_num": 31175,
    "Prog_desc": "THE WONDERFUL COMPANY (IN-ODR)",
    "user_access": 1,
    "num_user": 13
  },
  {
    "Client_num": 21379,
    "Prog_desc": "LORD & TAYLOR (IN-SNI)",
    "user_access": 4,
    "num_user": 51
  },
  {
    "Client_num": 27637,
    "Prog_desc": "ZENITH INSURANCE CO (ZIC01)",
    "user_access": 4,
    "num_user": 51
  },
  {
    "Client_num": 22221,
    "Prog_desc": "AISIN HOLDINGS OF AMERICA, INC.",
    "user_access": 6,
    "num_user": 76
  },
  {
    "Client_num": 20503,
    "Prog_desc": "JPMORGAN CHASE (IN-AIG)",
    "user_access": 25,
    "num_user": 314
  },
  {
    "Client_num": 28389,
    "Prog_desc": "HELENA CHEMICAL (IN-SJI)",
    "user_access": 7,
    "num_user": 87
  },
  {
    "Client_num": 22077,
    "Prog_desc": "KEOLIS TRANSIT AMERICA, INC. (IN-ACE)",
    "user_access": 5,
    "num_user": 62
  },
  {
    "Client_num": 21494,
    "Prog_desc": "USC (SI)",
    "user_access": 20,
    "num_user": 247
  },
  {
    "Client_num": 30281,
    "Prog_desc": "GENESIS HEALTHCARE GROUP, INC. - OH (SI)",
    "user_access": 3,
    "num_user": 37
  },
  {
    "Client_num": 15062,
    "Prog_desc": "GKN PLC",
    "user_access": 5,
    "num_user": 61
  },
  {
    "Client_num": 21535,
    "Prog_desc": "MURATA MACHINERY USA HOLDINGS, INC. (SJA)",
    "user_access": 1,
    "num_user": 12
  },
  {
    "Client_num": 22150,
    "Prog_desc": "TORRID, LLC (IN-CHU)",
    "user_access": 2,
    "num_user": 24
  },
  {
    "Client_num": 28443,
    "Prog_desc": "ASSOCIATED MATERIALS INC (XLI-EXC)",
    "user_access": 1,
    "num_user": 12
  },
  {
    "Client_num": 20146,
    "Prog_desc": "VCA ANTECH INC. (IN-HAR)",
    "user_access": 18,
    "num_user": 213
  },
  {
    "Client_num": 21764,
    "Prog_desc": "TOYOTOMI AMERICA CORPORATION (SJA)",
    "user_access": 2,
    "num_user": 23
  },
  {
    "Client_num": 30573,
    "Prog_desc": "COATS NORTH AMERICA CONSOLIDATED INC.",
    "user_access": 2,
    "num_user": 23
  },
  {
    "Client_num": 3519,
    "Prog_desc": "ADVENTIST HEALTH SYSTEM/WEST",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 14816,
    "Prog_desc": "COST PLUS WORLD MARKET (WC & AL)",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 16101,
    "Prog_desc": "PRAIRIE FARMS DAIRY, INC. (04/01/05 - 03/31/14)",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 19529,
    "Prog_desc": "GENUINE PARTS COMPANY (09/01/11 & AFTER)",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 20259,
    "Prog_desc": "AMERICAN OUTDOOR BRANDS CORP-T/O SI EXCESS",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 29555,
    "Prog_desc": "AVERY DENNISON (IN-ODR)",
    "user_access": 1,
    "num_user": 11
  },
  {
    "Client_num": 31072,
    "Prog_desc": "MARO WORKERS' COMPENSATION FUND (WC 1995)",
    "user_access": 3,
    "num_user": 31
  },
  {
    "Client_num": 20864,
    "Prog_desc": "ZOE HOLDING COMPANY, INC. (IN-XLI)",
    "user_access": 8,
    "num_user": 81
  },
  {
    "Client_num": 6861,
    "Prog_desc": "AMAX INC. (INSURED WC/LIABILITY)",
    "user_access": 1,
    "num_user": 10
  },
  {
    "Client_num": 20329,
    "Prog_desc": "MIWD HOLDING COMPANY, LLC (IN-XLI)",
    "user_access": 1,
    "num_user": 10
  },
  {
    "Client_num": 22473,
    "Prog_desc": "EMPIRE MERCHANTS NORTH (IN-EVE)",
    "user_access": 1,
    "num_user": 10
  },
  {
    "Client_num": 28522,
    "Prog_desc": "KOCH INDUSTRIES, INC. (IN-ODR)",
    "user_access": 1,
    "num_user": 10
  },
  {
    "Client_num": 29542,
    "Prog_desc": "THE CHILDREN'S PLACE (IN-SNI)",
    "user_access": 1,
    "num_user": 10
  },
  {
    "Client_num": 30558,
    "Prog_desc": "MICHIGAN INDEPENDENT COLLEGES & UNIVERSITIES",
    "user_access": 2,
    "num_user": 20
  },
  {
    "Client_num": 19168,
    "Prog_desc": "FMR LLC (01/01/11 & AFTER)",
    "user_access": 5,
    "num_user": 49
  },
  {
    "Client_num": 30277,
    "Prog_desc": "SUN HEALTHCARE GROUP- AIG (AL, APD, PIP, WC) AY940",
    "user_access": 4,
    "num_user": 39
  },
  {
    "Client_num": 30336,
    "Prog_desc": "SUN CHEMICAL CORPORATION - AIG",
    "user_access": 3,
    "num_user": 29
  },
  {
    "Client_num": 21935,
    "Prog_desc": "GREAT LAKES WATER AUTHORITY (SI)",
    "user_access": 2,
    "num_user": 19
  },
  {
    "Client_num": 19650,
    "Prog_desc": "JOANN (IN-ARC)",
    "user_access": 18,
    "num_user": 165
  },
  {
    "Client_num": 21923,
    "Prog_desc": "MILLER MILLING COMPANY",
    "user_access": 1,
    "num_user": 9
  },
  {
    "Client_num": 22355,
    "Prog_desc": "GOLDEN CORRAL CORPORATION (IN-SNI)",
    "user_access": 2,
    "num_user": 18
  },
  {
    "Client_num": 28445,
    "Prog_desc": "ROCKWELL AUTOMATION (SI)",
    "user_access": 2,
    "num_user": 18
  },
  {
    "Client_num": 22621,
    "Prog_desc": "HERC RENTALS INC. - T/O (IN-CHU)",
    "user_access": 4,
    "num_user": 34
  },
  {
    "Client_num": 29404,
    "Prog_desc": "CH2M - WC (IN-XLI)",
    "user_access": 2,
    "num_user": 17
  },
  {
    "Client_num": 16527,
    "Prog_desc": "CENTIMARK CORPORATION (05/01/06 & AFTER)",
    "user_access": 3,
    "num_user": 25
  },
  {
    "Client_num": 22359,
    "Prog_desc": "PREFERRED OPERATOR GROUP, LLC (IN-SNI)",
    "user_access": 3,
    "num_user": 25
  },
  {
    "Client_num": 22365,
    "Prog_desc": "THE HERITAGE GROUP (IN-ZUR)",
    "user_access": 3,
    "num_user": 25
  },
  {
    "Client_num": 15438,
    "Prog_desc": "HOLIDAY COMPANIES (04/01/03 & AFTER)",
    "user_access": 3,
    "num_user": 24
  },
  {
    "Client_num": 18248,
    "Prog_desc": "SPORTS AUTHORITY, THE (INSURED WC & AL 02/01/09-01",
    "user_access": 2,
    "num_user": 16
  },
  {
    "Client_num": 21017,
    "Prog_desc": "ANDEAVOR (IN-ZUR)",
    "user_access": 6,
    "num_user": 48
  },
  {
    "Client_num": 21131,
    "Prog_desc": "JOY GLOBAL INC. - TAKEOVER (SI)",
    "user_access": 1,
    "num_user": 8
  },
  {
    "Client_num": 21294,
    "Prog_desc": "ALTRA INDUSTRIAL MOTION CORP. (IN-DIS)",
    "user_access": 1,
    "num_user": 8
  },
  {
    "Client_num": 21688,
    "Prog_desc": "HUNT CONSOLIDATED, INC. (IN-ACE)",
    "user_access": 1,
    "num_user": 8
  },
  {
    "Client_num": 21927,
    "Prog_desc": "STAPLES, INC. - WC TAKEOVER (IN-ACE)",
    "user_access": 1,
    "num_user": 8
  },
  {
    "Client_num": 29279,
    "Prog_desc": "LEXINGTON MEDICAL CENTER (SI)",
    "user_access": 2,
    "num_user": 16
  },
  {
    "Client_num": 30681,
    "Prog_desc": "WARREN CONSOLIDATED SCHOOLS",
    "user_access": 1,
    "num_user": 8
  },
  {
    "Client_num": 20675,
    "Prog_desc": "99 CENTS ONLY STORES - WC (SI)",
    "user_access": 10,
    "num_user": 75
  },
  {
    "Client_num": 18343,
    "Prog_desc": "WESTINGHOUSE ELECTRIC COMPANY (WC 04/01/09 & AFTER",
    "user_access": 6,
    "num_user": 44
  },
  {
    "Client_num": 2933,
    "Prog_desc": "SCHINDLER ENTERPRISES (S/I WC)",
    "user_access": 1,
    "num_user": 7
  },
  {
    "Client_num": 21421,
    "Prog_desc": "CURTIS-MARUYASU AMERICA, INC.",
    "user_access": 4,
    "num_user": 28
  },
  {
    "Client_num": 21523,
    "Prog_desc": "M&T BANK (IN-HAR)",
    "user_access": 6,
    "num_user": 42
  },
  {
    "Client_num": 22432,
    "Prog_desc": "LIMBACH FACILITY SERVICES, LLC - WC, GL (IN-XLI)",
    "user_access": 1,
    "num_user": 7
  },
  {
    "Client_num": 22652,
    "Prog_desc": "BENIHANA INC. (IN-ZUR)",
    "user_access": 2,
    "num_user": 14
  },
  {
    "Client_num": 29258,
    "Prog_desc": "JOHNSON & JOHNSON (SPECIAL SI)",
    "user_access": 1,
    "num_user": 7
  },
  {
    "Client_num": 31141,
    "Prog_desc": "UNISYS CORPORATION (EML, AL, GL, PD, WC)",
    "user_access": 1,
    "num_user": 7
  },
  {
    "Client_num": 29225,
    "Prog_desc": "MEDIA SERVICES, INC (IN-ARC)",
    "user_access": 3,
    "num_user": 20
  },
  {
    "Client_num": 19965,
    "Prog_desc": "ADAMS AND ASSOCIATES, INC. (IN-ACE)",
    "user_access": 5,
    "num_user": 32
  },
  {
    "Client_num": 28360,
    "Prog_desc": "SPIRIT AEROSYSTEMS, INC. (IN-AIG)",
    "user_access": 6,
    "num_user": 38
  },
  {
    "Client_num": 20635,
    "Prog_desc": "NATIONAL STORES, INC. (IN-HAR)",
    "user_access": 3,
    "num_user": 18
  },
  {
    "Client_num": 21455,
    "Prog_desc": "MARY'S GONE CRACKERS, INC.",
    "user_access": 1,
    "num_user": 6
  },
  {
    "Client_num": 22785,
    "Prog_desc": "SAMSUNG FIRE & MARINE CO.-AFFILIATE CLAIMS(IN-SFM)",
    "user_access": 1,
    "num_user": 6
  },
  {
    "Client_num": 29818,
    "Prog_desc": "UNITED LAUNCH ALLIANCE, LLC (AIG-EXC)",
    "user_access": 1,
    "num_user": 6
  },
  {
    "Client_num": 29846,
    "Prog_desc": "NORTH AMERICAN FAMILY INSTITUTE (IN-CRU)",
    "user_access": 1,
    "num_user": 6
  },
  {
    "Client_num": 29987,
    "Prog_desc": "MOLEX, INC. (IN-ODR)",
    "user_access": 2,
    "num_user": 12
  },
  {
    "Client_num": 29318,
    "Prog_desc": "NATIONWIDE MUTUAL (IN-ARC)",
    "user_access": 9,
    "num_user": 53
  },
  {
    "Client_num": 11670,
    "Prog_desc": "RELX GROUP (INSURED)",
    "user_access": 3,
    "num_user": 17
  },
  {
    "Client_num": 20896,
    "Prog_desc": "FOREVER 21, INC. (IN-AIG)",
    "user_access": 3,
    "num_user": 17
  },
  {
    "Client_num": 19557,
    "Prog_desc": "ARVADA, CO, CITY OF",
    "user_access": 2,
    "num_user": 11
  },
  {
    "Client_num": 21975,
    "Prog_desc": "TS TECH AMERICAS, INC.",
    "user_access": 2,
    "num_user": 11
  },
  {
    "Client_num": 28651,
    "Prog_desc": "GLAXOSMITHKLINE (IN-ODR)",
    "user_access": 2,
    "num_user": 11
  },
  {
    "Client_num": 20844,
    "Prog_desc": "CPS ENERGY (SI)",
    "user_access": 3,
    "num_user": 16
  },
  {
    "Client_num": 21853,
    "Prog_desc": "PERDUE FARMS, INC. (IN-ZUR)",
    "user_access": 3,
    "num_user": 16
  },
  {
    "Client_num": 29310,
    "Prog_desc": "PRIDE INDUSTRIES (IN-CRU)",
    "user_access": 3,
    "num_user": 16
  },
  {
    "Client_num": 1522,
    "Prog_desc": "CHEVRON CORPORATION",
    "user_access": 7,
    "num_user": 35
  },
  {
    "Client_num": 2546,
    "Prog_desc": "SCHINDLER ENTERPRISES",
    "user_access": 2,
    "num_user": 10
  },
  {
    "Client_num": 16636,
    "Prog_desc": "DAIICHI SANKYO, INC.",
    "user_access": 1,
    "num_user": 5
  },
  {
    "Client_num": 19736,
    "Prog_desc": "ASTRAZENECA - TAKEOVER (IN-ODR)",
    "user_access": 1,
    "num_user": 5
  },
  {
    "Client_num": 20441,
    "Prog_desc": "CITY FURNITURE, INC. (IN-HAR)",
    "user_access": 1,
    "num_user": 5
  },
  {
    "Client_num": 22036,
    "Prog_desc": "CENTRAL GLASS AMERICA, INC.",
    "user_access": 3,
    "num_user": 15
  },
  {
    "Client_num": 22323,
    "Prog_desc": "TEMPUR SEALY INTERNATIONAL - CAPTIVE (IN-ARC)",
    "user_access": 3,
    "num_user": 15
  },
  {
    "Client_num": 28547,
    "Prog_desc": "ALBERTO CULVER COMPANY (IN-ACE)",
    "user_access": 1,
    "num_user": 5
  },
  {
    "Client_num": 19587,
    "Prog_desc": "WESTROCK COMPANY (SI)",
    "user_access": 3,
    "num_user": 14
  },
  {
    "Client_num": 22749,
    "Prog_desc": "USR PARENT, INC. - WC (IN-CHU)",
    "user_access": 2,
    "num_user": 9
  },
  {
    "Client_num": 2856,
    "Prog_desc": "GAF CORPORATION/INTERNATIONAL SPECIALTY PRODUCTS",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 13097,
    "Prog_desc": "SOUTHWIRE COMPANY (INSURED)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 13098,
    "Prog_desc": "SOUTHWIRE COMPANY (SELF-INSURED WC)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 15098,
    "Prog_desc": "TRANSAMERICA CORPORATION (AEGON WC)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 16960,
    "Prog_desc": "CISCO SYSTEMS, INC.",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 18538,
    "Prog_desc": "SUNTRUST BANKS, INC. (ARCH 08/01/09 & AFTER)",
    "user_access": 3,
    "num_user": 12
  },
  {
    "Client_num": 20445,
    "Prog_desc": "GLORY GLOBAL SOLUTIONS",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 21105,
    "Prog_desc": "WCA WASTE CORPORATION (IN-AIG)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 21448,
    "Prog_desc": "UBER (IN-ODR)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 22118,
    "Prog_desc": "TOSHIBA AMERICA, INC.",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 22313,
    "Prog_desc": "HSS INC. - LATE RPT (IN-ZUR)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 28106,
    "Prog_desc": "E.I. DUPONT DE NEMOURS & CO. TPA SI",
    "user_access": 3,
    "num_user": 12
  },
  {
    "Client_num": 28377,
    "Prog_desc": "L'OREAL USA, INC. (IN-XLI)",
    "user_access": 4,
    "num_user": 16
  },
  {
    "Client_num": 28713,
    "Prog_desc": "KATE SPADE & COMPANY (IN-HAR)",
    "user_access": 1,
    "num_user": 4
  },
  {
    "Client_num": 30294,
    "Prog_desc": "HILLSBOROUGH CO SCHOOL BD (SELF-INSURED WC)",
    "user_access": 6,
    "num_user": 24
  },
  {
    "Client_num": 20444,
    "Prog_desc": "RADIOSHACK CORPORATION (IN-SNI)",
    "user_access": 3,
    "num_user": 11
  },
  {
    "Client_num": 11659,
    "Prog_desc": "DIEBOLD, INC. SELF-INSURED PROGRAM",
    "user_access": 2,
    "num_user": 7
  },
  {
    "Client_num": 14707,
    "Prog_desc": "STERIS (INSURED WC/AL)",
    "user_access": 3,
    "num_user": 10
  },
  {
    "Client_num": 22282,
    "Prog_desc": "HSS INC. (IN-HAR)",
    "user_access": 4,
    "num_user": 13
  },
  {
    "Client_num": 29383,
    "Prog_desc": "CHICO'S FAS, INC.-WC (IN-HAR)",
    "user_access": 7,
    "num_user": 22
  },
  {
    "Client_num": 14430,
    "Prog_desc": "DOW CHEMICAL COMPANY, THE (INS. WC)(12/01/00-11/30",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 15945,
    "Prog_desc": "SHARP MANUFACTURING COMPANY OF AMERICA",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 16173,
    "Prog_desc": "CINEMARK (06/30/05 & AFTER)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 21119,
    "Prog_desc": "NATCHITOCHES PARISH SCHOOL BOARD (SI)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 21357,
    "Prog_desc": "YOSHINOYA AMERICA, INC.",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 21497,
    "Prog_desc": "TOSHIBA AMERICA ENERGY SYSTEMS CORPORATION",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 21686,
    "Prog_desc": "NIPPONKOA (TAKEOVER CLAIMS)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 22130,
    "Prog_desc": "ARCHDIOCESE OF GALVESTON/HOUSTON (IN-CMI)",
    "user_access": 2,
    "num_user": 6
  },
  {
    "Client_num": 22134,
    "Prog_desc": "7-ELEVEN, INC. - TAKEOVER (SI)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 25270,
    "Prog_desc": "NORTHWEST AIRLINES, INC.",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 25636,
    "Prog_desc": "TRANS WORLD AIRLINES, INC",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 28269,
    "Prog_desc": "AVERY DENNISON (SI)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 28424,
    "Prog_desc": "PHILIP MORRIS USA INC NOVATION (IN-ACE)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 28481,
    "Prog_desc": "NEXTERA ENERGY DUANE ARNOLD (SI)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 28509,
    "Prog_desc": "VWR INTERNATIONAL, INC. (IN-ACE)",
    "user_access": 2,
    "num_user": 6
  },
  {
    "Client_num": 28971,
    "Prog_desc": "ASCEND PERFORMANCE MATERIALS HOLDINGS (IN-ACE)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 29326,
    "Prog_desc": "CRETEX COMPANIES, INC. (IN-ZUR)",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 29598,
    "Prog_desc": "SEAGATE TECHNOLOGY LLC (IN-ZUR)",
    "user_access": 2,
    "num_user": 6
  },
  {
    "Client_num": 30621,
    "Prog_desc": "ANN ARBOR SCHOOLS",
    "user_access": 1,
    "num_user": 3
  },
  {
    "Client_num": 19565,
    "Prog_desc": "AMERICAN INTERNATIONAL GROUP, INC.",
    "user_access": 3,
    "num_user": 8
  },
  {
    "Client_num": 21908,
    "Prog_desc": "AXALTA COATING SYSTEMS LLC (IN-STA)",
    "user_access": 3,
    "num_user": 8
  },
  {
    "Client_num": 21532,
    "Prog_desc": "JAMES RIVER INSURANCE COMPANY (IN-JRG)",
    "user_access": 5,
    "num_user": 13
  },
  {
    "Client_num": 15418,
    "Prog_desc": "WILLIAMS COMPANIES, INC., THE (03/01/03 & AFTER)",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 21548,
    "Prog_desc": "DAVID'S BRIDAL, INC. (IN-HAR)",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 22338,
    "Prog_desc": "ACE PARKING MANAGEMENT, INC. - WC (IN-CHU)",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 28759,
    "Prog_desc": "SMT LINES (IN-ACE)",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 29627,
    "Prog_desc": "LUMBERMENS MUTUAL CASUALTY-BHCT CLAIMS",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 31035,
    "Prog_desc": "JOHN T. MATHER MEMORIAL HOSPITAL",
    "user_access": 2,
    "num_user": 5
  },
  {
    "Client_num": 35126,
    "Prog_desc": "RTG FURNITURE CORP. (IN-ACE)",
    "user_access": 3,
    "num_user": 7
  },
  {
    "Client_num": 35015,
    "Prog_desc": "SANOFI COMPANIES (IN-ODR)",
    "user_access": 4,
    "num_user": 9
  },
  {
    "Client_num": 1568,
    "Prog_desc": "CITICORP/CITIBANK, N.A.",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 8565,
    "Prog_desc": "PANTRY PRIDE ENTERPRISES, INC. (10/01/83-07/31/86)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 14234,
    "Prog_desc": "TRIBUNE COMPANY",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 15976,
    "Prog_desc": "BELDEN INC.",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 16367,
    "Prog_desc": "CARAUSTAR INDUSTRIES, INC. (01/01/06 & AFTER)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 19378,
    "Prog_desc": "CROWLEY HOLDINGS, INC. (04/01/11 - 03/31/17)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 21429,
    "Prog_desc": "MIZKAN AMERICA, INC.",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 21743,
    "Prog_desc": "NHK INTERNATIONAL CORPORATION",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22113,
    "Prog_desc": "KIKKOMAN FOODS, INC. (SJA)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22288,
    "Prog_desc": "HSS INC. - TAKEOVER (IN-ZUR)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22329,
    "Prog_desc": "ROPER CORPORATION - T/O (SI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22494,
    "Prog_desc": "SRS DISTRIBUTION - AL & WC (IN-ZUR)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22507,
    "Prog_desc": "MOUNTAIRE CORPORATION (IN-LMI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22523,
    "Prog_desc": "CATHAY PACIFIC AIRWAYS, LIMITED (IN-XLI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 22683,
    "Prog_desc": "TRANSDIGM GROUP INC. (IN-HAR)",
    "user_access": 2,
    "num_user": 4
  },
  {
    "Client_num": 26319,
    "Prog_desc": "FPL-FLORIDA POWER & LIGHT (SI)",
    "user_access": 2,
    "num_user": 4
  },
  {
    "Client_num": 27400,
    "Prog_desc": "LENNAR CORPORATION (IN-ODR)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 28115,
    "Prog_desc": "GOVERNMENT EMPLOYEES INS CO (TPA-ZURICH)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 28125,
    "Prog_desc": "BAXTER INTERNATIONAL INC. (TPA-SI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 28383,
    "Prog_desc": "A.J. RICHARD & SONS (IN-XLI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 28431,
    "Prog_desc": "SEARS MERCHANDISE - NOVATION (IN-ACE)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 29270,
    "Prog_desc": "HEALTH CARE SERVICE CORPORATION (IN-ZUR)",
    "user_access": 2,
    "num_user": 4
  },
  {
    "Client_num": 29271,
    "Prog_desc": "HEALTH CARE SERVICE CORPORATION (SI)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 29991,
    "Prog_desc": "UNITED LAUNCH ALLIANCE, LLC (IN-STA)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 30276,
    "Prog_desc": "SUN HEALTHCARE GROUP-AIG (AL, APD, WC) CLIENT FUND",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 35203,
    "Prog_desc": "AMERICAN WOODMARK CORP (IN-HAR)",
    "user_access": 1,
    "num_user": 2
  },
  {
    "Client_num": 29315,
    "Prog_desc": "SIX FLAGS ENTERTAINMENT CORP (IN-HAR)",
    "user_access": 6,
    "num_user": 10
  },
  {
    "Client_num": 20031,
    "Prog_desc": "TEREX CORPORATION (IN-ACE)",
    "user_access": 2,
    "num_user": 3
  },
  {
    "Client_num": 20081,
    "Prog_desc": "TEREX CORPORATION (SI)",
    "user_access": 2,
    "num_user": 3
  },
  {
    "Client_num": 29229,
    "Prog_desc": "AVALONBAY COMMUNITIES, INC. (IN-ACE)",
    "user_access": 4,
    "num_user": 5
  },
  {
    "Client_num": 2892,
    "Prog_desc": "GENCON INSURANCE COMPANY OF VERMONT",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 9071,
    "Prog_desc": "MARGATE, FL, CITY OF",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 11650,
    "Prog_desc": "RELX GROUP (OHIO - WC)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 14621,
    "Prog_desc": "WILLIAMS COMPANIES, INC., THE (03/01/01 & AFTER)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16146,
    "Prog_desc": "COCA-COLA BOTTLERS' ASSOCIATION, THE (USF&G)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16190,
    "Prog_desc": "ACE USA (ESIS - ID, MT, OR, CO, HI, NV, AK, DE)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16300,
    "Prog_desc": "COCA-COLA BOTTLING OF NORTHERN NEW ENGLAND, INC.",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16331,
    "Prog_desc": "DAIOHS USA, INC.",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16361,
    "Prog_desc": "PERDUE FARMS INC. (01/01/06 - 12/31/15)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16433,
    "Prog_desc": "MV TRANSPORTATION, INC. (DED LIABILITY)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 16901,
    "Prog_desc": "WESTINGHOUSE ELECTRIC COMPANY (S/I GATES TAKEOVER)",
    "user_access": 2,
    "num_user": 2
  },
  {
    "Client_num": 17485,
    "Prog_desc": "CARLSON, INC. (USA 07/01/05 & AFTER)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 18721,
    "Prog_desc": "KAISER ALUMINUM (INSURED WC)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 19150,
    "Prog_desc": "PCS ADMINISTRATION (USA) INC. (01/01/11 & AFTER)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 19762,
    "Prog_desc": "SPORTS AUTHORITY, THE (WC)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 19974,
    "Prog_desc": "WESTFIELD CORPORATE - OH ONLY (SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 20077,
    "Prog_desc": "BEMIS COMPANY, INC. (IN-AIG)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 20251,
    "Prog_desc": "AMERICAN OUTDOOR BRANDS CORP (IN-SNI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 20913,
    "Prog_desc": "U.S. BEEF CORPORATION (IN-XLI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 20931,
    "Prog_desc": "GRUMA CORPORATION (IN-ACE)",
    "user_access": 3,
    "num_user": 3
  },
  {
    "Client_num": 20997,
    "Prog_desc": "SIGNODE INDUSTRIAL GROUP, LLC (IN-XLI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 21202,
    "Prog_desc": "SAKS FIFTH AVENUE (SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 21342,
    "Prog_desc": "HONEYBEE FOODS CORPORATION",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 21647,
    "Prog_desc": "CREATIVE RISK SOLUTIONS - APACHE HOSE (IN-HAR)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 21841,
    "Prog_desc": "NISSIN BRAKE OHIO, INC.",
    "user_access": 2,
    "num_user": 2
  },
  {
    "Client_num": 21973,
    "Prog_desc": "C. R. BARD, INC. (IN-SNI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22044,
    "Prog_desc": "TOSHIBA GLOBAL COMMERCE SOLUTIONS, INC.",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22095,
    "Prog_desc": "SANDERSON FARMS, INC. - T/O (IN-AIG)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22140,
    "Prog_desc": "7-ELEVEN, INC. (SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22240,
    "Prog_desc": "CABOT CORPORATION (IN-ODR)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22303,
    "Prog_desc": "HOYA HOLDINGS, INC. (SJA)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22399,
    "Prog_desc": "IMASEN BUCYRUS TECHNOLOGY, INC. (SAIC)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22446,
    "Prog_desc": "AJINOMOTO NORTH AMERICA, INC.",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22513,
    "Prog_desc": "INTUIT, INC. (IN-SNI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22522,
    "Prog_desc": "SELECTIVE INSURANCE - TAKEOVER EE CLAIMS (IN-SEL)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 22662,
    "Prog_desc": "PK MANAGEMENT, LLC",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 25870,
    "Prog_desc": "CHARMER INDUSTRIES, INC.",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 27667,
    "Prog_desc": "OKLAHOMA STATE UNIVERSITY",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 28102,
    "Prog_desc": "JOHNSON & JOHNSON (TPA-SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 28327,
    "Prog_desc": "FLINT GROUP (IN-DIS)",
    "user_access": 2,
    "num_user": 2
  },
  {
    "Client_num": 28592,
    "Prog_desc": "KOCH INDUSTRIES, INC. - TAKEOVER (SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 28783,
    "Prog_desc": "JOHNSON & JOHNSON - NOVATION (IN-ODR)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 29097,
    "Prog_desc": "RACETRAC PETROLEUM, INC./RACEWAY (SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 29115,
    "Prog_desc": "RTG FURNITURE CORP-CLIENT FUNDED (IN-CNA)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 29292,
    "Prog_desc": "MERCK & CO., INC. (IN-ACE)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 29470,
    "Prog_desc": "ILLINOIS TOOL WORKS INC.-NEW/LATE RPT (SI) OH",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 29611,
    "Prog_desc": "ASSOCIATED MATERIALS, INC. (IN-ZUR)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 30266,
    "Prog_desc": "HCA HEALTHCARE (NEVADA)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 30557,
    "Prog_desc": "ATLANTIC HEALTH SYSTEM, INC. (WC - SI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 35068,
    "Prog_desc": "E.I. DUPONT #28106 TO CHEMOURS (SI)",
    "user_access": 2,
    "num_user": 2
  },
  {
    "Client_num": 35111,
    "Prog_desc": "COST PLUS, INC. - LIABILITY (IN-SNI)",
    "user_access": 1,
    "num_user": 1
  },
  {
    "Client_num": 35128,
    "Prog_desc": "S E INDEPENDENT DELIVERY (IN-ACE)",
    "user_access": 1,
    "num_user": 1
  }
]





export interface Stock_Unique {
  // date: Date,
  // value: number
client_number:any,
  client_description:any,
  count_id:any
}
export const Stocks_Data: Stock_Unique[] =
[
  {
    "client_number": 28314,
    "client_description": "ADECCO (TPA-IN-AIG)",
    "count_id": 112
  },
  {
    "client_number": 20410,
    "client_description": "NORTHWELL HEALTH (IN-ARC)",
    "count_id": 95
  },
  {
    "client_number": 31189,
    "client_description": "GENESIS HEALTHCARE (IN-AIG)",
    "count_id": 85
  },
  {
    "client_number": 29005,
    "client_description": "ALLIED WORLD NAC - DBA/FVWC (IN-AWA)",
    "count_id": 63
  },
  {
    "client_number": 29416,
    "client_description": "STATE OF CO DEDICATED UNIT (SI)",
    "count_id": 51
  },
  {
    "client_number": 28697,
    "client_description": "EMPLOYERS INSURANCE GROUP (IN-ECI)",
    "count_id": 47
  },
  {
    "client_number": 21857,
    "client_description": "HCA HEALTHCARE - CLIENT FUNDED (IN-ACE)",
    "count_id": 46
  },
  {
    "client_number": 21256,
    "client_description": "STAPLES, INC. (IN-ACE)",
    "count_id": 37
  },
  {
    "client_number": 21327,
    "client_description": "COX ENTERPRISES/COX AUTOMOTIVE (01/01/15 & AFTER)",
    "count_id": 37
  },
  {
    "client_number": 30291,
    "client_description": "FRANKCRUM (EML, WC)",
    "count_id": 34
  },
  {
    "client_number": 29274,
    "client_description": "WORK FIRST CASUALTY COMPANY (IN-WFC)",
    "count_id": 32
  },
  {
    "client_number": 21123,
    "client_description": "HYUNDAI MOTOR MANUFACTURING ALABAMA, LLC",
    "count_id": 30
  },
  {
    "client_number": 22055,
    "client_description": "HAIER US APPLIANCE SOLUTIONS, INC. (IN-ODR)",
    "count_id": 30
  },
  {
    "client_number": 28462,
    "client_description": "FARM FAMILY CASUALTY INSURANCE COMPANY",
    "count_id": 30
  },
  {
    "client_number": 29606,
    "client_description": "CHARTER COMMUNICATIONS, INC. (IN-ODR)",
    "count_id": 30
  },
  {
    "client_number": 15402,
    "client_description": "ECOLAB INC. (12/31/02 & AFTER)",
    "count_id": 29
  },
  {
    "client_number": 35147,
    "client_description": "GOVERNMENT EMPLOYEES INS CO (IN-ARC)",
    "count_id": 29
  },
  {
    "client_number": 20772,
    "client_description": "ACOSTA, INC. (IN-HAR)",
    "count_id": 26
  },
  {
    "client_number": 20503,
    "client_description": "JPMORGAN CHASE (IN-AIG)",
    "count_id": 25
  },
  {
    "client_number": 20265,
    "client_description": "LOVE'S COUNTRY STORES, INC. (IN-ACE)",
    "count_id": 23
  },
  {
    "client_number": 21494,
    "client_description": "USC (SI)",
    "count_id": 20
  },
  {
    "client_number": 29560,
    "client_description": "GOVERNMENT EMPLOYEES INS CO (IN-AIG)",
    "count_id": 20
  },
  {
    "client_number": 19650,
    "client_description": "JOANN (IN-ARC)",
    "count_id": 18
  },
  {
    "client_number": 20146,
    "client_description": "VCA ANTECH INC. (IN-HAR)",
    "count_id": 18
  },
  {
    "client_number": 22091,
    "client_description": "FIVE STAR QUALITY CARE, INC. (IN-SNI)",
    "count_id": 18
  },
  {
    "client_number": 21985,
    "client_description": "RICOH USA, INC. (IN-SNI)",
    "count_id": 17
  },
  {
    "client_number": 30206,
    "client_description": "LABORATORY CORP OF AMERICA",
    "count_id": 16
  },
  {
    "client_number": 30269,
    "client_description": "GENERAL DYNAMICS (IN-AIG)",
    "count_id": 15
  },
  {
    "client_number": 30954,
    "client_description": "SAIA INC. (IN-ACE)",
    "count_id": 15
  },
  {
    "client_number": 35112,
    "client_description": "AMEDISYS, INC. (IN-ARC)",
    "count_id": 15
  },
  {
    "client_number": 13240,
    "client_description": "TVI, INC. (WC)",
    "count_id": 14
  },
  {
    "client_number": 21510,
    "client_description": "GARDAWORLD SECURITY CORPORATION (IN-AIG)",
    "count_id": 14
  },
  {
    "client_number": 19606,
    "client_description": "SAMSUNG FIRE & MARINE INSURANCE CO. (US BRANCH)",
    "count_id": 13
  },
  {
    "client_number": 28109,
    "client_description": "ILLINOIS TOOL WORKS INC. (IN-ZUR)",
    "count_id": 13
  },
  {
    "client_number": 6626,
    "client_description": "CASSENS TRANSPORT COMPANY",
    "count_id": 12
  },
  {
    "client_number": 16434,
    "client_description": "MV TRANSPORTATION, INC. (ACE)",
    "count_id": 12
  },
  {
    "client_number": 21499,
    "client_description": "SUPERIOR GROUP (IN-ACE)",
    "count_id": 12
  },
  {
    "client_number": 28427,
    "client_description": "MEMORIAL SLOAN-KETTERING CANCER CENTER (SI)",
    "count_id": 12
  },
  {
    "client_number": 28449,
    "client_description": "AMERICAN TIRE DISTRIBUTORS, INC. (IN-XLI)",
    "count_id": 12
  },
  {
    "client_number": 15083,
    "client_description": "DIEBOLD, INC. (03/01/02 & AFTER)",
    "count_id": 11
  },
  {
    "client_number": 15793,
    "client_description": "SJICA PROGRAM",
    "count_id": 11
  },
  {
    "client_number": 16347,
    "client_description": "COX ENTERPRISES, INC. (01/01/06 - 12/31/14)",
    "count_id": 11
  },
  {
    "client_number": 30548,
    "client_description": "THE PROSURE FUND",
    "count_id": 11
  },
  {
    "client_number": 14380,
    "client_description": "ACCIDENT FUND INSURANCE COMPANY OF AMERICA",
    "count_id": 10
  },
  {
    "client_number": 19757,
    "client_description": "BREAKTHRU BEVERAGE GROUP (IN-HAR)",
    "count_id": 10
  },
  {
    "client_number": 20675,
    "client_description": "99 CENTS ONLY STORES - WC (SI)",
    "count_id": 10
  },
  {
    "client_number": 21341,
    "client_description": "MV TRANSPORTATION, INC. (SI)",
    "count_id": 10
  },
  {
    "client_number": 17302,
    "client_description": "JELD-WEN, INC. (WC 06/01/07 & AFTER)",
    "count_id": 9
  },
  {
    "client_number": 22067,
    "client_description": "MEDLINE INDUSTRIES, INC. (IN-HAR)",
    "count_id": 9
  },
  {
    "client_number": 22138,
    "client_description": "7-ELEVEN, INC. (IN-ACE)",
    "count_id": 9
  },
  {
    "client_number": 28075,
    "client_description": "JOHNSON & JOHNSON (TPA-IN-ACE)",
    "count_id": 9
  },
  {
    "client_number": 28941,
    "client_description": "LIFE CARE SERVICES LLC (IN-ZUR)",
    "count_id": 9
  },
  {
    "client_number": 29053,
    "client_description": "LMC NON-BROADSPIRE",
    "count_id": 9
  },
  {
    "client_number": 29074,
    "client_description": "TUESDAY MORNING CORPORATION-WC (IN-SNI)",
    "count_id": 9
  },
  {
    "client_number": 29318,
    "client_description": "NATIONWIDE MUTUAL (IN-ARC)",
    "count_id": 9
  },
  {
    "client_number": 30341,
    "client_description": "SAIA INC. (SI)",
    "count_id": 9
  },
  {
    "client_number": 10430,
    "client_description": "JELD-WEN, INC. (S/I WC)",
    "count_id": 8
  },
  {
    "client_number": 19795,
    "client_description": "SCL HEALTH SYSTEM (SI)",
    "count_id": 8
  },
  {
    "client_number": 20864,
    "client_description": "ZOE HOLDING COMPANY, INC. (IN-XLI)",
    "count_id": 8
  },
  {
    "client_number": 21187,
    "client_description": "EXTENDED STAY AMERICA, INC. (IN-SNI)",
    "count_id": 8
  },
  {
    "client_number": 21381,
    "client_description": "SAKS FIFTH AVENUE (IN-SNI)",
    "count_id": 8
  },
  {
    "client_number": 22516,
    "client_description": "SWIRE COCA-COLA (IN-XLI)",
    "count_id": 8
  },
  {
    "client_number": 29394,
    "client_description": "AMERISOURCEBERGEN CORPORATION (IN-ARC)",
    "count_id": 8
  },
  {
    "client_number": 29420,
    "client_description": "RACETRAC PETROLEUM, INC. (SI - 06/01/11 & AFTER)",
    "count_id": 8
  },
  {
    "client_number": 1522,
    "client_description": "CHEVRON CORPORATION",
    "count_id": 7
  },
  {
    "client_number": 15355,
    "client_description": "COCA-COLA BOTTLERS' ASSOCIATION, THE",
    "count_id": 7
  },
  {
    "client_number": 15942,
    "client_description": "KONICA MINOLTA BUSINESS SOLUTIONS U.S.A., INC.",
    "count_id": 7
  },
  {
    "client_number": 21056,
    "client_description": "USA TRUCK, INC. - AR & LA (SI)",
    "count_id": 7
  },
  {
    "client_number": 21936,
    "client_description": "FOREVER 21, INC. (IN-ACE)",
    "count_id": 7
  },
  {
    "client_number": 21993,
    "client_description": "CHICAGO BRIDGE & IRON COMPANY (IN-XLI)",
    "count_id": 7
  },
  {
    "client_number": 22439,
    "client_description": "COWORX STAFFING SERVICES (IN-ACE)",
    "count_id": 7
  },
  {
    "client_number": 28389,
    "client_description": "HELENA CHEMICAL (IN-SJI)",
    "count_id": 7
  },
  {
    "client_number": 29383,
    "client_description": "CHICO'S FAS, INC.-WC (IN-HAR)",
    "count_id": 7
  },
  {
    "client_number": 8361,
    "client_description": "HOSPITAL SISTERS HEALTH SYSTEM",
    "count_id": 6
  },
  {
    "client_number": 15791,
    "client_description": "GANDER MOUNTAIN COMPANY (IN-AIG)",
    "count_id": 6
  },
  {
    "client_number": 15939,
    "client_description": "OLYMPUS CORPORATION OF AMERICAS",
    "count_id": 6
  },
  {
    "client_number": 18343,
    "client_description": "WESTINGHOUSE ELECTRIC COMPANY (WC 04/01/09 & AFTER",
    "count_id": 6
  },
  {
    "client_number": 20055,
    "client_description": "CELADON GROUP, INC. (IN-ACE)",
    "count_id": 6
  },
  {
    "client_number": 20225,
    "client_description": "UNITED SITE SERVICES, INC. (IN-SNI)",
    "count_id": 6
  },
  {
    "client_number": 20599,
    "client_description": "SYKES ENTERPRISES, INC. (IN-HAR)",
    "count_id": 6
  },
  {
    "client_number": 21017,
    "client_description": "ANDEAVOR (IN-ZUR)",
    "count_id": 6
  },
  {
    "client_number": 21445,
    "client_description": "RICOH USA, INC. (IN-AIG)",
    "count_id": 6
  },
  {
    "client_number": 21523,
    "client_description": "M&T BANK (IN-HAR)",
    "count_id": 6
  },
  {
    "client_number": 21725,
    "client_description": "EPLICA CORPORATE SERVICES, INC. (IN-AIG)",
    "count_id": 6
  },
  {
    "client_number": 21976,
    "client_description": "DRIVETIME AUTOMOTIVE (IN-ACE)",
    "count_id": 6
  },
  {
    "client_number": 22221,
    "client_description": "AISIN HOLDINGS OF AMERICA, INC.",
    "count_id": 6
  },
  {
    "client_number": 28335,
    "client_description": "TRINITY INDUSTRIES (IN-ACE)",
    "count_id": 6
  },
  {
    "client_number": 28360,
    "client_description": "SPIRIT AEROSYSTEMS, INC. (IN-AIG)",
    "count_id": 6
  },
  {
    "client_number": 29315,
    "client_description": "SIX FLAGS ENTERTAINMENT CORP (IN-HAR)",
    "count_id": 6
  },
  {
    "client_number": 29481,
    "client_description": "UNITED STATES STEEL CORP (SI)",
    "count_id": 6
  },
  {
    "client_number": 29593,
    "client_description": "ADECCO - WC OHIO (SI)",
    "count_id": 6
  },
  {
    "client_number": 30272,
    "client_description": "UNILEVER USA - AIG",
    "count_id": 6
  },
  {
    "client_number": 30294,
    "client_description": "HILLSBOROUGH CO SCHOOL BD (SELF-INSURED WC)",
    "count_id": 6
  },
  {
    "client_number": 30800,
    "client_description": "CLAYTON HOMES (IN-XLI)",
    "count_id": 6
  },
  {
    "client_number": 15062,
    "client_description": "GKN PLC",
    "count_id": 5
  },
  {
    "client_number": 16281,
    "client_description": "ACCIDENT FUND - NATIONAL (02)",
    "count_id": 5
  },
  {
    "client_number": 17421,
    "client_description": "PETRO HOLDINGS AKA STAR GAS (WC)",
    "count_id": 5
  },
  {
    "client_number": 19168,
    "client_description": "FMR LLC (01/01/11 & AFTER)",
    "count_id": 5
  },
  {
    "client_number": 19655,
    "client_description": "CHARLES RIVER LABS",
    "count_id": 5
  },
  {
    "client_number": 19868,
    "client_description": "ENTERPRISE PRODUCTS COMPANY (IN-AIG)",
    "count_id": 5
  },
  {
    "client_number": 19965,
    "client_description": "ADAMS AND ASSOCIATES, INC. (IN-ACE)",
    "count_id": 5
  },
  {
    "client_number": 20734,
    "client_description": "HEI HOSPITALITY, LLC (IN-CRU)",
    "count_id": 5
  },
  {
    "client_number": 21305,
    "client_description": "TOWNE HOLDINGS INC. - CARRIER-FUNDED (IN-XLI)",
    "count_id": 5
  },
  {
    "client_number": 21532,
    "client_description": "JAMES RIVER INSURANCE COMPANY (IN-JRG)",
    "count_id": 5
  },
  {
    "client_number": 22072,
    "client_description": "KINDER MORGAN, INC. (IN-ODR)",
    "count_id": 5
  },
  {
    "client_number": 22077,
    "client_description": "KEOLIS TRANSIT AMERICA, INC. (IN-ACE)",
    "count_id": 5
  },
  {
    "client_number": 22332,
    "client_description": "SANDERSON FARMS, INC. (IN-ARC)",
    "count_id": 5
  },
  {
    "client_number": 28719,
    "client_description": "PENTAIR (IN-AIG)",
    "count_id": 5
  },
  {
    "client_number": 30268,
    "client_description": "HCA HEALTHCARE",
    "count_id": 5
  },
  {
    "client_number": 31200,
    "client_description": "ZF TRW (IN-ZUR)",
    "count_id": 5
  },
  {
    "client_number": 35234,
    "client_description": "MEDIA SERVICES, INC - CA WC (IN-ARC)",
    "count_id": 5
  },
  {
    "client_number": 13627,
    "client_description": "CASSENS TRANSPORT COMPANY (INSURED)",
    "count_id": 4
  },
  {
    "client_number": 15431,
    "client_description": "SWIRE PACIFIC HOLDINGS, INC. - BOTTLING COMPANY",
    "count_id": 4
  },
  {
    "client_number": 17382,
    "client_description": "SJFM - SOMPO JAPAN FIRE & MARINE",
    "count_id": 4
  },
  {
    "client_number": 18096,
    "client_description": "CSX TRANSPORTATION, INC.",
    "count_id": 4
  },
  {
    "client_number": 18479,
    "client_description": "BRADEN PARTNERS, LP (SJA)",
    "count_id": 4
  },
  {
    "client_number": 19710,
    "client_description": "MISSION LINEN SUPPLY (IN-SNI)",
    "count_id": 4
  },
  {
    "client_number": 20007,
    "client_description": "GATE PETROLEUM COMPANY (IN-XLI)",
    "count_id": 4
  },
  {
    "client_number": 21379,
    "client_description": "LORD & TAYLOR (IN-SNI)",
    "count_id": 4
  },
  {
    "client_number": 21421,
    "client_description": "CURTIS-MARUYASU AMERICA, INC.",
    "count_id": 4
  },
  {
    "client_number": 21869,
    "client_description": "COVANCE, INC. (IN-ACE)",
    "count_id": 4
  },
  {
    "client_number": 22132,
    "client_description": "7-ELEVEN, INC. - TAKEOVER (IN-ACE)",
    "count_id": 4
  },
  {
    "client_number": 22282,
    "client_description": "HSS INC. (IN-HAR)",
    "count_id": 4
  },
  {
    "client_number": 22529,
    "client_description": "AARON'S, INC. (IN-XLI)",
    "count_id": 4
  },
  {
    "client_number": 22621,
    "client_description": "HERC RENTALS INC. - T/O (IN-CHU)",
    "count_id": 4
  },
  {
    "client_number": 27637,
    "client_description": "ZENITH INSURANCE CO (ZIC01)",
    "count_id": 4
  },
  {
    "client_number": 28377,
    "client_description": "L'OREAL USA, INC. (IN-XLI)",
    "count_id": 4
  },
  {
    "client_number": 28709,
    "client_description": "BRAND SERVICES INC. (IN-ACE)",
    "count_id": 4
  },
  {
    "client_number": 29229,
    "client_description": "AVALONBAY COMMUNITIES, INC. (IN-ACE)",
    "count_id": 4
  },
  {
    "client_number": 29314,
    "client_description": "AMEDISYS, INC. (IN-HAR)",
    "count_id": 4
  },
  {
    "client_number": 30277,
    "client_description": "SUN HEALTHCARE GROUP- AIG (AL, APD, PIP, WC) AY940",
    "count_id": 4
  },
  {
    "client_number": 30288,
    "client_description": "CAPTAIN D'S, LLC (WC - ACE USA)",
    "count_id": 4
  },
  {
    "client_number": 30682,
    "client_description": "SKILLED CARE WORKERS COMP",
    "count_id": 4
  },
  {
    "client_number": 35009,
    "client_description": "DEL FRISCO'S RESTAURANT GROUP (IN-ACE)",
    "count_id": 4
  },
  {
    "client_number": 35015,
    "client_description": "SANOFI COMPANIES (IN-ODR)",
    "count_id": 4
  },
  {
    "client_number": 35241,
    "client_description": "ZACHRY HOLDINGS, INC. - BB (IN-ZUR)",
    "count_id": 4
  },
  {
    "client_number": 7703,
    "client_description": "HYSTER-YALE GROUP, INC. (SI)",
    "count_id": 3
  },
  {
    "client_number": 9996,
    "client_description": "CRUM & FORSTER INSURANCE COMPANY",
    "count_id": 3
  },
  {
    "client_number": 11670,
    "client_description": "RELX GROUP (INSURED)",
    "count_id": 3
  },
  {
    "client_number": 14487,
    "client_description": "LAND O'LAKES, INC.",
    "count_id": 3
  },
  {
    "client_number": 14707,
    "client_description": "STERIS (INSURED WC/AL)",
    "count_id": 3
  },
  {
    "client_number": 15438,
    "client_description": "HOLIDAY COMPANIES (04/01/03 & AFTER)",
    "count_id": 3
  },
  {
    "client_number": 15741,
    "client_description": "HITACHI AUTOMOTIVE SYSTEMS AMERICAS, INC.",
    "count_id": 3
  },
  {
    "client_number": 15806,
    "client_description": "HITACHI HIGH TECHNOLOGIES AMERICA, INC.",
    "count_id": 3
  },
  {
    "client_number": 15811,
    "client_description": "NSK CORPORATION",
    "count_id": 3
  },
  {
    "client_number": 16282,
    "client_description": "ACCIDENT FUND - GENERAL (03)",
    "count_id": 3
  },
  {
    "client_number": 16527,
    "client_description": "CENTIMARK CORPORATION (05/01/06 & AFTER)",
    "count_id": 3
  },
  {
    "client_number": 18292,
    "client_description": "CAL-MAINE FOODS, INC. (03/01/09 & AFTER)",
    "count_id": 3
  },
  {
    "client_number": 18538,
    "client_description": "SUNTRUST BANKS, INC. (ARCH 08/01/09 & AFTER)",
    "count_id": 3
  },
  {
    "client_number": 18731,
    "client_description": "YOKOHAMA CORPORATION OF NORTH AMERICA",
    "count_id": 3
  },
  {
    "client_number": 19322,
    "client_description": "MOUNTAIRE CORPORATION (03/01/11 - 02/28/17)",
    "count_id": 3
  },
  {
    "client_number": 19565,
    "client_description": "AMERICAN INTERNATIONAL GROUP, INC.",
    "count_id": 3
  },
  {
    "client_number": 19587,
    "client_description": "WESTROCK COMPANY (SI)",
    "count_id": 3
  },
  {
    "client_number": 19651,
    "client_description": "JOANN - OHIO ONLY (SI)",
    "count_id": 3
  },
  {
    "client_number": 19701,
    "client_description": "P.F. CHANG'S CHINA BISTRO, INC.",
    "count_id": 3
  },
  {
    "client_number": 19728,
    "client_description": "ASTRAZENECA (IN-ODR)",
    "count_id": 3
  },
  {
    "client_number": 19976,
    "client_description": "WESTFIELD INSURANCE (IN-OHF)",
    "count_id": 3
  },
  {
    "client_number": 20237,
    "client_description": "STRYKER CORP. DBA HOWMEDICA OSTEONICS CORP. (SI)",
    "count_id": 3
  },
  {
    "client_number": 20281,
    "client_description": "LG ELECTRONICS USA, INC.",
    "count_id": 3
  },
  {
    "client_number": 20289,
    "client_description": "IGNITE RESTAURANT GROUP (IN-ZUR)",
    "count_id": 3
  },
  {
    "client_number": 20444,
    "client_description": "RADIOSHACK CORPORATION (IN-SNI)",
    "count_id": 3
  },
  {
    "client_number": 20635,
    "client_description": "NATIONAL STORES, INC. (IN-HAR)",
    "count_id": 3
  },
  {
    "client_number": 20752,
    "client_description": "RPC, INC. (IN-ACE)",
    "count_id": 3
  },
  {
    "client_number": 20844,
    "client_description": "CPS ENERGY (SI)",
    "count_id": 3
  },
  {
    "client_number": 20896,
    "client_description": "FOREVER 21, INC. (IN-AIG)",
    "count_id": 3
  },
  {
    "client_number": 20931,
    "client_description": "GRUMA CORPORATION (IN-ACE)",
    "count_id": 3
  },
  {
    "client_number": 21495,
    "client_description": "USC - TAKEOVER (SI)",
    "count_id": 3
  },
  {
    "client_number": 21853,
    "client_description": "PERDUE FARMS, INC. (IN-ZUR)",
    "count_id": 3
  },
  {
    "client_number": 21868,
    "client_description": "MUSASHI AUTO PARTS MICHIGAN, INC.",
    "count_id": 3
  },
  {
    "client_number": 21908,
    "client_description": "AXALTA COATING SYSTEMS LLC (IN-STA)",
    "count_id": 3
  },
  {
    "client_number": 22036,
    "client_description": "CENTRAL GLASS AMERICA, INC.",
    "count_id": 3
  },
  {
    "client_number": 22073,
    "client_description": "KINDER MORGAN, INC. - TAKEOVER (IN-ODR)",
    "count_id": 3
  },
  {
    "client_number": 22081,
    "client_description": "MILLENNIUM HOTELS & RESORTS (IN-ARC)",
    "count_id": 3
  },
  {
    "client_number": 22117,
    "client_description": "SHISEIDO/BARE ESCENTUALS (SJF)",
    "count_id": 3
  },
  {
    "client_number": 22323,
    "client_description": "TEMPUR SEALY INTERNATIONAL - CAPTIVE (IN-ARC)",
    "count_id": 3
  },
  {
    "client_number": 22359,
    "client_description": "PREFERRED OPERATOR GROUP, LLC (IN-SNI)",
    "count_id": 3
  },
  {
    "client_number": 22365,
    "client_description": "THE HERITAGE GROUP (IN-ZUR)",
    "count_id": 3
  },
  {
    "client_number": 22366,
    "client_description": "THE HERITAGE GROUP - T/O (IN-ZUR)",
    "count_id": 3
  },
  {
    "client_number": 22455,
    "client_description": "TEMPUR SEALY INTERNATIONAL - R&Q (IN-ARC)",
    "count_id": 3
  },
  {
    "client_number": 22761,
    "client_description": "RED ROBIN (IN-SNI)",
    "count_id": 3
  },
  {
    "client_number": 28106,
    "client_description": "E.I. DUPONT DE NEMOURS & CO. TPA SI",
    "count_id": 3
  },
  {
    "client_number": 28120,
    "client_description": "BAXTER INTERNATIONAL INC. (TPA-IN-ODR)",
    "count_id": 3
  },
  {
    "client_number": 28325,
    "client_description": "PRAXAIR, INC. (TPA-INS-ODR)",
    "count_id": 3
  },
  {
    "client_number": 28421,
    "client_description": "MONDELEZ NOVATION IN-ACE",
    "count_id": 3
  },
  {
    "client_number": 28524,
    "client_description": "INVISTA (IN-ODR)",
    "count_id": 3
  },
  {
    "client_number": 29093,
    "client_description": "UNITED ROAD SERVICES, INC. (IN-ACE)",
    "count_id": 3
  },
  {
    "client_number": 29225,
    "client_description": "MEDIA SERVICES, INC (IN-ARC)",
    "count_id": 3
  },
  {
    "client_number": 29310,
    "client_description": "PRIDE INDUSTRIES (IN-CRU)",
    "count_id": 3
  },
  {
    "client_number": 29482,
    "client_description": "UNITED STATES STEEL CORP-TAKEOVER (SI)",
    "count_id": 3
  },
  {
    "client_number": 30281,
    "client_description": "GENESIS HEALTHCARE GROUP, INC. - OH (SI)",
    "count_id": 3
  },
  {
    "client_number": 30336,
    "client_description": "SUN CHEMICAL CORPORATION - AIG",
    "count_id": 3
  },
  {
    "client_number": 31072,
    "client_description": "MARO WORKERS' COMPENSATION FUND (WC 1995)",
    "count_id": 3
  },
  {
    "client_number": 35126,
    "client_description": "RTG FURNITURE CORP. (IN-ACE)",
    "count_id": 3
  },
  {
    "client_number": 2546,
    "client_description": "SCHINDLER ENTERPRISES",
    "count_id": 2
  },
  {
    "client_number": 3958,
    "client_description": "QUEENS SURFACE CORPORATION",
    "count_id": 2
  },
  {
    "client_number": 11659,
    "client_description": "DIEBOLD, INC. SELF-INSURED PROGRAM",
    "count_id": 2
  },
  {
    "client_number": 14212,
    "client_description": "TRIBOROUGH BRIDGE AND TUNNEL AUTHORITY",
    "count_id": 2
  },
  {
    "client_number": 15418,
    "client_description": "WILLIAMS COMPANIES, INC., THE (03/01/03 & AFTER)",
    "count_id": 2
  },
  {
    "client_number": 15767,
    "client_description": "HITACHI GROUP",
    "count_id": 2
  },
  {
    "client_number": 15853,
    "client_description": "CENTIMARK CORPORATION (S/I OHIO)",
    "count_id": 2
  },
  {
    "client_number": 15950,
    "client_description": "CANON U.S.A., INC.",
    "count_id": 2
  },
  {
    "client_number": 15964,
    "client_description": "CELADON GROUP, INC.",
    "count_id": 2
  },
  {
    "client_number": 15990,
    "client_description": "PUGET SOUND ENERGY",
    "count_id": 2
  },
  {
    "client_number": 16099,
    "client_description": "MUTUAL TRADING CO., INC.",
    "count_id": 2
  },
  {
    "client_number": 16901,
    "client_description": "WESTINGHOUSE ELECTRIC COMPANY (S/I GATES TAKEOVER)",
    "count_id": 2
  },
  {
    "client_number": 17490,
    "client_description": "VULCAN MATERIALS COMPANY (FL ROCK 01/01/08 & AFTER",
    "count_id": 2
  },
  {
    "client_number": 18248,
    "client_description": "SPORTS AUTHORITY, THE (INSURED WC & AL 02/01/09-01",
    "count_id": 2
  },
  {
    "client_number": 18783,
    "client_description": "CHEVRON CORPORATION (JONES ACT 01/01/10 & AFTER)",
    "count_id": 2
  },
  {
    "client_number": 19557,
    "client_description": "ARVADA, CO, CITY OF",
    "count_id": 2
  },
  {
    "client_number": 19586,
    "client_description": "ROCKTENN COMPANY (AIG)",
    "count_id": 2
  },
  {
    "client_number": 19765,
    "client_description": "STEINWAY & SONS (IN-DIS)",
    "count_id": 2
  },
  {
    "client_number": 20031,
    "client_description": "TEREX CORPORATION (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 20081,
    "client_description": "TEREX CORPORATION (SI)",
    "count_id": 2
  },
  {
    "client_number": 20260,
    "client_description": "PSC INDUSTRIAL OUTSOURCING L.P. (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 20321,
    "client_description": "FIVE STAR QUALITY CARE, INC. (IN-AIG)",
    "count_id": 2
  },
  {
    "client_number": 20411,
    "client_description": "LENOX HILL HOSPITAL T/O (SI)",
    "count_id": 2
  },
  {
    "client_number": 20524,
    "client_description": "HSBC NORTH AMERICA (IN-AIG)",
    "count_id": 2
  },
  {
    "client_number": 20645,
    "client_description": "OKLAHOMA NATURAL GAS (SI)",
    "count_id": 2
  },
  {
    "client_number": 21055,
    "client_description": "USA TRUCK, INC. (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 21240,
    "client_description": "AW NORTH CAROLINA, INC.",
    "count_id": 2
  },
  {
    "client_number": 21298,
    "client_description": "ALCOTT HR LLC (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 21317,
    "client_description": "STAPLES, INC. - OH (SI)",
    "count_id": 2
  },
  {
    "client_number": 21400,
    "client_description": "NISSHA USA",
    "count_id": 2
  },
  {
    "client_number": 21512,
    "client_description": "GARDAWORLD SECURITY CORP - TAKEOVER (IN-AIG)",
    "count_id": 2
  },
  {
    "client_number": 21548,
    "client_description": "DAVID'S BRIDAL, INC. (IN-HAR)",
    "count_id": 2
  },
  {
    "client_number": 21764,
    "client_description": "TOYOTOMI AMERICA CORPORATION (SJA)",
    "count_id": 2
  },
  {
    "client_number": 21841,
    "client_description": "NISSIN BRAKE OHIO, INC.",
    "count_id": 2
  },
  {
    "client_number": 21860,
    "client_description": "COWORX STAFFING SERVICES (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 21935,
    "client_description": "GREAT LAKES WATER AUTHORITY (SI)",
    "count_id": 2
  },
  {
    "client_number": 21975,
    "client_description": "TS TECH AMERICAS, INC.",
    "count_id": 2
  },
  {
    "client_number": 22020,
    "client_description": "ENTERPRISE PRODUCTS COMPANY (IN-ODR)",
    "count_id": 2
  },
  {
    "client_number": 22130,
    "client_description": "ARCHDIOCESE OF GALVESTON/HOUSTON (IN-CMI)",
    "count_id": 2
  },
  {
    "client_number": 22150,
    "client_description": "TORRID, LLC (IN-CHU)",
    "count_id": 2
  },
  {
    "client_number": 22218,
    "client_description": "CLARKWESTERN DIETRICH BUILDING SYSTEMS, LLC",
    "count_id": 2
  },
  {
    "client_number": 22266,
    "client_description": "RESTAURANT TECHNOLOGIES, INC. (IN-HAR)",
    "count_id": 2
  },
  {
    "client_number": 22294,
    "client_description": "FORMAN MILLS, INC. (IN-STA)",
    "count_id": 2
  },
  {
    "client_number": 22338,
    "client_description": "ACE PARKING MANAGEMENT, INC. - WC (IN-CHU)",
    "count_id": 2
  },
  {
    "client_number": 22355,
    "client_description": "GOLDEN CORRAL CORPORATION (IN-SNI)",
    "count_id": 2
  },
  {
    "client_number": 22360,
    "client_description": "PREFERRED OPERATOR GROUP, LLC - T/O (IN-DIS)",
    "count_id": 2
  },
  {
    "client_number": 22444,
    "client_description": "BEMIS COMPANY, INC. (IN-LMI)",
    "count_id": 2
  },
  {
    "client_number": 22505,
    "client_description": "STEW LEONARDS HOLDINGS, LLC (IN-ARC)",
    "count_id": 2
  },
  {
    "client_number": 22652,
    "client_description": "BENIHANA INC. (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 22683,
    "client_description": "TRANSDIGM GROUP INC. (IN-HAR)",
    "count_id": 2
  },
  {
    "client_number": 22749,
    "client_description": "USR PARENT, INC. - WC (IN-CHU)",
    "count_id": 2
  },
  {
    "client_number": 26319,
    "client_description": "FPL-FLORIDA POWER & LIGHT (SI)",
    "count_id": 2
  },
  {
    "client_number": 26350,
    "client_description": "KALEIDA HEALTH (TPA-INS-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 27798,
    "client_description": "LEGGETT & PLATT (DIS04)",
    "count_id": 2
  },
  {
    "client_number": 28322,
    "client_description": "RAIL MANAGEMENT SERVICES, LLC (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 28327,
    "client_description": "FLINT GROUP (IN-DIS)",
    "count_id": 2
  },
  {
    "client_number": 28445,
    "client_description": "ROCKWELL AUTOMATION (SI)",
    "count_id": 2
  },
  {
    "client_number": 28484,
    "client_description": "E.I. DUPONT DE NEMOURS & CO. (IN-ODR)",
    "count_id": 2
  },
  {
    "client_number": 28509,
    "client_description": "VWR INTERNATIONAL, INC. (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 28576,
    "client_description": "FLINT HILLS RESOURCES, LP (IN-ODR)",
    "count_id": 2
  },
  {
    "client_number": 28651,
    "client_description": "GLAXOSMITHKLINE (IN-ODR)",
    "count_id": 2
  },
  {
    "client_number": 28682,
    "client_description": "TULANE UNIVERSITY (SI)",
    "count_id": 2
  },
  {
    "client_number": 28759,
    "client_description": "SMT LINES (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 29244,
    "client_description": "A.J. RICHARD & SONS, INC. (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 29270,
    "client_description": "HEALTH CARE SERVICE CORPORATION (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 29279,
    "client_description": "LEXINGTON MEDICAL CENTER (SI)",
    "count_id": 2
  },
  {
    "client_number": 29404,
    "client_description": "CH2M - WC (IN-XLI)",
    "count_id": 2
  },
  {
    "client_number": 29598,
    "client_description": "SEAGATE TECHNOLOGY LLC (IN-ZUR)",
    "count_id": 2
  },
  {
    "client_number": 29627,
    "client_description": "LUMBERMENS MUTUAL CASUALTY-BHCT CLAIMS",
    "count_id": 2
  },
  {
    "client_number": 29840,
    "client_description": "ORTHO-CLINICAL DIAGNOSTICS (IN-ACE)",
    "count_id": 2
  },
  {
    "client_number": 29987,
    "client_description": "MOLEX, INC. (IN-ODR)",
    "count_id": 2
  },
  {
    "client_number": 30558,
    "client_description": "MICHIGAN INDEPENDENT COLLEGES & UNIVERSITIES",
    "count_id": 2
  },
  {
    "client_number": 30573,
    "client_description": "COATS NORTH AMERICA CONSOLIDATED INC.",
    "count_id": 2
  },
  {
    "client_number": 31035,
    "client_description": "JOHN T. MATHER MEMORIAL HOSPITAL",
    "count_id": 2
  },
  {
    "client_number": 31179,
    "client_description": "MARSDEN HOLDING LLC (IN-XLI)",
    "count_id": 2
  },
  {
    "client_number": 35068,
    "client_description": "E.I. DUPONT #28106 TO CHEMOURS (SI)",
    "count_id": 2
  },
  {
    "client_number": 35129,
    "client_description": "SCOTTS COMPANY - SLS (IN-AIG)",
    "count_id": 2
  },
  {
    "client_number": 1568,
    "client_description": "CITICORP/CITIBANK, N.A.",
    "count_id": 1
  },
  {
    "client_number": 2278,
    "client_description": "FMC CORPORATION (INSURED W/C 10/1/89 - 09/30/98)",
    "count_id": 1
  },
  {
    "client_number": 2856,
    "client_description": "GAF CORPORATION/INTERNATIONAL SPECIALTY PRODUCTS",
    "count_id": 1
  },
  {
    "client_number": 2892,
    "client_description": "GENCON INSURANCE COMPANY OF VERMONT",
    "count_id": 1
  },
  {
    "client_number": 2933,
    "client_description": "SCHINDLER ENTERPRISES (S/I WC)",
    "count_id": 1
  },
  {
    "client_number": 3519,
    "client_description": "ADVENTIST HEALTH SYSTEM/WEST",
    "count_id": 1
  },
  {
    "client_number": 4766,
    "client_description": "CEMEX MATERIALS (SELF-INSURED)",
    "count_id": 1
  },
  {
    "client_number": 5053,
    "client_description": "E. & J. GALLO WINERY (WC ONLY)",
    "count_id": 1
  },
  {
    "client_number": 6861,
    "client_description": "AMAX INC. (INSURED WC/LIABILITY)",
    "count_id": 1
  },
  {
    "client_number": 8565,
    "client_description": "PANTRY PRIDE ENTERPRISES, INC. (10/01/83-07/31/86)",
    "count_id": 1
  },
  {
    "client_number": 9071,
    "client_description": "MARGATE, FL, CITY OF",
    "count_id": 1
  },
  {
    "client_number": 11048,
    "client_description": "PERDUE FARMS INC. (S/I 01/01/81 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 11650,
    "client_description": "RELX GROUP (OHIO - WC)",
    "count_id": 1
  },
  {
    "client_number": 13097,
    "client_description": "SOUTHWIRE COMPANY (INSURED)",
    "count_id": 1
  },
  {
    "client_number": 13098,
    "client_description": "SOUTHWIRE COMPANY (SELF-INSURED WC)",
    "count_id": 1
  },
  {
    "client_number": 13139,
    "client_description": "MANHEIM AUCTIONS, INC. (WC 01/01/99 - 12/31/14)",
    "count_id": 1
  },
  {
    "client_number": 14234,
    "client_description": "TRIBUNE COMPANY",
    "count_id": 1
  },
  {
    "client_number": 14430,
    "client_description": "DOW CHEMICAL COMPANY, THE (INS. WC)(12/01/00-11/30",
    "count_id": 1
  },
  {
    "client_number": 14621,
    "client_description": "WILLIAMS COMPANIES, INC., THE (03/01/01 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 14635,
    "client_description": "TRIBUNE COMPANY (03/01/01 - 2/28/02)",
    "count_id": 1
  },
  {
    "client_number": 14816,
    "client_description": "COST PLUS WORLD MARKET (WC & AL)",
    "count_id": 1
  },
  {
    "client_number": 15098,
    "client_description": "TRANSAMERICA CORPORATION (AEGON WC)",
    "count_id": 1
  },
  {
    "client_number": 15720,
    "client_description": "HCR MANORCARE, INC. (02/01/04 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 15721,
    "client_description": "WISMETTAC ASIAN FOODS",
    "count_id": 1
  },
  {
    "client_number": 15945,
    "client_description": "SHARP MANUFACTURING COMPANY OF AMERICA",
    "count_id": 1
  },
  {
    "client_number": 15949,
    "client_description": "JSP INTERNATIONAL GROUP LTD",
    "count_id": 1
  },
  {
    "client_number": 15976,
    "client_description": "BELDEN INC.",
    "count_id": 1
  },
  {
    "client_number": 16007,
    "client_description": "YKK CORPORATION OF AMERICA",
    "count_id": 1
  },
  {
    "client_number": 16101,
    "client_description": "PRAIRIE FARMS DAIRY, INC. (04/01/05 - 03/31/14)",
    "count_id": 1
  },
  {
    "client_number": 16146,
    "client_description": "COCA-COLA BOTTLERS' ASSOCIATION, THE (USF&G)",
    "count_id": 1
  },
  {
    "client_number": 16173,
    "client_description": "CINEMARK (06/30/05 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 16190,
    "client_description": "ACE USA (ESIS - ID, MT, OR, CO, HI, NV, AK, DE)",
    "count_id": 1
  },
  {
    "client_number": 16300,
    "client_description": "COCA-COLA BOTTLING OF NORTHERN NEW ENGLAND, INC.",
    "count_id": 1
  },
  {
    "client_number": 16331,
    "client_description": "DAIOHS USA, INC.",
    "count_id": 1
  },
  {
    "client_number": 16348,
    "client_description": "COX ENTERPRISES, INC. (S/I 01/01/06 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 16361,
    "client_description": "PERDUE FARMS INC. (01/01/06 - 12/31/15)",
    "count_id": 1
  },
  {
    "client_number": 16367,
    "client_description": "CARAUSTAR INDUSTRIES, INC. (01/01/06 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 16433,
    "client_description": "MV TRANSPORTATION, INC. (DED LIABILITY)",
    "count_id": 1
  },
  {
    "client_number": 16636,
    "client_description": "DAIICHI SANKYO, INC.",
    "count_id": 1
  },
  {
    "client_number": 16894,
    "client_description": "MPS GROUP, INC. (CNA TAKEOVER CLAIMS 03/01/99-02/2",
    "count_id": 1
  },
  {
    "client_number": 16940,
    "client_description": "GOLDEN CORRAL CORPORATION (INSURED WC 11/01/06 - 1",
    "count_id": 1
  },
  {
    "client_number": 16960,
    "client_description": "CISCO SYSTEMS, INC.",
    "count_id": 1
  },
  {
    "client_number": 17405,
    "client_description": "GORTON'S INC. - WC PROGRAM",
    "count_id": 1
  },
  {
    "client_number": 17485,
    "client_description": "CARLSON, INC. (USA 07/01/05 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 17729,
    "client_description": "STERIS (OHIO PROGRAM)",
    "count_id": 1
  },
  {
    "client_number": 18386,
    "client_description": "WARD MANUFACTURING, LLC",
    "count_id": 1
  },
  {
    "client_number": 18721,
    "client_description": "KAISER ALUMINUM (INSURED WC)",
    "count_id": 1
  },
  {
    "client_number": 18730,
    "client_description": "SCHINDLER ELEVATOR CORPORATION (WC ZURICH FUNDED)",
    "count_id": 1
  },
  {
    "client_number": 19150,
    "client_description": "PCS ADMINISTRATION (USA) INC. (01/01/11 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 19340,
    "client_description": "ADVANCE AMERICA, CASH ADVANCE CTR, INC (CLNT FUND)",
    "count_id": 1
  },
  {
    "client_number": 19378,
    "client_description": "CROWLEY HOLDINGS, INC. (04/01/11 - 03/31/17)",
    "count_id": 1
  },
  {
    "client_number": 19529,
    "client_description": "GENUINE PARTS COMPANY (09/01/11 & AFTER)",
    "count_id": 1
  },
  {
    "client_number": 19703,
    "client_description": "HYUNDAI MOTOR AMERICA",
    "count_id": 1
  },
  {
    "client_number": 19704,
    "client_description": "MARY WASHINGTON HEALTHCARE",
    "count_id": 1
  },
  {
    "client_number": 19736,
    "client_description": "ASTRAZENECA - TAKEOVER (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 19762,
    "client_description": "SPORTS AUTHORITY, THE (WC)",
    "count_id": 1
  },
  {
    "client_number": 19932,
    "client_description": "DMG MORI SEIKI AMERICAS HOLDING CORPORATION (SJF)",
    "count_id": 1
  },
  {
    "client_number": 19974,
    "client_description": "WESTFIELD CORPORATE - OH ONLY (SI)",
    "count_id": 1
  },
  {
    "client_number": 20077,
    "client_description": "BEMIS COMPANY, INC. (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 20110,
    "client_description": "WHITE CASTLE SYSTEM, INC. (SI)",
    "count_id": 1
  },
  {
    "client_number": 20251,
    "client_description": "AMERICAN OUTDOOR BRANDS CORP (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 20259,
    "client_description": "AMERICAN OUTDOOR BRANDS CORP-T/O SI EXCESS",
    "count_id": 1
  },
  {
    "client_number": 20304,
    "client_description": "C.H. ROBINSON WORLDWIDE, INC. (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 20329,
    "client_description": "MIWD HOLDING COMPANY, LLC (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 20441,
    "client_description": "CITY FURNITURE, INC. (IN-HAR)",
    "count_id": 1
  },
  {
    "client_number": 20445,
    "client_description": "GLORY GLOBAL SOLUTIONS",
    "count_id": 1
  },
  {
    "client_number": 20602,
    "client_description": "99 CENTS ONLY STORES - GL (SI)",
    "count_id": 1
  },
  {
    "client_number": 20805,
    "client_description": "HOUSING PARTNERSHIP INSURANCE EXCHANGE (IN-DIS)",
    "count_id": 1
  },
  {
    "client_number": 20853,
    "client_description": "THE PANTRY (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 20902,
    "client_description": "ANN INC. (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 20913,
    "client_description": "U.S. BEEF CORPORATION (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 20984,
    "client_description": "M&T BANK (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 20997,
    "client_description": "SIGNODE INDUSTRIAL GROUP, LLC (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 21083,
    "client_description": "LUTHERAN SENIOR SERVICES LLC (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 21105,
    "client_description": "WCA WASTE CORPORATION (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 21117,
    "client_description": "UNICARRIERS AMERICAS CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 21119,
    "client_description": "NATCHITOCHES PARISH SCHOOL BOARD (SI)",
    "count_id": 1
  },
  {
    "client_number": 21131,
    "client_description": "JOY GLOBAL INC. - TAKEOVER (SI)",
    "count_id": 1
  },
  {
    "client_number": 21202,
    "client_description": "SAKS FIFTH AVENUE (SI)",
    "count_id": 1
  },
  {
    "client_number": 21203,
    "client_description": "SAKS FIFTH AVENUE - TAKEOVER (IN-ARC)",
    "count_id": 1
  },
  {
    "client_number": 21204,
    "client_description": "SAKS FIFTH AVENUE - TAKEOVER (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 21246,
    "client_description": "FOREVER 21, INC. (SI)",
    "count_id": 1
  },
  {
    "client_number": 21271,
    "client_description": "JOY GLOBAL INC. (SI)",
    "count_id": 1
  },
  {
    "client_number": 21294,
    "client_description": "ALTRA INDUSTRIAL MOTION CORP. (IN-DIS)",
    "count_id": 1
  },
  {
    "client_number": 21342,
    "client_description": "HONEYBEE FOODS CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 21357,
    "client_description": "YOSHINOYA AMERICA, INC.",
    "count_id": 1
  },
  {
    "client_number": 21362,
    "client_description": "EPSON AMERICA, INC.",
    "count_id": 1
  },
  {
    "client_number": 21411,
    "client_description": "SAMSUNG FIRE & MARINE INSURANCE CO. (FAIRVIEW)",
    "count_id": 1
  },
  {
    "client_number": 21419,
    "client_description": "AMERICAN DENTAL PARTNERS, INC. (IN-ARC)",
    "count_id": 1
  },
  {
    "client_number": 21429,
    "client_description": "MIZKAN AMERICA, INC.",
    "count_id": 1
  },
  {
    "client_number": 21443,
    "client_description": "MILLENNIUM HOTELS & RESORTS (AIG-EXC)",
    "count_id": 1
  },
  {
    "client_number": 21448,
    "client_description": "UBER (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 21455,
    "client_description": "MARY'S GONE CRACKERS, INC.",
    "count_id": 1
  },
  {
    "client_number": 21467,
    "client_description": "NISSIN FOODS (USA) COMPANY, INC.",
    "count_id": 1
  },
  {
    "client_number": 21497,
    "client_description": "TOSHIBA AMERICA ENERGY SYSTEMS CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 21535,
    "client_description": "MURATA MACHINERY USA HOLDINGS, INC. (SJA)",
    "count_id": 1
  },
  {
    "client_number": 21540,
    "client_description": "MATRIX SERVICE COMPANY - WC & AL (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 21562,
    "client_description": "STANDEX INTERNATIONAL CORPORATION (IN-DIS)",
    "count_id": 1
  },
  {
    "client_number": 21647,
    "client_description": "CREATIVE RISK SOLUTIONS - APACHE HOSE (IN-HAR)",
    "count_id": 1
  },
  {
    "client_number": 21686,
    "client_description": "NIPPONKOA (TAKEOVER CLAIMS)",
    "count_id": 1
  },
  {
    "client_number": 21688,
    "client_description": "HUNT CONSOLIDATED, INC. (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 21696,
    "client_description": "CREATIVE RISK SOLUTIONS - KEY MECHANICAL (IN-HAR)",
    "count_id": 1
  },
  {
    "client_number": 21714,
    "client_description": "WESTROCK COMPANY (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 21726,
    "client_description": "EPLICA CORPORATE SERVICES, INC. - T/O (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 21743,
    "client_description": "NHK INTERNATIONAL CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 21848,
    "client_description": "FINISHMASTER, INC. (IN-ARC)",
    "count_id": 1
  },
  {
    "client_number": 21923,
    "client_description": "MILLER MILLING COMPANY",
    "count_id": 1
  },
  {
    "client_number": 21927,
    "client_description": "STAPLES, INC. - WC TAKEOVER (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 21942,
    "client_description": "ODOM CORPORATION - WC (IN-DIS)",
    "count_id": 1
  },
  {
    "client_number": 21973,
    "client_description": "C. R. BARD, INC. (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 22044,
    "client_description": "TOSHIBA GLOBAL COMMERCE SOLUTIONS, INC.",
    "count_id": 1
  },
  {
    "client_number": 22095,
    "client_description": "SANDERSON FARMS, INC. - T/O (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 22113,
    "client_description": "KIKKOMAN FOODS, INC. (SJA)",
    "count_id": 1
  },
  {
    "client_number": 22118,
    "client_description": "TOSHIBA AMERICA, INC.",
    "count_id": 1
  },
  {
    "client_number": 22124,
    "client_description": "DON QUIJOTE/MARUKAI CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 22134,
    "client_description": "7-ELEVEN, INC. - TAKEOVER (SI)",
    "count_id": 1
  },
  {
    "client_number": 22140,
    "client_description": "7-ELEVEN, INC. (SI)",
    "count_id": 1
  },
  {
    "client_number": 22151,
    "client_description": "HOT TOPIC, INC. (IN-CHU)",
    "count_id": 1
  },
  {
    "client_number": 22240,
    "client_description": "CABOT CORPORATION (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 22245,
    "client_description": "JCI - NON-SHELL AUTO CAPTIVE (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 22288,
    "client_description": "HSS INC. - TAKEOVER (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 22303,
    "client_description": "HOYA HOLDINGS, INC. (SJA)",
    "count_id": 1
  },
  {
    "client_number": 22313,
    "client_description": "HSS INC. - LATE RPT (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 22329,
    "client_description": "ROPER CORPORATION - T/O (SI)",
    "count_id": 1
  },
  {
    "client_number": 22399,
    "client_description": "IMASEN BUCYRUS TECHNOLOGY, INC. (SAIC)",
    "count_id": 1
  },
  {
    "client_number": 22414,
    "client_description": "JTEKT NORTH AMERICA CORPORATION",
    "count_id": 1
  },
  {
    "client_number": 22421,
    "client_description": "SUSIECAKES HOLDINGS INC. (SJF)",
    "count_id": 1
  },
  {
    "client_number": 22432,
    "client_description": "LIMBACH FACILITY SERVICES, LLC - WC, GL (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 22446,
    "client_description": "AJINOMOTO NORTH AMERICA, INC.",
    "count_id": 1
  },
  {
    "client_number": 22453,
    "client_description": "SGL CARBON, LLC",
    "count_id": 1
  },
  {
    "client_number": 22473,
    "client_description": "EMPIRE MERCHANTS NORTH (IN-EVE)",
    "count_id": 1
  },
  {
    "client_number": 22494,
    "client_description": "SRS DISTRIBUTION - AL & WC (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 22507,
    "client_description": "MOUNTAIRE CORPORATION (IN-LMI)",
    "count_id": 1
  },
  {
    "client_number": 22513,
    "client_description": "INTUIT, INC. (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 22522,
    "client_description": "SELECTIVE INSURANCE - TAKEOVER EE CLAIMS (IN-SEL)",
    "count_id": 1
  },
  {
    "client_number": 22523,
    "client_description": "CATHAY PACIFIC AIRWAYS, LIMITED (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 22528,
    "client_description": "SELECTIVE INS.-TAKEOVER OUT OF FOOTPRINT (IN-SEL)",
    "count_id": 1
  },
  {
    "client_number": 22616,
    "client_description": "TRANSPORT AMERICA (SI)",
    "count_id": 1
  },
  {
    "client_number": 22643,
    "client_description": "SIGN RESOURCE, INC.",
    "count_id": 1
  },
  {
    "client_number": 22662,
    "client_description": "PK MANAGEMENT, LLC",
    "count_id": 1
  },
  {
    "client_number": 22671,
    "client_description": "HITACHI KOKI U.S.A., LTD.",
    "count_id": 1
  },
  {
    "client_number": 22785,
    "client_description": "SAMSUNG FIRE & MARINE CO.-AFFILIATE CLAIMS(IN-SFM)",
    "count_id": 1
  },
  {
    "client_number": 25270,
    "client_description": "NORTHWEST AIRLINES, INC.",
    "count_id": 1
  },
  {
    "client_number": 25285,
    "client_description": "XEROX SI",
    "count_id": 1
  },
  {
    "client_number": 25636,
    "client_description": "TRANS WORLD AIRLINES, INC",
    "count_id": 1
  },
  {
    "client_number": 25842,
    "client_description": "TEXTRON INC.",
    "count_id": 1
  },
  {
    "client_number": 25870,
    "client_description": "CHARMER INDUSTRIES, INC.",
    "count_id": 1
  },
  {
    "client_number": 26557,
    "client_description": "AURORA, IL, CITY OF",
    "count_id": 1
  },
  {
    "client_number": 27400,
    "client_description": "LENNAR CORPORATION (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 27667,
    "client_description": "OKLAHOMA STATE UNIVERSITY",
    "count_id": 1
  },
  {
    "client_number": 28055,
    "client_description": "APPLE METRO, INC. (TPA-IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 28102,
    "client_description": "JOHNSON & JOHNSON (TPA-SI)",
    "count_id": 1
  },
  {
    "client_number": 28115,
    "client_description": "GOVERNMENT EMPLOYEES INS CO (TPA-ZURICH)",
    "count_id": 1
  },
  {
    "client_number": 28125,
    "client_description": "BAXTER INTERNATIONAL INC. (TPA-SI)",
    "count_id": 1
  },
  {
    "client_number": 28126,
    "client_description": "SANOFI-AVENTIS U.S. LLC (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 28269,
    "client_description": "AVERY DENNISON (SI)",
    "count_id": 1
  },
  {
    "client_number": 28338,
    "client_description": "HARNISH GROUP INC.",
    "count_id": 1
  },
  {
    "client_number": 28380,
    "client_description": "SSA COOPER LLC (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28383,
    "client_description": "A.J. RICHARD & SONS (IN-XLI)",
    "count_id": 1
  },
  {
    "client_number": 28424,
    "client_description": "PHILIP MORRIS USA INC NOVATION (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28431,
    "client_description": "SEARS MERCHANDISE - NOVATION (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28443,
    "client_description": "ASSOCIATED MATERIALS INC (XLI-EXC)",
    "count_id": 1
  },
  {
    "client_number": 28481,
    "client_description": "NEXTERA ENERGY DUANE ARNOLD (SI)",
    "count_id": 1
  },
  {
    "client_number": 28522,
    "client_description": "KOCH INDUSTRIES, INC. (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 28547,
    "client_description": "ALBERTO CULVER COMPANY (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28592,
    "client_description": "KOCH INDUSTRIES, INC. - TAKEOVER (SI)",
    "count_id": 1
  },
  {
    "client_number": 28713,
    "client_description": "KATE SPADE & COMPANY (IN-HAR)",
    "count_id": 1
  },
  {
    "client_number": 28722,
    "client_description": "FRUIT OF THE LOOM (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28780,
    "client_description": "CONOCO - DUPONT PRE 10/1/98 (SELF-INSD)",
    "count_id": 1
  },
  {
    "client_number": 28783,
    "client_description": "JOHNSON & JOHNSON - NOVATION (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 28795,
    "client_description": "BENETO INC. (AIG-EXC)",
    "count_id": 1
  },
  {
    "client_number": 28971,
    "client_description": "ASCEND PERFORMANCE MATERIALS HOLDINGS (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 28977,
    "client_description": "NORTH AMERICAN FAMILY - CAPTIVE (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 29036,
    "client_description": "SCHERING-PLOUGH CORPORATION (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 29094,
    "client_description": "UNITED ROAD SERVICES, INC. (SI)",
    "count_id": 1
  },
  {
    "client_number": 29097,
    "client_description": "RACETRAC PETROLEUM, INC./RACEWAY (SI)",
    "count_id": 1
  },
  {
    "client_number": 29115,
    "client_description": "RTG FURNITURE CORP-CLIENT FUNDED (IN-CNA)",
    "count_id": 1
  },
  {
    "client_number": 29258,
    "client_description": "JOHNSON & JOHNSON (SPECIAL SI)",
    "count_id": 1
  },
  {
    "client_number": 29271,
    "client_description": "HEALTH CARE SERVICE CORPORATION (SI)",
    "count_id": 1
  },
  {
    "client_number": 29292,
    "client_description": "MERCK & CO., INC. (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 29299,
    "client_description": "NRG ENERGY, INC. - CAPTIVE (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 29326,
    "client_description": "CRETEX COMPANIES, INC. (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 29337,
    "client_description": "SCOTTS COMPANY LLC, THE (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 29421,
    "client_description": "RACETRAC PETROLEUM, INC./RACEWAY (IN-ARC)",
    "count_id": 1
  },
  {
    "client_number": 29447,
    "client_description": "FUGATE ENTERPRISES (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 29452,
    "client_description": "HORSEMEN'S WC INS. TRUST (SI)",
    "count_id": 1
  },
  {
    "client_number": 29470,
    "client_description": "ILLINOIS TOOL WORKS INC.-NEW/LATE RPT (SI) OH",
    "count_id": 1
  },
  {
    "client_number": 29476,
    "client_description": "ILLINOIS TOOL WORKS INC.-T/O (SI)",
    "count_id": 1
  },
  {
    "client_number": 29533,
    "client_description": "PEOPLE 2.0 (IN-AIG)",
    "count_id": 1
  },
  {
    "client_number": 29538,
    "client_description": "JV INDUSTRIAL COMPANIES (ZUR-EXC)",
    "count_id": 1
  },
  {
    "client_number": 29542,
    "client_description": "THE CHILDREN'S PLACE (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 29555,
    "client_description": "AVERY DENNISON (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 29611,
    "client_description": "ASSOCIATED MATERIALS, INC. (IN-ZUR)",
    "count_id": 1
  },
  {
    "client_number": 29813,
    "client_description": "RYDER SERVICES CORPORATION (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 29816,
    "client_description": "AMERICAN WOODMARK CORP (IN-QBE)",
    "count_id": 1
  },
  {
    "client_number": 29818,
    "client_description": "UNITED LAUNCH ALLIANCE, LLC (AIG-EXC)",
    "count_id": 1
  },
  {
    "client_number": 29845,
    "client_description": "KALEIDA HEALTH (ZURICH FUNDED)",
    "count_id": 1
  },
  {
    "client_number": 29846,
    "client_description": "NORTH AMERICAN FAMILY INSTITUTE (IN-CRU)",
    "count_id": 1
  },
  {
    "client_number": 29991,
    "client_description": "UNITED LAUNCH ALLIANCE, LLC (IN-STA)",
    "count_id": 1
  },
  {
    "client_number": 30266,
    "client_description": "HCA HEALTHCARE (NEVADA)",
    "count_id": 1
  },
  {
    "client_number": 30276,
    "client_description": "SUN HEALTHCARE GROUP-AIG (AL, APD, WC) CLIENT FUND",
    "count_id": 1
  },
  {
    "client_number": 30330,
    "client_description": "THE WONDERFUL COMPANY - SI",
    "count_id": 1
  },
  {
    "client_number": 30356,
    "client_description": "SAIA INC. (WC - DISCOVER RE)",
    "count_id": 1
  },
  {
    "client_number": 30557,
    "client_description": "ATLANTIC HEALTH SYSTEM, INC. (WC - SI)",
    "count_id": 1
  },
  {
    "client_number": 30621,
    "client_description": "ANN ARBOR SCHOOLS",
    "count_id": 1
  },
  {
    "client_number": 30681,
    "client_description": "WARREN CONSOLIDATED SCHOOLS",
    "count_id": 1
  },
  {
    "client_number": 30702,
    "client_description": "WYANDOTTE, CITY OF (GENERAL SERVICES)",
    "count_id": 1
  },
  {
    "client_number": 31069,
    "client_description": "FEDERAL SIGNAL CORP. - AIG (2677546AX847)",
    "count_id": 1
  },
  {
    "client_number": 31141,
    "client_description": "UNISYS CORPORATION (EML, AL, GL, PD, WC)",
    "count_id": 1
  },
  {
    "client_number": 31175,
    "client_description": "THE WONDERFUL COMPANY (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 35064,
    "client_description": "CHEMOURS COMPANY (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 35070,
    "client_description": "E.I. DUPONT #28484 TO CHEMOURS (IN-ODR)",
    "count_id": 1
  },
  {
    "client_number": 35081,
    "client_description": "AVALONBAY COMMUNITIES, INC. (ACE-EXC)",
    "count_id": 1
  },
  {
    "client_number": 35111,
    "client_description": "COST PLUS, INC. - LIABILITY (IN-SNI)",
    "count_id": 1
  },
  {
    "client_number": 35128,
    "client_description": "S E INDEPENDENT DELIVERY (IN-ACE)",
    "count_id": 1
  },
  {
    "client_number": 35181,
    "client_description": "NEXTERA ENERGY RESOURCES, LLC (IN-EVE)",
    "count_id": 1
  },
  {
    "client_number": 35203,
    "client_description": "AMERICAN WOODMARK CORP (IN-HAR)",
    "count_id": 1
  }
]
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
