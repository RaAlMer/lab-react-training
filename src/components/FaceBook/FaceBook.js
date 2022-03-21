import { useState } from "react";
import profiles_DB from "../../data/berlin.json";
import "./FaceBook.css";

export function FaceBook() {
  const [backgroundCard, setBackgroundCard] = useState("white");
  const [profiles, setProfiles] = useState(profiles_DB);
  let countries = [];

  const distinctJSON = () => {
    profiles.map((profile) => {
      if (!countries.includes(profile.country)) {
        countries.push(profile.country);
      }
    });
  };

  const handleCountry = (countryInp) => {
      /* const filteredCountries = profiles.filter(profile => {
          return profile.country === countryInp
      })
      setProfiles(filteredCountries); */
  };

  const handleWhite = () => {
    setBackgroundCard("white");
  };

  return (
    <div>
      <div className="btns">
        <button onClick={handleWhite}>All</button>
        {distinctJSON()}
        {countries.map((country) => (
          <button key={country} onClick={handleCountry(country)}>{country}</button>
        ))}
      </div>
      {profiles.map((profile) => (
        <div
          className="profile_container"
          style={{ backgroundColor: backgroundCard }}
          key={profile.firstName}
        >
          <img src={profile.img} alt="pic" />
          <div className="profile-info">
            <p>
              <b>First name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            {profile.isStudent ? (
              <p>
                <b>Type:</b> Student
              </p>
            ) : (
              <p>
                <b>Type:</b> Teacher
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
