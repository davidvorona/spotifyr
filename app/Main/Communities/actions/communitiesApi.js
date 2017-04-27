import axios from "axios";

const communities = {
    fetchCommunity: (community) => {
        const res = [];
        const data = [
            { name: "Rap", song: "Love Me", artist: "Lil Wayne", pop: 44 },
            { name: "Techno", song: "Young", artist: "Vallis Alps", pop: 23 },
            { name: "Dope", song: "Love Me", artist: "Jane XO", pop: 18 },
            { name: "BitchWhoGuessedIt", song: "FDB", artist: "Young Dro", pop: 8 },
            { name: "Chillin", song: "White Room", artist: "Cream", pop: 44 },
            { name: "ForTheBoys", song: "Kokayne", artist: "Riff Raff", pop: 23 },
            { name: "Bird Up", song: "Love Me", artist: "Jane XO", pop: 18 },
            { name: "ShowMeWhatYouGot", song: "Midnight", artist: "Still Young", pop: 8 }
        ];
        data.forEach((el) => {
            if (el.name === community) {
                Object.keys(el).forEach((i) => {
                    res.push(el[i]);
                });
            }
        });
        console.log("Finishing fetching:", res);
        return res;
    },

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
        console.log("Finishing fetching:", res);
        return res;
    },

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
        console.log("Finishing fetching:", res);
        return res;
    },

    createCommunity: (community) => {
        const access = (community.access === "private");
        axios.post("/community", {
            comm_name: community.community_name,
            access
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }
};

export default communities;
