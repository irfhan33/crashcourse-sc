import Header from "./components/Header";
import { Container } from "./style/Container.styled";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/Global";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  const contents = [
    {
      id: 1,
      title: "Grow Together",
      body: "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
      image: "illustration-grow-together.svg",
    },
    {
      id: 2,
      title: "Flowing Conversations",
      body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
      image: "illustration-flowing-conversation.svg",
    },
    {
      id: 3,
      title: "Your Users",
      body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
      image: "illustration-your-users.svg",
    },
  ];
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      footer: "#003333",
    },
    mobile: "768px",
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container>
          {contents.map(({ title, body, image, id }) => (
            <Card title={title} body={body} image={image} id={id} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
