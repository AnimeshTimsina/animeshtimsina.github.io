// import { ReactComponent as mlLogo } from "images/ML.svg"
import { projectCardProps } from "components/projects/projectCard/projectCard.view"
import chartjsLogo from "images/chartjsLogo.svg"
import djangoLogo from "images/Django.svg"
import flutterLogo from "images/flutter.svg"
import graphQLLogo from "images/GraphQL.svg"
import mapsLogo from "images/maps.svg"
import materialUILogo from "images/materialUI.svg"
import metamaskLogo from "images/metamask.svg"
import nodeLogo from "images/node.svg"
import postgresqlLogo from "images/postgresql.svg"
import disease_1 from "images/projects/disease/1.png"
import disease_2 from "images/projects/disease/2.png"
import DiseaseBackground from "images/projects/disease/cover.png"
import InventoryBackground from "images/projects/inventory/cover.png"
import LandBackground from "images/projects/land/cover.png"
import restro_1 from "images/projects/restaurant/1.png"
import restro_2 from "images/projects/restaurant/2.png"
import restro_3 from "images/projects/restaurant/3.png"
import restro_4 from "images/projects/restaurant/4.png"
import restro_5 from "images/projects/restaurant/5.png"
import restro_6 from "images/projects/restaurant/6.png"
import restro_7 from "images/projects/restaurant/7.png"
import restro_8 from "images/projects/restaurant/8.png"
import restro_9 from "images/projects/restaurant/9.png"
import RestaurantBackground from "images/projects/restaurant/cover.png"
import tourism_1 from "images/projects/tourism/1.jpg"
import TourismBackground from "images/projects/tourism/cover.jpg"
import election_2 from "images/projects/voting/2.jpg"
import election_3 from "images/projects/voting/3.jpg"
import election_4 from "images/projects/voting/4.jpg"
import ElectionBackground from "images/projects/voting/cover.png"
import reactLogo from "images/React.svg"
import restLogo from "images/rest.svg"
import tensorflowLogo from "images/tensorflow.svg"
import truffleLogo from "images/truffle.svg"

export const projectsData: Array<projectCardProps> = [
  {
    id: "1",
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
    id: "2",
    title: "Restaurant Ordering System and Stock Tracking & Reporting",
    background: RestaurantBackground,
    images: [
      RestaurantBackground,
      restro_1,
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
    id: "4",
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
  {
    id: "5",
    title: "Decentralized Voting System using Ethereum Blockchain",
    background: ElectionBackground,
    images: [ElectionBackground, election_2, election_3, election_4],
    frameworks: [
      {
        id: "1",
        title: "React Native",
        Logo: reactLogo,
      },
      {
        id: "2",
        title: "Node JS",
        Logo: nodeLogo,
      },
      {
        id: "3",
        title: "Truffle (Ethereum)",
        Logo: truffleLogo,
      },
      {
        id: "4",
        title: "Metamask",
        Logo: metamaskLogo,
      },
    ],
  },
  {
    id: "6",
    title: "Decentralized Land Market based on Ethereum Blockchain",
    background: LandBackground,
    images: [LandBackground],
    frameworks: [
      {
        id: "1",
        title: "Node JS",
        Logo: nodeLogo,
      },
      {
        id: "2",
        title: "Truffle (Ethereum)",
        Logo: truffleLogo,
      },
      {
        id: "3",
        title: "Metamask",
        Logo: metamaskLogo,
      },
    ],
  },
]
