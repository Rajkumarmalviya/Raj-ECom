import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";

import { Link } from "react-router-dom";
export default function UpperHeader(props) {
  const [country, setCountry] = useState("");
  return (
    <header
      style={{
        width: "100%",
        padding: "0% 5%",
        backgroundColor: "var(--announcement-background)",
      }}
    >
      <section
        style={{
          width: "100%",
          padding: "1.7% 1%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul
            style={{
              display: "flex",
              color: "white",
            }}
          >
            <li
              style={{
                margin: "0% 5%",
                cursor:'pointer'
              }}
            >
             <a href="http://facebook.com" style={{color:"#ffffff"}} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a> 
            </li>
            <li
              style={{
                margin: "0% 5%",
                cursor:'pointer'
              }}
            >
              <a href="http://instagram.com" style={{color:"#ffffff"}} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
              
            </li>
            <li
              style={{
                margin: "0% 5%",
                cursor:'pointer'
              }}
            >
              <a href="http://pintrest.com" style={{color:"#ffffff"}} target="_blank" rel="noopener noreferrer"><FaPinterest /></a> 
              
            </li>
            <li
              style={{
                margin: "0% 5%",
                cursor:'pointer'
              }}
            >
              <a href="http://youtube.com" style={{color:"#ffffff"}} target="_blank" rel="noopener noreferrer"><FaYoutube /></a> 
              
            </li>
          </ul>

          <ul
            style={{
              display: "flex",
              justifyContent: "end",
              gap:"10px",
              color: "white",
            }}
          >
            <li>
              <Link style={{color:"white"}} to="/account/login">
              <CgProfile />
              </Link>
            </li>
            {/* <li
              style={{
                width: "29%",
              }}
            >
              <ReactCountryFlagsCurrencySelect
                defaultCountry="US"
                searchable={false}
                country={country}
                onSelect={(country) => setCountry(country)}
              ></ReactCountryFlagsCurrencySelect>
            </li> */}

            <li>
              <button style={{cursor:"pointer"}} onClick={props.handle} className="cart-button">
                <SlHandbag />
              </button>
            </li>
          </ul>
        </div>
      </section>
    </header>
  );
}
