const phonePlaceholders = [{
        "type": "af",
        "name": "Afghanistan",
        "placeholder": "e.g. 070 123 4567",
        "regexValidation": "^(0|\\+93)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "ax",
        "name": "Aland Islands",
        "placeholder": "e.g. 040 1234567",
        "regexValidation": "^(0|\\+358)?( )?[0-9]{3} ?[0-9]{6,7}$"
    },
    {
        "type": "al",
        "name": "Albania",
        "placeholder": "e.g. 06 123 4567",
        "regexValidation": "^(0|\\+355)?( )?[0-9]{2} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "dz",
        "name": "Algeria",
        "placeholder": "e.g. 05 12 34 56 78",
        "regexValidation": "^(0|\\+213)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "as",
        "name": "American Samoa",
        "placeholder": "e.g. 684 733 1234",
        "regexValidation": "^(0|\\+1684)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "ad",
        "name": "Andorra",
        "placeholder": "e.g. 312 345",
        "regexValidation": "^(0|\\+376)?( )?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "ao",
        "name": "Angola",
        "placeholder": "e.g. 923 123 456",
        "regexValidation": "^(0|\\+244)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "ai",
        "name": "Anguilla",
        "placeholder": "e.g. 264 235 1234",
        "regexValidation": "^(0|\\+1264)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "aq",
        "name": "Antarctica",
        "placeholder": "e.g. 89123456789",
        "regexValidation": "^(0|\\+672)?( )?[0-9]{5,12}$"
    },
    {
        "type": "ag",
        "name": "Antigua and Barbuda",
        "placeholder": "e.g. 268 464 1234",
        "regexValidation": "^(0|\\+1268)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "ar",
        "name": "Argentina",
        "placeholder": "e.g. 011 15 1234-5678",
        "regexValidation": "^(0|\\+54)?( )?[0-9]{3,4} ?[0-9]{2,4} ?[0-9]{4}$"
    },
    {
        "type": "am",
        "name": "Armenia",
        "placeholder": "e.g. 077 123456",
        "regexValidation": "^(0|\\+374)?( )?[0-9]{2,3} ?[0-9]{6}$"
    },
    {
        "type": "aw",
        "name": "Aruba",
        "placeholder": "e.g. 560 1234",
        "regexValidation": "^(0|\\+297)?( )?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "au",
        "name": "Australia",
        "placeholder": "e.g. 0412 345 678",
        "regexValidation": "^(0|\\+61)?( )?[0-9]{4} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "at",
        "name": "Austria",
        "placeholder": "e.g. 0664 1234567",
        "regexValidation": "^(0|\\+43)?( )?[0-9]{4,5} ?[0-9]{7,8}$"
    },
    {
        "type": "az",
        "name": "Azerbaijan",
        "placeholder": "e.g. 040 123 45 67",
        "regexValidation": "^(0|\\+994)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "bs",
        "name": "Bahamas",
        "placeholder": "e.g. 242 359 1234",
        "regexValidation": "^(0|\\+1242)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "bh",
        "name": "Bahrain",
        "placeholder": "e.g. 3599 1234",
        "regexValidation": "^(0|\\+973)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "bd",
        "name": "Bangladesh",
        "placeholder": "e.g. 01712 345678",
        "regexValidation": "^(0|\\+880)?( )?[0-9]{5,6} ?[0-9]{6,7}$"
    },
    {
        "type": "bb",
        "name": "Barbados",
        "placeholder": "e.g. 246 231 2345",
        "regexValidation": "^(0|\\+1246)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "by",
        "name": "Belarus",
        "placeholder": "e.g. 29 123 45 67",
        "regexValidation": "^(0|\\+375)?( )?[0-9]{2} ?[0-9]{3} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "be",
        "name": "Belgium",
        "placeholder": "e.g. 0470 123 456",
        "regexValidation": "^(0|\\+32)?( )?[0-9]{4} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "bz",
        "name": "Belize",
        "placeholder": "e.g. 501 223 4567",
        "regexValidation": "^(0|\\+501)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "bj",
        "name": "Benin",
        "placeholder": "e.g. 90 01 2345",
        "regexValidation": "^(0|\\+229)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{4}$"
    },
    {
        "type": "bm",
        "name": "Bermuda",
        "placeholder": "e.g. 441 234 5678",
        "regexValidation": "^(0|\\+1441)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "bt",
        "name": "Bhutan",
        "placeholder": "e.g. 1712 3456",
        "regexValidation": "^(0|\\+975)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "bo",
        "name": "Bolivia, Plurinational State of",
        "placeholder": "e.g. 712 34567",
        "regexValidation": "^(0|\\+591)?( )?[0-9]{3} ?[0-9]{5,6}$"
    },
    {
        "type": "ba",
        "name": "Bosnia and Herzegovina",
        "placeholder": "e.g. 061 123 456",
        "regexValidation": "^(0|\\+387)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "bw",
        "name": "Botswana",
        "placeholder": "e.g. 71 123 456",
        "regexValidation": "^(0|\\+267)?( )?[0-9]{2} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "br",
        "name": "Brazil",
        "placeholder": "e.g. 11 91234-5678",
        "regexValidation": "^(0|\\+55)?( )?[0-9]{2} ?[0-9]{4,5}-?[0-9]{4}$"
    },
    {
        "type": "io",
        "name": "British Indian Ocean Territory",
        "placeholder": "e.g. 246 1234",
        "regexValidation": "^(0|\\+246)?( )?[0-9]{3,4} ?[0-9]{4}$"
    },
    {
        "type": "bn",
        "name": "Brunei Darussalam",
        "placeholder": "e.g. 712 3456",
        "regexValidation": "^(0|\\+673)?( )?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "bg",
        "name": "Bulgaria",
        "placeholder": "e.g. 088 123 4567",
        "regexValidation": "^(0|\\+359)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "bf",
        "name": "Burkina Faso",
        "placeholder": "e.g. 70 12 34 56",
        "regexValidation": "^(0|\\+226)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "bi",
        "name": "Burundi",
        "placeholder": "e.g. 79 01 23 45",
        "regexValidation": "^(0|\\+257)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "kh",
        "name": "Cambodia",
        "placeholder": "e.g. 012 345 678",
        "regexValidation": "^(0|\\+855)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "cm",
        "name": "Cameroon",
        "placeholder": "e.g. 6 12 34 56 78",
        "regexValidation": "^(0|\\+237)?( )?[0-9]{1} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "ca",
        "name": "Canada",
        "placeholder": "e.g. (204) 234-5678",
        "regexValidation": "^(0|\\+1)?( )?\\(?[0-9]{3}\\)? ?[0-9]{3}-?[0-9]{4}$"
    },
    {
        "type": "cv",
        "name": "Cape Verde",
        "placeholder": "e.g. 991 12 34",
        "regexValidation": "^(0|\\+238)?( )?[0-9]{3} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "ky",
        "name": "Cayman Islands",
        "placeholder": "e.g. 345 323 1234",
        "regexValidation": "^(0|\\+345)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "cf",
        "name": "Central African Republic",
        "placeholder": "e.g. 70 12 34 56",
        "regexValidation": "^(0|\\+236)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "td",
        "name": "Chad",
        "placeholder": "e.g. 63 12 34 56",
        "regexValidation": "^(0|\\+235)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "cl",
        "name": "Chile",
        "placeholder": "e.g. 9 1234 5678",
        "regexValidation": "^(0|\\+56)?( )?9 ?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "cn",
        "name": "China",
        "placeholder": "e.g. 138 1234 5678",
        "regexValidation": "^(0|\\+86)?( )?1[0-9]{10}$"
    },
    {
        "type": "cx",
        "name": "Christmas Island",
        "placeholder": "e.g. 89123456789",
        "regexValidation": "^(0|\\+61)?( )?[0-9]{5,12}$"
    },
    {
        "type": "cc",
        "name": "Cocos (Keeling) Islands",
        "placeholder": "e.g. 89123456789",
        "regexValidation": "^(0|\\+61)?( )?[0-9]{5,12}$"
    },
    {
        "type": "co",
        "name": "Colombia",
        "placeholder": "e.g. 321 1234567",
        "regexValidation": "^(0|\\+57)?( )?[0-9]{3} ?[0-9]{7}$"
    },
    {
        "type": "km",
        "name": "Comoros",
        "placeholder": "e.g. 321 23 45",
        "regexValidation": "^(0|\\+269)?( )?[0-9]{3} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "cg",
        "name": "Congo",
        "placeholder": "e.g. 06 123 4567",
        "regexValidation": "^(0|\\+242)?( )?[0-9]{2} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "cd",
        "name": "Congo, The Democratic Republic of the Congo",
        "placeholder": "e.g. 0999 123 456",
        "regexValidation": "^(0|\\+243)?( )?[0-9]{4} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "ck",
        "name": "Cook Islands",
        "placeholder": "e.g. 55 123",
        "regexValidation": "^(0|\\+682)?( )?[0-9]{2} ?[0-9]{3}$"
    },
    {
        "type": "cr",
        "name": "Costa Rica",
        "placeholder": "e.g. 8888 1234",
        "regexValidation": "^(0|\\+506)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "ci",
        "name": "Cote d'Ivoire",
        "placeholder": "e.g. 01 23 45 67",
        "regexValidation": "^(0|\\+225)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "hr",
        "name": "Croatia",
        "placeholder": "e.g. 091 123 4567",
        "regexValidation": "^(0|\\+385)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "cu",
        "name": "Cuba",
        "placeholder": "e.g. 5 123 4567",
        "regexValidation": "^(0|\\+53)?( )?[0-9]{1} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "cy",
        "name": "Cyprus",
        "placeholder": "e.g. 96 123456",
        "regexValidation": "^(0|\\+357)?( )?[0-9]{2} ?[0-9]{6}$"
    },
    {
        "type": "cz",
        "name": "Czech Republic",
        "placeholder": "e.g. 601 123 456",
        "regexValidation": "^(0|\\+420)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "dk",
        "name": "Denmark",
        "placeholder": "e.g. 12 34 56 78",
        "regexValidation": "^(0|\\+45)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "dj",
        "name": "Djibouti",
        "placeholder": "e.g. 77 83 47 61",
        "regexValidation": "^(0|\\+253)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "dm",
        "name": "Dominica",
        "placeholder": "e.g. 767 225 1234",
        "regexValidation": "^(0|\\+1767)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "do",
        "name": "Dominican Republic",
        "placeholder": "e.g. 809 234 5678",
        "regexValidation": "^(0|\\+1849)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "ec",
        "name": "Ecuador",
        "placeholder": "e.g. 099 123 4567",
        "regexValidation": "^(0|\\+593)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "eg",
        "name": "Egypt",
        "placeholder": "e.g. 0100 123 4567",
        "regexValidation": "^(0|\\+20)?( )?1[0-9]{9}$"
    },
    {
        "type": "sv",
        "name": "El Salvador",
        "placeholder": "e.g. 7012 3456",
        "regexValidation": "^(0|\\+503)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "gq",
        "name": "Equatorial Guinea",
        "placeholder": "e.g. 222 123 456",
        "regexValidation": "^(0|\\+240)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "er",
        "name": "Eritrea",
        "placeholder": "e.g. 0 71 123 4567",
        "regexValidation": "^(0|\\+291)?( )?[0-9]{1} ?[0-9]{2} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "ee",
        "name": "Estonia",
        "placeholder": "e.g. 5123 4567",
        "regexValidation": "^(0|\\+372)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "et",
        "name": "Ethiopia",
        "placeholder": "e.g. 911 234 567",
        "regexValidation": "^(0|\\+251)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "fk",
        "name": "Falkland Islands (Malvinas)",
        "placeholder": "e.g. 51234",
        "regexValidation": "^(0|\\+500)?( )?[0-9]{5}$"
    },
    {
        "type": "fo",
        "name": "Faroe Islands",
        "placeholder": "e.g. 211234",
        "regexValidation": "^(0|\\+298)?( )?[0-9]{6}$"
    },
    {
        "type": "fj",
        "name": "Fiji",
        "placeholder": "e.g. 701 2345",
        "regexValidation": "^(0|\\+679)?( )?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "fi",
        "name": "Finland",
        "placeholder": "e.g. 041 2345678",
        "regexValidation": "^(0|\\+358)?( )?[0-9]{3} ?[0-9]{7}$"
    },
    {
        "type": "fr",
        "name": "France",
        "placeholder": "e.g. 06 12 34 56 78",
        "regexValidation": "^(0|\\+33)?( )?0[0-9]{9}$"
    },
    {
        "type": "gf",
        "name": "French Guiana",
        "placeholder": "e.g. 0694 12 34 56",
        "regexValidation": "^(0|\\+594)?( )?0[0-9]{9}$"
    },
    {
        "type": "pf",
        "name": "French Polynesia",
        "placeholder": "e.g. 87 12 34 56",
        "regexValidation": "^(0|\\+689)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "ga",
        "name": "Gabon",
        "placeholder": "e.g. 06 03 12 34",
        "regexValidation": "^(0|\\+241)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "gm",
        "name": "Gambia",
        "placeholder": "e.g. 7421234",
        "regexValidation": "^(0|\\+220)?( )?[0-9]{7}$"
    },
    {
        "type": "ge",
        "name": "Georgia",
        "placeholder": "e.g. 555 12 34 56",
        "regexValidation": "^(0|\\+995)?( )?[0-9]{3} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "de",
        "name": "Germany",
        "placeholder": "e.g. 01512 3456789",
        "regexValidation": "^(0|\\+49)?( )?1[0-9]{10}$"
    },
    {
        "type": "gh",
        "name": "Ghana",
        "placeholder": "e.g. 020 123 4567",
        "regexValidation": "^(0|\\+233)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "gi",
        "name": "Gibraltar",
        "placeholder": "e.g. 56012345",
        "regexValidation": "^(0|\\+350)?( )?[0-9]{8}$"
    },
    {
        "type": "gr",
        "name": "Greece",
        "placeholder": "e.g. 690 123 4567",
        "regexValidation": "^(0|\\+30)?( )?6[0-9]{9}$"
    },
    {
        "type": "gl",
        "name": "Greenland",
        "placeholder": "e.g. 221234",
        "regexValidation": "^(0|\\+299)?( )?[0-9]{6}$"
    },
    {
        "type": "gd",
        "name": "Grenada",
        "placeholder": "e.g. 473 403 1234",
        "regexValidation": "^(0|\\+1473)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "gp",
        "name": "Guadeloupe",
        "placeholder": "e.g. 0690 12 34 56",
        "regexValidation": "^(0|\\+590)?( )?0[0-9]{9}$"
    },
    {
        "type": "gu",
        "name": "Guam",
        "placeholder": "e.g. 671 123 4567",
        "regexValidation": "^(0|\\+1671)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "gt",
        "name": "Guatemala",
        "placeholder": "e.g. 5012 3456",
        "regexValidation": "^(0|\\+502)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "gg",
        "name": "Guernsey",
        "placeholder": "e.g. 7781 234567",
        "regexValidation": "^(0|\\+44)?( )?7[0-9]{9}$"
    },
    {
        "type": "gn",
        "name": "Guinea",
        "placeholder": "e.g. 621 12 34 56",
        "regexValidation": "^(0|\\+224)?( )?[0-9]{3} ?[0-9]{2} ?[0-9]{2} ?[0-9]{2}$"
    },
    {
        "type": "gw",
        "name": "Guinea-Bissau",
        "placeholder": "e.g. 955 123 456",
        "regexValidation": "^(0|\\+245)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "gy",
        "name": "Guyana",
        "placeholder": "e.g. 609 1234",
        "regexValidation": "^(0|\\+595)?( )?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "ht",
        "name": "Haiti",
        "placeholder": "e.g. 34 45 6789",
        "regexValidation": "^(0|\\+509)?( )?[0-9]{2} ?[0-9]{2} ?[0-9]{4}$"
    },
    {
        "type": "va",
        "name": "Holy See (Vatican City State)",
        "placeholder": "e.g. 06 698 1234",
        "regexValidation": "^(0|\\+379)?( )?[0-9]{2} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "hn",
        "name": "Honduras",
        "placeholder": "e.g. 9123-4567",
        "regexValidation": "^(0|\\+504)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "hk",
        "name": "Hong Kong",
        "placeholder": "e.g. 5123 4567",
        "regexValidation": "^(0|\\+852)?( )?[0-9]{4} ?[0-9]{4}$"
    },
    {
        "type": "hu",
        "name": "Hungary",
        "placeholder": "e.g. 20 123 4567",
        "regexValidation": "^(0|\\+36)?( )?20[0-9]{8}$"
    },
    {
        "type": "is",
        "name": "Iceland",
        "placeholder": "e.g. 611 1234",
        "regexValidation": "^(0|\\+354)?( )?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "in",
        "name": "India",
        "placeholder": "e.g. 98765 43210",
        "regexValidation": "^(0|\\+91)?( )?[789][0-9]{9}$"
    },
    {
        "type": "id",
        "name": "Indonesia",
        "placeholder": "e.g. 0812 345 6789",
        "regexValidation": "^(0|\\+62)?( )?8[0-9]{9,11}$"
    },
    {
        "type": "ir",
        "name": "Iran, Islamic Republic of Persian Gulf",
        "placeholder": "e.g. 0912 345 6789",
        "regexValidation": "^(0|\\+98)?( )?9[0-9]{9}$"
    },
    {
        "type": "iq",
        "name": "Iraq",
        "placeholder": "e.g. 0790 123 4567",
        "regexValidation": "^(0|\\+964)?( )?7[0-9]{9}$"
    },
    {
        "type": "ie",
        "name": "Ireland",
        "placeholder": "e.g. 087 123 4567",
        "regexValidation": "^(0|\\+353)?( )?8[0-9]{8}$"
    },
    {
        "type": "im",
        "name": "Isle of Man",
        "placeholder": "e.g. 07624 123456",
        "regexValidation": "^(0|\\+44)?( )?7[0-9]{9}$"
    },
    {
        "type": "il",
        "name": "Israel",
        "placeholder": "e.g. 050-123-4567",
        "regexValidation": "^(0|\\+972)?( )?0[0-9]{2}-?[0-9]{3}-?[0-9]{4}$"
    },
    {
        "type": "it",
        "name": "Italy",
        "placeholder": "e.g. 312 345 6789",
        "regexValidation": "^(0|\\+39)?( )?[0-9]{3} ?[0-9]{3} ?[0-9]{4}$"
    },
    {
        "type": "jm",
        "name": "Jamaica",
        "placeholder": "e.g. (876) 210-1234",
        "regexValidation": "^\\(?(\\+\\d{1,3}|\\d{1,4})\\)?[- .]?\\(?\\d{3}\\)?[- .]?\\d{4}$"
    },
    {
        "type": "jp",
        "name": "Japan",
        "placeholder": "e.g. 090-1234-5678",
        "regexValidation": "^(0|\\+81)?( )?\\d{2,4}[- ]?\\d{1,4}[- ]?\\d{4}$"
    },
    {
        "type": "je",
        "name": "Jersey",
        "placeholder": "e.g. 07797 123456",
        "regexValidation": "^(0|\\+44)?( )?7[0-9]{3} ?[0-9]{6}$"
    },
    {
        "type": "jo",
        "name": "Jordan",
        "placeholder": "e.g. 07 9012 3456",
        "regexValidation": "^(0|\\+962)?( )?07[789]\\d{7}$"
    },
    {
        "type": "kz",
        "name": "Kazakhstan",
        "placeholder": "e.g. 8 (701) 234 5678",
        "regexValidation": "^(8|\\+7)?( )?\\(?7\\d{2}\\)?[- ]?\\d{3}[- ]?\\d{4}$"
    },
    {
        "type": "ke",
        "name": "Kenya",
        "placeholder": "e.g. 0712 345 678",
        "regexValidation": "^(0|\\+254)?( )?7\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "ki",
        "name": "Kiribati",
        "placeholder": "e.g. 72012345",
        "regexValidation": "^(0|\\+686)?( )?[1-9]\\d{4}$"
    },
    {
        "type": "kp",
        "name": "Korea, Democratic People's Republic of Korea",
        "placeholder": "e.g. 01912 345 678",
        "regexValidation": "^(0|\\+850)?( )?01\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "kr",
        "name": "Korea, Republic of South Korea",
        "placeholder": "e.g. 010-1234-5678",
        "regexValidation": "^(0|\\+82)?( )?\\d{2,3}[- ]?\\d{3,4}[- ]?\\d{4}$"
    },
    {
        "type": "kw",
        "name": "Kuwait",
        "placeholder": "e.g. 5001 2345",
        "regexValidation": "^(0|\\+965)?( )?[569]\\d{7}$"
    },
    {
        "type": "kg",
        "name": "Kyrgyzstan",
        "placeholder": "e.g. 0700 123 456",
        "regexValidation": "^(0|\\+996)?( )?0\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "la",
        "name": "Laos",
        "placeholder": "e.g. 020 1234 5678",
        "regexValidation": "^(0|\\+856)?( )?20\\d{8}$"
    },
    {
        "type": "lv",
        "name": "Latvia",
        "placeholder": "e.g. 2 123 4567",
        "regexValidation": "^(0|\\+371)?( )?[2-9]\\d{7}$"
    },
    {
        "type": "lb",
        "name": "Lebanon",
        "placeholder": "e.g. 71 123 456",
        "regexValidation": "^(0|\\+961)?( )?\\d{2} ?\\d{6}$"
    },
    {
        "type": "ls",
        "name": "Lesotho",
        "placeholder": "e.g. 5012 3456",
        "regexValidation": "^(0|\\+266)?( )?[5]\\d{7}$"
    },
    {
        "type": "lr",
        "name": "Liberia",
        "placeholder": "e.g. 0770 123 456",
        "regexValidation": "^(0|\\+231)?( )?07[7-9]\\d{7}$"
    },
    {
        "type": "ly",
        "name": "Libyan Arab Jamahiriya",
        "placeholder": "e.g. 091 234 5678",
        "regexValidation": "^(0|\\+218)?( )?09\\d{7}$"
    },
    {
        "type": "li",
        "name": "Liechtenstein",
        "placeholder": "e.g. 660 234 567",
        "regexValidation": "^(0|\\+423)?( )?6[0-9]{2} ?[0-9]{3} ?[0-9]{3}$"
    },
    {
        "type": "lt",
        "name": "Lithuania",
        "placeholder": "e.g. 8 612 34567",
        "regexValidation": "^(0|\\+370)?( )?8\\d{2} ?\\d{5}$"
    },
    {
        "type": "mu",
        "name": "Mauritius",
        "placeholder": "e.g. 5941 2345",
        "regexValidation": "^(0|\\+230)?( )?[2-9]\\d{3} ?\\d{4}$"
    },
    {
        "type": "yt",
        "name": "Mayotte",
        "placeholder": "e.g. 0639 12 34 56",
        "regexValidation": "^(0|\\+262)?( )?0\\d{4} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "mx",
        "name": "Mexico",
        "placeholder": "e.g. 55 1234 5678",
        "regexValidation": "^(0|\\+52)?( )?\\d{2} ?\\d{4} ?\\d{4}$"
    },
    {
        "type": "fm",
        "name": "Micronesia, Federated States of Micronesia",
        "placeholder": "e.g. 350 1234",
        "regexValidation": "^(0|\\+691)?( )?[2356]\\d{2} ?\\d{4}$"
    },
    {
        "type": "md",
        "name": "Moldova",
        "placeholder": "e.g. 0621 12 345",
        "regexValidation": "^(0|\\+373)?( )?0\\d{3} ?\\d{2} ?\\d{3}$"
    },
    {
        "type": "mc",
        "name": "Monaco",
        "placeholder": "e.g. 06 12 34 56 78",
        "regexValidation": "^(0|\\+377)?( )?\\d{2} ?\\d{2} ?\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "mn",
        "name": "Mongolia",
        "placeholder": "e.g. 8812 3456",
        "regexValidation": "^(0|\\+976)?( )?8\\d{3} ?\\d{4}$"
    },
    {
        "type": "me",
        "name": "Montenegro",
        "placeholder": "e.g. 067 123 456",
        "regexValidation": "^(0|\\+382)?( )?0\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "ms",
        "name": "Montserrat",
        "placeholder": "e.g. 664 492 3456",
        "regexValidation": "^(0|\\+1664)?( )?[4-6]\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ma",
        "name": "Morocco",
        "placeholder": "e.g. 0650 123 456",
        "regexValidation": "^(0|\\+212)?( )?\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "mz",
        "name": "Mozambique",
        "placeholder": "e.g. 82 123 4567",
        "regexValidation": "^(0|\\+258)?( )?8[2-9]\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "mm",
        "name": "Myanmar",
        "placeholder": "e.g. 01 234 567",
        "regexValidation": "^(0|\\+95)?( )?\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "na",
        "name": "Namibia",
        "placeholder": "e.g. 061 234 567",
        "regexValidation": "^(0|\\+264)?( )?\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "nr",
        "name": "Nauru",
        "placeholder": "e.g. 555 1234",
        "regexValidation": "^(0|\\+674)?( )?[55789]\\d{2} ?\\d{4}$"
    },
    {
        "type": "np",
        "name": "Nepal",
        "placeholder": "e.g. 01 2345678",
        "regexValidation": "^(0|\\+977)?( )?\\d{2} ?\\d{7}$"
    },
    {
        "type": "nl",
        "name": "Netherlands",
        "placeholder": "e.g. 020 123 4567",
        "regexValidation": "^(0|\\+31)?( )?\\d{2,3} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "an",
        "name": "Netherlands Antilles",
        "placeholder": "e.g. 9 512 3456",
        "regexValidation": "^(0|\\+599)?( )?9 ?[58]\\d{2} ?\\d{4}$"
    },
    {
        "type": "nc",
        "name": "New Caledonia",
        "placeholder": "e.g. 25.12.34",
        "regexValidation": "^(0|\\+687)?( )?[248]\\d{2}\\.\\d{2}\\.\\d{2}$"
    },
    {
        "type": "nz",
        "name": "New Zealand",
        "placeholder": "e.g. 021 123 4567",
        "regexValidation": "^(0|\\+64)?( )?\\d{2,4} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ni",
        "name": "Nicaragua",
        "placeholder": "e.g. 2 345 6789",
        "regexValidation": "^(0|\\+505)?( )?[2789]\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ne",
        "name": "Niger",
        "placeholder": "e.g. 20 12 34 56",
        "regexValidation": "^(0|\\+227)?( )?20 ?\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "ng",
        "name": "Nigeria",
        "placeholder": "e.g. 0802 123 4567",
        "regexValidation": "^(0|\\+234)?( )?0?[789]\\d{1} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "nu",
        "name": "Niue",
        "placeholder": "e.g. 4300",
        "regexValidation": "^(0|\\+683)?( )?4\\d{3}$"
    },
    {
        "type": "nf",
        "name": "Norfolk Island",
        "placeholder": "e.g. 3 911",
        "regexValidation": "^(0|\\+672)?( )?3 ?\\d{3}$"
    },
    {
        "type": "mp",
        "name": "Northern Mariana Islands",
        "placeholder": "e.g. 670 234 5678",
        "regexValidation": "^(0|\\+1670)?( )?670 ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "no",
        "name": "Norway",
        "placeholder": "e.g. 912 34 567",
        "regexValidation": "^(0|\\+47)?( )?[2-9]\\d{2} ?\\d{2} ?\\d{3}$"
    },
    {
        "type": "om",
        "name": "Oman",
        "placeholder": "e.g. 9123 4567",
        "regexValidation": "^(0|\\+968)?( )?9\\d{3} ?\\d{4}$"
    },
    {
        "type": "pk",
        "name": "Pakistan",
        "placeholder": "e.g. 0301 2345678",
        "regexValidation": "^(0|\\+92)?( )?\\d{3} ?\\d{7}$"
    },
    {
        "type": "pw",
        "name": "Palau",
        "placeholder": "e.g. 680 488 1234",
        "regexValidation": "^(0|\\+680)?( )?[48]\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ps",
        "name": "Palestinian Territory, Occupied",
        "placeholder": "e.g. 0599 123 456",
        "regexValidation": "^(0|\\+970)?( )?5[49]\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "pa",
        "name": "Panama",
        "placeholder": "e.g. 6123-4567",
        "regexValidation": "^(0|\\+507)?( )?6\\d{3}[- ]?\\d{4}$"
    },
    {
        "type": "pg",
        "name": "Papua New Guinea",
        "placeholder": "e.g. 3123 4567",
        "regexValidation": "^(0|\\+675)?( )?3\\d{3} ?\\d{4}$"
    },
    {
        "type": "py",
        "name": "Paraguay",
        "placeholder": "e.g. 0981 234567",
        "regexValidation": "^(0|\\+595)?( )?0?9\\d{1} ?\\d{6}$"
    },
    {
        "type": "pe",
        "name": "Peru",
        "placeholder": "e.g. 01 2345678",
        "regexValidation": "^(0|\\+51)?( )?\\d{2} ?\\d{7}$"
    },
    {
        "type": "ph",
        "name": "Philippines",
        "placeholder": "e.g. 02 123 4567",
        "regexValidation": "^(0|\\+63)?( )?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "pn",
        "name": "Pitcairn",
        "placeholder": "e.g. 872 3444",
        "regexValidation": "^(0|\\+872)?( )?3\\d{2} ?\\d{4}$"
    },
    {
        "type": "pl",
        "name": "Poland",
        "placeholder": "e.g. 12 345 67 89",
        "regexValidation": "^(0|\\+48)?( )?\\d{2} ?\\d{3} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "pt",
        "name": "Portugal",
        "placeholder": "e.g. 912 345 678",
        "regexValidation": "^(0|\\+351)?( )?9\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "pr",
        "name": "Puerto Rico",
        "placeholder": "e.g. 787 555 5555",
        "regexValidation": "^(0|\\+1939)?( )?787 ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "qa",
        "name": "Qatar",
        "placeholder": "e.g. 3312 3456",
        "regexValidation": "^(0|\\+974)?( )?33\\d{2} ?\\d{4}$"
    },
    {
        "type": "ro",
        "name": "Romania",
        "placeholder": "e.g. 021 123 4567",
        "regexValidation": "^(0|\\+40)?( )?\\d{2,3} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ru",
        "name": "Russia",
        "placeholder": "e.g. 495 123 45 67",
        "regexValidation": "^(0|\\+7)?( )?[3489]\\d{2} ?\\d{3} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "rw",
        "name": "Rwanda",
        "placeholder": "e.g. 250 123 456",
        "regexValidation": "^(0|\\+250)?( )?\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "re",
        "name": "Reunion",
        "placeholder": "e.g. 0692 12 34 56",
        "regexValidation": "^(0|\\+262)?( )?6[0-9]{2} ?\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "ws",
        "name": "Samoa",
        "placeholder": "e.g. 7212345",
        "regexValidation": "^(0|\\+685)?( )?[72]\\d{4}$"
    },
    {
        "type": "sm",
        "name": "San Marino",
        "placeholder": "e.g. 0549 123456",
        "regexValidation": "^(0|\\+378)?( )?0?5[46]\\d{2} ?\\d{6}$"
    },
    {
        "type": "st",
        "name": "Sao Tome and Principe",
        "placeholder": "e.g. 981 2345",
        "regexValidation": "^(0|\\+239)?( )?9[78]\\d{2} ?\\d{4}$"
    },
    {
        "type": "sa",
        "name": "Saudi Arabia",
        "placeholder": "e.g. 011 234 5678",
        "regexValidation": "^(0|\\+966)?( )?1\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "sn",
        "name": "Senegal",
        "placeholder": "e.g. 77 123 45 67",
        "regexValidation": "^(0|\\+221)?( )?7[0678]\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "rs",
        "name": "Serbia",
        "placeholder": "e.g. 011 123 4567",
        "regexValidation": "^(0|\\+381)?( )?1\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "sc",
        "name": "Seychelles",
        "placeholder": "e.g. 2 510 123",
        "regexValidation": "^(0|\\+248)?( )?[2-4]\\d{2} ?\\d{3}$"
    },
    {
        "type": "sl",
        "name": "Sierra Leone",
        "placeholder": "e.g. 076 123456",
        "regexValidation": "^(0|\\+232)?( )?76\\d{5}$"
    },
    {
        "type": "sg",
        "name": "Singapore",
        "placeholder": "e.g. 6123 4567",
        "regexValidation": "^(0|\\+65)?( )?6\\d{3} ?\\d{4}$"
    },
    {
        "type": "sk",
        "name": "Slovakia",
        "placeholder": "e.g. 012 345 6789",
        "regexValidation": "^(0|\\+421)?( )?0?\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "si",
        "name": "Slovenia",
        "placeholder": "e.g. 01 234 5678",
        "regexValidation": "^(0|\\+386)?( )?0?1\\d{1} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "sb",
        "name": "Solomon Islands",
        "placeholder": "e.g. 20001",
        "regexValidation": "^(0|\\+677)?( )?2\\d{4}$"
    },
    {
        "type": "so",
        "name": "Somalia",
        "placeholder": "e.g. 907 123456",
        "regexValidation": "^(0|\\+252)?( )?9\\d{2} ?\\d{6}$"
    },
    {
        "type": "za",
        "name": "South Africa",
        "placeholder": "e.g. 011 123 4567",
        "regexValidation": "^(0|\\+27)?( )?0?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "ss",
        "name": "South Sudan",
        "placeholder": "e.g. 0921 234 567",
        "regexValidation": "^(0|\\+211)?( )?9\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "gs",
        "name": "South Georgia and the South Sandwich Islands",
        "placeholder": "e.g. 53900",
        "regexValidation": "^(0|\\+500)?( )?5[0-9]{3}$"
    },
    {
        "type": "es",
        "name": "Spain",
        "placeholder": "e.g. 912 34 56 78",
        "regexValidation": "^(0|\\+34)?( )?9\\d{2} ?\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "lk",
        "name": "Sri Lanka",
        "placeholder": "e.g. 011 234 5678",
        "regexValidation": "^(0|\\+94)?( )?0?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "sd",
        "name": "Sudan",
        "placeholder": "e.g. 011 123 4567",
        "regexValidation": "^(0|\\+249)?( )?0?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "sr",
        "name": "Suriname",
        "placeholder": "e.g. 741 2345",
        "regexValidation": "^(0|\\+597)?( )?7[1-9]\\d{3}$"
    },
    {
        "type": "sj",
        "name": "Svalbard and Jan Mayen",
        "placeholder": "e.g. 79 12 34 56",
        "regexValidation": "^(0|\\+47)?( )?7\\d{1} ?\\d{2} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "sz",
        "name": "Swaziland",
        "placeholder": "e.g. 2517 1234",
        "regexValidation": "^(0|\\+268)?( )?2[0-9]{3} ?\\d{4}$"
    },
    {
        "type": "se",
        "name": "Sweden",
        "placeholder": "e.g. 08 123 456 78",
        "regexValidation": "^(0|\\+46)?( )?0?\\d{1,3} ?\\d{3} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "ch",
        "name": "Switzerland",
        "placeholder": "e.g. 031 123 45 67",
        "regexValidation": "^(0|\\+41)?( )?0?\\d{2} ?\\d{3} ?\\d{2} ?\\d{2}$"
    },
    {
        "type": "sy",
        "name": "Syrian Arab Republic",
        "placeholder": "e.g. 011 234 5678",
        "regexValidation": "^(0|\\+963)?( )?0?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "tw",
        "name": "Taiwan",
        "placeholder": "e.g. 02 1234 5678",
        "regexValidation": "^(0|\\+886)?( )?0?[2-9]\\d{2} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "tj",
        "name": "Tajikistan",
        "placeholder": "e.g. 3712 345 678",
        "regexValidation": "^(0|\\+992)?( )?0?\\d{3} ?\\d{3} ?\\d{3}$"
    },
    {
        "type": "tz",
        "name": "Tanzania, United Republic of Tanzania",
        "placeholder": "e.g. 022 123 4567",
        "regexValidation": "^(0|\\+255)?( )?0?\\d{2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "th",
        "name": "Thailand",
        "placeholder": "e.g. 02 123 4567",
        "regexValidation": "^(0|\\+66)?( )?0?\\d{1,2} ?\\d{3} ?\\d{4}$"
    },
    {
        "type": "tl",
        "name": "Timor-Leste",
        "placeholder": "e.g. 331 2345",
        "regexValidation": "^(0|\\+670)?( )?3\\d{2} ?\\d{4}$"
    },
    {
        "type": "tk",
        "name": "Tokelau",
        "placeholder": "+690 1234567",
        "regexValidation": "^\\+690\\s\\d{7}$"
    },
    {
        "type": "to",
        "name": "Tonga",
        "placeholder": "+676 12345",
        "regexValidation": "^\\+676\\s\\d{5}$"
    },
    {
        "type": "tt",
        "name": "Trinidad and Tobago",
        "placeholder": "+1868 123 4567",
        "regexValidation": "^\\+1868\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "tn",
        "name": "Tunisia",
        "placeholder": "+216 12345678",
        "regexValidation": "^\\+216\\s\\d{8}$"
    },
    {
        "type": "tr",
        "name": "Turkey",
        "placeholder": "+90 512 345 6789",
        "regexValidation": "^\\+90\\s\\d{3}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "tm",
        "name": "Turkmenistan",
        "placeholder": "+993 12 345678",
        "regexValidation": "^\\+993\\s\\d{2}\\s\\d{6}$"
    },
    {
        "type": "tc",
        "name": "Turks and Caicos Islands",
        "placeholder": "+1649 123 4567",
        "regexValidation": "^\\+1649\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "tv",
        "name": "Tuvalu",
        "placeholder": "+688 901234",
        "regexValidation": "^\\+688\\s\\d{6}$"
    },
    {
        "type": "ug",
        "name": "Uganda",
        "placeholder": "+256 701 234567",
        "regexValidation": "^\\+256\\s\\d{3}\\s\\d{6}$"
    },
    {
        "type": "ua",
        "name": "Ukraine",
        "placeholder": "+380 50 123 4567",
        "regexValidation": "^\\+380\\s\\d{2}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "ae",
        "name": "United Arab Emirates",
        "placeholder": "+971 50 123 4567",
        "regexValidation": "^\\+971\\s\\d{2}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "gb",
        "name": "United Kingdom",
        "placeholder": "+44 7911 123456",
        "regexValidation": "^\\+44\\s7\\d{3}\\s\\d{6}$"
    },
    {
        "type": "us",
        "name": "United States",
        "placeholder": "+1 123 456 7890",
        "regexValidation": "^\\+1\\s\\d{3}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "uy",
        "name": "Uruguay",
        "placeholder": "+598 99 123 456",
        "regexValidation": "^\\+598\\s9\\d{2}\\s\\d{3}\\s\\d{3}$"
    },
    {
        "type": "uz",
        "name": "Uzbekistan",
        "placeholder": "+998 90 123 4567",
        "regexValidation": "^\\+998\\s\\d{2}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "vu",
        "name": "Vanuatu",
        "placeholder": "+678 12345",
        "regexValidation": "^\\+678\\s\\d{5}$"
    },
    {
        "type": "ve",
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "placeholder": "+58 412 123 4567",
        "regexValidation": "^\\+58\\s4\\d{2}\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "vn",
        "name": "Vietnam",
        "placeholder": "+84 912 345 678",
        "regexValidation": "^\\+84\\s\\d{3}\\s\\d{3}\\s\\d{3}$"
    },
    {
        "type": "vg",
        "name": "Virgin Islands, British",
        "placeholder": "+1284 340 1234",
        "regexValidation": "^\\+1284\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "vi",
        "name": "Virgin Islands, U.S.",
        "placeholder": "+1340 340 1234",
        "regexValidation": "^\\+1340\\s\\d{3}\\s\\d{4}$"
    },
    {
        "type": "wf",
        "name": "Wallis and Futuna",
        "placeholder": "+681 701234",
        "regexValidation": "^\\+681\\s\\d{6}$"
    },
    {
        "type": "ye",
        "name": "Yemen",
        "placeholder": "+967 712 345 678",
        "regexValidation": "^\\+967\\s\\d{3}\\s\\d{3}\\s\\d{3}$"
    },
    {
        "type": "zm",
        "name": "Zambia",
        "placeholder": "+260 95 1234567",
        "regexValidation": "^\\+260\\s9\\d{2}\\s\\d{7}$"
    },
    {
        "type": "zw",
        "name": "Zimbabwe",
        "placeholder": "+263 712 345 678",
        "regexValidation": "^\\+263\\s\\d{3}\\s\\d{3}\\s\\d{3}$"
    }
]


