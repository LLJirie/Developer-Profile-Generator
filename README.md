# Unit 09 Node.js and ES6+ Homework: Developer Profile Generator

Create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for a favorite color, which will be used as the background color for cards.

The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following

## User Story
AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders

## Business Context

When preparing a report for stakeholders, it is important to have up-to-date information about members of the development team. Rather than navigating to each team member's GitHub profile, a command-line application will allow for quick and easy generation of profiles in PDF format.

## Libraries and Resources


## Links
Check it out!

var profileImage = res.data.avatar_url
    console.log("profile image", profileImage);

    var userName = res.data.name
    console.log("user name", userName);

    var userLocation = res.data.location
    console.log("user location", userLocation);

    var userGithub = res.data.html_url
    console.log("user GitHub", userGithub);

    var userBlog = res.data.blog
    console.log("user blog", userBlog);

    var userBio = res.data.bio
    console.log("user bio", userBio);

    var numRepo = res.data.public_repos
    console.log("number of public repositories", numRepo);

    var numFollowers = res.data.followers
    console.log("number of followers", numFollowers);

    var numGithubStars =
    console.log("number of GitHub stars", numGithubStars);

    var numUserFollowing = res.data.following
    console.log("number of users following", numUserFollowing)
    xxxxx
    //   User name = res.data.name
    //   Links to the following: 
    //   User location via Google Maps res.data.location
    //   User GitHub profile = res.data.html_url
    //   User blog = res.data.blog
    //   User bio = res.data.bio
    //   Number of public repositories = res.data.public_repos
    //   Number of followers = res.data.followers
    //   Number of GitHub stars = 
    //   Number of users following = res.data.following
     
    });

    // getqueryUrl2();

    // async function getqueryUrl2() {
    //     try {
    //         const { queryUrl2} = await inquirer.prompt({
    //             type: "input",
    //             message: "What is the Github username?",
    //             name: "username"

    //         });
    //         const {data} = await axios.get(`https:api.github.com/users/${username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&per_page=100`);

    //         console.log(data);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const queryUrl2 = `https:api.github.com/users/${username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&per_page=100`;

    // axios.get(queryUrl2).then(function(res) {
    //   console.log(res.data);

    //   var numGithubStars = res.data.stars
    // console.log("number of GitHub stars", numGithubStars);
    });
  });





function writeToFile(fileName, data) {
 
}
// https:api.github.com/users/${username}/repos?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&per_page=100


// function init() {
// }

// init();

