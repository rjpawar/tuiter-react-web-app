import { createSlice } from "@reduxjs/toolkit";

const profile =   {
    firstName: "Saitama",
    lastName: "Sensie",
    handle: "@onepunchman",
    profilePicture: "../images/profile.jpg",
    bannerPicture: "../images/banner.jpg",
    bio: "One-Punch Man (Japanese: ワンパンマン, Hepburn: Wanpanman) is a Japanese superhero manga series created by One. It tells the story of Saitama, a superhero who, because he can defeat any opponent with a single punch, grows bored from a lack of challenge. One wrote the original webcomic manga version in early 2009.",
    website: "onepunchman.com",
    location: "City Z, Japan",
    dateOfBirth: "1994-03-29",
    dateJoined: "August 2021",
    numberOfTweets: "3457",
    followingCount: "123",
    followersCount: "3.7k"
}


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            return action.payload;
        },
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;