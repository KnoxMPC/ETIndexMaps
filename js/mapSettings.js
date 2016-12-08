//this file defines a number of resources for each map that displays county and tract data.
//it allows us to use one html file rather than having to maintain seperate files
//the first 'identifier' in off the following arrays references each particular map
//for example, 0101_Population is the map that shows population data (Pop density, percent black, etc)
//map.html calls each of the following functions to get the specific setting for the map
//
//An example URL to access a map using these settings:  http://localhost:50755/map.html?map=0101_Population&attribute=PER_BLACK
//     the attribute parameter designates the field/variable to display when the map loads.  
function getCountiesURL(mapName) {
    //this section lists the URLs to the county layer for each of the map.  
    var returnCountiesURL;
    var countyURLs = {};
    countyURLs = {
        "0101_Population": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/PopulationShapefiles2010_2014/FeatureServer/0",
        "0102_FamiliesAndHouseholds": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/FamiliesAndHouseholdIndicators2010_2014/FeatureServer/0",
        "0201_Workforce": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/WorkforceIndicators2010_2014/FeatureServer/0",
        "0501_FinancialResources": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/FinancialResourcesIndicators_2010_2014/FeatureServer/0",
        "0502_FinancialAssistance": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/PeopleReceivingAssistanceIndicators2010_2014/FeatureServer/0",
        "0701_HousingStock": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/VacantHousingIndicators2010_2014/FeatureServer/0",
        "0702_HomeOwnership": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/HomeOwnershipIndicators2010_2014/FeatureServer/0",
        "0703_HousingAffordability": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/HousingAffordabilityIndicators2010_2014/FeatureServer/0",
        "0901_Commuting": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/CommutingIndicators2010_2014/FeatureServer/0"
    };
    return countyURLs[mapName];
}

function getTractsURL(mapName) {
    //this section lists the URLs to the tract layer for each of the map.  
    var tractsURLs = {};
    tractsURLs = {
        "0101_Population": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/PopulationShapefiles2010_2014/FeatureServer/1",
        "0102_FamiliesAndHouseholds": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/FamiliesAndHouseholdIndicators2010_2014/FeatureServer/1",
        "0201_Workforce": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/WorkforceIndicators2010_2014/FeatureServer/1",
        "0501_FinancialResources": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/FinancialResourcesIndicators_2010_2014/FeatureServer/1",
        "0502_FinancialAssistance": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/PeopleReceivingAssistanceIndicators2010_2014/FeatureServer/1",
        "0701_HousingStock": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/VacantHousingIndicators2010_2014/FeatureServer/1",
        "0702_HomeOwnership": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/HomeOwnershipIndicators2010_2014/FeatureServer/1",
        "0703_HousingAffordability": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/HousingAffordabilityIndicators2010_2014/FeatureServer/1",
        "0901_Commuting": "http://services2.arcgis.com/Gypl21NmiWS1cM7h/arcgis/rest/services/CommutingIndicators2010_2014/FeatureServer/1"
    };
    return tractsURLs[mapName];
}

