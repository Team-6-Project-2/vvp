const router = require('express').Router();
const withAuth = require('../../utils/auth');
// const ApifyClient = require('apify-client');
const axios = require("axios");

router.get('/', withAuth, async (req, res) => {
  try {

    console.log("hit")

    const data = await axios.get('https://covidtracking.com/api/us/daily');
    console.log('This is our data', data);
    // const dataJson = await data.json(); 
    // console.log("-----------------")
    // console.log(dataJson);

    // axios.get(`https://api.apify.com/v2/acts/petrpatek~covid-usa-cdc/runs?token=${process.env.APIFY_TOKEN}`)
    //     .then(data => {
    //         console.log(data.data.data.items[0])
    //     })


    // const client = new ApifyClient({
    //   token: process.env.APIFY_TOKEN,
    // });

    // const input = {};

    // // Run the actor and wait for it to finish
    // (async () => {
    //     const run = await client.actor("petrpatek/covid-usa-cdc").call(input);

    // // Fetch and print actor results from the run's dataset (if any)
    // console.log('Results from dataset');
    // const { items } = await client.dataset(run.defaultDatasetId).listItems();
    // console.log(items);
    // // items.forEach((item) => {
    // //     console.log(item);
    // // });
    // })()
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;