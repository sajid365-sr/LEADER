import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToggleThemeContext } from "../../Contexts/ThemeContext/ThemeContext";

const TermsAndCondition = () => {
  const { theme } = useContext(ToggleThemeContext);

  return (
    <div className="my-5">
      <Container className="w-75 py-5">
        <h3 className={`fw-bold ${!theme && "text-warning"}`}>
          PRIVACY & REFUND POLICY
        </h3>

        <p>
          Despite being from the marketing background, I know how irritating
          these privacy and refund policies can get. We still gotta do it, for
          legal reason obviously. <br />
          <br />
          If you are ordering any of our services, you have complete right to
          know about the refund policies we offer.
        </p>

        <p>
          <span className={`fw-semibold lead ${!theme && "text-warning"}`}>
            Our Courses:{" "}
          </span>{" "}
          We don’t offer any refund for this course once purchased. This is a
          digital product that you receive within 7 days of ordering. Once an
          order is placed, no refund is issued. Our courses are also
          non-shareable. You can’t share it with a friend. If done, your account
          might get banned.
        </p>
        <p>
          <p>
            <span className={`fw-semibold lead ${!theme && "text-warning"}`}>Security: </span>
            To protect your personal information, we take reasonable precautions
            and follow industry best practices to make sure it is not
            inappropriately lost, misused, accessed, disclosed, altered or
            destroyed. If you provide us with your credit card information, the
            information is encrypted using secure socket layer technology (SSL)
            and stored with a AES-256 encryption. Although no method of
            transmission over the Internet or electronic storage is 100% secure,
            we follow all PCI-DSS requirements and implement additional
            generally accepted industry standards.
          </p>
          <span className={`fw-semibold lead ${!theme && "text-warning"}`}>
            Payment:{" "}
          </span>
          If you make a purchase on our site, we use a third party payment
          processor such as Stripe or Paypal. Payments are encrypted through the
          Payment Card Industry Data Security Standard (PCI-DSS). Your purchase
          transaction data is stored only as long as is necessary to complete
          your purchase transaction.
        </p>
        <p>
          Go back to Registration:{" "}
          <Link
            className={`fw-semibold ${!theme && "text-info"}`}
            to="/register"
          >
            Register
          </Link>
        </p>
      </Container>
    </div>
  );
};

export default TermsAndCondition;