function getAppFields(mapName) {
    //this section controls several settings
    //The first setting is the field name that controls what is shown on the map and in the legend
    //The second setting is a description of that field -- shown in the drop down and pop ups
    //The third setting lists the data type for that field, which is used formatting purposes
        // DEC1 = decimal field with one digit right of the period
        // PER = a percent field with one decimal place and "%" (e.g., "58.9%")
        // INT = Integer. Adds a comma for thousands seperators
    var fields = {};
    fields = {

        "0101_Population": {
            "POPDENSITY": ["Pop. Density (Ppl per Sq. Mile)", "DEC1"],
            "MEDIAN_AGE": ["Median Age", "DEC1"],
            "PER_WHITE": ["Percent White","PER"],
            "PER_BLACK": ["Percent Black", "PER"],
            "PER_AM_IND": ["Percent American Indian", "PER"],
            "PER_ASIAN": ["Percent Asian", "PER"],
            "PER_HAWAII": ["Percent Hawaiian or Pacific Islander", "PER"],
            "PER_OTHER": ["Percent Other Race", "PER"],
            "PER_MULTI": ["Percent Two or More Races", "PER"],
            "PER_HISPAN": ["Percent Hispanic", "PER"]
        },
        "0102_FamiliesAndHouseholds": {
            "PER_FAMILY": ["Percent Family Households", "PER"],
            "PER_SINGLE": ["Percent Single Parent Households", "PER"],
            "PER_SHARE": ["Percent Children Living with Grandparent", "PER"],
            "AV_HH_SIZE": ["Average Household Size","DEC1"]
        },
        "0201_Workforce": {
            "PER_LSHIGH": ["% Workforce Less Than High School", "PER"],
            "PER_HGHGED": ["% Workforce High School Graduate or GED", "PER"],
            "PER_ASSOC": ["% Workforce Some College or Associate's Degree", "PER"],
            "PER_BACHEL": ["% Workforce Bachelor's Degree or Higher", "PER"],
            "UNEMP_RATE": ["Unemployment Rate", "PER"],
            "PER_IN_LAB": ["Percent in labor force", "PER"]
        },
        "0501_FinancialResources": {
            "MED_HH_INC": ["Median Household Income", "DOL"],
            "POVER_RATE": ["Poverty Rate", "PER"],
            "POV18_RATE": ["Poverty Rate for Children", "PER"]

        },
        "0502_FinancialAssistance": {
            "SHARE_HOUS": ["Percent of Households Receiving Public Assistance", "PER"]
        },
        /*"0701_HousingStock": {
            "Year2008": ["Percent Vacant in 2008", "PER"],
            "Year2009": ["Percent Vacant in 2009", "PER"],
            "Year2010": ["Percent Vacant in 2010", "PER"],
            "Year2011": ["Percent Vacant in 2011", "PER"],
            "Year2012": ["Percent Vacant in 2012", "PER"],
            "Year2013": ["Percent Vacant in 2013", "PER"],
            "Year2014": ["Percent Vacant in 2014", "PER"],
            "Year2015": ["Percent Vacant in 2015", "PER"]*/
        "0701_HousingStock": {
            "PER_VACANT": ["Percent Vacant Housing Units", "PER"]
        },
        "0702_HomeOwnership": {
            "OWNER_RATE": ["Homeownership Rate", "PER"],
            "RENTAL_RTE": ["Percent Housing Units Renter Occupied", "PER"]
        },
        "0703_HousingAffordability": {
            "MED_HM_VAL": ["Median Home Value", "DOL"],
            "MED_G_RENT": ["Median Gross Rent", "DOL"] 
        },
        "0901_Commuting": {
            "MEAN_T_WRK": ["Mean Travel Time to Work (minutes)", "INT"],
            "PER_NOVEHI": ["Percent Households with No Vehicle", "PER"]
        }


    };
    return fields[mapName];
}

function getOutFields(mapName) {
    // the 'outFields' variable was included in the ESRI-authored template that we based this map on
    // this data could probabably be read out of the "AppFields" arrays above, but it's probably easiest to just leave it be
    // consider eliminating this if time allows.

    var outFields = {};
    outFields = {

        "0101_Population": ["NAME", "POPDENSITY", "MEDIAN_AGE", "PER_WHITE", "PER_BLACK", "PER_AM_IND", "PER_ASIAN", "PER_HAWAII", "PER_OTHER", "PER_MULTI", "PER_HISPAN"],
        "0102_FamiliesAndHouseholds": ["NAME", "PER_FAMILY", "PER_SINGLE", "PER_SHARE"],
        "0201_Workforce": ["NAME", "PER_LSHIGH", "PER_HGHGED", "PER_ASSOC", "PER_BACHEL", "UNEMP_RATE"],
        "0501_FinancialResources": ["NAME", "MED_HH_INC", "POVER_RATE", "POV18_RATE"],
        "0502_FinancialAssistance": ["NAME", "SHARE_HOUS"],
        //"0701_HousingStock": ["NAME", "Year2008", "Year2009", "Year2010", "Year2011", "Year2012", "Year2013", "Year2014", "Year2015"],
        "0701_HousingStock": ["NAME", "VACANT_RES", "PER_VACANT"],
        "0702_HomeOwnership": ["NAME", "OWNER_RATE", "RENTAL_RTE"],
        "0703_HousingAffordability": ["MED_HM_VAL", "MED_G_RENT"],
        "0901_Commuting": ["MEAN_T_WRK", "PER_NOVEHI"]
    };
    return outFields[mapName];
}

