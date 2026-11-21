/**
 * Srinidhi Enterprises — Pinned Scroll Engine & Bilingual Interactive Features
 * Dual-Language: English & ಕನ್ನಡ (Full 100% Kannada Mode)
 * Zero-budget, zero-lag, vanilla JS implementation
 */

(function () {
  'use strict';

  // --- Translation Dictionary (English & 100% Complete Natural Kannada) ---
  const i18nData = {
    en: {
      brand_name: 'SRINIDHI',
      brand_sub: 'ENTERPRISES',
      nav_systems: 'SYSTEMS',
      nav_tech: 'TECHNOLOGY',
      nav_calc: 'DRIP CALCULATOR',
      nav_products: 'PRODUCTS',
      nav_contact: 'CONTACT',
      nav_cta: 'GET IN TOUCH',
      
      hero_chip: 'SRINIDHI ENTERPRISES · BETHAMANGALA',
      hero_h1_l1: 'Precision Irrigation',
      hero_h1_l2: 'For Every Single Drop',
      hero_badge: 'ಹನಿ ನೀರಾವರಿ ಪದ್ಧತಿಯ ಎಲ್ಲಾ ಗುಣಮಟ್ಟದ ಉಪಕರಣಗಳು ದೊರೆಯುತ್ತವೆ',
      
      hud_chip: 'BETHAMANGALA HUB',
      hud_coords: 'LAT  13.0039° N\nLON  78.3242° E\nELEV 830 M · KOLAR',
      hero_caption: 'AUTHORIZED FINOLEX PIPES & SUJAY FITTINGS.<br>KAVERI & NANDI PLATINUM DRIP SYSTEMS.<br>ENGINEERED FOR RESILIENT AGRICULTURE.',
      scroll_hint: 'SCROLL TO EXPLORE',

      vision_chip: 'LIVE AGRO-TELEMETRY',
      vision_h2_l1: 'Water Optimization',
      vision_h2_l2: 'Meets Local Ground Truth',
      vision_p: 'Direct micro-climate data powered by Open-Meteo for farmers across Bethamangala & Kolar district.',
      wt_title: 'BETHAMANGALA FIELD CONDITIONS',
      wt_live: 'LIVE API',
      wt_label_temp: 'TEMPERATURE',
      wt_label_hum: 'HUMIDITY',
      wt_label_et: 'SOIL EVAPOTRANSPIRATION',
      wt_label_adv: 'IRRIGATION ADVISORY',

      acct_para: 'Engineered micro-irrigation reduces water waste by up to 60%, directing nutrients right to the root zone with zero runoff.',
      hs1_title: 'Kaveri & Nandi Drip Laterals',
      hs1_spec: '16mm Inline / Online Emitters · UV Stabilized',
      hs2_title: 'Finolex PVC Pressure Pipes',
      hs2_spec: 'Class 2/3 Borewell Delivery · Leakproof Sujay Fittings',
      hs3_title: 'Hydrocyclone & Screen Filters',
      hs3_spec: 'Sand & Silt Extraction · Stops Emitter Clogging',
      hs4_title: 'Lakshmi Mulch Film',
      hs4_spec: 'Silver-Black 25 Micron · Weed & Evaporation Control',

      lime_tag: '✕ SUPPLY STATION #07',
      station_h3: 'Commercial Reliability for Every Farmer',
      sc_head: 'Water Conservation Efficiency',
      sc_sub: 'Bethamangala Benchmark · 12 Mo',
      sc_badge: '+55% SAVINGS',
      sc_foot: 'FLOW STABILITY: OPTIMAL 2.5 BAR',

      feat_1: 'Finolex PVC & CPVC Authorized Lines',
      feat_2: 'Kaveri & Nandi Drip Irrigation Laterals',
      feat_3: 'Sujay Precision Valves & Compression Fittings',
      feat_4: 'Sand, Hydrocyclone & Disc Filter Stations',
      feat_5: 'Lakshmi Agri Mulch & Heavy Duty Suction Pipes',

      sol_chip: 'INVENTORY & SOLUTIONS',
      sol_title: 'Quality Equipment For Lasting Farm Yields',
      sol_desc: 'From single-acre vegetable plots to multi-acre estates, Srinidhi Enterprises provides the exact pipes, drippers, filters, and fittings required for flawless water distribution.',

      card1_tag: '[DRIP & SPRINKLERS]',
      card1_title: 'Kaveri & Nandi Drip Systems',
      card1_desc: 'Clog-resistant emitters, cylindrical inline drippers, and micro-sprinklers designed for uniform discharge even on sloping terrain.',

      card2_tag: '[FILTRATION & PUMPS]',
      card2_title: 'Hydrocyclone & Disc Filtration',
      card2_desc: 'Heavy-duty sand separators and screen filters that protect micro-emitters from borewell particles, extending drip line life.',

      card3_tag: '[MULCH & CROPS]',
      card3_title: 'Lakshmi Mulch & PVC Lines',
      card3_desc: 'High-grade agricultural mulch film, Finolex rigid PVC delivery pipes, ribbed suction hoses, and durable knapsack sprayers.',

      calc_chip: 'INSTANT FARM ESTIMATOR',
      calc_title: 'Calculate Your Irrigation Needs',
      calc_sub: 'Select your crop and farm acreage to get an instant estimated requirement for drip lateral lines and filtration capacity.',
      label_crop: 'CROP TYPE',
      label_acres: 'FARM LAND AREA (ACRES)',
      res_lateral_lbl: 'ESTIMATED LATERAL PIPE',
      res_lateral_note: '16mm Kaveri/Nandi Drip',
      res_filter_lbl: 'RECOMMENDED FILTER',
      res_mainline_lbl: 'MAINLINE PIPE NEEDED',
      res_mainline_note: '63mm / 75mm Finolex PVC',
      calc_wa_text: 'SEND THIS ESTIMATE TO HARISH SIR ON WHATSAPP',

      opt_veg: 'Vegetables (Tomato, Chilly, Beans) — 1.2m spacing',
      opt_mul: 'Mulberry (Sericulture) — 1.5m spacing',
      opt_ban: 'Banana / Papaya — 1.8m spacing',
      opt_man: 'Mango / Plantation — 5m to 8m spacing',
      opt_sug: 'Sugarcane — 1.4m spacing',

      stat_1: '% GENUINE FINOLEX & SUJAY',
      stat_2: '+ YEARS LOCAL FARMER SERVICE',
      stat_3: '+ ACRES IRRIGATED IN KOLAR',
      stat_4: '% AVERAGE WATER CONSERVED',

      contact_chip: 'VISIT OR CALL US',
      contact_title: 'Srinidhi Enterprises',
      proprietor_label: 'Proprietor:',
      info_addr_label: 'Address',
      info_addr_val: '#07, Achari Building, K.G.F. Main Road,<br>Bethamangala — 563116, Kolar District, Karnataka',
      info_phone_label: 'Phone / WhatsApp',
      info_email_label: 'Email',
      info_hours_label: 'Working Hours',
      info_hours_val: 'Monday – Saturday: 8:00 AM – 8:30 PM<br>Sunday: 8:30 AM – 2:00 PM',
      btn_call: 'CALL NOW: 9686636755',
      btn_whatsapp: 'WHATSAPP US',
      btn_maps: 'OPEN IN MAPS',
      vc_caption: 'OFFICIAL SHOP CARD · BETHAMANGALA',
      footer_left: 'SRINIDHI ENTERPRISES © 2026 · ALL RIGHTS RESERVED',
      footer_right: 'PRECISION DRIP · FINOLEX PVC · SUJAY FITTINGS · BETHAMANGALA'
    },
    kn: {
      brand_name: 'ಶ್ರೀನಿಧಿ',
      brand_sub: 'ಎಂಟರ್‌ಪ್ರೈಸಸ್',
      nav_systems: 'ವ್ಯವಸ್ಥೆಗಳು',
      nav_tech: 'ತಂತ್ರಜ್ಞಾನ',
      nav_calc: 'ಹನಿ ನೀರಾವರಿ ಲೆಕ್ಕಾಚಾರ',
      nav_products: 'ಉಪಕರಣಗಳು',
      nav_contact: 'ಸಂಪರ್ಕಿಸಿ',
      nav_cta: 'ಸಂಪರ್ಕಿಸಿ',

      hero_chip: 'ಶ್ರೀನಿಧಿ ಎಂಟರ್‌ಪ್ರೈಸಸ್ · ಬೆತ್ತಮಂಗಲ',
      hero_h1_l1: 'ಪ್ರತಿ ಹನಿ ನೀರಿಗೂ',
      hero_h1_l2: 'ನಿಖರವಾದ ಹನಿ ನೀರಾವರಿ',
      hero_badge: 'ಗುಣಮಟ್ಟದ ಬ್ರಾಂಡೆಡ್ ಹನಿ ನೀರಾವರಿ ಉಪಕರಣಗಳು ಲಭ್ಯವಿದೆ',

      hud_chip: 'ಬೆತ್ತಮಂಗಲ ಕೇಂದ್ರ',
      hud_coords: 'ಅಕ್ಷಾಂಶ 13.0039° N\nರೇಖಾಂಶ 78.3242° E\nಎತ್ತರ 830 ಮೀ · ಕೋಲಾರ',
      hero_caption: 'ಅಧಿಕೃತ ಫಿನೋಲೆಕ್ಸ್ ಪೈಪ್ಸ್ ಮತ್ತು ಸುಜಯ್ ಫಿಟ್ಟಿಂಗ್ಸ್.<br>ಕಾವೇರಿ & ನಂದಿ ಪ್ಲಾಟಿನಮ್ ಹನಿ ನೀರಾವರಿ ಪೈಪುಗಳು.<br>ರೈತರಿಗೆ ನಂಬಿಕಸ್ಥ ಹಾಗೂ ಬಾಳಿಕೆ ಬರುವ ಉಪಕರಣಗಳು.',
      scroll_hint: 'ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ ನೋಡಿ',

      vision_chip: 'ಲೈವ್ ಕೃಷಿ ಹವಾಮಾನ ಮಾಹಿತಿ',
      vision_h2_l1: 'ನೀರಿನ ಸದ್ಬಳಕೆ',
      vision_h2_l2: 'ರೈತರ ಭೂಮಿಗೆ ತಕ್ಕ ನೀರಾವರಿ',
      vision_p: 'ಬೆತ್ತಮಂಗಲ ಹಾಗೂ ಕೋಲಾರ ಜಿಲ್ಲೆಯ ರೈತರಿಗಾಗಿ ಲೈವ್ ಹವಾಮಾನ ಮತ್ತು ನಿಖರ ನೀರಾವರಿ ಸಲಹೆಗಳು.',
      wt_title: 'ಬೆತ್ತಮಂಗಲ ಜಮೀನಿನ ಹವಾಮಾನ ಸ್ಥಿತಿ',
      wt_live: 'ಲೈವ್ ಮಾಹಿತಿ',
      wt_label_temp: 'ತಾಪಮಾನ',
      wt_label_hum: 'ಗಾಳಿಯ ತೇವಾಂಶ',
      wt_label_et: 'ಮಣ್ಣಿನ ತೇವಾಂಶ ಸ್ಥಿತಿ',
      wt_label_adv: 'ಇಂದಿನ ನೀರಾವರಿ ಸಲಹೆ',

      acct_para: 'ಸುಧಾರಿತ ಹನಿ ನೀರಾವರಿಯಿಂದ ಶೇ. 60% ವರೆಗೆ ನೀರಿನ ಉಳಿತಾಯ, ನೀರು ಮತ್ತು ಗೊಬ್ಬರ ನೇರವಾಗಿ ಗಿಡದ ಬೇರುಗಳಿಗೆ ತಲುಪುತ್ತದೆ.',
      hs1_title: 'ಕಾವೇರಿ & ನಂದಿ ಹನಿ ನೀರಾವರಿ ಪೈಪುಗಳು',
      hs1_spec: '16mm ಇನ್‌ಲೈನ್ & ಆನ್‌ಲೈನ್ ಡ್ರಿಪ್ಪರ್‌ಗಳು · ಯುವಿ ರಕ್ಷಣೆ',
      hs2_title: 'ಫಿನೋಲೆಕ್ಸ್ ಪಿವಿಸಿ ಪ್ರೆಶರ್ ಪೈಪ್‌ಗಳು',
      hs2_spec: 'ಕ್ಲಾಸ್ 2/3 ಬೋರ್‌ವೆಲ್ ಪೈಪ್‌ಗಳು · ಸುಜಯ್ ಫಿಟ್ಟಿಂಗ್ಸ್',
      hs3_title: 'ಹೈಡ್ರೋಸೈಕ್ಲೋನ್ ಮತ್ತು ಸ್ಕ್ರೀನ್ ಫಿಲ್ಟರ್‌ಗಳು',
      hs3_spec: 'ಮರಳು ಮತ್ತು ಕೊಳೆ ತಡೆಗಟ್ಟುತ್ತದೆ · ಡ್ರಿಪ್ಪರ್ ಜಾಮ್ ಆಗದಂತೆ ರಕ್ಷಣೆ',
      hs4_title: 'ಲಕ್ಷ್ಮಿ ಅಗ್ರಿಕಲ್ಚರಲ್ ಮಲ್ಚಿಂಗ್ ಶೀಟ್',
      hs4_spec: 'ಬೆಳ್ಳಿ-ಕಪ್ಪು 25 ಮೈಕ್ರಾನ್ · ಕಳೆ ತಡೆ & ತೇವಾಂಶ ರಕ್ಷಣೆ',

      lime_tag: '✕ ಸರಬರಾಜು ಕೇಂದ್ರ #07',
      station_h3: 'ಪ್ರತಿಯೊಬ್ಬ ರೈತರಿಗೂ ಗುಣಮಟ್ಟ ಮತ್ತು ನಂಬಿಕೆ',
      sc_head: 'ನೀರಿನ ಉಳಿತಾಯ ಸಾಮರ್ಥ್ಯ',
      sc_sub: 'ಬೆತ್ತಮಂಗಲ ಪ್ರದೇಶದ ಅಂದಾಜು · 12 ತಿಂಗಳು',
      sc_badge: '+55% ಉಳಿತಾಯ',
      sc_foot: 'ನೀರಿನ ಒತ್ತಡ ಸಮತೋಲನ: 2.5 ಬಾರ್',

      feat_1: 'ಫಿನೋಲೆಕ್ಸ್ ಪಿವಿಸಿ ಮತ್ತು ಸಿಪಿವಿಸಿ ಅಧಿಕೃತ ಪೈಪ್‌ಗಳು',
      feat_2: 'ಕಾವೇರಿ ಮತ್ತು ನಂದಿ ಹನಿ ನೀರಾವರಿ ಪೈಪುಗಳು',
      feat_3: 'ಸುಜಯ್ ಪ್ರೆಸಿಷನ್ ವಾಲ್ವ್‌ಗಳು ಮತ್ತು ಫಿಟ್ಟಿಂಗ್‌ಗಳು',
      feat_4: 'ಸ್ಯಾಂಡ್, ಹೈಡ್ರೋಸೈಕ್ಲೋನ್ ಮತ್ತು ಡಿಸ್ಕ್ ಫಿಲ್ಟರ್‌ಗಳು',
      feat_5: 'ಲಕ್ಷ್ಮಿ ಅಗ್ರಿ ಮಲ್ಚಿಂಗ್ ಮತ್ತು ಹೆವಿ ಡ್ಯೂಟಿ ಸಕ್ಷನ್ ಪೈಪ್‌ಗಳು',

      sol_chip: 'ಲಭ್ಯವಿರುವ ಸಾಮಗ್ರಿಗಳು',
      sol_title: 'ಉತ್ತಮ ಇಳುವರಿಗಾಗಿ ಗುಣಮಟ್ಟದ ಕೃಷಿ ಉಪಕರಣಗಳು',
      sol_desc: 'ಒಂದು ಎಕರೆಯ ತರಕಾರಿ ತೋಟದಿಂದ ಹಿಡಿದು ದೊಡ್ಡ ತೋಟಗಳವರೆಗೂ ಬೇಕಾಗುವ ಎಲ್ಲಾ ಪೈಪ್‌ಗಳು, ಡ್ರಿಪ್ಪರ್‌ಗಳು, ಫಿಲ್ಟರ್‌ಗಳು ಮತ್ತು ಫಿಟ್ಟಿಂಗ್‌ಗಳು ಶ್ರೀನಿಧಿ ಎಂಟರ್‌ಪ್ರೈಸಸ್‌ನಲ್ಲಿ ದೊರೆಯುತ್ತವೆ.',

      card1_tag: '[ಹನಿ ಮತ್ತು ತುಂತುರು ನೀರಾವರಿ]',
      card1_title: 'ಕಾವೇರಿ ಮತ್ತು ನಂದಿ ಡ್ರಿಪ್ ಸಿಸ್ಟಮ್ಸ್',
      card1_desc: 'ಕಟ್ಟಿಕೊಳ್ಳದ ಇನ್‌ಲೈನ್ ಡ್ರಿಪ್ಪರ್‌ಗಳು, ಮೈಕ್ರೋ ಸ್ಪ್ರಿಂಕ್ಲರ್‌ಗಳು ಮತ್ತು ಇಳಿಜಾರು ಜಮೀನಿನಲ್ಲೂ ಸಮಾನವಾಗಿ ನೀರುಣಿಸುವ ವ್ಯವಸ್ಥೆ.',

      card2_tag: '[ಫಿಲ್ಟರ್‌ಗಳು ಮತ್ತು ಪಂಪ್‌ಗಳು]',
      card2_title: 'ಹೈಡ್ರೋಸೈಕ್ಲೋನ್ ಮತ್ತು ಡಿಸ್ಕ್ ಫಿಲ್ಟರ್‌ಗಳು',
      card2_desc: 'ಬೋರ್‌ವೆಲ್‌ನಿಂದ ಬರುವ ಮರಳು, ಮಣ್ಣು ಮತ್ತು ಪಾಚಿಯನ್ನು ಬೇರ್ಪಡಿಸಿ ಡ್ರಿಪ್ ಪೈಪ್‌ಗಳ ಆಯಸ್ಸನ್ನು ಹೆಚ್ಚಿಸುವ ಹೆವಿ ಡ್ಯೂಟಿ ಫಿಲ್ಟರ್‌ಗಳು.',

      card3_tag: '[ಮಲ್ಚಿಂಗ್ ಮತ್ತು ಕೃಷಿ ಸಲಕರಣೆಗಳು]',
      card3_title: 'ಲಕ್ಷ್ಮಿ ಮಲ್ಚ್ ಫಿಲ್ಮ್ ಮತ್ತು ಪಿವಿಸಿ ಪೈಪ್‌ಗಳು',
      card3_desc: 'ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಕೃಷಿ ಮಲ್ಚಿಂಗ್ ಶೀಟ್, ಫಿನೋಲೆಕ್ಸ್ ಪಿವಿಸಿ ಮೇನ್‌ಲೈನ್ ಪೈಪ್‌ಗಳು, ಸಕ್ಷನ್ ಪೈಪ್‌ಗಳು ಮತ್ತು ಬಾಳಿಕೆ ಬರುವ ಸ್ಪ್ರೇಯರ್‌ಗಳು.',

      calc_chip: 'ರೈತರ ಹನಿ ನೀರಾವರಿ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      calc_title: 'ನಿಮ್ಮ ಜಮೀನಿನ ನೀರಾವರಿ ಅಂದಾಜು ಲೆಕ್ಕಹಾಕಿ',
      calc_sub: 'ನಿಮ್ಮ ಬೆಳೆ ಮತ್ತು ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ, ಎಷ್ಟು ಮೀಟರ್ ಪೈಪ್ ಮತ್ತು ಯಾವ ಫಿಲ್ಟರ್ ಬೇಕಾಗುತ್ತದೆ ಎಂದು ತಕ್ಷಣ ತಿಳಿಯಿರಿ.',
      label_crop: 'ಬೆಳೆಯ ಹೆಸರು',
      label_acres: 'ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಎಕರೆಗಳಲ್ಲಿ)',
      res_lateral_lbl: 'ಅಂದಾಜು ಹನಿ ನೀರಾವರಿ ಪೈಪ್ (ಡ್ರಿಪ್ ಲೈನ್)',
      res_lateral_note: '16 ಮಿ.ಮೀ ಕಾವೇರಿ / ನಂದಿ ಡ್ರಿಪ್',
      res_filter_lbl: 'ಶಿಫಾರಸು ಮಾಡಿದ ಫಿಲ್ಟರ್',
      res_mainline_lbl: 'ಮುಖ್ಯ ಲೈನ್ ಪಿವಿಸಿ ಪೈಪ್',
      res_mainline_note: '63 ಮಿ.ಮೀ / 75 ಮಿ.ಮೀ ಫಿನೋಲೆಕ್ಸ್ ಪಿವಿಸಿ',
      calc_wa_text: 'ಹರೀಶ್ ಅವರಿಗೆ ಈ ಅಂದಾಜನ್ನು ವಾಟ್ಸಾಪ್ ಮಾಡಿ',

      opt_veg: 'ತರಕಾರಿಗಳು (ಟೊಮ್ಯಾಟೊ, ಮೆಣಸಿನಕಾಯಿ, ಬೀನ್ಸ್) — 1.2 ಮೀಟರ್ ಅಂತರ',
      opt_mul: 'ರೇಷ್ಮೆ ಹಿಪ್ಪುನೇರಳೆ — 1.5 ಮೀಟರ್ ಅಂತರ',
      opt_ban: 'ಬಾಳೆ / ಪಪ್ಪಾಯಿ — 1.8 ಮೀಟರ್ ಅಂತರ',
      opt_man: 'ಮಾವು / ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳು — 5 ರಿಂದ 8 ಮೀಟರ್ ಅಂತರ',
      opt_sug: 'ಕಬ್ಬು — 1.4 ಮೀಟರ್ ಅಂತರ',

      stat_1: '% ಅಸಲಿ ಫಿನೋಲೆಕ್ಸ್ & ಸುಜಯ್',
      stat_2: '+ ವರ್ಷಗಳ ಸ್ಥಳೀಯ ರೈತ ಸೇವೆ',
      stat_3: '+ ಎಕರೆಗೆ ನೀರಾವರಿ ಸರಬರಾಜು',
      stat_4: '% ಸರಾಸರಿ ನೀರಿನ ಉಳಿತಾಯ',

      contact_chip: 'ಅಂಗಡಿಗೆ ಭೇಟಿ ನೀಡಿ ಅಥವಾ ಕರೆ ಮಾಡಿ',
      contact_title: 'ಶ್ರೀನಿಧಿ ಎಂಟರ್‌ಪ್ರೈಸಸ್',
      proprietor_label: 'ಮಾಲೀಕರು:',
      info_addr_label: 'ವಿಳಾಸ',
      info_addr_val: '#07, ಆಚಾರಿ ಬಿಲ್ಡಿಂಗ್, ಕೆ.ಜಿ.ಎಫ್. ಮುಖ್ಯ ರಸ್ತೆ,<br>ಬೆತ್ತಮಂಗಲ — 563116, ಕೋಲಾರ ಜಿಲ್ಲೆ, ಕರ್ನಾಟಕ',
      info_phone_label: 'ಮೊಬೈಲ್ / ವಾಟ್ಸಾಪ್',
      info_email_label: 'ಇಮೇಲ್',
      info_hours_label: 'ಅಂಗಡಿ ತೆರೆಯುವ ಸಮಯ',
      info_hours_val: 'ಸೋಮವಾರ – ಶನಿವಾರ: ಬೆಳಗ್ಗೆ 8:00 ರಿಂದ ರಾತ್ರಿ 8:30<br>ಭಾನುವಾರ: ಬೆಳಗ್ಗೆ 8:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 2:00',
      btn_call: 'ಕರೆ ಮಾಡಿ: 9686636755',
      btn_whatsapp: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಾತನಾಡಿ',
      btn_maps: 'ಗೂಗಲ್ ಮ್ಯಾಪ್‌ನಲ್ಲಿ ನೋಡಿ',
      vc_caption: 'ಅಧಿಕೃತ ವಿಸಿಟಿಂಗ್ ಕಾರ್ಡ್ · ಬೆತ್ತಮಂಗಲ',
      footer_left: 'ಶ್ರೀನಿಧಿ ಎಂಟರ್‌ಪ್ರೈಸಸ್ © 2026 · ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ',
      footer_right: 'ಹನಿ ನೀರಾವರಿ · ಫಿನೋಲೆಕ್ಸ್ ಪಿವಿಸಿ · ಸುಜಯ್ ಫಿಟ್ಟಿಂಗ್ಸ್ · ಬೆತ್ತಮಂಗಲ'
    }
  };

  let currentLang = localStorage.getItem('srinidhi_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('srinidhi_lang', lang);
    document.documentElement.lang = lang;

    // Toggle switcher button active state
    const btnEn = document.getElementById('btn-lang-en');
    const btnKn = document.getElementById('btn-lang-kn');
    if (btnEn && btnKn) {
      if (lang === 'kn') {
        btnEn.classList.remove('active');
        btnKn.classList.add('active');
      } else {
        btnKn.classList.remove('active');
        btnEn.classList.add('active');
      }
    }

    const dict = i18nData[lang] || i18nData.en;

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update select options
    document.querySelectorAll('[data-i18n-opt]').forEach((opt) => {
      const key = opt.getAttribute('data-i18n-opt');
      if (dict[key]) {
        opt.textContent = dict[key];
      }
    });

    // Update WhatsApp link text on nav
    const navCta = document.getElementById('nav-cta-link');
    if (navCta) {
      const greeting = lang === 'kn'
        ? 'ನಮಸ್ಕಾರ%20ಹರೀಶ್%20ಸರ್,%20ನಾನು%20ನಿಮ್ಮ%20ವೆಬ್‌ಸೈಟ್‌%20ನೋಡಿ%20ನೀರಾವರಿ%20ಸಾಮಗ್ರಿಗಳಿಗಾಗಿ%20ವಿಚಾರಿಸುತ್ತಿದ್ದೇನೆ.'
        : 'Hello%20Harish%20sir,%20I%20am%20inquiring%20about%20irrigation%20supplies%20from%20your%20website.';
      navCta.href = `https://wa.me/919686636755?text=${greeting}`;
    }

    // Refresh weather advisory text in chosen language
    if (window.__lastWeatherData) {
      renderWeatherAdvisory(window.__lastWeatherData);
    }

    // Refresh Drip Estimator output
    if (typeof updateEstimator === 'function') {
      updateEstimator();
    }
  }

  // --- Utility functions ---
  function clamp(val, min = 0, max = 1) {
    return Math.max(min, Math.min(max, val));
  }

  function seg(p, a, b) {
    return clamp((p - a) / (b - a));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // --- Elements ---
  const story = document.getElementById('story');
  const cam = document.getElementById('cam');
  const l0 = document.getElementById('l0');
  const l1 = document.getElementById('l1');
  const l2 = document.getElementById('l2');
  const l3 = document.getElementById('l3');
  const l4 = document.getElementById('l4');
  const progFill = document.getElementById('prog-fill');
  const sparklinePoly = document.getElementById('sparkline-poly');
  const countWater = document.getElementById('count-water');

  // --- Scroll state variables ---
  let rawP = 0;
  let smoothP = 0;
  let lastTime = performance.now();
  let mouseX = 0, mouseY = 0;
  let smoothMX = 0, smoothMY = 0;

  window.addEventListener('pointermove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function updateScroll() {
    if (!story) return;
    const rect = story.getBoundingClientRect();
    const scrollDist = story.offsetHeight - window.innerHeight;
    if (scrollDist <= 0) {
      rawP = 0;
    } else {
      rawP = clamp(-rect.top / scrollDist);
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  // --- Animation Loop ---
  let sparklineDrawn = false;

  function renderLoop(now) {
    const dt = Math.min(now - lastTime, 64);
    lastTime = now;

    const factor = 1 - Math.pow(0.84, dt / 16.7);
    smoothP += (rawP - smoothP) * factor;
    if (Math.abs(rawP - smoothP) < 0.0001) smoothP = rawP;

    smoothMX += (mouseX - smoothMX) * 0.06;
    smoothMY += (mouseY - smoothMY) * 0.06;

    const sp = smoothP;

    // Camera scale & 3D tilt
    if (cam) {
      const camScale = 1.0 + sp * 0.12;
      const camTransX = -smoothMX * 14;
      const camTransY = -smoothMY * 10 - sp * 40;
      cam.style.transform = `translate3d(${camTransX.toFixed(2)}px, ${camTransY.toFixed(2)}px, 0) scale(${camScale.toFixed(3)})`;
    }

    if (progFill) {
      progFill.style.transform = `scaleX(${sp.toFixed(3)})`;
    }

    // BEAT 1: Hero (l0 & l1)
    const heroOut = seg(sp, 0.04, 0.18);
    if (l0 && l1) {
      if (heroOut >= 1) {
        l0.style.visibility = 'hidden';
        l0.style.opacity = '0';
        l1.style.visibility = 'hidden';
        l1.style.opacity = '0';
      } else {
        l0.style.visibility = 'visible';
        l1.style.visibility = 'visible';
        const opacity = (1 - heroOut).toFixed(3);
        const blur = (heroOut * 12).toFixed(1);
        const lift = (-heroOut * 60).toFixed(1);
        l0.style.opacity = opacity;
        l0.style.filter = `blur(${blur}px)`;
        l0.style.transform = `translate3d(0, ${lift}px, 0)`;

        l1.style.opacity = (1 - seg(sp, 0.02, 0.14)).toFixed(3);
      }
    }

    // BEAT 2: Vision & Live Agro-Weather (l2)
    const vIn = seg(sp, 0.15, 0.25);
    const vOut = seg(sp, 0.35, 0.44);
    if (l2) {
      if (vIn <= 0 || vOut >= 1) {
        l2.style.visibility = 'hidden';
        l2.style.opacity = '0';
      } else {
        l2.style.visibility = 'visible';
        const k = vIn * (1 - vOut);
        const blur = ((1 - vIn) * 10 + vOut * 12).toFixed(1);
        const transY = ((1 - vIn) * 40 - vOut * 40).toFixed(1);
        l2.style.opacity = k.toFixed(3);
        l2.style.filter = `blur(${blur}px)`;
        l2.style.transform = `translate3d(0, ${transY}px, 0)`;
      }
    }

    // BEAT 3: Hotspots (l3)
    const hIn = seg(sp, 0.40, 0.50);
    const hOut = seg(sp, 0.62, 0.70);
    if (l3) {
      if (hIn <= 0 || hOut >= 1) {
        l3.style.visibility = 'hidden';
        l3.style.opacity = '0';
      } else {
        l3.style.visibility = 'visible';
        const k = hIn * (1 - hOut);
        const blur = ((1 - hIn) * 8 + hOut * 10).toFixed(1);
        l3.style.opacity = k.toFixed(3);
        l3.style.filter = `blur(${blur}px)`;
      }
    }

    // BEAT 4: Station Metrics & Checklist (l4)
    const sIn = seg(sp, 0.66, 0.78);
    if (l4) {
      if (sIn <= 0) {
        l4.style.visibility = 'hidden';
        l4.style.opacity = '0';
      } else {
        l4.style.visibility = 'visible';
        l4.style.opacity = sIn.toFixed(3);
        const transY = ((1 - sIn) * 40).toFixed(1);
        l4.style.transform = `translate3d(0, ${transY}px, 0)`;

        if (sIn > 0.4 && !sparklineDrawn) {
          sparklineDrawn = true;
          if (sparklinePoly) {
            sparklinePoly.style.strokeDashoffset = '0';
          }
          animateCount(countWater, 55, 1200);
        }
      }
    }

    requestAnimationFrame(renderLoop);
  }

  requestAnimationFrame(renderLoop);

  function animateCount(el, target, duration) {
    if (!el) return;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = easeInOutCubic(progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  // --- Background Mist / Droplet Particle Canvas ---
  const canvas = document.getElementById('mist-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    const particles = [];
    const NUM_PARTICLES = 35;
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    function drawParticles() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';

      for (let i = 0; i < NUM_PARTICLES; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y > height) p.y = 0;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      requestAnimationFrame(drawParticles);
    }
    requestAnimationFrame(drawParticles);
  }

  // --- Live Agro-Weather API Integration (Open-Meteo) ---
  function renderWeatherAdvisory(weather) {
    const tempEl = document.getElementById('wt-temp');
    const humEl = document.getElementById('wt-humidity');
    const etEl = document.getElementById('wt-et');
    const advEl = document.getElementById('wt-advisory');

    const temp = Math.round(weather.temperature_2m);
    const hum = Math.round(weather.relative_humidity_2m);

    if (tempEl) tempEl.textContent = `${temp}°C`;
    if (humEl) humEl.textContent = `${hum}%`;

    const isKn = currentLang === 'kn';

    if (temp > 30) {
      if (etEl) etEl.textContent = isKn ? 'ಹೆಚ್ಚು ಆವಿಯಾಗುವಿಕೆ (ಮುಂಜಾನೆ ನೀರುಣಿಸಿ)' : 'High Evaporation (Run Drip at Dawn)';
      if (advEl) advEl.textContent = isKn ? 'ಬೆಳಗ್ಗೆ 6:00 ರಿಂದ 8:30 ರೊಳಗೆ ನೀರು ಹಾಯಿಸುವುದು ಉತ್ತಮ' : 'Irrigate 6:00 AM – 8:30 AM to prevent soil vapor loss';
    } else if (temp < 20) {
      if (etEl) etEl.textContent = isKn ? 'ಉತ್ತಮ ತೇವಾಂಶ ಸಂರಕ್ಷಣೆ' : 'Low Soil Stress · Good Retention';
      if (advEl) advEl.textContent = isKn ? 'ಸಾಮಾನ್ಯ ಚಕ್ರ: 45–60 ನಿಮಿಷ ನೀರು ಗಿಡದ ಬೇರುಗಳಿಗೆ ಸಾಕಾಗುತ್ತದೆ' : 'Standard drip cycle: 45–60 min adequate for root zone';
    } else {
      if (etEl) etEl.textContent = isKn ? 'ಅನುಕೂಲಕರ ತೇವಾಂಶ ಮಟ್ಟ' : 'Optimal Moisture Index';
      if (advEl) advEl.textContent = isKn ? 'ಕಾವೇರಿ/ನಂದಿ 4 LPH ಡ್ರಿಪ್ಪರ್‌ಗಳಲ್ಲಿ ಸಾಮಾನ್ಯ ನೀರಾವರಿ ಸೂಕ್ತ' : 'Normal cycle · Kaveri/Nandi 4 LPH drippers recommended';
    }
  }

  async function fetchBethamangalaWeather() {
    try {
      const res = await fetch(
        'https://api.open-meteo.com/v1/forecast?latitude=13.0039&longitude=78.3242&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&timezone=Asia%2FKolkata'
      );
      if (!res.ok) throw new Error('Network error');
      const data = await res.json();
      window.__lastWeatherData = data.current;
      renderWeatherAdvisory(data.current);
    } catch (e) {
      window.__lastWeatherData = { temperature_2m: 24, relative_humidity_2m: 72 };
      renderWeatherAdvisory(window.__lastWeatherData);
    }
  }

  fetchBethamangalaWeather();

  // --- Interactive Hotspots ---
  const hotspots = document.querySelectorAll('.hotspot');
  hotspots.forEach((hs) => {
    hs.addEventListener('click', () => {
      hotspots.forEach((other) => {
        if (other !== hs) other.classList.remove('active');
      });
      hs.classList.toggle('active');
    });
  });

  // --- 3D Card Tilt on Pointer Move ---
  const tiltCards = document.querySelectorAll('[data-tilt]');
  tiltCards.forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 10).toFixed(2)}deg) translateY(-4px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
    });
  });

  // --- Interactive Farmer Drip Estimator ---
  const cropSelect = document.getElementById('crop-type');
  const acresRange = document.getElementById('farm-acres');
  const acresDisp = document.getElementById('acres-disp');
  const resLateral = document.getElementById('res-lateral');
  const resFilter = document.getElementById('res-filter');
  const resFilterNote = document.getElementById('res-filter-note');
  const resMainline = document.getElementById('res-mainline');
  const waBtn = document.getElementById('calc-wa-btn');

  const cropData = {
    vegetables: {
      lateralPerAcre: 3300,
      nameEn: 'Vegetables (Tomato/Chilly)',
      nameKn: 'ತರಕಾರಿಗಳು (ಟೊಮ್ಯಾಟೊ/ಮೆಣಸಿನಕಾಯಿ)'
    },
    mulberry: {
      lateralPerAcre: 2800,
      nameEn: 'Mulberry (Sericulture)',
      nameKn: 'ರೇಷ್ಮೆ ಹಿಪ್ಪುನೇರಳೆ'
    },
    banana: {
      lateralPerAcre: 2200,
      nameEn: 'Banana / Papaya',
      nameKn: 'ಬಾಳೆ / ಪಪ್ಪಾಯಿ'
    },
    mango: {
      lateralPerAcre: 1100,
      nameEn: 'Mango / Orchard',
      nameKn: 'ಮಾವು / ತೋಟಗಾರಿಕೆ ಬೆಳೆಗಳು'
    },
    sugarcane: {
      lateralPerAcre: 3000,
      nameEn: 'Sugarcane',
      nameKn: 'ಕಬ್ಬು'
    }
  };

  function updateEstimator() {
    if (!cropSelect || !acresRange) return;

    const isKn = currentLang === 'kn';
    const cropKey = cropSelect.value;
    const acres = parseFloat(acresRange.value);
    const info = cropData[cropKey] || cropData.vegetables;

    if (acresDisp) {
      if (isKn) {
        acresDisp.textContent = `${acres.toFixed(1)} ಎಕರೆ`;
      } else {
        acresDisp.textContent = `${acres.toFixed(1)} ${acres === 1 ? 'Acre' : 'Acres'}`;
      }
    }

    const totalLateral = Math.round(info.lateralPerAcre * acres);
    const totalMainline = Math.round(180 * acres);

    let filterText = '2" Screen / Disc Filter';
    let filterFlow = '25 m³/hr flow rate';
    if (acres >= 3.5) {
      filterText = '2.5" / 3" Hydrocyclone + Disc Filter';
      filterFlow = '40 m³/hr flow rate';
    }

    if (isKn) {
      if (resLateral) resLateral.textContent = `~${totalLateral.toLocaleString('en-IN')} ಮೀಟರ್`;
      if (resMainline) resMainline.textContent = `~${totalMainline.toLocaleString('en-IN')} ಮೀಟರ್`;
      if (resFilter) resFilter.textContent = filterText;
      if (resFilterNote) resFilterNote.textContent = `${filterFlow} (ಸಾಮರ್ಥ್ಯ)`;
    } else {
      if (resLateral) resLateral.textContent = `~${totalLateral.toLocaleString('en-IN')} meters`;
      if (resMainline) resMainline.textContent = `~${totalMainline.toLocaleString('en-IN')} meters`;
      if (resFilter) resFilter.textContent = filterText;
      if (resFilterNote) resFilterNote.textContent = filterFlow;
    }

    // Pre-fill WhatsApp message for Harish Sir
    if (waBtn) {
      const cropName = isKn ? info.nameKn : info.nameEn;
      const unitM = isKn ? 'ಮೀಟರ್' : 'm';
      const acresLabel = isKn ? `${acres.toFixed(1)} ಎಕರೆ` : `${acres.toFixed(1)} Acres`;

      let msg = '';
      if (isKn) {
        msg = encodeURIComponent(
          `ನಮಸ್ಕಾರ ಹರೀಶ್ ಸರ್ (ಶ್ರೀನಿಧಿ ಎಂಟರ್‌ಪ್ರೈಸಸ್),\n` +
          `ನಾನು ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ನನ್ನ ಜಮೀನಿಗೆ ಬೇಕಾಗುವ ಸಾಮಗ್ರಿಗಳನ್ನು ಲೆಕ್ಕಹಾಕಿದ್ದೇನೆ:\n` +
          `• ಬೆಳೆ: ${cropName}\n` +
          `• ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ: ${acresLabel}\n` +
          `• ಅಂದಾಜು ಡ್ರಿಪ್ ಪೈಪ್: ~${totalLateral.toLocaleString('en-IN')} ${unitM} (ಕಾವೇರಿ/ನಂದಿ 16mm)\n` +
          `• ಮುಖ್ಯ ಲೈನ್ ಪಿವಿಸಿ ಪೈಪ್: ~${totalMainline.toLocaleString('en-IN')} ${unitM} (ಫಿನೋಲೆಕ್ಸ್)\n` +
          `• ಶಿಫಾರಸು ಮಾಡಿದ ಫಿಲ್ಟರ್: ${filterText}\n\n` +
          `ದಯವಿಟ್ಟು ಬೆತ್ತಮಂಗಲ ಅಂಗಡಿಯಲ್ಲಿ ಇದರ ಬೆಲೆ ಹಾಗೂ ಲಭ್ಯತೆ ತಿಳಿಸಿ.`
        );
      } else {
        msg = encodeURIComponent(
          `Hello Harish sir (Srinidhi Enterprises),\n` +
          `I calculated my farm requirements on your website:\n` +
          `• Crop: ${cropName}\n` +
          `• Land Area: ${acresLabel}\n` +
          `• Estimated Drip Lateral: ~${totalLateral.toLocaleString('en-IN')} ${unitM} (Kaveri/Nandi 16mm)\n` +
          `• Mainline Pipe: ~${totalMainline.toLocaleString('en-IN')} ${unitM} (Finolex PVC)\n` +
          `• Recommended Filter: ${filterText}\n\n` +
          `Please give me the quotation and availability at your Bethamangala shop.`
        );
      }
      waBtn.href = `https://wa.me/919686636755?text=${msg}`;
    }
  }

  if (cropSelect && acresRange) {
    cropSelect.addEventListener('change', updateEstimator);
    acresRange.addEventListener('input', updateEstimator);
    updateEstimator();
  }

  // --- Count-up on scroll for stats banner ---
  const statsBanner = document.getElementById('stats-banner');
  let statsCounted = false;

  if (statsBanner && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          const nums = statsBanner.querySelectorAll('.stat-num');
          nums.forEach((num) => {
            const target = parseInt(num.getAttribute('data-val'), 10);
            animateCount(num, target, 1600);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(statsBanner);
  }

  // --- Navigation Link Smooth Scroll Handlers ---
  document.querySelectorAll('a[href^="#"], a[data-nav]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const navTarget = link.getAttribute('data-nav') || link.getAttribute('href').replace('#', '');
      if (!navTarget) return;

      e.preventDefault();

      if (navTarget === 'systems') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (navTarget === 'technology' || navTarget === 'hotspots') {
        if (story) {
          const storyScrollable = story.offsetHeight - window.innerHeight;
          const targetY = story.offsetTop + storyScrollable * 0.48;
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      } else if (navTarget === 'solutions' || navTarget === 'products') {
        const el = document.getElementById('solutions');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (navTarget === 'calculator') {
        const el = document.getElementById('calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (navTarget === 'contact') {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Language Selector Buttons Event Listeners ---
  const btnEn = document.getElementById('btn-lang-en');
  const btnKn = document.getElementById('btn-lang-kn');

  if (btnEn) {
    btnEn.addEventListener('click', () => applyLanguage('en'));
  }
  if (btnKn) {
    btnKn.addEventListener('click', () => applyLanguage('kn'));
  }

  // Initialize with saved or default language
  applyLanguage(currentLang);

})();
