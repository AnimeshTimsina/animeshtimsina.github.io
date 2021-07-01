// import { ReactComponent as mlLogo } from "images/ML.svg"
import { projectCardProps } from "components/projects/projectCard/projectCard.view"
import chartjsLogo from "images/chartjsLogo.svg"
import djangoLogo from "images/Django.svg"
import flutterLogo from "images/flutter.svg"
import graphQLLogo from "images/GraphQL.svg"
import firebaseLogo from "images/firebase.svg"
import mapsLogo from "images/maps.svg"
import materialUILogo from "images/materialUI.svg"
import postgresqlLogo from "images/postgresql.svg"
import disease_1 from "images/projects/disease/1.png"
import disease_2 from "images/projects/disease/2.png"
import DiseaseBackground from "images/projects/disease/cover.png"
import InventoryBackground from "images/projects/inventory/cover.png"
import restro_1 from "images/projects/restaurant/1.png"
import restro_2 from "images/projects/restaurant/2.png"
import restro_3 from "images/projects/restaurant/3.png"
import restro_4 from "images/projects/restaurant/4.png"
import restro_5 from "images/projects/restaurant/5.png"
import restro_6 from "images/projects/restaurant/6.png"
import restro_7 from "images/projects/restaurant/7.png"
import restro_8 from "images/projects/restaurant/8.png"
import restro_9 from "images/projects/restaurant/9.png"
import restro_10 from "images/projects/restaurant/10.png"
import RestaurantBackground from "images/projects/restaurant/cover.png"
import tourism_1 from "images/projects/tourism/1.jpg"
import TourismBackground from "images/projects/tourism/cover.jpg"
import reactLogo from "images/React.svg"
import restLogo from "images/rest.svg"
import tensorflowLogo from "images/tensorflow.svg"
import riskCover from "images/projects/risk/cover.png"
import risk1 from "images/projects/risk/1.png"
import risk2 from "images/projects/risk/2.png"
import risk3 from "images/projects/risk/3.png"
import risk4 from "images/projects/risk/4.png"
import risk5 from "images/projects/risk/5.png"
import risk6 from "images/projects/risk/6.png"
import risk7 from "images/projects/risk/7.png"
import risk8 from "images/projects/risk/8.png"
import risk9 from "images/projects/risk/9.png"
import risk10 from "images/projects/risk/10.png"
import risk11 from "images/projects/risk/11.png"
import risk12 from "images/projects/risk/12.png"
import risk13 from "images/projects/risk/13.png"
import risk14 from "images/projects/risk/14.png"

import riskMobile1 from "images/projects/risk-mobile/1.jpg"
import riskMobile2 from "images/projects/risk-mobile/2.jpg"
import riskMobile3 from "images/projects/risk-mobile/3.jpg"
import riskMobile4 from "images/projects/risk-mobile/4.jpg"
import riskMobile5 from "images/projects/risk-mobile/5.jpg"
import riskMobile6 from "images/projects/risk-mobile/6.jpg"
import riskMobile7 from "images/projects/risk-mobile/7.jpg"
import riskMobile8 from "images/projects/risk-mobile/8.jpg"
import riskMobile9 from "images/projects/risk-mobile/9.jpg"
import riskMobile10 from "images/projects/risk-mobile/10.jpg"
import riskMobile11 from "images/projects/risk-mobile/11.jpg"

export const projectsData: Array<projectCardProps> = [
  {
    id: "1",
    title: "Risk Assessments based on Dutch Law",
    background: riskCover,
    images: [
      riskCover,
      risk1,
      risk2,
      risk3,
      risk4,
      risk5,
      risk6,
      risk7,
      risk8,
      risk9,
      risk10,
      risk11,
      risk12,
      risk13,
      risk14,
    ],
    frameworks: [
      {
        id: "1",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "2",
        title: "React JS",
        Logo: reactLogo,
      },
      {
        id: "3",
        title: "GraphQL",
        Logo: graphQLLogo,
      },
      {
        id: "4",
        title: "MaterialUI Kit",
        Logo: materialUILogo,
      },
    ],
  },
  {
    id: "2",
    title: "Restaurant Ordering System and Stock Tracking & Reporting",
    background: RestaurantBackground,
    images: [
      RestaurantBackground,
      restro_1,
      restro_10,
      restro_2,
      restro_3,
      restro_4,
      restro_5,
      restro_6,
      restro_7,
      restro_8,
      restro_9,
    ],
    frameworks: [
      {
        id: "1",
        title: "React",
        Logo: reactLogo,
      },
      {
        id: "2",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "3",
        title: "GraphQL",
        Logo: graphQLLogo,
      },
      {
        id: "4",
        title: "MaterialUI Kit",
        Logo: materialUILogo,
      },
    ],
  },
  {
    id: "3",
    title: "Risk Assessment - Mobile Application",
    background: riskMobile1,
    images: [
      riskMobile1,
      riskMobile2,
      riskMobile3,
      riskMobile4,
      riskMobile5,
      riskMobile6,
      riskMobile7,
      riskMobile8,
      riskMobile9,
      riskMobile10,
      riskMobile11,
    ],
    frameworks: [
      {
        id: "1",
        title: "Flutter",
        Logo: flutterLogo,
      },
      {
        id: "2",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "3",
        title: "Firebase",
        Logo: firebaseLogo,
      },
    ],
  },
  {
    id: "4",
    title:
      "Inventory Management for ICTC and Department of Electroncis and Computer Engineering",
    background: InventoryBackground,
    images: [InventoryBackground],
    frameworks: [
      {
        id: "1",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "2",
        title: "PostgreSQL",
        Logo: postgresqlLogo,
      },
      {
        id: "3",
        title: "ChartJS",
        Logo: chartjsLogo,
      },
    ],
  },
  {
    id: "5",
    title:
      "Image Processing and Pattern Recognition of Chest XRay and OCT Images for Disease Prediction",
    background: DiseaseBackground,
    images: [disease_1, disease_2],
    frameworks: [
      {
        id: "1",
        title: "React",
        Logo: reactLogo,
      },
      {
        id: "2",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "3",
        title: "REST",
        Logo: restLogo,
      },
      {
        id: "4",
        title: "Tensorflow",
        Logo: tensorflowLogo,
      },
    ],
  },
  {
    id: "6",
    title: "Tourism Nepal - Visit Nepal 2020 Application",
    background: TourismBackground,
    images: [TourismBackground, tourism_1],
    frameworks: [
      {
        id: "1",
        title: "Flutter",
        Logo: flutterLogo,
      },
      {
        id: "2",
        title: "Django",
        Logo: djangoLogo,
      },
      {
        id: "3",
        title: "GraphQL",
        Logo: graphQLLogo,
      },
      {
        id: "4",
        title: "Google Maps API",
        Logo: mapsLogo,
      },
    ],
  },
]
