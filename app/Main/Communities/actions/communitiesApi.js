/* eslint-disable arrow-body-style */
import axios from "axios";

const communitiesApi = {
    fetchCommunity: (community) => {
        return axios.get("/community", {
            params: {
                comm_name: community
            }
        })
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    },
    // mock data for now
    fetchPopular: () => {
        const res = [];
        const data = [
            { name: "Rap", song: "Love Me", artist: "Lil Wayne", pop: 44 },
            { name: "Techno", song: "Young", artist: "Vallis Alps", pop: 23 },
            { name: "Dope", song: "Love Me", artist: "Jane XO", pop: 18 },
            { name: "BitchWhoGuessedIt", song: "FDB", artist: "Young Dro", pop: 8 }
        ];
        data.forEach((el) => {
            const temp = [];
            Object.keys(el).forEach((i) => {
                temp.push(el[i]);
            });
            res.push(temp);
        });
        return res;
    },
    // mock data for now
    fetchMyCommunities: () => {
        const res = [];
        const data = [
            { name: "Chillin", song: "White Room", artist: "Cream", pop: 44 },
            { name: "ForTheBoys", song: "Kokayne", artist: "Riff Raff", pop: 23 },
            { name: "Bird Up", song: "Love Me", artist: "Jane XO", pop: 18 },
            { name: "ShowMeWhatYouGot", song: "Midnight", artist: "Still Young", pop: 8 }
        ];
        data.forEach((el) => {
            const temp = [];
            Object.keys(el).forEach((i) => {
                temp.push(el[i]);
            });
            res.push(temp);
        });
        return res;
    },

    createCommunity: (community) => {
        const access = (community.access === "private");
        return axios.post("/community", {
            comm_name: community.community_name,
            access
        })
        .then(res => res.data)
        .catch((err) => {
            console.log(err);
        });
    }
};

export default communitiesApi;
