var request = require('request');
var cheerio = require('cheerio');
var convertCurrency = require('nodejs-currency-converter');

const rawResults = [];
var finalResults = [];

function savePrice(error, response, body) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body);
        var price = $('.match_price');
        if (this.replace){
            price.text().replace(',')
        }
        rawResults.push({"country":this.country, "price": price.text(), "currency": this.currency});
    }
}

function convertCurrencies(finalCurrency){

    if(finalCurrency == undefined){
        finalResults = [...rawResults];
    } else {
        
        rawResults.forEach(res => {
            let convertedValue = convertCurrency()
        });

    }

}

function cachedCurrency(val){
    return finalResults.filter(
        function(finalResults){ return finalResults.price == val }
    );
}

function printPrices(finalCurrency){
    

}

function printGame(error, response, body) {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(body);
        var game = $('.match_name');
        console.log(`Game: ${game.text()}`);
    }
}

function getCountryByCode(code) {
    return countries.filter(
        function(countries){ return countries.code == code }
    );
}

function getCountryByName(name) {
    return countries.filter(
        function(countries){ return countries.name == name }
    );
}

var countries = [
    {"name": "Afghanistan", "code": "AF", "currency": "USD", "replace": false},
    {"name": "Albania", "code": "AL", "currency": "EUR", "replace": true},
    {"name": "Algeria", "code": "DZ", "currency": "USD", "replace": false},
    {"name": "American Samoa", "code": "AS", "currency": "USD", "replace": false},
    {"name": "AndorrA", "code": "AD", "currency": "USD", "replace": true},
    {"name": "Angola", "code": "AO", "currency": "USD", "replace": false},
    {"name": "Anguilla", "code": "AI", "currency": "USD", "replace": false},
    {"name": "Antarctica", "code": "AQ", "currency": "USD", "replace": false},
    {"name": "Antigua and Barbuda", "code": "AG", "currency": "USD", "replace": false},
    {"name": "Argentina", "code": "AR", "currency": "ARS", "replace": true},
    {"name": "Armenia", "code": "AM", "currency": "USD", "replace": false},
    {"name": "Aruba", "code": "AW", "currency": "USD", "replace": false},
    {"name": "Australia", "code": "AU", "currency": "AUD", "replace": false},
    {"name": "Austria", "code": "AT", "currency": "EUR", "replace": true},
    {"name": "Azerbaijan", "code": "AZ", "currency": "USD", "replace": false},
    {"name": "Bahamas", "code": "BS", "currency": "USD", "replace": false},
    {"name": "Bahrain", "code": "BH", "currency": "USD", "replace": false},
    {"name": "Bangladesh", "code": "BD", "currency": "USD", "replace": false},
    {"name": "Barbados", "code": "BB", "currency": "USD", "replace": false},
    {"name": "Belarus", "code": "BY", "currency": "USD", "replace": false},
    {"name": "Belgium", "code": "BE", "currency": "EUR", "replace": true},
    {"name": "Belize", "code": "BZ", "currency": "USD", "replace": false},
    {"name": "Benin", "code": "BJ", "currency": "USD", "replace": false},
    {"name": "Bermuda", "code": "BM", "currency": "USD", "replace": false},
    {"name": "Bhutan", "code": "BT", "currency": "USD", "replace": false},
    {"name": "Bolivia", "code": "BO", "currency": "USD", "replace": false},
    {"name": "Bosnia and Herzegovina", "code": "BA", "currency": "USD", "replace": true},
    {"name": "Botswana", "code": "BW", "currency": "USD", "replace": false},
    {"name": "Bouvet Island", "code": "BV", "currency": "USD", "replace": false},
    {"name": "Brazil", "code": "BR", "currency": "BRL", "replace": true},
    {"name": "British Indian Ocean Territory", "code": "IO", "currency": "USD", "replace": false},
    {"name": "Brunei Darussalam", "code": "BN", "currency": "USD", "replace": false},
    {"name": "Bulgaria", "code": "BG", "currency": "EUR", "replace": true},
    {"name": "Burkina Faso", "code": "BF", "currency": "USD", "replace": false},
    {"name": "Burundi", "code": "BI", "currency": "USD", "replace": false},
    {"name": "Cambodia", "code": "KH", "currency": "USD", "replace": false},
    {"name": "Cameroon", "code": "CM", "currency": "USD", "replace": false},
    {"name": "Canada", "code": "CA", "currency": "CAD", "replace": false},
    {"name": "Cape Verde", "code": "CV", "currency": "USD", "replace": false},
    {"name": "Cayman Islands", "code": "KY", "currency": "USD", "replace": false},
    {"name": "Central African Republic", "code": "CF", "currency": "USD", "replace": false},
    {"name": "Chad", "code": "TD", "currency": "USD", "replace": false},
    {"name": "Chile", "code": "CL", "currency": "CLP", "replace": true},
    {"name": "China", "code": "CN", "currency": "CNY", "replace": false},
    {"name": "Christmas Island", "code": "CX", "currency": "USD", "replace": false},
    {"name": "Cocos (Keeling) Islands", "code": "CC", "currency": "USD", "replace": false},
    {"name": "Colombia", "code": "CO", "currency": "COP", "replace": true},
    {"name": "Comoros", "code": "KM", "currency": "USD", "replace": false},
    {"name": "Congo", "code": "CG", "currency": "USD", "replace": false},
    {"name": "Congo, The Democratic Republic of the", "code": "CD", "currency": "USD", "replace": false},
    {"name": "Cook Islands", "code": "CK", "currency": "USD", "replace": false},
    {"name": "Costa Rica", "code": "CR", "currency": "CRC", "replace": true},
    {"name": "Cote D'Ivoire", "code": "CI", "currency": "USD", "replace": false},
    {"name": "Croatia", "code": "HR", "currency": "EUR", "replace": true},
    {"name": "Cuba", "code": "CU", "currency": "USD", "replace": false},
    {"name": "Cyprus", "code": "CY", "currency": "EUR", "replace": true},
    {"name": "Czech Republic", "code": "CZ", "currency": "EUR", "replace": true},
    {"name": "Denmark", "code": "DK", "currency": "EUR", "replace": true},
    {"name": "Djibouti", "code": "DJ", "currency": "USD", "replace": false},
    {"name": "Dominica", "code": "DM", "currency": "USD", "replace": false},
    {"name": "Dominican Republic", "code": "DO", "currency": "USD", "replace": false},
    {"name": "Ecuador", "code": "EC", "currency": "USD", "replace": false},
    {"name": "Egypt", "code": "EG", "currency": "USD", "replace": false},
    {"name": "El Salvador", "code": "SV", "currency": "USD", "replace": false},
    {"name": "Equatorial Guinea", "code": "GQ", "currency": "USD", "replace": false},
    {"name": "Eritrea", "code": "ER", "currency": "USD", "replace": false},
    {"name": "Estonia", "code": "EE", "currency": "EUR", "replace": true},
    {"name": "Ethiopia", "code": "ET", "currency": "USD", "replace": false},
    {"name": "Falkland Islands (Malvinas)", "code": "FK", "currency": "USD", "replace": false},
    {"name": "Faroe Islands", "code": "FO", "currency": "EUR", "replace": true},
    {"name": "Fiji", "code": "FJ", "currency": "USD", "replace": false},
    {"name": "Finland", "code": "FI", "currency": "EUR", "replace": true},
    {"name": "France", "code": "FR", "currency": "EUR", "replace": true},
    {"name": "French Guiana", "code": "GF", "currency": "EUR", "replace": true},
    {"name": "French Polynesia", "code": "PF", "currency": "EUR", "replace": true},
    {"name": "French Southern Territories", "code": "TF", "currency": "USD", "replace": false},
    {"name": "Gabon", "code": "GA", "currency": "USD", "replace": false},
    {"name": "Gambia", "code": "GM", "currency": "USD", "replace": false},
    {"name": "Georgia", "code": "GE", "currency": "USD", "replace": false},
    {"name": "Germany", "code": "DE", "currency": "EUR", "replace": true},
    {"name": "Ghana", "code": "GH", "currency": "USD", "replace": false},
    {"name": "Gibraltar", "code": "GI", "currency": "EUR", "replace": true},
    {"name": "Greece", "code": "GR", "currency": "EUR", "replace": true},
    {"name": "Greenland", "code": "GL", "currency": "USD", "replace": false},
    {"name": "Grenada", "code": "GD", "currency": "USD", "replace": false},
    {"name": "Guadeloupe", "code": "GP", "currency": "EUR", "replace": true},
    {"name": "Guam", "code": "GU", "currency": "USD", "replace": false},
    {"name": "Guatemala", "code": "GT", "currency": "USD", "replace": false},
    {"name": "Guernsey", "code": "GG", "currency": "GBP", "replace": false},
    {"name": "Guinea", "code": "GN", "currency": "USD", "replace": false},
    {"name": "Guinea-Bissau", "code": "GW", "currency": "USD", "replace": false},
    {"name": "Guyana", "code": "GY", "currency": "USD", "replace": false},
    {"name": "Haiti", "code": "HT", "currency": "USD", "replace": false},
    {"name": "Heard Island and Mcdonald Islands", "code": "HM", "currency": "USD", "replace": false},
    {"name": "Holy See (Vatican City State)", "code": "VA", "currency": "EUR", "replace": true},
    {"name": "Honduras", "code": "HN", "currency": "USD", "replace": false},
    {"name": "Hong Kong", "code": "HK", "currency": "HKD", "replace": false},
    {"name": "Hungary", "code": "HU", "currency": "EUR", "replace": true},
    {"name": "Iceland", "code": "IS", "currency": "USD", "replace": false},
    {"name": "India", "code": "IN", "currency": "INR", "replace": false},
    {"name": "Indonesia", "code": "ID", "currency": "IDR", "replace": true},
    {"name": "Iran, Islamic Republic Of", "code": "IR", "currency": "USD", "replace": false},
    {"name": "Iraq", "code": "IQ", "currency": "USD", "replace": false},
    {"name": "Ireland", "code": "IE", "currency": "EUR", "replace": true},
    {"name": "Isle of Man", "code": "IM", "currency": "GBP", "replace": false},
    {"name": "Israel", "code": "IL", "currency": "ILS", "replace": false},
    {"name": "Italy", "code": "IT", "currency": "EUR", "replace": true},
    {"name": "Jamaica", "code": "JM", "currency": "USD", "replace": false},
    {"name": "Japan", "code": "JP", "currency": "JPY", "replace": false},
    {"name": "Jersey", "code": "JE", "currency": "GBP", "replace": false},
    {"name": "Jordan", "code": "JO", "currency": "USD", "replace": false},
    {"name": "Kazakhstan", "code": "KZ", "currency": "KZT", "replace": true},
    {"name": "Kenya", "code": "KE", "currency": "USD", "replace": false},
    {"name": "Kiribati", "code": "KI", "currency": "USD", "replace": false},
    {"name": "Korea, Democratic People Republic of", "code": "KP", "currency": "USD", "replace": false},
    {"name": "Korea, Republic of", "code": "KR", "currency": "KRW", "replace": false},
    {"name": "Kuwait", "code": "KW", "currency": "KWD", "replace": false},
    {"name": "Kyrgyzstan", "code": "KG", "currency": "USD", "replace": false},
    {"name": "Lao People Democratic Republic", "code": "LA", "currency": "USD", "replace": false},
    {"name": "Latvia", "code": "LV", "currency": "EUR", "replace": true},
    {"name": "Lebanon", "code": "LB", "currency": "USD", "replace": false},
    {"name": "Lesotho", "code": "LS", "currency": "USD", "replace": false},
    {"name": "Liberia", "code": "LR", "currency": "USD", "replace": false},
    {"name": "Libyan Arab Jamahiriya", "code": "LY", "currency": "USD", "replace": false},
    {"name": "Liechtenstein", "code": "LI", "currency": "CHF", "replace": false},
    {"name": "Lithuania", "code": "LT", "currency": "EUR", "replace": true},
    {"name": "Luxembourg", "code": "LU", "currency": "EUR", "replace": true},
    {"name": "Macao", "code": "MO", "currency": "USD", "replace": false},
    {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK", "currency": "EUR", "replace": true},
    {"name": "Madagascar", "code": "MG", "currency": "USD", "replace": false},
    {"name": "Malawi", "code": "MW", "currency": "USD", "replace": false},
    {"name": "Malaysia", "code": "MY", "currency": "MYR", "replace": false},
    {"name": "Maldives", "code": "MV", "currency": "USD", "replace": false},
    {"name": "Mali", "code": "ML", "currency": "USD", "replace": false},
    {"name": "Malta", "code": "MT", "currency": "EUR", "replace": true},
    {"name": "Marshall Islands", "code": "MH", "currency": "USD", "replace": false},
    {"name": "Martinique", "code": "MQ", "currency": "EUR", "replace": true},
    {"name": "Mauritania", "code": "MR", "currency": "USD", "replace": false},
    {"name": "Mauritius", "code": "MU", "currency": "USD", "replace": false},
    {"name": "Mayotte", "code": "YT", "currency": "USD", "replace": false},
    {"name": "Mexico", "code": "MX", "currency": "MXN", "replace": false},
    {"name": "Micronesia, Federated States of", "code": "FM", "currency": "USD", "replace": false},
    {"name": "Moldova, Republic of", "code": "MD", "currency": "USD", "replace": false},
    {"name": "Monaco", "code": "MC", "currency": "EUR", "replace": true},
    {"name": "Mongolia", "code": "MN", "currency": "USD", "replace": false},
    {"name": "Montenegro", "code": "ME", "currency": "EUR", "replace": true},
    {"name": "Montserrat", "code": "MS", "currency": "USD", "replace": false},
    {"name": "Morocco", "code": "MA", "currency": "USD", "replace": false},
    {"name": "Mozambique", "code": "MZ", "currency": "USD", "replace": false},
    {"name": "Myanmar", "code": "MM", "currency": "USD", "replace": false},
    {"name": "Namibia", "code": "NA", "currency": "USD", "replace": false},
    {"name": "Nauru", "code": "NR", "currency": "USD", "replace": false},
    {"name": "Nepal", "code": "NP", "currency": "USD", "replace": false},
    {"name": "Netherlands Antilles", "code": "AN", "currency": "USD", "replace": false},
    {"name": "Netherlands", "code": "NL", "currency": "EUR", "replace": true},
    {"name": "New Caledonia", "code": "NC", "currency": "USD", "replace": true},
    {"name": "New Zealand", "code": "NZ", "currency": "NZD", "replace": false},
    {"name": "Nicaragua", "code": "NI", "currency": "USD", "replace": false},
    {"name": "Niger", "code": "NE", "currency": "USD", "replace": false},
    {"name": "Nigeria", "code": "NG", "currency": "USD", "replace": false},
    {"name": "Niue", "code": "NU", "currency": "USD", "replace": false},
    {"name": "Norfolk Island", "code": "NF", "currency": "USD", "replace": false},
    {"name": "Northern Mariana Islands", "code": "MP", "currency": "USD", "replace": false},
    {"name": "Norway", "code": "NO", "currency": "NOK", "replace": true},
    {"name": "Oman", "code": "OM", "currency": "USD", "replace": false},
    {"name": "Pakistan", "code": "PK", "currency": "USD", "replace": false},
    {"name": "Palau", "code": "PW", "currency": "USD", "replace": false},
    {"name": "Palestinian Territory, Occupied", "code": "PS", "currency": "USD", "replace": false},
    {"name": "Panama", "code": "PA", "currency": "USD", "replace": false},
    {"name": "Papua New Guinea", "code": "PG", "currency": "USD", "replace": false},
    {"name": "Paraguay", "code": "PY", "currency": "USD", "replace": false},
    {"name": "Peru", "code": "PE", "currency": "PEN", "replace": peru},
    {"name": "Philippines", "code": "PH", "currency": "PHP", "replace": false},
    {"name": "Pitcairn", "code": "PN", "currency": "USD", "replace": false},
    {"name": "Poland", "code": "PL", "currency": "PLN", "replace": true},
    {"name": "Portugal", "code": "PT", "currency": "EUR", "replace": true},
    {"name": "Puerto Rico", "code": "PR", "currency": "USD", "replace": false},
    {"name": "Qatar", "code": "QA", "currency": "QAR", "replace": false},
    {"name": "RWANDA", "code": "RW", "currency": "USD", "replace": false},
    {"name": "Reunion", "code": "RE", "currency": "EUR", "replace": true},
    {"name": "Romania", "code": "RO", "currency": "EUR", "replace": true},
    {"name": "Russian Federation", "code": "RU", "currency": "RUB", "replace": true},
    {"name": "Saint Helena", "code": "SH", "currency": "USD", "replace": false},
    {"name": "Saint Kitts and Nevis", "code": "KN", "currency": "USD", "replace": false},
    {"name": "Saint Lucia", "code": "LC", "currency": "USD", "replace": false},
    {"name": "Saint Pierre and Miquelon", "code": "PM", "currency": "USD", "replace": false},
    {"name": "Saint Vincent and the Grenadines", "code": "VC", "currency": "USD", "replace": false},
    {"name": "Samoa", "code": "WS", "currency": "USD", "replace": false},
    {"name": "San Marino", "code": "SM", "currency": "EUR", "replace": true},
    {"name": "Sao Tome and Principe", "code": "ST", "currency": "USD", "replace": false},
    {"name": "Saudi Arabia", "code": "SA", "currency": "SAR", "replace": false},
    {"name": "Senegal", "code": "SN", "currency": "USD", "replace": false},
    {"name": "Serbia", "code": "RS", "currency": "EUR", "replace": true},
    {"name": "Seychelles", "code": "SC", "currency": "USD", "replace": false},
    {"name": "Sierra Leone", "code": "SL", "currency": "USD", "replace": false},
    {"name": "Singapore", "code": "SG", "currency": "SGD", "replace": false},
    {"name": "Slovakia", "code": "SK", "currency": "EUR", "replace": true},
    {"name": "Slovenia", "code": "SI", "currency": "EUR", "replace": true},
    {"name": "Solomon Islands", "code": "SB", "currency": "USD", "replace": false},
    {"name": "Somalia", "code": "SO", "currency": "USD", "replace": false},
    {"name": "South Africa", "code": "ZA", "currency": "ZAR", "replace": false},
    {"name": "South Georgia and the South Sandwich Islands", "code": "GS", "currency": "EUR", "replace": false},
    {"name": "Spain", "code": "ES", "currency": "EUR", "replace": true},
    {"name": "Sri Lanka", "code": "LK", "currency": "USD", "replace": false},
    {"name": "Sudan", "code": "SD", "currency": "USD", "replace": false},
    {"name": "Suriname", "code": "SR", "currency": "USD", "replace": false},
    {"name": "Svalbard and Jan Mayen", "code": "SJ", "currency": "EUR", "replace": true},
    {"name": "Swaziland", "code": "SZ", "currency": "USD", "replace": false},
    {"name": "Sweden", "code": "SE", "currency": "EUR", "replace": true},
    {"name": "Switzerland", "code": "CH", "currency": "CHF", "replace": false},
    {"name": "Syrian Arab Republic", "code": "SY", "currency": "USD", "replace": false},
    {"name": "Taiwan, Province of China", "code": "TW", "currency": "TWD", "replace": false},
    {"name": "Tajikistan", "code": "TJ", "currency": "USD", "replace": false},
    {"name": "Tanzania, United Republic of", "code": "TZ", "currency": "USD", "replace": false},
    {"name": "Thailand", "code": "TH", "currency": "THB", "replace": false},
    {"name": "Timor-Leste", "code": "TL", "currency": "USD", "replace": false},
    {"name": "Togo", "code": "TG", "currency": "USD", "replace": false},
    {"name": "Tokelau", "code": "TK", "currency": "USD", "replace": false},
    {"name": "Tonga", "code": "TO", "currency": "USD", "replace": false},
    {"name": "Trinidad and Tobago", "code": "TT", "currency": "USD", "replace": false},
    {"name": "Tunisia", "code": "TN", "currency": "USD", "replace": false},
    {"name": "Turkey", "code": "TR", "currency": "TRY", "replace": true},
    {"name": "Turkmenistan", "code": "TM", "currency": "USD", "replace": false},
    {"name": "Turks and Caicos Islands", "code": "TC", "currency": "USD", "replace": false},
    {"name": "Tuvalu", "code": "TV", "currency": "USD", "replace": false},
    {"name": "Uganda", "code": "UG", "currency": "USD", "replace": false},
    {"name": "Ukraine", "code": "UA", "currency": "UAH", "replace": true},
    {"name": "United Arab Emirates", "code": "AE", "currency": "AED", "replace": false},
    {"name": "United Kingdom", "code": "GB", "currency": "GBP", "replace": false},
    {"name": "United States Minor Outlying Islands", "code": "UM", "currency": "USD", "replace": false},
    {"name": "United States", "code": "US", "currency": "USD", "replace": false},
    {"name": "Uruguay", "code": "UY", "currency": "UYU", "replace": true},
    {"name": "Uzbekistan", "code": "UZ", "currency": "USD", "replace": false},
    {"name": "Vanuatu", "code": "VU", "currency": "USD", "replace": false},
    {"name": "Venezuela", "code": "VE", "currency": "USD", "replace": false},
    {"name": "Viet Nam", "code": "VN", "currency": "VND", "replace": true},
    {"name": "Virgin Islands, British", "code": "VG", "currency": "USD", "replace": false},
    {"name": "Virgin Islands, U.S.", "code": "VI", "currency": "USD", "replace": false},
    {"name": "Wallis and Futuna", "code": "WF", "currency": "USD", "replace": false},
    {"name": "Western Sahara", "code": "EH", "currency": "USD", "replace": false},
    {"name": "Yemen", "code": "YE", "currency": "USD", "replace": false},
    {"name": "Zambia", "code": "ZM", "currency": "USD", "replace": false},
    {"name": "Zimbabwe", "code": "ZW", "currency": "USD", "replace": false},
    {"name": "land Islands", "code": "AX", "currency": "USD", "replace": true},
]

async function init(){

    // const gameID = readID();

    console.log(process.argv.slice(2));

    const gameID = process.argv.slice(2)[0];
    const prefferedCountry = process.argv.slice(2)[1];

    const nameReffer = getCountryByName(prefferedCountry)[0];
    const codeReffer = getCountryByCode(prefferedCountry)[0];

    

    let headers = {
        'Accept': '*/*',
        'Referer': 'https://store.steampowered.com/app/644930/They_Are_Billions/',
        'X-Requested-With': 'json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36'
    };
    
    let options = {
        url: `https://store.steampowered.com/search/suggest?term=${gameID}&f=games&cc=us&l=english&`,
        headers: headers
    };

    await request(options, printGame);

    if (prefferedCountry == undefined) {
        for (let i = 0; i < countries.length; i++) {

            let options = {
                url: `https://store.steampowered.com/search/suggest?term=${gameID}&f=games&cc=${countries[i].code}&l=english&`,
                headers: headers
            };
    
            request(options, savePrice.bind({country: countries[i].name, currency: countries[i].currency}));
    
        }
    } else if (codeReffer != undefined){

        console.log('Searching for pricing in ' + codeReffer.name);
        let options = {
            url: `https://store.steampowered.com/search/suggest?term=${gameID}&f=games&cc=${prefferedCountry}&l=english&`,
            headers: headers
        };
        request(options, savePrice.bind({country: prefferedCountry, currency: countries[i].currency}));

    } else if (nameReffer != undefined){

        console.log('Searching for pricing in ' + nameReffer.name);
        let options = {
            url: `https://store.steampowered.com/search/suggest?term=${gameID}&f=games&cc=${nameReffer.code}&l=english&`,
            headers: headers
        };

        request(options, savePrice.bind({country: prefferedCountry, currency: countries[i].currency}));
    } else {
        console.log('Invalid country name/code');
    }

}

init();


