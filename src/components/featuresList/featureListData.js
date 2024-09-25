import chat from "../../assets/chat.png";
import verified from "../../assets/blockchain.png";
import summary from "../../assets/summary.png";
import ocr from "../../assets/ocr.png";

export const featureListData = [
   {
      id: 1,
      title: "Document Security",
      glowSubTitle: " Secure your work with cutting-edge protection.",
      subTitle: "Never worry about document safety again.",
      description:
         "DocChain ensures that your valuable documents are protected with a robust cloud-based infrastructure, fortified by the latest in blockchain encryption. Your confidential files are safeguarded against unauthorized breaches, alteration,or destruction.",
      imgSrc: verified,
      isImageFirst: false,
   },
   {
      id: 2,
      title: "Conversational Interface",
      glowSubTitle: " Engage with your files in a groundbreaking way.",
      subTitle: "Experience simplicity and clarity with every command.",
      description:
         "Our platform revolutionizes document interaction by leveraging advanced Natural Language Processing (NLP). This allows for unprecedented, human-like dialogues with your digital files. Pose inquiries, request explanations, or seek out specific information—all through a user-friendly chat interface that delivers instant responses.",
      imgSrc: chat,
      isImageFirst: true,
      isImageSizeHalf: true,
   },
   {
      id: 3,
      title: "Cutting-Edge OCR Technology",
      glowSubTitle:
         " Transform handwritten notes into digital data with unparalleled precision.",
      subTitle: "Streamline your workflow effortlessly.",
      description:
         "Experience the pinnacle of Optical Character Recognition (OCR) technology. Our system is equipped with an AI-driven OCR that collaborates seamlessly with the AI OCR Engine to transcribe handwritten documents into digital text. It produces precise, searchable results, paving the way for the easy conversion of all your paper-based content into digital archives.",
      imgSrc: ocr,
      isImageFirst: false,
   },
   {
      id: 4,
      title: "Intelligent Summarization",
      glowSubTitle:
         " Elevate your efficiency with AI that distills documents to their essence.",
      subTitle: "A single click reveals key insights.",
      description:
         " Our AI engine is a master of brevity, adept at analyzing and extracting critical information to create compact summaries of your documents. Instantly call up these abridged versions with a simple action, or opt for the auto-summarization feature which crafts and archives these executive overviews for immediate retrieval whenever you need them.",
      imgSrc: summary,
      isImageFirst: true,
   },
   // {
   //    id: 5,
   //    title: "TTS & ASR Solutions",
   //    subTitle: "Enhance your productivity with our cutting-edge solutions.",
   //    glowSubTitle:
   //       " Text-to-Speech (TTS) and Automatic Speech Recognition (ASR). ",
   //    description:
   //       "we combine innovation with reliability. Our AI-powered TTS and ASR services are designed to seamlessly integrate with your workflow, offering unmatched accuracy and performance. Whether you are looking to enhance customer interactions, automate processes, or provide more accessible content, we have the solutions to fit your needs",
   //    imgSrc: summary,
   //    isImageFirst: false,
   // },
];