let noRegix = [{
        "name": "Afghanistan",
        "dial_code": "+93",
        "code": "AF"
    },
    {
        "name": "Aland Islands",
        "dial_code": "+358",
        "code": "AX"
    },
    {
        "name": "Albania",
        "dial_code": "+355",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "dial_code": "+213",
        "code": "DZ"
    },
    {
        "name": "AmericanSamoa",
        "dial_code": "+1684",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "dial_code": "+376",
        "code": "AD"
    },
    {
        "name": "Angola",
        "dial_code": "+244",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "dial_code": "+1264",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "dial_code": "+672",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "dial_code": "+1268",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "dial_code": "+54",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "dial_code": "+374",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "dial_code": "+297",
        "code": "AW"
    },
    {
        "name": "Australia",
        "dial_code": "+61",
        "code": "AU"
    },
    {
        "name": "Austria",
        "dial_code": "+43",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "dial_code": "+994",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "dial_code": "+1242",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "dial_code": "+973",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "dial_code": "+880",
        "code": "BD"
    },
    {
        "name": "Barbados",
        "dial_code": "+1246",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "dial_code": "+375",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "dial_code": "+32",
        "code": "BE"
    },
    {
        "name": "Belize",
        "dial_code": "+501",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "dial_code": "+229",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "dial_code": "+1441",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "dial_code": "+975",
        "code": "BT"
    },
    {
        "name": "Bolivia, Plurinational State of",
        "dial_code": "+591",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "dial_code": "+387",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "dial_code": "+267",
        "code": "BW"
    },
    {
        "name": "Brazil",
        "dial_code": "+55",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "dial_code": "+246",
        "code": "IO"
    },
    {
        "name": "Brunei Darussalam",
        "dial_code": "+673",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "dial_code": "+359",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "dial_code": "+226",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "dial_code": "+257",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "dial_code": "+855",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "dial_code": "+237",
        "code": "CM"
    },
    {
        "name": "Canada",
        "dial_code": "+1",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "dial_code": "+238",
        "code": "CV"
    },
    {
        "name": "Cayman Islands",
        "dial_code": "+ 345",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "dial_code": "+236",
        "code": "CF"
    },
    {
        "name": "Chad",
        "dial_code": "+235",
        "code": "TD"
    },
    {
        "name": "Chile",
        "dial_code": "+56",
        "code": "CL"
    },
    {
        "name": "China",
        "dial_code": "+86",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "dial_code": "+61",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "dial_code": "+61",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "dial_code": "+57",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "dial_code": "+269",
        "code": "KM"
    },
    {
        "name": "Congo",
        "dial_code": "+242",
        "code": "CG"
    },
    {
        "name": "Congo, The Democratic Republic of the Congo",
        "dial_code": "+243",
        "code": "CD"
    },
    {
        "name": "Cook Islands",
        "dial_code": "+682",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "dial_code": "+506",
        "code": "CR"
    },
    {
        "name": "Cote d'Ivoire",
        "dial_code": "+225",
        "code": "CI"
    },
    {
        "name": "Croatia",
        "dial_code": "+385",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "dial_code": "+53",
        "code": "CU"
    },
    {
        "name": "Cyprus",
        "dial_code": "+357",
        "code": "CY"
    },
    {
        "name": "Czech Republic",
        "dial_code": "+420",
        "code": "CZ"
    },
    {
        "name": "Denmark",
        "dial_code": "+45",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "dial_code": "+253",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "dial_code": "+1767",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "dial_code": "+1849",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "dial_code": "+593",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "dial_code": "+20",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "dial_code": "+503",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "dial_code": "+240",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "dial_code": "+291",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "dial_code": "+372",
        "code": "EE"
    },
    {
        "name": "Ethiopia",
        "dial_code": "+251",
        "code": "ET"
    },
    {
        "name": "Falkland Islands (Malvinas)",
        "dial_code": "+500",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "dial_code": "+298",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "dial_code": "+679",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "dial_code": "+358",
        "code": "FI"
    },
    {
        "name": "France",
        "dial_code": "+33",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "dial_code": "+594",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "dial_code": "+689",
        "code": "PF"
    },
    {
        "name": "Gabon",
        "dial_code": "+241",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "dial_code": "+220",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "dial_code": "+995",
        "code": "GE"
    },
    {
        "name": "Germany",
        "dial_code": "+49",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "dial_code": "+233",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "dial_code": "+350",
        "code": "GI"
    },
    {
        "name": "Greece",
        "dial_code": "+30",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "dial_code": "+299",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "dial_code": "+1473",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "dial_code": "+590",
        "code": "GP"
    },
    {
        "name": "Guam",
        "dial_code": "+1671",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "dial_code": "+502",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "dial_code": "+44",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "dial_code": "+224",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "dial_code": "+245",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "dial_code": "+595",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "dial_code": "+509",
        "code": "HT"
    },
    {
        "name": "Holy See (Vatican City State)",
        "dial_code": "+379",
        "code": "VA"
    },
    {
        "name": "Honduras",
        "dial_code": "+504",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "dial_code": "+852",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "dial_code": "+36",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "dial_code": "+354",
        "code": "IS"
    },
    {
        "name": "India",
        "dial_code": "+91",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "dial_code": "+62",
        "code": "ID"
    },
    {
        "name": "Iran, Islamic Republic of Persian Gulf",
        "dial_code": "+98",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "dial_code": "+964",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "dial_code": "+353",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "dial_code": "+44",
        "code": "IM"
    },
    {
        "name": "Israel",
        "dial_code": "+972",
        "code": "IL"
    },
    {
        "name": "Italy",
        "dial_code": "+39",
        "code": "IT"
    },
    {
        "name": "Jamaica",
        "dial_code": "+1876",
        "code": "JM"
    },
    {
        "name": "Japan",
        "dial_code": "+81",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "dial_code": "+44",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "dial_code": "+962",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "dial_code": "+77",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "dial_code": "+254",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "dial_code": "+686",
        "code": "KI"
    },
    {
        "name": "Korea, Democratic People's Republic of Korea",
        "dial_code": "+850",
        "code": "KP"
    },
    {
        "name": "Korea, Republic of South Korea",
        "dial_code": "+82",
        "code": "KR"
    },
    {
        "name": "Kuwait",
        "dial_code": "+965",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "dial_code": "+996",
        "code": "KG"
    },
    {
        "name": "Laos",
        "dial_code": "+856",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "dial_code": "+371",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "dial_code": "+961",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "dial_code": "+266",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "dial_code": "+231",
        "code": "LR"
    },
    {
        "name": "Libyan Arab Jamahiriya",
        "dial_code": "+218",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "dial_code": "+423",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "dial_code": "+370",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "dial_code": "+352",
        "code": "LU"
    },
    {
        "name": "Macao",
        "dial_code": "+853",
        "code": "MO"
    },
    {
        "name": "Macedonia",
        "dial_code": "+389",
        "code": "MK"
    },
    {
        "name": "Madagascar",
        "dial_code": "+261",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "dial_code": "+265",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "dial_code": "+60",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "dial_code": "+960",
        "code": "MV"
    },
    {
        "name": "Mali",
        "dial_code": "+223",
        "code": "ML"
    },
    {
        "name": "Malta",
        "dial_code": "+356",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "dial_code": "+692",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "dial_code": "+596",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "dial_code": "+222",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "dial_code": "+230",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "dial_code": "+262",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "dial_code": "+52",
        "code": "MX"
    },
    {
        "name": "Micronesia, Federated States of Micronesia",
        "dial_code": "+691",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "dial_code": "+373",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "dial_code": "+377",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "dial_code": "+976",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "dial_code": "+382",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "dial_code": "+1664",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "dial_code": "+212",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "dial_code": "+258",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "dial_code": "+95",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "dial_code": "+264",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "dial_code": "+674",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "dial_code": "+977",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "dial_code": "+31",
        "code": "NL"
    },
    {
        "name": "Netherlands Antilles",
        "dial_code": "+599",
        "code": "AN"
    },
    {
        "name": "New Caledonia",
        "dial_code": "+687",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "dial_code": "+64",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "dial_code": "+505",
        "code": "NI"
    },
    {
        "name": "Niger",
        "dial_code": "+227",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "dial_code": "+234",
        "code": "NG"
    },
    {
        "name": "Niue",
        "dial_code": "+683",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "dial_code": "+672",
        "code": "NF"
    },
    {
        "name": "Northern Mariana Islands",
        "dial_code": "+1670",
        "code": "MP"
    },
    {
        "name": "Norway",
        "dial_code": "+47",
        "code": "NO"
    },
    {
        "name": "Oman",
        "dial_code": "+968",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "dial_code": "+92",
        "code": "PK"
    },
    {
        "name": "Palau",
        "dial_code": "+680",
        "code": "PW"
    },
    {
        "name": "Palestinian Territory, Occupied",
        "dial_code": "+970",
        "code": "PS"
    },
    {
        "name": "Panama",
        "dial_code": "+507",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "dial_code": "+675",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "dial_code": "+595",
        "code": "PY"
    },
    {
        "name": "Peru",
        "dial_code": "+51",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "dial_code": "+63",
        "code": "PH"
    },
    {
        "name": "Pitcairn",
        "dial_code": "+872",
        "code": "PN"
    },
    {
        "name": "Poland",
        "dial_code": "+48",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "dial_code": "+351",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "dial_code": "+1939",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "dial_code": "+974",
        "code": "QA"
    },
    {
        "name": "Romania",
        "dial_code": "+40",
        "code": "RO"
    },
    {
        "name": "Russia",
        "dial_code": "+7",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "dial_code": "+250",
        "code": "RW"
    },
    {
        "name": "Reunion",
        "dial_code": "+262",
        "code": "RE"
    },
    {
        "name": "Saint Barthelemy",
        "dial_code": "+590",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan Da Cunha",
        "dial_code": "+290",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "dial_code": "+1869",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "dial_code": "+1758",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "dial_code": "+590",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "dial_code": "+508",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "dial_code": "+1784",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "dial_code": "+685",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "dial_code": "+378",
        "code": "SM"
    },
    {
        "name": "Sao Tome and Principe",
        "dial_code": "+239",
        "code": "ST"
    },
    {
        "name": "Saudi Arabia",
        "dial_code": "+966",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "dial_code": "+221",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "dial_code": "+381",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "dial_code": "+248",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "dial_code": "+232",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "dial_code": "+65",
        "code": "SG"
    },
    {
        "name": "Slovakia",
        "dial_code": "+421",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "dial_code": "+386",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "dial_code": "+677",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "dial_code": "+252",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "dial_code": "+27",
        "code": "ZA"
    },
    {
        "name": "South Sudan",
        "dial_code": "+211",
        "code": "SS"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "dial_code": "+500",
        "code": "GS"
    },
    {
        "name": "Spain",
        "dial_code": "+34",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "dial_code": "+94",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "dial_code": "+249",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "dial_code": "+597",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "dial_code": "+47",
        "code": "SJ"
    },
    {
        "name": "Swaziland",
        "dial_code": "+268",
        "code": "SZ"
    },
    {
        "name": "Sweden",
        "dial_code": "+46",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "dial_code": "+41",
        "code": "CH"
    },
    {
        "name": "Syrian Arab Republic",
        "dial_code": "+963",
        "code": "SY"
    },
    {
        "name": "Taiwan",
        "dial_code": "+886",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "dial_code": "+992",
        "code": "TJ"
    },
    {
        "name": "Tanzania, United Republic of Tanzania",
        "dial_code": "+255",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "dial_code": "+66",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "dial_code": "+670",
        "code": "TL"
    },
    {
        "name": "Togo",
        "dial_code": "+228",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "dial_code": "+690",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "dial_code": "+676",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "dial_code": "+1868",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "dial_code": "+216",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "dial_code": "+90",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "dial_code": "+993",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "dial_code": "+1649",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "dial_code": "+688",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "dial_code": "+256",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "dial_code": "+380",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "dial_code": "+971",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "dial_code": "+44",
        "code": "GB"
    },
    {
        "name": "United States",
        "dial_code": "+1",
        "code": "US"
    },
    {
        "name": "Uruguay",
        "dial_code": "+598",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "dial_code": "+998",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "dial_code": "+678",
        "code": "VU"
    },
    {
        "name": "Venezuela, Bolivarian Republic of Venezuela",
        "dial_code": "+58",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "dial_code": "+84",
        "code": "VN"
    },
    {
        "name": "Virgin Islands, British",
        "dial_code": "+1284",
        "code": "VG"
    },
    {
        "name": "Virgin Islands, U.S.",
        "dial_code": "+1340",
        "code": "VI"
    },
    {
        "name": "Wallis and Futuna",
        "dial_code": "+681",
        "code": "WF"
    },
    {
        "name": "Yemen",
        "dial_code": "+967",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "dial_code": "+260",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "dial_code": "+263",
        "code": "ZW"
    }
]

module.exports = { phonePlaceholders, noRegix }