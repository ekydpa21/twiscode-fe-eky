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
      <div className="privacy">
        <h4>Standard Privacy Note</h4>
      </div>
    </div>
  )
}
