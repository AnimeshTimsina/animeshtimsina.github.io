import { ReactComponent as DjangoLogo } from "images/Django.svg"
import { ReactComponent as EthereumLogo } from "images/Ethereum.svg"
import { ReactComponent as GraphQLLogo } from "images/GraphQL.svg"
import { ReactComponent as MLLogo } from "images/ML.svg"
import { ReactComponent as ReactLogo } from "images/React.svg"

export const ServiceData = [
  {
    id: "1",
    image: ReactLogo,
    title: "Front-end React",
    content:
      "Because Angular sucks! Also, I always tend to use Typescript instead of Javascript just because error handling is so much easier. I do have a soft spot for Redux however Context API is my goto for state management",
  },
  {
    id: "2",
    image: DjangoLogo,
    title: "Backend Django",
    content:
      "What more do you want if you can code your Backend in Python. The code is pragmatic, maintainable and clean and I can always integrate my machine learning models in Django out of the box! ",
  },
  {
    id: "3",
    image: GraphQLLogo,
    title: "GraphQL (coz' REST sucks)",
    content:
      "Gone are the days of over-fetching data from REST API calls! GraphQL is efficient, flexible, works well with Javascript, solves overfetching, and once the schema is defined, frontend and backend teams can work independently from one another",
  },
  {
    id: "4",
    image: MLLogo,
    title: "Machine Learning",
    content:
      "Want a Machine Learning system for forecasting sales of your business? Want a Chatbot to interact with your customers? Want a Recommendation System based on Customer Segmentation? You are in the right place!",
  },
  {
    id: "5",
    image: EthereumLogo,
    title: "Blockchain Programming",
    content:
      "Building decentralized applications and smart contracts based on Ethereum Blockchain have always intrigued me. Fault tolerant and censorship resistant system with no single point of failure is the future!",
  },
]
