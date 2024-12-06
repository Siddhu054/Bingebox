import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaTimes } from "react-icons/fa";

const FAQSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 70px 40px;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
`;

const FAQItem = styled.div`
  margin-bottom: 10px;
`;

const Question = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  text-align: left;

  &:hover {
    background-color: #2d2d2d;
  }
`;

const Answer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ $isOpen }) => ($isOpen ? "20px 30px" : "0 30px")};
  max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "none")};
`;

const faqData = [
  {
    question: "What is BingeBox?",
    answer:
      "BingeBox is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    question: "How much does BingeBox cost?",
    answer:
      "Watch BingeBox on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your BingeBox account to watch instantly on the web at BingeBox.com from your personal computer or on any internet-connected device.",
  },
  {
    question: "How do I cancel?",
    answer:
      "BingeBox is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.",
  },
  {
    question: "What can I watch on BingeBox?",
    answer:
      "BingeBox has an extensive library of feature films, documentaries, TV shows, anime, award-winning BingeBox originals, and more. Watch as much as you want, anytime you want.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection>
      <FAQContainer>
        <Title>Frequently Asked Questions</Title>
        {faqData.map((item, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleQuestion(index)}>
              {item.question}
              <IconWrapper $isOpen={openIndex === index}>
                <FaPlus />
              </IconWrapper>
            </Question>
            <Answer $isOpen={openIndex === index}>{item.answer}</Answer>
          </FAQItem>
        ))}
      </FAQContainer>
    </FAQSection>
  );
}

export default FAQ;
