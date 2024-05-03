import React from 'react'
import './My_profile.css'
const My_Profile = () => {
  return (
    <div className="containeer">
    <h1 class="text-center mt-24 text-3xl font-bold">My Profile</h1>
    <div class="row">
      <div class="left-section">
        <div class="text-center">
          <img src="https://as2.ftcdn.net/v2/jpg/02/07/19/25/1000_F_207192544_YgU1PV8sdgLpQ71kLCopW1pIGmNpFIZe.jpg" alt="Profile Picture" class="profile-picture" />
        </div>
        <div class="form-group">
          <button class="upload-btn">Upload or Change your picture</button>
        </div>
      </div>
      <div class="right-section">
        <form >
          <div class="form-group row ">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" placeholder="Enter your full name" />
          </div>
          <div class="form-group row">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div class="form-group row">
            <label for="phoneNumber">Phone Number</label>
            <input type="tel" id="phoneNumber" placeholder="Enter your phone number" />
          </div>
          <div class="form-group row">
            <label for="gender">Gender</label>
            <input type="text" id="gender" placeholder="Enter your gender" />
          </div>
          <div class="form-group row">
            <label for="class">Class</label>
            <input type="text" id="class" placeholder="Enter your class" />
          </div>
          <div class="form-group row">
            <label for="competitiveExam">Competitive Exam</label>
            <input type="text" id="competitiveExam" placeholder="Enter competitive exam" />
          </div>
          <div class="form-group row">
            <label for="institutionName">Institution Name</label>
            <input type="text" id="institutionName" placeholder="Enter institution name" />
          </div>
          <div class="form-group row">
            <label for="item1">Item 1</label>
            <input type="text" id="item1" placeholder="Enter item 1" />
          </div>
          <div class="form-group row">
            <label for="item2">Item 2</label>
            <input type="text" id="item2" placeholder="Enter item 2" />
          </div>
          <button type="submit" class="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default My_Profile
