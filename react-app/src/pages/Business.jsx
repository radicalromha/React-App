import styled, { keyframes } from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// Animations
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Styled Components
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  animation: ${fadeIn} 1s ease-out;
`;

const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const NewsCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const NewsContent = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Breaking = () => {
  return (
    <PageContainer>
      <NavBar />
      <MainContent>
        <NewsContainer>
          {[...Array(6)].map((_, index) => (
            <NewsCard key={index}>
              <NewsHeading>Breaking News {index + 1}</NewsHeading>
              <NewsContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl nec tincidunt lacinia, nunc nisl aliquam nisl,
                eget aliquam nisl nisl eget nisl.
              </NewsContent>
            </NewsCard>
          ))}
        </NewsContainer>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default Breaking;
