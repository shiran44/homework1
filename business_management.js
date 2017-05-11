var data   = require('./data/companiesData.json');
var names=[];
exports.array=names;

module.exports={

    allCompanies(){
        for(let i in data.companies){
            var company = data.companies[i];
            console.log(company.name);
            names.push(company.name);
        }
        return ({"names of all companies":names});
    },

    getCompByProfile(Profile_id){
    let foundComp = false;
    for(let i in data.companies){
        var company = data.companies[i];
        if(company.Profile == Profile_id){
            console.log(company.name);
            foundCommp = true;
            return ({"profile of":company});
        }
    }
    if (!foundComp) return ({"error":"no company for this profile"});
    },

    getCompByAmountAndDev(city,devices){
    let found = false;
        for(let i in data.companies){
            var company = data.companies[i];
            if(company.Quantity_of_devices >= devices){
                console.log(company.Quantity_of_devices);
                for (let j in company.Branches){
                    var Branch= company.Branches[j];
                    if(Branch.city == city){
                        console.log(Branch.city);
                        found = true;
                        names.push(company.name);
                    }
                }
            }

        }
    return ({"The company/ies with the amount of devices and this city":names});
    if (!found) return ({"error":"no company for this data"});
    } 
};
