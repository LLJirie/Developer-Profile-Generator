const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const axios = require("axios");
require("dotenv").config();
const generateHTML = require("./myGenerateHTML");

inquirer
  .prompt(
    [{
      type: "input",
      message: "What is the Github username?",
      name: "username"
    },
    {
      type: "list",
      message: "What is your favorite color",
      name: "color",
      choices: [
        "red",
        "blue",
        "green",
        "pink"
      ]

    }]
  )
  .then(function (answers) {
    //destructure the asnwers object to get username and color variable
    const { username, color } = answers;
    console.log(username, color);

    const queryUrl = `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`;
    // first axios call to get all the user information
    axios.get(queryUrl)

      .then(function (res) {
        //second axios call to get the star count
        axios
          .get(`https://api.github.com/users/${username}/repos?client_id=${
            process.env.CLIENT_ID
            }&client_secret=${process.env.CLIENT_SECRET}&per_page=100`)

          .then(function (starResults) {
            let starTotal = 0;
            console.log(starResults.data);
            starResults.data.forEach(repo => {
              starTotal += repo.stargazers_count;
            });

            const userData = {
              profileImage: res.data.avatar_url,
              userName: res.data.name,
              userLocation: res.data.location,
              userGithub: res.data.html_url,
              userBlog: res.data.blog,
              userBio: res.data.bio,
              numRepo: res.data.public_repos,
              numFollowers: res.data.followers,
              numUserFollowing: res.data.following,
              stars: starTotal,
              color: color
            }
            return generateHTML(userData);
          }).then(function (html) {
            fs.writeFile("resume.html", html, function (err) {
              if(err) {
                return console.log(err);
              }
              console.log("success!")
            })
          });

      });
  });
 



























