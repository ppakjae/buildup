import axios from "axios";

export const getData = () => {
    axios
        .get("http://43.200.140.244/api/member")
        .then((response) => {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
};

