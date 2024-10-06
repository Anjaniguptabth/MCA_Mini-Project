// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'mr', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    resources: {
      mr: {
        translation: {
          home: "मुख्य पृष्ठ",
          about: "विषयी",
          contact: "संपर्क",
          admin: "प्रशासक",
          user: "वापरकर्ता",
          login: "लॉगिन करा",
          signup: "नोंदणी करा",
          featuredBooks: "वैशिष्ट्य पुस्तके",
          pustakPathsala: "पुस्तक पाठशाळा",
          changeLanguage: "भाषा बदला",
          aboutpustakpathsala: "पुस्तक पाठशाला के बारे में",
          A: "पुस्तकालय व्यवस्थापन प्रणालीबद्दल",
          library_system: "पुस्तक पाठशाला एक समग्र पुस्तकालय व्यवस्थापन प्रणाली आहे जी पुस्तके, वापरकर्ते, आणि व्यवहार व्यवस्थापित करण्याची प्रक्रिया सोपी करते. हे पुस्तकालयाध्यक्ष आणि विद्यार्थ्यांसाठी एक सहज अनुभव प्रदान करते.",
          V: "दृष्टीकोन",
          vision: "आमचा दृष्टिकोन एक वापरायला सोपी, कार्यक्षम आणि स्केलेबल उपाय प्रदान करणे आहे, जे पुस्तकालय संसाधनांचे व्यवस्थापन करण्यासाठी एक सुव्यवस्थित प्रणाली प्रदान करून शिक्षणाच्या अनुभवाला वाढवते.",
          developers: "डेवलपर्स आणि योगदानकर्ता",
          anjani: "अजनी कुमार गुप्ता - प्रमुख डेवलपर",
          liladhar: "लिलाधर मेश्राम - प्रमुख डेवलपर",
          manav: "मनव देविकार - प्रमुख डेवलपर",
          updates: "अपडेट्स आणि सुविधाएँ",
          version_1_0: "संस्करण 1.0.0: मूल सुविधांसह प्रारंभिक प्रकाशन.",
          version_1_1: "संस्करण 1.1.0: योजनाबद्ध सुधारामध्ये मोबाइल समर्थन, एआय-चालित शिफारसी, आणि बरेच काही समाविष्ट आहे.",
        },
      },
      en: {
        translation: {
          home: "Home",
          about: "About",
          contact: "Contact",
          admin: "Admin",
          user: "User",
          login: "Login",
          signup: "Sign Up",
          featuredBooks: "Featured Books",
          pustakPathsala: "Pustak Pathsala",
          changeLanguage: "Change Language",
          aboutpustakpathsala: "About Pustak Pathsala",
          A: "About the Library Management System",
          library_system: "Pustak Pathsala is a comprehensive library management system that simplifies the process of managing books, users, and transactions. It offers a seamless experience for both librarians and students.",
          V: "Vision",
          vision: "Our vision is to provide an easy-to-use, efficient, and scalable solution that enhances the learning experience by offering a well-organized system for managing library resources.",
          developers: "Developers & Contributors",
          anjani: "Anjani Kumar Gupta - Lead Developer",
          liladhar: "Liladhar Meshram - Lead Developer",
          manav: "Manav Devikar - Lead Developer",
          updates: "Updates & Features",
          version_1_0: "Version 1.0.0: Initial release with core features.",
          version_1_1: "Version 1.1.0: Planned enhancements include mobile support, AI-powered recommendations, and more.",
        },
      },
      hi: {
        translation: {
          home: "मुख्य पृष्ठ",
          about: "के बारे में",
          contact: "संपर्क करें",
          admin: "प्रशासक",
          user: "उपयोगकर्ता",
          login: "लॉगिन करें",
          signup: "साइन अप करें",
          featuredBooks: "विशेष पुस्तकें",
          pustakPathsala: "पुस्तक पाठशाला",
          changeLanguage: "भाषा बदलें",
          aboutpustakpathsala: "पुस्तक पाठशाला के बारे में",
          A: "पुस्तकालय प्रबंधन प्रणाली के बारे में",
          library_system: "पुस्तक पाठशाला एक समग्र पुस्तकालय प्रबंधन प्रणाली है जो पुस्तकों, उपयोगकर्ताओं और लेन-देन के प्रबंधन की प्रक्रिया को सरल बनाती है। यह पुस्तकालयाध्यक्षों और छात्रों दोनों के लिए एक सहज अनुभव प्रदान करती है।",
          V: "दृष्टिकोण",
          vision: "हमारा दृष्टिकोण एक उपयोग में आसान, प्रभावी और स्केलेबल समाधान प्रदान करना है जो पुस्तकालय संसाधनों के प्रबंधन के लिए एक सुव्यवस्थित प्रणाली प्रदान करके सीखने के अनुभव को बढ़ाता है।",
          developers: "डेवलपर्स और योगदानकर्ता",
          anjani: "अजनी कुमार गुप्ता - प्रमुख डेवलपर",
          liladhar: "लिलाधर मेश्राम - प्रमुख डेवलपर",
          manav: "मनव देविकार - प्रमुख डेवलपर",
          updates: "अपडेट्स और सुविधाएँ",
          version_1_0: "संस्करण 1.0.0: मूल सुविधाओं के साथ प्रारंभिक रिलीज।",
          version_1_1: "संस्करण 1.1.0: योजनाबद्ध सुधार में मोबाइल समर्थन, एआई-चालित सिफारिशें, और बहुत कुछ शामिल हैं।",
        },
      },
    },
  });

export default i18n;
