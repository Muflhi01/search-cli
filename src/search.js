const axios = require('axios').default;
const loading = require('loading-indicator');
const clearConsole = require('clear-any-console');
const {
    printTitle,
    printURL,
    printDUM,
} = require('./print');
const fs = require('fs');

var API_URL = 'https://wonoly-api.herokuapp.com'


module.exports.search = function(query, options)  {

    const debug = (text) =>  {
        if (options.verbose)
            console.log(text)
    }

    const timer = loading.start('Loading...');

    debug('[SERVER]: fetching API');
    console.log(options)
    axios.get(`${API_URL}/search?q=${query}&num=10`)
    .then(function({data}) {
        loading.stop(timer);
        clearConsole();
        debug(`[SERVER]: data recieved - ${data.results.length} results`);

        if (options.output) {

            if (options.onlyUrls)
                console.log('\n\n\n\n')

            if (data.did_you_mean && !options.onlyUrls)
                printDUM(data.did_you_mean)

            data.results.forEach(result => {

                if (result.description !== 'n/a') {

                    if (!options.onlyUrls)
                        printTitle(result.title)

                    printURL(result.url, options.onlyUrls)

                    if (!options.onlyUrls)
                        console.log(result.description)

                }

            });
        }


        if (options.file) {
            debug(`[SERVER]: creating file - ${options.file}`);
            fs.writeFileSync(options.file, JSON.stringify(data, null, 4))
        }



    })
    .catch(function (error) {
        loading.stop(timer);
        clearConsole();
        console.log(error);
    })


}