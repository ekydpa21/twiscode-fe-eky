import React, { useEffect, useState } from "react"
import "./css/Home.css"
import logo from "../../assets/images/logo.png"
import { NavDropdown, Form, Dropdown, InputGroup, FormControl } from "react-bootstrap"
import axios from "axios"

export default function Home() {
  const [countries, setCountries] = useState()
  const titles = ["Mrs", "Ms", "Mdm", "Mr", "Dr"]
  const [selectedLang, setSelectedLang] = useState("English")
  const [codeNumber, setCodeNumber] = useState()

  const fetchContries = async (url) => {
    const contriesData = await axios.get(url)
    setCountries(contriesData.data)
    setCodeNumber(contriesData.data[0].numericCode)
  }

  useEffect(() => {
    fetchContries("https://restcountries.eu/rest/v2/all")
  }, [])

  // console.log(countries)

  return (
    <div className="home-container">
      <div className="header-container">
        <img src={logo} alt="logo" />
        <div className="lang-container">
          <p>Languages:</p>
          <NavDropdown title={selectedLang} menuVariant="transparent">
            <NavDropdown.Item value="English">English</NavDropdown.Item>
            <NavDropdown.Item value="Bahasa Indonesia">Bahasa Indonesia</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
      <div className="alert-container">
        <div className="alert">
          <p>You don't have an account yet, please create a new account</p>
        </div>
      </div>
      <div className="content">
        <h4>Create new account</h4>
        <div className="title">
          <h5>Title</h5>
          <Form.Group className="title-content" controlId="formBasicCheckbox">
            {titles.map((title, idx) => {
              return <Form.Check key={idx} type="checkbox" label={title} className="titles" />
            })}
          </Form.Group>
        </div>
        <div className="form-name mb-4">
          <Form.Group className="name">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>
          <Form.Group className="name">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>
        </div>
        <div className="form-number mb-4">
          <Form.Label>Mobile phone number</Form.Label>
          <Form.Group className="phone-number">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-button-dark-example1" variant="transparent">
                {countries && <img src={countries[0].flag} alt="" />}
              </Dropdown.Toggle>

              <Dropdown.Menu variant="light">
                {countries &&
                  countries.map((country, idx) => {
                    return (
                      <Dropdown.Item value={country.numberCode} key={idx}>
                        <img src={country.flag} alt="" />
                        <p>{country.name}</p>
                      </Dropdown.Item>
                    )
                  })}
              </Dropdown.Menu>
            </Dropdown>
            <InputGroup>
              <InputGroup.Text>+{codeNumber}</InputGroup.Text>
              <FormControl id="inlineFormInputGroup" placeholder="Mobile phone number" />
            </InputGroup>
          </Form.Group>
        </div>
        <div className="form-address">
          <h4 className="mb-4">Address</h4>
          <div className="address-container">
            <Form.Group className="address mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>
            <div className="location-container mb-4">
              <Form.Group className="location">
                <Form.Label>Country/Location</Form.Label>
                <Form.Select defaultValue="Select Country/Location">
                  <option value="">Select Country/Location</option>
                  {countries &&
                    countries.map((country, idx) => {
                      return (
                        <option value={country.name} key={idx}>
                          {country.name}
                        </option>
                      )
                    })}
                </Form.Select>
              </Form.Group>
              <Form.Group className="district">
                <Form.Label>Province/District</Form.Label>
                <Form.Select defaultValue="Province/District">
                  <option value="">Province/District</option>
                  {countries &&
                    countries.map((country, idx) => {
                      return (
                        <option value={country.capital} key={idx}>
                          {country.capital}
                        </option>
                      )
                    })}
                </Form.Select>
              </Form.Group>
            </div>
          </div>
        </div>
        <div className="form-contact">
          <h4 className="mb-4">Contacts</h4>
          <div className="contact-content">
            <Form.Group className="email-group">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="text" placeholder="Email Address" />
            </Form.Group>
            <div className="birthday">
              <Form.Group className="date">
                <Form.Label>Date of birth</Form.Label>
                <Form.Control type="text" placeholder="DD" />
              </Form.Group>
              <Form.Group className="month">
                <Form.Label>Month</Form.Label>
                <Form.Control type="text" placeholder="MM" />
              </Form.Group>
              <Form.Group className="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="text" placeholder="YYYY" />
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-container">
        <h4>Standard Privacy Note</h4>
        <div className="descriptions">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis velit ducimus culpa quia eius magnam, suscipit eum officia dolorem consequuntur recusandae eligendi quasi, officiis facilis corporis. Sed ut animi dolore?
            Perspiciatis fugiat consequuntur quas vel eum ut dicta, aspernatur consectetur iste beatae praesentium adipisci quae, magni ducimus? Necessitatibus quod, quibusdam eligendi incidunt deserunt dicta beatae repudiandae labore
            repellendus, distinctio asperiores?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, sunt et? Quos, cumque placeat beatae dignissimos possimus expedita nihil eligendi delectus excepturi, aliquid saepe accusantium ad, laborum iusto? Veritatis,
            praesentium! Voluptate fugit repellat neque laborum ad aliquam sapiente nulla qui molestiae voluptatum modi totam esse ipsum, iusto commodi ducimus nam, sunt illo temporibus error voluptates quaerat natus minus! Quia, vero.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo quis vel natus, voluptate blanditiis, dignissimos, rem libero aliquid placeat facere et tempora voluptatem. Ex aliquam sapiente quisquam nesciunt dolores nobis.
            Accusantium, natus! Nobis temporibus cupiditate fuga, corporis dignissimos quas porro rerum eius at sit ex veniam sed minus laboriosam deleniti, hic, id magni impedit! Maiores molestiae explicabo earum qui ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat illo quaerat neque amet optio minima, nemo corporis voluptate tempore reprehenderit facilis numquam inventore molestias odit dolore dolores. Repellat,
            ratione. Nemo facere voluptatum tenetur quidem perferendis cumque aspernatur fugiat rerum ducimus inventore debitis, et sit vel eum quia alias dolorem at in perspiciatis non magnam. Dicta rem est dolor error!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iusto illum nostrum eaque labore inventore, quia velit quo nemo fuga vitae ea consequatur maiores amet debitis ipsum, accusantium, blanditiis pariatur. Vel
            repellendus asperiores omnis quidem pariatur quo iste id non recusandae temporibus. Sint tempore officiis voluptatem dicta, assumenda esse possimus quas laborum accusamus, veritatis, laudantium molestias est culpa libero harum!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptates soluta omnis adipisci architecto, laborum aliquam quo voluptatem incidunt est odit, sit nesciunt. Nam molestiae maxime impedit? Molestiae, provident hic?</p>
        </div>
        <div className="subcription">
          <Form.Group className="subs">
            <Form.Label>SMS & Mobile Call</Form.Label>
            <Form.Check type="switch" id="custom-switch" />
          </Form.Group>
          <Form.Group className="subs">
            <Form.Label>Emailing</Form.Label>
            <Form.Check type="switch" id="custom-switch" />
          </Form.Group>
          <Form.Group className="subs">
            <Form.Label>Mailing</Form.Label>
            <Form.Check type="switch" id="custom-switch" />
          </Form.Group>
        </div>
      </div>
      <div className="terms">
        <Form.Group className="title-content" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I have read and understood the above and conditions and hereby agree that I will be bounded by these conditions and policies once I have submitted this application form" />
        </Form.Group>
      </div>
      <div className="submit-btn">
        <button>CREATE CUSTOMER</button>
      </div>
    </div>
  )
}
