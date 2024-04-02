"use client"
import React, { useState } from 'react';

const MentorProfile = () => {
    const [profilePicture, setProfilePicture] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [collegeName,setCollegeName] = useState('');
    const [drop, setDrop] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [collegeYear, setCollegeYear] = useState('');
    const [homeCity, setHomeCity] = useState('');
    const [languageSpoken, setLanguageSpoken] = useState('');
    const [item1, setItem1] = useState('');
    const [item2, setItem2] = useState('');

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setProfilePicture(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            setPreviewImage(null);
        }
    };
    
    const handleChooseFileButtonClick = () => {
        document.getElementById('profilePictureInput').click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission link here for backend !!!!!
        console.log('Form submitted!');
    };

    return (
        <div className="container mx-auto py-20 px-4">
            <h1 className="text-4xl font-bold mb-12 py-12 text-center text-[#37517e]">Mentor Profile Registration</h1>
            <form onSubmit={handleSubmit} className="max-w-xxl mx-auto ml-12 mr-12">
            <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Profile Picture</label>
                    <div className="w-3/4 flex items-center">
                        <input type="file" id="profilePictureInput" onChange={handleProfilePictureChange} accept="image/*" className="hidden" />
                        {previewImage && (
                            <img src={previewImage} alt="Profile Preview" className="w-20 h-20 object-cover rounded-full mr-4" />
                        )}
                        <div>
                            <button type="button" onClick={handleChooseFileButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                                Upload/Change Picture
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4  font-semibold text-sm sm:text-base text-[#37517e]">Full Name</label>
                    <input type="text" placeholder="Enter your Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Email</label>
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Phone Number</label>
                    <input type="tel" placeholder="Enter your Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">College Name</label>
                    <input type="text" placeholder="Enter your College Name" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Year of College</label>
                    <input type="text" placeholder="Enter your Year of College" value={collegeYear} onChange={(e) => setCollegeYear(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Home City</label>
                    <input type="text" placeholder="Enter your Home City" value={homeCity} onChange={(e) => setHomeCity(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Drop (Yes or No)</label>
                    <input type="text" placeholder="Enter Yes or No" value={drop} onChange={(e) => setDrop(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Language Spoken</label>
                    <input type="text" placeholder="Enter your Language Spoken" value={languageSpoken} onChange={(e) => setLanguageSpoken(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Item 1</label>
                    <input type="text" placeholder="Enter your Item 1" value={item1} onChange={(e) => setItem1(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex flex-wrap mb-4 items-center">
                    <label className="w-1/4 font-semibold text-sm sm:text-base text-[#37517e]">Item 2</label>
                    <input type="text" placeholder="Enter your Item 2" value={item2} onChange={(e) => setItem2(e.target.value)} className="w-3/4 px-4 py-2 rounded border" />
                </div>
                <div className="flex justify-center mb-10 mt-10">
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-2 rounded">
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
};

export default MentorProfile;