function getCurrentAttribute(mapName){
    // this sets the first field for the map to display when the map loads
    // 
    var CAs = {};
    CAs = {
        "0101_Population": "POPDENSITY",
        "0102_FamiliesAndHouseholds": "PER_FAMILY",
        "0201_Workforce": "PER_BACHEL",
        "0501_FinancialResources": "MED_HH_INC",
        "0502_FinancialAssistance": "SHARE_HOUS",
        //"0701_HousingStock": "Year2015",
        "0701_HousingStock": "PER_VACANT",
        "0702_HomeOwnership": "OWNER_RATE",
        "0703_HousingAffordability": "MED_HM_VAL",
        "0901_Commuting": "MEAN_T_WRK"
    };
    return CAs[mapName];
}

function getPopFormat(mapName) {
    // this section generates content for the popups and lists secondary stats that are displayed when the user clicks a polygon
    // Example:  In the map named 0101_Population, the 'Total Population' should also be included in the pop up when the map is currently showing POPDENSITY
        // the first element in the array is what to display to the user in the popup ("Total Population" in this example)
        // the second element is the field that contains the secondary data ("TOTAL POP")
        // the third element is the data type in the secondary field, for formatting purposes ("INT")

    var popFormats = {};
    popFormats = {
                    "0101_Population": {
                        "POPDENSITY": ["Total Population", "TOTAL_POP", "INT"],
                        "PER_WHITE": ["White Population", "WHITE", "INT"],
                        "PER_BLACK": ["Black Population", "BLACK", "INT"],
                        "PER_AM_IND": ["American Indian Population", "AMERI_IND", "INT"],
                        "PER_ASIAN": ["Asian Population","ASIAN","INT"],
                        "PER_HAWAII": ["Hawaiian or Pacific Islander Population", "HAWAIIAN", "INT"],
                        "PER_OTHER": ["Population of Other Races", "OTHER","INT"],
                        "PER_MULTI": ["Population with Two or More Races","MULTI_RACE","INT"],
                        "PER_HISPAN": ["Hispanic Population","HISPANIC","INT"]
                    },
                    "0102_FamiliesAndHouseholds": {
                        "PER_FAMILY": ["Family Households","FAM_HOUSE", "INT"],
                        "PER_SINGLE": ["Single Parent Households", "SING_HOUSE", "INT"],
                        "PER_SHARE": ["Number of Children Living with Grandparent", "CHILD_GRAN","INT"]
                    },
                    "0201_Workforce": {
               
                        "PER_LSHIGH": ["Workforce with Less than High School Diploma", "LESS_HIGH", "INT"],
                        "PER_HGHGED": ["Workforce with High School Diploma or Equivalent", "HIGH_GED", "INT"],
                        "PER_ASSOC": ["Workforce with Some College or Associate's Degree", "SOME_ASSOC", "INT"],
                        "PER_BACHEL": ["Workforce with Bachelor's Degree", "BACHELORS", "INT"]

                    },
                    "0501_FinancialResources": {
                        "POVER_RATE": ["Population Living in Poverty","POP_POVERT","INT"],
                        "POV18_RATE": ["Children Living in Poverty","POP_POV18", "INT"]
                    },
                    "0502_FinancialAssistance": {
                        "SHARE_HOUS": ["Households receiving public assistance","PUB_ASSIST", "INT"],
                    },
                    "0701_HousingStock": {
                        //this will be over ridden by code in formatInfoWindow(evt) in map.html
                        //"Year2015": ["PercentVacant", "VACANT_RES", "INT"]
                        "PER_VACANT": ["Vacant Housing Units", "VACANT_RES", "INT"]
                    },

                    "0702_HomeOwnership": {
                        "OWNER_RATE": ["Owner Occupied Housing Units","OWNER_OCC", "INT"],
                        "RENTAL_RTE": ["Renter Occupied Housing Units","RENTER_OCC", "INT"]
                    },
                    "0703_HousingAffordability": {},
                    "0901_Commuting": {
                        "PER_NOVEHI": ["Number of Households with No Vehicle", "NOVEHICLE", "INT"]
                    }
    };
    return popFormats[mapName];
}