"use client";
import { useState } from "react";
import { Container, Row, Col, Nav, Tab, Dropdown } from "react-bootstrap";
import Image from "next/image";

type TabData = {
  key: string;
  title: string;
  icon: string;
  img: string;
  content: string;
  stats: { text: string; para: string; desc: string }[];
  statd?: { text: string; para: string; desc: string }[]; // ✅ optional type
};

const tabs: TabData[] = [
  {
    key: "aging",
    title: "Aging",
    icon: "/assets/img/time .png",
    img: "/assets/img/early-aging.png",
    content:
      "With age, your skin’s natural production of collagen and hyaluronic acid begins to decline — quietly reducing firmness, suppleness, and radiance. The result? Fine lines, sagging, and a visible loss of youthful glow.",
    stats: [
      {
        text: "25%",
        para: "Collagen loss by age 45",
        desc: "Source: National Academy of Medicine",
      },
      {
        text: "50%",
        para: "Reduction in Hyaluronic acid by age 40",
        desc: "Source: National Library of Medicine",
      },
    ],
    statd: [
      {
        text: "After 25%",
        para: "collagen declines",
        desc: "Source : Shuster et al., British Journal Dermatology",
      },
    ],
  },
  {
    key: "stress",
    title: "Stress",
    icon: "/assets/img/stress.png",
    img: "/assets/img/stress-image.png",
    content:
      "Stress triggers cortisol, which breaks down collagen and elastin. This leads to dryness, wrinkles, and makes your skin more sensitive and reactive.",
    stats: [
      {
        text: "78%",
        para: "Individuals report skin issues during high-stress periods",
        desc: "Source: American Academy of Dermatology",
      },
    ],
    statd: [], // ✅ keep empty if no data
  },
  {
    key: "Pollution",
    title: "Pollution",
    icon: "/assets/img/air-pollution.png",
    img: "/assets/img/stress-image.png",
    content:
      "Stress triggers cortisol, which breaks down collagen and elastin. This leads to dryness, wrinkles, and makes your skin more sensitive and reactive.",
    stats: [
      {
        text: "78%",
        para: "Individuals report skin issues during high-stress periods",
        desc: "Source: American Academy of Dermatology",
      },
    ],
    statd: [],
  },
  {
    key: "UV Radiation",
    title: "UV Radiation",
    icon: "/assets/img/uv.png",
    img: "/assets/img/stress-image.png",
    content:
      "Stress triggers cortisol, which breaks down collagen and elastin. This leads to dryness, wrinkles, and makes your skin more sensitive and reactive.",
    stats: [
      {
        text: "78%",
        para: "Individuals report skin issues during high-stress periods",
        desc: "Source: American Academy of Dermatology",
      },
    ],
    statd: [],
  },
  {
    key: "Disrupted Sleep Pattern",
    title: "Disrupted Sleep Pattern",
    icon: "/assets/img/uv.png",
    img: "/assets/img/stress-image.png",
    content:
      "Stress triggers cortisol, which breaks down collagen and elastin. This leads to dryness, wrinkles, and makes your skin more sensitive and reactive.",
    stats: [
      {
        text: "78%",
        para: "Individuals report skin issues during high-stress periods",
        desc: "Source: American Academy of Dermatology",
      },
    ],
    statd: [],
  },
  {
    key: "Poor Gut Health",
    title: "Poor Gut Health",
    icon: "/assets/img/uv.png",
    img: "/assets/img/stress-image.png",
    content:
      "Stress triggers cortisol, which breaks down collagen and elastin. This leads to dryness, wrinkles, and makes your skin more sensitive and reactive.",
    stats: [
      {
        text: "78%",
        para: "Individuals report skin issues during high-stress periods",
        desc: "Source: American Academy of Dermatology",
      },
    ],
    statd: [],
  },
];

export default function HealthTabs() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);

  const activeTab = tabs.find((t) => t.key === activeKey);

  return (
    <Container className="mb-5 health">
      <Tab.Container
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k as string)}
      >
        <Row>
          {/* Left Side (Tabs for Desktop) */}
          <Col md={3} className="d-none d-md-block tab-color">
            <Nav variant="pills" className="flex-column custom-tabs">
              {tabs.map((tab) => (
                <Nav.Item key={tab.key}>
                  <Nav.Link eventKey={tab.key}>
                    <Image
                      src={tab.icon}
                      alt={tab.title}
                      width={35}
                      height={35}
                      className="me-2"
                    />
                    {tab.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>

          {/* Dropdown for Mobile */}
          <Col xs={12} className="d-md-none mb-3">
            <Dropdown onSelect={(k) => setActiveKey(k as string)}>
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                {activeTab?.title}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {tabs.map((tab) => (
                  <Dropdown.Item key={tab.key} eventKey={tab.key}>
                    {tab.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Right Side (Image + Content) */}
          <Col md={9}>
            <Tab.Content>
              {tabs.map((tab) => (
                <Tab.Pane key={tab.key} eventKey={tab.key}>
                  <Row className="">
                    <Col md={5}>
                      <div className="text-center">
                        <Image
                          src={tab.img}
                          alt={tab.title}
                          className="img-fluid mb-3"
                          width={400}
                          height={200}
                          style={{ maxHeight: "500px" }}
                        />
                      </div>
                    </Col>
                    <Col md={7}>
                      <div className="content-box">
                        <Image
                          src="/assets/img/tick-square.png"
                          alt="tick icon"
                          width={20}
                          height={20}
                          className="mb-3"
                        />
                        <p>{tab.content}</p>
                        <hr />
                        <div className="row">
                          {tab.stats.map((stat, statIndex) => (
                            <div
                              key={statIndex}
                              className="col-lg-6 col-12 mb-3"
                            >
                              <h4 className="sevty">{stat.text}</h4>
                              <p className="mb-1">{stat.para}</p>
                              <p className="mb-0 saml">{stat.desc}</p>
                            </div>
                          ))}
                          <hr />
                        </div>
                        <div className="aftr">
                          {tab.statd?.map((statd, statdIndex) => (
                            <div
                              key={statdIndex}
                              className="col-lg-6 col-12 mb-3"
                            >
                              <h4 className="sevty">{statd.text}</h4>
                              <p className="mb-1">{statd.para}</p>
                              <p className="mb-0 saml">{statd.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
