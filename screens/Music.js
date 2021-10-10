import * as React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as WebBrowser from "expo-web-browser";

import { MonoText } from "../components/StyledText";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import Layout from "../constants/Layout";

const list = [
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/7774881/11180453840663864493",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7774881/gid/11180453840663864493",
    product: {
      googleId: "11180453840663864493",
      author: {
        name: "pictureline.com",
        accountId: "7774881",
      },
      creationTime: "2013-03-08T13:00:00.000Z",
      modificationTime: "2013-06-19T12:00:00.000Z",
      country: "US",
      language: "en",
      title: "Nikon D800 SLR Digital Camera Body",
      description:
        "The Nikon D800 Digital SLR body is built for today's multimedia photographer including a groundbreaking 36.3MP FX-format CMOS sensor, Full HD 1080p video at 30/25/24p with stereo sound, class leading ISO range of 100-6400, expandable to 25600, 4 fps burst rate and Advanced Scene Recognition System with 91000-pixel RGB sensor.",
      link: "http://www.pictureline.com/nikon-d800-digital-slr-body.html?utm_source=google&utm_medium=pla&utm_campaign=pla_feed",
      brand: "Nikon",
      condition: "new",
      gtin: "00018208254804",
      gtins: ["00018208254804"],
      mpns: ["25480"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 2796.95,
          originalPrice: 2996.95,
          saleEndDate: "2013-06-29T00:00:00.000Z",
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "https://www.bhphotovideo.com/images/images1500x1500/nikon_1576_d5600_dslr_camera_with_1308819.jpg",
          status: "available",
        },
        {
          link: "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_top.jpg",
        },
        {
          link: "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_bottom.jpg",
        },
        {
          link: "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikon_1_d800_back.jpg",
        },
        {
          link: "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbagopen_2.jpeg",
        },
        {
          link: "http://lghttp.22373.nexcesscdn.net/80A650/Magento/media/catalog/product/n/i/nikonlaptopbag_2.jpg",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/3532205/16661504721410582447",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/3532205/gid/16661504721410582447",
    product: {
      googleId: "16661504721410582447",
      author: {
        name: "Abt Electronics & Appliances",
        accountId: "3532205",
      },
      creationTime: "2012-07-25T01:00:08.000Z",
      modificationTime: "2013-06-19T06:02:15.000Z",
      country: "US",
      language: "en",
      title: "Sony RX100 Black CyberShot Digital Camera - DSCRX100B",
      description:
        "Massive 20.2MP Exmor 1” CMOS Image Sensor/ Capture JPEG Files And RAW Files/ P/A/S/M Modes For Video And Stills/ Low-Light ISO 6400 Sensitivity/ Bright F1.8 Carl Zeiss Vario-Sonnar T Lens With 3.6x Zoom/ Full HD 1080/60p/ Black Finish",
      link: "http://www.abt.com/product/62925/Sony-DSCRX100B.html?utm_source=scfroogle&utm_medium=sc&utm_campaign=froogle",
      brand: "Sony",
      condition: "new",
      gtin: "00027242856110",
      gtins: ["00027242856110"],
      mpns: ["DSCRX100B"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 648.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://content.abt.com/media/images/products/l_DSCRX100B.jpg",
          status: "available",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/1057813/6067895891153887292",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/1057813/gid/6067895891153887292",
    product: {
      googleId: "6067895891153887292",
      author: {
        name: "Adorama Camera",
        accountId: "1057813",
      },
      creationTime: "2013-01-10T21:30:07.000Z",
      modificationTime: "2013-06-18T23:45:26.000Z",
      country: "US",
      language: "en",
      title:
        "Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus",
      description:
        "Sony a 77 DSLR Camera, 24 . 3 MP, Translucent Mirror Technology, 12 fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19point 19 point 19 point Auto Focus Sony Alpha DSLR SLT-A77 Translucent Mirror Digital Camera, 24.3MP, 12fps, OLED Electronic Viewfinder, Full HD Movie with AVCHD, 19-point Auto Focus Step up to an incredible shooting experience with this a77 DSLR camera. Featuring Sony's top-of-the-line Translucent Mirror Technology, you can focus and shoot simultaneously for fast, precise performance and continuous shooting of up to 12 frames per second, complete with continuous auto focus. Capture amazingly-detailed images that make for gorgeous enlargements thanks to an impressive 24.3-megapixel sensor. The world's first DSLR to offer a choice of super-smooth 60p, standard 60i or richly cinematic 24p movie modes all at Full HD 1920 x 1080 resolution, you can capture incredible, high quality AVCHD or MP4 videos of all your memorable moments (records in 29-minute segments). A Tru-Finder OLED electronic viewfinder offers remarkable resolution and high contrast for outstanding depth, plus allows you to view setting adjustments in real time for the best possible picture.",
      link: "http://www.adorama.com/ISOSLTA77V.html?refby=gbase",
      brand: "Sony",
      condition: "new",
      gtin: "00027242833067",
      gtins: ["00027242833067"],
      mpns: ["SLT-A77V"],
      inventories: [
        {
          channel: "online",
          availability: "backorder",
          price: 898.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://www.adorama.com/images/large/ISOSLTA77V.jpg",
          status: "available",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/3359942/11738086986303167840",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/3359942/gid/11738086986303167840",
    product: {
      googleId: "11738086986303167840",
      author: {
        name: "Meijer",
        accountId: "3359942",
      },
      creationTime: "2012-10-26T11:57:46.000Z",
      modificationTime: "2013-06-18T11:50:38.000Z",
      country: "US",
      language: "en",
      title: "Canon PowerShot SX50 HS 12.1MP Digital Camera",
      description:
        'Capture clear, detailed images with the Canon PowerShot SX50 HS digital camera. It features a 1/2.3" CMOS image sensor for capturing photos in up to 4000x3000 resolution and video in up to 1080p high-definition.',
      link: "http://www.meijer.com/s/canon-powershot-sx50-hs-12-1mp-digital-camera/_/R-232944?cmpid=goobase&CAWELAID=1623888545",
      brand: "Canon",
      condition: "new",
      gtin: "00013803157192",
      gtins: ["00013803157192"],
      mpns: ["360280"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 429.99,
          shipping: 8.89,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "https://lh3.googleusercontent.com/proxy/Pjt7wGXlI1_uWRozCOX6omyfSRnGt55qs7KniwkcN2jvveSMxWqe3ugu8dwpWXq0udI3zv3_LlR5gD3WmbXHYIhJpO6lhIgw0Sg59-ekAqvh0BVg4N0",
          status: "available",
        },
      ],
    },
  },

  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/10046/10747647294570910080",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/10046/gid/10747647294570910080",
    product: {
      googleId: "10747647294570910080",
      author: {
        name: "Target",
        accountId: "10046",
      },
      creationTime: "2013-06-18T12:54:59.000Z",
      modificationTime: "2013-06-18T12:54:59.000Z",
      country: "US",
      language: "en",
      title:
        "Lytro Light Field Camera with 8x Optical Zoom, 8GB Memory - Moxie",
      description:
        "Find digital cameras at Target.com! Shoot first, focus later. the lytro camera lets you create living pictures that you can endlessly refocus after you take them. There is no autofocus and none of the shutter delay that comes with it. Just press the shutter button to instantly capture a shot before the moment is gone. be creative. discover a new kind of creativity. Refocusing lets you experience a picture differently with each click. It s like walking through the scene all over again. ready to share. share your pictures online to your favorite sites and your friends can instantly refocus them just like you do. Your pictures are about to...",
      link: "http://www.target.com/p/lytro-light-field-camera-with-8x-optical-zoom-8gb-memory-moxie-pink-target-exclusive/-/A-14246552?ref=tgt_adv_XSG10001&AFID=Froogle_df&LNM=%7C14246552&CPNG=Electronics&ci_src=14110944&ci_sku=14246552",
      brand: "Lytro",
      condition: "new",
      gtin: "00854928003168",
      gtins: ["00854928003168"],
      mpns: ["M01-100008-US"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 399.99,
          shipping: 4.98,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "https://static.bhphoto.com/images/images2500x2500/1458127409_1203187.jpg",
          status: "available",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/8026394/18400283058629038583",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8026394/gid/18400283058629038583",
    product: {
      googleId: "18400283058629038583",
      author: {
        name: "eBay - Bigvalueinc",
        accountId: "8026394",
      },
      creationTime: "2013-05-28T16:27:33.000Z",
      modificationTime: "2013-06-18T22:51:38.000Z",
      country: "US",
      language: "en",
      title:
        "Nikon 1 S1 10.1 Mp Digital Camera - Red (w/ 11-27.5mm And Vr 30-110mm Lenses)",
      description:
        "27629 Browse Our Store Store home Point Shoot Cameras Pro. SLR Cameras Digital Camera Lenses Camcorders Projectors GPS Navigation Home audio Blu-ray / DVD Players Nikon 1 S1 10.1 MP Digital Camera - Red (w/ 11-27.5mm and VR 30-110mm Lenses) New, Never Opened 11-27.5mm and 30-110mm Zoom Lenses 10.1MP CX High-Speed AF CMOS Sensor 3.0 460k-Dot LCD Monitor EXPEED 3A Image Processor 15fps Continuous Shooting with Autofocus Full HD 1920 x 1080/60i Video Motion Snapshot and Live Image Control Simultan",
      link: "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=360603997858&itemid=360603997858&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=140321452&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
      brand: "Nikon",
      condition: "new",
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 653.49,
          tax: 0.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "https://static.bhphoto.com/images/images2000x2000/1357639625_910134.jpg",
          status: "available",
        },
        {
          link: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/DdgAAMXQAx9RLPD4/%24T2eC16Z,%21%290E9s37Hk+6BRLPD4YObw%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/uHAAAOxyoA1RLPD7/%24T2eC16hHJF8E9nnC9dFyBRLPD6sGKg%7E%7E60_1.JPG?set_id=8800005007",
        },
      ],
    },
  },

  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/8059/17843975811274141318",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8059/gid/17843975811274141318",
    product: {
      googleId: "17843975811274141318",
      author: {
        name: "MacMall",
        accountId: "8059",
      },
      creationTime: "2013-05-30T02:55:06.000Z",
      modificationTime: "2013-06-19T12:00:55.000Z",
      country: "US",
      language: "en",
      title: "Samsung Electronics SMART Camera NX300 - digital camera",
      description:
        "Samsung Electronics SMART Camera NX300 - digital camera EV-NX300ZBFUUS Samsung SMART Camera NX300 - Digital camera - mirrorless system - 20.3 Mpix - 2.5 x optical zoom NX 20-50mm lens - Wi-Fi - white",
      link: "http://www.macmall.com/p/Samsung-Electronics-Digital-Cameras/product~DPNo~9491708~pdp.ibaiddb?source=MWBGOOGLEBASE",
      brand: "Samsung",
      condition: "new",
      mpns: ["EV-NX300ZBFUUS"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 749.99,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://i2.cc-inc.com/prod/9491000/9491708_xlg.jpg",
          status: "available",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/6504554/17826874961104763871",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/6504554/gid/17826874961104763871",
    product: {
      googleId: "17826874961104763871",
      author: {
        name: "eBay - beststopdeals",
        accountId: "6504554",
      },
      creationTime: "2013-06-07T01:20:32.000Z",
      modificationTime: "2013-06-10T05:26:34.000Z",
      country: "US",
      language: "en",
      title:
        "Canon Eos 6d Digital Camera With Canon 24-105mm F/4.0l Is Usm Af Lens , Usa",
      description:
        "brand canon color black mpn 8035b009 megapixels 20 2 mp model 6d screen size 3 type digital slr canon eos 6 d digital camera with canon 24 105 mm f 4.0 l is usm af lens new usa click an image to enlarge this item is 100 brand new 20.2 mp full frame cmos sensor includes canon ef 24 105 mm f 4.0 l lens 3.0 clear view high resolution lcd digic 5 image processor built in wi fi and gps connectivity full hd 1080 p with manual controls 11 point af with center cross type point 63 zone dual layer meterin",
      link: "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=290858311072&itemid=290858311072&icep_meta_categ_id=625&icep_etrs=N&icep_epid=135689649&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
      brand: "Canon",
      condition: "new",
      gtin: "00013803204155",
      gtins: ["00013803204155"],
      mpns: ["8035B009"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 2373.33,
          tax: 0.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://i.ebayimg.com/00/s/NzAwWDcwMA==/z/eS8AAOxyKsZRs4Lk/%24T2eC16R,%21%290E9s37F1sJBRs4Lkfi3Q%7E%7E60_1.JPG?set_id=8800005007",
          status: "available",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/nTMAAOxy7MtRs4Ln/%24%28KGrHqZ,%21rYFGPoc7hg%21BRs4Lm2Pz%21%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/HNkAAOxyIAZRs4Lp/%24T2eC16hHJHwE9n8ikMRbBRs4LpLPog%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WSgAAOxy66pRs4Lr/%24T2eC16Z,%21%29%21E9s2fDPVRBRs4Lr%285H%21%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/k9AAAMXQTT9Rs4Lt/%24T2eC16J,%21%29QE9s3HEEZrBRs4LtbG%21Q%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/8xAAAOxyYYlRs4Lv/%24T2eC16J,%21wsE9suw%29yL-BRs4LvmS8%21%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WJ4AAOxyLchRs4Ly/%24T2eC16F,%21ykE9s7tw%21,tBRs4L%29pD3%21%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/WKcAAOxyLchRs4L0/%24%28KGrHqN,%21okFGpcHnHTHBRs4Lz0Dv%21%7E%7E60_1.JPG?set_id=8800005007",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/5200551/17681056315804106263",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/5200551/gid/17681056315804106263",
    product: {
      googleId: "17681056315804106263",
      author: {
        name: "Cameta Camera",
        accountId: "5200551",
      },
      creationTime: "2013-04-11T14:18:00.000Z",
      modificationTime: "2013-06-19T14:18:00.000Z",
      country: "US",
      language: "en",
      title:
        "Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) Kit",
      description:
        "This kit includes • Sony Alpha NEX-5R Digital Camera Body & E 18-55mm OSS Lens (Black) and more",
      link: "http://www.cameta.com/Sony-Alpha-NEX-5R-Digital-Camera-Body-E-18-55mm-OSS-Lens-Black-70172.cfm?utm_source=googlebase&utm_medium=base",
      brand: "Sony",
      condition: "new",
      gtin: "00689466587968",
      gtins: ["00689466587968"],
      mpns: ["SONY-kit-70172"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 599.95,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://images.cameta.com/productimages/sony/digital/slr/nex-5r_18-55_black_kit01_70172_a.jpg",
          status: "available",
        },
      ],
    },
  },

  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/9136978/17606249969320060651",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/9136978/gid/17606249969320060651",
    product: {
      googleId: "17606249969320060651",
      author: {
        name: "Newegg.com - 17th street photo supply inc",
        accountId: "9136978",
      },
      creationTime: "2013-03-19T17:54:38.000Z",
      modificationTime: "2013-06-16T18:41:14.000Z",
      country: "US",
      language: "en",
      title:
        "Sony Alpha NEX-3N Mirrorless Digital Camera with 16-50mm Lens (Black)",
      description:
        'The Alpha NEX-3N Mirrorless Digital Camera from Sony has an Exmor APS-C CMOS image sensor with a resolution of 16.1MP and a BIONZ image processor. It accepts Sony E-Mount lenses, including the supplied Power Zoom (PZ) lens, which has an effective focal length of 16-50mm (35mm equivalent: 24-75mm) and is equipped with both ED and aspherical elements. The lens is retractable and compact, measuring just 3/16" at its shortest length.',
      link: "http://www.newegg.com/Product/Product.aspx?Item=9SIA1J20NT0553&nm_mc=OTC-Froogle8&cm_mmc=OTC-Froogle8-_-Compact%20Mirrorless%20System%20Camera-_-Sony-_-9SIA1J20NT0553",
      brand: "Sony",
      condition: "new",
      gtin: "00027242864108",
      gtins: ["00027242864108"],
      mpns: ["027242864108"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 448.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://images10.newegg.com/ProductImage/1A9-0005-00002-05.jpg",
          status: "available",
        },
        {
          link: "http://images10.newegg.com/ProductImage/1A9-0005-00002-02.jpg",
        },
        {
          link: "http://images10.newegg.com/ProductImage/1A9-0005-00002-03.jpg",
        },
        {
          link: "http://images10.newegg.com/ProductImage/1A9-0005-00002-04.jpg",
        },
        {
          link: "http://images10.newegg.com/ProductImage/1A9-0005-00002-01.jpg",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/7606870/17477967812343626541",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/7606870/gid/17477967812343626541",
    product: {
      googleId: "17477967812343626541",
      author: {
        name: "eCost.com",
        accountId: "7606870",
      },
      creationTime: "2013-05-30T02:56:25.000Z",
      modificationTime: "2013-06-18T09:02:30.000Z",
      country: "US",
      language: "en",
      title: "Olympus E-PL5 - digital camera",
      description:
        "Olympus E-PL5 - digital camera V205040BU000 Olympus E-PL5 - Digital camera - 3D - mirrorless system - 16.1 Mpix body only - black",
      link: "http://www.ecost.com/p/8033704?source=EWBGOOGLEBASE",
      brand: "Olympus",
      condition: "new",
      mpns: ["V205040BU000"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 549.99,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://i2.cc-inc.com/prod/9417000/9417075_xlg.jpg",
          status: "available",
        },
      ],
    },
  },

  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/8508634/16261575049293546089",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/8508634/gid/16261575049293546089",
    product: {
      googleId: "16261575049293546089",
      author: {
        name: "eBay - thecamerabox",
        accountId: "8508634",
      },
      creationTime: "2013-05-31T20:19:12.000Z",
      modificationTime: "2013-06-10T06:13:55.000Z",
      country: "US",
      language: "en",
      title:
        "Canon Eos Rebel T3i Digital Camera With Ef-s 18-55mm Is Ii Lens Kit Usa",
      description:
        "Canon EOS Rebel T3i Digital Camera with EF-S 18-55mm IS II Lens Kit Brand New in its Original Retail Box USA Model The Camera Box EFS 18-55mm f/3.5-5.6 IS II AF Lens LP-E8 Rechargeable Lithium-Ion Battery (1120mAh) LC-E8E Battery Charger Wide Strap USB In",
      link: "http://rover.ebay.com/rover/1/711-67261-24966-0/2?ipn=psmain&icep_vectorid=263602&mtid=691&kwid=1&crlp=1_263602&icep_item_id=330851785173&itemid=330851785173&icep_meta_categ_id=625&icep_etrs=Y&icep_epid=100113265&icep_ctlg=782&icep_cond=New&icep_cbt=n&icep_msku_flag=n",
      brand: "Canon",
      condition: "new",
      gtin: "08714574569505",
      gtins: ["08714574569505"],
      mpns: ["5169B003"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 589.99,
          tax: 0.0,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16Z,%21ysE9sy0i3R0BQ4c%21mQmKw%7E%7E60_1.JPG?set_id=8800005007",
          status: "available",
        },
        {
          link: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24T2eC16F,%21%29%21E9s2f%21G%29zBQ4c%21nkMH%21%7E%7E60_1.JPG?set_id=8800005007",
        },
        {
          link: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/%24%28KGrHqJ,%21qQFC,wmDwklBQ4c%21oWV2Q%7E%7E60_1.JPG?set_id=8800005007",
        },
      ],
    },
  },
  {
    kind: "shopping#product",
    id: "tag:google.com,2010:shopping/products/15953/16174816936822603351",
    selfLink:
      "https://www.googleapis.com/shopping/search/v1/public/products?alt=json/15953/gid/16174816936822603351",
    product: {
      googleId: "16174816936822603351",
      author: {
        name: "BuyDig.com",
        accountId: "15953",
      },
      creationTime: "2013-06-11T10:04:47.000Z",
      modificationTime: "2013-06-18T10:04:50.000Z",
      country: "US",
      language: "en",
      title: "Samsung NX300 20.3 MP Digital Camera White 8GB Kit",
      description:
        "Samsung NX300 20.3 MP Digital Camera White 8GB Kit. Fast and powerful, the Samsung SMART CAMERA NX300 allows you to quickly and perfectly capture spontaneous, even magical moments throughout your day. High performance made portable - the on-the-go photographer never had it this good. The NX300 features a new, ultra-sensitive 20.3MP APS-C CMOS sensor and an advanced hybrid autofocus system for delivering detailed images that obliterate the line between professional and enthusiast. And thanks to its 1/6000 shutter speed, you can keep up with the action - any action - and precisely capture a fast-paced moment you would otherwise miss. Advanced 20.3M APS-C CMOS Sensor Worthy of professional photographers, but made for the enthusiast, the 20.3MP APS-C CMOS sensor - now with Phase detection AF - delivers high-quality images and lifelike colors with the highest resolution in its class. It's also ideal for out-focusing photography, thanks to a sensor that's the largest used in a mirrorless",
      link: "http://www.buydig.com/shop/product.aspx?sku=E1SAMNX300W&ref=froogle&omid=103&CAWELAID=230005120000015639",
      brand: "Samsung",
      condition: "new",
      gtin: "00845251051582",
      gtins: ["00845251051582"],
      mpns: ["E1SAMNX300W"],
      inventories: [
        {
          channel: "online",
          availability: "inStock",
          price: 697.99,
          shipping: 0.0,
          currency: "USD",
        },
      ],
      images: [
        {
          link: "http://www.buydig.com/assets/product/imagesnw250/BB1FC769518B4C75B3CED99F74F123CC.jpg",
          status: "available",
        },
      ],
    },
  },
];

const promotions = [
  { imageUrl: "https://gh.jumia.is/cms/2020/W9/phoes-desk.jpg" },
  { imageUrl: "https://gh.jumia.is/cms/2020/W9/Desktop-slider-1424-x-768.jpg" },
  { imageUrl: "https://gh.jumia.is/cms/2020/W9/lapizz-desk.jpg" },
  { imageUrl: "https://gh.jumia.is/cms/2020/W9/Mobile-slider-rs.jpg" },
];

export default function Music({ navigation }) {
  var [cart, updateCart] = React.useState([]);
  var [totalPrice, updateTotalPrice] = React.useState(0);
  var [totalCart, updateNumber] = React.useState(0);

  return (
    <View style={styles.container}>
      <StatusBar  barStyle="dark-content" />

      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        <Text style={{ fontSize: 40, fontFamily: "fira-black" }}>
          <Text style={{ fontSize: 40, color: "#f07e05" }}>M</Text>
          Shop
        </Text>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          <Text
            style={{ fontSize: 18, color: "#f07e05", fontFamily: "fira-black" }}
          >
            Hot 🔥
          </Text>
          <Carousel
            autoplay
            loop
            data={promotions}
            renderItem={({ item }) => (
              <Image
                source={{
                  uri: item.imageUrl,
                }}
                style={{ height: 200, borderRadius: 10 }}
              />
            )}
            sliderWidth="100"
            itemWidth={Layout.window.width / 1.2}
            sliderWidth={Layout.window.width}
            hasParallaxImages
          />
        </View>

        <FlatList
          key={({ item }) => item.id}
          data={list}
          renderItem={({ item, index }) => (
            <View
              style={{
                margin: 10,
                padding: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#fafafa",
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.product.images[0].link }}
                style={{ height: 100, width: 100 }}
              />
              <View style={{ flex: 1, paddingHorizontal: 10 }}>
                <Text
                  numberOfLines={2}
                  style={{ fontSize: 20, fontWeight: "bold" }}
                >
                  {item.product.title}
                </Text>
                <Text style={{ color: "green", fontWeight: "bold" }}>
                  {item.product.inventories[0].currency}{" "}
                  {item.product.inventories[0].price}
                </Text>
                <Text>{item.product.author.name}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ paddingRight: 10, color: "green" }}>
                    {item.product.condition}
                  </Text>
                  <Text>{item.product.inventories[0].availability}</Text>
                </View>
                {cart.includes(item) ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      borderRadius: 5,
                      padding: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      updateNumber((totalCart -= 1));

                      updateCart(cart.filter((product) => product !== item));
                    }}
                  >
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      <AntDesign name="minus" size={18} color="white" />
                    </View>
                    <Text style={{ fontWeight: "bold" }}>Added</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f07e05",
                      borderRadius: 5,
                      padding: 5,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 10,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      updateTotalPrice(
                        (totalPrice += item.product.inventories[0].price)
                      );

                      updateCart([...cart, item]);
                    }}
                  >
                    <AntDesign
                      name="plus"
                      size={19}
                      color="white"
                      style={{ paddingHorizontal: 10 }}
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        />
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart", { cart })}
        style={{
          height: 50,
          width: 50,
          backgroundColor: "white",
          borderRadius: 35,
          position: "absolute",
          right: 0,
          margin: 15,
        }}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "#f07e05",
            borderRadius: 10,
            position: "absolute",
            right: 0,
            elevation: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>{cart.length}</Text>
        </View>

        <AntDesign
          style={{ alignSelf: "center", top: 15 }}
          name="shoppingcart"
          size={24}
          color="#f07e05"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: 'white'
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center",
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)",
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center",
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
