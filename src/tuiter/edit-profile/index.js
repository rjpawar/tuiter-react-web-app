import React, {useState} from "react";
import WhoToFollowList from "../who-to-follow-list";
import Form from 'react-bootstrap/Form';
import {FloatingLabel, FormGroup, FormControl} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import { useNavigate } from "react-router-dom";


const EditProfileComponent = () => {
    const defaultProfile = useSelector(state => state.profile)
    const [profile, setProfile] = useState(defaultProfile)
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setBirthDate] = useState(profile.dateOfBirth);

    function handleNameChange(e) {
        const newName = e.target.value.split(" ")
        setFirstName(newName[0]);
        setLastName(newName[1]);
        const newProfile = {
            ...profile,
            firstName: firstName,
            lastName: lastName
        }
        setProfile(newProfile)
    }

    function handleBioChange(e) {
        const newBio = e.target.value;
        setBio(newBio);
        const newProfile = {
            ...profile,
            bio: newBio
        }
        setProfile(newProfile)
    }

    function handleLocationChange(e) {
        const newLocation = e.target.value;
        setLocation(newLocation);
        const newProfile = {
            ...profile,
            location: newLocation
        }
        setProfile(newProfile)
    }

    function handleWebsiteChange(e) {
        const newWebsite = e.target.value;
        setWebsite(newWebsite);
        const newProfile = {
            ...profile,
            website: newWebsite
        }
        setProfile(newProfile)
    }

    function handleBirthDateChange(e) {
        const newDate = e.target.value;
        setBirthDate(newDate);
        const newProfile = {
            ...profile,
            dateOfBirth: newDate
        }
        setProfile(newProfile)
    }
    const dispatch = useDispatch();
    const updateProfileHandler = (event) => {
        dispatch(updateProfile({
            ...profile,
            firstName: firstName,
            lastName:lastName,
            bio: bio,
            location: location,
            website: website}));
    }

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `../profile`;
        navigate(path);
    }
    return(
        <>
            <div className="row mt-2">
                <div className="col-10 col-lg-8 col-xl-7 border rounded px-0 py-2">
                    <div className="row px-3">
                        <button className="btn col-1 py-2"
                                onClick={() => routeChange()}><i className="bi bi-x-lg"></i>
                        </button>
                        <div className="col-9 py-2">
                            <div className="fw-bold"> Edit Profile</div>
                        </div>
                        <div className="col-2">
                            <button className="rounded-pill btn btn-dark float-end mb-2 ps-3 pe-3 me-1 fw-bold text-white"
                                    onClick={(event) => {
                                        updateProfileHandler(event);
                                        routeChange()
                                    }}
                            >Save</button>
                        </div>
                    </div>
                    <div>
                        <div className="position-relative">
                            <div className="row position-relative d-inline ms-0">
                                <img src={profile.bannerPicture} className="w-100 px-0 mx-0 border-0"></img>
                                <div className="col text-center card-img-overlay align-middle">
                                    <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75 mx-1"><i className="bi bi-camera text-white"></i></button>
                                    <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75"><i className="bi bi-x-lg text-white"></i></button>
                                </div>

                            </div>
                            <div className="row img-wrapper card-img-overlay top-50 h-100 ms-3 mb-4 position-absolute">
                                <div className="col-2 card-img-overlay mt-5 img-fluid">
                                    <img src={profile.profilePicture} className="h-50 rounded-circle mx-3"></img>
                                    <div className="card-img-overlay rounded-circle start-50 pt-4">
                                        <button className="btn rounded-circle bg-secondary border-0 bg-opacity-75 m-4">
                                            <i className="bi bi-camera text-white"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row d-inline px-3">
                        <Form>
                            <FormGroup className="mt-3 mb-3" controlId="formGroupName">
                                <FloatingLabel id="fName" label="Name">
                                    <FormControl type="input"
                                                 value={firstName + " " + lastName}
                                                 onChange={(event) => {
                                                     handleNameChange(event)}
                                                 }
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="formGroupBio">
                                <FloatingLabel id="fBio" label="bio">
                                    <FormControl as="textarea"
                                                 style={{height: '120px', background:"white"}}
                                                 value={bio}
                                                 onChange={(event) =>
                                                     handleBioChange(event)}
                                    />
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="formGroupLocation">
                                <FloatingLabel id="fLocation" label="Location" className="pb-3">
                                    <FormControl as="input"
                                                 value={location}
                                                 onChange={(event) =>
                                                     handleLocationChange(event)}/>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="formGroupWebsite">
                                <FloatingLabel id="fName" label="Website" className="mb-3">
                                    <FormControl as="input"
                                                 value={website}
                                                 onChange={(event) =>
                                                     handleWebsiteChange(event)}/>
                                </FloatingLabel>
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="formGroupBirthDate">
                                <FloatingLabel id="fBirth" label="Birth Date" className="mb-3">
                                    <FormControl as="input"
                                                 value={dateOfBirth}
                                                 type="date"
                                                 onChange={(event) =>
                                                     handleBirthDateChange(event)}/>
                                </FloatingLabel>
                            </FormGroup>
                        </Form>
                        <div className="mt-3">
                            Switch to Professional
                            <a href="#" className="link-primary text-decoration-none"><i className="bi bi-arrow-right float-end"></i></a>
                        </div>
                    </div>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-5">
                    <WhoToFollowList/>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;